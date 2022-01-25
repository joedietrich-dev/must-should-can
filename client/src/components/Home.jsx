import { Navigate } from "react-router-dom";

function Home({ user }) {
  if (user) {
    return <Navigate to="/main" />;
  }
  return <div>Home</div>;
}

export default Home;
