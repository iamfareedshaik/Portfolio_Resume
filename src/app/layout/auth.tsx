// import { useKeycloak } from "@react-keycloak/web";
import { PropsWithChildren } from "react";
// import { useNavigate } from "react-router-dom";
// import { Loader } from "../../components/Loader";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

export const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // const { keycloak, initialized } = useKeycloak();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (initialized && !keycloak.authenticated) {
  //     navigate("/auth");
  //   }
  // }, [navigate, keycloak, initialized]);

  // if (!initialized) {
  //   return <Loader />;
  // }
  // console.log(keycloak);
  return (
    <>
      <Navbar />
      <main className='mt-6'>{children}</main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};
