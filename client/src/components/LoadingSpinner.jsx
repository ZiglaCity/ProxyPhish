const LoadingSpinner = () => {
    return (
        <div
            className="cyber-card m-4 md:m-10 flex flex-col items-center justify-center py-8"
            role="status"
            aria-live="polite"
        >
            <div className="relative w-14 h-14 md:w-16 md:h-16">
                <div className="w-14 h-14 md:w-16 md:h-16 border-4 border-gray-700 rounded-full"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 border-4 border-t-cyber-green border-transparent rounded-full absolute top-0 left-0 animate-spin"></div>
            </div>
            <div className="mt-4 font-mono text-cyber-green text-base md:text-lg">
                SCANNING URL
            </div>
            <div className="mt-1 font-mono text-cyber-muted text-xs">
                Checking multiple security engines...
            </div>
        </div>
    );
};

export default LoadingSpinner;
