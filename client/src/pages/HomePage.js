import { useEffect, useState } from "react"
import axios from "axios"
import ItemPanel from "../components/ItemPanel"

function HomePage() {
    const [responseData, setResponseData] = useState('')

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then((response) => {
                setResponseData(response.data[0])
            })
    }, [])

    return (
        <div>
            {/* <EmblaCarousel /> */}
            <ItemPanel image={responseData.image} name={responseData.name} price={responseData.price} />
        </div>
    )
}

export default HomePage