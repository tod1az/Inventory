"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { references, type Reference } from "../lib/data";

export default function ProductList() {
  const [reference, setReference] = useState<Reference>();
  const dbProducts = useQuery(api.products.getWithFilters, {
    reference: reference,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReference(e.target.value as Reference);
  };
  return (
    <section className="flex flex-col gap-6 items-center justify-center">
      <select
        onChange={handleChange}
        value={reference}
        className="bg-slate-600"
      >
        <option disabled selected>
          Referencia
        </option>
        {Object.values(references).map((ref) => {
          return (
            <option value={ref} key={String(ref)}>
              {ref}
            </option>
          );
        })}
      </select>
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
