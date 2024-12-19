Several solutions exist to address this issue.  One approach uses the `useLocation` hook to trigger a re-render whenever the location changes.

```javascript
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MyComponent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentId, setCurrentId] = useState(id);

  useEffect(() => {
    setCurrentId(id); // Update the state variable whenever the id changes 
  }, [id, location]);

  const handleClick = () => {
    navigate(`/item/123`); 
  };

  return (
    <div>
      <p>Item ID: {currentId}</p> 
      <button onClick={handleClick}>Go to Item 123</button>
    </div>
  );
}
```

This approach ensures that the component re-renders whenever the route changes, updating `currentId` to reflect the new parameter value.  The `location` dependency in useEffect ensures it runs on navigation.  Alternatively, you can directly use `location.pathname` to achieve a similar outcome, or use other state management libraries like Redux or Zustand.