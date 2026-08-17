    const typedTextSpan = document.getElementById("typed-text");
    const cursorSpan = document.querySelector(".cursor");

    // BAZA HASEŁ NA MAIN BANER, (DAJ BR GDY PRZECIĘCIE)
    const textArray = [
      "Korzystne ceny<br>hostingu",
      "Wydajne serwery<br>Minecraft",
      "Pewne wsparcie<br>techniczne",
      "Elastyczność pod<br>potrzeby klienta"
    ];

    const typingDelay = 80;
    const erasingDelay = 40;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      const currentText = textArray[textArrayIndex];

      if (charIndex < currentText.length) {
        cursorSpan.style.animation = 'none';

        if (currentText.substring(charIndex, charIndex + 4) === "<br>") {
          typedTextSpan.innerHTML += "<br>";
          charIndex += 4;
        } else {
          typedTextSpan.innerHTML += currentText.charAt(charIndex);
          charIndex++;
        }

        setTimeout(type, typingDelay);
      } else {
        cursorSpan.style.animation = 'blink 1s infinite';
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      const currentText = textArray[textArrayIndex];

      if (charIndex > 0) {
        cursorSpan.style.animation = 'none';

        if (currentText.substring(charIndex - 4, charIndex) === "<br>") {
          typedTextSpan.innerHTML = currentText.substring(0, charIndex - 4);
          charIndex -= 4;
        } else {
          typedTextSpan.innerHTML = currentText.substring(0, charIndex - 1);
          charIndex--;
        }

        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.style.animation = 'blink 1s infinite';
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 400);
      }
    }

    document.addEventListener("DOMContentLoaded", function() {
      if (textArray.length) setTimeout(type, 500);
    });