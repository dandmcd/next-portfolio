import { useState, useEffect } from "react";

// Custom hook to manage random subtitle updates
const useRandomSubtitle = (subtitles: string[]) => {
  const [currentSubtitle, setCurrentSubtitle] = useState("");

  useEffect(() => {
    const changeSubtitle = () => {
      const randomIndex = Math.floor(Math.random() * subtitles.length);
      setCurrentSubtitle(subtitles[randomIndex]);
    };

    changeSubtitle();

    const intervalId = setInterval(changeSubtitle, 5000);

    return () => clearInterval(intervalId);
  }, [subtitles]);

  return currentSubtitle;
};

export default useRandomSubtitle;