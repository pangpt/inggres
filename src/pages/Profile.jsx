import { useState, useEffect } from 'react';
import { User, Trophy, Star, Trash2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Profile() {
    const [stats, setStats] = useState({ score: 0 });

    useEffect(() => {
        const score = parseInt(localStorage.getItem('quizHighscore') || '0');
        setStats({ score });

        // Simulate words learned based on score (just for demo)
        // Normally this would be a real count
    }, []);

    const getLevel = (score) => {
        if (score > 50) return { label: "Master", color: "text-purple-400" };
        if (score > 20) return { label: "Advanced", color: "text-blue-400" };
        if (score > 10) return { label: "Intermediate", color: "text-green-400" };
        return { label: "Beginner", color: "text-gray-400" };
    };

    const clearData = () => {
        if (confirm("Apakah Anda yakin ingin menghapus semua data progres?")) {
            localStorage.clear();
            window.location.reload();
        }
    };

    const level = getLevel(stats.score);

    return (
        <div className="p-6 pb-24 min-h-screen">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-1">Profil Saya</h1>
            </header>

            <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-2xl mb-8 border border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white shadow-lg">
                    <User size={32} />
                </div>
                <div>
                    <h2 className="font-bold text-lg text-white">Learner</h2>
                    <p className={`font-medium ${level.color}`}>{level.label}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="bg-gray-800/50">
                    <div className="flex items-center gap-2 mb-2 text-yellow-400">
                        <Trophy size={20} />
                        <span className="text-xs font-bold uppercase tracking-wide">High Score</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stats.score}</p>
                </Card>
                <Card className="bg-gray-800/50">
                    <div className="flex items-center gap-2 mb-2 text-blue-400">
                        <Star size={20} />
                        <span className="text-xs font-bold uppercase tracking-wide">Level</span>
                    </div>
                    <p className="text-2xl font-bold text-white truncate">{level.label}</p>
                </Card>
            </div>

            <div className="space-y-4">
                <h3 className="text-gray-400 text-sm uppercase font-bold tracking-wider">Pengaturan</h3>
                <button
                    onClick={clearData}
                    className="w-full flex items-center gap-3 p-4 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors border border-red-500/10"
                >
                    <Trash2 size={20} />
                    <span className="font-medium">Reset Data (Hapus Progres)</span>
                </button>
            </div>

            <div className="mt-8 text-center text-gray-600 text-sm">
                <p>InggrisPro v1.0.0</p>
                <p>Created by You</p>
            </div>
        </div>
    );
}
