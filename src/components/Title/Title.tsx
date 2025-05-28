import { useTranslation } from 'react-i18next';


const Title = () => {
    const { t } = useTranslation();

    return (
        <h3>{t("hero.title")}</h3>
    );
}
 
export default Title;