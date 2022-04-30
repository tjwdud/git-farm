import { useState, useEffect } from "react";
import { useBadgeQuery } from "@/queries/badges";
import { useMutation } from "react-query";
import * as api from "@/api";

// import { useAuth } from "../contexts/auth";

function useUserBadges() {
  const [userBadges, setUserBadges] = useState([]);
  const [gainedBadges, setGainedBadges] = useState([]);
  const mutation = useMutation((newBadges) => api.postBadges(newBadges));

  const { data, isFetching } = useBadgeQuery();

  console.log("useUserBadges 훅안 data", data);

  const getUserBadges = () => {
    if (!isFetching) {
      const { newUserBadges, newBadges } = data;
      if (newBadges.length !== 0) {
        mutation.mutate(newUserBadges);
      }
      setUserBadges(newUserBadges);
      setGainedBadges(newBadges);
    }
  };

  useEffect(() => {
    getUserBadges();
  }, [data]);
  return { isFetching, userBadges, gainedBadges };
}

export default useUserBadges;
