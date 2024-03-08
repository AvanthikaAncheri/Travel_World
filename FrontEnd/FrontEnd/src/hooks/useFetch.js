import {useEffect, useState} from 'react'

const useFetch = (url) => {

    const [data, setdata] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
    
            try {
                const res = await fetch(url);
    
                if (!res.ok) {
                    seterror(`Failed to fetch. Status: ${res.status}`);
                }
    
                const result = await res.json();
                setdata(result.data);
            } catch (error) {
                console.error('Error during fetch:', error);
                seterror(error.message);
            } finally {
                setloading(false);
            }
        };
    
        fetchData();
    }, [url]);
    

    return{
        data,
        error,
        loading,
    }
}

export default useFetch