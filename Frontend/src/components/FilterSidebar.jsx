function FilterSidebar() {
  return (
    <aside className="w-[260px] pr-6 border-r hidden lg:block">

      <h2 className="font-semibold mb-4">Filters</h2>

      <div className="space-y-5">

        <div>
          <p className="font-medium mb-2">Gender</p>
          <label className="block"><input type="checkbox" /> Women</label>
          <label className="block"><input type="checkbox" /> Men</label>
        </div>

        <div>
          <p className="font-medium mb-2">Size</p>
          <label className="block"><input type="checkbox" /> 7</label>
          <label className="block"><input type="checkbox" /> 8</label>
          <label className="block"><input type="checkbox" /> 9</label>
        </div>

        <div>
          <p className="font-medium mb-2">Price</p>
          <label className="block"><input type="checkbox" /> Under ₹5000</label>
          <label className="block"><input type="checkbox" /> ₹5000+</label>
        </div>

      </div>
    </aside>
  );
}

export default FilterSidebar;