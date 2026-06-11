console.log("Agro Sustentável carregado com sucesso!");

window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
                const posicao = card.getBoundingClientRect().top;

                        if(posicao < window.innerHeight - 100){
                                    card.style.opacity = "1";
                                                card.style.transform = "translateY(0)";
                                                        }
                                                            });
                                                            });