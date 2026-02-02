'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { projects } from '../lib/data' // Restored your data import

const projectsList = [
  {
    id: 1,
    title: projects[1].title,
    description: projects[1].description,
    techStack: projects[1].tech,
    images: [
      'testSample/test1.png',
      'testSample/test2.png',
    ]
  }
]

const Page = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // FIX 1: Lock body scroll & Add Keyboard Support (Esc key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
    }

    if (activeProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject])

  const openLightbox = (project) => {
    setActiveProject(project)
    setCurrentIndex(0)
  }

  const handleClose = () => setActiveProject(null)

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % activeProject.images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length)
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#E0F7FF_0%,#FFFFFF_0%,#F5F3FF_50%,#DBEAFE_100%)] py-20 px-6">
      
      {/* Back Button */}
      <nav className="fixed top-6 left-6 z-[40]">
        <Link 
          href="/home" 
          className="group flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all text-slate-700 font-semibold"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto pt-10">
        <header className="mb-24 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Test Case</span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mt-3 tracking-tight">Sample Work<span className="text-blue-500">.</span></h1>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {projectsList?.map((project) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => openLightbox(project)}
            >
              {/* IMAGE STACK EFFECT */}
              <div className="relative h-64 w-full">
                {/* 3rd Layer */}
                {project.images[2] && (
                  <div className="absolute inset-0 transform translate-y-4 scale-90 bg-slate-200 rounded-3xl shadow-md transition-all duration-500 group-hover:-translate-y-8 group-hover:rotate-6 opacity-40 group-hover:opacity-100 overflow-hidden">
                     <img src={project.images[2]} className="w-full h-full object-cover grayscale group-hover:grayscale-0" alt="" />
                  </div>
                )}
                
                {/* 2nd Layer */}
                {project.images[1] && (
                  <div className="absolute inset-0 transform translate-y-2 scale-95 bg-slate-100 rounded-3xl shadow-lg transition-all duration-500 group-hover:-translate-y-4 group-hover:-rotate-3 opacity-70 group-hover:opacity-100 overflow-hidden border border-white/50">
                     <img src={project.images[1]} className="w-full h-full object-cover" alt="" />
                  </div>
                )}

                {/* Front Image */}
                <div className="absolute inset-0 bg-white p-2 rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-[1.03] overflow-hidden z-10 border border-white">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded-2xl" 
                  />
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter z-20">
                    +{project.images.length - 1} More
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-8 px-2">
                <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-none">{project.title}</h3>
                <div className="flex gap-3 mt-3">
                  {project?.techStack?.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] text-blue-500 font-black uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FACEBOOK LIGHTBOX */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex flex-col md:flex-row bg-slate-950/98 backdrop-blur-md animate-in fade-in duration-300">
          
          {/* IMAGE AREA */}
          <div className="relative flex-1 flex items-center justify-center p-6 md:p-16 h-[50vh] md:h-full" onClick={handleClose}>
            <button onClick={prevImage} className="absolute left-6 z-[110] p-4 text-white/40 hover:text-white transition-all bg-white/5 rounded-full border border-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextImage} className="absolute right-6 z-[110] p-4 text-white/40 hover:text-white transition-all bg-white/5 rounded-full border border-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>

            <img
              key={currentIndex}
              src={activeProject.images[currentIndex]}
              alt="Project detail"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-xs font-bold">
              {currentIndex + 1} / {activeProject.images.length}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="w-full md:w-[450px] bg-white h-[50vh] md:h-full flex flex-col border-l border-slate-100 shadow-[-20px_0_60px_rgba(0,0,0,0.4)]">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-white sticky top-0 z-20">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Project Narrative</span>
              <button onClick={handleClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-10 md:p-14 space-y-12">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter">{activeProject.title}</h2>
              
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack?.map(tech => (
                    <span key={tech} className="bg-slate-50 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold border border-slate-200">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">About</h4>
                <p className="text-slate-600 leading-relaxed text-lg font-light">{activeProject.description}</p>
              </div>
            </div>

            {/* <div className="p-10 bg-slate-50/50 border-t border-slate-100">
              <button className="w-full bg-slate-900 hover:bg-blue-600 text-white py-5 rounded-2xl font-black tracking-wide shadow-xl transition-all">
                VISIT LIVE SITE
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Page