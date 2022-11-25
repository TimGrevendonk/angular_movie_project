package fact.it.movie_angular_api.repository;

import fact.it.movie_angular_api.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    // Return all movies ordered by name.
    @Query("select m from Movie m order by m.title ASC")
    List<Movie> giveListOfAllMoviesOrderedByTitle();

    // No custom query, uses keywords query.
    List<Movie> findAllByTitleContaining(String search);

    Movie findById(Integer id);

//    @Query("select b from Bread b order by b.price ASC")
//    List<Bread> giveListOfAllBreadsOrderedByPrice();
//
//    // List<Bread> findAllByOrderByPriceAsc();
//    @Query("select b from Bread b where b.price in (select min(b.price) from Bread b)")
//    List<Bread> findCheapestBreads();
}
