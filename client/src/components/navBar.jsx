import { Shield } from 'lucide-react';

const NavBar = () => {
    return (
        <nav className="w-full py-6 px-4 text-center border-b border-gray-700">
            <h1 className="text-3xl font-bold text-white flex justify-center items-center">
                Proxy<span className="text-green-700">Phish</span>
               <Shield className="text-green-700" size={32} />
            </h1>
            <p className="text-sm text-gray-400 mt-2">
                Check if a URL is legit or a trap!
            </p>
        </nav>
    );
};

export default NavBar;
