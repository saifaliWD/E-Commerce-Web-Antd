import axios from "./axios";
import { useState } from "react"
import { useEffect } from "react"
import './App.css'

function App() {

  const[myData,setMyData]=useState([])
  const[IsError,setIsError]=useState()

  // let API="https://jsonplaceholder.typicode.com";


//Using async await
 

  const  getApi= async()=>{

    try {
      const res= await axios.get("/posts")
    setMyData(res.data)

      
    } catch (error) {
      setIsError(error.message)
      
    }

    
  }


  //using fetch method

//   async function getdata(url){
   

//     let res= await fetch(url)
//     let json= await res.json()

   
//    console.log(json)


//   }
// getdata("https://jsonplaceholder.typicode.com/posts")



  useEffect(()=>{

    // axios
    // .get("https://jsonplaceholder.typicode.com/posts")
    // .then((res)=>(
      
    //  setMyData(res.data)

    // ))
    // .catch((error)=>setIsError(error.message))
    // getApi(`${API}/posts`)
    getApi()



  },[])
  


  


  


  return (
    
    <>
     <h1>Axios</h1>
      {IsError != " " && <h2>{IsError}</h2>}     
      <div className="grid">
        {myData.slice(0,10).map((posts)=>{
          const{id,title,body}=posts;
         return <div className="card" key={id}>
          <h2>{title.slice(0,10).toUpperCase()}</h2>
          <p>{body.slice(0,100)}</p>
          </div>
        })}
      </div>
      

    </>
  )
    
}

export default App
