import type { Timestamp } from "firebase/firestore";

export interface MessageType {
    getter: string,
    setter: string,
    time: Timestamp,
    message: string
}