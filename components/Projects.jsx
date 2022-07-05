import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tmdbImg from '../public/assets/projects/tmdb1.jpg';
import eCommerce from '../public/assets/projects/e-commerce1.jpg'
import ceibo from '../public/assets/projects/ceibo2.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='TMDB'
            backgroundImg={tmdbImg}
            projectUrl='/TMDB'
            tech='React/Node/PostgreSQL'
          />
          <ProjectItem
            title='E-commerce'
            backgroundImg={eCommerce}
            projectUrl='/eCommerce'
            tech='React JS/Node/PostgreSQL'

          />
          <ProjectItem
            title='Ceibo App'
            backgroundImg={ceibo}
            projectUrl='/ceibo'
            tech='React-Native/Node/MongoDB'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
