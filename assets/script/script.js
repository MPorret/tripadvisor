document.addEventListener("DOMContentLoaded", () => {
  // Ouvrir et fermer la modal
  document.querySelector("#contact").addEventListener("click", (e) => {
    document.querySelector("#modal").classList.remove("hidden");
  });

  document.querySelector("#modal span").addEventListener("click", (e) => {
    document.querySelector("#modal").classList.add("hidden");
  });

  document.querySelector("form button").addEventListener("click", async (e) => {
    e.preventDefault();

    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };
    console.log(data);

    const response = await axios.post(
      "https://site--tripadvisor-server--hxhcg25qdky2.code.run/form",
      data
    );

    console.log(response);
    document.querySelector("#modal").classList.add("hidden");
  });
});
