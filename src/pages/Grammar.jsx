import { useState } from 'react';
import { grammarLessons } from '../data/grammar';
import { commonMistakes } from '../data/mistakes';
import Card from '../components/ui/Card';
import { ChevronDown, ChevronUp, Book, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function Grammar() {
    const [activeTab, setActiveTab] = useState('grammar'); // 'grammar' | 'mistakes'
    const [expandedId, setExpandedId] = useState(null);

    const toggleLesson = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="p-6 pb-24 min-h-screen">
            <header className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-1">
                    {activeTab === 'grammar' ? 'Grammar Corner' : 'Common Mistakes'}
                </h1>
                <p className="text-gray-400 text-sm">
                    {activeTab === 'grammar'
                        ? 'Pelajari tata bahasa Inggris dengan mudah.'
                        : 'Perbaiki kesalahan umum agar terdengar natural.'}
                </p>
            </header>

            {/* Tabs */}
            <div className="flex bg-gray-800 p-1 rounded-xl mb-6">
                <button
                    onClick={() => setActiveTab('grammar')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'grammar'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                >
                    Materi Grammar
                </button>
                <button
                    onClick={() => setActiveTab('mistakes')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'mistakes'
                            ? 'bg-red-500 text-white shadow-lg'
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                >
                    Common Mistakes
                </button>
            </div>

            {/* Content: Grammar */}
            {activeTab === 'grammar' && (
                <div className="space-y-4 animate-fade-in">
                    {grammarLessons.map((lesson) => (
                        <Card
                            key={lesson.id}
                            className="transition-all duration-300 border-l-4 border-l-blue-500 hover:bg-gray-800"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleLesson(lesson.id)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-500/20 p-2 rounded-lg">
                                        <Book size={20} className="text-blue-400" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-white">{lesson.title}</h3>
                                        <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full w-fit mt-1 uppercase tracking-wider">
                                            {lesson.category}
                                        </span>
                                    </div>
                                </div>
                                {expandedId === lesson.id ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                            </div>

                            {expandedId === lesson.id && (
                                <div className="mt-4 pt-4 border-t border-gray-700 space-y-3 animate-fade-in">
                                    <p className="text-gray-300 text-sm">{lesson.description}</p>

                                    {lesson.formula && (
                                        <div className="bg-black/30 p-3 rounded-lg border border-gray-700">
                                            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Rumus</span>
                                            <p className="text-blue-300 font-mono text-sm mt-1">{lesson.formula}</p>
                                        </div>
                                    )}

                                    {lesson.content && (
                                        <p className="text-gray-300 font-medium">{lesson.content}</p>
                                    )}

                                    {lesson.examples && (
                                        <div className="space-y-2">
                                            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Contoh</span>
                                            {lesson.examples.map((ex, idx) => (
                                                <div key={idx} className="text-sm">
                                                    <p className="text-white">"{ex.en}"</p>
                                                    <p className="text-gray-500 italic">{ex.id}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            )}

            {/* Content: Mistakes */}
            {activeTab === 'mistakes' && (
                <div className="space-y-4 animate-fade-in">
                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="text-yellow-500 shrink-0" size={20} />
                        <p className="text-yellow-200 text-sm">Pelajari kesalahan ini agar bahasa Inggrismu terdengar lebih natural seperti native speaker!</p>
                    </div>

                    {commonMistakes.map((item) => (
                        <Card key={item.id} className="bg-gray-800 space-y-3">
                            {/* Wrong */}
                            <div className="flex items-start gap-3 bg-red-500/10 p-3 rounded-lg border border-red-500/10">
                                <XCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                                <div>
                                    <p className="text-red-300 font-medium line-through decoration-red-500/50">{item.wrong}</p>
                                    <span className="text-[10px] text-red-400/80 uppercase tracking-widest font-bold">Salah (Don't say)</span>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="flex items-start gap-3 bg-green-500/10 p-3 rounded-lg border border-green-500/10">
                                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                                <div>
                                    <p className="text-green-300 font-bold">{item.right}</p>
                                    <span className="text-[10px] text-green-400/80 uppercase tracking-widest font-bold">Benar (Say this)</span>
                                </div>
                            </div>

                            <div className="pl-2 border-l-2 border-gray-600">
                                <p className="text-gray-400 text-sm italic">💡 {item.explanation}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
