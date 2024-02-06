// 일반 React 방식fetch
// "use client";
//
// import { useEffect, useState } from "react";
//
// export default function Main() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
//     const json = await response.json();
//     setMovies(json);
//   };
//   useEffect(() => {
//     getMovies();
//     setIsLoading(false);
//   }, []);
//   return (
//     <div>
//       <h1>Hello Next.js</h1>
//       {/* <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div> */}
//     </div>
//   );
// }

import Link from "next/link";

// Next.js 방식fetch
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000))   // 5초 지연시키는 함수
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 지연시키는 함수
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Main() {
  const movies = await getMovies();
  return (
    <div>
      <h1>Hello Next.js</h1>
      {/* <div>{JSON.stringify(movies)}</div> */}
      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}
