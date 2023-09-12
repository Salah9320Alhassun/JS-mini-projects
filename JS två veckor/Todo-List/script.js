// Vänta tills dokumentet har laddats innan JavaScript-koden körs
document.addEventListener("DOMContentLoaded", function () {
    // Hämta referenser till HTML-element vi behöver använda
    const taskInput = document.getElementById("taskInput"); // Referens till textfältet där användaren skriver in uppgifter
    const addTaskButton = document.getElementById("addTask"); // Referens till "Lägg till"-knappen
    const taskList = document.getElementById("taskList"); // Referens till listan där uppgifterna visas

    // Lägg till en klick-händelse till "Lägg till"-knappen
    addTaskButton.addEventListener("click", function () {
        // Hämta texten som användaren skrivit in i textfältet och ta bort eventuell överflödig whitespace i början och slutet
        const taskText = taskInput.value.trim();

        // Kontrollera om textfältet är tomt
        if (taskText !== "") {
            // Skapa ett nytt listelement (li) för uppgiften
            const listItem = document.createElement("li");
            
            // Sätt texten i listelementet till den uppgiftstext som användaren skrev in
            listItem.textContent = taskText + " ";

            // Skapa en "Delete"-knapp för att ta bort uppgiften
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Ta bort";
            deleteButton.classList.add("delete-button"); // Lägg till en CSS-klass för stil

            // Lägg till en klick-händelse till "Delete"-knappen
            deleteButton.addEventListener("click", function () {
                // Ta bort listelementet (uppgiften) när "Delete"-knappen klickas på
                taskList.removeChild(listItem);
            });

            // Lägg till "Delete"-knappen som ett barn till listelementet (uppgiften)
            listItem.appendChild(deleteButton);

            // Lägg till listelementet (uppgiften) i listan
            taskList.appendChild(listItem);

            // Rensa textfältet så att användaren kan skriva in en ny uppgift
            taskInput.value = "";
        }
    });
});
