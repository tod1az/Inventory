"use client";
import { getReference } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Submit() {
  const createProduct = useMutation(api.products.createProduct);
  return (
    <form
      action={async (formData) => {
        const reference = getReference(formData.get("reference") as string);
        const name = formData.get("name");
        const stock = formData.get("stock");
        await createProduct({
          name: name as string,
          reference,
          stock: Number(stock),
        });
      }}
      className="flex flex-col gap-2"
    >
      <div>name</div>
      <input name="name" type="text" />
      <div>stock</div>
      <input name="stock" type="text" />
      <div>reference</div>
      <input name="reference" type="text" />
      <button>Add</button>
    </form>
  );
}
