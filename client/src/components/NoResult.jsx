const NoResult = () => {
    return (
        <div className="mt-10 text-center">
            <p className="text-lg font-mono text-cyber-warning">No results found.</p>
            <p className="text-sm text-gray-400 mt-2">
                The URL couldn't be verified. Please check and try again.
            </p>
        </div>
    );
};

export default NoResult;
