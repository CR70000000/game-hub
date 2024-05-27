import useData from './useData'

// import genres from '../data/genres'

export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenres = () => useData<Genre>('/genres')

// 固定资源可以直接从本地获取数据渲染
// const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres
