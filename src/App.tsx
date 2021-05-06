import "./App.css";
import {
    formatTime,
    getHoliday,
    getNextDeparture,
    isWeekendTraffic,
    relativeTime,
} from "./services/timetable";
import useForceUpdate from "./utils/hooks/useForceUpdate";
import useInterval from "./utils/hooks/useInterval";
import Collapsable from "./components/Collapsable";
import FullTimeTable from "./components/FullTimeTable";
import dayjs from "dayjs";

function App() {
    const now = dayjs();
    const nextDepLumabryggan = getNextDeparture("lumabryggan", now);
    const nextDepBarnängen = getNextDeparture("barnängen", now);
    const nextDepHenriksdal = getNextDeparture("henriksdal", now);
    const weekendTraffic = isWeekendTraffic(now);
    const holiday = getHoliday(now);
    const forceUpdate = useForceUpdate();

    useInterval(() => {
        forceUpdate();
    }, 1000);

    const departureHeader = (stopName: string, nextDeparture: dayjs.Dayjs) => {
        return (
            <p className="App-depRow">
                <strong>{stopName}</strong>{" "}
                <span className="App-depTime">
                    &nbsp;{formatTime(nextDeparture)}
                </span>
                <span>{relativeTime(nextDeparture, now)}</span>
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
                            nextDepLumabryggan
                        )}
                    >
                        <FullTimeTable
                            stop="lumabryggan"
                            selectedTime={formatTime(nextDepLumabryggan)}
                        />
                    </Collapsable>

                    <Collapsable
                        name="Barnängen"
                        header={departureHeader("Barnängen", nextDepBarnängen)}
                    >
                        <FullTimeTable
                            stop="barnängen"
                            selectedTime={formatTime(nextDepBarnängen)}
                        />
                    </Collapsable>

                    <Collapsable
                        name="Henriksdal"
                        header={departureHeader(
                            "Henriksdal",
                            nextDepHenriksdal
                        )}
                    >
                        <FullTimeTable
                            stop="henriksdal"
                            selectedTime={formatTime(nextDepHenriksdal)}
                        />
                    </Collapsable>
                </div>

                <p className="App-timeTableType">
                    <small>
                        {weekendTraffic
                            ? holiday
                                ? `Visar helgtidtabell (${holiday.holiday})`
                                : "Visar helgtidtabell"
                            : "Visar vardagstidtabell"}
                        <br />
                        Gäller t.o.m. 24 juni 2021
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
        </div>
    );
}

export default App;
