import { UserType } from "./types";

export interface ICitiesProvider {
    isCityExist: (city: string) => boolean;
    getUnusedCityEndsWith: (letter: string, ignoredCities: string[]) => string | null;
}

export interface ICitiesProviderConstructor {
    new(url: string): ICitiesProvider;
}

export interface PlayerOptions {
    name?: string;
    color?: string;
    type?: UserType;
}

export interface Turn {
    userId: string;
    userColor: string;
    userName: string;
    city: string;
}

export interface PlayerState {
    score: number;
    name: string;
}