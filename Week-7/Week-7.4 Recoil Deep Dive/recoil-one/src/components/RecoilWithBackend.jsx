import { useEffect } from "react";
import { notifications } from "../atom";
import { RecoilRoot, useRecoilState } from "recoil";
import { totalNotificationSelector } from "../atomsTwo";
import axios  from "axios";

const RecoilWithBackend = () => {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
};

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilState(totalNotificationSelector);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
      setNetworkCount(res.data);
    });
  }, []);

  return (
    <div>
      <button>
        My Network(
        {networkCount.network >= 100 ? "99+" : networkCount.network})
      </button>
      <button>Jobs({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </div>
  );
}

export default RecoilWithBackend;
