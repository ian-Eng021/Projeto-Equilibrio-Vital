
// ========= Comum: menu mobile, ano no rodapé =========
document.addEventListener("DOMContentLoaded", () => {

  // Ano automático
  const ano = document.getElementById("ano");

  if (ano) {
    ano.textContent = new Date().getFullYear();
  }


  // Menu mobile
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {

    toggle.addEventListener("click", () => {

      const aberto = menu.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        aberto
      );

      toggle.textContent =
        aberto ? "✕" : "☰";

    });


    menu.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        menu.classList.remove("open");

        toggle.setAttribute(
          "aria-expanded",
          "false"
        );

        toggle.textContent = "☰";

      });

    });

  }


  // Formulário
  const form =
    document.getElementById("formContato");

  if (form) {

    form.addEventListener("submit", (e) => {

      e.preventDefault();

      const feedback =
        document.getElementById("feedback");

      const nome =
        document.getElementById("nome")
        ?.value.trim();

      const email =
        document.getElementById("email")
        ?.value.trim();

      const mensagem =
        document.getElementById("mensagem")
        ?.value.trim();


      // CORRIGIDO
      const emailOk =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email || "");


      if (!nome || !emailOk || !mensagem) {

        feedback.style.display = "block";

        feedback.classList.add("erro");

        feedback.textContent =
          "Por favor, preencha todos os campos corretamente.";

        return;
      }


      feedback.style.display = "block";

      feedback.classList.remove("erro");

      feedback.textContent =
        `Obrigado, ${nome}! Recebemos sua mensagem e retornaremos em breve.`;

      form.reset();

    });

  }

});
