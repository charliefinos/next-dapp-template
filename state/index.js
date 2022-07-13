import { eth } from "../state/eth" // Eth state provider

/**
 * State providing wrapper
 * @param {ReactElement | ReactElement[]} children to inject
 * @returns {ReactElement} wrapper
 */

export default function StateProvider({ children }) {
    return (
        // Wrap in sub-providers
        <eth.Provider>{children}</eth.Provider>
    )
}
