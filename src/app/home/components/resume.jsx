import React from 'react';

const Resume = () => {
  return (
    <div className='w-full  box-shadow rounded-lg px-4 py-2 bg-white'>
      <h1 className='text-xl font-bold mb-2'>Resume</h1>
      <div className='flex items-center justify-evenly gap-4 pb-4'>
        <button className='bg-[#333333] w-full !text-white px-4 py-2 rounded-xl' aria-label="View Resume">
          View CV
        </button>
        <button className='border w-full border-[#333333] px-4 py-2 rounded-xl' aria-label="Download Resume">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Resume;
