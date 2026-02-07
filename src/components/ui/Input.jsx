export default function Input({ className = "", ...props }) {
    return (
        <input
            className={`w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all ${className}`}
            {...props}
        />
    );
}
