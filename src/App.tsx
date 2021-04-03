import "./App.css";
import {
    getHoliday,
    getNextDeparture,
    isWeekendTraffic,
    relativeTime,
} from "./services/timetable";
import useForceUpdate from "./utils/hooks/useForceUpdate";
import useInterval from "./utils/hooks/useInterval";
import dayjs from "dayjs";

function App() {
    const now = dayjs().hour(23).minute(56).second(0);
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
                    alt="Nästa avgång i Sjöstadstrafiken"
                    width="128"
                    height="128"
                />

                <h1 className="App-heading">Nästa avgång i Sjöstadstrafiken</h1>

                <div className="App-departures">
                    <p className="App-depRow">
                        <strong>Lumabryggan</strong>{" "}
                        {relativeTime(nextDepLumabryggan, now)}
                        <span className="App-depTime">
                            &nbsp;({nextDepLumabryggan.format("HH:mm")})
                        </span>
                    </p>
                    <p className="App-depRow">
                        <strong>Barnängen</strong>{" "}
                        {relativeTime(nextDepBarnängen, now)}
                        <span className="App-depTime">
                            &nbsp;({nextDepBarnängen.format("HH:mm")})
                        </span>
                    </p>
                    <p className="App-depRow">
                        <strong>Henriksdal</strong>{" "}
                        {relativeTime(nextDepHenriksdal, now)}
                        <span className="App-depTime">
                            &nbsp;({nextDepHenriksdal.format("HH:mm")})
                        </span>
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
            </header>
        </div>
    );
}

export default App;
