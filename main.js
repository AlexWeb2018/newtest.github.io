var canvasWidth = 600;//window.innerWidth;
var canvasHeight = 500;//window.innerHeight;
var canvasWidth = 600;//window.innerWidth;
var canvasHeight = 500;//window.innerHeight;
var direction = '';
 
var stage = new Konva.Stage({
    container: 'container',
    width: canvasWidth,
    height: canvasHeight
});
 
var layer = new Konva.Layer();




/* анимация каждого кадра игрока прописана в координатах
по принципу x, y, width, height
*/
var animationsPlayer = {

	walkRight: [
    2, 131, 48, 49,
    58, 131, 48, 49,
    114, 131, 48, 49,
    170, 131, 48, 49,
    226, 131, 48, 49,
    282, 131, 48, 49,
    338, 131, 48, 49,
    394, 131, 48, 49,
    450, 131, 48, 49,
    506, 131, 48, 49,
    562, 131, 48, 49,
    618, 131, 48, 49,
    674, 131, 48, 49,
    730, 131, 48, 49,
    786, 131, 48, 49,
    842, 131, 48, 49,
    898, 131, 48, 49,
    954, 131, 48, 49
  ],
  walkLeft: [
    2, 191, 48, 49,
    58, 191, 48, 49,
    114, 191, 48, 49,
    170, 191, 48, 49,
    226, 191, 48, 49,
    282, 191, 48, 49,
    338, 191, 48, 49,
    394, 191, 48, 49,
    450, 191, 48, 49,
    506, 191, 48, 49,
    562, 191, 48, 49,
    618, 191, 48, 49,
    674, 191, 48, 49,
    730, 191, 48, 49,
    786, 191, 48, 49,
    842, 191, 48, 49,
    898, 191, 48, 49,
    954, 191, 48, 49
  ],



  idleRight: [ // игрок стоит и смотрит вправо
    2, 10, 48, 49,
    52, 10, 48, 49,
    102, 10, 48, 49,
    152, 10, 48, 49,
    202, 10, 48, 49,
    252, 10, 48, 49,
    302, 10, 48, 49,
    352, 10, 48, 49
  ],

  idleLeft: [
    2, 72, 48, 49,
    52, 72, 48, 49,
    102, 72, 48, 49,
    152, 72, 48, 49,
    202, 72, 48, 49,
    252, 72, 48, 49,
    302, 72, 48, 49,
    352, 72, 48, 49
  ]
};
 
var playerImg = new Image();
playerImg.src = 'img/wizard.png';
 
// задаем параметры изображения спрайта игрока
var player = new Konva.Sprite({
    x: 200, // положение
    y: 150,
    image: playerImg,
    animation: 'idleRight',
    animations: animationsPlayer, // изображение со всеми анимациями
    frameRate: 7, // скорость смены кадров
    frameIndex: 0 // начальный кадр
});
 
// добавляем спрайт игрока на игровой слой
layer.add(player);
 
// добавляем слой на стейдж
stage.add(layer);
 
// запускаем анимацию игрока
player.start();







// бесконечный цикл игры
var gameLoop = new Konva.Animation(function(frame) {
    handleInput();
}, layer);
gameLoop.start();
 
// отлавливание событий нажатия на "игровые" клавиши
function handleInput() {
 
    player.attrs.animation = 'idleRight'; // движение по умолчанию
    if (direction == 'left' || direction == 'down') {
        player.attrs.animation = 'idleLeft';
    }
 
    if(input.isDown('DOWN') || input.isDown('s')) {
        player.attrs.animation = 'walkRight';
        player.setY(player.attrs.y + 1);
        direction = 'down';
    }
 
    if(input.isDown('UP') || input.isDown('w')) {
        player.attrs.animation = 'walkLeft';
        player.setY(player.attrs.y - 1);
        direction = 'up';
    }
 
    if(input.isDown('LEFT') || input.isDown('a')) {
        player.attrs.animation = 'walkLeft';
        player.setX(player.attrs.x - 1);
        direction = 'left';
    }
 
    if(input.isDown('RIGHT') || input.isDown('d')) {
        player.attrs.animation = 'walkRight';
        player.setX(player.attrs.x + 1);
        direction = 'right';
    }
 
}