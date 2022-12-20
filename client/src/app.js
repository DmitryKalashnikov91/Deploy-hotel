// Libraries
import React from 'react';
// import { Link } from 'react-router-dom';
//style
import './styles/app.scss';

//Redux
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from './redux/slices/userSlice';

// Hocs
import withRedux from './hoc/withRedux';
import withRouter from './hoc/withRouter';

// Components
// import Footer from './app/components/footer';
// import Header from './app/components/header';

//Layouts
import AppLoader from './utils/appLoader';
import { useLocation, useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const location = useLocation();
    const elements = useRoutes(routes(isLoggedIn, location));

    return (
        <div className='container-xxl'>
            <AppLoader>
                {elements}
                {/* <span className='to_reviews'>
                    <Link className='link-secondary' to='/reviews'>
                        Читать, оставить отзывы
                    </Link>
                </span> */}
            </AppLoader>
            {/* <Footer /> */}
        </div>
    );
};
const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;
