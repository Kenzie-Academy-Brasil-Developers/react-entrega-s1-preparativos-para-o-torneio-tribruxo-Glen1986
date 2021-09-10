import './styles.css'
const CardStudent = ({ char: { id, name, image, house, patronus, species}}) =>{

  return(
    <div className ="card">
      <label>{name}</label>
      <label>Casa: {house}</label>
      <img className ="picture" src={image} alt={name} />
      <label> Patronus: {patronus}</label>
      <label>Specie: {species}</label>
    </div>
  )

}
export default CardStudent;
