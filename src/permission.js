import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
  // const hasToken = getToken()

  // if (!hasToken) {
  //   next(`/login?redirect=${to.path}`)
  NProgress.done()
  // }
})

router.afterEach((to) => {
  NProgress.done()
  // document.title = getPageTitle(to.meta.title)
})
