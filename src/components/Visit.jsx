import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  Dumbbell,
  Facebook,
  MapPin,
  X,
} from "lucide-react";
import "./Visit.css";

export function Visit({ images }) {
  const [current, setCurrent] = React.useState(0);
  const [galleryOpen, setGalleryOpen] = React.useState(false);

  const showPrevious = () =>
    setCurrent((index) => (index - 1 + images.length) % images.length);
  const showNext = () => setCurrent((index) => (index + 1) % images.length);

  React.useEffect(() => {
    if (!galleryOpen) return undefined;
    const closeOnEscape = (event) =>
      event.key === "Escape" && setGalleryOpen(false);
    const previousOnArrow = (event) =>
      event.key === "ArrowLeft" && showPrevious();
    const nextOnArrow = (event) => event.key === "ArrowRight" && showNext();
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("keydown", previousOnArrow);
    document.addEventListener("keydown", nextOnArrow);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("keydown", previousOnArrow);
      document.removeEventListener("keydown", nextOnArrow);
      document.body.style.overflow = "";
    };
  }, [galleryOpen]);

  return (
    <section className="visit container" id="visit">
      <div className="visit-image">
        <button
          className="family-gallery-trigger"
          onClick={() => setGalleryOpen(true)}
          aria-label="Open AR Fitness Gym family photo gallery"
        >
          <img
            src={images[current]}
            alt={`AR Fitness Gym family photo ${current + 1} of ${images.length}`}
          />
        </button>
        <button className="image-label" onClick={() => setGalleryOpen(true)}>
          <Dumbbell size={18} /> View AR gym family <ChevronRight size={17} />
        </button>
        <span className="gallery-count">
          {current + 1} / {images.length}
        </span>
      </div>
      <div className="visit-copy">
        <div className="section-kicker">05 / Come through</div>
        <h2>
          See it in
          <br />
          <em>person.</em>
        </h2>
        <p>
          Find AR Fitness Gym on National Road in Pulilan, Bulacan. Drop in, ask
          our team for a walkthrough, and find the equipment that fits your
          goals.
        </p>
        <div className="contact-details">
          <div>
            <MapPin size={19} />
            <span>
              142 National Road, Pulilan,
              <br />
              Bulacan, Philippines 3005
            </span>
          </div>
          <div>
            <Clock3 size={19} />
            <span>
              Monday – Saturday
              <br />
              7:30am – 11:00pm
            </span>
          </div>
        </div>
        <a
          className="button button-primary"
          href="https://www.facebook.com/profile.php?id=100088095751934"
          target="_blank"
          rel="noreferrer"
        >
          Message us on Facebook <Facebook size={17} />
        </a>
      </div>
      {galleryOpen && (
        <div
          className="family-gallery-backdrop"
          role="presentation"
          onClick={(event) =>
            event.target === event.currentTarget && setGalleryOpen(false)
          }
        >
          <article
            className="family-gallery"
            role="dialog"
            aria-modal="true"
            aria-label="AR Fitness Gym family photo gallery"
          >
            <button
              className="gallery-close"
              onClick={() => setGalleryOpen(false)}
              aria-label="Close family photo gallery"
            >
              <X size={22} />
            </button>
            <img
              src={images[current]}
              alt={`AR Fitness Gym family photo ${current + 1} of ${images.length}`}
            />
            <button
              className="gallery-arrow gallery-arrow-left"
              onClick={showPrevious}
              aria-label="Show previous family photo"
            >
              <ChevronLeft size={25} />
            </button>
            <button
              className="gallery-arrow gallery-arrow-right"
              onClick={showNext}
              aria-label="Show next family photo"
            >
              <ChevronRight size={25} />
            </button>
            <span className="gallery-status">
              {current + 1} / {images.length}
            </span>
          </article>
        </div>
      )}
    </section>
  );
}
