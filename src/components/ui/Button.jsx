export default function Button({ children, variant = 'primary', className = "", ...props }) {
    const baseStyles = "px-4 py-2 rounded-xl font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-500/20",
        secondary: "bg-gray-700 hover:bg-gray-600 text-white",
        ghost: "bg-transparent hover:bg-white/5 text-gray-400 hover:text-white",
        outline: "border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
