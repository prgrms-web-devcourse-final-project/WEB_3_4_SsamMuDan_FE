import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const PrimarySelect = ({ customstyle, selectList, placeholder, onSortChange, 1 }) => {
  const handleSortChange = (selectedValue) => {
    onSortChange(selectList[selectedValue]); // 직접 매핑해서 보냄
  };

  // value={value} 추가
  return (
    <Select onValueChange={handleSortChange} value={value}>
      <SelectTrigger className={customstyle}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(selectList).map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default PrimarySelect;
