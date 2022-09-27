import React, { useState, useEffect } from "react";
import "./AdminViewProducts_Module.scss";
import { toast } from "react-toastify";
import {
  collection,
  where,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc
} from "firebase/firestore";
import { storage, sotreDb,StorageeRef,StorageDeleObj } from "../../../pages/firebase/config";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../loader/Loader";
import { async } from "@firebase/util";
import ConfirmBox from "../../ConfirmBox/ConfirmBox";
import { useDispatch } from "react-redux";
import { STORE_PRODUCTS } from "../../../redux/slice/productSlice";

const AdminViewProducts = () => {
  const dispatch=useDispatch();
  const [Products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [displayConfirm,setDisplayConfirm]=useState(false);
  const [delObj,setdelObj]=useState(null);
  const navigator=useNavigate();
  const getProducts = () => {
    try {
      setisLoading(true);
      const productsRef = collection(sotreDb, "products");

      const q = query(productsRef, orderBy("createdAt", "desc"));
       const AllProducts = Products;
      onSnapshot(q, (Snapshot) => {
       
        Snapshot.forEach((doc) => {
          AllProducts.push({ id: doc.id, ...doc.data() });
        });
        setProducts(AllProducts);
        setisLoading(false);
        dispatch(STORE_PRODUCTS({
          products:AllProducts
        }))
      });
     
    } catch (e) {
      setisLoading(false);
      toast.error(e.message);
    }
  };
  const DelProd=(status)=>{
    setDisplayConfirm(false)

    if(status){
      DeleteProductFromConfirm(delObj.id,delObj.imageURL);
    }
  }
  const DeleteProductFromConfirm=async (id,imageURL)=>{
    await deleteDoc(doc(sotreDb, "products", id));
    const desertRef = StorageeRef(storage, imageURL);
    StorageDeleObj(desertRef)
    toast.success('Product is delete successful');
  }
  const delProduct=(id,imageURL)=>{
  try{

    setdelObj({id:id,imageURL:imageURL})
    setDisplayConfirm(true)

  }catch(error){
    toast.error(error.message);
  }
  }
  


  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {displayConfirm?<ConfirmBox imgUrl={delObj.imageURL} deletefun={DelProd}/>:``}
      <div className="table">
        <h2>All Products</h2>
        {Products.length === 0 ? (
          <p>No product found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>s/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Products.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.id}</td>
                    <td>
                      <img
                        src={product.imageURL}
                        alt={product.desc}
                        style={{ width: "100px", height: "100px" }}
                      ></img>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td className="icons">
                      <Link to={`/admin/add-product/${product.id}`}>
                        <FaEdit size={20} color={"green"} />
                      </Link>
                      &nbsp;
                      <FaTrash onClick={()=>delProduct( product.id,product.imageURL)}  size={20} color={"red"} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default AdminViewProducts;
