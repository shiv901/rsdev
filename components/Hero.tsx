export default function Hero() {
  return (
    <>
      <div className='grid place-content-center mt-40'>
        <p>I'm</p>
        <p className='text-5xl'>
          Shivansh <span className='text-green-500'>Raghav</span>
        </p>
        <p className='text-2xl my-5'>
          I can turn your imagination into beautiful Websites.
        </p>
        <p className='italic mt-10'>
          Intersing enough? <span className='text-green-300'>Let's Talk</span>
        </p>
        <button className='bg-green-500 px-6 py-2 w-max rounded-md  '>
          <a href='#contact'> Contact Me</a>
        </button>
      </div>
    </>
  );
}
