import React from 'react'
import NavbarComponents from '../components/NavbarComponents'
import TeacherTableComponents from '../components/TeacherTableComponents'
import StaffTableComponents from '../components/StaffTableComponents'

function GdkPage() {
  return (
    <div className='gdk py-0 my-0'>
      <TeacherTableComponents />
      {/* <hr /> */}
      <StaffTableComponents />
    </div>
  )
}

export default GdkPage