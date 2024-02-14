"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { references, type Reference } from "../lib/data";

export default function ProductList() {
  const [reference, setReference] = useState<Reference>();
  const [query, setQuery] = useState("");
  const dbProducts = useQuery(api.products.getWithFilters, {
    reference,
    query,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReference(e.target.value as Reference);
  };
  return (
    <section className="flex flex-col gap-6 items-center justify-center">
      <h1 className="text-6xl">Productos</h1>
      <form
        action={(formData) => {
          setQuery(formData.get("query") as string);
        }}
      >
        <label htmlFor="" className="flex gap-2 ">
          Buscar
          <input type="text" name="query" className="bg-slate-600" />
        </label>
      </form>
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
      <section className="w-[40rem] flex flex-col justify-center">
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
        ) : dbProducts?.length === 0 ? (
          <h1>Sin registros</h1>
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </section>
  );
}
