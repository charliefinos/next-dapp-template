import {
  useMetamask,
  useWalletConnect,
  useNetwork,
  useAddress,
  useDisconnect,
} from '@thirdweb-dev/react'
import Modal from 'react-modal'
import { useEffect, useState } from 'react'

export const WalletModal = () => {
  const connectWithMetamask = useMetamask()
  const connectWithWalletConnect = useWalletConnect()
  const disconnectWallet = useDisconnect()
  const address = useAddress()
  const network = useNetwork()

  const [wrongChain, setWrongChain] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (address) {
      if (network[0].data.chain.id != 4) {
        setWrongChain(true)
      } else {
        setWrongChain(false)
      }
    }
  }, [network])

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  //   If a wallet is connected, show address, chainId and disconnect button

  //   return (
  //     <div>
  //       Address: {address}
  //       <br />
  //       Chain ID: {network[0].data.chain && network[0].data.chain.id}
  //       <br />
  //       <button onClick={disconnectWallet}>Disconnect</button>
  //       {isOpen && <p>Change net to rinkeby</p>}
  //     </div>
  //   )
  useEffect(() => {
    if (address) {
      setIsModalOpen(false)
    }
  }, [address])

  return (
    <div className="">
      {address ? (
        <div>
          <p>{address}</p>
          <p>Chain Id: {network[0].data.chain && network[0].data.chain.id}</p>
          <p>{wrongChain && 'Change to RinkebyNetwork'}</p>
        </div>
      ) : (
        <button
          className="bg-green-100 rounded py-2 px-4 my-2"
          onClick={() => setIsModalOpen(true)}
        >
          Connect
        </button>
      )}

      <Modal onRequestClose={handleCloseModal} isOpen={isModalOpen}>
        <div className="flex flex-col w-64 items-center bg-red-200 border-blue-300 rounded-md">
          <button onClick={handleCloseModal}>close</button>
          <button
            className="bg-green-100 rounded py-2 px-4 my-2"
            onClick={() => connectWithMetamask()}
          >
            Connect MetaMask
          </button>
          <button
            className="bg-green-100 rounded py-2 px-4 my-2"
            onClick={() => connectWithWalletConnect()}
          >
            Connect WalletConnect
          </button>
        </div>
      </Modal>
    </div>
  )
}
