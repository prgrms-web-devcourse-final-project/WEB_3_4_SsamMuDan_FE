import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const getImgUrl = async (file, directory = 'COMMUNITY_BOARD') => {
  try {
    const formData = new FormData();
    formData.append('directory', directory);
    formData.append('file', file);

    const response = await coTreeAPI.post(COTREE_ENDPOINT.postImg, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data.isSuccess) {
      return response.data.data.saveUrl;
    } else {
      throw new Error('이미지 업로드 실패');
    }
  } catch (error) {
    console.error('이미지 업로드 중 오류 발생:', error);
    throw error;
  }
};

export default getImgUrl;
