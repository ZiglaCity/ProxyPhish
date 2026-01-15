import { AlertCircle, RefreshCw } from 'lucide-react';

const NoResult = ({ onRefresh, loading }) => {
    return (
        <div className="cyber-card m-4 md:m-10 text-center">
            <div className="flex flex-col items-center gap-3">
                <AlertCircle className="text-cyber-warning" size={48} />
                <p className="text-base md:text-lg font-mono text-cyber-warning">
                    No results found
                </p>
                <p className="text-xs md:text-sm text-cyber-muted">
                    The URL could not be verified. This may be due to a network issue.
                </p>
                <button
                    onClick={onRefresh}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 mt-2 text-sm font-mono text-cyber-blue border border-cyber-blue rounded hover:bg-cyber-blue hover:text-black transition disabled:opacity-50"
                >
                    <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default NoResult;
