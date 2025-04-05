import React from 'react';

const Education = () => {
  const educationDetails = [
    {
<<<<<<< HEAD
      logo: 'logo-arrow',
      degree: 'Master of Arts, CSJM University Kanpur',
      institution: 'Kanpur, UP',
      grades: 'CGPA: 7.58',
      year: '[2020-2022]',
      desc: 'I completed my Master of Arts at CSJM University Kanpur.',
    },
=======
      logo: "logo-arrow",
      degree: 'Master of Arts CSJM University Kanpur',
      institution: 'Kanpur, UP',
      grades: 'CGPA: 7.58',
      year: ' [2020-2022]',
      desc: "I Completed  my Master of Arts CSJM University Kanpur  },
>>>>>>> 828cf8933547e85881362efade3e7d85a27c820f
    {
      logo: 'logo-play',
      degree: 'GSEB(XII)-HSC',
<<<<<<< HEAD
      institution: 'R.P.P Inter College',
      grades: 'Grade: 70.1%',
      year: '[2016-2017]',
      desc: 'I completed my 12th from R.P.P Inter College.',
=======
      institution: 'R.P.P Inter college',
      grades: 'Grade: 70.1% ',
      year: ' [2016-2017]',
      desc: "I completed my 12th from R.P.P Inter college",       
>>>>>>> 828cf8933547e85881362efade3e7d85a27c820f
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
        My <span className="text-cyan-600">Education</span>
      </h3>
      <p className="text-lg text-center font-normal">
        My educational details are as follows.
      </p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4"
          >
            <ion-icon
              name={edu.logo}
              class="text-primary text-xl mr-2"
            ></ion-icon>
            <div className="text-lg font-medium mb-2 text-gray-700">
              {edu.degree}
            </div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
