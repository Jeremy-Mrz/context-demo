import { useUserContext } from "../hooks/UserContext"

export default function Header() {
  const {user} = useUserContext();

  return (
    <header>
      <h1>Header</h1>
      <p>{user}</p>
    </header>
  )
}