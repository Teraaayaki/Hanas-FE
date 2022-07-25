import axios from "@axios";

import { getItem } from "@helpers/asyncStorage";

export const fetcher = async (url, queryParams = "") => {
  let token = await getItem("token");

  let { data } = await axios.get(
    `${process.env.HANAS_ENDPOINT}/${url}/${queryParams}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};
