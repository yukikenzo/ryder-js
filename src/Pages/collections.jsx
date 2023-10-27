import React, { useState, useContext, useEffect } from "react";
import Product from "../Componets/Products";
import { BsXLg } from "react-icons/bs";
import { Context } from "../Contex";

export default function Collections() {
  const [searchQuery, setSearchQuery] = useState("");

  const { products, refetchProducts } = useContext(Context);

  useEffect(() => {
    refetchProducts();
  }, [refetchProducts]);

  const clothe = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "calc(100vh - 390px)" }}>
      <div id="searchContainer">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchInput"
          placeholder="Search Product"
          type="text"
        />
        <button onClick={() => setSearchQuery("")}>
          {" "}
          <BsXLg className="clear_search_icon" />{" "}
        </button>
      </div>

      <div className="product_container">
        {clothe.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
