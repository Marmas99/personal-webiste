import { useTranslation } from "react-i18next";

const Description = () => {
    const { t } = useTranslation();

    return ( 
        <p>{t("hero.description")}</p>
     );
}
 
export default Description;