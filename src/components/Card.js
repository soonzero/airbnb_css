import React from "react";

export default function Card({
  status,
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
}) {
  return (
    <main className="card">
      {status ? <span className="card--status">{status}</span> : null}
      <img src={img} className="card--image" />
      <div className="card--stats">
        <img src="star.png" className="card--star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <strong>From ${price} </strong>/ person
      </p>
    </main>
  );
}
