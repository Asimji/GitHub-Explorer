import React, {  useState } from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
 const [search,setSearch]=useState("");
 const [user,setUser]=useState([])
 const [repo,setRepo]=useState([])





 const handleSubmit=(e)=>{
 e.preventDefault();

 fetch(`https://api.github.com/users/${search}`).then(res=>res.json()).then((res)=>{setUser(res);localStorage.setItem("followers",JSON.stringify(res.followers_url))}).catch(e=>alert(e))
 
 fetch(`https://api.github.com/users/${search}/repos`).then(res=>res.json()).then((res)=>{res.length>0?setRepo(res):alert(res.message);localStorage.setItem("detail",JSON.stringify(res))}).catch(e=>alert(e))
 
}                 


 return (
    <div>
       
              <form onSubmit={(e)=>handleSubmit(e)}>
       <input type="text"
        onChange={(e)=>setSearch(e.target.value)} placeholder='Enter Your Github UserName'
        style={{width:'30vh'}}
        />
       <input type="submit"  />
      </form>
      <div style={{display:"flex",alignItems:'center',gap:'10vh'}}>
        <div style={{borderRadius:'50%',width:'20vw',height:'30vh'}}>
            <img src={user.avatar_url} alt="Github Profile" style={{width:'100%',height:'100%',borderRadius:'50%'}} />
        </div>
       <h3>{user.name}</h3>
       {repo.length>0 ? <Link to="/followers">Show Followers</Link> : ""}
      </div>
      <div>
      {repo.length>0 && repo.map((item,i)=>{
                return <div key={item.id} style={{display:'flex',gap:'5vh',border:'2px solid gray',margin:'5vh',padding:'2vh'}}>
                          <Link to={{ pathname: `/${item.name}` }}>{item.name}</Link>
                          <p>{item.description}</p>
                         
                </div>
      })}
      </div>
    </div>
  )
}

export default HomePage
