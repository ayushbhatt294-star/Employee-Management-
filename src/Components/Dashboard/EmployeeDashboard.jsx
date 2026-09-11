import React from 'react'
import Header from '../Other/Header'
import TaskListNum from '../Other/TaskListNum'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {
  const Content=props.Data
  return (
    <div className="p-10 bg-[#171717] h-screen w-full overflow-x-hidden">
      <Header DD={Content}  handleLogout={props.handleLogout} />
   
      <Tasklist tasks={Content?.tasks} />
    </div>
  )
}

export default EmployeeDashboard
