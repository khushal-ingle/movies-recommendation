import "./styles.css";
import React from "react";

import { useState } from "react";

const moviesDB = {
  Horror: [
    {
      name: "Saw",
      rating: "4.5/5"
    },
    {
      name: "The ring",
      rating: "4/5"
    },
    {
      name: "The evil dead",
      rating: "3.5/5"
    },
    {
      name: "Wrong turn",
      rating: "3.5/5"
    },
    {
      name: "Insidious",
      rating: "3.5/5"
    }
  ],

  Comedy: [
    {
      name: " The Hangover",
      rating: "5/5"
    },
    {
      name: " The bounty hunter",
      rating: "4.5/5"
    },
    {
      name: "Mr. bean’s holiday",
      rating: "4/5"
    },
    {
      name: "Ted",
      rating: "4/5"
    },
    {
      name: "Rush hour",
      rating: "4/5"
    }
  ],
  Thriller: [
    {
      name: "300",
      rating: "3.5/5"
    },
    {
      name: "Batman begins",
      rating: "4.5/5"
    },
    {
      name: "The lord of the ring",
      rating: "5/5"
    },
    {
      name: "The fast and furious",
      rating: "5/5"
    },
    {
      name: "Iron man",
      rating: "5/5"
    }
  ],
  Adventure: [
    {
      name: "jumanji",
      rating: "3.5/5"
    },
    {
      name: "Jungle Cruise",
      rating: "4.5/5"
    },
    {
      name: "Pirates of the Caribbean",
      rating: "5/5"
    },
    {
      name: "The mummy",
      rating: "5/5"
    },
    {
      name: "National treasure",
      rating: "5/5"
    }
  ],
  Science_fiction: [
    {
      name: "Inception",
      rating: "3.5/5"
    },
    {
      name: "Avatar",
      rating: "4.5/5"
    },
    {
      name: "Avengers",
      rating: "5/5"
    },
    {
      name: "Planet of the apes",
      rating: "5/5"
    },
    {
      name: "Star Wars",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Horror");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Movies Recommendation </h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        Here Is Some Best Of Best Movies To Watch According To Your Preferences.{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              color: "#3A3B3C",
              background: "transparent",
              fontSize: "18px",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.6rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedGenre].map((movies) => (
            <li
              key={movies.name}
              style={{
                listStyle: "none",
                padding: "0.4rem",
                borderBottom: "4px solid #000",
                width: "20%",
                margin: "1rem auto"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", padding: "0.4rem" }}>
                {" "}
                {movies.name}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}>⭐ {movies.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
