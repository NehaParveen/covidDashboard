export interface TestResults {
    reports:      Report[];
    last_updated: string;
}

export interface Report {
    date:           string;
    total:          number;
    today:          number;
    positive:       number;
    today_positive: number;
}
