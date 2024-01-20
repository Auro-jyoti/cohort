import {
  jobs,
  messaging,
  networkAtom,
  notifications,
  totalNotifications,
} from "./atom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { useMemo } from "react";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  );
};

const MainApp = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobs);
  const notificationsAtomCount = useRecoilValue(notifications);
  const messagingAtomCount = useRecoilValue(messaging);
  const totalValue = useRecoilValue(totalNotifications);

  const totalNotificationsCount = useMemo(() => {
    return (
      networkNotificationCount +
      jobsAtomCount +
      notificationsAtomCount +
      messagingAtomCount
    );
  }, [
    networkNotificationCount,
    jobsAtomCount,
    notificationsAtomCount,
    messagingAtomCount,
  ]);

  return (
    <div>
      <button>
        My Network(
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Me ({totalNotificationsCount})</button>
      <button>Selector ({totalValue})</button>
    </div>
  );
};

export default App;
