import React from "react";
import { jobs, messaging, networkAtom, notifications } from "./atom";
import { RecoilRoot, useRecoilValue } from "recoil";

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

  return (
    <div>
      <button>
        My Network(
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Me ()</button>
    </div>
  );
}

export default App;
