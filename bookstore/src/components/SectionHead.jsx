export default function SectionHead() {
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">List</h4>

      {/* filter state will be connected here. */}
      <div className="flex items-center space-x-4">
        <button className="filter-btn active-filter" id="lws-filterAll">
          All
        </button>
        <button className="filter-btn" id="lws-filterFeatured">
          Featured
        </button>
      </div>
    </div>
  );
}
