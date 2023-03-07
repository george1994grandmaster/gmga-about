import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Deactivate from "./pages/deactivate";
import DeactivationFinished from "./pages/deactivationFinished";
import Home from "./pages/home";
import Profil from "./pages/profile";
import Error from "./pages/error";
import About from "./pages/about";
import Settings from "./pages/settings";
import Forum from "./pages/forum";
import Login from "./pages/login";
import EditProfile from "./pages/editProfile";
import ProtectedRoute from "./pages/ProtectedRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All pages which can be accessed by user who is not logged in */}
        <Route path="/" exact element={<Navbar />}>
          <Route index exact element={<Home />} />
          <Route path="about" exact element={<About />} />
          <Route path="profile/:id" exact element={<Profil />} />
          <Route path="deactivate" exact element={<Deactivate />} />
          <Route
            path="deactivationFinished"
            exact
            element={<DeactivationFinished />}
          />
          <Route path="*" exact element={<Error />} />
        </Route>
        {/* Settings and Edit Profile are 2 pages which should not be accessed by user who is not signed in so user is redirected to error page if he tries to go there if not logged in */}
        <Route
          path="/"
          exact
          element={
            <ProtectedRoute>
              <Navbar />
            </ProtectedRoute>
          }
        >
          <Route path="editprofile" exact element={<EditProfile />} />
          <Route path="settings" exact element={<Settings />} />
          <Route path="forum" exact element={<Forum />} />
        </Route>
        {/* Login page is the only page which does not have Navbar so its outtside of Navbar route */}
        <Route path="login" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
