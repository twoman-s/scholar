import CourseCard from "../../components/CourseCard";

const CourseDetails = ({ courses }) => {
  return <CourseCard course={courses} />;
};

export default CourseDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const { courseId } = params;
  const response = await fetch(
    `http://127.0.0.1:8000/api/getcourses/${courseId}`
  );
  const data = await response.json();
  return {
    props: {
      courses: data,
    },
  };
}
