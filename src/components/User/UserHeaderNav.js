import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyFeed } from "../../assets/Feed.svg";
import { ReactComponent as Stats } from "../../assets/Stats.svg";
import { ReactComponent as AddItem } from "../../assets/AddItem.svg";
import { ReactComponent as Logout } from "../../assets/Logout.svg";
import style from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? style.navMobile : style.nav} ${
          mobileMenu && style.navMobileActive
        }`}
      >
        <NavLink to="/minhaconta" end activeClassName={style.active}>
          <MyFeed />
          {mobile && "Meus itens"}
        </NavLink>
        <NavLink to="/minhaconta/estatisticas" activeClassName={style.active}>
          <Stats />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/minhaconta/item" activeClassName={style.active}>
          <AddItem />
          {mobile && "Adicionar item"}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
