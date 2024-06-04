import axios from "axios"
import { useEffect, useState } from "react"
import EmblaCarousel from "../components/carousel/EmblaCarousel"

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

    const OPTIONS = {}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <div>
            <EmblaCarousel slides={SLIDES} opttions={OPTIONS} />
        </div >
    )
}

export default ProductPage