import { useLocation, useNavigate } from 'react-router';

type HistoryState = {
  idx: number;
};

export const useNavigateBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    const historyIndex =
      (window.history.state as HistoryState | null)?.idx ?? 0;

    if (historyIndex > 0) {
      void navigate(-1);
    } else {
      const parentPath = location.pathname.replace(/\/[^/]*$/, '') || '/';
      void navigate(parentPath);
    }
  };
};
