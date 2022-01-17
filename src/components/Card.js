import React from "react";

export default function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <main className="card">
      <img src={img} className="card--image" />
      {/* {openSpots !== null ? <span className="card--badge">{badgeText}</span> : null} */}
      {badgeText && <span className="card--badge">{badgeText}</span>}
      <div className="card--stats">
        <img src="star.png" className="card--star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <strong>From ${price} </strong>/ person
      </p>
    </main>
  );
}
