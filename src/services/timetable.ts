import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import isLeapYearPlugin from "dayjs/plugin/isLeapYear";
import isSameOrAfterPlugin from "dayjs/plugin/isSameOrAfter";
import "dayjs/locale/sv";

dayjs.extend(isLeapYearPlugin);
dayjs.extend(relativeTimePlugin);
dayjs.extend(isSameOrAfterPlugin);
dayjs.locale("sv");

const timeTable = {
    lumabryggan: [
        "00:05",

        "06:05",
        "06:25",
        "06:45",

        "07:05",
        "07:15",
        "07:25",
        "07:35",
        "07:45",
        "07:55",

        "08:05",
        "08:15",
        "08:25",
        "08:35",
        "08:45",
        "08:55",

        "09:05",
        "09:25",
        "09:45",

        "10:05",
        "10:25",
        "10:45",

        "11:05",
        "11:25",
        "11:45",

        "12:05",
        "12:25",
        "12:45",

        "13:05",
        "13:25",
        "13:45",

        "14:05",
        "14:25",
        "14:45",

        "15:05",
        "15:25",
        "15:45",
        "15:55",

        "16:05",
        "16:15",
        "16:25",
        "16:35",
        "16:45",
        "16:55",

        "17:05",
        "17:15",
        "17:25",
        "17:35",
        "17:45",
        "17:55",

        "18:05",
        "18:25",
        "18:45",

        "19:05",
        "19:25",
        "19:45",

        "20:05",
        "20:25",
        "20:45",

        "21:05",
        "21:25",
        "21:45",

        "22:05",
        "22:25",
        "22:45",

        "23:05",
        "23:25",
        "23:45",
    ],

    // 07 | 00 10 20 30 40 50
    // 08 | 00 10 20 30 40 50
    // 09 | 00 20 40
    // 10 | 00 20 40
    // 11 | 00 20 40
    // 12 | 00 20 40
    // 13 | 00 20 40
    // 14 | 00 20 40
    // 15 | 00 20 40 50
    // 16 | 00 10 20 30 40 50
    // 17 | 00 10 20 30 40 50
    // 18 | 00 20 40
    // 19 | 00 20 40
    // 20 | 00 20 40
    // 21 | 00 20 40
    // 22 | 00 20 40
    // 22 | 00 20 40
    // 23 | 00 20 40
    // 00 | 00

    barnängen: [
        "00:00",

        "06:00",
        "06:20",
        "06:40",

        "07:00",
        "07:10",
        "07:20",
        "07:30",
        "07:40",
        "07:50",

        "08:00",
        "08:10",
        "08:20",
        "08:30",
        "08:40",
        "08:50",

        "09:00",
        "09:20",
        "09:40",

        "10:00",
        "10:20",
        "10:40",

        "11:00",
        "11:20",
        "11:40",

        "12:00",
        "12:20",
        "12:40",

        "13:00",
        "13:20",
        "13:40",

        "14:00",
        "14:20",
        "14:40",

        "15:00",
        "15:20",
        "15:40",
        "15:50",

        "16:00",
        "16:10",
        "16:20",
        "16:30",
        "16:40",
        "16:50",

        "17:00",
        "17:10",
        "17:20",
        "17:30",
        "17:40",
        "17:50",

        "18:00",
        "18:20",
        "18:40",

        "19:00",
        "19:20",
        "19:40",

        "20:00",
        "20:20",
        "20:40",

        "21:00",
        "21:20",
        "21:40",

        "22:00",
        "22:20",
        "22:40",

        "23:00",
        "23:20",
        "23:40",
    ],
};

export function getNextDeparture(from: keyof typeof timeTable) {
    const now = dayjs();

    for (const departureTime of timeTable[from]) {
        const [hour, minute] = departureTime
            .split(":")
            .map((part) => parseFloat(part));

        const time = dayjs().hour(hour).minute(minute).second(0);

        if (time.isSameOrAfter(now, "second")) {
            return time;
        }
    }

    return dayjs();
}

export function relativeTime(time: dayjs.Dayjs) {
    return time.fromNow();
}
