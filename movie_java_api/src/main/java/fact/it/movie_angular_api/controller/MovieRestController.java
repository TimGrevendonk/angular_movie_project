package fact.it.movie_angular_api.controller;

import fact.it.movie_angular_api.model.Movie;
import fact.it.movie_angular_api.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MovieRestController {
    @Autowired
    private MovieRepository movieRepository;

    @GetMapping("/movies")
    public List<Movie> getMovies() {
        return movieRepository.giveListOfAllMoviesOrderedByTitle();
    }

    @GetMapping("/movie/title")
    public List<Movie> getMovieByTitle(@RequestBody String title){
        return movieRepository.findAllByTitleContaining(title);
    }

    @GetMapping("/movie/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable int id){
        Optional<Movie> movieTemp = Optional.ofNullable(movieRepository.findById(id));
        if(movieTemp.isPresent()) {
            Movie movie = movieTemp.get();
            return new ResponseEntity<>(movie, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/movie")
    public Movie createMovie(@RequestBody Movie movie){
        return movieRepository.save(movie);
    }

    @DeleteMapping("/movie/{id}")
    public ResponseEntity<Movie> deleteMovie(@PathVariable int id){
        Optional<Movie> movieTemp = Optional.ofNullable(movieRepository.findById(id));

        if(movieTemp.isPresent()){
            Movie movie = movieTemp.get();
            movieRepository.delete(movie);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/movie/{number}")
    public ResponseEntity<Movie> updateMovie(@RequestBody Movie updateMovie, @PathVariable("number") int movieId){
        Optional<Movie> movieTemp =  Optional.ofNullable(movieRepository.findById(movieId));
        if(movieTemp.isPresent()){
            Movie movie = movieTemp.get();
            movie.setId(updateMovie.getId());
            movie.setTitle(updateMovie.getTitle());
            movie.setRelease_date(updateMovie.getRelease_date());
            // add optional description, watched, and rating.
//            movie.setDescription();

            movieRepository.save(movie);
            return new ResponseEntity<>(movie, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PatchMapping("/movie/{id}")
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie, @PathVariable("id") int movieId){
        movieRepository.save(movie);
        return ResponseEntity.ok(movieRepository.findById(movieId));
    }
}
