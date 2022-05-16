import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <img
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></img>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shopping Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
