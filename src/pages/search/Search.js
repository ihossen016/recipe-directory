import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

// Styles
import "./Search.css";

export default function Search() {
  // Extracting query parameter from url string
  const queryString = useLocation().search;
  const queryPrams = new URLSearchParams(queryString);
  const query = queryPrams.get("q");

  // Fetching Data according to query match
  const url = "http://localhost:3000/recipes?q=" + query;
  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
