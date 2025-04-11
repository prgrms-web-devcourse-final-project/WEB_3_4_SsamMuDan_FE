import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getTechBook = async (page, size = 16, sort, keyword) => {
  console.log('keyword', keyword);
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.techbook, {
      params: {
        ...(page && { page }),
        size,
        ...(sort && { sort }),
        ...(keyword && { keyword }),
      },
    });
    console.log('response', response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getTechBook;
