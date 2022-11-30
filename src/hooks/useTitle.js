import { useEffect } from "react";
const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Vai Brother Resale Online`;
  }, [title]);
};

export default useTitle;
