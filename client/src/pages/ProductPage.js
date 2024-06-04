import axios from "axios"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import EmblaCarousel from "../components/carousel/EmblaCarousel"

function ProductPage() {
    const { data } = useLoaderData()
    const [responseData, setResponseData] = useState([])

    const getProductData = async () => {
        const response = await axios.get("http://localhost:5000/api/products/1")
        const data = response.data
        setResponseData(data)
    }

    const getImageData = async () => {
        // const response = await axios.get()
    }

    useEffect(() => {
        // getProductData()
        // getImageData()
        console.log(data)
    }, [])

    const OPTIONS = {}
    const SLIDE_COUNT = 6
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <div>
            <EmblaCarousel slides={SLIDES} opttions={OPTIONS} />
            {responseData.name}
            {responseData.price}
        </div >
    )
}

export default ProductPage