import { ItemProps } from './artistItem.interface'
import styles from './ArtistItem.module.scss'
import { Icon } from '@iconify/react';

function ArtistItem({ item }: ItemProps) {
  const { name, label, listen, photoUrl } = item
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <img src={photoUrl} alt="" className={styles.photo} />
        <div className={styles.description}>
          <p>{name}</p>
          <p>{label}</p>
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.like}>
          <Icon icon="akar-icons:heart" color="white" width="15" />
        </button>
        <div className={styles.minWrapper}>
          <div className={styles.listeners}>
            <Icon icon="akar-icons:headphone" color="white" width="15" /> <span>{listen}</span>
          </div>
          <button className={styles.share}>
            <Icon icon="ant-design:share-alt-outlined" color="white" width="15" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArtistItem
