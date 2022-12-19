import styles from './Titles.module.css'


function Titles() {
  return (
    <>
      <div >
      </div>
      <div className={styles.wrapper}>
        <div className={styles.item} >
          Title
        </div>
        <div className={styles.item}>
          Artist
        </div>
        <div className={styles.item}>
          Album
        </div>
        <div className={styles.item}>
          Style
        </div>
        <div className={styles.item}>
          BPM
        </div>
        <div className={styles.item}>
          Class
        </div>
        <div className={styles.item}>
          Year
        </div>
        <div className={styles.item}>
          Length
        </div>
      </div>

    </>
  )
}

export default Titles
