import Event from "./Event";

export const TodayPicks = async ({ dateTime, events }) => {
  const dummyEvent = {
    time: 0,
    sign: "--",
    month: "--",
  };

  return (
    <div className="day-events">
      <time dateTime={dateTime} className="day-events-date">
        {new Date(dateTime).toDateString()}
      </time>
      <ul className="event-list">
        {[0, 1].map((value, idx) => (
          <Event key={idx} data={events[value] ?? dummyEvent} />
        ))}
      </ul>
    </div>
  );
};
