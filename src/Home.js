import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.assetpanda.com/wp-content/uploads/2018/08/is-online-shopping-an-eco-header.jpg"
          alt="headerimage"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="123"
            title="JBL TUNE 500 - Wired On-Ear Headphones - Black"
            price={14.95}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61Ypg5kkO7L._AC_SX425_.jpg"
          />
          <Product
            id="456"
            title="INSE Cordless Vacuum Cleaner, 6-in-1 Rechargeable Stick Vacuum with 2200 m-A-h Battery, Powerful Lightweight Vacuum Cleaner, Up to 45 Mins Runtime, for Home Hard Floor Carpet Pet Hair-N5S Azure"
            price={159.95}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61lJX5f29NL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="789"
            title="Fire TV Stick 4K, brilliant 4K streaming quality, TV and smart home controls, free and live TV"
            price={24.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/411y5UdVmvL._AC_SX569_.jpg"
          />
          <Product
            id="987"
            title="Casio EAW-MRW-200H-1BV Men's MRW200H-1BV Black Resin Dive Watch"
            price={21.95}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/916UyKn-4QL._AC_UY679_.jpg"
          />
          <Product
            id="654"
            title="Shark AV2501S AI Ultra Robot Vacuum, with Matrix Clean, Home Mapping, 30-Day Capacity HEPA Bagless Self Empty Base, Perfect for Pet Hair, Wifi, Works with Alexa, Dark Grey"
            price={205.95}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71gISOb7A+L._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="111"
            title="Apple 2020 MacBook Air Laptop M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold"
            price={1299.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71vFKBpKakL._AC_SX466_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
