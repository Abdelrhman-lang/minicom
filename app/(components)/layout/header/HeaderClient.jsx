import HeaderActions from "../../structure/headerActions/HeaderActions";
import HeaderLogo from "../../structure/headerLogo/HeaderLogo";
import Menu from "../../structure/menu/Menu";
import Navbar from "../../structure/Navbar/Navbar";

function HeaderClient() {
  return (
    <header className="lg:py-12 bg-white lg:bg-transparent  lg:shadow-none h-16 flex items-center lg:h-auto">
      <div className="container">
        <div className="flex items-center justify-between">
          <Menu />
          <HeaderLogo />
          <Navbar />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}

export default HeaderClient;
