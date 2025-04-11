import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const DateSelect = ({ customstyle, selectList, placeholder, onSortChange, value }) => {
  return (
    <Select onValueChange={onSortChange} value={value}>
      <SelectTrigger className={customstyle}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {selectList.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DateSelect;
