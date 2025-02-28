import { createContext, Dispatch, SetStateAction } from "react";
import { GroupProp } from "../routes/groupPage";

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
