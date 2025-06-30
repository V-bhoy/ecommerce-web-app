import {createSlice} from "@reduxjs/toolkit";

const calculateTotals = (cartItems) => {
    return cartItems.reduce(
        (acc, item) => {
            acc.totalQty += item.cartQty;
            acc.totalMrp += item.mrp * item.cartQty;
            acc.totalDiscount += (item.mrp * item.discount / 100) * item.cartQty;
            return acc;
        },
        { totalQty: 0, totalMrp: 0, totalDiscount: 0 }
    );
};


const storedItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const { totalQty, totalMrp, totalDiscount } = calculateTotals(storedItems);

const initialState = {
    isLoading: false,
    error: null,
    cartItems: storedItems,
    totalQty,
    totalMrp,
    totalDiscount,
    gst: 20,
    totalAmount: totalMrp - totalDiscount
}


const isSameCartItem = (a, b) => {
    // both without variant — match by product ID only
    if ((!a.cartVariant && !b.cartVariant)) {
        return a.id === b.id;
    }
    // both have variant — match by product ID + SKU
    if (a.cartVariant && b.cartVariant) {
        return a.id === b.id && a.cartVariant.sku_id === b.cartVariant.sku_id;
    }
    // one has variant, the other doesn't — definitely not same
    return false;
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const {id, cartVariant, cartQty} = action.payload;
            const itemIndex = state.cartItems.findIndex((item)=>isSameCartItem(item, {id, cartVariant}));
            if(itemIndex !== -1){
                if(cartQty) state.cartItems[itemIndex].cartQty = cartQty;
            }else {
                const temp = {
                    ...action.payload,
                    cartVariant: cartVariant || null,
                    cartQty: cartQty || 1
                };
                state.cartItems.push(temp);
            }

            const { totalQty, totalMrp, totalDiscount } = calculateTotals(state.cartItems);
            state.totalQty = totalQty;
            state.totalMrp = totalMrp;
            state.totalDiscount = totalDiscount;
            state.totalAmount = totalMrp - totalDiscount;

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        updateCartItem: (state, action)=>{
            const { id, cartVariant, newCartVariant, cartQty} = action.payload;
            const itemIndex = state.cartItems.findIndex((item)=>isSameCartItem(item, {id, cartVariant}));
            const itemIndexAlreadyPresent = state.cartItems.findIndex((item)=>isSameCartItem(item, {id, cartVariant: newCartVariant}));

            if(itemIndexAlreadyPresent !== -1){
                state.cartItems = state.cartItems.filter((item, index)=>index!==itemIndex);
            }
            else if (itemIndex !== -1) {
                if(cartQty) state.cartItems[itemIndex].cartQty = cartQty;
                if(newCartVariant) state.cartItems[itemIndex].cartVariant = newCartVariant; // update variant too
            }

            const { totalQty, totalMrp, totalDiscount } = calculateTotals(state.cartItems);
            state.totalQty = totalQty;
            state.totalMrp = totalMrp;
            state.totalDiscount = totalDiscount;
            state.totalAmount = totalMrp - totalDiscount;

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeCartItem: (state, action)=>{
            const { id, cartVariant} = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => !(item.id === id && item.cartVariant?.sku_id === cartVariant?.sku_id)
            );
            const { totalQty, totalMrp, totalDiscount } = calculateTotals(state.cartItems);
            state.totalQty = totalQty;
            state.totalMrp = totalMrp;
            state.totalDiscount = totalDiscount;
            state.totalAmount = totalMrp - totalDiscount;

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart: (state)=>{
            localStorage.removeItem("cartItems");
            state.cartItems = [];
            state.totalQty = 0;
            state.totalMrp = 0;
            state.totalDiscount = 0;
            state.totalAmount = 0;
        }
    }
})

export const {addToCart, updateCartItem, removeCartItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;