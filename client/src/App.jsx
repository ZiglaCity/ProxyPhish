import { useState } from 'react';
import NavBar from './components/NavBar';
import AboutSection  from './components/AboutSection';
import SearchBox from './components/SearchBox';
import Info from './components/Info'
import LoadingSpinner from './components/LoadingSpinner';
import Result from './components/Result';
const BACKEND_URL = 'http://localhost:5000/';

function App() {
    const [loading, setIsLoading] = useState(false);
    const [hasResult, setHasResut] = useState(false);
    const [results, setResults] = useState(null);

    function Search(url){
        setIsLoading(true);
        fetch(`${BACKEND_URL}api/check-url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        })
        .then(res => {
            if (!res.ok) {
                console.log("No result");
                setIsLoading(false);
                throw new Error("Request failed");
            }
            return res.json();
        })
        .then(data => {
            if( !data || !data?.data?.data?.attributes?.results){
                // create and return the 404 page later here (Sorry No results found for ${url}) ....
                return
            }
            console.log("The result:", data);
            setResults(data);
            setHasResut(true);
            setIsLoading(false);
        })
        .catch(error => {
            console.log("Error fetching data:", error);
            setIsLoading(false);
        });
    }
    return (
        <>
            <NavBar />
            <SearchBox onSearch={Search} loading={loading}/>
            { loading ? <LoadingSpinner /> : hasResult ? <Result results={results} /> : <Info /> }
            <AboutSection />    
        </>
    );
}

export default App;
