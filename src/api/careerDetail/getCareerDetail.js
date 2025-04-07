import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getCareerDetail = async () => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.CareerDetail);
    // console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getCareerDetail;
