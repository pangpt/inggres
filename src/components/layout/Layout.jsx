import { Outlet, NavLink } from 'react-router-dom';
import { Home, Book, Brain, User, Library } from 'lucide-react';

export default function Layout() {
    return (

        <div className="min-h-screen bg-gray-900 text-white font-sans md:max-w-md md:mx-auto relative md:shadow-2xl overflow-hidden md:border-x border-gray-800">
            <main className="pb-24 min-h-screen overflow-y-auto custom-scrollbar">
                <Outlet />
            </main>

            <nav className="fixed bottom-0 left-0 right-0 md:max-w-md md:mx-auto bg-gray-900/90 backdrop-blur-md border-t border-gray-800 px-2 py-3 flex justify-around items-center z-50">
                <NavItem to="/" icon={<Home size={20} />} label="Home" />
                <NavItem to="/dictionary" icon={<Book size={20} />} label="Kamus" />
                <NavItem to="/grammar" icon={<Library size={20} />} label="Grammar" />
                <NavItem to="/quiz" icon={<Brain size={20} />} label="Kuis" />
                <NavItem to="/profile" icon={<User size={20} />} label="Profil" />
            </nav>
        </div>
    );
}

function NavItem({ to, icon, label }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-blue-500' : 'text-gray-500 hover:text-gray-300'}`
            }
        >
            {icon}
            <span className="text-[10px] font-medium">{label}</span>
        </NavLink>
    );
}
