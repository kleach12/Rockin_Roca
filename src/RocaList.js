import {useEffect, useState} from 'react'
import './RocaList.css'
import Roca from './Roca'


function RocaList(){
  const [candies, setCandies] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/roca')
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      setCandies(data)
    })
  },[])

  const candyArr = candies.map((candy) => (
    <Roca name = {candy.name} price = {candy.price} image = {candy.image}/>
  ))


  return(
    <div id = "RocaList" >
      <h2>Roca</h2>
      <div class = "cards">
        {candyArr}
      </div>
    </div>
  )
}

export default RocaList