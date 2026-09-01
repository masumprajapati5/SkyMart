import { createContext, useState, useEffect } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [PRODUCTS, setProducts] = useState([]);
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("User"))||null)
  const [filtered,setfiltered]=useState([])
  useEffect(() => {
  setfiltered(PRODUCTS);
  }, [PRODUCTS]);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cartitems");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cart));
  }, [cart]);
  const [liked, setLiked] = useState(() => {
    const like = localStorage.getItem("likeditems");
    return like ? JSON.parse(like) : [];
  });
  useEffect(() => {
    localStorage.setItem("likeditems", JSON.stringify(liked));
  }, [liked]);
  const togglelike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((likedId) => likedId !== id) : [...prev, id]
    )
  }
  return (
    <MyStore.Provider value={{ isCartOpen, setIsCartOpen, PRODUCTS, setProducts, cart, setCart ,user,setUser,filtered,setfiltered,liked,setLiked,togglelike}}>
      {children}
    </MyStore.Provider>
  );
};