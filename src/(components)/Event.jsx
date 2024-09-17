import PropTypes from "prop-types";
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
import { useTranslations } from "next-intl";
import { months, signs } from "./consts";

const Event = ({ data, Componenter }) => {
  const { time, sign, month } = data;

  const convertedDate = new Date(parseInt(time, 10) * 1000);
  const yangonDate = new Date(convertedDate.getTime() + 390 * 60 * 1000);
  const hourUtc = time === 0 ? 0 : yangonDate.getUTCHours();

  const renderAstrologyIcon = (name) => {
    switch (name) {
      case "Leo":
        return <Leo />;
      case "Aries":
        return <Aries />;
      case "Taurus":
        return <Taurus />;
      case "Gemini":
        return <Gemini />;
      case "Cancer":
        return <Cancer />;
      case "Virgo":
        return <Virgo />;
      case "Libra":
        return <Libra />;
      case "Scorpio":
        return <Scorpio />;
      case "Sagittarius":
        return <Sagittarius />;
      case "Capricorn":
        return <Capricorn />;
      case "Aquarius":
        return <Aquarius />;
      case "Pisces":
        return <Pisces />;
      default:
        return <div>--</div>;
    }
  };

  const t = useTranslations("Index");

  return (
    <li className="event">
      <div className="event-hour">
        {hourUtc > 0 ? `${hourUtc}:00` : "--"}{" "}
        {hourUtc === 0 ? "--" : hourUtc > 11 ? "pm" : "am"}
      </div>
      <div className="vertical-line"></div>
      <div className="event-winning">
        <div className="event-sign">
          <div className="event-sign-icon">{renderAstrologyIcon(sign)}</div>
          {sign !== "--" ? (
            <p>{t(`s${signs.findIndex((m) => m === sign) + 1}`)}</p>
          ) : (
            <></>
          )}
        </div>
        <div className="event-month">
          {month !== "--"
            ? t(`m${months.findIndex((m) => m === month) + 1}`)
            : "--"}
        </div>
      </div>
    </li>
  );
};

Event.propTypes = {
  data: PropTypes.shape({
    time: PropTypes.string,
    sign: PropTypes.string,
    month: PropTypes.string,
  }),
  empty: PropTypes.bool,
};

export default Event;
