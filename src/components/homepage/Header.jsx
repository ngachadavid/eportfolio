import React from 'react';

export default function Header() {
  return (
    <main className="max-w-[1280px] mx-auto pt-4 px-4 text-white">
      <div className="text-start md:text-center">
        <div className="inline-block">
          <h1 className="text-xl md:text-4xl font-bold">
            My Data Science e-Portfolio
          </h1>
          <div className="h-[2px] bg-white mt-2" />
        </div>
      </div>

      <p className="text-sm md:text-base text-start md:text-center max-w-2xl mx-auto uppercase mt-6 mb-10">
        My e-portfolio based on the work carried out on the BSc Computer Science Programme.
      </p>
    </main>
  );
}
