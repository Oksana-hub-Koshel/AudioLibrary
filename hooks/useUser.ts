import { useAppSelector } from "../store/hooks"

export function useUser() {
  const { id, firstName } = useAppSelector(state => state.user)

  return {
    id,
    firstName
  }
}