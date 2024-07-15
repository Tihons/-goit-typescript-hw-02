import axios, { AxiosResponse } from "axios";
import { requestDataType, responseDataType } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY: string = "fhk85qoOsehbeckGzajzOswz9IbUvVrK7NkOVv2kS-8";

const searchParms: requestDataType = {
  client_id: ACCESS_KEY,
  query: "",
  page: 1,
  per_page: 20,
  orientation: "landscape",
};

const requestImagesByQuery = async (query: string, page: number) => {
  const { data }: AxiosResponse<responseDataType> = await axios.get(
    "/search/photos",
    {
      params: {
        ...searchParms,
        page,
        query,
      },
    }
  );
  return data;
};

export default requestImagesByQuery;