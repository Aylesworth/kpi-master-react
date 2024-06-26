import React from 'react'
import TasksChart from '../components/charts/TasksChart'
import Header from '../components/Header'
import { Breadcrumbs, Card, Typography } from '@material-tailwind/react'
import Navbar from '../components/Navbar'
import UpcomingTasksChart from '../components/charts/UpcomingTasksChart'
import OverallProgressChart from '../components/charts/OverallProgressChart'
import WeeklyFinishedTasksChart from '../components/charts/WeeklyFinishedTasksChart'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import BackButton from '../components/BackButton'
import { Link } from 'react-router-dom'

const Statistics = () => {
  return (
    <Wrapper>
      <div className='flex gap-4 items-center'>
        <BackButton to='/dashboard'/>
        <Breadcrumbs>
          <Link to="/dashboard" className="opacity-60">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
          </Link>
          <Link to="#">
            Thống kê
          </Link>
        </Breadcrumbs>
      </div>
      <PageHeader label={'Thống kê'} />
      <div className='grid grid-cols-2 gap-6 w-full'>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md font-medium'>
            Tổng quan tiến độ
          </Typography>
          <OverallProgressChart />
        </Card>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md font-medium'>
            Số lượng nhiệm vụ
          </Typography>
          <TasksChart
            finished={21}
            ongoing={19}
            overdue={5}
            total={45}
          />
        </Card>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md font-medium'>
            Số nhiệm vụ hoàn thành gần đây
          </Typography>
          <WeeklyFinishedTasksChart />
        </Card>
        <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md'>
          <Typography variant='h5' className='font-inter text-md font-medium'>
            Lượng nhiệm vụ sắp tới
          </Typography>
          <UpcomingTasksChart
            upcomingTasksData={[1, 8, 7, 5, 8, 6, 3, 1, 4, 2]}
          />
        </Card>
      </div>
    </Wrapper>
  )
}

export default Statistics