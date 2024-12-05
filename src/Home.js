import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2023/09/Untitled-design-2023-09-28T174400.354.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={Math.random()}
            title="Shield"
            price={5000}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2j86e6Ghw_X_eXD75LoevHrzKpu4MhI0sg&s"
            rating={5}
          />
          <Product
            id={Math.random()}
            title="Laptop"
            price={20000}
            image="https://www.jagranimages.com/images/newimg/16022024/16_02_2024-gaming_laptop_under_50000_23654438.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id={Math.random()}
            title="Pokeball"
            price={15}
            image="https://i.etsystatic.com/14070339/r/il/e15ffc/2761891016/il_570xN.2761891016_2y8f.jpg"
            rating={3}
          />
          <Product
            id={Math.random()}
            title="Sword"
            price={2000}
            image="https://preview.redd.it/attempt-at-a-devil-sword-nero-concept-v0-rdeeb08ggric1.jpeg?auto=webp&s=403f536c919eb7ad6e5f37c827566fce76131b5b"
            rating={4}
          />
          <Product
            id={Math.random()}
            title="Mask"
            price={500}
            image="https://makersindia.in/wp-content/uploads/2022/03/wolverine-mask-3d-model-stl-6-e1647548634968.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id={Math.random()}
            title="AK47"
            price={47000}
            image="https://capitalshooting.eu/wp-content/uploads/2024/08/shooting-range-extra-weapon-ak47-kalashnikov.webp"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
