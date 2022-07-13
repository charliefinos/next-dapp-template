import { eth } from "../state/eth"

export default function Header() {
    const { address, unlock } = eth.useContainer()
    return (
        <div>
            {address ? <p>{address}</p> : <button onClick={() => unlock()}>COnnect</button>}

            <h1>Holaaa</h1>
            <div className="w-full bg-red-600">
                <button className="w-12 bg-blue-600 hover:bg-blue-900 border-r-2">Hola</button>
            </div>
        </div>
    )
}
