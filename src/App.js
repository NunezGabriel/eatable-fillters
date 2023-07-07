import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  //  / => nonauthenticated app maneja login y sgn-up
  // / => ruta de home muestra productos si estas loggeado
  // /products/:id => ruta de producto individual
  // /cart
  // /cart/checkout
  // /history
  // /profile

  const { user } = useAuth();

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
