import { param } from 'motion/dist/react-client';

const { default: coTreeAPI } = require('@/config/cotree');

const techbookLike = async (userId) => {
  try {
    const response = await coTreeAPI.post(COTREE_ENDPOINT.techbookLike, {
      param: {
        // 타입을 정해야하나..?이게뭐지//?
        likeType: 'COMMUNITY',
        itemId: userId,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default techbookLike;
