//coffee; price_1N42kFSCHdVx8ak9onKh9UpD
//sunglass: price_1N42l8SCHdVx8ak983DGYP4L
//camera: price_1N42lhSCHdVx8ak9N1scBGAJ

const productsArray = [
    {
        id: "price_1N42kFSCHdVx8ak9onKh9UpD",
        title: "Coffee",
        price: 60
    },
    {
        id: "price_1N42l8SCHdVx8ak983DGYP4L",
        title: "Sunglasses",
        price: 2000
    },
    {
        id: "price_1N42lhSCHdVx8ak9N1scBGAJ",
        title: "Camera",
        price: 20000
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };