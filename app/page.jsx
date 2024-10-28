import Head from 'next/head';
import LifeTimeline from '../components/LifeTimeline';


export default function Home() {
  return (
    <>
      <Head>
        <title>Lifespans of the Saints</title>
      </Head>
      <div>
        <h1>Lifespans of the Saints</h1>
        <LifeTimeline/>
      </div>
    </>
  );
}
