import axios from "axios"

async function cartLoader() {
    const getData = async () => {
        const response = await axios.get(`http://localhost:5000/api/users/1`)
        return response.data.UserProducts
    }

    const data = await getData()

    return { data }
}

export default cartLoader