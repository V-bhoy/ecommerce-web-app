export function mapCheckoutItems(cartItems){
    return cartItems.map(item=>({
        price_data : {
            currency: "usd",
            product_data: {
                name: item.title,
                metadata: {
                    productId: item.id,
                    sku: item.cartVariant.sku_id,
                }
            },
            unit_amount: Math.round(item.priceAfterDiscount / 89)*100,
        },
        quantity: item.cartQty
    }))
}