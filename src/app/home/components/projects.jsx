import React, { useEffect, useState } from 'react';
import { ExternalLink, Frown,Wrench  } from 'lucide-react';
import { projects } from '@/app/lib/data';

const ProjectCard = ({ props, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`my-14 flex flex-col gap-10 items-center lg:flex-row ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      <div className='w-[300px] border hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer border-gray-100 rounded-3xl overflow-hidden'>
        <img src={props.image} alt='project' />
      </div>
      <div className='max-w-xl'>
        <h1 className={`text-2xl font-semibold text-center lg:text-left`}>{props.title}</h1>
        <h2 className={`text-xl text-center lg:text-left`}>{props.projectType}</h2>
        <p className='py-4'>{props.description}</p>

        <div className='flex flex-wrap mb-8'>
          {props.tech.map((tech, index) => (
            <i key={index} className='px-5 py-1 mr-2 my-1 bg-slate-100 rounded-xl hover:shadow-md hover:scale-105'>
              {tech}
            </i>
          ))}
        </div>

        {!props.complete ? (
          <div className='flex'>
            <Wrench color='green' />
            <i className='px-2'>The project is currently in progress. Please stand by for further updates.</i>
          </div>
        ) : props.demoLink ? (
        
            <div className=' w-42 rounded-2xl hover:bg-slate-100'>
              <a href={props.demoLink} target='_blank' rel='noopener noreferrer' className='flex px-4 py-2 '>
                <ExternalLink color='#2b7fff' />
                <i className='px-2 text-blue-500'>Live Demo.</i>
                </a>
            </div>
        ) :  (
          <div className='flex'>
            <Frown color='red' />
            <i className='px-2'>Live Demo not available.</i>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='w-full'>
      <h1 className='text-3xl text-center font-bold'>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={project.title} props={project} index={index} />
      ))}
    </div>
  );
};

export default Projects;
