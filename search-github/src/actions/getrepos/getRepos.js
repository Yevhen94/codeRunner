import axios from "axios";
import { setRepo, setLoading } from "../../reducer/reposReduser";

export const getRepos = (searching, perPage, currPage) => {
  const baseURL = `https://api.github.com/search/repositories?q=${searching}&per_page=${perPage}&page=${currPage}`;

  return async (dispatch) => {
    dispatch(setLoading(true));
    await axios.get(baseURL).then((res) => {
      console.log(res.data);
      dispatch(setRepo(res.data));
    });
  };
};
