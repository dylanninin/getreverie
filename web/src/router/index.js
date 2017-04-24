import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Explore from '@/views/Explore'
import Story from '@/views/Story'
import Issue from '@/views/Issue'

// use vue-router plugin
Vue.use(Router)

// export router
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'current',
  routes: [
    // frontend
    { path: '/', component: Todo },
    { path: '/explore', component: Explore },
    { path: '/features', component: Todo },
    { path: '/pricing', component: Todo },
    { path: '/blog', component: Todo },
    { path: '/login', component: Todo },
    { path: '/signup', component: Todo },
    { path: '/faq', component: Todo },
    { path: '/about', component: Todo },
    { path: '/privacy', component: Todo },
    { path: '/terms', component: Todo },

    // public issues
    { path: '/stories/:id', component: Story },
    { path: '/stories/:id/issues/:issue_id', component: Issue },

    // auth
    { path: '/oauth/twitter', component: Todo },
    { path: '/oauth/facebook', component: Todo },
    { path: '/oauth/google', component: Todo },
    { path: '/oauth/wechat', component: Todo },
    { path: '/oauth/weibo', component: Todo },
    { path: '/logout', component: Todo },

    // apps and issues
    { path: '/apps/', component: Todo },
    { path: '/apps/:id/issues', component: Todo },
    { path: '/apps/:id/issues/current', component: Todo },
    { path: '/apps/:id/issues/current/schedule', component: Todo },
    { path: '/apps/:id/issues/current/preview', component: Todo },
    { path: '/apps/:id/issues/:issue_id', component: Todo },
    { path: '/apps/:id/issues/:issue_id/statistics', component: Todo },

    // invitation
    { path: '/apps/:id/invitations/new', component: Todo },

    // subscribers
    { path: '/apps/:id/subscribers', component: Todo },
    { path: '/apps/:id/subscribers/unsubscribed', component: Todo },
    { path: '/apps/:id/subscribers/cleaned', component: Todo },
    { path: '/apps/:id/subscribers/new', component: Todo },
    { path: '/apps/:id/subscribers/imports/mailchimp', component: Todo },
    { path: '/apps/:id/subscribers/imports/new', component: Todo },
    { path: '/apps/:id/subscribers/exports', component: Todo },

    // invite contacts
    { path: '/apps/:id/contacts/gmail', component: Todo },
    { path: '/apps/:id/contacts/gmail/callback', component: Todo },

    // settings / design / integrations
    { path: '/apps/:id/settings', component: Todo },
    { path: '/apps/:id/designs', component: Todo },
    { path: '/apps/:id/integrations', component: Todo },

    // referrals
    { path: '/referrals', component: Todo },
    { path: '/referrals/new', component: Todo },

    // accounts
    { path: '/accounts/', component: Todo },
    { path: '/accounts/profile', component: Todo },

    // teams
    { path: '/teams', component: Todo },
    { path: '/teams/:id', component: Todo },

    // subscriptions
    { path: '/subscriptions', component: Todo }
  ]
})
