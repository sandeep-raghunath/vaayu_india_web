"use client";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-3 py-4 text-sm md:flex-row">
          <div>© {new Date().getFullYear()} Vaayu India. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#">Terms</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
