import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://justinehats.com/wp-content/uploads/2022/04/11.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://media.wired.com/photos/606ce52941bf976945513469/master/w_1600,c_limit/Gear-Cloudburst-Jacket---Mandarin-Front-square-grey-back.jpgg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4180.jpg?auto=webp&quality=75&width=980&dpr=2",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl:
      "https://image.made-in-china.com/202f0j00fyvajmOdppcZ/Vintage-Hollow-Carved-Women-Dress.webp",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100785446-847__1&recipeName=350",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
