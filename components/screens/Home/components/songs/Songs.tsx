import styles from "./Songs.module.scss";
import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";

const Songs = function ({ leaders, state, idCurrent, play, pause }: any) {
  const { name, image, abbr, like, listeners, year, time, id } = leaders;

  const [songPlay, setSongPlay] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (idCurrent) {
      idCurrent === id ? setActive(true) : setActive(false);
    }
  }, [idCurrent, active]);
  const callbacks = {
    play: useCallback((e: React.SyntheticEvent) => {
      e.stopPropagation();
      play(id);
      setSongPlay(true);
      setActive(true);
    }, []),
    pause: useCallback((e: React.SyntheticEvent) => {
      e.stopPropagation();
      pause(id);
      setSongPlay(false);
    }, []),
  };

  return (
    <div
      className={`${
        state === "line"
          ? `${styles.wrapper_line} ${active ? `${styles.color_line}` : null}`
          : `${styles.wrapper_modal}`
      } `}
      onClick={callbacks.play}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className={
          state === "line"
            ? `${styles.photo_controls_line}`
            : `${styles.photo_controls_modal}`
        }
      >
        {state === "line" ? (
          <div>
            {!songPlay ? (
              <Icon
                onClick={callbacks.play}
                icon="akar-icons:play"
                vFlip={true}
                className={`${styles.play_icon} ${
                  active ? `${styles.status_play_on}` : null
                }`}
              />
            ) : (
              <Icon
                onClick={callbacks.pause}
                icon="ant-design:pause-outlined"
                vFlip={true}
                className={`${styles.pause_icon} ${
                  active ? `${styles.status_pause_on}` : null
                }`}
              />
            )}
          </div>
        ) : null}

        <div>
          <img
            src={image}
            alt=""
            className={`${
              state === "line"
                ? `${styles.photo_line}`
                : `${styles.photo_modal}`
            }`}
          />

          <div>
            {state !== "line" ? (
              <div className={styles.icons}>
                <Icon
                  icon="akar-icons:heart"
                  color="black"
                  vFlip={true}
                  className={styles.item1}
                />
                {songPlay ? (
                  <Icon
                    icon="bi:play-circle"
                    color="black"
                    vFlip={true}
                    width="50"
                    onClick={callbacks.pause}
                    className={styles.item2}
                  />
                ) : (
                  <Icon
                    color="black"
                    width="50"
                    onClick={callbacks.play}
                    icon="ant-design:pause-circle-outlined"
                    className={styles.item2}
                  />
                )}

                <Icon
                  icon="clarity:share-line"
                  color="black"
                  vFlip={true}
                  className={styles.item3}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div
        className={
          state === "line"
            ? `${styles.about_info_line}`
            : `${styles.about_info_modal}`
        }
      >
        <div
          className={
            state === "line"
              ? `${styles.description_and_icons_line}`
              : `${styles.description_and_icons_block}`
          }
        >
          <div
            className={
              state === "line"
                ? `${styles.about_line}`
                : `${styles.about_block}`
            }
          >
            <div
              className={
                state === "line"
                  ? `${styles.title_line}`
                  : `${styles.title_block}`
              }
            >
              {name}
            </div>
            <div
              className={
                state === "line"
                  ? `${styles.album_line}`
                  : `${styles.album_block}`
              }
            >
              {abbr}
            </div>
          </div>
          <div
            className={
              state === "line"
                ? `${styles.heart_and_time_line}`
                : `${styles.heart_and_time_block}`
            }
          >
            {state === "line" ? (
              <Icon
                icon="akar-icons:heart"
                vFlip={true}
                className={
                  state === "line"
                    ? `${styles.heart_line}`
                    : `${styles.heart_block}`
                }
              />
            ) : null}
            <div>{state === "line" ? <span>{time}</span> : null}</div>
          </div>
        </div>
        <div
          className={
            state === "line"
              ? `${styles.year_and_controls_line}`
              : `${styles.year_and_controls_block}`
          }
        >
          <div
            className={
              state === "line" ? `${styles.year_line}` : `${styles.year_block}`
            }
          >
            {year}
          </div>
          <div
            className={
              state === "line"
                ? `${styles.controls_line}`
                : `${styles.controls_block}`
            }
          >
            <div
              className={
                state === "line"
                  ? `${styles.like_number_icon_line}`
                  : `${styles.like_number_icon_block}`
              }
            >
              <Icon
                className={
                  state === "line"
                    ? `${styles.like_icon_line}`
                    : `${styles.like_icon_block}`
                }
                icon="bx:like"
                color="grey"
                vFlip={true}
              />
              <span
                className={
                  state === "line"
                    ? `${styles.like_number_line}`
                    : `${styles.like_number_block}`
                }
              >
                {like}
              </span>
            </div>
            <div
              className={
                state === "line"
                  ? `${styles.headphones_listeners_line}`
                  : `${styles.headphones_listeners_block}`
              }
            >
              <Icon
                className={
                  state === "line"
                    ? `${styles.headphones_line}`
                    : `${styles.headphones_block}`
                }
                icon="bi:headphones"
                color="grey"
                vFlip={true}
              />
              <span
                className={
                  state === "line"
                    ? `${styles.listeners_number_line}`
                    : `${styles.listeners_number_block}`
                }
              >
                {listeners}
              </span>
            </div>

            <div className={styles.icon}>
              {state === "line" ? (
                <Icon
                  icon="clarity:share-line"
                  vFlip={true}
                  className={
                    state === "line"
                      ? `${styles.share_icon_line}`
                      : `${styles.share_icon_block}`
                  }
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.icons}></div>
    </div>
  );
};
export default Songs;
