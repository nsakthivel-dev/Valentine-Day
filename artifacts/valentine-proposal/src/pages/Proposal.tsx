import { useState, useCallback } from "react";
import Celebration from "./Celebration";

const GIFS = {
  initial: "https://media1.tenor.com/m/0IKwuW91-ZQAAAAC/mimibubu.gif",
  propose: "https://media1.tenor.com/m/L_HrXjWnXPEAAAAC/love.gif",
  missYou: "https://media1.tenor.com/m/sWXhCC4A2woAAAAC/bubu-bubu-dudu.gif",
  chubby: "https://media1.tenor.com/m/-Oes-vO2J-sAAAAC/milk-and-mocha.gif",
  carry: "https://media1.tenor.com/m/0_jT8Pyszi8AAAAC/bubu-dudu-dudu-carry.gif",
  cry: "https://media1.tenor.com/m/sWXhCC4A2woAAAAC/bubu-bubu-dudu.gif",
};

function FloatingHeart({ style }: { style: React.CSSProperties }) {
  return (
    <div className="floating-heart" style={style}>
      ❤️
    </div>
  );
}

export default function Proposal() {
  const [noCount, setNoCount] = useState(0);
  const [saidYes, setSaidYes] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  // Initial scaling logic: No shrinks, Yes grows
  // For the final step (noCount >= 5), Yes shrinks and No becomes large
  const isFinalStep = noCount >= 5;
  
  const yesScale = isFinalStep ? 0.8 : 1 + noCount * 0.2;
  const noScale = isFinalStep ? 1.6 : Math.max(0.1, 1 - noCount * 0.15);
  const noVisible = true; // Keep it always visible for the user's flow

  const handleNoClick = useCallback(() => {
    if (noCount >= 5) {
      // 6th slide special effect
      setIsTransforming(true);
      setTimeout(() => {
        setSaidYes(true);
      }, 1200); // Transition after ~1 second
    } else {
      setNoCount((c) => c + 1);
    }
  }, [noCount]);

  if (saidYes) return <Celebration />;

  const getGif = () => {
    const gifList = [
      GIFS.initial,
      GIFS.propose,
      GIFS.missYou,
      GIFS.chubby,
      GIFS.carry,
      GIFS.cry
    ];
    return gifList[Math.min(noCount, gifList.length - 1)];
  };

  const gif = getGif();
  const message =
    noCount === 0
      ? "Will you be my Valentine? ❤️"
      : noCount === 1
      ? "Wait… did you press No by accident? 👀"
      : noCount === 2
      ? "Hmm… my heart says you meant Yes. 🥺"
      : noCount === 3
      ? "Are you testing my patience now? �"
      : noCount === 4
      ? "Okay but… I’m actually very lovable you know. 😌"
      : "Last chance… don’t break my tiny heart. ❤️";

  return (
    <div className="proposal-bg">
      {Array.from({ length: 18 }).map((_, i) => (
        <FloatingHeart
          key={i}
          style={{
            left: `${(i * 5.7 + 2) % 100}%`,
            animationDelay: `${(i * 0.47) % 5}s`,
            animationDuration: `${6 + (i % 5)}s`,
            fontSize: `${14 + (i % 3) * 6}px`,
            opacity: 0.35 + (i % 4) * 0.1,
          }}
        />
      ))}

      <div className="proposal-card">
        <div className="gif-container" style={{ minHeight: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={gif}
            alt="cute animation"
            className="proposal-gif"
            key={gif}
            onError={(e) => {
              console.error("GIF failed to load:", gif);
              // Fallback if direct link fails, though media1 should be stable
            }}
          />
        </div>

        <h1 className="proposal-title">{message}</h1>

        <div className="proposal-buttons">
          <button
            className="btn-yes"
            style={{ 
              transform: `scale(${yesScale})`,
              opacity: isTransforming ? 0 : 1,
              transition: "all 0.5s ease"
            }}
            onClick={() => setSaidYes(true)}
          >
            Yes 💖
          </button>

          {noVisible && (
            <button
              className="btn-no"
              style={{
                transform: `scale(${isTransforming ? yesScale * 1.1 : noScale})`,
                transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                backgroundColor: isTransforming ? "#f06292" : undefined,
                color: isTransforming ? "white" : undefined,
                boxShadow: isTransforming ? "0 4px 20px rgba(233, 30, 140, 0.35)" : undefined,
                border: isTransforming ? "none" : undefined
              }}
              onClick={handleNoClick}
            >
              {isTransforming ? "Yes 💖" : "No 😢"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
