import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getCareerInfo = async (page, skills, positions, history, sort) => {
  try {
    let queryString = `?page=${page}&size=16`;

    if (skills && skills.length > 0) {
      skills.forEach((skillId) => {
        queryString += `&skill=${skillId}`;
      });
    }

    if (positions && positions.length > 0) {
      positions.forEach((posId) => {
        queryString += `&position=${posId}`;
      });
    }

    if (history && history.length > 0) {
      queryString += `&startY=${history[0]}&endY=${history[1]}`;
    }

    if (sort) {
      queryString += `&sort=${sort}`;
    }

    const response = await coTreeAPI.get(COTREE_ENDPOINT.careerInfo + queryString);
    return response.data;
  } catch (error) {
    console.error('Error fetching career info:', error);
    throw error;
  }
};

export default getCareerInfo;
