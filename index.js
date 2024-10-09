function myFunction() {
  document.getElementById("loadingGif").style.display = "block";

  setTimeout(function () {
    document.getElementById("loadingGif").style.display = "none";

    let name = prompt("Hallo, wie heißt du?");

    while (name === "") {
      name = prompt("Hallo, wie heißt du?");
    }
    if (name === null) {
      window.history.go(-1);
      return;
    }
    const startTime = new Date();
    alert(
      name +
        ',Ich habe ein Zhal von 1 bis 100 erraten.Versuch sie mit möglichst wenigen Versuchen zu erraten. Nach jedem Versuch werde ich sagen : "zu viel", "zu wenig" oder "Sehr gut, du hast geratten. '
    );

    let number = Math.ceil(Math.random() * 100);
    let guess = prompt("Welche Zahl habe ich erraten?");
    let numberOfGuesses = 0;

    while (parseInt(guess) !== number) {
      if (guess === null) {
        return;
      }
      if (guess > number) {
        guess = prompt("Zu viel. Versuch nochmall!");
        numberOfGuesses = numberOfGuesses + 1;
      }
      if (guess < number) {
        guess = prompt("Zu wenig. Versuch nochmall!");
        numberOfGuesses = numberOfGuesses + 1;
      }
      // SHOW LOADING GIF EVERY TIMA A USER GUESS A NUMBER
      document.getElementById("loadingGif").style.display = "block";
      setTimeout(function () {
        document.getElementById("loadingGif").style.display = "none";
      }, 2000);
    }
    const EndTime = new Date();
    const elapsedTime = EndTime - startTime;
    prompt(
      "Sehr gut!" +
        name +
        "Du hast 1000 Euro gewonnen.Geben Sie hier Ihre Bankdaten ein. Gib deine Bankdaten ein, einschließlich IBAN UND CCV-Code. Vergiss auch nicht dein PIN-CodeE einzugeben, damit wir das Geld korrekt auf Ihr Konto überweisen können. Anzahl der Versuche:" +
        (numberOfGuesses + 1) +
        " \nZeit:" +
        elapsedTime / 1000 +
        "Sekunden"
    );
  }, 3000);
}
