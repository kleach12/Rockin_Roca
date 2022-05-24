import './Roca.css'


function Roca({name, price, image}){

  return(
  <div class = "cards">
    <div class="card">
        <img src={image} alt="Avatar" />
        <div class="container">
          <h4><b>{name}</b></h4>
          <p>{price}</p>
        </div>
    </div>
  </div>
  )
}

export default Roca