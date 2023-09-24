import React,{useState} from 'react'
const App=()=>{
  const [data,setData]=useState({
    username:"",
    email:"",
    password:"",
    conformpassword:""
  })
  const{username,email,password,conformpassword}=data;
  const changeHandler=e=>{
       setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    if(username.length <= 5){
      alert("User name must be more than 5 char");
    }else if(password !== conformpassword){
      alert("passwords are not same");
    }else{
      console.log(data);
    }
    
  }
  return (
    <div>
      <center>
           <form onSubmit={submitHandler} >
            <input type="text" placeholder="username" name="username" value={username}  onChange={changeHandler} / ><br/>
            <input type="email" placeholder="email" name="email" value={email} onChange={changeHandler}/> <br/>
            <input type="password" placeholder="password" name="password" value={password} onChange={changeHandler}/> <br/>
            <input type="password" placeholder="conform password" name="conformpassword" value={conformpassword} onChange={changeHandler}/> <br/>
            <input type="submit" name="submit" />
           </form>
      </center>

    </div>
  )
}
export default App;
