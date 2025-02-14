"use client";
import { format, parseISO } from "date-fns";

export default function ReviewsProducst({ reviewsProd }) {
  console.log(reviewsProd);
  return (
    <div>
      <header>
        <h5>Comentarios de consumidores</h5>
      </header>
      <main>
        {reviewsProd.length > 0 ? (
          reviewsProd.map(({ comment, date, rating, reviewerName }, i) => {
            const formatFecha = parseISO(date);
            const fecha = format(formatFecha, "dd/MM/yyyy");
            return (
              <div key={i}>
                {" "}
                <h3>{reviewerName}</h3>
                <p>{comment}</p>
                <p>{fecha}</p>
              </div>
            );
          })
        ) : (
          <p>No hay comentarios sobre este producto</p>
        )}
      </main>
    </div>
  );
}
