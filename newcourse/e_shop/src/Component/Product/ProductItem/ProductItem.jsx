import React from 'react'
import styles from "./ProductItem.module.scss"
import Card from "../../card/Card"
import { Link } from 'react-router-dom'
const ProductItem = ({grid,product}) => {
  const {imageURL,name,price,desc,id}=product
  const shortenText=(text,length)=>{
   if(text.length>15){
    const shortenedText=text.substring(0,length).concat(`...`)

    return shortenedText;
   }

   return text;

  }
  return (
    <Card cardClass={grid?`${styles.grid}`:`${styles.list}`}>
      <Link to={`/product-details/${id}`}>
     <div className={styles.img}>
        <img src={imageURL} alt={name} ></img>
     </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <p >{`$${price}`}</p>
          <h4>{grid?shortenText(name,18):name}</h4>
        </div>
        {!grid &&(<p>{shortenText(desc,200)}</p>) }  <button className='--btn --btn-danger'>Add to Card</button>
      </div>
    
    </Card>
  )
}

export default ProductItem