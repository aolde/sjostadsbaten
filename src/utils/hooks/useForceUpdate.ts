import { useState } from "react";

export default function useForceUpdate() {
    const set = useState(0)[1];
    return () => set((s) => s + 1);
}
