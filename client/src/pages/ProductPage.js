import { useLoaderData } from "react-router-dom"
import EmblaCarousel from "../components/carousel/EmblaCarousel"

function ProductPage() {
    const { productData, imageData } = useLoaderData()

    const OPTIONS = {}
    const SLIDE_COUNT = 6
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <div>
            <EmblaCarousel slides={SLIDES} opttions={OPTIONS} />
            {productData.name}
            {productData.price}
        </div >
    )
}

export default ProductPage