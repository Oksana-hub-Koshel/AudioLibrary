import { memo } from "react"
import Swiper from "./components/swiper/Swiper"
import { AboutProps } from "./about.interface"
import styles from './About.module.css'
import SocialLink from "./components/socialLink/SocialLink"

function About({ info, title }: AboutProps) {
  return (
    <div className={`${styles.wrapper} ${!info.photos && `${styles.wrapper_active}`}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {info.photos && <Swiper slides={info.photos} />}
      {info.photoUrl && <img className={styles.photo} src={info.photoUrl} alt="" />}
      <div className={styles.info}>
        {info.title && <h2 className={`${styles.title} ${styles.item}`}>{info.title}</h2>}
        {info.profile && <div className={`${styles.description} ${styles.item}`}>Profile: <span>{info.profile}</span></div>}
        {info.realName && <div className={`${styles.text} ${styles.item}`}>Real name <span>{info.realName}</span></div>}
        {info.birthDay && <div className={`${styles.text} ${styles.item}`}>Date of birth<span>{info.birthDay}</span></div>}
        {info.placeOfBirth && <div className={`${styles.text} ${styles.item}`}>Place of birth <span>{info.placeOfBirth}</span></div>}
        {info.placeLiving && <div className={`${styles.text} ${styles.item}`}>Place of <span>{info.placeLiving}</span></div>}
        {info.aliases && <div className={`${styles.text} ${styles.item}`}>Aliases: <span>{info.aliases}</span></div>}
        {info.subLabels && <div className={`${styles.text} ${styles.item}`}>Sublabels <span>{info.subLabels}</span></div>}
        {info.socialsLinks && <div className={styles.item}>
          Social links
          <div className={`${styles.social_links} ${styles.item}`}>
            {info.socialsLinks.map((link, index) => <SocialLink key={`${link.link}${index}`} info={link} />)}
          </div>
        </div>}
        {info.website && <SocialLink info={info.website} title="Website" />}
        {info.youtube && <SocialLink info={info.youtube} title="Youtube" />}
        {info.media && <div className={styles.item}>
          Media
          <div className={styles.social_links}>
            {info.media.map((link, index) => <SocialLink key={`${link.link}${index}`} info={link} />)}
          </div>
        </div>}
        {info.discogs && <SocialLink info={info.discogs} title="Discogs" />}
        {info.bearport && <SocialLink info={info.bearport} title="Bearport" />}
        {info.contactInfo && <SocialLink info={info.contactInfo} title="Contact Info" />}
        {info.daw && <div className={`${styles.text} ${styles.item}`}>DAW <span>{info.daw}</span></div>}
        {info.typeVoice && <div className={`${styles.text} ${styles.item}`}>Type of voice <span>{info.typeVoice}</span></div>}
        {info.status && <div className={`${styles.text} ${styles.item}`}>Status <span>{info.status}</span></div>}
      </div>
    </div>
  )
}

export default memo(About) 
