const button = document.getElementById("loadDog");

async function loadDog() {
    console.log("🐾 Cererea către server a început...");

    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        console.log("📡 Răspuns primit!");

        const data = await response.json();
        console.log("📦 Date procesate:", data);

        const imageUrl = data.message;
        document.getElementById("dogImage").src = imageUrl;

        const parts = imageUrl.split("/");
        const breedPart = parts[parts.indexOf("breeds") + 1];
        const breedName = breedPart.replace("-", " ");

        document.getElementById("breed").textContent = breedName;
        document.getElementById("source").textContent = new URL(imageUrl).hostname;

    } catch (error) {
        console.error("💥 Eroare:", error);
        alert("❌ Nu am reușit să aduc un cățel. Încearcă din nou!");
    }
}

button.addEventListener("click", loadDog);
