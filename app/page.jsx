import Head from 'next/head';
import LifeTimeline from '../components/LifeTimeline';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lifespans of the Saints</title>
      </Head>
      <Header />
      <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen"> {/* Add dark mode background */}
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Lifespans of the Saints</h1>
          <LifeTimeline/>
        </div>
      </div>
    </>
  );
}
