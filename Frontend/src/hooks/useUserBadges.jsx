import { useState, useEffect } from "react";
import { useBadgeQuery } from "@/queries/badges";
// import { useAuth } from "../contexts/auth";

function useUserBadges() {
  const [userBadges, setUserBadges] = useState([]);
  const [gainedBadges, setGainedBadges] = useState([]);
  const { data, isFetching } = useBadgeQuery();

  console.log("useUserBadges 훅안 data", data);

  const getUserBadges = () => {
    if (!isFetching) {
      const { newUserBadges, newBadges } = data;
      setUserBadges(newUserBadges);
      setGainedBadges(newBadges);
    }
  };

  useEffect(() => {
    getUserBadges();
  });
  return { isFetching, userBadges, gainedBadges };
}

export default useUserBadges;
