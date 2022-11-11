import React,{useState} from 'react'
import {Link} from 'react-router-dom'


const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [loggedIn,setLoggedIn]=useState(false)
    const [error,setError]=useState(false)
    let access=2;
    var text='welcome'
    
    const handleForm=(e)=>{
        e.preventDefault()
        console.log(username,password)
        if(username==='abhay' && password==='admin'){
            alert('success')
            
         
            
            
        }
        else{
            alert("false")
            
        }
        
    }
   
  return (
    <div width={['40%' ]} m='auto' mt={['50px']}>
        <h1>{text}</h1>
        <Link></Link>
        <form style={{display:'grid'}} onSubmit={handleForm} > 
            <input value={username} onChange={(e)=>setUsername(e.target.value)} mb='10px' type='text' placeholder='Username' name='username' />
            <input value={password}  onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='password'  name='password'/>
            <button w='60px' mt={['10px']} border='1px solid black'>Submit</button>

        </form>
    </div>
  )
}

export default Login