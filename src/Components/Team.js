// Team.js

import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Hema',
      role: 'Founder',
      image: 'https://media.licdn.com/dms/image/D5635AQGwKI8uZGQWow/profile-framedphoto-shrink_400_400/0/1705591394316?e=1718168400&v=beta&t=tAYi_tVUOKpadQ8mWWX4R_lUBFgr2Tsf58imJgJ1nbk',
      linkedin: 'https://www.linkedin.com/in/hema-devi-u/',
      twitter: '#',
    },
    {
      name: 'Vimal Dubey',
      role: 'Founder',
      image: 'https://media.licdn.com/dms/image/D5603AQGCn6AxIP7g1Q/profile-displayphoto-shrink_400_400/0/1712762267340?e=1721260800&v=beta&t=JM7DxGee9S-gH1Avgw9Q1Qsq5iENH_3mcHu_zA1nFdI',
      linkedin: 'https://www.linkedin.com/in/vimal-dubey/',
      twitter: 'https://twitter.com/VimalDu88372352',
    },
    {
      name: 'Aman Kumar',
      role: 'Founder',
      image: 'https://media.licdn.com/dms/image/D4D03AQE0kF2MW5CPdA/profile-displayphoto-shrink_400_400/0/1700705984566?e=1721260800&v=beta&t=HqTTyWuS_0B11kmxDOzregGDmUt1p1XI38FUXlMYRZE',
      linkedin: 'https://www.linkedin.com/in/amankumarsah/',
      twitter: 'https://twitter.com/hoBabu1',
    },
    
  ];

  return (
    <div className="bg-white">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-900">Meet our Team</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <img
              className="mx-auto h-32 w-32 rounded-full"
              src={member.image}
              alt={`${member.name}'s profile`}
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src="/Assets/logo_linkedin.png" alt="LinkedIn" className="h-6 w-6" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <img src="/Assets/logo_x.png" alt="Twitter" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;