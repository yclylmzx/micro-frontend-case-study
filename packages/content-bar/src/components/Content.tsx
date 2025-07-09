import { FaRegCalendarAlt } from "react-icons/fa";
import { contents } from "../mock";
import useContentStore from "../store";

export default function Content() {
  const { defaultView } = useContentStore();

  return (
    <div
      className={
        defaultView === "Card"
          ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
          : "grid grid-cols-1 gap-4"
      }
    >
      {contents.map((content) => (
        <div
          key={content.id}
          className={`
            bg-white rounded-lg p-6 border border-gray-300
            ${
              defaultView === "Card"
                ? "shadow-md hover:shadow-lg transition duration-300"
                : ""
            }
            ${
              defaultView === "List"
                ? "flex items-center justify-between"
                : "flex-col"
            }
            ${defaultView === "List" ? "hover:bg-gray-50" : ""}
          `}
        >
          <div className={defaultView === "List" ? "flex-grow" : ""}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {content.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{content.description}</p>
          </div>
          <div
            className={`flex items-center text-gray-500 text-xs
              ${defaultView === "List" ? "flex-shrink-0 ml-4" : ""}
            `}
          >
            <FaRegCalendarAlt className="mr-2" />
            {content.date}
          </div>
        </div>
      ))}
    </div>
  );
}
