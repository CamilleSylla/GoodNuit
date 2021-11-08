import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import style from "./filters.module.scss";

export default function Filters({ categories }) {
  const [selected, setSelected] = useState([]);
  const [dropdown, setDropdown] = useState(false)
  const dropdownRef = useRef()
  const dropSelectRef = useRef()
  const listWrapperRef = useRef()

  const RemoveElementFromState = (id) => {
    const remove = selected.filter((target) => target.id !== id);
    setSelected(remove);
  };

  const DisplayCategorieBtn = () => {
    return (
      <div onClick={() => setDropdown(!dropdown)} className={style.filtresBtn}>
        <p>Catégories</p>
        <img src="/assets/img/botarrow.svg" />
      </div>
    );
  };

  const SortByBtns = () => {
    return (
      <div className={style.sort}>
        <p>Filtrer par :</p>
        <ul>
          <li>Prix</li>
          <li>Nouveauté</li>
        </ul>
      </div>
    );
  };

  const CategorieList = ({ data, i }) => {
    return (
      <div key={i} ref={listWrapperRef} className={style.list_wrapper}>
        <h3> {data.name} </h3>
        <ul>
          {data.children.map((el, i) => {
            return (
              <li key={i} onClick={() => setSelected([...selected, el])}>
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const SelectedCategories = () => {
    return (
      <div ref={dropSelectRef} className={style.selected}>
        {selected.map((el, i) => {
          return (
            <div key={i}>
              <p>{el.name}</p>
              <span
                data-id={el.id}
                onClick={(e) => RemoveElementFromState(e.target.dataset.id)}
              >
                x
              </span>
            </div>
          );
        })}
        <div className={style.apply}>
          <p>Appliquer</p>
        </div>
      </div>
    );
  };

  const DropDownCategories = () => {
    return (
      <div ref={dropdownRef} className={style.dropdown}>
        <SelectedCategories />
        {categories.map((el, i) => {
          return <CategorieList data={el} i={i} />;
        })}
      </div>
    );
  };


  useEffect(() => {
      console.log(dropdown);
    //   if (dropdown === false) {
    //       gsap.to(dropdownRef.current.children, {
    //           height: 0,
    //           overflow: "hidden"
    //       })
    //   } else {
    //     gsap.to(dropdownRef.current.children, {
    //         height: "initial",
    //         display: "block",
    //     })
    //   }

  } ,[dropdown])

  return (
    <>
      <div className={style.wrapper}>
        <DisplayCategorieBtn />
        <SortByBtns />
      </div>
      <DropDownCategories />
    </>
  );
}
