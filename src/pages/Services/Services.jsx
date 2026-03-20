import { useEffect, useRef } from "react";
import "./Services.css";

// 🔁 Replace these with your own image URLs
const images = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75", alt: "Mountains" },
  { src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=75", alt: "City" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=75", alt: "Forest" },
  { src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=75", alt: "Ocean" },
  { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=75", alt: "Mist" },
  { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=75", alt: "Cabin" },
  { src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&q=75", alt: "Desert" },
  { src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=75", alt: "Snow" },
];

// Double the array so CSS infinite loop is seamless
const stripImages = [...images, ...images];

function Services() {
  return (
    <div className="services" id="serv">

      <div className="title">
        <h2>Beyond Code 🌍</h2>
      </div>

      <div className="gallery-layout">

        {/* ── LEFT: Continuous vertical slideshow ── */}
        <div className="slideshow-box">
          <div className="strip-track">
            {stripImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="strip-img"
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Scrollable 2-column grid ── */}
        <div className="grid-box">
          <div className="grid-header">
            <span className="grid-label">All Photos</span>
            <span className="grid-count">{images.length} images</span>
          </div>
          <div className="thumb-grid">
            {images.map((img, i) => (
              <div className="thumb" key={i}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;
