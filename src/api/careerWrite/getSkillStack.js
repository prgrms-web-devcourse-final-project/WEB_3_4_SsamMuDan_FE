import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getSkillStack = async () => {
  try {
    const response = await coTreeAPI.get(COTREE_ENDPOINT.techSkills);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getSkillStack;
