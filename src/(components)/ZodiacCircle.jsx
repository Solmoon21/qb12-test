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

const zodiacs = [
  {
    Component: Leo,
    en: "Leo",
    cn: "狮子座",
  },
  {
    Component: Aries,
    en: "Aries",
    cn: "白羊座",
  },
  {
    Component: Taurus,
    en: "Taurus",
    cn: "金牛座",
  },
  {
    Component: Gemini,
    en: "Gemini",
    cn: "双子座",
  },
  {
    Component: Cancer,
    en: "Cancer",
    cn: "癌症",
  },
  {
    Component: Virgo,
    en: "Virgo",
    cn: "处女座",
  },
  {
    Component: Libra,
    en: "Libra",
    cn: "天秤座",
  },
  {
    Component: Scorpio,
    en: "Scorpio",
    cn: "天蝎座",
  },
  {
    Component: Sagittarius,
    en: "Sagittarius",
    cn: "射手座",
  },
  {
    Component: Capricorn,
    en: "Capricorn",
    cn: "摩羯座",
  },
  {
    Component: Aquarius,
    en: "Aquarius",
    cn: "水瓶座",
  },
  {
    Component: Pisces,
    en: "Pisces",
    cn: "双鱼座",
  },
];

export const ZodiacCircle = ({ stopMonth, stopSign }) => {
  const [monthIndex, setMonthIndex] = useState(0);
  const [hasSpinned, setHasSpinned] = useState(false);

  const stopSignIndex = zodiacs.findIndex((item) => item.en === stopSign);

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
              <p className="zodiac-name">{zodiac.cn}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
