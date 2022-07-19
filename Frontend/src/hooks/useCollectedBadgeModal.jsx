import { useState, useEffect } from "react";
import useUserBadges from "./useUserBadges";

function useCollectedBadgeModal() {
  const { gainedBadges } = useUserBadges();
  const [openModal, setOpenModal] = useState(false);
  const openBadgeModal = gainedBadges.length !== 0 && openModal;
  useEffect(() => {
    if (gainedBadges.length) {
      setOpenModal(true);
    }
  }, [gainedBadges]);

  return { setOpenModal, openBadgeModal, gainedBadges };
}

export default useCollectedBadgeModal;
