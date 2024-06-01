import Button from "./Button"

function ItemPanel({ image, name, price }) {
    return (
        <div className="border h-80 w-4/5 m-3 flex">
            <img src={image} />
            <div className="flex flex-col ml-5 mt-5 relative">
                <p className="font-bold text-4xl mb-10">{name}</p>
                <p className="text-xl">${price}</p>
                <div className="flex absolute bottom-5 left-0">
                    <Button>Add to Cart</Button>
                    <Button>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemPanel