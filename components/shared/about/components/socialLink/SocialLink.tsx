import styles from './Link.module.css'
import { SocialLink } from "./SocialLink.interface"

function SocialLink({ info, title }: SocialLink) {
  const { link, photoUrl } = info
  return (
    <>
      {title ?
        <div className={styles.social_text}>
          {title} <a href={link} target="_blank">{link}</a>
        </div>
        :
        <div className={styles.social_photo}>
          <a href={link} target="_blank"> <img src={photoUrl} alt="" /></a>
        </div>
      }
    </ >
  )
}

export default SocialLink
