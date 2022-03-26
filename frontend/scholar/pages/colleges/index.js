import Link from "next/link";
const CollegesList = ({ colleges }) => {
  return (
    <>
      <h2>Colleges</h2>
      {colleges.map((college) => {
        return (
          <>
            <Link href={`colleges/${college.id}`}>
              <a>{college.name}</a>
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
};
export default CollegesList;

export async function getServerSideProps() {
  const response = await fetch("http://127.0.0.1:8000/api/getcolleges/");
  const data = await response.json();
  return {
    props: {
      colleges: data,
    },
  };
}
