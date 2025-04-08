import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const PrimarySelect = ({ customstyle, selectList, placeholder, onSelect }) => {
  const handleSelect = (selectedValue) => {
    onSelect(selectedValue);
  };

  return (
    <Select onValueChange={handleSelect}>
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
