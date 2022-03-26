import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchResultPage() {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState();
  const [isloading, setIsloading] = useState(true);
  const [searchCollegeResults, setSearchCollegeResults] = useState();
  const [searchCourseResults, setSearchCourseResults] = useState();
  const { params = [] } = router.query;
  async function getSearchResults(params) {
    if (params.length > 0) {
      setSearchKeyword(params);
      setSearchCollegeResults();
      setSearchCourseResults();
      const response = await fetch(
        `http://127.0.0.1:8000/api/search/${params[0]}/`
      );
      const data = await response.json();
      if (data.colleges.length > 0) {
        setSearchCollegeResults(data.colleges);
      }
      if (data.courses.length > 0) {
        setSearchCourseResults(data.courses);
      }
      setIsloading(false);
    }
  }
  useEffect(() => {
    getSearchResults(params);
  }, [params]);
  if (isloading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <h2>Search Results for {params[0]}</h2>
        <h3>Colleges</h3>
        {searchCollegeResults ? (
          searchCollegeResults.map((college) => {
            return <p>{college.name}</p>;
          })
        ) : (
          <p>No colleges found</p>
        )}
        <h3>Courses</h3>
        {searchCourseResults ? (
          searchCourseResults.map((course) => {
            return <p>{course.name}</p>;
          })
        ) : (
          <p>No courses found</p>
        )}
      </div>
    );
  }
}
