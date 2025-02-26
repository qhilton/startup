import React from 'react';
import { useParams } from 'react-router-dom';
import './viewRecipe.css';

// export function ViewRecipe() {
//   return (
//     <main className="flex flex-col bg-secondary">
//       <h1
//         id="name" aria-placeholder="Name">Recipe Name
//       </h1>
//       <h3>Ingredients</h3>
//       <p id="ingredients"></p>
//       <h3>Instructions</h3>
//       <p id="instructions"></p>
//     </main>
//   );
// }

const ViewObject = () => {
  const { id } = useParams(); // Get object ID from URL params
  const [objectData, setObjectData] = useState(null);

  useEffect(() => {
    const storedObject = localStorage.getItem(id);
    if (storedObject) {
      setObjectData(JSON.parse(storedObject));
    } else {
      setObjectData('Object not found');
    }
  }, [id]);

  return (
    <div>
      <h1>View Object</h1>
      {objectData ? (
        <div>
          <h2>{objectData.name}</h2>
          <h3>Ingredients:</h3>
          <p>{objectData.ingredients}</p>
          <h3>Instructions:</h3>
          <p>{objectData.instructions}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewObject;