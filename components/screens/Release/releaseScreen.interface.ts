import { Song } from "../../shared/about/about.interface"

export interface Release {
  about: AboutRelease
  title: TitleRelease
  songs: Song[]
  length: number
}

export interface AboutRelease {
  photoUrl: string,
  year: number,
  label: string,
  description: string
  descriptionTitle: string
}

export interface TitleRelease {
  title: string,
  author: string
}