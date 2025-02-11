import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import CardProducst from "./CardProducst";
import CardProducts from "./CardProducst";

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
            <SpotlightCard
              className="custom-spotlight-card flex flex-col gap-2 max-w-96 max-h-[40rem]"
              spotlightColor="rgba(0, 229, 255, 0.2)"
              key={id}
            >
              <CardProducts
                title={title}
                stock={stock}
                images={images}
                sku={sku}
                price={price}
                description={description}
                category={category}
                idProducts={id}
              />
            </SpotlightCard>
          );
        })}
      </main>
    </div>
  );
}
