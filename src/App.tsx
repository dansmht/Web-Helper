import { HomePage } from './pages/Home/HomePage/HomePage';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';

export const App = () => (
  <div className="h-full bg-primary text-primary transition duration-500">
    <ThemeSwitcher />
    <HomePage />
  </div>
);
