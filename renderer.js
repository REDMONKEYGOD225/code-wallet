window.onload = async function() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block'; // Afficher le loader

  try {
    const fragments = await window.wallet.getFragments();

    loader.style.display = 'none'; // Masquer le loader après avoir reçu les données

    if (fragments.length > 0) {
      window.location.href = 'src/pages/fragment.html';
    } else {
      alert("Aucun fragment trouvé.");
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des fragments:', error);
    loader.style.display = 'none'; // Masquer le loader en cas d'erreur
    alert("Erreur lors de la récupération des fragments.");
  }
};