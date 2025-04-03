import { create } from 'zustand';

const usePostDataStore = create((set) => ({
  postData: {
    basicInfo: {
      profileImage: '',
      email: '',
      years: 0,
      introduction: '',
      developPositionIds: [],
      techStackIds: [],
    },
    careerInfos: [],
    portfolioInfos: [],
  },

  // 기본 정보 수정
  setBasicInfo: (info) =>
    set((state) => ({
      postData: {
        ...state.postData,
        basicInfo: {
          ...state.postData.basicInfo,
          ...info,
        },
      },
    })),

  // 경력 추가 또는 수정
  setCareerInfo: (index, career) =>
    set((state) => {
      const updated = [...state.postData.careerInfos];
      updated[index] = { ...updated[index], ...career };
      return {
        postData: {
          ...state.postData,
          careerInfos: updated,
        },
      };
    }),

  // 포트폴리오도 같은 방식으로 추가 가능
}));
