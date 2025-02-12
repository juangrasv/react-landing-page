const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Cotton Black Hoodie',
      href: '#',
      imageSrc: 'https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Cotton Black Hoodie',
      href: '#',
      imageSrc: 'https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Cotton Black Hoodie',
      href: '#',
      imageSrc: 'https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Cotton Black Hoodie',
      href: '#',
      imageSrc: 'https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Cotton Black Hoodie',
      href: '#',
      imageSrc: 'https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-black-front.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]
  
  export default function Product() {
    return (
      <div className="border-indigo-800">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-60 lg:max-w-7xl lg:px-8">
          <h1 className="mt-4 text-center text-5xl font-semibold tracking-tight sm:text-7xl">
            Our Current Trends...
          </h1>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative py">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  