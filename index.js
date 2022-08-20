import axios from 'axios'

const data = async () => Array.from({ length: 1000}, (value, index) => `${index}--cellphone`)
 
const PRODUCTS_URL = "http://localhost:3000/products"
const CART_URL = "http://localhost:4000/cart"

async function *processDBData() {
    const products = await data()

    for (const product of products) {
        const { data: productInfo } = await axios.get(`${PRODUCTS_URL}?product=${product}`)
        const { data: cartData } = await axios.post(CART_URL, productInfo)

        yield cartData
    }

}

for await (const data of processDBData()) {
    console.table(data)
}