import { useEffect, useState } from "react";

export default function LiveStats() {
  const [count, setCount] = useState(1240);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-white-50 mt-4">
      🔴 <strong>{count}+</strong> conversations handled today
    </p>
  );
}
