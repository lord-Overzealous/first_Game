
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Update is called once per frame
var character = {
    x: 60,
    y: 60

}

var food = {
    x: 70,
    y: 60
}

var score = 0;

function characterMove(){
    if(btn.right) character.x += 1;
    if(btn.left) character.x -= 1;
    if(btn.up) character.y -= 1;
    if (btn.down) character.y += 1;

}

function foodMove(){
    if((character.x == food.x) && (character.y == food.y)){
        food.x = random(100);
        food.y = random(100);

        score += 1;
    }

}

var backgound = getMap("map");
paper(7);

exports.update = function () {
    characterMove()
    cls();
    draw(backgound, 0, 0);

    sprite(169, food.x, food.y);
    sprite(153, character.x, character.y);

    foodMove()

    println("character position: " + [character.x, character.y]);
    println("food position: " + [food.x, food.y]);
    
    println("you'r score is: " + score);
    
};
