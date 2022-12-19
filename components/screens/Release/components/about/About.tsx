import { AboutRelease } from '../../releaseScreen.interface'
import styles from './About.module.scss'

interface AboutProps {
  data: AboutRelease
}

function About({ data }: AboutProps) {
  console.log(data)
  const { photoUrl, year, label, descriptionTitle, description } = data
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo} style={{ backgroundImage: `url(${photoUrl})` }}></div>

      <div className={styles.text}>
        <p>Year of release <span>{year}</span></p>
      </div>
      <div className={styles.text}>
        <p>Label <span>{year}</span></p>
      </div>
      <div className={styles.direction}>
        <span>{descriptionTitle}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default About
