import React from 'react'
import EmployDashboardHeader from './components/EmployDashboardHeader'
import TaskStatus from './components/TaskStatus'
import TaskList from '../TaskList/TaskList'

const EmployDashboard = () => {
  return (
    <div className='h-screen'>
        <EmployDashboardHeader />
        <TaskStatus />
        <TaskList />
    </div>
  )
}

export default EmployDashboard