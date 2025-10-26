function showResult() {
  const input = document.getElementById("names").value.trim();
  const names = input.split("\n").map(n => n.trim()).filter(n => n);

  // 🔒 Secret predefined order
  const chosenOrder = [
    "ANJU PATHROSE ONE",
    "FATHIMA KP",
    "AKHILA AND CHINDU SPLIT",
    "ANCY ANTONY",
    "CHINDUMOLE",
    "FAHAD KP",
    "FEBY KOSHY ONE",
    "AKHILA SARATH",
    "NISHA PULIVELICHIRA",
    "JOMON",
    "ISHARA",
    "SARATH",
    "ANJU PATHROSE TWO",
    "FEBY KOSHY TWO",
    "BENCY"
  ];

  const ordered = chosenOrder.filter(name => names.includes(name));

  const resultEl = document.getElementById("result");
  resultEl.innerHTML = "";

  // 🎲 Fake shuffle animation
  let shuffleCount = 0;
  const shuffleInterval = setInterval(() => {
    resultEl.innerHTML = "";
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    shuffled.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      li.style.opacity = "1";
      resultEl.appendChild(li);
    });
    shuffleCount++;

    // After ~3 seconds, show the secret order
    if (shuffleCount > 15) {
      clearInterval(shuffleInterval);
      displayFinalResult(ordered);
    }
  }, 200);
}

function displayFinalResult(ordered) {
  const resultEl = document.getElementById("result");
  resultEl.innerHTML = "";

  ordered.forEach((name, index) => {
    const li = document.createElement("li");
    li.textContent = name;
    li.style.opacity = "0";
    resultEl.appendChild(li);

    // ✨ Reveal one by one
    setTimeout(() => {
      li.style.opacity = "1";
    }, index * 300);
  });
}

