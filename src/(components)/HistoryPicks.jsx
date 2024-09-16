import prisma from "@/db";
import EventList from "./EventList";

export const HistoryPicks = async () => {
  const nowUnixTime = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Yangon",
    {
      cache: "no-store",
    }
  )
    .then((resp) => resp.json())
    .then((data) => data.unixtime);

  const qbevents = await prisma.qevents.findMany({
    where: {
      time: {
        lt: nowUnixTime,
      },
    },
    orderBy: {
      time: "asc",
    },
  });

  const eventByDays = qbevents.reduce((group, event) => {
    const date = new Date(event.time * 1000).toDateString();
    if (!group[date]) group[date] = [];
    group[date].push(event);

    return group;
  }, {});

  const hasData = Object.entries(eventByDays).length !== 0;

  return (
    <div>
      {hasData ? (
        Object.entries(eventByDays)
          .reverse()
          .map(([key, val]) => <EventList key={key} events={val} />)
      ) : (
        <span>No event has been published so far</span>
      )}
    </div>
  );
};
