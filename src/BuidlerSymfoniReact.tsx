import { providers, Signer, ethers, ContractFactory } from "ethers";
import React, { useEffect, useState } from "react";
import Web3Modal, { IProviderOptions } from "web3modal";
import { Box, Text } from "grommet";
import { SpinnerCircular } from "spinners-react";

interface Contract {
    storage: any,
    contract: ethers.utils.Interface,
    factory: ContractFactory,
    ready: () => boolean,
    attach: (address: string) => Promise<Boolean>
}

// export interface BuidlerSymfoniReactClass {
//     ready: () => boolean,
//     provider: providers.Provider,
//     signer: Promise<Signer>,
//     contracts: {
//         [contractName: string]: Contract
//     }
// }


// declare interface BuidlerSymfoniReact {
//     on(event: 'onReady', listener: (message: string) => void): this;
// }
// class BuidlerSymfoniReactClass extends EventEmitter {
//     public ready: boolean
//     public provider: providers.Provider
//     signer: Promise<Signer>

//     constructor() {
//         super()
//         this.signer = Promise.reject("No signer initiated");
//         this.initProvider()
//         // const providerFromConfig = new ethers.providers.JsonRpcProvider()
//     }



// }

const defaultContracts: Contract[] = []
export const ContractsContext = React.createContext<[Contract[], React.Dispatch<React.SetStateAction<Contract[]>>]>([defaultContracts, () => { }]);

const defaultProvider: providers.Provider = undefined
export const ProviderContext = React.createContext<[providers.Provider, React.Dispatch<React.SetStateAction<providers.Provider>>]>([defaultProvider, () => { }]);

const defaultCurrentAddress: string = ""
export const CurrentAddressContext = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>([defaultCurrentAddress, () => { }]);

const defaultSigner: Signer = undefined
export const SignerContext = React.createContext<[Signer, React.Dispatch<React.SetStateAction<Signer>>]>([defaultSigner, () => { }]);

interface Props { }

export const BuidlerSymfoniReact: React.FC<Props> = ({ children }) => {
    const [ready, setReady] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [providerName, setProviderName] = useState<string>();
    const [signer, setSigner] = useState<Signer>(defaultSigner);
    const [provider, setProvider] = useState<providers.Provider>(defaultProvider);
    const [contracts, setContracts] = useState(defaultContracts);
    const [currentAddress, setCurrentAddress] = useState<string>(defaultCurrentAddress);

    /* functions */
    const getProvider = async (): Promise<providers.Provider | undefined> => {
        // TODO Should come from plugin
        const providerPriority = ["web3modal", "dev", "HTTP://127.0.0.1:8545"];

        const provider = await providerPriority.reduce(async (maybeProvider: Promise<providers.Provider | undefined>, providerIdentification) => {
            let foundProvider = await maybeProvider
            if (foundProvider) {
                return Promise.resolve(foundProvider)
            }
            else {
                switch (providerIdentification.toLowerCase()) {
                    case "web3modal":
                        try {
                            const provider = await getWeb3ModalProvider()
                            const web3provider = new ethers.providers.Web3Provider(provider);
                            return Promise.resolve(web3provider)
                        } catch (error) {
                            return Promise.resolve(null)
                        }
                    default:
                        return Promise.resolve(null)
                }
            }
        }, Promise.resolve(null)) // end reduce

        return provider
    }

    const getWeb3ModalProvider = async (): Promise<any> => {
        const providerOptions: IProviderOptions = {};
        const web3Modal = new Web3Modal({
            // network: "mainnet",
            cacheProvider: true,
            providerOptions, // required
        });
        return await web3Modal.connect();
    }

    /* effects */
    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            const provider = await getProvider() // getProvider can actually return undefined, see issue https://github.com/microsoft/TypeScript/issues/11094
            if (subscribed && provider) {
                setProvider(provider)
                setProviderName(provider.constructor.name)
                // Web3Provider
                if (provider.constructor.name === "Web3Provider") {
                    const web3provider = provider as ethers.providers.Web3Provider
                    const signer = await web3provider.getSigner()
                    if (subscribed && signer) {
                        setSigner(signer)
                        const address = await signer.getAddress()
                        if (subscribed && address) {
                            setCurrentAddress(address)
                        }
                    }
                }

                setReady(true)
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [])


    return (
        <ProviderContext.Provider value={[provider, setProvider]}>
            <SignerContext.Provider value={[signer, setSigner]}>
                <CurrentAddressContext.Provider value={[currentAddress, setCurrentAddress]}>
                    <ContractsContext.Provider value={[contracts, setContracts]}>
                        {ready &&
                            (children)
                        }
                        {!ready &&
                            <Box align="center">
                                <SpinnerCircular></SpinnerCircular>
                                {messages.map((msg, i) => (
                                    <Text key={i}>{msg}</Text>
                                ))}
                            </Box>
                        }
                    </ContractsContext.Provider>
                </CurrentAddressContext.Provider>
            </SignerContext.Provider>
        </ProviderContext.Provider>
    )
}



// cont buidlerPluginReact = {
// 	ready: () => boolean,
// 	provider: Ethers.provider,
// 	[contractName : HolisticContractObject] : {
// 		storage: {...HolisticObject} // If symfoni storage plugin is present,
// 		contract: TypechainContract (class instance with provider),
// 		factory: TypechainContractFactory (class instance with provider),
// 		ready: boolean,
// 		attach: (address: string) => Promise<Boolean>
// 	}
// }
