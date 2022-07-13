import { eth } from "../state/eth"

export default function Header() {
    const { address, unlock } = eth.useContainer()
    return (
        <div>
            {address ? <p>{address}</p> : <button onClick={() => unlock()}>COnnect</button>}

            <h1>Holaaa</h1>
        </div>
    )
}
