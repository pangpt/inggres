import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { getDailyWord } from '../data/words';
import { Trophy, BookOpen, Volume2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [greeting, setGreeting] = useState('');
    const [dailyWord, setDailyWord] = useState(null);
    const [stats, setStats] = useState({ learned: 0, quizScore: 0 });

    useEffect(() => {
        // Greeting Logic
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');

        // Load Daily Word
        setDailyWord(getDailyWord());

        // Load Stats (Dummy for now, normally from LocalStorage)
        const savedScore = localStorage.getItem('quizHighscore') || 0;
        setStats({ learned: 12, quizScore: savedScore });
    }, []);

    const playAudio = (word) => {
        // Fallback text-to-speech if no audio file
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    if (!dailyWord) return <div className="p-4 text-center">Loading...</div>;

    return (
        <div className="p-6 space-y-8 animate-fade-in pb-24">
            {/* Header */}
            <header>
                <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">{greeting}, Learner</h2>
                <h1 className="text-3xl font-bold text-white">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Master English?</span>
                </h1>
            </header>

            {/* Word of the Day */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <Star className="text-yellow-400" size={20} fill="currentColor" />
                        Word of the Day
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-md border border-gray-700">Daily</span>
                </div>

                <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/30">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-1">{dailyWord.word}</h2>
                            <p className="text-blue-300 font-mono text-sm">{dailyWord.phonetic}</p>
                        </div>
                        <button
                            onClick={() => playAudio(dailyWord.word)}
                            className="p-3 bg-blue-600/20 hover:bg-blue-600 rounded-full text-blue-400 hover:text-white transition-colors"
                        >
                            <Volume2 size={24} />
                        </button>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                            <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Meaning (Arti)</span>
                            <p className="text-gray-200">{dailyWord.meaning}</p>
                            <p className="text-gray-500 text-sm italic mt-1">{dailyWord.translation}</p>
                        </div>

                        <div>
                            <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Example</span>
                            <p className="text-gray-300 italic border-l-2 border-blue-500 pl-3">"{dailyWord.example}"</p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Quick Actions / Stats */}
            <section className="grid grid-cols-2 gap-4">
                <Link to="/dictionary">
                    <Card className="h-full hover:bg-gray-800 transition-colors cursor-pointer group">
                        <div className="bg-emerald-500/20 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <BookOpen className="text-emerald-400" size={20} />
                        </div>
                        <h4 className="font-semibold text-gray-200">Dictionary</h4>
                        <p className="text-xs text-gray-500 mt-1">Search words</p>
                    </Card>
                </Link>
                <Link to="/quiz">
                    <Card className="h-full hover:bg-gray-800 transition-colors cursor-pointer group">
                        <div className="bg-orange-500/20 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <Trophy className="text-orange-400" size={20} />
                        </div>
                        <h4 className="font-semibold text-gray-200">Quiz Time</h4>
                        <p className="text-xs text-gray-500 mt-1">High Score: {stats.quizScore}</p>
                    </Card>
                </Link>
            </section>
        </div>
    );
}
