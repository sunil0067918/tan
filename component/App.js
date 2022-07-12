// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../component/Banner";
import Nav from "../component/Nav";
import Cart from "../component/Cart";
import Shooping from "../component/Shooping";

const App = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    async function getdata() {
      const response = await axios.get(
        "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json"
      );
      setpost(response?.data?.data?.products);

      console.log(response);
    }

    getdata();
  }, []);
  return (
    <>
      <Nav />
      <Banner />
      <Cart />
      <div className="grid">
        {post.map((data, index) => (
          <Shooping data={data} key={index} />
        ))}
      </div>
    </>
  );
};

export default App;
