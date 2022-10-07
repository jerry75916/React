import React,{useState,useEffect} from 'react'
import styles from "./ProductFilter.module.scss"
import { selectProducts } from '../../../redux/slice/productSlice'
import { useSelector,useDispatch } from 'react-redux'
import { CHANGE_CATEGORY,CHANGE_BRAND } from '../../../redux/slice/filterSlice'
const ProductFilter = () => {
  const dispatch =useDispatch();
  const products=useSelector(selectProducts);
  const [Category, setCategory] = useState('All');
  const [Brand, setBrand] = useState('All');
  const allcategories=[
    'All',
    ...new Set(products.map((product)=>{
      return product.category
    }))
  ]
  const allbrands=[
    'All',
    ...new Set(products.map((product)=>{
      return product.brand
    }))
  ]
  const changeCategory=(cat)=>{
    setCategory(cat)
    dispatch(CHANGE_CATEGORY({products, Category:cat}));
  }
  const changeBrand=(e)=>{
    const targetBrand=e.target.value;
    setBrand(targetBrand)
    

  }

  useEffect(() => {
    dispatch(CHANGE_BRAND({products, Brand}));
  
  }, [dispatch,products,Brand]);



  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category}>
        {allcategories.map((cat,index)=>(
        <button type='button' key={index} className={`${
          Category===cat?styles.active:null
        }`} onClick={()=>changeCategory(cat)}> &#8250; {cat}</button>))}
      </div>
      <h4>Brand</h4>
      <div className={styles.brand}>
        <select name='brand' onChange={changeBrand}>
        {allbrands.map((brand,index)=>(
        <option  key={index} value={brand}>{brand}</option>))}
        </select>
      </div>
      <h4>Price</h4>
      <p>$1500</p>
      <div className={styles.price}>
        <input type='range' name='price' min="100" max="10000"></input>
      </div>
      <button className='--btn --btn-danger'>Clear Filter</button>
    </div>
  )
}

export default ProductFilter