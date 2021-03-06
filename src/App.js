import './App.css'
import { useEffect, useState } from "react";
import Students from "./components/Students";

function App() {
  const [students, setStudents] = useState([]);
  const [theChosen, setTheChosen] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students/")
      .then((response) => response.json())
      .then((response) => setStudents([...response]))
      .catch((err) => console.log(err));
  }, []);

  const theChamps = () => {
    let chosen = [];
    const randomPerson1 = Math.floor(Math.random() * students.length);
    chosen.push(students[randomPerson1]);
    const filterToDifferentPerson1 = students.filter(
      (student) => student.house !== chosen[0].house
    );
    const randomPerson2 = Math.floor(
      Math.random() * filterToDifferentPerson1.length
    );
    chosen.push(filterToDifferentPerson1[randomPerson2]);
    const filterToDifferentPerson2 = filterToDifferentPerson1.filter(
      (student) => student.house !== chosen[1].house
    );
    const randomPerson3 = Math.floor(
      Math.random() * filterToDifferentPerson2.length
    );
    chosen.push(filterToDifferentPerson2[randomPerson3]);
    setTheChosen(chosen);
  };

  return (
    <div className="App">
      <div className="Box">
        <h1>Torneio Tribruxo</h1>
        <h2>Clique para achar os campeões</h2>
        <button onClick={theChamps}>
             Champions
        </button>
      </div>

      <div>
        <div className="boxBruxos">
          <Students students={theChosen} />
        </div>
      </div>
    </div>
  );
}
export default App;
