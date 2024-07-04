"use client"

import LastRead from "@/components/shared/LastRead";
import PopularBooks from "@/components/shared/PopularBooks";
import RatedBook, { IRecentReview } from "@/components/shared/RatedBook";
import SideBar from "@/components/shared/SideBar";
import {  UserContext } from "@/context/UserContext";
import axiosAPI from "@/lib/api";
import { ChevronRight, LineChart } from "lucide-react";
import React, { useEffect, useState } from "react";

const Home = () => {
  const userContext = React.useContext(UserContext)

  const user = userContext?.user


  return (
    <div className="w-full">
      <div className="flex w-[95%] justify-between">
        <SideBar />
        <div className="mt-14 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <LineChart size={32} className="text-icons" />
            <h2 className="text-2xl">Início</h2>
          </div>
          {user ? (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h4 className="text-sm">Sua última leitura</h4>
                <button className="flex items-center text-sm text-stars">
                  Ver todos <ChevronRight strokeWidth={1} />
                </button>
              </div>
              <LastRead />
            </div>
          ) : null}
          <RatedBook />
        </div>
        <div className="mt-16 w-[25%]">
          <PopularBooks />
        </div>
      </div>
    </div>
  );
};

export default Home;
