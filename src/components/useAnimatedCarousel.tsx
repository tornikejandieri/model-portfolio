
import React, { useState, useEffect } from 'react'

interface Props {
    images: string[]
    width: number | string
    height: number | string
}

const UseAnimatedCarousel: React.FC<Props> = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [images, setImages] = useState(props.images)
    const [isUpdated, setIsUpdated] = useState(false)

    useEffect(() => {
        if (isUpdated) {
            setTimeout(() => {
                setIsUpdated(false)
            }, 300)
        }
    }, [isUpdated])

    const prev = () => {
        setTimeout(() => {
            setCurrentIndex((currentIndex + props.images.length - 1) % props.images.length)
        }, 300)
        setIsUpdated(true)
    }

    const next = () => {
        setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % props.images.length)
        }, 300)
        setIsUpdated(true)
    }


    return (
        <div>
            <button onClick={prev}>prev</button>
            <img
                src={images[currentIndex]}
                style={{
                    width: props.width,
                    height: props.height,
                    opacity: isUpdated ? "0" : "1",
                    transition: "opacity .3s ease-in"
                }}
            />
            <button onClick={next}>next</button>
        </div>
    )
}

export default UseAnimatedCarousel