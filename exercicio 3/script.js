let cliquesA = 0;
let cliquesB = 0;
 
document.getElementById("botaoA").addEventListener("click", function () {
 
    cliquesA++;
 
    document.getElementById("cliquesA").textContent = cliquesA;
 
    atualizarResultado();
});
 
document.getElementById("botaoB").addEventListener("click", function () {
 
    cliquesB++;
 
    document.getElementById("cliquesB").textContent = cliquesB;
 
    atualizarResultado();
});
 
function atualizarResultado() {
 
    if (cliquesA > cliquesB) {
 
        document.getElementById("resultado").textContent =
            "A versão A recebeu mais cliques.";
 
    } else if (cliquesB > cliquesA) {
 
        document.getElementById("resultado").textContent =
            "A versão B recebeu mais cliques.";
 
    } else {
 
        document.getElementById("resultado").textContent =
            "As duas versões estão empatadas.";
 
    }
}
 