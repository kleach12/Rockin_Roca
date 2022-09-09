import './OurStory.css'

function OurStory(){
  return(
    <div className ="ourStory" >
      <h2> Our Story </h2>
      <div className = "grid">
        <div className = "grid-1"> We started making Roca in December of ____ and it has became our anuall tradition to make almond rcoa in every chirstmas season</div>
        <img className = "grid-2" src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZbs8PyXBstSRKAMgwYcgEYEMs0WpXDG0SQ&usqp=CAU' alt = "Roca"/>
      </div>
    </div>
  )
}

export default OurStory