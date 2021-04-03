import "./App.css";
// import usePWA from "react-pwa-install-prompt";
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
    // const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA();

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

    // const onClickInstall = async () => {
    //     const didInstall = await promptInstall();
    //     if (didInstall) {
    //         // User accepted PWA install
    //     }
    // };
    // const renderInstallButton = () => {
    //     if (isInstallPromptSupported && isStandalone)
    //         return <button onClick={onClickInstall}>Prompt PWA Install</button>;
    //     return null;
    // };

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
                        <span>{relativeTime(nextDepLumabryggan, now)}</span>
                        <span className="App-depTime">
                            &nbsp;{formatTime(nextDepLumabryggan)}
                        </span>
                    </p>
                    <p className="App-depRow">
                        <strong>Barnängen</strong>{" "}
                        {relativeTime(nextDepBarnängen, now)}
                        <span className="App-depTime">
                            &nbsp;{formatTime(nextDepBarnängen)}
                        </span>
                    </p>
                    <p className="App-depRow">
                        <strong>Henriksdal</strong>{" "}
                        {relativeTime(nextDepHenriksdal, now)}
                        <span className="App-depTime">
                            &nbsp;{formatTime(nextDepHenriksdal)}
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

                {/* <p>
                    Is Install Prompt Supported ?{" "}
                    {isInstallPromptSupported ? "true" : "false"}
                </p>
                <p>Is Standalone ? {isStandalone ? "true" : "false"}</p>
                {renderInstallButton()} */}
            </main>
        </div>
    );
}

export default App;
