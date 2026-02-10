const workerURL = "https://echosparkgames.ardaddseddse.workers.dev";

document.getElementById("logBtn").addEventListener("click", async () => {
  try {
    const response = await fetch(workerURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Website test log",
        level: "info"
      })
    });

    const text = await response.text();
    alert("Log gönderildi: " + text);
  } catch (err) {
    alert("Hata oluştu.");
  }
});
