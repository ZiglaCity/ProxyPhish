import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import SearchBox from './components/SearchBox';
import Info from './components/Info';
import LoadingSpinner from './components/LoadingSpinner';
import Result from './components/Result';
import NoResult from './components/NoResult';

const BACKEND_URL = 'http://localhost:5000/';

function App() {
    const [loading, setIsLoading] = useState(false);
    const [hasResult, setHasResult] = useState(false);
    const [results, setResults] = useState(null);
    const [searchedWithoutResult, setSWR] = useState(false);

    function Search(url) {
        if (!url) {
            toast.error('Please enter a valid URL');
            return;
        }

        setIsLoading(true);
        setSWR(false);
        setHasResult(false);

        fetch(`${BACKEND_URL}api/check-url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Request failed with status ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                if (!data || !data?.data?.data?.attributes?.results || !data?.formatedData || data?.formatedData.length === 0) {
                    toast.error('No analysis data found for this URL');
                    setSWR(true);
                    setHasResult(false);
                    setIsLoading(false);
                    return;
                }
                toast.success('URL analysis complete');
                setResults(data);
                setHasResult(true);
                setSWR(false);
            })
            .catch(error => {
                toast.error(error.message || 'Failed to analyze URL');
                setHasResult(false);
                setSWR(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#101116',
                        color: '#fff',
                        border: '1px solid #0abdc6'
                    },
                    success: {
                        iconTheme: {
                            primary: '#00ff41',
                            secondary: '#101116'
                        }
                    },
                    error: {
                        iconTheme: {
                            primary: '#ff2a6d',
                            secondary: '#101116'
                        }
                    }
                }}
            />
            <NavBar />
            <SearchBox onSearch={Search} loading={loading} />
            {searchedWithoutResult && <NoResult />}
            {loading ? <LoadingSpinner /> : hasResult ? <Result results={results} /> : <Info />}
            <AboutSection />
        </>
    );
}

export default App;
