import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn
} from "@clerk/clerk-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Welcome from './pages/Welcome'
import Home from './pages/Home';
import BaseLayout from './layouts/BaseLayout'

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw "Missing Publishable Key"
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<BaseLayout/>}>
            <Route
                index
                element={
                <>
                  <SignedIn>
                    <Home />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
                }
            />
            <Route
              path="/sign-in/*"
              element={<SignIn path="/sign-in" />}
            />
            <Route
              path="/sign-up/*"
              element={<SignUp path="/sign-up" />}
            />
            <Route
              path="/protected"
              element={
              <>
                <SignedIn>
                  <Welcome />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
              }
            />
        </Route>
  ))
  return (
      <ClerkProvider publishableKey={clerkPubKey}>
        <RouterProvider 
          router={router} 
        />   
      </ClerkProvider>
  )
}

export default App
