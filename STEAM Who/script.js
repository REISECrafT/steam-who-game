const alberoDomande = {
    testo: "Il personaggio è donna?",
    rimasti: ["Mary Jackson", "Dorothy Vaughan", "Katherine Johnson", "Wangari Maathai", "Alice Ball", "Hedy Lamarr", "Rosalind Franklin", "Artemisia Gentileschi", "Marie Curie", "Ada Lovelace", "Jean-Michel Basquiat", "Benjamin Banneker", "Percy Julian", "George W. Carver", "David Blackwell", "Leonardo da Vinci", "Galileo Galilei", "Isaac Newton", "Alan Turing", "Albert Einstein"],
    si: {
        testo: "Ha la pelle scura (o origini africane/afroamericane)?",
        rimasti: ["Mary Jackson", "Dorothy Vaughan", "Katherine Johnson", "Wangari Maathai", "Alice Ball", "Hedy Lamarr", "Rosalind Franklin", "Artemisia Gentileschi", "Marie Curie", "Ada Lovelace"],
        si: {
            testo: "Ha lavorato per la NASA?",
            rimasti: ["Mary Jackson", "Dorothy Vaughan", "Katherine Johnson", "Wangari Maathai", "Alice Ball"],
            si: {
                testo: "Era un'ingegnera aeronautica?",
                rimasti: ["Mary Jackson", "Dorothy Vaughan", "Katherine Johnson"],
                si: { risultato: "Mary Jackson", img: "img/mary_jackson.jpg" },
                no: {
                    testo: "Era la manager a capo del dipartimento di calcolo?",
                    rimasti: ["Dorothy Vaughan", "Katherine Johnson"],
                    si: { risultato: "Dorothy Vaughan", img: "img/dorothy_vaughan.jpg" },
                    no: { risultato: "Katherine Johnson", img: "img/katherine_johnson.jpg" }
                }
            },
            no: {
                testo: "Ha vinto il Premio Nobel per la Pace?",
                rimasti: ["Wangari Maathai", "Alice Ball"],
                si: { risultato: "Wangari Maathai", img: "img/wangari_maathai.jpg" },
                no: { risultato: "Alice Ball", img: "img/alice_ball.jpg" }
            }
        },
        no: {
            testo: "È nata dopo il 1900 (nel XX secolo)?",
            rimasti: ["Hedy Lamarr", "Rosalind Franklin", "Artemisia Gentileschi", "Marie Curie", "Ada Lovelace"],
            si: {
                testo: "Era anche una famosa attrice di Hollywood?",
                rimasti: ["Hedy Lamarr", "Rosalind Franklin"],
                si: { risultato: "Hedy Lamarr", img: "img/hedy_lamarr.jpg" },
                no: { risultato: "Rosalind Franklin", img: "img/rosalind_franklin.jpg" }
            },
            no: {
                testo: "Era una famosa pittrice?",
                rimasti: ["Artemisia Gentileschi", "Marie Curie", "Ada Lovelace"],
                si: { risultato: "Artemisia Gentileschi", img: "img/artemisia_gentileschi.jpg" },
                no: {
                    testo: "Ha vinto un Premio Nobel?",
                    rimasti: ["Marie Curie", "Ada Lovelace"],
                    si: { risultato: "Marie Curie", img: "img/marie_curie.jpg" },
                    no: { risultato: "Ada Lovelace", img: "img/ada_lovelace.jpg" }
                }
            }
        }
    },
    no: {
        testo: "Ha la pelle scura (o origini afroamericane)?",
        rimasti: ["Jean-Michel Basquiat", "Benjamin Banneker", "Percy Julian", "George W. Carver", "David Blackwell", "Leonardo da Vinci", "Galileo Galilei", "Isaac Newton", "Alan Turing", "Albert Einstein"],
        si: {
            testo: "È un artista/pittore?",
            rimasti: ["Jean-Michel Basquiat", "Benjamin Banneker", "Percy Julian", "George W. Carver", "David Blackwell"],
            si: { risultato: "Jean-Michel Basquiat", img: "img/jean_michel_basquiat.jpg" },
            no: {
                testo: "È vissuto nel 1700 (XVIII secolo)?",
                rimasti: ["Benjamin Banneker", "Percy Julian", "George W. Carver", "David Blackwell"],
                si: { risultato: "Benjamin Banneker", img: "img/benjamin_banneker.jpg" },
                no: {
                    testo: "Si occupava di chimica?",
                    rimasti: ["Percy Julian", "George W. Carver", "David Blackwell"],
                    si: { risultato: "Percy Julian", img: "img/percy_julian.jpg" },
                    no: {
                        testo: "Era un botanico famoso per gli studi sulle arachidi?",
                        rimasti: ["George W. Carver", "David Blackwell"],
                        si: { risultato: "George W. Carver", img: "img/george_w_carver.jpg" },
                        no: { risultato: "David Blackwell", img: "img/david_blackwell.jpg" }
                    }
                }
            }
        },
        no: {
            testo: "È vissuto prima dell'anno 1800?",
            rimasti: ["Leonardo da Vinci", "Galileo Galilei", "Isaac Newton", "Alan Turing", "Albert Einstein"],
            si: {
                testo: "È famoso per opere d'arte come la Gioconda?",
                rimasti: ["Leonardo da Vinci", "Galileo Galilei", "Isaac Newton"],
                si: { risultato: "Leonardo da Vinci", img: "img/leonardo_da_vinci.jpg" },
                no: {
                    testo: "Era italiano?",
                    rimasti: ["Galileo Galilei", "Isaac Newton"],
                    si: { risultato: "Galileo Galilei", img: "img/galileo_galilei.jpg" },
                    no: { risultato: "Isaac Newton", img: "img/isaac_newton.jpg" }
                }
            },
            no: {
                testo: "Ha decifrato il codice Enigma?",
                rimasti: ["Alan Turing", "Albert Einstein"],
                si: { risultato: "Alan Turing", img: "img/alan_turing.jpg" },
                no: { risultato: "Albert Einstein", img: "img/albert_einstein.jpg" }
            }
        }
    }
};

