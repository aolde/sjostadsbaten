import "./App.css";
import { getNextDeparture, relativeTime } from "./services/timetable";
import useForceUpdate from "./utils/hooks/useForceUpdate";
import useInterval from "./utils/hooks/useInterval";

function App() {
    const nextDep = getNextDeparture("lumabryggan");
    const forceUpdate = useForceUpdate();

    useInterval(() => {
        forceUpdate();
        console.log("render");
    }, 1000);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Sjöstadstrafiken</h1>
                <p>
                    Båten går från Lumabryggan {relativeTime(nextDep)}
                    <span className="App-depTime">
                        &nbsp;({nextDep.format("HH:mm")})
                    </span>
                </p>
            </header>
        </div>
    );
}

export default App;
