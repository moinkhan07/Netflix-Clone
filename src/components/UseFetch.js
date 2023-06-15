import {useState,useEffect} from 'react'

const UseFetch = (url) => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        const getData = async ()=>{
            let res = await fetch(url);
            let fetchedData = await res.json();
            setData(fetchedData);
            
        }
        getData();
    },[])
  return data;
}

export default UseFetch;