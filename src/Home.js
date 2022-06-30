import React,{useState , useEffect} from "react";
import axios from "axios";
import Product from "./Product";
import Header from './Header';
import './Home.css';

const Home = () =>{

    let [productsData , setProductsData] = useState([]);

    useEffect(() => {
        getClasses()
    },[])
    const getClasses = () => {
        
        axios.get("https://amazon-backend-practice.herokuapp.com/api/amazonProduct/all_products")
            .then((response) => {

                if (response.data.success) {
                    
                    setProductsData(response.data.data)
                }

            })

            .catch(function (error) {

            });
    }

    console.log(productsData)

    
    return(
        <>
       
        <Header />
        
         <div className="hero">
           <div className="all_products">
                {productsData.map((item) => {
                    return(
                        <div className="product_row">
                                <Product descrp={item.description} price={item.price} url={item.url} id={item._id}></Product>
                        </div>
                    )
                })}
           </div>
        </div>
        </>
    )
}

export default Home;