import React,{useEffect, useState} from 'react'

function Products() {

    const [products, setProducts] = useState();
    const [filtered, setFiltered] = useState();

    const handleChange = async (e) => {
        const filtered = products.filter((product) => {
          console.log(product.title);
          return product.title.includes(e.target.value);
        });
        console.log(filtered);
        setFiltered(filtered);
      };

      useEffect(() => {
        fetch("http://localhost:3000/products")
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
            setProducts(response);
          });
      }, []);


  return (
   <>
   <form className="p-12">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos, Design Templates..."
            name="search"
            required
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="py-12 px-5 lg:px-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
        {filtered && filtered.length > 0
          ? filtered.map((product) => {
              return (
                <div className="bg-white p-6 rounded" key={product.id}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                    <img
                      src={product.image}
                      alt=""
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full " 
                    />
                  </div>
                  <div className="mt-4 font-mono text-lg font-semibold py-4">
                    {product.title}
                  </div>
                  <div className="text-black-600 text-sm font-medium flex justify-between">
                    <div>
                      <span className="text-lg font-bold">Price: </span>
                      {product.price}
                    </div>
                    <div>
                      <span className="text-lg font-bold">Ratings: </span>
                      {product.rating.rate}/5
                    </div>
                  </div>
                </div>
              );
            })
          : products &&
            products.map((product) => {
              return (
                <div className="bg-white p-6 rounded" key={product.id}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                    <img
                      src={product.image}
                      alt=""
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 font-mono text-lg font-semibold py-4">
                    {product.title}
                  </div>
                  <div className="text-black-600 text-sm font-medium flex justify-between">
                    <div>
                      <span className="text-lg font-bold">Price: </span>
                      {product.price}
                    </div>
                    <div>
                      <span className="text-lg font-bold">Ratings: </span>
                      {product.rating.rate}/5
                    </div>
                  </div>
                </div>
              );
            })}
        {}
      </div>
   </>
  )
}

export default Products