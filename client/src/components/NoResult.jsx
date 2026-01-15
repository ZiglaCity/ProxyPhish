import { AlertCircle } from 'lucide-react';

const NoResult = () => {
    return (
        <div className="cyber-card m-4 md:m-10 text-center">
            <div className="flex flex-col items-center gap-3">
                <AlertCircle className="text-cyber-warning" size={48} />
                <p className="text-base md:text-lg font-mono text-cyber-warning">
                    No results found
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                    The URL could not be verified. Please check the URL and try again.
                </p>
            </div>
        </div>
    );
};

export default NoResult;
