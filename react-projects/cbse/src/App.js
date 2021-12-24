import './App.css';
import {useEffect} from 'react';
import firebse from 'firebase'

function App() {
  // const [subject, setSubject] = useState([]);

  useEffect(  () => {
    firestore.collection('todos').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data().todo))
        })
  }, [])

  return (
    <div className="App">
      <p>Subjects</p>
      <div className="subject-list">
        <ul>
          <li>Physics</li>
          <li>chemistry</li>
          <li>Maths</li>
          <li>Physics</li>
          <li>Physics</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
