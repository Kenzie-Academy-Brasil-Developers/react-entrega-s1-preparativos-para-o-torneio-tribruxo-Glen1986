import './styles.css'
const CardStudent = ({ char: { id, name, image, house, patronus, species}}) =>{

  return(
    <div className ="card">
      <label>{name}</label>
      <label>Casa: {house}</label>
      <img className ="picture" src={image} alt={name} />
      <label>Patron: {patronus}</label>
      <lebel>Specie: {species}</lebel>
    </div>
  )

}
export default CardStudent;
