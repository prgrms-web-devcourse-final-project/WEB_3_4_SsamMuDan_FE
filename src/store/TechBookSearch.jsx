import getTechBook from '@/api/education/getTechBook';
import item from '@/api/education/TechBookDummy';
// import { create } from 'zustand';

// const TechBookStore = create((set) => ({
//   techbookList: item.data.content,
//   filterKeyword: 'All',
//   setFilter: (filter) => set({ filter }),
//   fetchItems: async () => {
//     try {
//       const data = await getTechBook();
//       console.log(data);
//       set({ techbookList: data });
//     } catch (error) {
//       console.error('데이터 불러오기 실패:', error);
//     }
//   },
//   // 필터링된 리스트 반환
//   filteredItems: (filter) =>
//     filter === '최신순'
//       ? TechBookStore.getState().techbookList
//       : TechBookStore.getState().techbookList.filter((item) => item.category === filter),
// }));
// export default TechBookStore;
