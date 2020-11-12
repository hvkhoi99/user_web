import React from 'react';
import Stories from '../components/Pages/stories';
import Main from '../components/Main/MainContent';
import PageStory from '../components/Pages/pageStory';
import PageImage from '../components/Pages/pageImage';


const routes = [
    {
        path: '/category/:id',
        exact: false,
        main: ({ match, history }) => <Stories match={match} history={history} />
    },
    {
        path: '/story/:id',
        exact: false,
        main: ({ match, history }) => <PageStory match={match} history={history} />
    },
    {
        path: '/chapter/:id',
        exact: false,
        main: ({ match, history }) => <PageImage match={match} history={history} />
    },
    {
        path: '/',
        exact: false,
        main: () => <Main />
    },
    // {
    //     path: '/admin/edit',
    //     exact: false,
    //     main: ({ match, history }) => <UserCurrent match={match} history={history} />
    // },
    // {
    //     path: '/',
    //     exact: true,
    //     main: () => <Login/>
    // },
]

export default routes;