let nodoAttuale = alberoDomande;

function startGame() {
    nodoAttuale = alberoDomande;
    document.getElementById("btn-start").classList.add("hidden");
    document.getElementById("btn-yes").classList.remove("hidden");
    document.getElementById("btn-no").classList.remove("hidden");
    document.getElementById("result-box").classList.add("hidden");
    document.getElementById("question-box").classList.remove("hidden");
    mostraDomanda();
}

function mostraDomanda() {
    if (nodoAttuale.risultato) {
        fineGioco(nodoAttuale.risultato, nodoAttuale.img);
    } else {
        document.getElementById("question-text").innerText = nodoAttuale.testo;
    }
    aggiornaTabella();
}

function handleResponse(risposta) {
    nodoAttuale = risposta ? nodoAttuale.si : nodoAttuale.no;
    mostraDomanda();
}

function fineGioco(nome, path) {
    document.getElementById("question-box").classList.add("hidden");
    document.getElementById("btn-yes").classList.add("hidden");
    document.getElementById("btn-no").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("winner-name").innerText = "Trovato! È " + nome;
    document.getElementById("winner-img").src = path;
    aggiornaTabella();
}

function aggiornaTabella() {
    let listaRimasti = nodoAttuale.risultato ? [nodoAttuale.risultato] : nodoAttuale.rimasti;
    let nomiHTML = document.getElementsByClassName("char-name");
    for (let i = 0; i < nomiHTML.length; i++) {
        let nome = nomiHTML[i].innerText;
        let cella = nomiHTML[i].parentElement;
        if (!listaRimasti.includes(nome)) {
            cella.classList.add("eliminated");
        } else {
            cella.classList.remove("eliminated");
        }
    }
}