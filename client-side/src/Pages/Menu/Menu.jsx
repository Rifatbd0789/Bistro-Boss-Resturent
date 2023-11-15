import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import MenuImg from "../../assets/menu/banner3.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../componenets/Sectiontitle/Sectiontitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={MenuImg} title={"our menu"}></Cover>
      {/* Main Cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered menu items */}
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory items={desserts} title="dessert" img={dessertImg} />
      <MenuCategory items={pizza} title="pizzas" img={pizzaImg} />
      <MenuCategory items={salad} title="salads" img={saladImg} />
      <MenuCategory items={soup} title="soups" img={soupImg} />
    </div>
  );
};

export default Menu;
