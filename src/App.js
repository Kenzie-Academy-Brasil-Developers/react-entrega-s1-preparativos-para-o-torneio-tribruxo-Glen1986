import './App.css';
import { useState, useEffect } from 'react';
import Students from './components/Students';

function App() {

const [students, setStudents] = useState([]);

  useEffect(()=> {
    fetch('http://hp-api.herokuapp.com/api/characters/students/')
    .then((response) => response.json())
    .then((response) => setStudents([...response]))
    .catch((error)   => console.log("Requisition falied"))
    }, []);

  console.log(students)

  return (
    <div className="App">
      <header className="App-header">
        <Students students= {students}/>
     </header>
    </div>
  );
}

export default App;
