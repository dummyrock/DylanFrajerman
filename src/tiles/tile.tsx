import React from "react";

type TileProps = {
  title: string;
  image: string;
  description: string;
  link?: string; // optional GitHub or project link
};

export default function Tile({ title, image, description, link }: TileProps & { link?: string }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-card-link"
    >
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project-text">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </a>
  );
}



