import { Song, } from "../about/about.interface"

export interface PlayListProps {
  playList: Song[] // по хорошему надо сделать заглушку на случай отсутствия данных 
  length: number
  pagination: boolean
  title?: string,
  url?: string,
  photo: boolean
}

export interface SongItemProps {
  song: Song
  index: number
  photo: boolean
}