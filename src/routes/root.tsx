import { useState, createContext, Dispatch, SetStateAction } from "react";
import { Outlet } from "react-router-dom";
import { GroupProp } from "./groupPage";
import { ToastContainer } from "react-toastify";

type AppStateType = {
  chosenGroup: GroupProp | null;
  setChosenGroup: null | Dispatch<SetStateAction<GroupProp | null>>;
  chosenTime: string | null;
  setChosenTime: null | Dispatch<SetStateAction<string | null>>;
  firstSessionCompleted: boolean;
  setFirstSessionCompleted: null | Dispatch<SetStateAction<boolean>>;
};
export const AppState = createContext<AppStateType>({
  chosenGroup: null,
  setChosenGroup: null,
  chosenTime: null,
  setChosenTime: null,
  firstSessionCompleted: false,
  setFirstSessionCompleted: null,
});

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
