import { Navigate } from "react-router-dom";

function Home({ user }) {
  if (user) {
    return <Navigate to="/tasks" />;
  }
  return (
    <div>
      <h1>What's Must/Should/Can?</h1>
      <p>Must/Should/Can is a productivity tool for your day-to-day.</p>
      <p>We all have too much to do, and we need a way to organize it. With M/S/C, you give every task a priority:</p>
      <ul>
        <li>
          <strong>Must</strong> - Indicates items that <em>must</em> be done today.
        </li>
        <li>
          <strong>Should</strong> - Is reserved for items that you <em>should</em> do today, or very soon.
        </li>
        <li>
          <strong>Can</strong> - Is where all the items you keep in your back pocket go - you <em>can</em> do them if you have the time.
        </li>
      </ul>
      <p>Every day, take the time to "Reset" your tasks and place them in the proper category. Use the time to reflect on what's important.</p>
    </div>
  );
}

export default Home;
