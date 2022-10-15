import { useEffect, useState } from "react";


// Custom hooks in react must start with the word 'use'
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortCont = new window.AbortController();

    useEffect(() => {
        setTimeout( () => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data!');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            }).catch((e) => {
                if(e.name==='AbortError') {
                    console.log('Aborted!');
                } else {
                    setError(e.message);
                    setIsLoading(false);
                }
            });
        }, 1000);
        return () => {
            abortCont.abort();
        };
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;