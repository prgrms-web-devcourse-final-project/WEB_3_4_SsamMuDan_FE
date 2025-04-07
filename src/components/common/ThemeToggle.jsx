import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import useThemeStore from '@/store/useThemeStore';

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-grey100 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-6 h-6 text-grey600" />
      ) : (
        <SunIcon className="w-6 h-6 text-grey600" />
      )}
    </button>
  );
};

export default ThemeToggle;
