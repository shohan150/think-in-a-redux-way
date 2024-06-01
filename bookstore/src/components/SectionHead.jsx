import { useDispatch, useSelector } from "react-redux";
import { toogle } from "../redux/filter/actionIdentifiers";

export default function SectionHead() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">List</h4>

      {/* filter state will be connected here. */}
      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${!filters.showFeatured && "active-filter"}`}
          id="lws-filterAll"
          onClick={() => dispatch(toogle(false))}
        >
          All
        </button>
        <button
          className={`filter-btn ${filters.showFeatured && "active-filter"}`}
          id="lws-filterFeatured"
          onClick={() => dispatch(toogle(true))}
        >
          Featured
        </button>
      </div>
    </div>
  );
}
