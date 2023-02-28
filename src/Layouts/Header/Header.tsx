import "./Header.scss";
import HeaderTop from "../../Components/HeaderTop";
import HeaderMiddle from "../../Components/HeaderMiddle";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <HeaderTop />
                <HeaderMiddle />
            </div>
        </header>
    )
}

export default Header;