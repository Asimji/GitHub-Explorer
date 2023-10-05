import React from 'react'
import { Link,  useParams } from 'react-router-dom'

const SinglePage = () => {
    const {name}=useParams()
    
    const detail=JSON.parse(localStorage.getItem("detail"))||[];

    const user=detail.filter((item)=>item.name===name)

    
   
  return (
    <div>
       <div style={{textAlign:'left'}}>
         <Link to="/">back</Link>
        </div>
     <h2>Repository Details</h2>
     <div style={{border:'1px solid gray',padding:'2vh'}}>
        <h4>Repository Name: <span style={{color:'red'}}>{user[0]?.name}</span></h4>
        <h4> <span style={{color:'teal',fontWeight:'bold'}}> Desciption: </span> {user[0]?.description}</h4>
     </div>
    </div>
  )
}

export default SinglePage
