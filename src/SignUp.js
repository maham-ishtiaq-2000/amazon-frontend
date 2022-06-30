import React,{useState , useEffect} from 'react';
import axios from 'axios';
import './Login.css';

const SignUp = () => {
    let [form,setForm] = useState({
        user_email : "",
        user_password : "",
        name : ""
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
        
        const link = "https://amazon-backend-practice.herokuapp.com/api/amazonUser/addAnAmazonUser"
        axios.post(link,
            {
              user_email : form.user_email,
              user_password : form.user_password,
              name : form.name
    
            })
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                  alert("User signed successfully")
                  window.location="/login"
                  
              }
              else {
                  alert(res.data.message)
    
              }
            })
    
        }

        const loginPage = () =>{
            window.location = "/login"
        }
  return (
    <div className='mainDiv'>
            <img src="https://www.designyourway.net/blog/wp-content/uploads/2019/09/amazon-logo-700x394.jpg"></img>
            <div className='loginForm'>
                <p className='paraNew'>Sign-Up</p>
                <form >
                    <label className='labels'>Email</label>
                    <br></br>
                    <input className='input' type="text" name="user_email" onChange={handleChange}></input>
                    <br></br>
                    <label className='labels' >User Name</label>
                    <br></br>
                    <input type="text" className='input' name="name" onChange={handleChange}></input>
                    <br></br>
                    <label className='labels' >Password</label>
                    <br></br>
                    <input type="password" className='input' name="user_password" onChange={handleChange}></input>
                    <br></br>
                    <button className='button' onClick={submitHandle}>Sign Up</button>
                </form>
                <p className='paraa'>By signing-in you agree to thr AMAZON-FAKE CLONE. Conditions of Use and Safe. Please see our Privacy Notice, our Cookies and our Internet-Based Ad's  </p>
                <button className='newbutt' onClick={loginPage}>Already have an accout</button>
            </div>
    </div>
  )
}

export default SignUp