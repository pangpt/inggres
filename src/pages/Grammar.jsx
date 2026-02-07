import { useState } from 'react';
import { grammarLessons } from '../data/grammar';
import Card from '../components/ui/Card';
import { ChevronDown, ChevronUp, Book } from 'lucide-react';

export default function Grammar() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleLesson = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="p-6 pb-24 min-h-screen">
            <header className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-1">Grammar Corner</h1>
                <p className="text-gray-400 text-sm">Pelajari tata bahasa Inggris dengan mudah.</p>
            </header>

            <div className="space-y-4">
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
                                <h3 className="font-semibold text-white">{lesson.title}</h3>
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
        </div>
    );
}
