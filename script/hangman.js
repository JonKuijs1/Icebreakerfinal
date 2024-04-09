    let secretWord = '';
    let displayedWord = [];
    let guessedLetters = [];
    let mistakes = 0;
    const maxMistakes = 6;  




    function submitWord() {
        secretWord = document.getElementById('wordToGuess').value.toUpperCase();
        document.getElementById('wordToGuess').value = ''; 
        document.getElementById('wordSubmissionSection').style.display = 'none';
        document.getElementById('gameSection').style.display = 'block';
        displayedWord = Array(secretWord.length).fill('_');
        updateWordDisplay();
        
     
        updateHangmanImage();
    }


    function submitLetter() {
        const letter = document.getElementById('letterInput').value.toUpperCase();
        document.getElementById('letterInput').value = ''; 
        
        
        if (guessedLetters.includes(letter) || letter === '') {
            
            return; 
        }
        
        
        guessedLetters.push(letter);
        
        if (secretWord.includes(letter)) {
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === letter) {
                    displayedWord[i] = letter;
                }
            }
            updateWordDisplay();
        } else {
            
            mistakes++;
            updateHangmanImage();
        }
        updateGuessedLetters();
        checkGameStatus();
    }

    function updateWordDisplay() {
        document.getElementById('wordDisplay').textContent = displayedWord.join(' ');
    }

    function updateGuessedLetters() {
        document.getElementById('lettersGuessed').textContent = `Guessed Letters: ${guessedLetters.join(', ')}`;
    }

    function updateHangmanImage() {
       // easter egg part if the word is icecube it will load the special hangman images
        if (secretWord === 'ICECUBE') {
            document.getElementById('hangmanProgressImg').src = `images/hangmanspecial${mistakes}.svg`;
        } else {
        
            document.getElementById('hangmanProgressImg').src = `images/hangman${mistakes}.svg`;
        }
    }




    function checkGameStatus() {
        if (mistakes >= maxMistakes) {
            document.getElementById('gameStatus').innerHTML = `Game Over! The word was: <strong>${secretWord}</strong>`;
            document.getElementById('letterInput').disabled = true;
        } else if (!displayedWord.includes('_')) {
            document.getElementById('gameStatus').innerHTML = `<strong>Congratulations!</strong> You guessed the word: <strong>${secretWord}</strong>`;
            document.getElementById('letterInput').disabled = true;
        }
    }


    function checkGameStatus() {
        if (mistakes >= maxMistakes) {
            document.getElementById('gameStatus').innerHTML = `Game Over! The word was: <strong>${secretWord}</strong>`;
            document.getElementById('letterInput').disabled = true;
        } else if (!displayedWord.includes('_')) {
            document.getElementById('gameStatus').innerHTML = `<strong>Congratulations!</strong> You guessed the word: <strong>${secretWord}</strong>`;
            document.getElementById('letterInput').disabled = true;
        }
        if (mistakes >= maxMistakes || !displayedWord.includes('_')) {
            document.getElementById('restartButton').style.display = 'block'; // Show the restart button
        }
    }

    function resetGame() {
        secretWord = 'ICECUBE';
        displayedWord = [];
        guessedLetters = [];
        mistakes = 0;
        
        document.getElementById('gameStatus').innerHTML = '';
        document.getElementById('lettersGuessed').textContent = '';
        
       
        document.getElementById('hangmanProgressImg').src = 'images/hangman0.svg';
        
        document.getElementById('letterInput').disabled = false;
        document.getElementById('restartButton').style.display = 'none';
        document.getElementById('wordSubmissionSection').style.display = 'block';
        document.getElementById('gameSection').style.display = 'none';
    }

  
    // floating script and make sure the 6th image gets excluded
    document.addEventListener('DOMContentLoaded', function() {
        const excludeImageNames = ['images/hangman6.svg', 'images/hangmanspecial6.svg'];
        const svgImages = document.querySelectorAll('.animate-svg');
    
        let speed = 2000; 
        const maxHeight = 30; 
    
        
        function updateSpeed(newSpeed) {
        svgImages.forEach(svgImage => {
            let shouldExclude = excludeImageNames.some(excludeImageName => svgImage.src.includes(excludeImageName));
            if (!shouldExclude) { 
            svgImage.style.transitionDuration = `${newSpeed}ms`;
            }
        });
        speed = newSpeed;
        }
    
        
        function moveSVG() {
        svgImages.forEach(svgImage => {
            let shouldExclude = excludeImageNames.some(excludeImageName => svgImage.src.includes(excludeImageName));
            if (!shouldExclude) { 
            const deltaX = Math.random() * 30 - 10; 
            const deltaY = Math.min(Math.max(Math.random() * 30 - 10, -maxHeight), maxHeight); // Ensure deltaY doesn't exceed maxHeight
            svgImage.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            }
        });
        }
    
        
        updateSpeed(speed);
    
        setInterval(moveSVG, speed);
    });

    