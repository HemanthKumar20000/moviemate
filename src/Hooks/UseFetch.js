import { useState ,useEffect} from 'react'
const UseFetch = (apipath,query="") => {
    const [data,setData]=useState([])
    const url=`https://api.themoviedb.org/3/${apipath}?api_key=9df23dcae8db0253d93fe6ed0ceba731&query=${query}`
    useEffect(()=>{
        async function fetchMovies(){
          const response = await fetch(url);
          const result=await response.json()
          setData(result.results);  
        }
        fetchMovies();
      },[url])
  return (
    data
  )
}

export default UseFetch
