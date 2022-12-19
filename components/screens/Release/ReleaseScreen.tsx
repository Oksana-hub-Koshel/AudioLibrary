import { useMemo } from "react"
import Layout from "../../../layouts/Layout"
import { ReleaseData } from "../../../mockups/mocks"
import PlayList from "../../shared/playlist/Playlist"
import About from "./components/about/About"
import Title from "./components/title/Title"
import styles from './ReleaseScreen.module.scss'


function ReleaseScreen() {
  console.log(ReleaseData)
  return (
    <Layout>
      <div className={styles.wrapper}>
        <About data={ReleaseData.about} />
        <div>
          <Title data={ReleaseData.title} />
          <PlayList playList={ReleaseData.songs} pagination={false} photo={false} length={ReleaseData.length} />
          <div>
            Comments And Video
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ReleaseScreen
