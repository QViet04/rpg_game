/**
 * Network Configuration
 * 
 * Configure your IOTA networks and package IDs here
 */

import { getFullnodeUrl } from "@iota/iota-sdk/client"
import { createNetworkConfig } from "@iota/dapp-kit"

// Package IDs - These will be automatically filled when you run `npm run iota-deploy`
export const DEVNET_PACKAGE_ID = "0x8a1a3d2320b54b53daba0a29a2daf5f76ae52c42337e15648ee99df336e1eb3f"
export const TESTNET_PACKAGE_ID = "0x352a4291d74723c67bbe23d5bfe1289e3a2932baa09b15b489d73e9fefbb0275"
export const MAINNET_PACKAGE_ID = ""

// Network configuration
const { networkConfig, useNetworkVariable, useNetworkVariables } = createNetworkConfig({
  devnet: {
    url: getFullnodeUrl("devnet"),
    variables: {
      packageId: DEVNET_PACKAGE_ID,
    },
  },
  testnet: {
    url: getFullnodeUrl("testnet"),
    variables: {
      packageId: TESTNET_PACKAGE_ID,
    },
  },
  mainnet: {
    url: getFullnodeUrl("mainnet"),
    variables: {
      packageId: MAINNET_PACKAGE_ID,
    },
  },
})

export { useNetworkVariable, useNetworkVariables, networkConfig }
