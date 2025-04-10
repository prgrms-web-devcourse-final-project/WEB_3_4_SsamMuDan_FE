// 프로필 이미지 업로드 함수

import axios from 'axios';

const uploadProfileImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  // form-data로 요청하기 때문에 coTree API가 아닌 axios 직접 사용함
  const response = await axios.post(
    `https://api.cotree.site/api/v1/file/upload?directory=USER_PROFILE`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    },
  );

  return response.data.data.saveUrl;
};

export default uploadProfileImage;
