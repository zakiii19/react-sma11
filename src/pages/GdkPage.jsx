import React from "react";
import NavbarComponents from "../components/NavbarComponents";
import TeacherTableComponents from "../components/TeacherTableComponents";
import StaffTableComponents from "../components/StaffTableComponents";
import HeroComponent from "../components/HeroComponent";

function GdkPage() {
  return (
    <div className="gdk py-0 my-0">
      <HeroComponent
        title="Guru dan Karyawan"
        description="Kenali para pendidik dan staf yang berdedikasi dalam menciptakan lingkungan belajar yang inspiratif."
      />
      <TeacherTableComponents />
      {/* <hr /> */}
      <StaffTableComponents />
    </div>
  );
}

export default GdkPage;
