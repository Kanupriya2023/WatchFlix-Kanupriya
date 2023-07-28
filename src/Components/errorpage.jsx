import DashboardLayout from './dashboard'

import React from 'react' // rafce

const Errorpage = () => {
  return (
    <DashboardLayout>
        <h1 style={{
            textAlign:'center',
            width: '100vw',
            height: 'calc(100vh - 130px)',
            color:'white'
        }}>
            ERROR 404 : Page Not Found
        </h1>
    </DashboardLayout>
  )
}

export default Errorpage