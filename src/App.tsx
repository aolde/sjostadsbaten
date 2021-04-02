import "./App.css";
import { getNextDeparture, relativeTime } from "./services/timetable";
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
                    src={process.env.PUBLIC_URL + "/android-chrome-192x192.png"}
                />
                <h1>Sjöstadstrafiken</h1>

                <p>
                    Båten går från <strong>Lumabryggan</strong>{" "}
                    {relativeTime(nextDepLumabryggan)}
                    <span className="App-depTime">
                        &nbsp;({nextDepLumabryggan.format("HH:mm")})
                    </span>
                </p>
                <p>
                    Båten går från <strong>Barnängen</strong>{" "}
                    {relativeTime(nextDepBarnängen)}
                    <span className="App-depTime">
                        &nbsp;({nextDepBarnängen.format("HH:mm")})
                    </span>
                </p>
                <p>
                    Båten går från <strong>Henriksdal</strong>{" "}
                    {relativeTime(nextDepHenriksdal)}
                    <span className="App-depTime">
                        &nbsp;({nextDepHenriksdal.format("HH:mm")})
                    </span>
                </p>
            </header>
        </div>
    );
}

export default App;
