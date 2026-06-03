import React, { useState } from "react";
import FilterSidebar from "../../components/FilterSidebar";
import SortingNavbar from "../../components/SortingNavbar";
import AllProducts from "../../components/AllProducts";
import { MdPriceCheck } from "react-icons/md";
const Products = () => {
  const [category, setCategory] = useState([]);
  const [price,setPrice]= useState(5000);
  const handleCategory=(categories)=>{
   if (category.includes(categories))
   {
     setCategory(category.filter((cat)=>cat !== categories ));
   }
   else
   {
     setCategory([...category, categories]);
   }
  }
  return (
    <section className="relative h-full flex w-full gap-5 overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      <div>
        <FilterSidebar category={category} 
        handleCategory={handleCategory}
        price={price}
        setPrice={setPrice}
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div>
          <SortingNavbar />
        </div>
        <div>
          <AllProducts 
          category={category}
          price={price}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
