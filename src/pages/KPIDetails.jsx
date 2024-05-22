import { Button, Card, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import KPIProgressChart from '../components/charts/KPIProgressChart';
import { CalendarIcon, ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FunnelIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CornerButton from '../components/CornerButton';

const KPIDetails = () => {
  const location = useLocation();
  const { name, finished, total, due } = location.state;
  return (
    <div className='w-full'>
      <Header currentPage='Chi tiết KPI' backDestination='/dashboard' />
      <main className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll'>
        <div className='w-full flex justify-between items-center'>
          <Typography variant='h4' className='font-inter font-regular'>
            {name}
          </Typography>
          <div>
            <Link to='/kpi/1/edit' state={location.state}>
              <IconButton variant='outlined' className='border-purple w-8 h-8'>
                <PencilIcon className='w-6 text-purple'/>
              </IconButton>
            </Link>
            <IconButton variant='outlined' className='border-purple w-8 h-8 ml-2'>
              <TrashIcon className='w-6 text-purple'/>
            </IconButton>
          </div>
        </div>
        <div className='min-h-36 flex items-between justify-between'>
          <div className='flex flex-col items-start gap-2'>
            <div className='flex gap-1'>
              <Typography className='font-inter font-bold text-sm'>
                {`${finished}/${total}`}
              </Typography>
              <Typography className='font-inter font-regular text-sm'>
                công việc đã hoàn tất
              </Typography>
            </div>
            <div className='flex items-center gap-2'>
              <CalendarIcon className='w-4'/>
              <Typography className='font-inter font-bold text-sm'>
                Hạn {due}
              </Typography>
            </div>
            <Button variant='filled' className='flex gap-2 items-center bg-purple'>
              Xem báo cáo
              <ChevronRightIcon className='w-6 text-white'/>
            </Button>
          </div>
          <KPIProgressChart
            finished={finished}
            total={total}
          />
        </div>
        <hr className='border border-darkGray' />
        <div className='w-full flex justify-between items-center'>
          <Typography variant='h4' className='font-inter font-regular'>
            Danh sách công việc
          </Typography>
          <div className='flex items-center gap-2'>
            <FunnelIcon className='w-6'/>
            <Typography className='font-inter font-semibold text-sm'>
              Lọc
            </Typography>
          </div>
        </div>
        <Typography variant='h6' className='font-inter font-regular self-start'>
          Công việc sắp tới(0)
        </Typography>
        <Typography variant='h6' className='font-inter font-regular text-red self-start'>
          Công việc quá hạn(0)
        </Typography>
        <Typography variant='h6' className='font-inter font-regular text-green self-start'>
          Công việc đã hoàn thành(0)
        </Typography>
      </main>
      <CornerButton icon='add' />
      <Navbar />
    </div>
  )
}

export default KPIDetails