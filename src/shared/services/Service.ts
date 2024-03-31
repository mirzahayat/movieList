import {ENDPOINTS, HTTP_CLIENT} from '../exporter';
import {APIs_KEY} from '../utils/endpoints';

export const getVideo = async () => {
  return await HTTP_CLIENT.get(`${ENDPOINTS.video}?api_key=${APIs_KEY}`);
};
export const searchMovies = async (params: string) => {
  return await HTTP_CLIENT.get(
    `${ENDPOINTS.search}?api_key=${APIs_KEY}&query=${params}`,
  );
};
export const getMoviesDetail = async (id: string) => {
  return await HTTP_CLIENT.get(
    `${ENDPOINTS.movie}/${id}?api_key=${APIs_KEY}`,
  );
};
export const getMoviesActors = async (id: string) => {
  return await HTTP_CLIENT.get(
    `${ENDPOINTS.movie}/${id}/credits?api_key=${APIs_KEY}`,
  );
};
