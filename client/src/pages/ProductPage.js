import axios from "axios"
import { useEffect, useState } from "react"

function ProductPage() {
    const [responseData, setResponseData] = useState([])

    const getData = async () => {
        const response = await axios.get("http://localhost:5000/api/products/1")
        const data = response.data
        setResponseData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="flex m-6">
            <div>
                <img src={responseData.image} className="h-20" />
                <img src={responseData.image} className="h-20" />
                <img src={responseData.image} className="h-20" />
                <img src={responseData.image} className="h-20" />
            </div>
            <img src={responseData.image} className="h-96 border border-solid border-2 rounded" />
        </div>
    )
}

export default ProductPage