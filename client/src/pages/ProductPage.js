import { useLoaderData } from "react-router-dom"
import EmblaCarousel from "../components/carousel/EmblaCarousel"

function ProductPage() {
    const { productData } = useLoaderData()
    const imageArray = []

    const createImageArray = () => {
        for (let i = 0; i < productData.Images.length; i++) {
            imageArray.push(productData.Images[i].image)
        }
    }

    createImageArray()

    const OPTIONS = {}
    const SLIDE_COUNT = productData.Images.length
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            {productData.name}
            {productData.price}
        </div >
    )
}

export default ProductPage