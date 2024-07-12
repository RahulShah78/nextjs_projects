import { createContext, useState, useEffect, useContext } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    }, []);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            // Prevent adding duplicate products
            if (prevWishlist.some(item => item.id === product.id)) {
                return prevWishlist;
            }
            return [...prevWishlist, product];
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== productId));
    };

    const wishlistLength = wishlist.length;
 

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, wishlistLength }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
