import Event from "./Event";
import PropTypes from "prop-types";

const EventList = ({ events }) => {
  const time = events.length ? events[0].time : -1;
  const date =
    time === -1 ? new Date() : new Date(time * 1000 + 390 * 60 * 1000);

  return (
    <div className="day-events">
      <time className="day-events-date" dateTime={date}>
        {date.toDateString()}
      </time>
      <ul className="event-list">
        {events.map((event) => (
          <Event key={event.id} data={event} />
        ))}
      </ul>
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.array,
};

export default EventList;
