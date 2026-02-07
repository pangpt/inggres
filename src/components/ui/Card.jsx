export default function Card({ children, className = "" }) {
    return (
        <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-xl ${className}`}>
            {children}
        </div>
    );
}
