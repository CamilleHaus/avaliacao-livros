"use client"

import { ReactNode, createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { TSignInUser } from "@/schemas/signIn.schema";

interface UserProviderProps {
  children: ReactNode;
}

interface User {
  id?: string;
  name?: string;
  email: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  userLogin: (payload: TSignInUser) => void;
}

//Aqui dentro ^ irá tudo que criamos no contexto do usuário

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
    userLogin: async () => {
      throw new Error('userLogin function not implemented');
    },
  });

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const userLogin = async (payload: TSignInUser) => {
    try {
      //   const { data } = await api.post("/sessions", payload);
      router.push("/");
      setUser(payload);

      //   toast.success("Login efetuado com sucesso!");

      localStorage.setItem("@Livros:token", payload.email);
      //data.token
    } catch (error) {
      console.log(error);

      //   toast.error("Usuário e/ou senha inválidos");
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
