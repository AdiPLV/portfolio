"use client";

import { useEffect, useRef, useState } from "react";

type OjtExperience = {
  name: string;
  image: string;
  description: string;
};

export default function OjtExperienceGallery({
  experiences,
}: {
  experiences: OjtExperience[];
}) {
  const [selectedExperience, setSelectedExperience] = useState<OjtExperience | null>(null);
  const dialogRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedExperience) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedExperience(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedExperience]);

  return (
    <>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.name}>
            <button
              className="experience-image-link"
              type="button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelectedExperience(experience);
              }}
              aria-label={`View ${experience.name} OJT experience`}
            >
              <img
                src={experience.image}
                alt=""
                className="experience-image"
              />
              <span className="experience-caption">
                <span className="experience-caption-name">{experience.name}</span>
                <span className="experience-toggle" aria-hidden="true">+</span>
              </span>
            </button>
          </article>
        ))}
      </div>

      {selectedExperience && (
        <div className="experience-lightbox" role="presentation">
          <button
            className="experience-lightbox-backdrop"
            type="button"
            onClick={() => setSelectedExperience(null)}
            aria-label="Close OJT experience"
          />
          <section
            className="experience-lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-lightbox-title"
            tabIndex={-1}
            ref={dialogRef}
          >
            <div className="experience-lightbox-visual">
              <img
                src={selectedExperience.image}
                alt={`${selectedExperience.name} OJT experience`}
                className="experience-lightbox-image"
              />
            </div>
            <div className="experience-lightbox-copy">
              <button
                className="experience-lightbox-back"
                type="button"
                onClick={() => setSelectedExperience(null)}
              >
                <span aria-hidden="true">←</span> Back to experiences
              </button>
              <p className="section-label">OJT Experience</p>
              <h2 id="experience-lightbox-title">{selectedExperience.name}</h2>
              <p className="experience-lightbox-description">
                {selectedExperience.description}
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
