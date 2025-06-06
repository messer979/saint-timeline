import LifeTimeline from '../components/LifeTimeline';
import Header from '../components/Header';
import type { Metadata } from "next";





export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen"> {/* Add dark mode background */}
        <div className="px-4 py-6">
          <LifeTimeline/>
        </div>
      </div>
    </>
  );
}
