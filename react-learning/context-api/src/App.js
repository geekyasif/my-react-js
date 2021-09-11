import './App.css'
import Books from './Books'
import Navbar from './Navbar'
import AddBook from './AddBook'
import {BookProvider} from './BookContext'


function App() {
  return (
    <BookProvider>
      <div className="App">
          <Navbar/>
          <AddBook/>
          <Books/>
      </div>
    </BookProvider>
  );
}

export default App;
