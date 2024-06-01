import { useEffect, useState } from "react"
import axios from "axios"
import ItemPanel from "../components/ItemPanel"

function HomePage() {
    const [responseData, setResponseData] = useState([])

    const getData = async () => {
        const response = await axios.get("http://localhost:5000/api/products")
        const data = response.data
        console.log(data)
        setResponseData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    const seasons = ["Spring", "Summer", "Autumn", "Winter"];

    return (
        <div>
            <h2>Seasons of the year</h2>
            <ul>
                {responseData.map((data) => (
                    <ItemPanel key={data.id} name={data.name} price={data.price} image={data.image}></ItemPanel>
                ))}
            </ul>
        </div>
    );
}

export default HomePage