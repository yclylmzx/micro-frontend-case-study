import Content from "./Content";
import Select from "./Select";

export default function ContentBar() {
  return (
    <div className="flex-2/3 border border-gray-200 rounded-lg p-6">
      <Select />
      <Content />
    </div>
  );
}
