"use client";

import { getSeason } from "../_core/common/seasons";


export function useSeason() {
    const season = getSeason();
    return { season }
}