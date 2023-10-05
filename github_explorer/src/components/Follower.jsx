import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Follower = () => {
    const [follower,setFollower]=useState([])
    const [open,setOpen]=useState(false)
    const [single,setSingle]=useState([]);

  
    
    const followerUrl=JSON.parse(localStorage.getItem('followers'));

    useEffect(()=>{
     fetch(followerUrl).then(res=>res.json()).then(res=>setFollower(res)).catch(e=>console.log(e))
     },[followerUrl])

     

     const handleChange=(name)=>{
        setOpen(!open)
        fetch(`https://api.github.com/users/${name}/repos`).then(res=>res.json()).then(res=>setSingle(res)).catch(e=>console.log(e))
    }              

  return (
    <div>
        <div style={{textAlign:'left'}}>

        <Link to={'/'}>back</Link>
        </div>
<h1>My Followers</h1>
   
    <div style={open ? {display:'flex',gap:'10vh'}:{display:'block'}}>
        
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1vh'}}>
      {follower.length>0 && follower.map((item,i)=>{
        return <div key={item.id} style={{padding:'2vh',alignItems:'center'}} >
      
            <div style={{width:'20vw',height:'30vh'}} onClick={()=>handleChange(item.login)}>
            <img src={item.avatar_url} alt={"follower Name"} style={{width:'100%',height:'100%',borderRadius:'50%'}}  />
            </div>
    <div style={{width:'40vh'}}>

            <h3 >{item.login}</h3>
            <Link to={`https://api.github.com/users/${item.login}`} target='_blank'>Github Visit Link</Link>
    </div>
        </div>
      })}
    </div>
      <div style={{border:'2px solid gray'}}>
        <h1>Repository Details</h1>
        {open ? <div>
            { Array.isArray(single) &&  single.map((item,i)=>{
        return <div key={item.id} style={{display:'flex',gap:'2vh',alignItems:'center',textAlign:'left'}}>
        <li>{item.name}</li>
        <p style={{color:'teal'}}>{item.description}</p>
       
</div>
      })}
        </div> : ""}
      </div>
    </div>
    </div>
  )
}

export default Follower
