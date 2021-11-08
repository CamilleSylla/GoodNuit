import style from "./productlist.module.scss";
import ProductCard from "../../Global/ProductCard/ProductCard";

export default function ProductList({ products }) {

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          {products.map((el, i) => {
            return <ProductCard width="100%" data={el} i={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
