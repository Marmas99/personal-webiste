import Description from "../../Description/Description";
import Title from "../../Title/Title";
import style from "./HeroCard.module.css"




const Card = () => {
    return ( 
        <div className={style.card}>
            <Title />
            <Description />
        </div>
     );
}
 
export default Card;