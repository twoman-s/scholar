import Link from "next/link";
const CoursesList = ({ courses }) => {
  return (
    <>
      <h2>courses</h2>
      {courses.map((course) => {
        return (
          <>
            <Link href={`courses/${course.id}`}>
              <a>{course.name}</a>
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
};
export default CoursesList;

export async function getServerSideProps() {
  const response = await fetch("http://127.0.0.1:8000/api/getcourses/");
  const data = await response.json();
  return {
    props: {
      courses: data,
    },
  };
}
