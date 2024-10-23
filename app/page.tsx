import Head from 'next/head';
import LifeTimeline from '../components/LifeTimeline';
import { people } from '../components/People';


export default function Home() {
  return (
    <>
      <Head>
        <title>Livespans of the Saints</title>
      </Head>
      <div>
        <h1>Livespans of the Saints</h1>
        <LifeTimeline people={people} />
      </div>
    </>
  );
}
