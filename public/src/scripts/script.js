let navDocs = document.querySelector(".nav-docs");
const nav = {
    navDocsOpen() {
        navDocs.style.display = "flex";
        navDocs.style.justifyContent = "space-around";
        navDocs.style.alignItems = "center";
        navDocs.style.transition = "0.8s";
    },
    navDocsClose() {
        navDocs.style.display = "none";
        navDocs.style.transition = "0.8s";
    }
}