import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes())
        }
    }, [emblaApi])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img src='https://placehold.co/600x400' />
                </div>
                <div className="embla__slide">
                    <img src='https://placehold.co/600x400' />
                </div>
                <div className="embla__slide">
                    <img src='https://placehold.co/600x400' />
                </div>
            </div>
        </div>
    )
}

export default Carousel