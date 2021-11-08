import Title from "../title/Title";
import style from "./support.module.scss";

export default function Support() {

    const card_content = [
        {
            img: "/assets/img/phone.svg",
            label: "Par téléphone",
            para: "Vous pouvez nous joindre entre 8h et 17h",
            contact_info: "(+33) 6 06 06 06 06"
        },
        {
            img: "/assets/img/mail.svg",
            label: "Par Email",
            para: "Un réel humain vous repondra dès que possible",
            contact_info: "email@email.com"
        },
    ]


    const Card = ({data, i}) => {
        return (
            <article className={style.card}>
                <img src={data.img}/>
                <div>
                <h1>{data.label}</h1>
                <p>{data.para} </p>
                <a href="#">{data.contact_info} </a>
                </div>
            </article>
        )
    }
    const Content = () => {

        return (
            <div className={style.content}>
                {card_content.map((el, i) => {
                    return <Card data={el} i={i}/>
                })}
            </div>
        )
    }

  return (
    <section className={style.wrapper}>
      <Title
        title="Vous avez des question ?"
        para="Notre support est la pour vous épauler tous les jours de 8h a 17h"
      />
      <Content/>
    </section>
  );
}
