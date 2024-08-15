document.addEventListener('keydown', function(event) {
    let player = document.getElementById('player');
    if (event.code === 'Space') {
        jump();
    }

    function jump() {
        if (player.classList != 'jump') {
            player.classList.add('jump');
        }
        setTimeout(function() {
            player.classList.remove('jump');
        }, 300);
    }
});

let isAlive = setInterval(function() {
    let player = document.getElementById('player');
    let obstacle = document.getElementById('obstacle');

    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if (obstacleLeft < 100 && obstacleLeft > 0 && playerTop >= 130) {
        alert('¡Te la diste contra el obstáculo!');
    }
}, 10);
