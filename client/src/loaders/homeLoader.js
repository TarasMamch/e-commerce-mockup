import axios from "axios"

async function homeLoader() {
    const getData = async () => {
        const response = await axios.get("http://localhost:5000/api/products")
        return response.data
    }

    const data = await getData()

    return { data }
}

export default homeLoader