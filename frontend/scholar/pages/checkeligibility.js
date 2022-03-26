import { useState } from "react";

const CheckEligibility = ({ courses }) => {
  const [colleges, setColleges] = useState();
  const handleCollegeSelect = async (e) => {
    const courseId = e.target.value;
    if (courseId !== "select") {
      const response = await fetch(
        `http://127.0.0.1:8000/api/getcollegewithcourse/${courseId}/`
      );
      const data = await response.json();
      setColleges(data);
    }
  };
  return (
    <form>
      <input type="text" name="firstname" id="firstname" />
      <input type="text" name="lastname" id="lastname" />
      <input type="number" name="phone" id="phone" />
      <input type="email" name="email" id="email" />
      <select name="college" id="college" onChange={handleCollegeSelect}>
        <option value="select">Select a Course</option>
        {courses.map((course) => {
          return (
            <option value={course.id} key={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
      {colleges ? (
        <select name="college" id="college">
          {colleges.map((college) => {
            return (
              <option value={college.id} key={college.id}>
                {college.name}
              </option>
            );
          })}
        </select>
      ) : (
        <></>
      )}
    </form>
  );
};

export default CheckEligibility;

export async function getServerSideProps() {
  const response = await fetch("http://127.0.0.1:8000/api/getcourses/");
  const data = await response.json();
  return {
    props: {
      courses: data,
    },
  };
}
