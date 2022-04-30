import { useQuery } from "react-query";
import * as api from "@/api";
import { obtainBadge } from "@/utils/badge";

const getBadgesApi = async () =>
  Promise.all([api.getUserBadges(), api.getMyInfo(), api.getRank()])
    .then((responses) => Promise.all(responses.map((response) => response)))
    .then(obtainBadge);

export const useBadgeQuery = () =>
  useQuery("badge", getBadgesApi, {
    staleTime: 7000,
    cacheTime: 7000,
    refetchInterval: 6000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
  });
