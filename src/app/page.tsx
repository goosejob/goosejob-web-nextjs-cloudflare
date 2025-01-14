type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  stock: number;
};

export default async function Page() {
  const response = await fetch("https://api.vercel.app/products");
  const products: Product[] = await response.json();

  return (
    <div className="space-y-8 p-10">
      <h1 className="text-2xl font-bold">Goosejob</h1>

      <ul className="space-y-4">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <div className="border p-2 rounded">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
