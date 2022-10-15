import { useEffect, useState } from "react";

// Custom hooks in react must start with the word 'use'
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
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
                setError(e.message);
                setIsLoading(false);
            });
    }, []);

    return { data, isLoading, error };
}

export default useFetch;