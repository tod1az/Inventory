"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function ProductList() {
  const dbProducts = useQuery(api.products.get);
  if (dbProducts?.length === 0) return <h1>No hay productos registrados</h1>;
  return (
    <section className="flex flex-col gap-6 items-center justify-center">
      <h1 className="text-6xl">Products</h1>
      <section className="w-[40rem]">
        <header className="px-2 grid grid-cols-5 justify-between">
          <h1>Reference</h1>
          <p>|</p>
          <h2>Name</h2>
          <p>|</p>
          <h3>Stock</h3>
        </header>
        {dbProducts?.length ? (
          dbProducts.map((product) => (
            <article
              className="grid grid-cols-5 px-2 even:bg-slate-600 odd:bg-slate-800 justify-between"
              key={product.reference}
            >
              <h1>{product.reference}</h1>
              <p>|</p>
              <h2>{product.name}</h2>
              <p>|</p>
              <h3>{product.stock}</h3>
            </article>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </section>
  );
}
