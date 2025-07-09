import Information from "./Information";
import Notification from "./Notification";

export default function UserCard() {
  return (
    <div className="flex-1/3 border border-gray-200 rounded-lg">
      <Information />
      <Notification />
    </div>
  );
}
