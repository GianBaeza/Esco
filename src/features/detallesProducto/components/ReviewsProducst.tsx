"use client";
import { format, parseISO } from "date-fns";
import { MdStarRate } from "react-icons/md";

interface Review {
  comment: string;
  date: string;
  rating: number;
  reviewerName: string;
}

interface ReviewsProducstProps {
  reviewsProd: Review[];
}

export default function ReviewsProducst({ reviewsProd }: ReviewsProducstProps) {
  (reviewsProd);
  return (
    <div className="w-10/12 m-auto bg-black/5 rounded-lg h-auto p-5 flex flex-col gap-5">
      <header>
        <h2 className="font-tajawal text-2xl font-bold text-start">
          Opiniones del producto
        </h2>
      </header>
      <main>
        <ul className="grid grid-flow-col grid-rows-2 justify-start items-center w-full m-auto gap-5 h-auto">
          {reviewsProd.length > 0 ? (
            reviewsProd
              .sort((a, b) => b.rating - a.rating)
              .map(({ comment, date, rating, reviewerName }, i) => {
                const formatFecha = parseISO(date);
                const fecha = format(formatFecha, "dd/MM/yyyy");
                const estrellas = Array.from(
                  { length: rating },
                  (_, i) => i + 1
                );
                return (
                  <li key={i} className="flex flex-col pl-5 gap-1">
                    <article className="flex gap-1">
                      {estrellas.map((_, i) => (
                        <p key={i}>
                          <MdStarRate size={25} color="black" />
                        </p>
                      ))}
                    </article>
                    <p className="text-lg">{comment}</p>
                    <h3 className="text-sm text-gray-600/90">
                      Usuario: {reviewerName}
                    </h3>
                    <p className="text-sm text-gray-600/90">{fecha}</p>
                  </li>
                );
              })
          ) : (
            <p>No hay comentarios sobre este producto</p>
          )}
        </ul>
      </main>
    </div>
  );
}
