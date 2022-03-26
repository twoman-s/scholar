const CollegeCard = ({ college }) => {
  return (
    <div>
      <h3>{college.name}</h3>
      <p>{college.place}</p>
      <p>{college.address}</p>
      <p>{college.phone}</p>
      <p>{college.email}</p>
      <h2>Courses Available</h2>
      <ul>
        {college.courses.map((course) => {
          return (
            <li>
              <p>Name : {course.name}</p>
              <p>Duration :{course.semesters} semesters</p>
              <p>Fees :{course.fees.toString()} Rs</p>
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
};

export default CollegeCard;
