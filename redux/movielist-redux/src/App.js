import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import TotalMovies from './TotalMovies';

function App() {
  const movies = useSelector(state => state.movies)
  const dispatch = useDispatch();


  return (
    <div className="App">
      <TotalMovies />
      <button onClick={ ()=> dispatch({ type: "AddMovie", payload: {id: 8, name: "new movies", desc: "new decs"}})}>Click me to add new movies </button>
      <h1>List of all Movies</h1>
      {
        movies['movies'].map((movie) => <p key={movie['id']}>{movie['name']}</p>)
      }

      
    </div>
  );
}

export default App;
