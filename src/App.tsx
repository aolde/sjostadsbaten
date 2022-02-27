import "./App.css";
import {
    formatTime,
    getHoliday,
    isWeekendTraffic,
    relativeTime,
} from "./services/timetable";
import useForceUpdate from "./utils/hooks/useForceUpdate";
import useInterval from "./utils/hooks/useInterval";
import Collapsable from "./components/Collapsable";
import FullTimeTable from "./components/FullTimeTable";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useInput } from "./utils/hooks/useInput";
import { useLocalStorage } from "./utils/hooks/useLocalStorage";
import { useDepartureTimes } from "./services/useDepartureTimes";
import { Settings } from "./components/Settings";
import Sheet from "react-modal-sheet";

export type SettingsType = {
    lumabrygganMinutes: number;
    barnängenMinutes: number;
    henriksdalMinutes: number;
    displayTimeType: ("departure-time" | "leave-home-time") | (string & {});
};

function App() {
    const now = dayjs();
    const departureTimes = useDepartureTimes(now);
    const weekendTraffic = isWeekendTraffic(now);
    const holiday = getHoliday(now);
    const forceUpdate = useForceUpdate();
    const [settings, setSettings] = useLocalStorage<SettingsType>("settings", {
        lumabrygganMinutes: 0,
        barnängenMinutes: 0,
        henriksdalMinutes: 0,
        displayTimeType: "departure-time",
    });
    const [settingsOpen, setSettingsOpen] = useState(false);

    useInterval(() => {
        forceUpdate();
    }, 1000);

    const departureHeader = (
        stopName: string,
        nextDeparture1: dayjs.Dayjs,
        nextDeparture2: dayjs.Dayjs,
        walkTimeMinutes: number
    ) => {
        let nowDate = now,
            warningTime = walkTimeMinutes;

        if (settings.displayTimeType === "leave-home-time") {
            nowDate = nowDate.subtract(-1 * walkTimeMinutes, "minute");
            warningTime = 2;
        }

        const minsUntilDeparture1 = nextDeparture1.diff(nowDate, "minute");
        const minsUntilDeparture2 = nextDeparture2.diff(nowDate, "minute");

        let tooLateDeparture1 = minsUntilDeparture1 <= warningTime;
        let tooLateDeparture2 = minsUntilDeparture2 <= warningTime;

        return (
            <p className="App-depRow">
                <strong>{stopName}</strong>

                <span className="App-depRow-departure">
                    <span className="App-depRow-time">
                        {formatTime(nextDeparture1)}
                    </span>

                    <span
                        className={tooLateDeparture1 ? "App-running-late" : ""}
                    >
                        {tooLateDeparture1 ? (
                            <img src="running-late.svg" height={14} alt="Sen" />
                        ) : null}
                        {relativeTime(nextDeparture1, nowDate)}
                    </span>
                </span>
                <span className="App-depRow-departure">
                    <span className="App-depRow-time">
                        {formatTime(nextDeparture2)}
                    </span>

                    <span
                        className={tooLateDeparture2 ? "App-running-late" : ""}
                    >
                        {tooLateDeparture2 ? (
                            <img src="running-late.svg" height={14} alt="Sen" />
                        ) : null}
                        {relativeTime(nextDeparture2, nowDate)}
                    </span>
                </span>
            </p>
        );
    };

    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={process.env.PUBLIC_URL + "/android-chrome-512x512.png"}
                    alt="Sjöstadsbåten"
                    width="64"
                    height="64"
                    className="App-logo"
                />
                <span className="App-logoText">Sjöstadsbåten</span>
            </header>

            <main className="App-main">
                <h2 className="App-heading">Nästa avgång</h2>

                <div className="App-departures">
                    <Collapsable
                        name="Lumabryggan"
                        header={departureHeader(
                            "Lumabryggan",
                            departureTimes.lumabryggan1,
                            departureTimes.lumabryggan2,
                            settings.lumabrygganMinutes
                        )}
                    >
                        <FullTimeTable
                            stop="lumabryggan"
                            selectedTime={formatTime(
                                departureTimes.lumabryggan1
                            )}
                        />
                    </Collapsable>

                    <Collapsable
                        name="Barnängen"
                        header={departureHeader(
                            "Barnängen",
                            departureTimes.barnängen1,
                            departureTimes.barnängen2,
                            settings.barnängenMinutes
                        )}
                    >
                        <FullTimeTable
                            stop="barnängen"
                            selectedTime={formatTime(departureTimes.barnängen1)}
                        />
                    </Collapsable>

                    <Collapsable
                        name="Henriksdal"
                        header={departureHeader(
                            "Henriksdal",
                            departureTimes.henriksdal1,
                            departureTimes.henriksdal2,
                            settings.henriksdalMinutes
                        )}
                    >
                        <FullTimeTable
                            stop="henriksdal"
                            selectedTime={formatTime(
                                departureTimes.henriksdal1
                            )}
                        />
                    </Collapsable>
                </div>

                <button
                    onClick={() => setSettingsOpen(true)}
                    className="App-settings-heading"
                >
                    Inställningar
                </button>

                <p className="App-timeTableType">
                    <small>
                        {weekendTraffic
                            ? holiday
                                ? `Visar helgtidtabell (${holiday.holiday})`
                                : "Visar helgtidtabell"
                            : "Visar vardagstidtabell"}
                        <br />
                        Gäller t.o.m. 24 juni 2022
                        <br />
                        <small>
                            <a
                                href="https://github.com/aolde/sjostadsbaten"
                                target="_blank"
                                rel="noreferrer"
                                className="App-github"
                            >
                                Github
                            </a>
                        </small>
                    </small>
                </p>
            </main>

            <Sheet
                isOpen={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                snapPoints={[600, 420, 0]}
                initialSnap={1}
            >
                {/* @ts-expect-error */}
                <Sheet.Container>
                    {/* @ts-expect-error */}
                    <Sheet.Header />
                    {/* @ts-expect-error */}
                    <Sheet.Content>
                        <Settings
                            onSaveSettings={(settings) => {
                                setSettings(settings);
                                setSettingsOpen(false);
                            }}
                            settings={settings}
                        />
                    </Sheet.Content>
                </Sheet.Container>

                {/* @ts-expect-error */}
                <Sheet.Backdrop />
            </Sheet>
        </div>
    );
}

export default App;
