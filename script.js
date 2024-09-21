function calculateRewards() {
    // Obtener los valores ingresados
    let missions = parseInt(document.getElementById('missions').value);
    let enemies = parseInt(document.getElementById('enemies').value);
    let rewardType = document.getElementById('rewardType').value;

    // Variables de recompensas por misión y enemigo
    let rewardPerMission = { gold: 100, gems: 5, xp: 500 };
    let rewardPerEnemy = { gold: 10, gems: 1, xp: 100 };

    // Calcular la recompensa total
    let totalRewards = (missions * rewardPerMission[rewardType]) + (enemies * rewardPerEnemy[rewardType]);

    // Mostrar el resultado
    document.getElementById('result').innerText = `Total de ${rewardType === 'gold' ? 'monedas de oro' : rewardType === 'gems' ? 'gemas' : 'puntos de experiencia'}: ${totalRewards}`;
}
