import axios from 'axios'

export const login = (e, url) => {
  e.preventDefault()
  const win = window.open(url);
  win.focus();
}

export const inputed = (e, setSearch) => {
  setSearch(e.target.value)
}

const updatePage = (page, setPage) => {
  return new Promise ((res, rej) => {
    let oldVal = page
    let newVal = page + 5
    setPage(newVal)
    oldVal !== newVal ? res(newVal) : rej('error')
  }) 
}

export const getRepo = (page, searching, setTotal, setRepos, setPage) => {
  updatePage(page, setPage)
    .then((res) => {
      console.log(res)
      axios.get(`${process.env.REACT_APP_API_URL}/search/repositories?q=${searching}&order=desc&per_page=${res}`)
        .then((response) => {
          setTotal(response.data.total_count)
          setRepos(response.data.items)
        })
        .catch((err) => console.log(err.response.data.message))
    })
    .catch((err) => console.log(err))
}

export const search = (e, searching, page, setTotal, setRepos, setPage) => {
  if (e.charCode === 13) {
    if (searching === '') {
      setRepos([])
      setPage(0)
    } else {
      getRepo(page, searching, setTotal, setRepos, setPage)
    }
  }
}
