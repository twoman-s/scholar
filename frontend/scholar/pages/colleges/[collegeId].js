import CollegeCard from "../../components/CollegeCard";

const CollegeDetails = ({ college }) => {
  return <CollegeCard college={college} />;
};

export default CollegeDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const { collegeId } = params;
  const response = await fetch(
    `http://127.0.0.1:8000/api/getcolleges/${collegeId}`
  );
  const data = await response.json();
  return {
    props: {
      college: data,
    },
  };
}
