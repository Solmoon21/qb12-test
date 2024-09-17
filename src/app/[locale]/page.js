import { Navbar, TodayPicks } from "@/(components)";
import { ZodiacCircle } from "@/(components)/ZodiacCircle";
import "./app.css";

import moment from "moment-timezone";
import prisma from "@/db";

export default async function Home() {
  const data = await fetch("http://worldtimeapi.org/api/timezone/Asia/Yangon", {
    cache: "no-store",
  }).then((resp) => resp.json());

  const { datetime: dateTime, unixtime: nowUnixTime } = data;

  const startOfMyanmarDay = moment
    .tz(dateTime.split("T")[0], "Asia/Yangon")
    .startOf("day");
  const todayStartUnixTime = startOfMyanmarDay.unix();

  const qbevents = await prisma.qevents.findMany({
    where: {
      time: {
        gte: todayStartUnixTime,
        lt: nowUnixTime,
      },
    },
    orderBy: {
      time: "asc",
    },
    take: 2,
  });

  const pickedEvent =
    qbevents.length > 0
      ? qbevents[Math.round(Math.random()) % qbevents.length]
      : null;
  const { sign, month } = pickedEvent ?? { sign: null, month: null };

  return (
    <main>
      <ZodiacCircle stopSign={sign} stopMonth={month} />
      <TodayPicks dateTime={dateTime} events={qbevents} />
    </main>
  );
}
