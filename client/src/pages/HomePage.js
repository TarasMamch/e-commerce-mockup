import { useEffect, useState } from "react"
import axios from "axios"
import ItemPanel from "../components/ItemPanel"

function HomePage() {
    const [responseData, setResponseData] = useState([])

    const getData = async () => {
        const response = await axios("http://localhost:5000/api/products")
        const data = response.data
        setResponseData(data)
        console.log(responseData)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {responseData.map((data) => {
                <ItemPanel key={data.id} image={data.image} name={data.name} price={data.price} />
            })}
        </div>
    )
}

export default HomePage