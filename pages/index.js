import Introduction from '../components/Introduction';
import Articles from '../components/Articles';
import { data } from '../components/FakeData';

export default function Home() {
  return (
    <>
      <div className='md:mt-4'>
        <div className='md:pl-2 md:pr-2'>
          <Introduction />
        </div>
        <div className='pt-8 pl-2 md:pl-40 md:pr-24 md:pt-8 min-h-screen'>
          <h5 className='text-2xl font-semibold text-header  mb-0'>
            From the experts
          </h5>
          <div className='px-1'>
            <Articles data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
