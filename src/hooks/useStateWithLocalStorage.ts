import { useState, useEffect } from "react";

const useStateWithLocalStorage = (storageKey: string) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem(storageKey) || ""
  );

  useEffect(() => {
    localStorage.setItem(storageKey, value);
  }, [value, storageKey]);

  return [value, setValue] as const;
};

export default useStateWithLocalStorage;
