import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// Styles
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const history = useHistory();

  // Using PostData function to post data
  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  // Form Submit function
  const handleSubmit = e => {
    e.preventDefault();

    // Posting data
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
  };

  // Redirect user after we get data response
  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data]);

  // Ingredients list add function
  const handleAdd = e => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing]);
    }
    setNewIngredient("");

    // focus on input field
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={e => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>

        <p>
          Current ingredients:{" "}
          {ingredients.map(i => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={e => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time (Minutes):</span>
          <input
            type="number"
            onChange={e => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
