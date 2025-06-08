import { useState } from "react";
import { Search } from "lucide-react";

const SearchBox = ({ onSearch, loading }) => {
    const [url, setUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!url.trim()) return;
        onSearch(url.trim());
    };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto px-4 mt-10">
        <div className="flex">
            <input
                id="url"
                type="text"
                placeholder="Enter a URL to analyze... "
                className="flex-1 px-4 py-3 rounded-l-lg bg-gray-900 text-white placeholder-gray-500 border border-cyber-muted border-r-0 focus:outline-none focus:ring-1 focus:border-cyber-blue"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <button
                type="submit"
                disabled={loading}
                className="px-5 py-3 bg-cyber-green border-1 border-cyber-blue text-white rounded-r-lg hover:bg-green-600 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
            {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
                <>
                <Search size={18} />
                <span>Scan</span>
                </>
            )}
            </button>
        </div>
    </form>

  );
};

export default SearchBox;
