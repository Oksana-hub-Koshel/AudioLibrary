import { Song } from '../../../about/about.interface'
import styles from './Song.module.css'
import { Icon } from '@iconify/react';
import { SongItemProps } from '../../playList.interface';


function SongItem({ song, index, photo }: SongItemProps) {
  const { album, artist, bpm, classOfSong, length, photoUrl, style, title, year } = song
  return (
    <>
      <div className={styles.control}>
        <div className={styles.number}>
          {index}
        </div>
        {photo ? <img src={photoUrl} alt="" className={styles.photo} /> : null}
        <div className={styles.play}>
          <Icon icon="material-symbols:play-circle-rounded" color="white" width="26" height="26" vFlip={true} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          {title}
        </div>
        <div className={styles.text}>
          {artist}
        </div>
        <div className={styles.text}>
          {album}
        </div>
        <div className={styles.text}>
          {style}
        </div>
        <div className={styles.text}>
          {bpm} BPM
        </div>
        <div className={styles.text}>
          {classOfSong}
        </div>
        <div className={styles.text}>
          {year}
        </div>
        <div className={styles.text}>
          {length}
        </div>
      </div>
    </>
  )
}

export default SongItem

