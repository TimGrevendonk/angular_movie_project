package fact.it.movie_angular_api.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Movie {
    @Id
    private int id;
    private String title;
    private String release_date;
    private int rating;
    private String description;
    private Boolean watched = false;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRelease_date() {
        return release_date;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        if (rating > 10) {
            this.rating = 10;
        } else if (rating < 0) {
            this.rating = 0;
        } else {
            this.rating = rating;
        }
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getWatched() {
        return watched;
    }

    public void setWatched(Boolean watched) {
        this.watched = watched;
    }
}
