import { useMemo } from "react"
import Layout from "../../../layouts/Layout"
import { LabelPropsMocks } from "../../../mockups/mocks"
import About from "../../shared/about/About"
import PlayList from "../../shared/playlist/Playlist"


function LabelScreen() {
  return (
    <Layout>
        <About info={LabelPropsMocks.label} />
      <PlayList url="/labels/[id]" playList={LabelPropsMocks.songs} length={LabelPropsMocks.songs.length} pagination={true} photo={true} />
    </Layout>
  )
}

export default LabelScreen
