export function mapCheckoutItems(cartItems){
    return cartItems.map(item=>({
        id: item.id,
        mrp: item.mrp,
        discount: item.discount,
        priceAfterDiscount: item.priceAfterDiscount,
        sku_id: item.cartVariant.sku_id,
        cartQty: item.cartQty
    }))
}