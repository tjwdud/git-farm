import { useQuery } from "react-query";
import * as api from "@/api";
import { obtainBadge } from "@/utils/badge";

const getBadgesApi = async () =>
  Promise.all([api.getUserBadges(), api.getMyInfo(), api.getRank()])
    .then((responses) => Promise.all(responses.map((response) => response)))
    .then((data) => data);

export const useBadgeQuery = () =>
  useQuery("badge", getBadgesApi, {
    staleTime: 7000,
    cacheTime: 7000,
    select: obtainBadge,
    refetchOnWindowFocus: false,
  });
