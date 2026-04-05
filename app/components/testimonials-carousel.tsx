"use client";

import { useEffect, useState } from "react";

export type Testimonial = {
  image: string;
  name: string;
  quote: string;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

const AUTO_ADVANCE_MS = 5000;

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || testimonials.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, testimonials.length]);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <div
      className="tl-testimonial-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="tl-testimonial-carousel__viewport">
        <div
          className="tl-testimonial-carousel__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="tl-testimonial-carousel__slide">
              <article className="testi_item tl-testimonial-carousel__card">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.quote}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {testimonials.length > 1 ? (
        <div className="tl-testimonial-carousel__dots" aria-label="Testimonials">
          <button
            type="button"
            className="tl-testimonial-carousel__nav"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            Prev
          </button>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              className={`tl-testimonial-carousel__dot${
                index === activeIndex ? " is-active" : ""
              }`}
              onClick={() => goTo(index)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-pressed={index === activeIndex}
            />
          ))}
          <button
            type="button"
            className="tl-testimonial-carousel__nav"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
