// Generera ett slumpmässigt nummer mellan 1 och 100 vid spelets start
let randomNumber = generateRandomNumber();
// Räkna antalet gissningar som användaren har gjort
let guessCount = 0;
// Sätt det maximala antalet gissningar till 10
const maxGuesses = 10;

// Lyssna efter klick på "Gissa"-knappen och anropa funktionen checkGuess när den klickas
document.getElementById('guessButton').addEventListener('click', checkGuess);
// Lyssna efter tangenttryckningar i gissningsfältet och anropa checkGuess om användaren trycker på Enter
document.getElementById('guessInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

// Lyssna efter klick på "Börja om"-knappen och anropa resetGame när den klickas
document.getElementById('resetButton').addEventListener('click', resetGame);

// Funktion för att generera ett slumpmässigt nummer mellan 1 och 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Funktion för att hantera när användaren gör en gissning
function checkGuess() {
    // Hämta användarens gissning från input-fältet och konvertera den till ett heltal
    const guess = parseInt(document.getElementById('guessInput').value);
    // Öka räknaren för antalet gissningar
    guessCount++;

    // Jämför användarens gissning med det slumpmässiga numret
    if (guess === randomNumber) {
        // Avsluta spelet och visa ett meddelande om användaren gissade rätt
        endGame(true);
    } else if (guess < randomNumber) {
        // Visa ett meddelande om gissningen är för låg
        setMessage('Gissningen är för låg. Försök igen.');
    } else {
        // Visa ett meddelande om gissningen är för hög
        setMessage('Gissningen är för hög. Försök igen.');
    }

    // Om användaren har gjort maximalt antal gissningar (10), avsluta spelet som förlust
    if (guessCount >= maxGuesses) {
        endGame(false);
    }

    // Uppdatera visningen av antalet gissningar som återstår
    document.getElementById('guessCount').textContent = maxGuesses - guessCount;
    // Töm input-fältet
    document.getElementById('guessInput').value = '';
}

// Funktion för att sätta ett meddelande i spelet
function setMessage(message) {
    document.getElementById('message').textContent = message;
}

// Funktion för att avsluta spelet (antingen som vinst eller förlust)
function endGame(win) {
    if (win) {
        // Visa ett meddelande om användaren vann och hur många gissningar som krävdes
        setMessage(`Grattis! Du gissade rätt på ${guessCount} försök. 🏆`);
    } else {
        // Visa ett meddelande om förlust och en pistol-emoji för humoristisk effekt
        setMessage('Spelet är slut. Du har förlorat. 🔫 Haha, du har förlorat!');
    }

    // Inaktivera gissningsfältet och "Gissa"-knappen för att förhindra ytterligare gissningar
    document.getElementById('guessInput').disabled = true;
    document.getElementById('guessButton').disabled = true;
}

// Funktion för att återställa spelet till ursprungliga inställningar och starta om
function resetGame() {
    // Generera ett nytt slumpmässigt nummer
    randomNumber = generateRandomNumber();
    // Återställ antalet gissningar
    guessCount = 0;
    // Rensa meddelandet
    setMessage('');
    // Återställ antalet gissningar som återstår till max (10)
    document.getElementById('guessCount').textContent = maxGuesses;
    // Rensa gissningsfältet
    document.getElementById('guessInput').value = '';
    // Aktivera gissningsfältet och "Gissa"-knappen för att möjliggöra ett nytt spel
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessButton').disabled = false;
    // Fokusera på gissningsfältet för användarens bekvämlighet
    document.getElementById('guessInput').focus();
}
