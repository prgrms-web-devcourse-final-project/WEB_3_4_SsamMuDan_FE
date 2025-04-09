import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const logoutUser = async () => {
  const res = await coTreeAPI.get(COTREE_ENDPOINT.logout, {
    withCredentials: true,
  });
  return res.data;
};

export default logoutUser;
