import React from 'react'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import UpcomingWorkoutField from './upcomingworkoutfield'

const home = () => {
  return (
    <div className='w-screen p-5'>
        <h1 className='text-2xl font-bold text-center mb-5'>Workout Tracker</h1>
        <div>
            <img src="https://i.ibb.co/QFL9qSr/Screenshot-2024-04-23-144331.png" alt="Screenshot-2024-04-23-144331" border="0"/>
            <div className='flex flex-row justify-center items-center gap-5 border-2 border-gray-100 rounded-xl p-3 bg-gradient-to-r from-blue-200 via-gray-100 to-white'>
                <WarningAmberRoundedIcon color='primary' fontSize='large'/>
                <p className=''>You've burned fewer calories than yesterday. Time to get moving!</p>
            </div>
        </div>
        <div className='upcoming_workout w-full'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold m-5 ml-0'>Upcoming Workout</h3>
                <p className='text-gray-400'>See more</p>
            </div>
            <UpcomingWorkoutField logo="https://i.ibb.co/xXtX6zn/Ellipse-53.png" content="Full Body Workout" datetime="Today 3pm" />
        </div>
    </div>
  )
}

export default home