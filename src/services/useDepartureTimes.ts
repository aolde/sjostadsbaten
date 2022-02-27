import dayjs from "dayjs";
import { getNextDeparture } from "./timetable";

export function useDepartureTimes(now: dayjs.Dayjs) {
    const lumabryggan1 = getNextDeparture("lumabryggan", now);
    const lumabryggan2 = getNextDeparture(
        "lumabryggan",
        lumabryggan1.add(1, "second")
    );

    const barnängen1 = getNextDeparture("barnängen", now);
    const barnängen2 = getNextDeparture(
        "barnängen",
        barnängen1.add(1, "second")
    );

    const henriksdal1 = getNextDeparture("henriksdal", now);
    const henriksdal2 = getNextDeparture(
        "henriksdal",
        henriksdal1.add(1, "second")
    );

    return {
        lumabryggan1,
        lumabryggan2,

        barnängen1,
        barnängen2,

        henriksdal1,
        henriksdal2,
    };
}
