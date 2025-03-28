const Badge = ({ text, className = '' }) => {
  return (
    <div className={`inline-flex items-center justify-center rounded-[999px] m-1 ${className}`}>
      <span className={'font-semibold leading-none'}>{text}</span>
    </div>
  );
};

export default Badge;
