import React from 'react'
import { useState,useEffect } from 'react'
const Products = () => {
    const[products,setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts((json)))
    }, [])
    console.log(products)
  return (
      <>
<div className="product grid grid-cols-3">
    {
        products.map((product) =>{ 
            const{id,title,description,price,image}=product
            return(
                <div key={id} className="card card-compact  bg-base-100  shadow-xl" >
                <figure><img className='w-96' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p className='gr'>{description}</p>
                  <p className='gr'>{price}</p>
                  <div className="card-actions justify-between">
                    <button className="btn btn-primary">Buy Now</button>
                    {/* <Link to ="/cart"> */}
                    <button className="btn btn-primary" >Add to Cart</button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
                   
                   
                   )
                }
                )
            }
            

            </div>
            </>
   )}
   
   


export default Products