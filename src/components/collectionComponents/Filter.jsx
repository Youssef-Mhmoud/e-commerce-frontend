const Filter = ({sortType, setSortType}) => {
  return (
    <select
      className="border-2 border-gray-300 text-sm p-2"
      onChange={(e) => setSortType(e.target.value)}
      value={sortType}
    >
      <option value="relevant">Sort by: Relevant</option>
      <option value="low-high">Sort by: Low to High</option>
      <option value="high-low">Sort by: High to Low</option>
    </select>
  );
};

export default Filter;
