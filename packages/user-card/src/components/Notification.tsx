import useNotificationStore from "../store";

export default function Notification() {
  const {
    isModalOpen,
    notifications,
    setAllNotificationsRead,
    setNotificationById,
  } = useNotificationStore();

  if (!isModalOpen) {
    return null;
  }

  return (
    <article className="flex justify-center items-center xl:p-4">
      <div className="bg-white rounded-lg p-4 xl:p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold text-gray-800">Bildirimler</h2>
          <button
            className="bg-gray-500 text-white font-medium py-2 px-4 rounded-md text-xs cursor-pointer hover:bg-gray-800 transition-colors duration-300 ease-in-out"
            onClick={setAllNotificationsRead}
          >
            Tümünü okundu yap
          </button>
        </div>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => setNotificationById(notification.id)}
              className={`${
                notification.read ? "bg-gray-100" : "bg-white"
              } border border-gray-200 rounded-lg p-3 text-gray-700 text-xs cursor-pointer hover:bg-gray-500 hover:text-gray-50 transition-colors duration-300 ease-in-out`}
            >
              {notification.message}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
