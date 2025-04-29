import { useContext } from "react";
import { UserContext } from "../hooks/UserContext";


export default function SubSection() {
  const context = useContext(UserContext);

  if(context === null) {
    return
  }

  const user = context.user;

  return (
    <div className="sub-section">
      <p>SubSection</p>
      <p>{user}</p>
    </div>
  )
}