const LoadingSpinner = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-10"
            role="status"
            aria-live="polite">
        <div className="relative w-16 h-16">
            <div className="w-16 h-16 border-4 border-cyber-muted rounded-full"></div>
            <div className="w-16 h-16 border-4  border-t-[#00ff88] border-transparent rounded-full absolute top-0 left-0 animate-spin"></div>
        </div>
        <div className="mt-4 font-mono text-cyber-green text-lg">SCANNING URL</div>
        <div className="mt-2 font-mono text-cyber-muted text-xs">
            Checking multiple security engines...
        </div>
        </div>
    );
};

export default LoadingSpinner;
