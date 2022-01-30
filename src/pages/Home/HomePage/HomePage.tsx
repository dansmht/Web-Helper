import { Link } from 'react-router-dom';

export const HomePage = () => (
  <div className="flex justify-center items-center flex-grow">
    <Link to="technologies" className="text-5xl p-2 pb-4 rounded-md bg-secondary border-2 border-color shadow-md shadow-color text-secondary hover:text-secondary-title focus:text-secondary-title">
      Let&apos;s get it started
    </Link>
  </div>
);
