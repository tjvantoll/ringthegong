import React from "react";

export function useSound(src) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const sound = new Audio(src);

  React.useEffect(() => {
    sound.addEventListener('ended', () => {
      setIsPlaying(false);
    })
  }, []);

  return {
    isPlaying,
    play: () => {
      setIsPlaying(true);
      sound.currentTime = 0;
      sound.play();
    }
  }
}