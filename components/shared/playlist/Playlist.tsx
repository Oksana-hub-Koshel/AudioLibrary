import { Icon } from "@iconify/react";
import Pagination from "../pagination/Pagination";
import styles from "./Playlist.module.css";
import SongItem from "./components/songItem/SongItem";
import Titles from "./components/titles/Titles";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PlayListProps } from "./playList.interface";

function PlayList({
  playList,
  length,
  pagination,
  title,
  url,
  photo,
}: PlayListProps) {
  const route = useRouter();
  let { query, push, isReady } = route;
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    if (query.page) {
      setPage(+query.page);
    }
  }, [query.page]);

  const MaxLimit: number = Number(page) * 10;
  const MinLimit: number = (Number(page) - 1) * 10;
  const callBacks = {
    switchPage: useCallback(
      ({ selected: selectedPage }: { selected: number }) => {
        isReady &&
          push(
            { pathname: `${url}`, query: { ...query, page: selectedPage + 1 } },
            {},
            { scroll: false }
          );
      },
      [query]
    ),
  };
  const items = {
    sampling: useMemo(() => {
      if (page) {
        if (!MinLimit) {
          return playList.filter((_, index) => index < Number(page) * 10);
        } else {
          return playList
            .filter((_, index) => index <= Number(page) * 10)
            .filter((_, index) => index > (Number(page) - 1) * 10);
        }
      }
    }, [page, MaxLimit, MinLimit]),
  };
  return (
    <div>
      <div className={styles.pagination}>
        {title ? (
          <div className={styles.title}>
            {title} {length - 1}{" "}
          </div>
        ) : null}
        {/*{pagination && <Pagination allSongs={length} page={page} callback={callBacks.switchPage} />}*/}
        <div className={styles.views}>
          {pagination ? (
            <>
              <Icon
                icon="material-symbols:view-module-rounded"
                width="30"
                height="30"
                color="white"
                vFlip={true}
              />
              <Icon
                icon="material-symbols:view-list-rounded"
                width="30"
                height="30"
                color="white"
                vFlip={true}
              />
            </>
          ) : null}
        </div>
      </div>
      <div className={`${styles.wrapper} ${photo ? null : `${styles.small}`}`}>
        <Titles />
        {items.sampling
          ? items.sampling.map((value, index) => (
              <SongItem
                photo={photo}
                key={index + value.length}
                song={value}
                index={MinLimit + 1 + index}
              />
            ))
          : null}
      </div>
      {/*{pagination ? <Pagination allSongs={length} page={page} callback={callBacks.switchPage} /> : null}*/}
    </div>
  );
}

export default PlayList;
