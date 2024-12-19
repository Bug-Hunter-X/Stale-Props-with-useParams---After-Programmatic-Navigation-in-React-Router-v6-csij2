In React Router Dom v6, the `useParams()` hook doesn't update automatically when the URL changes due to a programmatic navigation (e.g., using `useNavigate()`).  This can lead to stale data being displayed if the component doesn't re-render appropriately. For example:

```javascript
import { useParams, useNavigate } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/123`); // Programmatic navigation
  };

  return (
    <div>
      <p>Item ID: {id}</p> 
      <button onClick={handleClick}>Go to Item 123</button>
    </div>
  );
}
```

If `id` is initially `456`, clicking the button changes the URL, but `id` might remain `456` unless the component re-renders.