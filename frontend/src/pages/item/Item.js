import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/navbar/NavBar'
import CardItem from '../../components/cardItem/CardItem'
import AddCrad from '../../components/addCard/AddCrad'


const Item = () => {
    const {id } = useParams()
    const [data,setData] = useState([])
    console.log(data)

    useEffect(()=>{
      const url = `http://localhost:2000/api/item/bycategory/${id}`;
      axios.get(url).
      then(response =>{
          console.log(response.data.response)
          setData(response.data.response)
      }).catch(err =>{
          console.log(err)
      })
  },[])
    
  return (
    <div>
      <NavBar />
      <CardItem/>
      <div>
      {/* <button>open popup</button> */}
        <AddCrad trigger={false}>

        </AddCrad>

      </div>

    </div>
  )
}

export default Item