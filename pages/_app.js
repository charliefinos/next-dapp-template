import StateProvider from '../state'
import '../styles/globals.css'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'
function MyApp({ Component, pageProps }) {
  let desiredChainId = ChainId.Mainnet
  return (
    <StateProvider>
      <ThirdwebProvider desiredChainId={desiredChainId}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </StateProvider>
  )
}

export default MyApp
