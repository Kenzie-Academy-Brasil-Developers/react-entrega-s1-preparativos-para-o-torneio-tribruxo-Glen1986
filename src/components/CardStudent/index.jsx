import './styles.css'
const CardStudent = ({ char: { id, name, image, house, patronus, species}}) =>{

  return(
    <div className ="card">
      <label>{name}</label>
      <label>{house}</label>
      <img className ="picture" src={image} alt={name} />
      <label>{patronus}</label>
    </div>
  )

}
export default CardStudent;
