import { useState } from 'react';
import NavBar from './components/NavBar';
import AboutSection  from './components/AboutSection';
import SearchBox from './components/SearchBox';
import Info from './components/Info'
import LoadingSpinner from './components/LoadingSpinner';
const BACKEND_URL = 'http://localhost:5000/';

function App() {
    const [loading, setIsLoading] = useState(false);

    async function Search(url){
        setIsLoading(true);
        const result = await fetch(`${BACKEND_URL}api/check-url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url
            })
        } ).
        then((res) => (res.json())).
        then(data => data).
        catch(error => console.log(error))

        if (!result) {
            console.log("No result")
        }
        console.log("The result:", result);
        setIsLoading(false);
    }
    return (
        <>
            <NavBar />
            <SearchBox onSearch={Search} loading={loading}/>
            <LoadingSpinner />
            <Info />
            <AboutSection />    
        </>
    );
}

export default App;
