import React,{useState} from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  let [form,setForm] = useState({
    user_email : "",
    user_password : ""
  })

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setForm({...form , [name] : value})
    console.log(form)
  }


  const submitHandle = (event) =>{
    event.preventDefault()
    console.log("submitHandler")
    console.log(form)
    
    const link = "https://amazon-backend-practice.herokuapp.com/api/amazonUser/loginAmazonUser"
    axios.post(link,
        {
          user_email : form.user_email,
          user_password : form.user_password,

        })
        .then((res) => {
            console.log(res)
            if (res.data.success) {
              localStorage.setItem("user_email" , res.data.data.user_email)
              localStorage.setItem("user_password", res.data.data.user_password)
              localStorage.setItem("name" , res.data.data.name)
              localStorage.setItem("id",res.data.data._id)
              window.location="/"
              
          }
          else {
              alert(res.data.message)

          }
        })

   

     

    
    }

    const signUpPage = () =>{
      window.location = "/signUp"
    }
  

  return (
    <div className='mainDiv'>
            <img src="https://www.designyourway.net/blog/wp-content/uploads/2019/09/amazon-logo-700x394.jpg"></img>
            <div className='loginForm'>
                <p className='paraNew'>Sign-in</p>
                <form >
                    <label className='labels'>Email</label>
                    <br></br>
                    <input className='input' type="text" name="user_email" onChange={handleChange}></input>
                    <br></br>
                    <label className='labels' >Password</label>
                    <br></br>
                    <input type="password" className='input' name="user_password" onChange={handleChange}></input>
                    <br></br>
                    <button className='button' onClick={submitHandle}>Sign In</button>
                </form>
                <p className='paraa'>By signing-in you agree to thr AMAZON-FAKE CLONE. Conditions of Use and Safe. Please see our Privacy Notice, our Cookies and our Internet-Based Ad's  </p>
                <button className='newbutt' onClick={signUpPage}>Create your Amazon Account</button>
            </div>
    </div>
  )
}

export default Login