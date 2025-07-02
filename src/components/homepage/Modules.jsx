import React from 'react';
import { Link } from 'react-router-dom';

const items = [
    {
        color: 'bg-blue-600',
        title: 'Collaborative Discussion 1',
        description: 'The Data Collection Process.',
        slug: '/collaborative-discussion',
    },
    {
        color: 'bg-green-600',
        title: 'Data Cleaning',
        description: 'Activities in Lecturecast unit 4.',
        slug: '/data-cleaning',
    },
    {
        color: 'bg-purple-600',
        title: 'Data Cleaning Continued',
        description: 'Activities in Lecturecast unit 4',
    },
    {
        color: 'bg-gray-600',
        title: 'Normalisation Task',
        description: 'Data build tasks',
    },
];

export default function Modules() {
    return (
        <section className="max-w-[1280px] mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {items.map((item, index) => {
                    const content = (
                        <div
                            className={`h-[200px] md:h-[250px] px-4 rounded-sm text-white shadow-md transition-transform duration-200 hover:scale-[1.02] ${item.color} flex flex-col justify-center`}
                        >
                            <div className="mb-3 w-fit">
                                <h2 className="text-base md:text-xl font-semibold">{item.title}</h2>
                                <div className="h-[2px] bg-white w-full mt-1" />
                            </div>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    );

                    return item.slug ? (
                        <Link to={item.slug} key={index}>
                            {content}
                        </Link>
                    ) : (
                        <div key={index}>{content}</div>
                    );
                })}
            </div>
        </section>
    );
}
