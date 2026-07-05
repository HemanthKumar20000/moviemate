import Card from '../components/card'
import UseFetch from '../Hooks/UseFetch';
const MovieList = ({api}) => {
  const movies=UseFetch(api);
  return (
    <div className='m-5'>
      <Card movies={movies}/>
    </div>
  )
}

export default MovieList
