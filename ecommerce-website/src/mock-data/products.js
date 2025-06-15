export const products = [
    {
        id: 1,
        title: "White Casual T-Shirt",
        imageUrl: "https://cdn.pixabay.com/photo/2018/08/28/17/08/portrait-3637976_1280.jpg",
        originalPrice: 5000,
        discount: 10,
        priceAfterDiscount: 4500,
        info: "Cotton round neck t-shirt",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        category: "men",
        subCategory: "t-shirts",
        views: 50,
        salesCount: 30,
        variants: [{
            skuId: "TSHIRT-S-WHITE",
            size: "small",
            qty: 10,
        }, {
            skuId: "TSHIRT-M-WHITE",
            size: "medium",
            qty: 10,
        }, {
            skuId: "TSHIRT-L-WHITE",
            size: "large",
            qty: 10,
        }]
    },
    {
        id: 2,
        title: "Graphic Tee",
        imageUrl: "https://cdn.pixabay.com/photo/2017/05/23/10/53/t-shirt-design-2336850_1280.jpg",
        originalPrice: 4000,
        discount: 20,
        priceAfterDiscount: 3200,
        info: "Deep blue cotton casual t-shirt for men.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        category: "men",
        subCategory: "t-shirts",
        views: 450,
        salesCount: 250,
        color: "white",
        variants: [{
            skuId: "GRAPHIC-L-BLUE",
            size: "large",
            qty: 20,
        }, {
            skuId: "GRAPHIC-XL-BLUE",
            size: "XL",
            qty: 15,
        }, {
            skuId: "GRAPHIC-XXL-BLUE",
            size: "XXL",
            qty: 10,
        }],
        isFeatured: true
    },
    {
        id: 3,
        title: "Graphic Black Tee",
        imageUrl: "https://cdn.pixabay.com/photo/2023/03/22/15/40/man-7869911_1280.jpg",
        originalPrice: 4000,
        discount: 20,
        priceAfterDiscount: 3200,
        info: "Black cotton casual t-shirt for men.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        category: "men",
        subCategory: "t-shirts",
        views: 500,
        salesCount: 350,
        color: "black",
        variants: [{
            skuId: "GRAPHIC-L-BLACK",
            size: "large",
            qty: 10,
        }, {
            skuId: "GRAPHIC-XL-BLACK",
            size: "XL",
            qty: 15,
        }, {
            skuId: "GRAPHIC-XXL-BLACK",
            size: "XXL",
            qty: 10,
        }],
        isFeatured: true
    },
    {
        id: 4,
        title: "Polo Tee",
        imageUrl: "https://cdn.pixabay.com/photo/2017/05/31/06/49/model-2359322_1280.jpg",
        originalPrice: 6000,
        discount: 20,
        priceAfterDiscount: 4800,
        info: "Blue cotton polo t-shirt with collar for men.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        category: "men",
        subCategory: "t-shirts",
        views: 600,
        salesCount: 400,
        color: "blue",
        variants: [{
            skuId: "POLO-L-BLUE",
            size: "large",
            qty: 10,
        }, {
            skuId: "POLO-M-BLUE",
            size: "medium",
            qty: 5,
        }, {
            skuId: "POLO-XL-BLUE",
            size: "XL",
            qty: 10,
        }]
    },
    {
        id: 5,
        title: "Funky Tee",
        imageUrl: "https://cdn.pixabay.com/photo/2015/06/19/09/41/portrait-814645_1280.jpg",
        originalPrice: 6000,
        discount: 20,
        priceAfterDiscount: 4800,
        info: "Funky cotton t-shirt, round neck for men.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        category: "men",
        subCategory: "t-shirts",
        views: 500,
        salesCount: 200,
        color: "black",
        variants: [{
            skuId: "FUNKY-L-BL",
            size: "large",
            qty: 5,
        },  {
            skuId: "FUNKY-XL-BL",
            size: "XL",
            qty: 10,
        }]
    },
    {
        id: 6,
        title: "Formal Shirt",
        imageUrl: "https://cdn.pixabay.com/photo/2021/02/06/09/10/man-5987522_1280.jpg",
        originalPrice: 6000,
        discount: 10,
        priceAfterDiscount: 5400,
        info: "White cotton formal shirt, full sleeves for men.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        category: "men",
        subCategory: "formals",
        views: 600,
        salesCount: 250,
        color: "white",
        variants: [{
            skuId: "FORMAL-M-W",
            size: "medium",
            qty: 15,
        },  {
            skuId: "FORMAL-L-W",
            size: "large",
            qty: 10,
        }]
    },
    {
        id: 7,
        title: "Formal Blue Shirt",
        imageUrl: "https://cdn.pixabay.com/photo/2021/02/18/15/17/men-6027492_1280.jpg",
        originalPrice: 4500,
        discount: 10,
        priceAfterDiscount: 4050,
        info: "Sky blue cotton formal shirt, full sleeves for men.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        category: "men",
        subCategory: "formals",
        views: 400,
        salesCount: 250,
        color: "blue",
        variants: [{
            skuId: "FORMAL-M-B",
            size: "medium",
            qty: 15,
        },  {
            skuId: "FORMAL-L-B",
            size: "large",
            qty: 10,
        }, {
            skuId: "FORMAL-XL-B",
            size: "XL",
            qty: 5,
        }]
    },
    {
        id: 8,
        title: "Formal Black Shirt",
        imageUrl: "https://cdn.pixabay.com/photo/2016/03/28/22/18/business-man-1287044_1280.jpg",
        originalPrice: 5000,
        discount: 20,
        priceAfterDiscount: 4000,
        info: "Black cotton formal shirt, full sleeves for men.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        category: "men",
        subCategory: "formals",
        views: 600,
        salesCount: 300,
        color: "blue",
        variants: [{
            skuId: "FORMAL-M-B",
            size: "medium",
            qty: 25,
        },  {
            skuId: "FORMAL-L-B",
            size: "large",
            qty: 20,
        }, {
            skuId: "FORMAL-XL-B",
            size: "XL",
            qty: 15,
        }],
        isFeatured: true
    },
    {
        id: 9,
        title: "Formal Gray Shirt",
        imageUrl: "https://cdn.pixabay.com/photo/2017/08/17/10/23/shirt-2650677_1280.jpg",
        originalPrice: 3000,
        discount: 10,
        priceAfterDiscount: 2700,
        info: "Casual cotton formal shirt, half sleeves for men.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        category: "men",
        subCategory: "formals",
        views: 400,
        salesCount: 150,
        color: "gray",
        variants: [{
            skuId: "FORMAL-M-G",
            size: "medium",
            qty: 5,
        }, {
            skuId: "FORMAL-XL-G",
            size: "XL",
            qty: 10,
        }],
    },
    {
        id: 10,
        title: "Formal Striped Shirt",
        imageUrl: "https://cdn.pixabay.com/photo/2017/09/29/19/08/formal-wear-2800136_1280.jpg",
        originalPrice: 4000,
        discount: 10,
        priceAfterDiscount: 3600,
        info: "Casual cotton formal striped shirt.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        category: "men",
        subCategory: "formals",
        views: 300,
        salesCount: 100,
        color: "blue",
        variants: [{
            skuId: "FORMAL-M-STRIPED",
            size: "medium",
            qty: 10,
        }, {
            skuId: "FORMAL-L-STRIPED",
            size: "large",
            qty: 10,
        }],
        isFeatured: true
    },
]

export const productDetails = {
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit\n" +
        "                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n" +
        "                Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    sizeAndFit: "The model (height 5'8) is wearing a size S",
    material: "96% Chiffon 4% Georgette",
    care: "Machine Wash",
    specifications: {
        neck: "round",
        sleeves: "half",
        length: "mini"
    }
}