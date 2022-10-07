import React,{useState,useEffect,useCallback} from 'react'
import styles from "./ProductDetails.module.scss"
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { storage, sotreDb,StorageeRef,StorageDeleObj } from "../../../pages/firebase/config";
import Loader from '../../loader/Loader';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const ProductDetails = () => {
  const {id}=useParams()
  const [isloading, setisLoading] = useState(true);
  const [product,setProduct]=useState(null);
  const addToCart=()=>{


  }
  const decreaseCart=()=>{


  }
  const gethData = useCallback(() => {
    const getProductFromFirebase=async ()=>{
      setisLoading(true)
      const docRef = doc(sotreDb, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
       setProduct(docSnap.data())
       
       setisLoading(false)
      } else {
        setisLoading(false)
        toast.error("Product not found!");
      }
    }
    getProductFromFirebase();
  },[id]);

  useEffect(() => {
    gethData();
  }, [gethData]);


  return (
    <div>
      {isloading? <Loader />:
       ( 
       <section>
        <div className={`container ${styles.product}`}>
          <h2>Product Details</h2>
          <div>
            <Link to="/#products">&larr; Back To Products</Link>
          </div>
          {
            (
              <div className={styles.details}>
                <div className={styles.img}>
                  <img src={product.imageURL} alt={product.name} />
                </div>
                <div className={styles.content}>
                  <h3>{product.name}</h3>
                  <p className={styles.price}>{`$${product.price}`}</p>
                  <p>{product.desc}</p>
                  <p>
                    <b>SKU</b> {product.id}
                  </p>
                  <p>
                    <b>Brand</b> {product.brand}
                  </p>
                  <div className={styles.count}>
                      <button
                        className="--btn"
                        onClick={() => decreaseCart(product)}
                      >
                        -
                      </button>
                      <p>
                        <b>1</b>
                      </p>
                      <button
                        className="--btn"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                    </div>
              
                  <button
                    className="--btn --btn-danger"
                    onClick={() => addToCart(product)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            )
          }
        
        </div>
      </section>)}
    </div>
  )
}

export default ProductDetails
