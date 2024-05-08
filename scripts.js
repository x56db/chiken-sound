const apiKey = 'AIzaSyAiGTbm-CAAgRa0hapmdU0UlNJrcBTJxFU'; // Remplacez 'YOUR_API_KEY' par votre clé d'API YouTube

function searchYouTube() {
    const searchText = document.getElementById('searchInput').value;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchText)}&type=video&videoCategoryId=10&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const videoContainer = document.getElementById('videoContainer');
            videoContainer.innerHTML = ''; // Nettoyer les résultats précédents
            data.items.forEach(item => {
                const video = document.createElement('div');
                video.classList.add('video');
                video.innerHTML = `
                    <h3>${item.snippet.title}</h3>
                    <iframe width="280" height="158" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                `;
                videoContainer.appendChild(video);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
}

window.onload = function() {
    searchYouTube(); // Charger quelques vidéos par défaut au démarrage
}
