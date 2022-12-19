import { useAppSelector } from "../store/hooks"

export function useSongs() {
  const { id, play } = useAppSelector(state => state.player)

  return {
    id,
    play,
  }
}