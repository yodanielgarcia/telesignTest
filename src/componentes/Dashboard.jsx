import React from "react";
import { useEffect, useState } from "react";
import services from "../api/Services.tsx";
import Grid from "@mui/material/Grid";

export default function Dashboard() {
  const [moviesResult, setMovies] = useState();
  useEffect(() => {
    services.getRequest().then((movie) => setMovies(movie));
  }, []);
  const getGenere = () => {
    //services.getGenere().then((movie) => setMovies(movie));
    return moviesResult.genreId
  };
  return (
    <article style={{ color: "white" }}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {moviesResult &&
          moviesResult?.map((movie) => {
            return (
              <Grid item xs={12} xl={2}>
                <img
                  src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt=""
                  height={80}
                />
                <h3>{movie.title}</h3>
                <h4>{getGenere()}</h4>
              </Grid>
            );
          })}
      </Grid>
    </article>
  );
}
