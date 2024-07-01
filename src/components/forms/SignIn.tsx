"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSignInUser, signInSchema } from "@/schemas/signIn.schema";
import { UserContext } from "@/context/UserContext";
import React from "react";

const SignIn = () => {

    const userContext = React.useContext(UserContext)

    const userLogin = userContext?.userLogin
    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSignInUser>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: any) => {
    userLogin(data);
    reset();
  };

  return (
    <div className="flex flex-col gap-4">
      <h4>Acesse sua conta</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label={"Email"}
          type={"text"}
          placeholder={"Digite o seu email aqui"}
          {...register("email", { required: true })}
        />
        {errors.email ? <p className="text-sm">{errors.email.message}</p> : null}
        <Input
          label={"Senha"}
          type={"text"}
          placeholder={"Digite sua senha"}
          {...register("password", { required: true })}
        />
        {errors.password ? <p className="text-sm">{errors.password.message}</p> : null}
        <Button type="submit">Entre!</Button>
      </form>
    </div>
  );
};

export default SignIn;
