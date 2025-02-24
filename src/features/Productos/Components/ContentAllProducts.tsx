import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import CardProducts from "./CardProducst";
import { Product } from "@/features/Interface/Seccion1";

interface Props {
  allProducts: Product[];
}
export default function ContentAllProducts({ allProducts }: Props) {
  return (
    <div>
      <header className="w-9/12 m-auto h-auto flex  justify-between items-center my-10">
        <h2>Todos Los Productos</h2>
        <input type="search" className="border" />
      </header>
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
