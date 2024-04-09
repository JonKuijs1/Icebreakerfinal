// Here we can add movies for difficulty levels
const movies = [
    //Easy
    { title: "Finding Nemo", emoji: "🔍🐠🐟", difficulty: "Easy" },
    { title: "The Lion King", emoji: "🦁👑🌅", difficulty: "Easy" },
    { title: "Toy Story", emoji: "🤠🚀🧸", difficulty: "Easy" },
    { title: "The Incredibles", emoji: "🦸‍♂️🦸‍♀️💥", difficulty: "Easy" },
    { title: "Aladdin", emoji: "🧞‍♂️🕌💫", difficulty: "Easy" },
    { title: "Moana", emoji: "🌊🚣‍♀️🌺", difficulty: "Easy" },
    { title: "Frozen", emoji: "❄️⛄️👑", difficulty: "Easy" },
      //Moderate 
    { title: "Harry Potter", emoji: "⚡🔮🧙‍♂️", difficulty: "Moderate" },
    { title: "Jurassic Park", emoji: "🦕🦖🌿", difficulty: "Moderate" },
    { title: "Back to the Future", emoji: "⏰🔙🚗", difficulty: "Moderate" },
    { title: "Pirates of the Caribbean", emoji: "☠️🏴‍☠️⚓️", difficulty: "Moderate" },
    { title: "The Matrix", emoji: "🕶️💊💻", difficulty: "Moderate" },
    { title: "Inception", emoji: "🌀🛌🏻💭", difficulty: "Moderate" },
    { title: "The Terminator", emoji: "🤖🔫💥", difficulty: "Moderate" },
      //Hard
    { title: "The Lord of the Rings", emoji: "🧝‍♂️💍🌋", difficulty: "Hard" },
    { title: "Walking Dead", emoji: "🧟🪖‍🔫", difficulty: "Hard" },
    { title: "Fight Club", emoji: "👊💥🛁", difficulty: "Hard" },
    { title: "The Shawshank Redemption", emoji: "🔨🔓🌅", difficulty: "Hard" },
    { title: "Forrest Gump", emoji: "🏃🍫🎈", difficulty: "Hard" },
    { title: "The Godfather", emoji: "👨‍👧‍👦🍊🔫", difficulty: "Hard" },
    { title: "The Silence of the Lambs", emoji: "🔪🐑👩", difficulty: "Hard" },
  ];
  
  let currentMovie;
  

  function filterMoviesByDifficulty(difficulty) {
    return movies.filter(movie => movie.difficulty === difficulty);
  }
  

  const easyMovies = filterMoviesByDifficulty("Easy");
  const moderateMovies = filterMoviesByDifficulty("Moderate");
  const hardMovies = filterMoviesByDifficulty("Hard");
  
  function chooseRandomMovie(difficulty) {
    const filteredMovies = movies.filter(movie => movie.difficulty === difficulty);
    return filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
  }
  
  function displayMovieEmojis() {
    document.getElementById("emojiDisplay").innerText = currentMovie.emoji;
  }
  
  function checkGuess() {
    const guess = document.getElementById("guessInput").value.toLowerCase();
    if (guess === currentMovie.title.toLowerCase()) {
      document.getElementById("result").innerText = "Correct! 🎉";
    } else {
      document.getElementById("result").innerText = "Incorrect! Try again.";
    }
  }
  
  function newMovie() {
    const selectedDifficulty = document.getElementById("levelSelect").value;
    currentMovie = chooseRandomMovie(selectedDifficulty);
    displayMovieEmojis();
    document.getElementById("guessInput").value = "";
    document.getElementById("result").innerText = "";
  }
  
  window.onload = newMovie;


  document.getElementById('difficulty').addEventListener('change', function () {
    this.style.color = this.options[this.selectedIndex].getAttribute('data-color');
  });
  
  window.onload = function() {
    var selectElement = document.getElementById('difficulty');
    selectElement.style.color = selectElement.options[selectElement.selectedIndex].getAttribute('data-color');
  };
  