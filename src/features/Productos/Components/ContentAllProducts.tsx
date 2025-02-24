import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import CardProducts from "./CardProducst";
import { Product } from "@/features/Interface/Seccion1";

interface Props {
  allProducts: Product[];
}
export default function ContentAllProducts({ allProducts }: Props) {
  console.log(allProducts, "TITULO");
  return (
    <div>
      <main className=" w-full h-full p-5 flex flex-wrap gap-5 justify-center">
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
              className="custom-spotlight-card "
              spotlightColor="rgba(222, 222, 222, 0.2)"
              key={id}
            >
              <div className=" flex w-[20rem] h-auto p-5">
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
              </div>
            </SpotlightCard>
          );
        })}
      </main>
    </div>
  );
}
