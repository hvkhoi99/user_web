import React from 'react';
import Stories from '../components/Pages/stories';
import Main from '../components/Main/MainContent';
import PageStory from '../components/Pages/pageStory';
import PageImage from '../components/Pages/pageImage';
import PageHistory from '../components/Pages/pageHistory';
import PageLogin from '../components/Pages/pageLogin';
import PageFollow from '../components/Pages/pageFollow';




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
        path: '/history',
        exact: false,
        main: ({ match, history }) => <PageHistory match={match} history={history} />
    },
    {
        path: '/login',
        exact: false,
        main: ({ match, history }) => <PageLogin match={match} history={history} />
    },
    {
        path: '/follow',
        exact: false,
        main: ({ match, history }) => <PageFollow match={match} history={history} />
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