import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobs = atom({
    key: "jobsAtom",
    default: 0,
});

export const notifications = atom({
    key: "notificationsAtom",
    default: 12,
});

export const messaging = atom({
    key: "messagingAtom",
    defualt: 0,
});

