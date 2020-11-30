import React from 'react';
import Main from '../components/Main/MainContent';
import PageFollow from '../components/Pages/pageFollow';
import PageHistory from '../components/Pages/pageHistory';
import PageImage from '../components/Pages/pageImage';
import PageLogin from '../components/Pages/pageLogin';
import PageRegister from '../components/Pages/pageRegister';
import PageStory from '../components/Pages/pageStory';
import PageUserCurrent from '../components/Pages/pageUserCurrent';
import Stories from '../components/Pages/stories';
import PageBxhMonth from '../components/Pages/pageBxhMonth';
import PageBxhWeek from '../components/Pages/pageBxhWeek';
import PageBxhDay from '../components/Pages/pageBxhDay';
import PageHot from '../components/Pages/pageHot';
import PageRankAll from '../components/Pages/pageRankAll';
import PageMonday from '../components/Pages/pageMonday';
import PageTuesday from '../components/Pages/pageTuesday';
import PageWednesday from '../components/Pages/pageWednesday';
import PageThursday from '../components/Pages/pageThursday';
import PageFriday from '../components/Pages/pageFriday';
import PageSaturday from '../components/Pages/pageSaturday';
import PageSunday from '../components/Pages/pageSunday';





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
        path: '/register',
        exact: false,
        main: ({ match, history }) => <PageRegister match={match} history={history} />
    },
    {
        path: '/user',
        exact: false,
        main: ({ match, history }) => <PageUserCurrent match={match} history={history} />
    },
    {
        path: '/bxh/month',
        exact: false,
        main: ({ match, history }) => <PageBxhMonth match={match} history={history} />
    },
    {
        path: '/bxh/week',
        exact: false,
        main: ({ match, history }) => <PageBxhWeek match={match} history={history} />
    },
    {
        path: '/bxh/day',
        exact: false,
        main: ({ match, history }) => <PageBxhDay match={match} history={history} />
    },
    {
        path: '/hot',
        exact: false,
        main: ({ match, history }) => <PageHot match={match} history={history} />
    },
    {
        path: '/bxh/all',
        exact: false,
        main: ({ match, history }) => <PageRankAll match={match} history={history} />
    },
    {
        path: '/daily/monday',
        exact: false,
        main: ({ match, history }) => <PageMonday match={match} history={history} />
    },
    {
        path: '/daily/tuesday',
        exact: false,
        main: ({ match, history }) => <PageTuesday match={match} history={history} />
    },
    {
        path: '/daily/wednesday',
        exact: false,
        main: ({ match, history }) => <PageWednesday match={match} history={history} />
    },
    {
        path: '/daily/thursday',
        exact: false,
        main: ({ match, history }) => <PageThursday match={match} history={history} />
    },
    {
        path: '/daily/friday',
        exact: false,
        main: ({ match, history }) => <PageFriday match={match} history={history} />
    },
    {
        path: '/daily/saturday',
        exact: false,
        main: ({ match, history }) => <PageSaturday match={match} history={history} />
    },
    {
        path: '/daily/sunday',
        exact: false,
        main: ({ match, history }) => <PageSunday match={match} history={history} />
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