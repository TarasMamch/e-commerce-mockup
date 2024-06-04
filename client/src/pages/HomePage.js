import ItemPanel from "../components/ItemPanel"
import { useLoaderData } from "react-router-dom"

function HomePage() {
    const { data } = useLoaderData()

    return (
        <div>
            {data.map((p) => (
                <ItemPanel key={p.id} id={p.id} name={p.name} price={p.price} image={p.Images[0].image} />
            ))}
        </div>
    );
}

export default HomePage