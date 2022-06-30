import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () =>{
    let [checkOutProduct,setCheckOutProduct] = useState([]);

    const user_id = localStorage.getItem("id")
    var user_email = localStorage.getItem("user_email")
    console.log(user_email)

    useEffect(() =>{
        getCheckOutProducts()
      },[])

      const getCheckOutProducts = () => {
            
        axios.get(`https://amazon-backend-practice.herokuapp.com/api/amazonUser/products_selected_by_single_user/${user_id}`)
            .then((response) => {
    
                if (response.data.success) {
                    setCheckOutProduct(response.data.data)
                }
    
            })
    
            .catch(function (error) {
    
            });
    }

    console.log(checkOutProduct.length)

    const logOut = () =>{
        localStorage.clear()
        window.location="/login"
    }
    return(
        <>
          <div className='header'>
              <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcUPiRufZK3t-_tv8dRUNE4HQfvj9x6kflKBAK2pKj6vckztqkXysk24S_p-M1hr-BWs&usqp=CAU"></img></Link>
              <div className='searchBar'>
                    <input type="text"></input>
                    <i class="material-icons md-36">search</i>
              </div>
              {user_email && <div className='paragraphs'>
                  <p>Hello Guest
                      <br></br>
                      <button onClick={logOut}> Sign Out</button>
                  </p>
              </div>}
              {!user_email && <div className='paragraphs'>
                  <p>Hello Guest
                      <br></br>
                      <Link to="/login"><span>Sign In</span></Link>
                  </p>
              </div>}
              <div className='paragraphs'>
                  <p>Returns &
                      <br></br>
                      <Link to="/orders"><span>Orders</span></Link>
                  </p>
              </div>
              <div className='paragraphs'>
                  <p>Your
                      <br></br>
                      <span>Prime</span>
                  </p>
              </div>
              <div className='cart'>
              <Link to="/checkout"><i class="material-icons md-36">shopping_cart</i></Link>
              </div>
              <div className='cart_items'>
                  <p>{checkOutProduct.length}</p>
              </div>
          </div>
        </>
    )
}

export default Header;