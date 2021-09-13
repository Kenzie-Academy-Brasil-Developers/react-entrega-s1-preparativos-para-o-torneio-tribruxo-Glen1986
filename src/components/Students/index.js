import CardStudent from '../CardStudent/'
import './styles.css'

const Students =({Filtrar, students, setStudents, filtStudent, setFiltStudent})=>{
  return(
<>
  <h1>Meus personagens</h1>
  <div className="container">
    {
      students.map(char => <CardStudent key={char.id} char={char}/>)
    }
  </div>
</>
  )
}

export default Students;
