"use client"
import { useState } from 'react';
import Image from 'next/image';

const Resume = () => {
  const [showSkills, setShowSkills] = useState(true);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className='bg-blue-300  '>
      <div className="max-w-4xl   mx-auto p-6    bg-black shadow-lg rounded-lg">
        {/* Personal Information Section */}
        <section className="mb-6">
          <h2 className="text-2xl  text-blue-800 font-bold border-b-2 border-blue-500 pb-2 mb-4">
            Personal Information
          </h2>
          <div className="flex  justify-between space-x-4 text-white">
            <div>
              <p className="text-lg">Name: Parvez Ahmed</p>
              <p className="text-lg">Email: parvezcoder786@gmail.Company</p>
              <p className="text-lg">Phone: 0305-2887779</p>
            </div>
            <Image src="/pic.jpg" alt="Parvez Pic"
             width={90}  height={50} className="rounded-xl " />
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 ">
          <h2 className="text-2xl  font-bold border-b-2 border-blue-500 pb-2 text-blue-800 mb-4">Education</h2>
          <p className="text-lg">Bachelor of Science in Computer Science</p>
          <p className="text-white">QUEST University Nawabshah (2012-2015)</p>
        </section>

        {/* Skills Section with Toggle */}
        <section className="mb-8 " >
          <h2 className="text-2xl font-bold border-b-2 border-blue-500
           pb-2 text-blue-800 mb-4">Skills</h2>
         
          {showSkills && (
            <ul className="mt-4   flex-col space-y-2 text-center sm:flex-row justify-between text-lg flex">
              <li className=' text-white p-1 px-2 rounded-2xl font-semibold'> JavaScript</li>
              <li className='bg-black text-white p-1 px-2 rounded-2xl font-semibold' > React.js</li >
              <li className='bg-black text-white p-1 px-2 rounded-2xl font-semibold'> Next.js</li>
              <li className='bg-black text-white p-1 px-2 rounded-2xl font-semibold'> TypeScript</li>
            </ul>
          )}
           <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition"
            onClick={toggleSkills}>
            {showSkills ? 'Hide Skills' : 'Show Skills'}
          </button>
        </section>

        {/* Work Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4 text-blue-900">
            Work Experience
          </h2>
          <div>
            <h3 className="text-xl font-semibold text-white">Senior Student of 1st quater - at GIAIC</h3>
            <p className="text-white">Feb-2024 - Aug-2024</p>
            <p className=" text-white text-lg">Developed scalable web applications using React and Next.js.</p>
          </div>
        </section>
        <footer>
          <div>
            <span className="text-2xl font-bold   flex justify-center text-center border-b-2 border-blue-500 pb-2  text-blue-900">
              Copyright
            </span>
            <p className='text-center text-white'>
            @ Parvez Ahmed
            </p>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default Resume;