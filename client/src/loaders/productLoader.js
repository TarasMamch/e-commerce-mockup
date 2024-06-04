import axios from "axios"

async function productLoader({ params }) {
    if (!params.id) {
        throw new Error("id must be provided")
    }

    const getData = async (id) => {
        const response = await axios.get(`http://localhost:5000/api/products/${params.id}`)
        return response.data
    }

    const data = await getData()

    return { data }
}

export default productLoader