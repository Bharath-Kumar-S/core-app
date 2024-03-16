import { useAppContext } from "@/contexts/AppContext";
import { Link } from "react-router-dom";
import { SignOutButton } from "@/components/SignOutButton";

export const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-gray-800 py-6">
      <div className="container flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Store.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              {/* <Link
                className="flex items-center text-white px-3 font-bold hover:bg-gray-300 hover:text-black"
                to="/my-bookings"
              >
                My Orders
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-gray-300 hover:text-black"
                to="/my-hotels"
              >
                Search Products
              </Link> */}
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-gray-300 hover:text-black"
                to="/add-products"
              >
                Add Products
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};
