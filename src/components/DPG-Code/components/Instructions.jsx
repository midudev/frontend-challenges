import Copy from './Copy.jsx'

export default function Instructions ({ label }) {
  return (
    <div className='z-10 flex flex-col items-start justify-start relative'>
      <h2 className='mb-4 text-2xl text-white flex items-center   lg:mb-8 lg:text-3xl   2xl:text-5xl'>
        <div className='gameboyMini w-[31px] h-[31px]   lg:w-[38px] lg:h-[38px]   2xl:w-[61px] 2xl:h-[61px]'></div> Instructions:
      </h2>
      <ul className='text-xs text-white   lg:text-base   2xl:text-2xl'>
        <li className='mb-2 flex items-center justify-start gap-2   2xl:mb-4'>
          <div className='button-home w-5 h-5   lg:w-8 lg:h-8   2xl:w-11 2xl:h-11'></div>
          <p>Home</p>
        </li>

        <li className='mb-2 flex items-center justify-start gap-2   2xl:mb-4'>
        <div className='button-start w-5 h-5   lg:w-8 lg:h-8   2xl:w-11 2xl:h-11'></div>
          <p>Start</p>
        </li>

        <li className='mb-2 flex items-center justify-start gap-2   2xl:mb-4'>
          <a
            className='w-5 h-5 flex items-center justify-center relative   lg:w-8 lg:h-8   2xl:w-11 2xl:h-11'
          >
            <span className='z-10 text-white'>B</span>
            <div className='button-red w-full h-full absolute'></div>
          </a>
          <p>Generate a password</p>
        </li>

        <li className='mb-2 flex items-center justify-start gap-2   2xl:mb-4'>
          <a
            className='w-5 h-5 flex items-center justify-center relative   lg:w-8 lg:h-8   2xl:w-11 2xl:h-11'
          >
            <span className='z-10 text-white'>A</span>
            <div className='button-red w-full h-full absolute'></div>
          </a>
          <p>Copy password</p>
        </li>

        <li className='mb-0 flex items-center justify-start   lg:mb-2   2xl:mb-4'>
        <span className='mr-2 text-lg text-white'>&#60;</span>
          <p>Decrease length</p>
        </li>

        <li className='mb-0 flex items-center justify-start   lg:mb-2   2xl:mb-4'>
          <span className='mr-2 text-lg text-white'>&#62;</span>
          <p>Increase length</p>
        </li>
      </ul>

      <Copy label={label}/>
    </div>
  )
}
