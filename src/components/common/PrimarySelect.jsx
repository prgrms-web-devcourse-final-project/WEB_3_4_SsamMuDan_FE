import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const PrimarySelect = ({ customstyle, selectList, placeholder, onSortChange }) => {
  return (
    <>
      <Select onValueChange={onSortChange}>
        <SelectTrigger className={customstyle}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {selectList.map((item) => (
            // <SelectItem key={item} value={item}>
            //   {item}
            // </SelectItem>
            <SelectItem key={item} value={item === '최신순' ? '최신순' : '좋아요순'}>
              {item}
            </SelectItem>
          ))}
          {/* <SelectItem value="latest">최신순</SelectItem>
          <SelectItem value="likes">좋아요순</SelectItem> */}
        </SelectContent>
      </Select>
    </>
  );
};

export default PrimarySelect;
