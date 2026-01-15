import { Search } from 'lucide-react';

const Info = () => {
    return (
        <div className="cyber-card m-4 md:m-10 text-center">
            <div className="flex flex-col items-center gap-3">
                <Search className="text-cyber-blue" size={40} />
                <p className="text-cyber-muted text-sm md:text-base">
                    Enter a URL above and click "Scan" to begin analysis
                </p>
                <p className="text-cyber-blue text-xs md:text-sm">
                    Our system will check the URL against multiple security engines
                </p>
            </div>
        </div>
    );
};

export default Info;
