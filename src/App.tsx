import { Link, useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes([
    { path: '/register',  },
    { path: '/login',  }

  ]);
  return (
    <>
      {/* header nhé  */}
      <nav> 
        <h1 className="text-4xl text-orange-600">Hello camcam</h1>
      </nav>
      {/* container cấu hình routes ở trên */}
      <div className="container">{routes}</div>

       {/* footer nhé */}
      <footer>footer</footer>
    </>
  );
}
export default App;