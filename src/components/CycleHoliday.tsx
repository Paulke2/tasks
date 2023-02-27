import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { HolidayType } from "../interfaces/Holiday";

export function CycleHoliday(): JSX.Element {
    const Holiday_TRANSITIONS_year: Record<HolidayType, HolidayType> = {
        "🎃": "🪔",
        "🪔": "🎇",
        "🎇": "🦃",
        "🦃": "🎄",
        "🎄": "🎃"
    };
    const Holiday_TRANSITIONS_alpha: Record<HolidayType, HolidayType> = {
        "🎄": "🎇",
        "🎇": "🎃",
        "🎃": "🪔",
        "🪔": "🦃",
        "🦃": "🎄"
    };
    const [holiday, setHoliday] = useState<HolidayType>("🎄");
    return (
        <div>
            <span>
                <Button
                    onClick={() =>
                        setHoliday(Holiday_TRANSITIONS_alpha[holiday])
                    }
                >
                    Advance by Alphabet
                </Button>
            </span>
            <span>
                <Button
                    onClick={() =>
                        setHoliday(Holiday_TRANSITIONS_year[holiday])
                    }
                >
                    Advance by Year
                </Button>
                Holiday: {holiday}
            </span>
        </div>
    );
}
