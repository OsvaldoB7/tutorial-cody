import Image from "next/image";

export default function Home() {
  const staticDate = new Date().toDateString();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-5xl font-bold text-blue-600">Hello World</h1>
    <p>{staticDate}</p>
  </div>
  );
}
