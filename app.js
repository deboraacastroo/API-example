document.getElementById("getAdviceBtn").addEventListener("click", function() {
    fetch("https://api.adviceslip.com/advice")
      .then(response => {
        if (!response.ok) {
          throw new Error('Não foi possível obter o conselho');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById("advice").textContent = data.slip.id + ": " + data.slip.advice;
      })
      .catch(error => {
        console.error('Erro durante a chamada à API:', error);
      });
  });
  