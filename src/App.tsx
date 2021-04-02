import "./App.css";
import {
    getNextDeparture,
    isWeekend,
    relativeTime,
} from "./services/timetable";
import useForceUpdate from "./utils/hooks/useForceUpdate";
import useInterval from "./utils/hooks/useInterval";

function App() {
    const nextDepLumabryggan = getNextDeparture("lumabryggan");
    const nextDepBarnängen = getNextDeparture("barnängen");
    const nextDepHenriksdal = getNextDeparture("henriksdal");
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

                <p className="App-depRow">
                    <strong>Lumabryggan</strong>{" "}
                    {relativeTime(nextDepLumabryggan)}
                    <span className="App-depTime">
                        &nbsp;({nextDepLumabryggan.format("HH:mm")})
                    </span>
                </p>
                <p className="App-depRow">
                    <strong>Barnängen</strong> {relativeTime(nextDepBarnängen)}
                    <span className="App-depTime">
                        &nbsp;({nextDepBarnängen.format("HH:mm")})
                    </span>
                </p>
                <p className="App-depRow">
                    <strong>Henriksdal</strong>{" "}
                    {relativeTime(nextDepHenriksdal)}
                    <span className="App-depTime">
                        &nbsp;({nextDepHenriksdal.format("HH:mm")})
                    </span>
                </p>

                <p className="App-timeTableType">
                    <small>
                        {isWeekend()
                            ? "Visar helgtidtabell"
                            : "Visar vardagstidtabell"}
                    </small>
                </p>
            </header>
        </div>
    );
}

export default App;
