const MOVIES = [
  {
    id: "1",
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releasedYear: "2008",
    genre: ["Action", "Crime", "Drama"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    language: ["English", "Turkey"],
    ratings: 3.3,
  },
  {
    id: "2",
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releasedYear: "2010",
    genre: ["Action", "Adventure", "Sci-Fi"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    language: ["English", "French"],
    ratings: 4,
  },
  {
    id: "3",
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releasedYear: "1999",
    genre: ["Action", "Sci-Fi"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
    language: ["English"],
    ratings: 4.5,
  },
  {
    id: "20",
    title: "The Silence of the Lambs",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    releasedYear: "1991",
    genre: ["Crime", "Drama", "Thriller"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/jHj1vRf5R7X9k4Jj03pnfMnvKzo.jpg",
    language: ["English"],
    ratings: 4.6,
  },
  {
    id: "1",
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releasedYear: "2008",
    genre: ["Action", "Crime", "Drama"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    language: ["English", "Turkey"],
    ratings: 3.3,
  },
  {
    id: "21",
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releasedYear: "1994",
    genre: ["Crime", "Drama"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    language: ["English"],
    ratings: 4.5,
  },
  {
    id: "22",
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    releasedYear: "1999",
    genre: ["Drama"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
    language: ["English"],
    ratings: 4.8,
  },
  {
    id: "23",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A meek hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    releasedYear: "2001",
    genre: ["Action", "Adventure", "Drama"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/56zTpe2xvaA4alU51sRWPoKPYZy.jpg",
    language: ["English"],
    ratings: 4.9,
  },
  {
    id: "24",
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releasedYear: "2014",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    language: ["English"],
    ratings: 4.7,
  },
  {
    id: "25",
    title: "The Lion King",
    description:
      "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
    releasedYear: "1994",
    genre: ["Animation", "Adventure", "Drama"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/2xOvvezfj04BfKCDTe9mVb47yGp.jpg",
    language: ["English"],
    ratings: 4.6,
  },
  {
    id: "11",
    title: "The Prestige",
    description:
      "Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate stage illusion.",
    releasedYear: "2006",
    genre: ["Drama", "Mystery", "Thriller"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/uM7nG01iMpk2DhQxRfjQnRlmOhT.jpg",
    language: ["English", "French"],
    ratings: 4.1,
  },
  {
    id: "12",
    title: "Jurassic Park",
    description:
      "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    releasedYear: "1993",
    genre: ["Action", "Adventure", "Sci-Fi"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
    language: ["English"],
    ratings: 4.2,
  },
  {
    id: "13",
    title: "The Social Network",
    description:
      "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
    releasedYear: "2010",
    genre: ["Biography", "Drama"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/ok5Wh8385Kgblq9MSU4VGvazeMH.jpg",
    language: ["English"],
    ratings: 4.3,
  },
  {
    id: "14",
    title: "The Lion King",
    description:
      "Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.",
    releasedYear: "1994",
    genre: ["Animation", "Adventure", "Drama"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    language: ["English", "Swahili"],
    ratings: 4.5,
  },
  {
    id: "15",
    title: "The Departed",
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    releasedYear: "2006",
    genre: ["Crime", "Drama", "Thriller"],
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg",
    language: ["English"],
    ratings: 4.4,
  },
];

const useState = function (initialState) {
  let _state;
  _state = initialState;

  function _setState(givenState) {
    _state = givenState;
  }
  function _getState() {
    return _state;
  }

  return [_getState, _setState];
};

let [movies, setMovies] = useState(MOVIES);
let [SelectedOption, setSelectedOption] = useState("noFilter");

const movieList = document.getElementById("movieList");
const selects = {
  genres: document.getElementById("Genre"),
  dates: document.getElementById("Date"),
  ratings: document.getElementById("Rating"),
  languages: document.getElementById("Language"),
};

function initSelection() {
  // genreSelect.selectedIndex = 1;
  // genreSelect.selectedIndex = 1;
  const Selects = {
    dates: [...MOVIES.map((movie) => movie.releasedYear)],
    ratings: [...MOVIES.map((movie) => movie.ratings)],
    genres: [...new Set(MOVIES.map((movie) => movie.genre).flat())],
    languages: [...new Set(MOVIES.map((movie) => movie.language).flat())],
  };
  for (const key in selects) {
    if (Object.hasOwnProperty.call(selects, key)) {
      const selectValue = selects[key];
      selectValue.innerHTML = `<option value="noFilter">Apply Filter</option>`;
      for (let option of Selects[key]) {
        selectValue.innerHTML += `<option value=${option}>${option}</option>`;
      }
    }
  }
}

function renderMovies(givenMovies) {
  movieList.innerHTML = "";
  for (let movie of givenMovies) {
    movieList.innerHTML += `<li class="movieItem" >
    <img src=${movie.image}  alt="" srcset="" />
    <div>
      <strong>${movie.title}</strong>
      <p>${movie.description}</p>
       
      <p>Movie Genres: ${movie.genre.join(", ")}</p>
      <p>Total Ratings: ${movie.ratings}</p>
      <p>Released Year: ${movie.releasedYear}</p>
      <p>Released Year: ${movie.language.join(", ")}</p>
    </div>
    </li>`;
  }
}
function handleChange(selectedOption, filterType) {
  setSelectedOption(selectedOption);
  const myMovies = [...movies()];
  let filteredMovies = myMovies;
  renderMovies(filteredMovies);
  if (selectedOption === "noFilter") return;

  if (filterType === "genres") {
    filteredMovies = myMovies.filter((movie) =>
      movie.genre.includes(selectedOption)
    );

    console.log(selectedOption, filterType);
  } else if (filterType === "releasedDates") {
    filteredMovies = myMovies.filter(
      (movie) => movie.releasedYear === selectedOption
    );
  } else if (filterType === "ratings") {
    filteredMovies = myMovies.filter(
      (movie) => movie.ratings === Number(selectedOption)
    );
    // console.log(filteredMovies, myMovies[0].ratings)
    console.log(selectedOption, filterType);
  } else if (filterType === "languages") {
    filteredMovies = myMovies.filter((movie) =>
      movie.language.includes(selectedOption)
    );
    console.log(selectedOption, filterType);
  }
  renderMovies(filteredMovies);
  // setMovies()
}

initSelection();
setMovies([...movies()]);
renderMovies(movies());
