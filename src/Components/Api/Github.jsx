import { useEffect, useState } from "react";

function useGithubApi() {
  const [GithubApiData, setGithubApi] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/pukuss")
      .then((res) => {
        if(!res.ok){
          throw new Error("GITHUB API ERROR : "+ res.status);
        }
        return res.json()
      })
      .then((data) => {
        setGithubApi(data);
      })
      .catch((err)=>{
        setError(err.message)
      })
  }, []); // <-- correct dependency array

  return {GithubApiData , error};
}

export default useGithubApi;
