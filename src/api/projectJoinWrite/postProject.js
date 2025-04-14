import coTreeAPI from '@/config/cotree';
import { COTREE_ENDPOINT } from '../endpoint';

const postRecruitment = async (request, resumeImage) => {
  console.log('request', request);
  console.log('resumeImage', resumeImage);
  try {
    const formData = new FormData();
    formData.append('request', new Blob([JSON.stringify(request)], { type: 'application/json' }));

    if (resumeImage) {
      formData.append('projectImage', resumeImage);
    }

    const response = await coTreeAPI.post(COTREE_ENDPOINT.projectMake, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error submitting resume:', error);
    throw error;
  }
};

export default postRecruitment;
