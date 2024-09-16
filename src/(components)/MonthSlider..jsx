"use client";

import "./MonthSlider.css";
import { useEffect, useState } from "react";
import { months } from "./consts";

export const MonthSlider = ({ stopMonth }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSpinned, setHasSpinned] = useState(false);

  useEffect(() => {
    let count = 0;

    const updateMonthIndex = (prevIndex) => {
      const nextIndex = (prevIndex + 1) % 12;

      if (stopMonth !== null) {
        count++;
        if (count > 220 && months[nextIndex] === stopMonth) {
          setHasSpinned(true);
        }
      }

      return nextIndex;
    };

    const intervalId = setInterval(
      () => {
        setActiveIndex(updateMonthIndex);
      },
      stopMonth === null || hasSpinned ? 5000 : 100
    );

    return () => clearInterval(intervalId);
  }, [hasSpinned, stopMonth]);

  const halfwayIndex = 6;
  const itemHeight = 52;
  const shuffleThreshold = halfwayIndex * itemHeight;
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(12 + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (12 - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  return (
    <div className="slides">
      {months.map((month, i) => (
        <p
          className={`carousel-item ${
            activeIndex === i ? "active" : undefined
          } ${
            Math.abs(determinePlacement(i)) <= visibleStyleThreshold
              ? "visible"
              : undefined
          }`}
          key={i}
          style={{ transform: `translateY(${determinePlacement(i)}px)` }}
        >
          <span>{month}</span>
        </p>
      ))}
    </div>
  );
};
