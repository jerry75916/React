import "./category-item.style";
import {
  Category_Container,
  Category_body_Container,
  Background_Image,
} from "./category-item.style";
import { useNavigate } from "react-router-dom";
const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const goToLink = () => {
    navigate(`/${route}`);
  };
  return (
    <Category_Container>
      <Background_Image Image={imageUrl} />
      <Category_body_Container onClick={goToLink}>
        <h2>{title}</h2>
        <p>Shopping Now</p>
      </Category_body_Container>
    </Category_Container>
  );
};

export default CategoryItem;
