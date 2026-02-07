import { User } from 'lucide-react';

export default function Profile() {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-6">Profile</h1>
            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-2xl mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="text-gray-400" />
                </div>
                <div>
                    <h2 className="font-semibold">Guest User</h2>
                    <p className="text-xs text-gray-500">Learning since 2026</p>
                </div>
            </div>
        </div>
    );
}
