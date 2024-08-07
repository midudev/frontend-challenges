export default function Copy({ label }) {
  return(
    <>
      {
        label
          ? <div className='mt-12 mx-auto flex flex-col items-center justify-center gap-2 absolute bottom-0 right-0   md:relative'>
            <p className='text-white text-xs   md:text-lg'>Copied!</p>
            <div className='copied w-10 h-10   md:w-20 md:h-20'></div>
          </div>
          : ''
      }
    </>
  )
}