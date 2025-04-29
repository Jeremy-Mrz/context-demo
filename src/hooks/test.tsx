import { createContext, useContext } from "react";

interface UserContextValue {
  user: {
    name: string;
    email: string;
  }
}

export const UserContext = createContext<null | UserContextValue>(null);

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const user = { name: "jérémy", email: "jm@mail.com" };
  return (
    <UserContext value={{ user }}>
      {children}
    </UserContext>
  )
}

export function useUserContext() {

  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('The user context must be used within the UserContext Provider');
  }

  return context;

}