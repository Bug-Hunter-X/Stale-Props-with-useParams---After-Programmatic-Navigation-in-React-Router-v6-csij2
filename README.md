# Stale Props with useParams() After Programmatic Navigation in React Router v6

This repository demonstrates a common issue in React Router v6 where the `useParams()` hook doesn't automatically update when the URL changes via programmatic navigation (e.g., using `useNavigate()`).

## Problem

The `useParams()` hook provides access to route parameters. However, when you navigate to a new route using `useNavigate()`, the `useParams()` hook won't re-read the new parameters unless the component re-renders.

## Solution

The solution involves forcing a re-render.  This can be achieved using techniques like using the `useLocation` hook to trigger a re-render when the location changes or using a state variable to manage the rerendering.