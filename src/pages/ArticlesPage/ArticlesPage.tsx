import Breadcrumb from "../../Components/Breadcrumb";
import ArticleSection from "../../Layouts/ArticleSection";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";

const urls = [
    {
        link: '#',
        text: 'Главная'
    },
    {
        link: '#',
        text: 'Статьи'
    },
    {
        link: '#',
        text: 'Первый'
    }
]


function ArticlesPage() {
    return (
        <>
            <Header />
            <Breadcrumb urls={urls} />
            <ArticleSection />
            <Footer />
        </>
    )
}

export default ArticlesPage;