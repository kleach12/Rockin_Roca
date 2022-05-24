import './Roca.css'


function Roca({name, price, image}){

  return(
  <div class = "cards">
    <div class="card">
        <img src={image} alt="Avatar" />
        <div class="container">
          <h4>{name}</h4>
          <p>{price}</p>
          <button class = '.btn'>Add to Cart</button>
        </div>
    </div>
  </div>
  )
}

export default Roca