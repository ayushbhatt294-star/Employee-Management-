import React from 'react'

const TaskListNum = () => {
  return (
    <div className='shrink-0 flex mt-10 justify-between gap-5 w-screen'>
        <div  className=' bg-[#67D6D9] hover:bg-[#4FC3C7] text-black rounded-xl w-[45%] py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        
       <div className=' bg-[#67D6D9] hover:bg-[#4FC3C7] text-black rounded-xl w-[45%] py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
      
      
    </div>
  )
}

export default TaskListNum
