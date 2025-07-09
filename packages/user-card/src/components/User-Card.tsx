import Information from "./Information";
import Notification from "./Notification";

export default function UserCard() {
  return (
    <div className="2xl:flex-[calc(1/5*100%)] flex-[calc(1/4*100%)] border border-gray-200 rounded-lg h-fit">
      <Information />
      <Notification />
    </div>
  );
}
