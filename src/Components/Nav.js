import React, { useEffect } from "react";
import  {Link,useNavigate} from 'react-router-dom';
const Nav = ()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
   const logout =()=>{
    localStorage.clear();
    navigate('/signup')
   }
    return(
        <div>
            {auth ? 
            <ul className="nav-ul align-start">
            <li><Link to="/" >Home</Link> </li>
                <li><Link to="/prod" >Products</Link> </li>
                <li><Link to="/add" >Add Product</Link> </li>
                <li><Link to="/update" >Update Product</Link> </li>
                {/* <li><Link to="/logout" >Logout</Link> </li> */}
                <li><Link to="/profile" >Profile</Link> </li>
                <li><Link to="/signup" onClick={logout} >Logout</Link> </li>
            </ul> : 
            <ul className="nav-ul text-left">
               <li><Link to="/login" >Login</Link></li> 
               <li> <Link to="/signup" >SignUp</Link></li> 
                </ul>}
            {/* <ul className="nav-ul">
                <li><Link to="/" >Home</Link> </li>
                <li><Link to="/prod" >Products</Link> </li>
                <li><Link to="/add" >Add Product</Link> </li>
                <li><Link to="/update" >Update Product</Link> </li>
                <li><Link to="/profile" >Profile</Link> </li>
                <li>{auth ? <Link to="/signup" onClick={logout} >Logout</Link> :
                <>
                
                 <Link to="/login" >Login</Link>
                 <Link to="/signup" >SignUp</Link>
                 </>
                 }</li>
              
            </ul> */}
        </div>
    )
}

export default Nav;