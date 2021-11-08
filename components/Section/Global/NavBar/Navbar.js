import style from "./navbar.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState, useContext } from "react";
import { CartContext } from "../../../../contexts/cart";
import gsap from "gsap";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  const navRef = useRef();
  const menuAnimRef = useRef();

  const CartNumber = () => {
    return <div className={style.cart_number}>{cart.length}</div>;
  };

  const navItem = [
    {
      link: "/",
      label: "Accueil",
    },
    {
      link: "/catalogue",
      label: "Catalogue",
    },
    {
      link: "/about",
      label: "About",
    },
  ];

  const Hamburger = () => {
    return (
      <div onClick={() => setNav(!nav)} className={style.hamburger}>
        <div />
        <div />
        <div />
      </div>
    );
  };

  const MenuSection = () => {
    return (
      <div className={style.menuSection}>
        <Hamburger />
        <Link href="/">
          <span style={{ cursor: "pointer" }}>GoodNuit</span>
        </Link>
      </div>
    );
  };

  const Square = ({ data, i }) => {
    return (
      <div key={i} className={style.square}>
        <img src={data} />
        <div className={style.hover} />
      </div>
    );
  };

  const Action = () => {
    const imgIcon = [
      "/assets/img/search.svg",
      "/assets/img/user.svg",
      "/assets/img/cart.svg",
    ];
    return (
      <div className={style.action}>
        <Square data={imgIcon[0]} />
        <Square data={imgIcon[1]} />
        <Link href="/panier">
        <div className={style.square}>
        <img src={imgIcon[2]} />
        <div className={style.hover} />
      </div>
        </Link>
        {cart.length != 0 ? <CartNumber /> : null}
      </div>
    );
  };

  useEffect(() => {
    if (nav === true) {
      console.log(nav);
      gsap.to(navRef.current, {
        xPercent: "0",
      });
    } else {
      gsap.to(navRef.current, {
        xPercent: "-100",
      });
    }
  }, [nav]);

  return (
    <>
      <nav className={style.wrapper}>
        <MenuSection />
        <Action />
      </nav>
      <div ref={navRef} className={style.menu}>
        <span onClick={() => setNav(!nav)}>Close</span>

        <ul>
          {navItem.map((el, i) => {
            return (
              <Link href={el.link}>
                <li onClick={() => setNav(!nav)}> {el.label} </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
