export interface LetterProps {
  letter: string
  active: boolean
  callBack: (value: string) => void
  query: undefined | string | string[]
}