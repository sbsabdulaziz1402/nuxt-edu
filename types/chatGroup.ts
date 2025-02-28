import type { Timestamp } from "firebase/firestore";

export interface member {
    username: string,
    joinTime: Timestamp,
    owner: boolean
}