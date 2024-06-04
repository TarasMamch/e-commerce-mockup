import axios from "axios"

async function productLoader({ params }) {
    if (!params.id) {
        throw new Error("id must be provided")
    }

    const getProductData = async () => {
        const response = await axios.get(`http://localhost:5000/api/products/${params.id}`)
        return response.data
    }

    const productData = await getProductData()

    return { productData }
}

export default productLoader