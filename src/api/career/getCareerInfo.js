import axios from 'axios';
import coTreeAPI from '@/config/career';

const getCareerInfo = async () => {
  try {
    const response = await coTreeAPI.get('https://api.cotree.site/api/v1/category/skill');
    console.log(response.data);
    // return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getCareerInfo;
