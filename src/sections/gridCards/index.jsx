import FirstCard from './partials/FirstCard';
import SecondCard from './partials/SecondCard';
import FourthCard from './partials/FourthCard';
import SeventhCard from './partials/SeventhCard';

const GridCards = () => {
  return (
    <section className='flex justify-center bg-[#fcfcfc]'>
      <div className='container max-w-[1350px] max-w py-28'>
        <header className='flex flex-col items-center gap-12 h-72'>
          <button className='bg-[#ededed] border border-[rgba(32, 32, 32, 0.1)] rounded py-0.5 px-2 text-gray-500'>
            feature
          </button>
          <h2 className='text-7xl font-semibold text-center tracking-tighter leading-tight'>
            <span className='block'>Packed with powerful features to</span>
            <span className='opacity-30'>make your daily ops a breeze</span>
          </h2>
        </header>
        <section className='grid grid-cols-2 gap-4'>
          <FirstCard />
          <SecondCard />
          <FourthCard />
          <SeventhCard />
        </section>
      </div>
    </section>
  );
};

export default GridCards;
