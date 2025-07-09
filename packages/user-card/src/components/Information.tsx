import { IoIosNotificationsOutline } from "react-icons/io";
import useNotificationStore from "../store";

export default function Information() {
  const { toggleModal, notifications } = useNotificationStore();

  const unReadCount = notifications.filter(
    (notification) => !notification.read
  )?.length;

  return (
    <article className="max-w-sm mx-auto p-4 bg-white rounded-xl flex items-center space-x-4 select-none">
      <figure>
        <img
          className="w-16 h-16 rounded-full object-cover"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Yücel YILMAZ"
        />
      </figure>

      <section className="flex-1">
        <header className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Yücel YILMAZ
            </h2>
            <p className="text-sm text-gray-500">yclylmzx@gmail.com</p>
          </div>
          <div className="relative">
            <IoIosNotificationsOutline
              size={24}
              className="cursor-pointer"
              onClick={toggleModal}
            />
            {unReadCount > 0 && (
              <span className="absolute top-[-9px] right-[-8px] text-xs text-white bg-gray-500 w-4 h-4 text-center line rounded-[50%] leading-4">
                {unReadCount}
              </span>
            )}
          </div>
        </header>
      </section>
    </article>
  );
}
