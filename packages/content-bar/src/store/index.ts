import { create } from "zustand";
import type { ContentState, ContentActions } from "../types";

const useContentStore = create<ContentState & ContentActions>((set) => ({
  defaultView: "Card",
  toggleView: (currentView: string) =>
    set(() => ({ defaultView: currentView })),
}));

export default useContentStore;
