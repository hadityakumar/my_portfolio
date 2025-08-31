export default function Skills() {
  const Stack = [
  'Next.js',
  'React',
  'Node.js',
  'Flask',
  'Tailwind CSS',
  'Framer Motion',
  'TensorFlow',
  'OpenCV',
  'Python',
  'C++',
  'JavaScript/TypeScript',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Azure',
  'Git',
  'GitHub',
  'Postman',
  'MATLAB'
]

  return (
    <>
      {/* Keep spacing above if you want, but don't anchor to it */}
      <div className="lg:h-90 md:h-60 h-80 sm:h-40" />

      {/* Anchor target moved here with scroll offset for fixed navbar */}
      <div
        id="skills"
        className="min-h-screen md:h-screen h-[100dvh] py-0 relative md:py-8 flex justify-center flex-col items-center bg-gray-100 scroll-mt-24 md:scroll-mt-32"
      >
        {/* Title */}
        <div className="flex flex-row items-center justify-center gap-6 my-10">
        
        <svg width="50" height="50" className='navbar' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_105_666)"> <path fillRule="evenodd" clipRule="evenodd" d="M100 22C100 9.84974 90.1503 0 78 0H22C9.84974 0 0 9.84972 0 22V78.7194C0 90.8697 9.84974 100.719 22 100.719H78C90.1503 100.719 100 110.569 100 122.719V178C100 190.15 109.85 200 122 200H178C190.15 200 200 190.15 200 178V121.28C200 109.13 190.15 99.2805 178 99.2805H122C109.85 99.2805 100 89.4308 100 77.2805V22Z" fill="url(#paint0_linear_105_666)"/> </g> <defs> <linearGradient id="paint0_linear_105_666" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse"> <stop stopColor="#E9B8FF"/> <stop offset="1" stopColor="#F9ECFF"/> </linearGradient> <clipPath id="clip0_105_666"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
        <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide">
          SKILLS
        </h1>
        <svg width="50" height="50" className='navbar' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_105_666)"> <path fillRule="evenodd" clipRule="evenodd" d="M100 22C100 9.84974 90.1503 0 78 0H22C9.84974 0 0 9.84972 0 22V78.7194C0 90.8697 9.84974 100.719 22 100.719H78C90.1503 100.719 100 110.569 100 122.719V178C100 190.15 109.85 200 122 200H178C190.15 200 200 190.15 200 178V121.28C200 109.13 190.15 99.2805 178 99.2805H122C109.85 99.2805 100 89.4308 100 77.2805V22Z" fill="url(#paint0_linear_105_666)"/> </g> <defs> <linearGradient id="paint0_linear_105_666" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse"> <stop stopColor="#E9B8FF"/> <stop offset="1" stopColor="#F9ECFF"/> </linearGradient> <clipPath id="clip0_105_666"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
      </div>

      {/* Skills grid */}
      <div className="w-full grid grid-cols-5 gap-0">
        {Stack.map((skill, i) => (
          <div
            key={i}
            className="border border-gray-200 transition-all duration-300 hover:bg-gray-200 h-50 flex items-center justify-center font-semibold text-xl text-center"
          >
            {skill}
          </div>
        ))}
      </div>
      </div>

      <div className="lg:h-50 md:h-50 h-70 sm:h-30" />
    </>
  )
}
