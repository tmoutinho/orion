"use client"

import { useState, useEffect } from "react"
import { ethers } from "ethers"
import { ORD_ABI } from "../lib/contractABI"

const ORD_CONTRACT_ADDRESS = "0xd4f6Dfd7dA9731D11B8789226F6d692f02fea16F"

export default function LiveData() {
  const [ordPrice, setOrdPrice] = useState<string>("Loading...")
  const [marketCap, setMarketCap] = useState<string>("Loading...")
  const [tradingVolume, setTradingVolume] = useState<string>("Loading...")
  const [circulatingSupply, setCirculatingSupply] = useState<string>("Loading...")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider("https://pulsechain-rpc.publicnode.com")
        const ordContract = new ethers.Contract(ORD_CONTRACT_ADDRESS, ORD_ABI, provider)

        // Fetch circulating supply
        const supply = await ordContract.circulatingSupply()
        const decimals = await ordContract.decimals()
        const formattedSupply = ethers.utils.formatUnits(supply, decimals)
        setCirculatingSupply(`${Number.parseFloat(formattedSupply).toLocaleString()} ORD`)

        // Fetch price (this is a placeholder - you'll need to implement a real price fetching mechanism)
        const price = await fetchPrice()
        setOrdPrice(`$${price.toFixed(4)}`)

        // Calculate market cap
        const mcap = Number.parseFloat(formattedSupply) * price
        setMarketCap(`$${mcap.toLocaleString()}`)

        // Fetch trading volume (this is a placeholder - you'll need to implement a real volume fetching mechanism)
        const volume = await fetchVolume()
        setTradingVolume(`$${volume.toLocaleString()}`)
      } catch (error) {
        console.error("Error fetching data:", error)
        setOrdPrice("Error fetching price")
        setMarketCap("Error calculating market cap")
        setTradingVolume("Error fetching volume")
        setCirculatingSupply("Error fetching supply")
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  // Placeholder function to fetch price - you'll need to implement this
  async function fetchPrice(): Promise<number> {
    // This is a placeholder. You'll need to implement actual price fetching logic.
    // This might involve querying a DEX or using an oracle.
    return 0.1 // Placeholder price
  }

  // Placeholder function to fetch volume - you'll need to implement this
  async function fetchVolume(): Promise<number> {
    // This is a placeholder. You'll need to implement actual volume fetching logic.
    // This might involve querying DEX contracts or analyzing transfer events.
    return 1000000 // Placeholder volume
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white bg-opacity-10 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">ORD Price</h3>
        <p>{ordPrice}</p>
      </div>
      <div className="bg-white bg-opacity-10 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Market Cap</h3>
        <p>{marketCap}</p>
      </div>
      <div className="bg-white bg-opacity-10 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Trading Volume (24h)</h3>
        <p>{tradingVolume}</p>
      </div>
      <div className="bg-white bg-opacity-10 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Circulating Supply</h3>
        <p>{circulatingSupply}</p>
      </div>
    </div>
  )
}

