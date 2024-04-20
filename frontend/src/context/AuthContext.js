// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  userMenu: null,
  userAuths: null,
  useSessionYear: '',
  useSession: '',
  loading: true,
  setUser: () => null,
  setUserMenu: () => null,
  setUserAuths: () => null,
  setSessionYear: () => '',
  setSession: () => '',
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  singlelogin: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  courseData: {
    years: [],
    sessions: [],
    courses: [],
    branches: [],
    semesters: '0',
    components: [],
    offers: [],
    currYear: '',
    currSession: '',
    currCourse: '',
    currBranch: '',
    currSem: '',
    currBatch: '',
    currCourseId: '',
    currBranchId: '',
    currComponent: ''
  },
  setCourseData: () => null,
  courseList: [],
  setCourseList: () => null,
  fetchCourseList: () => null,
  getProfessor: () => null,
  store: () => null
}
const url = process.env.APIURL
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [userMenu, setUserMenu] = useState(defaultProvider.userMenu)
  const [userAuths, setUserAuths] = useState(defaultProvider.userAuths)
  const [useSessionYear, setSessionYear] = useState(defaultProvider.useSessionYear)
  const [useSession, setSession] = useState(defaultProvider.useSession)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [courseList, setCourseList] = useState([])

  const [courseData, setCourseData] = useState({
    years: [],
    sessions: [],
    courses: [],
    branches: [],
    semesters: '0',
    components: [],
    offers: [],
    currYear: '',
    currSession: '',
    currCourse: '',
    currBranch: '',
    currSem: '',
    currBatch: '',
    currCourseId: '',
    currBranchId: '',
    currComponent: ''
  })

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      if (window.location.href.indexOf('login') != -1) {
        localStorage.removeItem('userData')
        localStorage.removeItem('userMenu')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
        setUser(null)
        setUserMenu(null)
        setSession('')
        setSessionYear('')
        setUserAuths(null)
        setLoading(false)
      }
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)
        await axios
          .get(url + 'refresh', {
            headers: {
              Authorization: 'Bearer ' + storedToken
            }
          })
          .then(async response => {
            setLoading(false)
            // setUser({ ...response.data.userData })
            if (response.data.status === true) {
              setUser({ ...response.data.data.user_details })
              setUserMenu({ ...response.data.data.user_menu_details })
              setSession({ ...response.data.data.session })
              setSessionYear({ ...response.data.data.session_year })
              setUserAuths(Object.values({ ...response.data.data.user_auth }))
              // console.log(Object.values({ ...response.data.data.user_auth }))
              if (window.location.href.indexOf('login') != -1) {
                const returnUrl = router.query.returnUrl
                const redirectURL = returnUrl && returnUrl !== '/home' ? returnUrl : '/home'
                router.replace(redirectURL)
              }
              // const returnUrl = router.query.returnUrl
              // const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
              // router.replace(redirectURL)
            } else {
              localStorage.removeItem('userData')
              localStorage.removeItem('userMenu')
              localStorage.removeItem('refreshToken')
              localStorage.removeItem('accessToken')
              setUser(null)
              setUserMenu(null)
              setSession('')
              setSessionYear('')
              setUserAuths(null)
              setLoading(false)
              alert('Your Session Expire !')
              //    toast.error(response)
              //   NotificationManager.error("error", 'Error');
              const returnUrl = router.query.returnUrl
              const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
              router.replace(redirectURL)
            }
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('userMenu')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            console.log('nooo')
            setUser(null)
            setUserMenu(null)
            setUserAuths(null)
            setLoading(false)
            router.replace('/login')
            if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
              router.replace('/login')
            }
          })
      } else {
        console.log('nooo')
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSinglelogin = (params, errorCallback) => {
    axios
      .post(url + 'validateuser', params)
      .then(async response => {
        if (response.data.status === true) {
          // params.rememberMe
          //   ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
          //   : null
          const returnUrl = router.query.returnUrl
          //  window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.token)
          window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.data.token)

          setUser({ ...response.data.data.user_details })
          setUserMenu({ ...response.data.data.user_menu_details })
          setUserAuths(Object.values({ ...response.data.data.user_auth }))
          setSession({ ...response.data.data.session })
          setSessionYear({ ...response.data.data.session_year })
          //  console.log(Object.values({ ...response.data.data.user_auth }))
          window.localStorage.setItem('userData', JSON.stringify(response.data.data.user_details))
          window.localStorage.setItem('userMenu', JSON.stringify(response.data.data.user_menu_details))

          //  params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null
          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
          router.replace(redirectURL)
        } else {
          router.push('/login')
          console.log('innaaaa' + response.data)
          errorCallback(response.data)
        }
      })
      .catch(err => {
        router.push('/login')
        console.log('s')
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogin = (params, errorCallback) => {
    axios
      .post(url + 'login', params)
      .then(async response => {
        if (response.data.status === true) {
          // params.rememberMe
          //   ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
          //   : null
          const returnUrl = router.query.returnUrl
          //  window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.token)
          window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.data.token)

          setUser({ ...response.data.data.user_details })
          setUserMenu({ ...response.data.data.user_menu_details })
          setUserAuths(Object.values({ ...response.data.data.user_auth }))
          setSession({ ...response.data.data.session })
          setSessionYear({ ...response.data.data.session_year })
          //  console.log(Object.values({ ...response.data.data.user_auth }))
          window.localStorage.setItem('userData', JSON.stringify(response.data.data.user_details))
          window.localStorage.setItem('userMenu', JSON.stringify(response.data.data.user_menu_details))

          //  params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null
          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
          router.replace(redirectURL)
        } else {
          errorCallback(response.data)
        }
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    setUser(null)
    setUserMenu(null)
    setUserAuths(null)

    setSession('')
    setSessionYear('')
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem('userMenu')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params, errorCallback) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  async function fetchCourseList(params) {
    const response = await axios.post(url + 'getcoursedata', params, {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName)
      }
    })
    const data = response.data
    console.log(response)
    setCourseList(data)
  }

  async function getProfessor(params) {
    console.log(params)
    const response = await axios.post(
      url + 'getprofessor',
      { data: params },
      {
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName)
        }
      }
    )
    return response.data
  }

  async function store(params) {
    console.log(params)
    const res = await axios.post(url + 'store', params, {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName)
      }
    })
    return res
  }

  const values = {
    user,
    loading,
    setUser,
    userMenu,
    userAuths,
    useSessionYear,
    useSession,
    setSession,
    setSessionYear,
    setUserMenu,
    setUserAuths,
    setLoading,
    login: handleLogin,
    singlelogin: handleSinglelogin,
    logout: handleLogout,
    register: handleRegister,
    courseData,
    setCourseData,
    courseList,
    setCourseList,
    fetchCourseList,
    getProfessor,
    store
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
