import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/layouts/Layout";
// import { Register } from "@/pages/Register";
// import { SignIn } from "./pages/SignIn";
// import { AddProduct } from "./pages/AddProduct";
import { Enquiry } from "./pages/Enquiry";
// import { useAppContext } from "./contexts/AppContext";
// import { AllProducts } from "./pages/AllProducts";

function App() {
  // const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={
            <Layout>
              <p>Homepage page</p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search page</p>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        {isLoggedIn && (
          <> */}
        <Route
          path="/"
          element={
            <Layout>
              <Enquiry />
            </Layout>
          }
        />
        {/* <Route
              path="/all-products"
              element={
                <Layout>
                  <AllProducts />
                </Layout>
              }
            />
          </>
        )} */}
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
