import { create } from "zustand";
import { notifications } from "../mock";
import type {
  NotificationActions,
  NotificationState,
} from "../types/notification";

const useNotificationStore = create<NotificationState & NotificationActions>(
  (set) => ({
    isModalOpen: false,
    notifications,
    toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
    setAllNotificationsRead: () =>
      set((state) => ({
        notifications: state.notifications.map((notification) => ({
          ...notification,
          read: true,
        })),
      })),
    setNotificationById: (id: number) =>
      set((state) => ({
        notifications: state.notifications.map((notification) =>
          notification.id === id
            ? { ...notification, read: true }
            : notification
        ),
      })),
  })
);

export default useNotificationStore;
