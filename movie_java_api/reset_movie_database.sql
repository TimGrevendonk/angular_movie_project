DROP TABLE IF EXISTS moviesangular.movie;

CREATE TABLE moviesangular.movie (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `release_date` varchar(255) NOT NULL,
  `rating` int NULL,
  `description` varchar(255) NULL,
  `watched` bool,
  
  PRIMARY KEY (`id`)
) ;

INSERT INTO moviesangular.movie VALUES (22538 , "Scott Pilgrim vs. the World", "2010-08-12", 10, "Being vegan gives you superpowers!", true);


