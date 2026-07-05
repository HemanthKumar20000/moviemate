import React from 'react'
import Card from '../components/card'
import { useSearchParams } from 'react-router-dom';
import UseFetch from '../Hooks/UseFetch';

const Search = ({api,query}) => {
  const [searchparams]=useSearchParams();
  const queryterm=searchparams.get("q");
  const movies=UseFetch(api,queryterm);

  
  return (
    
     <div className='m-5'>
      <Card movies={movies}/>
    </div>
    
  )
}

export default Search
