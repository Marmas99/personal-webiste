import { useTranslation } from "react-i18next";
import style from "./Description.module.css"

const Description = () => {
    const { t } = useTranslation();

    return ( 
        <p>{t("hero.description")}</p>
     );
}
 
export default Description;