import styles from './Letter.module.css'
import { LetterProps } from "./letter.interface"
import { memo, useEffect, useState } from 'react'

function Letter({ letter, active, callBack, query }: LetterProps) {
  const [current, setCurrent] = useState<boolean>()
  useEffect(() => {
    if (!query && letter === "a") {
      setCurrent(true)
    } else if (query) {
      setCurrent(active)
    }
  }, [query])

  return (
    <div onClick={() => callBack(letter)} className={current ? styles.active : styles.default}>
      {letter.toUpperCase()}
    </div>
  )
}

export default memo(Letter) 
