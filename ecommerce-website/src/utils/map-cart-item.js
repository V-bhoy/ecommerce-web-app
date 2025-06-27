export function mapCartItem(product){
    return {
        id: product.id,
        title: product.title,
        mrp: product.mrp,
        discount: product.discount,
        priceAfterDiscount: product.priceAfterDiscount,
        shortInfo: product.short_info,
        imageUrl: product.image_url,
        category: product.category,
        cartVariant: product?.cartVariant || null,
        cartQty: product?.cartQty || null
    }
}