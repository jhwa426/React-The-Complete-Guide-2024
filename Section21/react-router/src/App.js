import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products"
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// path : https://example.com/(path)
const router = createBrowserRouter([
	{
		path: "/", // absolute path is "/"
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			// { path: "/", element: <HomePage /> },
			{ index: true, element: <HomePage /> },

			{ path: "products", element: <ProductsPage /> },
			{ path: "products/:productId", element: <ProductDetailPage /> }, // products/:productId  ":" means dynamically 
		],
	},
	// {
	// 	path: "/admin",
	// 	children: [
	// 		{ path: "/" },
	// 	],
	// }
]);

// Alternative ways

// const routerDefinitions = createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<HomePage />} />
// 		<Route path="/products" element={<ProductsPage />} />
// 	</Route>
// );

// const router = createBrowserRouter(routerDefinitions);

function App() {
	return (
		<RouterProvider router={router} />

	);
}

export default App;
