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

// import Link from "next/link";
import Movie from "../components/movie";
import styles from "../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

// Next.js 방식fetch
// export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000))   // 5초 지연시키는 함수
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 지연시키는 함수
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Main() {
  const movies = await getMovies();
  return (
    <div>
      {/* <h1>Hello Next.js</h1>
      <div>{JSON.stringify(movies)}</div> */}
      <div className={styles.container}>
        {movies.map((movie) => (
          // <li key={movie.id}>
          //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          // </li>

          // <div key={movie.id}>
          //   <img
          //     src={movie.poster_path}
          //     alt={movie.title}
          //   />
          //   <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
          // </div>

          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
