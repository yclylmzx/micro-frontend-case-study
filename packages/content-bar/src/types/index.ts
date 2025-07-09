interface ContentState {
  defaultView: string;
}

interface ContentActions {
  toggleView: (currentView: string) => void;
}

export type { ContentState, ContentActions };
