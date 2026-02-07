import { useState } from 'react';
import confetti from 'canvas-confetti';
import { questions } from '../data/questions';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Trophy, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswerOptionClick = (option) => {
        const correct = option === questions[currentQuestion].answer;
        setSelectedAnswer(option);
        setIsCorrect(correct);

        if (correct) {
            setScore(score + 1);
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.8 },
                colors: ['#3b82f6', '#10b981']
            });
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setShowScore(true);
                handleEndQuiz(score + (correct ? 1 : 0));
                confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: { y: 0.6 }
                });
            }
        }, 1500);
    };

    const handleEndQuiz = (finalScore) => {
        const highscore = localStorage.getItem('quizHighscore') || 0;
        if (finalScore > highscore) {
            localStorage.setItem('quizHighscore', finalScore);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    return (
        <div className="p-6 pb-24 min-h-screen flex flex-col items-center justify-center">
            {showScore ? (
                <Card className="text-center p-8 w-full max-w-sm animate-scale-in border-blue-500/50 bg-blue-900/20">
                    <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy size={40} className="text-yellow-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Quiz Completed!</h2>
                    <p className="text-gray-300 mb-6">You scored <span className="text-blue-400 font-bold text-xl">{score}</span> out of {questions.length}</p>
                    <Button onClick={resetQuiz} className="w-full">
                        <RefreshCw size={18} /> Play Again
                    </Button>
                </Card>
            ) : (
                <div className="w-full max-w-md space-y-6">
                    <div className="flex justify-between items-center text-sm text-gray-400 uppercase tracking-widest font-semibold">
                        <span>Question {currentQuestion + 1}/{questions.length}</span>
                        <span>Score: {score}</span>
                    </div>

                    <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        />
                    </div>

                    <Card className="min-h-[160px] flex items-center justify-center text-center">
                        <h2 className="text-xl font-semibold text-white">
                            {questions[currentQuestion].question}
                        </h2>
                    </Card>

                    <div className="grid gap-3">
                        {questions[currentQuestion].options.map((option) => {
                            let buttonVariant = "secondary";
                            let icon = null;

                            if (selectedAnswer === option) {
                                buttonVariant = isCorrect ? "primary" : "outline"; // outline with red border logic needs custom css or generic
                                // Simple override for this specific case
                            }

                            return (
                                <button
                                    key={option}
                                    disabled={selectedAnswer !== null}
                                    onClick={() => handleAnswerOptionClick(option)}
                                    className={`
                        w-full p-4 rounded-xl font-medium text-left transition-all duration-200 flex justify-between items-center
                        ${selectedAnswer === null
                                            ? 'bg-gray-800 hover:bg-gray-700 text-white'
                                            : selectedAnswer === option
                                                ? isCorrect
                                                    ? 'bg-green-600 text-white border-green-500' // Correct
                                                    : 'bg-red-600 text-white border-red-500' // Wrong
                                                : 'bg-gray-800/50 text-gray-500' // Others
                                        }
                    `}
                                >
                                    {option}
                                    {selectedAnswer === option && (
                                        isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
