import React from 'react'

const Experience = () => {
  return (
    <div className=' bg-black p-12 rounded-lg border'>
       <ol className="relative border-s border-gray-200 dark:border-gray-700">
         <li className='mb-10 ms-6'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Zetech University</h3>
            <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-100'>Software Engineering</time>
            <ul className='list-disc pl-5 mb-4'>
            <li className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Developed a web-based system to automate the Student ID replacement process  streamlining the workflow for students and administrative staff.</li>
            <li className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Utilized a modern tech stack,PHP for development JavaScript for functionalities and mySQL for the database.</li>
            <li className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Reduced the average processing time for ID replacements by 50%, increased efficiency for university staff, and improved the overall student experience.</li>
            <li className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Coordinated GitHub activities and effectively assigned tasks to team members,
            ensuring smooth collaboration and progress tracking</li>
            </ul>


         </li>
         </ol>

         <ol className="relative border-s border-gray-200 dark:border-gray-700">
         <li className='mb-10 ms-6'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Moringa School <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"></span><span/></h3>
            <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-100'>Full Stack Developer</time>
            <ul className='list-disc pl-5 mb-4'>
            <li className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Spearheaded a software engineering group to successfully execute a project,overseeing all aspects from conception to completion.</li>
            <li className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lead a team of software engineers in the development of a comprehensive full-stack website project.</li>
            <li className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Coordinated GitHub activities and effectively assigned tasks to team members,
            ensuring smooth collaboration and progress tracking</li>
            </ul>


         </li>
         </ol>


    </div>
  )
}

export default Experience;