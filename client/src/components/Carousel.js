import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
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
            <button className="embla__prev" onClick={scrollPrev}>
                Prev
            </button>
            <button className="embla__next" onClick={scrollNext}>
                Next
            </button>
        </div>
    )
}

export default EmblaCarousel