type Data = {
  id: number;
  message: string;
  read: boolean;
};

interface NotificationState {
  isModalOpen: boolean;
  notifications: Array<Data>;
}

interface NotificationActions {
  toggleModal: () => void;
  setAllNotificationsRead: () => void;
  setNotificationById: (id: number) => void;
}

export type { Data, NotificationState, NotificationActions };
