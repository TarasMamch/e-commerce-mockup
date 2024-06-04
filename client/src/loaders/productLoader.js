import axios from "axios"

async function productLoader({ params }) {
    if (!params.id) {
        throw new Error("id must be provided")
    }

    const getProductData = async () => {
        const response = await axios.get(`http://localhost:5000/api/products/${params.id}`)
        return response.data
    }

    const getImageData = async () => {
        const response = await axios.get(`http://localhost:5000/api/images/${params.id}`)
        return response.data
    }

    const productData = await getProductData()
    const imageData = await getImageData()

    return { productData, imageData }
}

export default productLoader