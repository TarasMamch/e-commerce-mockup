import { useLoaderData } from "react-router-dom"
import EmblaCarousel from "../components/carousel/EmblaCarousel"

function ProductPage() {
    const { data } = useLoaderData()

    const OPTIONS = {}
    const SLIDE_COUNT = 6
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <div>
            <EmblaCarousel slides={SLIDES} opttions={OPTIONS} />
            {data.name}
            {data.price}
        </div >
    )
}

export default ProductPage