import Layout from "../../../layouts/Layout";
import { ArtistMocks, LabelPropsMocks } from "../../../mockups/mocks";
import About from "../../shared/about/About";
import PlayList from "../../shared/playlist/Playlist";

function ArtistScreen() {
  return (
    <Layout
      heading={
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>Tracks in library: 2000</h1>
        </div>
      }
    >
      <About title={"Artist"} info={ArtistMocks} />
      <PlayList
        url="/artist/[id]"
        playList={LabelPropsMocks.songs}
        length={LabelPropsMocks.length}
        pagination={true}
        title={"Release"}
        photo={true}
      />
    </Layout>
  );
}

export default ArtistScreen;
