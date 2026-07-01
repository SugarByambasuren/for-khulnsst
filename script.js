// Change these names
const CONFIG = {
    fromName: "Sugar",
    byName: "Sugar",
    toName: "khulnsst"
  };

  // Fill names
  document.getElementById("fromName").textContent = CONFIG.fromName;
  document.getElementById("byName").textContent = CONFIG.byName;
  document.getElementById("toName").textContent = CONFIG.toName;
  document.getElementById("toNameAsk").textContent = CONFIG.toName;
  
  // Letters filter
  const chips = document.querySelectorAll(".chip");
  const cards = document.querySelectorAll(".card");
  
  function setActive(btn){
    chips.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
  }
  
  chips.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      setActive(btn);
  
      cards.forEach(card => {
        const tags = (card.dataset.tags || "").split(" ");
        const show = (filter === "all") || tags.includes(filter);
        card.style.display = show ? "flex" : "none";
      });
    });
  });

  // Ask her out
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const askReply = document.getElementById("askReply");
  const askSection = document.querySelector(".ask");

  let dodges = 0;
  function dodgeNoButton(){
    dodges++;
    const maxX = askSection.clientWidth - noBtn.offsetWidth - 20;
    const maxY = 160;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    yesBtn.style.transform = `scale(${1 + dodges * 0.08})`;
  }

  if (noBtn){
    noBtn.addEventListener("mouseenter", dodgeNoButton);
    noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      dodgeNoButton();
    });
    noBtn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      dodgeNoButton();
    });
  }

  if (yesBtn){
    yesBtn.addEventListener("click", () => {
      askReply.textContent = `Awesome! Let's make it happen. Pick a day, and let me know! ☕✨`;
      if (noBtn) noBtn.style.display = "none";
      yesBtn.style.transform = "scale(1.1)";
    });
  }