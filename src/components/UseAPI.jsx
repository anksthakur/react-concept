import React, { Suspense, use } from "react";

// api call component se bhar krni hai otherwise rerendering hogi api call
const userData = () =>
  fetch("https://dummyjson.com/products").then((response) => response.json());
const fetchData = userData();
const UseAPI = () => {
  return (
    <div>
      <h1>Use API </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Users fetchData={fetchData} />
      </Suspense>
    </div>
  );
};

export default UseAPI;
//2nd component
const Users = ({ fetchData }) => {
  // console.log(fetchData)
  const productData = use(fetchData);
  console.log(productData.products);
  return (
    <div>
      <h1>Product List</h1>
      {productData?.products?.map((data,index) => (
        <h1 key={index}>{data.brand}</h1>
      ))}
    </div>
  );
};
