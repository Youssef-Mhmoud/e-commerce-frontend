const Categories = ({ category, setCategory, categoryLabel }) => {
  const toggleCategoryHandler = (e) => {
    if (category.includes(e.target.value))
      setCategory((prevCat) =>
        prevCat.filter((item) => item !== e.target.value)
      );
    else {
      setCategory((prevCat) => [...prevCat, e.target.value]);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        className="w-3"
        type="checkbox"
        id={categoryLabel}
        value={categoryLabel}
        checked={category.includes(categoryLabel)}
        onChange={toggleCategoryHandler}
      />
      <label htmlFor={categoryLabel}>{categoryLabel}</label>
    </div>
  );
};

export default Categories;
