import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import { HomePage } from './pages/HomePage';

export const App = () => (
  <div className="h-full bg-primary text-primary">
    <ThemeSwitcher />
    <HomePage />
  </div>
);
