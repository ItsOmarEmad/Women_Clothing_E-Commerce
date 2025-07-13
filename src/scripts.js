import { toast } from 'react-toastify';

export const products = [
    { id: 1, name: "Silk Hijab", price: 25, material: "silk", color: "black", size: "M", image: "/hijab1.webp" },
    { id: 2, name: "Chiffon Abaya", price: 50, material: "chiffon", color: "blue", size: "L", image: "/abaya1.webp" },
    { id: 3, name: "Cotton Top", price: 30, material: "cotton", color: "white", size: "S", image: "/top1.webp" },
    { id: 4, name: "Hijab Pin", price: 10, material: "metal", color: "gold", size: "S", image: "/pin1.webp" },
    { id: 5, name: "Silk Abaya", price: 60, material: "silk", color: "black", size: "M", image: "/abaya2.webp" },
    { id: 6, name: "Chiffon Hijab", price: 20, material: "chiffon", color: "white", size: "L", image: "/hijab2.webp" },
];

export const showToast = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: { backgroundColor: "#d4af37" },
    });
};

export const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];
export const saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

export const filterProducts = (price, materials, colors, sizes) => {
    return products.filter(product => {
        const priceMatch = product.price <= price;
        const materialMatch = materials.length === 0 || materials.includes(product.material);
        const colorMatch = colors.length === 0 || colors.includes(product.color);
        const sizeMatch = sizes.length === 0 || sizes.includes(product.size);
        return priceMatch && materialMatch && colorMatch && sizeMatch;
    });
};