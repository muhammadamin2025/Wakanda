import React from "react";

export default function FeatureCard({ image, title, description }) {
  return (
    <div className="rounded-2xl p-6 shadow-md hover:shadow-xl transition">
      <div className="rounded-xl mb-4">
        <img className="object-cover" src={image} alt={title} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
