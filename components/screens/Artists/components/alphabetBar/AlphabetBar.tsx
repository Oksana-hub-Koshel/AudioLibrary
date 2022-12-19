import { useRouter } from "next/router"
import { memo, useCallback, useMemo } from "react"
import styles from './AlphabetBar.module.css'
import Letter from "./components/Letter/Letter"

function AlphabetBar() {
  const { query, push, isReady } = useRouter()

  const Alphabet = useMemo(() =>
    ['0-9', ...'abcdefghijklmnopqrstuvwxyz']
    , [])
  const Callbacks = {
    switchPage: useCallback((value: string) => {
      isReady && push({ pathname: "/artists", query: { ...query, q: value } })
    }, [query]),
  }
  return (
    <div className={styles.wrapper}>
      {Alphabet.map((value, index) => <Letter query={query.q} key={index} callBack={Callbacks.switchPage} letter={value} active={value === query.q} />)}
    </div>
  )
}

export default memo(AlphabetBar)
