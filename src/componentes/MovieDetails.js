import movie from "./movies.json";
import styles from "./css/MovieDetails.module.css";

export function MovieDetails() {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsConteiner}>dddddddddddddddddDetails
    <img src={imageUrl} alt=""/>
    
    </div>
  );
}
