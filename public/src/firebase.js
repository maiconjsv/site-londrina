
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCIjEKrjRLlzxMDEs6kyguaWfIhAIO7OKs",
    authDomain: "londrina-o-que-fazer.firebaseapp.com",
    projectId: "londrina-o-que-fazer",
    storageBucket: "londrina-o-que-fazer.firebasestorage.app",
    messagingSenderId: "954487488195",
    appId: "1:954487488195:web:609a82d73ba8bd50202c76"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Função de envio
  document.getElementById("enviar").addEventListener("click", async () => {
    const sugestInput = document.getElementById("sugest");
    const meuEmailInput = document.getElementById("meuEmail");

    const email = meuEmailInput.value.trim();
    const sugest = sugestInput.value.trim();

    if (!email || !sugest) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    try {
      await addDoc(collection(db, "contribuicoes"), {
        contribuicao: sugest,
        email: email,
        timestamp: Date.now()
      });

      alert("Obrigado pela contribuição!");
      sugestInput.value = "";
      meuEmailInput.value = "";
    } catch (e) {
      console.error("Erro ao enviar:", e);
      alert("Ocorreu um erro ao enviar sua contribuição.");
    }
  });

