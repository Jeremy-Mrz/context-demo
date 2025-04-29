import { useUserContext } from "../hooks/UserContext"

export default function About() {
  const {user} = useUserContext();

  return (
    <>
      <div className="about">
        <h1>About Page</h1>
        <p>{user}</p>
      </div>
    </>
  )
}