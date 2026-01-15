import { Shield } from 'lucide-react';

const NavBar = () => {
    return (
        <nav className="w-full py-4 md:py-6 px-4 text-center border-b border-cyber-border">
            <h1 className="text-2xl md:text-3xl font-bold text-white flex justify-center items-center gap-1">
                Proxy<span className="font-mono text-cyber-green">Phish</span>
                <Shield className="text-cyber-green" size={28} />
            </h1>
            <p className="text-xs md:text-sm text-cyber-muted mt-1 md:mt-2">
                Check if a URL is legit or a trap
            </p>
        </nav>
    );
};

export default NavBar;
