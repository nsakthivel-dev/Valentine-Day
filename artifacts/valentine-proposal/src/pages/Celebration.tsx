import { useEffect, useState } from "react";

const CELEBRATION_GIF = "https://media.tenor.com/hoblaIrKqRgAAAAC/bubu-dudu.gif";

interface Heart {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  fontSize: string;
  emoji: string;
}

const CONFETTI_EMOJIS = ["❤️", "💖", "💗", "💝", "💕", "🌸", "✨", "🌷", "💞", "🎉"];

export default function Celebration() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initial: Heart[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${(i * 3.4 + Math.random() * 10) % 100}%`,
      animationDuration: `${3 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${16 + Math.floor(Math.random() * 24)}px`,
      emoji: CONFETTI_EMOJIS[i % CONFETTI_EMOJIS.length],
    }));
    setHearts(initial);

    const interval = setInterval(() => {
      setHearts((prev) =>
        prev.map((h) => ({
          ...h,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 4}s`,
          animationDelay: `${Math.random() * 0.5}s`,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="celebration-bg">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="rain-heart"
          style={{
            left: h.left,
            animationDuration: h.animationDuration,
            animationDelay: h.animationDelay,
            fontSize: h.fontSize,
          }}
        >
          {h.emoji}
        </div>
      ))}

      <div className="celebration-card">
        <img
          src={CELEBRATION_GIF}
          alt="celebration"
          className="celebration-gif"
        />
        <h1 className="celebration-title">Yay!! I knew you'd say yes!</h1>
        <p className="celebration-subtitle">🎉 You've made me the happiest! 💕</p>
        <div className="celebration-hearts">💖 💕 💗 💝 💞</div>
      </div>
    </div>
  );
}
