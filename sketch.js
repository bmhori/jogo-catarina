var cestaImg, fundoImg, lanranjaImg, melanciaImg, morangoImg, pessegoImg, peraImg; 
var cesta, fundo, lanranja, melancia, morango, pessego, pera;

function preload(){
    cestaImg =loadImage("cestinha.png")
    fundoImg= loadImage("fundo.png")
   lanranja= loadImage("lanranja.png")
   melanciaImg= loadImage("melancia.png")
   morangoImg= loadImage("morango.jpg")
   pessegoImg= loadImage("pessego.png")
   peraImg= loadImage("pera.png")
   


}

function setup(){
    createCanvas(1200,1200);
    cesta= createSprite(300,300,10,10);
    cesta.addImage(cestaImg)
    cesta.scale = 0.2
    fundo= createSprite(10,10,10,10)


}

function draw(){
    background(fundoImg);
    drawSprites();
}