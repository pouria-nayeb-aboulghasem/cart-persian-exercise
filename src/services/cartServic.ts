import cart from "@/data/cart.json";


function getCart() {
    return cart;
}

function getCartById(id: number) {
    return cart.find((item) => item.id === id);
}


export {getCart, getCartById};