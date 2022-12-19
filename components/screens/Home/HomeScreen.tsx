import Layout from "../../../layouts/Layout";
import Menu from "./components/menu/Menu";
import Songs from "./components/songs/Songs";
import style from "./components/HomeScreen.module.css";
import { LEADERS } from "../../../mockups/data";
import { useCallback, useMemo, useState } from "react";
import { useSongs } from "../../../hooks/useSongs";
import { useAppDispatch } from "../../../store/hooks";
import { setPause, setPlay } from "../../../store/slices/playerSlice";



const HomeScreen = () => {
  const [view, setView] = useState<string>("line")
  const { id, play } = useSongs();
  const dispatch = useAppDispatch();
  const callbacks = {
    pause: useCallback((songId: number) => {
      dispatch(
        setPause()
      );
    }, []),
    play: useCallback((songId: number) => {
      dispatch(
        setPlay({
          id: songId,
        })
      );
    }, [])
  }
  return (
    <Layout heading={<div style={{display: 'flex', alignItems: 'center'}}><h1>Top 100</h1><h3 style={{marginLeft: 20}}>New Releases</h3></div>}>
      <Menu state={view} setState={setView} />
      <div className={view === "line"
        ? `${style.container_global_line}`
        : `${style.container_global_block}`}>
        {LEADERS.map((item, index) => {
          return <Songs key={item.id} play={callbacks.play} pause={callbacks.pause} leaders={item} state={view} idCurrent={id} />;
        })}
      </div>
    </Layout>
  );
};

export default HomeScreen;
