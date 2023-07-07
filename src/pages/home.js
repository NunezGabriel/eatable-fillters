import FoodCard from "../components/FoodCard";
import { useEffect } from "react";
import FoodPicture from "../components/FoodPicture";

import { useOutletContext } from "react-router-dom";

function HomePage() {
  const { setTitle } = useOutletContext();

  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);

  const mockProduct = {
    id: 1,
    name: "green cream",
    price: 3313,
    category: "soups",
    description:
      "Eveniet distinctio exercitationem. Error sed ea. Aut id eius. Atque quia enim. Est asperiores architecto. Magnam perferendis labore. Tenetur animi blanditiis. Porro nesciunt expedita. Et rem et. Eveniet quo et. Vel aliquid sit. Et consequu.",
    picture_url:
      "https://img.freepik.com/free-photo/top-view-green-cream-soups_23-2148519096.jpg",
  };

  return (
    <>
      <FoodCard
        name={mockProduct.name}
        picture_url={mockProduct.picture_url}
        price={mockProduct.price}
      />
    </>
  );
}

export default HomePage;
