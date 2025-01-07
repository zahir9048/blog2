const Features = () => {
    return (
      <div className='w-full h-screen bg-slate-50 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold text-slate-900 mb-8'>Languages</h1>
        <div className='w-3/4 bg-white rounded-xl p-6 shadow-lg'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-slate-100 p-4 rounded-lg'>
              <h2 className='text-2xl font-semibold text-slate-800'>NextJS</h2>
              <p className='text-slate-600'>Next.js15 with TypeScript: Unlocking Advanced Web Development

Next.js15 introduces robust TypeScript support, enhancing the developer experience with improved type safety, autocompletion, and easier refactoring. This version also brings new features like enhanced layouts, nested routing, and better image optimization, making it the perfect tool for building modern, full-stack web applications.</p>
            </div>
            <div className='bg-slate-100 p-4 rounded-lg'>
              <h2 className='text-2xl font-semibold text-slate-800'>Python</h2>
              <p className='text-slate-600'>Python: The Versatile Programming Language

Python is a high-level, interpreted programming language known for its simplicity and readability. Its extensive libraries and frameworks make it ideal for web development, data analysis, machine learning, and automation. Python's versatility and ease of use have made it a favorite among developers and beginners alike.</p>
            </div>
            <div className='bg-slate-100 p-4 rounded-lg'>
              <h2 className='text-2xl font-semibold text-slate-800'>Agentic AI Engineer</h2>
              <p className='text-slate-600'>Agentic AI Engineer: Pioneering Intelligent Solutions

An Agentic AI Engineer specializes in designing and implementing autonomous AI systems capable of intelligent decision-making and self-learning. By leveraging advanced algorithms and state-of-the-art machine learning techniques, these engineers develop innovative solutions that drive efficiency, enhance user experiences, and solve complex real-world problems. Their expertise is crucial in shaping the future of AI-driven technology.</p>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  
  export default Features