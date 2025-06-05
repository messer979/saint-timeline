import Head from 'next/head';
import Header from '../../components/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Church History Timeline</title>
      </Head>
      <Header />
      <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">About Church History Timeline</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This page was created primarily using AI by Chris Messer. If there are any mistakes, please don&apos;t hesitate to reach out at messer979@gmail.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Features</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Interactive timeline showing the lifespans of saints and biblical figures</li>
                <li>Detailed information about each person&apos;s life and contributions</li>
                <li>Tag-based categorization (martyrs, confessors, prophets, etc.)</li>
                <li>Historical context and connections between different periods</li>
                <li>Educational resources for students and educators</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">How to Use</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Navigate through the timeline by scrolling or using the interactive controls. 
                Click on any figure to learn more about their life, achievements, and significance 
                in Church history. Use the filtering options to focus on specific categories or 
                time periods.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
