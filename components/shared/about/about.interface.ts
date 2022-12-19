export interface AboutInfo {
  title?: string,
  photoUrl?: string,
  profile?: string,
  subLabels?: string,
  socialsLinks: Link[],
  website?: Link,
  youtube?: Link,
  media: Link[],
  discogs?: Link,
  bearport?: Link,
  contactInfo: Link,
  photos?: string[],
  realName?: string,
  birthDay?: string,
  placeLiving?: string,
  placeOfBirth?: string,
  wikipedia?: Link,
  daw?: string[],
  typeVoice?: string,
  status?: string
  aliases?: string[]
}

export interface Link {
  photoUrl?: string,
  link: string
}

export interface LabelProps {
  label?: AboutInfo,
  songs?: Song[]
}

export interface Song {
  photoUrl: string,
  title: string,
  artist: string,
  album: string,
  style: string,
  bpm: number,
  classOfSong: number,
  year: number,
  length: string
}



export interface ArtistProps {
  photos: string[],
  title: string,
  profile: string,
  website: Link,
  youtube: Link,
  media: Link[],
  discogs: Link,
  bearport: Link,
  contactInfo: Link,
  realName: string,
  birthDay: string,
  placeLiving: string,
  placeOfBirth: string,
  socialsLinks: Link[],
  wikipedia: Link,
  daw: string[],
  typeVoice: string,
  status: string
}

export interface AboutProps {
  info: AboutInfo  // по хорошему надо сделать заглушку на случай отсутствия данных 
  title?: string
}

