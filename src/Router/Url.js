import React from 'react';
import Main from '../components/Main/MainContent';
import PageFollow from '../components/Pages/pageFollow';
import PageHistory from '../components/Pages/pageHistory';
import PageImage from '../components/Pages/pageImage';
import PageLogin from '../components/Pages/pageLogin';
import PageStory from '../components/Pages/pageStory';
import PageUserCurrent from '../components/Pages/pageUserCurrent';
import Stories from '../components/Pages/stories';




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
        path: '/user',
        exact: false,
        main: ({ match, history }) => <PageUserCurrent match={match} history={history} />
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