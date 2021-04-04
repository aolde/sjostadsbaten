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
                    <p className="App-depRow">
                        <strong>Lumabryggan</strong>{" "}
                        <span className="App-depTime">
                            &nbsp;{formatTime(nextDepLumabryggan)}
                        </span>
                        <span>{relativeTime(nextDepLumabryggan, now)}</span>
                    </p>
                    <p className="App-depRow">
                        <strong>Barnängen</strong>{" "}
                        <span className="App-depTime">
                            &nbsp;{formatTime(nextDepBarnängen)}
                        </span>
                        {relativeTime(nextDepBarnängen, now)}
                    </p>
                    <p className="App-depRow">
                        <strong>Henriksdal</strong>{" "}
                        <span className="App-depTime">
                            &nbsp;{formatTime(nextDepHenriksdal)}
                        </span>
                        {relativeTime(nextDepHenriksdal, now)}
                    </p>
                </div>

                <p className="App-timeTableType">
                    <small>
                        {weekendTraffic
                            ? holiday
                                ? `Visar helgtidtabell (${holiday.holiday})`
                                : "Visar helgtidtabell"
                            : "Visar vardagstidtabell"}
                    </small>
                </p>
            </main>
        </div>
    );
}

export default App;
