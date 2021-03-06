import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import isLeapYearPlugin from "dayjs/plugin/isLeapYear";
import isSameOrAfterPlugin from "dayjs/plugin/isSameOrAfter";
import holidays from "./holidays";
import "dayjs/locale/sv";

dayjs.extend(isLeapYearPlugin);
dayjs.extend(relativeTimePlugin);
dayjs.extend(isSameOrAfterPlugin);
dayjs.locale("sv");

export const timeTable = {
    weekdays: {
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

        henriksdal: [
            "00:10",

            "06:10",
            "06:30",
            "06:50",

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
            "09:10",
            "09:30",
            "09:50",

            "10:10",
            "10:30",
            "10:50",

            "11:10",
            "11:30",
            "11:50",

            "12:10",
            "12:30",
            "12:50",

            "13:10",
            "13:30",
            "13:50",

            "14:10",
            "14:30",
            "14:50",

            "15:10",
            "15:30",
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
            "18:10",
            "18:30",
            "18:50",

            "19:10",
            "19:30",
            "19:50",

            "20:10",
            "20:30",
            "20:50",

            "21:10",
            "21:30",
            "21:50",

            "22:10",
            "22:30",
            "22:50",

            "23:10",
            "23:30",
            "23:50",
        ],
    },

    weekends: {
        lumabryggan: [
            "00:05",

            "08:05",
            "08:25",
            "08:45",

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

            "16:05",
            "16:25",
            "16:45",

            "17:05",
            "17:25",
            "17:45",

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

        barnängen: [
            "00:00",

            "08:00",
            "08:20",
            "08:40",

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

            "16:00",
            "16:20",
            "16:40",

            "17:00",
            "17:20",
            "17:40",

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

        henriksdal: [
            "00:10",

            "08:10",
            "08:30",
            "08:50",

            "09:10",
            "09:30",
            "09:50",

            "10:10",
            "10:30",
            "10:50",

            "11:10",
            "11:30",
            "11:50",

            "12:10",
            "12:30",
            "12:50",

            "13:10",
            "13:30",
            "13:50",

            "14:10",
            "14:30",
            "14:50",

            "15:10",
            "15:30",
            "15:50",

            "16:10",
            "16:30",
            "16:50",

            "17:10",
            "17:30",
            "17:50",

            "18:10",
            "18:30",
            "18:50",

            "19:10",
            "19:30",
            "19:50",

            "20:10",
            "20:30",
            "20:50",

            "21:10",
            "21:30",
            "21:50",

            "22:10",
            "22:30",
            "22:50",

            "23:10",
            "23:30",
            "23:50",
        ],
    },
};

export function getNextDeparture(
    from: keyof typeof timeTable.weekdays,
    now: dayjs.Dayjs = dayjs()
): dayjs.Dayjs {
    const times = isWeekendTraffic(now)
        ? timeTable.weekends
        : timeTable.weekdays;

    for (const departureTime of times[from]) {
        const [hour, minute] = departureTime
            .split(":")
            .map((part) => parseFloat(part));

        const time = now.hour(hour).minute(minute).second(0);

        if (time.isSameOrAfter(now, "second")) {
            return time;
        }
    }

    return getNextDeparture(
        from,
        now.add(1, "day").hour(0).minute(0).second(0)
    );
}

export function relativeTime(time: dayjs.Dayjs, now = dayjs()) {
    if (now.isAfter(time)) {
        return "För sent";
    }
    return time.from(now, true);
}

export function formatTime(date: dayjs.Dayjs) {
    return date.format("HH:mm");
}

export function isWeekendTraffic(day: dayjs.Dayjs = dayjs()) {
    const dayOfWeek = day.day();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    if (isWeekend) return true;

    const holiday = getHoliday(day);
    return Boolean(holiday);
}

export function getHoliday(day: dayjs.Dayjs = dayjs()) {
    const date = day.format("YYYY-MM-DD");
    return holidays.find((day) => day.date === date);
}
