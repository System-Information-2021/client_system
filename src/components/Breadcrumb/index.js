import { Link, useLocation } from "react-router-dom";

function Index() {
    const location = useLocation();
    const arrayPath = location.pathname.split("/").splice(1);

    const breadcrumb = arrayPath.map((addr, index) => {
        let combinePath = "/";
        for (let i = 0; i <= index; i++) {
            combinePath += arrayPath[i] + "/";
        }
        return (
            <li >
                <a href={combinePath}>{addr + "/"}</a>
            </li>
        );
    });

    return (
        <nav>
            <ol className="breadcrumb">{breadcrumb}</ol>
        </nav>
    );
}

export default Index;

