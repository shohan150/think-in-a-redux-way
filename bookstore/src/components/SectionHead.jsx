import Selectors from "./Selectors";

export default function SectionHead() {
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">List</h4>

      <Selectors />
    </div>
  );
}
