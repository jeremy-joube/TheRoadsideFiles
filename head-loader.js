
fetch('./head.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Impossible de charger head.html');
    }
    
    return response.text();
})
.then(html => {
    document.head.insertAdjacentHTML('beforeend', html);
})
.catch(error => {
    console.error('Erreur de chargement du head :', error);
});
