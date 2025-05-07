import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((d) => d.id == productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((d) =>
      d.id == productToAdd.id ? { ...d, quantity: d.quantity + 1 } : d
    );
  }
  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity: 1,
    },
  ];
};
const removeCartItem=(cartItems,productToRemove,clear)=>{
    const existingCartItem = cartItems.find((d) => d.id == productToRemove.id);
    if (existingCartItem.quantity==1 || clear) {
      return cartItems.filter((d) =>
        d.id !=productToRemove.id
      );
    }
        
    
    return cartItems.map((d) =>
          d.id == productToRemove.id ? { ...d, quantity: d.quantity - 1 } : d
        );
       
    
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity*cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);
  const addItem = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItem = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const clearCartItem = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove,true));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItem,
    cartCount,
    setCartCount,
    removeItem,
    clearCartItem,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
