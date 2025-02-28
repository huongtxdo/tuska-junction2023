import { useState } from "react";
import { Outlet } from "react-router-dom";
import { GroupProp } from "./groupPage";
import { ToastContainer } from "react-toastify";

import { AppState } from "../context/app";

export default function Hello() {
  const [chosenGroup, setChosenGroup] = useState<GroupProp | null>(null);
  const [chosenTime, setChosenTime] = useState<string | null>(null);
  const [firstSessionCompleted, setFirstSessionCompleted] = useState(false);

  return (
    <AppState.Provider
      value={{
        chosenGroup,
        setChosenGroup,
        chosenTime,
        setChosenTime,
        firstSessionCompleted,
        setFirstSessionCompleted,
      }}
    >
      <ToastContainer style={{ padding: 10 }} />
      <Outlet />
    </AppState.Provider>
  );
}
