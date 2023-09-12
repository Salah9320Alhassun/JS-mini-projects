// Skapa en funktion för att utföra beräkningar
function calculate() {
    // Hämta operatorn från användarinput
    const operator = document.getElementById("operatorInput").value;
  
    // Hämta tal 1 och tal 2 från användarinput
    const num1 = parseFloat(prompt("Ange tal 1:"));
    const num2 = parseFloat(prompt("Ange tal 2:"));
    let resultat;
  
    // Utför beräkning baserat på operatorn
    switch (operator) {
      case '+':
        resultat = num1 + num2;
        break;
      case '-':
        resultat = num1 - num2;
        break;
      case '*':
        resultat = num1 * num2;
        break;
      case '/':
        resultat = num2 !== 0 ? num1 / num2 : "Det går inte att dela med noll!";
        break;
      default:
        resultat = "Ogiltig operator";
    }
  
    // Visa resultatet i en alert
    alert("Resultat: " + resultat);
  }
  