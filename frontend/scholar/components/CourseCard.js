const CourseCard = ({ course }) => {
  return (
    <div>
      <h3>{course.name}</h3>
      <p>{course.fees}</p>
      <p>{course.semesters}</p>
      <hr />
    </div>
  );
};

export default CourseCard;
