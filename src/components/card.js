import React from "react";
import { Link } from "react-router-dom";
const Card = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-start gap-8 p-6 pl-28">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-900"
        >
          <Link to="#">
            <img
              className="rounded-t-lg w-full h-80 object-cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {movie.overview.length > 120
                ? movie.overview.slice(0, 120) + "..."
                : movie.overview}
            </p>

            <p className="mb-2  dark:text-gray-400">
              ⭐ {movie.vote_average}
            </p>

            <p className="mb-4  dark:text-gray-400">
              Release Date: {movie.release_date}
            </p>

            <Link
              to={`/movie/${movie.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;