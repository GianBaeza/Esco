import CardProducst from "./CardProducst";

export default function ContentAllProducts({ allProducts }) {
  return (
    <div>
      <main className="bg-red-200 w-full h-full p-5 flex flex-wrap gap-5 justify-center">
        {allProducts.map((prod) => {
          const {
            id,
            title,
            stock,
            sku,
            price,
            description,
            category,
            images,
          } = prod;
          return (
            <CardProducst
              key={id}
              idProducts={id}
              title={title}
              stock={stock}
              images={images}
              sku={sku}
              price={price}
              description={description}
              category={category}
            />
          );
        })}
      </main>
    </div>
  );
}
