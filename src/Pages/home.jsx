import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="homeWallpaperContainer">
        <img
          className="homeWallpaper1"
          src="https://cdn.shopify.com/s/files/1/0371/0749/files/000412400005_1100x.jpg?v=1637615010"
          alt="wallpaper"
        />
        <img
          className="homeWallpaper2"
          src="https://cdn.shopify.com/s/files/1/0371/0749/files/g_day-blue_750x.png?v=1633341228"
          alt="wallpaper"
        />
      </div>
      <img
        className="homeWallpaper3"
        src="https://cdn.shopify.com/s/files/1/0371/0749/files/000724550009_c150dfca-a09d-431b-98c6-50be83019b74_2000x.jpg?v=1633351843"
        alt="wallpaper"
      />

      <div className="advantages">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0371/0749/files/Icons_For_Lexxola_2021_-02_710x.png?v=1629923757"
            alt="advantage"
          />
          <p>Be apart of something bigger</p>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0371/0749/files/4370649_275x.png?v=1629924815"
            alt="advantage"
          />
          <p>Sustainable materials and packaging</p>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0371/0749/files/delivery-truck_275x.png?v=1630008552"
            alt="advantage"
          />
          <p>Free and fast delivery nationwide</p>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0371/0749/files/credit-card_275x.png?v=1630008710"
            alt="advantage"
          />
          <p>Buy now and pay later with afterPay or zippay</p>
        </div>
      </div>

      <a
        href="https://www.instagram.com/ryder_label/"
        target={"_blank"}
        rel="noreferrer"
      >
        @ryder_label
      </a>

      <div className="instagram-photos">
        <a
          href="https://www.instagram.com/p/CI2lPrqA33f/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src="https://user-images.githubusercontent.com/73386100/212570447-0b105fd9-bac0-44ea-b069-1b77373cafe1.jpg"
            alt="instagram images"
          />
        </a>
        <a
          href="https://www.instagram.com/p/CH4kXk0M0J_/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src="https://user-images.githubusercontent.com/73386100/212570450-0de92f6d-de93-4963-ade3-18b49c49944b.jpg"
            alt="instagram images"
          />
        </a>
        <a
          href="https://www.instagram.com/p/CGwlE7rgCtU/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src="https://user-images.githubusercontent.com/73386100/212570451-392e294a-2fba-45d5-bd8c-7bd6316a7c4f.jpg"
            alt="instagram images"
          />
        </a>
        <a
          href="https://www.instagram.com/p/CSc54tqsCZd/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src="https://user-images.githubusercontent.com/73386100/212570452-6ed2365c-793b-4fa4-8231-6cf02e746527.jpg"
            alt="instagram images"
          />
        </a>
      </div>

      <p>Sign Up For 10% Off Your First Order</p>
      <div className="input-container">
        <input
          className="email-input"
          placeholder="Your Email"
          autoComplete="email"
          type="email"
        />
        <button className="sub-button">Subscribe</button>
      </div>
    </div>
  );
}
