import Button from "./Button"

function ItemPanel() {
    return (
        <div className="border h-80 w-4/5 m-3 flex">
            <img src="https://placehold.co/300x300/png" />
            <div className="flex flex-col ml-5 mt-5 relative">
                <p className="font-bold text-4xl mb-10">RANDOM STUFF</p>
                <p className="text-xl">PRICE TAG$</p>
                <div className="flex absolute bottom-5 left-0">
                    <Button>Add to Cart</Button>
                    <Button>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemPanel