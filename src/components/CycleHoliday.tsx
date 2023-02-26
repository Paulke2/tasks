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
        "🎃": "🦃",
        "🦃": "🪔",
        "🪔": "🎄"
    };
    const [alpha, setAlpha] = useState<HolidayType>("🎄");
    const [year, setYear] = useState<HolidayType>("🪔");

    return (
        <div>
            <span>
                <Button
                    onClick={() => setAlpha(Holiday_TRANSITIONS_alpha[alpha])}
                >
                    Advance by Alphabet
                </Button>
                Holiday: {alpha}
            </span>
            <span>
                <Button onClick={() => setYear(Holiday_TRANSITIONS_year[year])}>
                    Advance by Year
                </Button>
                Holiday: {year}
            </span>
        </div>
    );
}
