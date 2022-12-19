import { TitleRelease } from '../../releaseScreen.interface'
import styles from './Title.module.scss'

interface TitleProps {
  data: TitleRelease
}

function Title({ data }: TitleProps) {
  const { title, author } = data
  return (
    <div className={styles.wrapper}>
      <p>Release</p>
      <div className={styles.title}>{title}</div>
      <div className={styles.author}>{author}</div>
    </div>

  )
}

export default Title
