import { SettingsType } from "../App";
import { useInput } from "../utils/hooks/useInput";

type Props = {
    settings: SettingsType;
    onSaveSettings: (settings: SettingsType) => void;
};

export function Settings({ settings, onSaveSettings }: Props) {
    const lumabrygganInput = useInput(String(settings.lumabrygganMinutes));
    const barnängenInput = useInput(String(settings.barnängenMinutes));
    const henriksdalInput = useInput(String(settings.henriksdalMinutes));
    const displayTimeTypeInput = useInput(settings.displayTimeType);

    const handleSettingsSubmit: React.FormEventHandler<HTMLFormElement> = (
        e
    ) => {
        e.preventDefault();

        onSaveSettings({
            lumabrygganMinutes: Number(lumabrygganInput.value ?? 0),
            barnängenMinutes: Number(barnängenInput.value ?? 0),
            henriksdalMinutes: Number(henriksdalInput.value ?? 0),
            displayTimeType: displayTimeTypeInput.value,
        });
    };

    return (
        <form className="App-settings-panel" onSubmit={handleSettingsSubmit}>
            <h4>Inställningar</h4>
            <div className="App-settings-section">
                <p>
                    <small>
                        Hur lång tid tar det för dig att gå till hållplatsen?
                    </small>
                </p>
                <div className="form-row">
                    <label>Lumabryggan</label>
                    <input
                        type="number"
                        className="App-settings-mins"
                        placeholder="Minuter"
                        {...lumabrygganInput.bind}
                    />
                </div>
                <div className="form-row">
                    <label>Barnängen</label>
                    <input
                        type="number"
                        className="App-settings-mins"
                        placeholder="Minuter"
                        {...barnängenInput.bind}
                    />
                </div>
                <div className="form-row">
                    <label>Henriksdal</label>
                    <input
                        type="number"
                        className="App-settings-mins"
                        placeholder="Minuter"
                        {...henriksdalInput.bind}
                    />
                </div>
            </div>
            <div className="App-settings-section">
                <p>
                    <small>Vilken tid ska visas?</small>
                </p>
                <label className="App-settings-radiogroup">
                    <input
                        type="radio"
                        name="displayTimeType"
                        value="departure-time"
                        checked={
                            displayTimeTypeInput.value === "departure-time"
                        }
                        onChange={displayTimeTypeInput.bind.onChange}
                    />
                    Avgångstid
                </label>
                <label className="App-settings-radiogroup">
                    <input
                        type="radio"
                        name="displayTimeType"
                        value="leave-home-time"
                        checked={
                            displayTimeTypeInput.value === "leave-home-time"
                        }
                        onChange={displayTimeTypeInput.bind.onChange}
                    />
                    Tid att lämna hemmet
                </label>
            </div>
            <div className="center">
                <button type="submit">Spara</button>
            </div>
        </form>
    );
}
