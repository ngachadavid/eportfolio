import React from 'react';

export default function About() {
    return (
        <main className="bg-[#132257] py-4 text-white">
           <div className='max-w-[1280px] mx-auto px-4'>
             <div className="text-center">
                <div className="inline-block">
                    <h2 className="text-xl font-bold">
                        About Me
                    </h2>
                    <div className="h-[2px] bg-white mt-2" />
                </div>
            </div>
            <p className="text-sm text-center max-w-2xl mx-auto mt-6 mb-10">
                This e-portfolio presents work completed as part of the BSc Computer Science – Data Science module. It includes coursework, reflections, and projects from units covered during the semester. <br/>
                The goal of this portfolio is to document my learning journey, highlight practical assignments, and provide a clear record of the skills and concepts explored throughout the module.My e-portfolio based on the work carried out on the Bsc Computer Science Programme.
            </p>
           </div>
        </main>
    );
}
