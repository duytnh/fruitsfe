import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import StorePage from "./pages/users/storePage";
import NewsPage from "pages/users/newsPage";
import ContactPage from "pages/users/contactPage";
import CartPage from "pages/users/cartPage";
import IntroPage from "pages/users/introPage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.STORE,
            component: <StorePage />
        },
        {
            path: ROUTERS.USER.NEWS,
            component: <NewsPage />
        },
        {
            path: ROUTERS.USER.CONTACTS,
            component: <ContactPage />
        },
        {
            path: ROUTERS.USER.CART,
            component: <CartPage />
        },
        {
            path: ROUTERS.USER.INTRO,
            component: <IntroPage />
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;