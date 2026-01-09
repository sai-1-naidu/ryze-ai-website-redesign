export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} Ryze AI. All rights reserved.
      </div>
    </footer>
  );
}
