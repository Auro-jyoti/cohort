import { atom } from "recoil";
import { selector } from "recoil";

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

export const totalNotifications = selector({
    key: "totalNotificationsCount",
    value: ({get}) => {
        const networkCount = get(networkAtom);
        const jobsCount = get(jobs);
        const notificationCount = get(notifications);
        const messaging = get(messaging);

        return networkCount + jobsCount + notificationCount + messaging;
    }
});