"use client";

import { useEffect, useState } from "react";
import {
  Aquarius,
  Aries,
  Cancer,
  Capricorn,
  Gemini,
  Leo,
  Libra,
  Pisces,
  Sagittarius,
  Scorpio,
  Taurus,
  Virgo,
} from "../(assets)";
import "./ZodiacCircle.css";
import { MonthSlider } from "./MonthSlider.";
import { useTranslations } from "next-intl";

const zodiacs = [
  {
    Component: Aries,
    name: "Aries",
    // name: "白羊座",
  },
  {
    Component: Taurus,
    name: "Taurus",
    // name: "金牛座",
  },
  {
    Component: Gemini,
    name: "Gemini",
    // name: "双子座",
  },
  {
    Component: Cancer,
    name: "Cancer",
    // name: "癌症",
  },
  {
    Component: Leo,
    name: "Leo",
    // name: "狮子座",
  },
  {
    Component: Virgo,
    name: "Virgo",
    // name: "处女座",
  },
  {
    Component: Libra,
    name: "Libra",
    // name: "天秤座",
  },
  {
    Component: Scorpio,
    name: "Scorpio",
    // name: "天蝎座",
  },
  {
    Component: Sagittarius,
    name: "Sagittarius",
    // name: "射手座",
  },
  {
    Component: Capricorn,
    name: "Capricorn",
    // name: "摩羯座",
  },
  {
    Component: Aquarius,
    name: "Aquarius",
    // name: "水瓶座",
  },
  {
    Component: Pisces,
    name: "Pisces",
    // name: "双鱼座",
  },
];

export const ZodiacCircle = ({ stopMonth, stopSign }) => {
  const [monthIndex, setMonthIndex] = useState(0);
  const [hasSpinned, setHasSpinned] = useState(false);

  const stopSignIndex = zodiacs.findIndex((z) => z.name === stopSign);

  const t = useTranslations("Index");

  useEffect(() => {
    let count = 0;

    const updateMonthIndex = (prevIndex) => {
      const nextIndex = (prevIndex + 1) % 12;

      if (stopSign !== null) {
        count++;
        if (count > 100 && nextIndex === stopSignIndex) {
          setHasSpinned(true);
        }
      }

      return nextIndex;
    };

    const intervalId = setInterval(
      () => {
        setMonthIndex(updateMonthIndex);
      },
      stopSign === null || hasSpinned ? 5000 : 100
    );

    return () => clearInterval(intervalId);
  }, [hasSpinned, stopSign, stopSignIndex]);

  return (
    <div className="orbit">
      <MonthSlider stopMonth={stopMonth} />
      <ul className="orbit-zodiacs">
        {zodiacs.map((zodiac, index) => {
          const Component = zodiac.Component;
          return (
            <li
              key={index}
              className={`orbit-zodiac ${index === monthIndex ? "active" : ""}`}
              style={{
                transform: `rotate(${index * 30}deg)
                        translate(130px)
                        rotate(-${index * 30}deg)`,
              }}
            >
              <Component />
              <p className="zodiac-name">{t(`s${index + 1}`)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
