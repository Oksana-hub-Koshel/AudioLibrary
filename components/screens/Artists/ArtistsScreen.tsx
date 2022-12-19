import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../../layouts/Layout"
import { ArtistsMocks } from "../../../mockups/mocks"
import AlphabetBar from "./components/alphabetBar/AlphabetBar"
import ArtistsWrapper from "./components/artistsWrapper/ArtistsWrapper"

const ArtistsScreen = () => {
  const { query, isReady } = useRouter()
  const [q, setQ] = useState<string>("a")
  useEffect(() => {
    if (query.q) {
      setQ(query.q as string)
    }
  }, [query.q])
  return (
    <Layout>
      <AlphabetBar />
      <ArtistsWrapper query={isReady ? q : null} data={ArtistsMocks} />
    </Layout>
  )
}

export default ArtistsScreen
