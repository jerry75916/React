import React,{useEffect} from 'react'
import styles from "./Product.module.scss"
import ProductFilter from './ProductFilter/ProductFilter'
import ProductList from './ProductList/ProductList'
import { useSelector, useDispatch} from 'react-redux'
import useFetchCollection from '../../customHooks/useFetchCollection'
import { selectProducts, STORE_PRODUCTS } from '../../redux/slice/productSlice'
// import spinner from "../../assets/spinner.jpg"
import Loader from '../loader/Loader'
const Product = () => {

  const {data,isLoading}= useFetchCollection("products");
  const Products=useSelector(selectProducts)
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(STORE_PRODUCTS({
       products:data
     }))
   }, [dispatch,data]);


  return (
    <section >
        <h2>Product</h2>
        <div className={`container ${styles.product}`}>
            <aside className={styles.filter}>
            {isLoading?null: (<ProductFilter />)}
            </aside>
            <div className={styles.content}>
             {isLoading?<Loader/>:( <ProductList products={Products}/>)}
            </div>
        </div>
        
        </section>
  )
}

export default Product