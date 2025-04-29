import { createContext, useContext, useState } from "react";

interface UserContextValues {
  user: string;
}

//STEP2: Créer notre contexte à null
export const UserContext = createContext<null | UserContextValues>(null);

//STEP3: Créer notre provider contexte
export function UserContextProvider({ children }: { children: React.ReactNode }) {

  const user = "jeremy";

  return (
    <UserContext value={{ user }}>
      {children}
    </UserContext>
  )
}

//STEP4: Aller dans le main.tsx

//STEP5: Créer notre propre custom hook pour s'occuper de la vérification
export function useUserContext() {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error('Attention, ton provider doit bien englober tes routes');
  }

  return context;
}