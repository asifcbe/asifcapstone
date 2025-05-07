import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import "../../navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import Button from "../button/Button";
import { signOutUserAuth } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/carticon";
import CartDropDown from "../cartdropdown/cartdropdown";
import { CartContext } from "../../contexts/cart.contexts";
function Navigation() {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen,setIsCartOpen}=useContext(CartContext);
  const signOutUser=async ()=>{
  await signOutUserAuth();
}
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          
        <Link className="nav-link" to="/shop">
              Shop
            </Link>
          {currentUser ? (
            <Button onClick={signOutUser}>
              Sign Out
            </Button>
          ) : (
            <Link className="nav-link" to="/authentication">
              Sign In
            </Link>
          )}
          <CartIcon />
          
        </div>
        {isCartOpen&&<CartDropDown />}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
