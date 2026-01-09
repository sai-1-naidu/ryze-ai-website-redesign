import { useState } from "react";

export default function PrimaryButton({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <button
      className="btn btn-primary btn-lg px-5"
      disabled={loading}
      onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1200);
      }}
    >
      {loading ? "Processing..." : children}
    </button>
  );
}
