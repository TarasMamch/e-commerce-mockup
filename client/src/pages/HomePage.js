import { useEffect, useState } from "react"
import axios from "axios"
import ItemPanel from "../components/ItemPanel"

function HomePage() {
    const [responseData, setResponseData] = useState([])

    const getData = async () => {
        const response = await axios.get("http://localhost:5000/api/products")
        const data = response.data
        setResponseData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {responseData.map((data) => (
                <ItemPanel key={data.id} id={data.id} name={data.name} price={data.price} image={data.image} />
            ))}
        </div>
    );
}

export default HomePage