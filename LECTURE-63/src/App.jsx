import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("data ......");
    }, 1000);

    return () => {
      console.log("timer clean up");
      clearInterval(id);
    };
  }, []);
  return (
    <div style={{ backgroundColor: "Red" }}>
      <h2>Timer Component</h2>
    </div>
  );
}

function App() {
  const [productCount, setProductCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [showTimer, setShowTimer] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(productCount);

  console.log("1st");

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     // setProductCount(data.total);
    //     setProduct(data.products)
    //   });

    async function getProducts() {
      // let response = await fetch("https://dummyjson.com/products"); 
      // let data = await response.json();

      let { data } = await axios.get("https://dummyjson.com/products");

      // console.log(data);
      setProductCount(data.total);
      setProduct(data.products);
      setIsLoading(false);
    }

    getProducts();

    // console.log("2nd");
    console.log("hii");

    return function () {
      console.log("cleaup function");
    };
  }, [name]);

  // console.log("3rd");

  // if(isLoading){
  //   return <div class="loader"></div>
  // }

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer((prev) => !prev)}>
        Toggle Timer Component
      </button>
      <br />
      Product - {productCount}
      <br />
      <input type="text" onInput={(e) => setName(e.target.value)} />
      <ul>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          product.map((p) => <li key={p.id}>{p.title}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;