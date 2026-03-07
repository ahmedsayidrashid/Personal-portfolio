import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="py-8 px-6 border-t border-slate">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted text-sm font-mono">
            &copy; {new Date().getFullYear()} Ahmed Rashid.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
