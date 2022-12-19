import { useEffect, useMemo, useState } from "react"
import { Artist } from "../../artists.interface"
import ArtistItem from "../artistsItem/ArtistItem"
import { ArtistProps } from "./artistsWrapper.interface"
import styles from './ArtistsWrapper.module.scss'



function ArtistsWrapper({ data, query }: ArtistProps) {
  const [sortArray, setSortArray] = useState<Artist[]>()
  const Alphabet = useMemo(() => [...'abcdefghijklmnopqrstuvwxyz'], [])
  useEffect(() => {
    let items: Artist[] | [] = []
    if (query) {
      if (Alphabet.indexOf(query.toLowerCase()) != -1) {
        items = data.filter(item => item.name[0].toLowerCase() === query.toLowerCase())
      } else {
        items = data.filter(item => Alphabet.indexOf(item.name[0].toLowerCase()) === -1)
      }
    }
    setSortArray(items)
  }, [query])

  return (
    <div className={styles.wrapper}>
      {sortArray?.length ? sortArray?.map((item, index) => <ArtistItem key={index + item.name} item={item} />) :
        <div>Не найдено</div>
      }
    </div>
  )
}

export default ArtistsWrapper
