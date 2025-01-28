import React from 'react';
import { skills, educations } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I'am <span className='blue-gradient_text font-semibold drop-shadow'>Pratham Mehta</span></h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          A Developer based in India, specializing in full stack development through hands-on learning and building applications.
        </p>
      </div>

      {/* SKILLS */}
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
    
        <div className='mt-16 flex flex-wrap gap-12'>
          {
            skills.map((skill, index) => (
              <div key={index} className='block-container w-20 h-20'>

                <div className='btn-back rounded-xl' />

                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div className='py-16'>
        <h3 className='subhead-text'>My Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Driven by a deep curiosity for technology, I embarked on my journey with a BCA, mastering the fundamentals of programming and system design. Now pursuing an Msc(CA) at SICSR, I’m delving into advanced technologies and honing my ability to solve complex problems with innovative solutions.

I see technology as a bridge between ideas and reality, and I’m passionate about crafting systems that are not only functional but impactful. With every line of code, I aim to create experiences that inspire and empower, shaping a future where technology makes life better for everyone.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {
              educations.map((education) => (
                <VerticalTimelineElement key={education.college_name}
                  date={education.date}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={education.icon}
                        className="w-[60%] h-[60%] object-contain"
                        alt={education.college_name}
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: education.iconBg,
                    boxShadow: 'none',
                  }}

                  iconStyle={{
                    backgroundColor: education.iconBg,
                  }}
                >
                  <div>
                    <h3 className='text-black text-lg font-poppins font-semibold'>
                      {education.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base'
                      style={{ margin: 0 }}
                    >
                      {education.college_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {
                      education.points.map((point, index) => (
                        <li key={`education-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                          {point}
                        </li>
                      ))
                    }
                  </ul>
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
      <CTA />

    </section>
  )
}

export default About