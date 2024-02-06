import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo from "../../../components/movie-info"
import MovieVideo from "../../../components/movie-video"

// async function getMovie(id:string) {
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideo(id:string) {
//   const response = await fetch(`${API_URL}/${id}`)
//   return response.json()
// }

export default async function MovieDetail({params: {id}}:{params: {id: string}}) {
  // 순차적으로 진행
  // const movie = await getMovie(id);
  // const video = await getVideo(id);
  // 동시에 진행
  // const [movie, video] = await Promise.all([getMovie(id), getVideo(id)])
  return (
    // <div>
    //   <h1>Movie {movie.title}'s Detail</h1>
    // </div>
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id = {id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideo id = {id} />
      </Suspense>
    </div>
  )
}