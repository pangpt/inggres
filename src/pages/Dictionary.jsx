import { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Volume2, Book, AlertCircle } from 'lucide-react';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import Loader from '../components/ui/Loader';

export default function Dictionary() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Debounce search logic can be added, but manual enter is safer for API limits
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
            setResult(response.data[0]);
        } catch (err) {
            setError("Word not found. Try another English word.");
        } finally {
            setLoading(false);
        }
    };

    const playAudio = () => {
        if (!result) return;
        const audioSrc = result.phonetics.find(p => p.audio)?.audio;
        if (audioSrc) {
            new Audio(audioSrc).play();
        } else {
            // Fallback
            const utterance = new SpeechSynthesisUtterance(result.word);
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="p-6 pb-24 min-h-screen">
            <header className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-1">Dictionary</h1>
                <p className="text-gray-400 text-sm">Find meanings and pronunciations</p>
            </header>

            <form onSubmit={handleSearch} className="mb-8 relative">
                <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type a word (e.g., resilience)..."
                    className="pl-12"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </form>

            {loading && <Loader />}

            {error && (
                <div className="flex flex-col items-center justify-center p-8 text-center bg-red-500/10 rounded-2xl border border-red-500/20">
                    <AlertCircle className="text-red-400 mb-2" size={32} />
                    <p className="text-red-200">{error}</p>
                </div>
            )}

            {result && (
                <div className="space-y-6 animate-fade-in">
                    <Card className="border-blue-500/30 bg-blue-900/20">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-2 capitalize">{result.word}</h2>
                                <span className="text-xl text-blue-400 font-mono tracking-wide">{result.phonetic}</span>
                            </div>
                            <button
                                onClick={playAudio}
                                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform active:scale-95"
                            >
                                <Volume2 size={24} />
                            </button>
                        </div>
                    </Card>

                    {result.meanings.map((meaning, index) => (
                        <div key={index} className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-gray-800 rounded-lg text-sm font-semibold text-gray-300 italic">
                                    {meaning.partOfSpeech}
                                </span>
                                <div className="h-px bg-gray-800 flex-1" />
                            </div>

                            <div className="space-y-4">
                                {meaning.definitions.slice(0, 3).map((def, idx) => (
                                    <Card key={idx} className="bg-gray-800/40 hover:bg-gray-800/60 transition-colors">
                                        <p className="text-gray-200 mb-2 leading-relaxed">{def.definition}</p>
                                        {def.example && (
                                            <div className="pl-3 border-l-2 border-blue-500 mt-2">
                                                <p className="text-gray-400 italic text-sm">"{def.example}"</p>
                                            </div>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!result && !loading && !error && (
                <div className="flex flex-col items-center justify-center mt-20 text-gray-600">
                    <Book size={48} className="mb-4 opacity-50" />
                    <p>Start typing to search...</p>
                </div>
            )}
        </div>
    );
}
