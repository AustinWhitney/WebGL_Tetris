
var canvas;
var gl;
var myArr = new Array();
var keeptrack = new Array();
var pivotpoint = new Array();
var counter = 0;


// Three Vertices        
var vertices = [];  
var i = 0;  
var j = 0;

    for(i = 0;i < 10;i++){
        myArr[i] = new Array();
        for(j = 0;j < 20;j++){
            myArr[i][j] = [0,0,0,0];
        }
    }


for(i = 0;i < 4; i++){
    keeptrack[i] = [0,0];
}


window.onload = function init() {

    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height );


    gl.clearDepth( 0);
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW );    
    
    // Associate out shader variables with our data buffer
      var vPosition = gl.getAttribLocation( program, "vPosition" );
      gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0 );
      gl.enableVertexAttribArray( vPosition );    
      var fColor = gl.getAttribLocation( program, "fColor" );
      gl.vertexAttribPointer( fColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
      gl.enableVertexAttribArray( fColor );    
      render();

};

function rotate() {
    console.log("hi")
    var fourthcoor = [keeptrack[0][1],keeptrack[0][0]]
    var firstcoor = [keeptrack[0][1]-(keeptrack[1][0]-keeptrack[0][0]) ,keeptrack[0][0] +keeptrack[1][1]-keeptrack[0][1]];
    var secondcoor = [keeptrack[0][1]-(keeptrack[2][0]-keeptrack[0][0]) ,keeptrack[0][0] + keeptrack[2][1]-keeptrack[0][1]];
    var thirdcoor = [keeptrack[0][1]-(keeptrack[3][0]-keeptrack[0][0]) ,keeptrack[0][0] + keeptrack[3][1]-keeptrack[0][1]];
    console.log(firstcoor[0],firstcoor[1])
    if(firstcoor[0] < 0 || firstcoor[0] > 19  || secondcoor[0] < 0 || secondcoor[0] > 19 ||thirdcoor[0] < 0 || thirdcoor[0] > 19 ){
        return;
    }
    else if(firstcoor[1] < 0 ||secondcoor[1] < 0 || thirdcoor[1] < 0 ){
            if(firstcoor[1] == -2 ||secondcoor[1] == -2 || thirdcoor[1] == -2){
            firstcoor[1] = firstcoor[1] + 2;
            secondcoor[1] = secondcoor[1] + 2;
            thirdcoor[1] = thirdcoor[1] + 2;
            fourthcoor[1] = fourthcoor[1] + 2;
        
        }
        else{
            firstcoor[1] = firstcoor[1] + 1;
            secondcoor[1] = secondcoor[1] + 1;
            thirdcoor[1] = thirdcoor[1] + 1;     
            fourthcoor[1] = fourthcoor[1] + 1;       
        }
    }
    else if(firstcoor[1] > 9||secondcoor[1] > 9 || thirdcoor[1] > 9 ){
        
            if(firstcoor[1] == 11 ||secondcoor[1] == 11 || thirdcoor[1] == 11){
            firstcoor[1] = firstcoor[1] - 2;
            secondcoor[1] = secondcoor[1] - 2;
            thirdcoor[1] = thirdcoor[1] - 2;
            fourthcoor[1] = fourthcoor[1] - 2;
        
        }
        else{
            firstcoor[1] = firstcoor[1] - 1;
            secondcoor[1] = secondcoor[1] - 1;
            thirdcoor[1] = thirdcoor[1] - 1;     
            fourthcoor[1] = fourthcoor[1] - 1;       
        }
        
            
        
    }    
    else if (myArr[firstcoor[1]][firstcoor[0]][0] == 1  && myArr[firstcoor[1]][firstcoor[0]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[firstcoor[1]][firstcoor[0]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[firstcoor[1]][firstcoor[0]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        return;
    }
    else if (myArr[secondcoor[1]][secondcoor[0]][0] == 1  && myArr[secondcoor[1]][secondcoor[0]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[secondcoor[1]][secondcoor[0]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[secondcoor[1]][secondcoor[0]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        return;
    }
    else if (myArr[thirdcoor[1]][thirdcoor[0]][0] == 1  && myArr[thirdcoor[1]][thirdcoor[0]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[thirdcoor[1]][thirdcoor[0]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[thirdcoor[1]][thirdcoor[0]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        return;
    }
    if(object == 0){
        return;
    }

    myArr[keeptrack[1][0]][keeptrack[1][1]][0] = 0;
    myArr[keeptrack[2][0]][keeptrack[2][1]][0] = 0;
    myArr[keeptrack[3][0]][keeptrack[3][1]][0] = 0;
    myArr[keeptrack[0][0]][keeptrack[0][1]][0] = 0;
    myArr[firstcoor[1]][firstcoor[0]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];
    myArr[secondcoor[1]][secondcoor[0]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];
    myArr[thirdcoor[1]][thirdcoor[0]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];
    myArr[fourthcoor[1]][fourthcoor[0]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];
    keeptrack[1] = [firstcoor[1],firstcoor[0]];
    keeptrack[2] = [secondcoor[1],secondcoor[0]];
    keeptrack[3] = [thirdcoor[1],thirdcoor[0]];
    keeptrack[0] = [fourthcoor[1],fourthcoor[0]];
}
var pivotcount = -1

function goLeft(){
    var fourthcoor = [keeptrack[0][0]-1,keeptrack[0][1]]
    var firstcoor = [keeptrack[1][0]-1,keeptrack[1][1]];
    var secondcoor = [keeptrack[2][0]-1,keeptrack[2][1]];
    var thirdcoor = [keeptrack[3][0]-1,keeptrack[3][1]];
    if(fourthcoor[0] > 9 || firstcoor[0] > 9 || secondcoor[0] > 9 || thirdcoor[0] > 9 || fourthcoor[0] < 0 || firstcoor[0] < 0 || secondcoor[0] < 0 || thirdcoor[0] < 0 ){
        console.log("wow")
        return;
    }
    else if (myArr[firstcoor[0]][firstcoor[1]][0] == 1  && myArr[firstcoor[0]][firstcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[firstcoor[0]][firstcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[firstcoor[0]][firstcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        console.log("wow1")
        return;
    }
    else if (myArr[secondcoor[0]][secondcoor[1]][0] == 1  && myArr[secondcoor[0]][secondcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[secondcoor[0]][secondcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[secondcoor[0]][secondcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        console.log("wow2")
        return;
    }
    else if (myArr[thirdcoor[0]][thirdcoor[1]][0] == 1  && myArr[thirdcoor[0]][thirdcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[thirdcoor[0]][thirdcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[thirdcoor[0]][thirdcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        console.log("wow3")
        return;
    }
    else if (myArr[fourthcoor[0]][fourthcoor[1]][0] == 1  && myArr[fourthcoor[0]][fourthcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[fourthcoor[0]][fourthcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[fourthcoor[0]][fourthcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        console.log("wo4w")
        return;
    }
    else{
    myArr[keeptrack[0][0]][keeptrack[0][1]][0] = 0;
    myArr[keeptrack[1][0]][keeptrack[1][1]][0] = 0;
    myArr[keeptrack[2][0]][keeptrack[2][1]][0] = 0;
    myArr[keeptrack[3][0]][keeptrack[3][1]][0] = 0;
    myArr[fourthcoor[0]][fourthcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];    
    myArr[firstcoor[0]][firstcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];
    myArr[secondcoor[0]][secondcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];
    myArr[thirdcoor[0]][thirdcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];

    keeptrack[0] = [fourthcoor[0],fourthcoor[1]];
    keeptrack[1] = [firstcoor[0],firstcoor[1]];
    keeptrack[2] = [secondcoor[0],secondcoor[1]];
    keeptrack[3] = [thirdcoor[0],thirdcoor[1]];
}
}
function goRight(){
    var fourthcoor = [keeptrack[0][0]+1,keeptrack[0][1]]
    var firstcoor = [keeptrack[1][0]+1,keeptrack[1][1]];
    var secondcoor = [keeptrack[2][0]+1,keeptrack[2][1]];
    var thirdcoor = [keeptrack[3][0]+1,keeptrack[3][1]];
    if(fourthcoor[0] > 9 || firstcoor[0] > 9 || secondcoor[0] > 9 || thirdcoor[0] > 9 || fourthcoor[0] < 0 || firstcoor[0] < 0 || secondcoor[0] < 0 || thirdcoor[0] < 0 ){
        return;
    }
    else if (myArr[firstcoor[0]][firstcoor[1]][0] == 1  && myArr[firstcoor[0]][firstcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[firstcoor[0]][firstcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[firstcoor[0]][firstcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        return;
    }
    else if (myArr[secondcoor[0]][secondcoor[1]][0] == 1  && myArr[secondcoor[0]][secondcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[secondcoor[0]][secondcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[secondcoor[0]][secondcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        return;
    }
    else if (myArr[thirdcoor[0]][thirdcoor[1]][0] == 1  && myArr[thirdcoor[0]][thirdcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[thirdcoor[0]][thirdcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[thirdcoor[0]][thirdcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        return;
    }
    else if (myArr[fourthcoor[0]][fourthcoor[1]][0] == 1  && myArr[fourthcoor[0]][fourthcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[fourthcoor[0]][fourthcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[fourthcoor[0]][fourthcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        return;
    }
    else{
    myArr[keeptrack[0][0]][keeptrack[0][1]][0] = 0;
    myArr[keeptrack[1][0]][keeptrack[1][1]][0] = 0;
    myArr[keeptrack[2][0]][keeptrack[2][1]][0] = 0;
    myArr[keeptrack[3][0]][keeptrack[3][1]][0] = 0;
    myArr[fourthcoor[0]][fourthcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];    
    myArr[firstcoor[0]][firstcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];
    myArr[secondcoor[0]][secondcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];
    myArr[thirdcoor[0]][thirdcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];

    keeptrack[0] = [fourthcoor[0],fourthcoor[1]];
    keeptrack[1] = [firstcoor[0],firstcoor[1]];
    keeptrack[2] = [secondcoor[0],secondcoor[1]];
    keeptrack[3] = [thirdcoor[0],thirdcoor[1]];
}
}

function checklines(){
    var blockcount = 0;
    var k = 0;
    for(i = 0; i < 20; i++){
        blockcount = 0;
        for(j = 0; j < 10; j++){
            if(myArr[j][i][0] == 1){
                blockcount++;
            }
            if(blockcount == 10){
                for(k = 0; k < 10; k++){
                    myArr[k][i][0] = 0;
                }
                checklines();
            }
        }
    }
    compresslines();
}

function compresslines(){
    var k = 0;
    var blockcount = 0;
    var emptycount = 0;
    for(i = 1; i < 20; i++){
        blockcount = 0;
        emptycount = 0;
        for(j = 0; j < 10; j++){
            if(myArr[j][i][0] == 0){
                emptycount++;
            }
            if(myArr[j][i-1][0] == 1){
                blockcount++;
            }
            if(blockcount > 0 && emptycount == 10){
                for(k = 0; k < 10; k++){
                    myArr[k][i][0] = myArr[k][i-1][0];
                    myArr[k][i][1] = myArr[k][i-1][1];
                    myArr[k][i][2] = myArr[k][i-1][2];
                    myArr[k][i][3] = myArr[k][i-1][3];
                    myArr[k][i-1][0] = 0;
                    
                }
                compresslines();
                
            }
        }
    }
}
var timerslow;
var timerfast;
var timeslow = setInterval(moveDown,500);

function getKey(key) {

    
if (key.key == "ArrowUp"){
    setTimeout(rotate,50);
}
if (key.key == "ArrowLeft"){
    setTimeout(goLeft,50);
     
 }
if (key.key == "ArrowRight"){
    setTimeout(goRight,50);
}
if(key.key == "ArrowDown"){
    
    timerfast = setTimeout(moveDown,200);
}
if(key.key == "r"){
     for(i = 0;i < 10;i++){
        for(j = 0;j < 20;j++){
            myArr[i][j][0] = 0;
            pivotcount = -1;
            quit = 0;
        }
    }   
}
if(key.key == "q"){
     
            quit = window.confirm("Do you really want to quit?"); 
            if(quit == true){
                window.close();
            }
        
         
}
}
function getKeys(key) {


}
var quit = 0;

function moveDown(){
    var fourthcoor = [keeptrack[0][0],keeptrack[0][1]+1]
    var firstcoor = [keeptrack[1][0],keeptrack[1][1]+1];
    var secondcoor = [keeptrack[2][0],keeptrack[2][1]+1];
    var thirdcoor = [keeptrack[3][0],keeptrack[3][1]+1];
    if(fourthcoor[1] > 19 || firstcoor[1] > 19 || secondcoor[1] > 19 || thirdcoor[1] > 19  ){
        checklines();
        pivotcount = -1;
    }
    else if (myArr[firstcoor[0]][firstcoor[1]][0] == 1  && myArr[firstcoor[0]][firstcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[firstcoor[0]][firstcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[firstcoor[0]][firstcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        checklines();
        pivotcount = -1;
    }
    else if (myArr[secondcoor[0]][secondcoor[1]][0] == 1  && myArr[secondcoor[0]][secondcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[secondcoor[0]][secondcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[secondcoor[0]][secondcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        checklines();
        pivotcount = -1;
    }
    else if (myArr[thirdcoor[0]][thirdcoor[1]][0] == 1  && myArr[thirdcoor[0]][thirdcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[thirdcoor[0]][thirdcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[thirdcoor[0]][thirdcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        checklines();
        pivotcount = -1;
    }
    else if (myArr[fourthcoor[0]][fourthcoor[1]][0] == 1  && myArr[fourthcoor[0]][fourthcoor[1]][1] != myArr[keeptrack[0][0]][keeptrack[0][1]][1] && myArr[fourthcoor[0]][fourthcoor[1]][2] != myArr[keeptrack[0][0]][keeptrack[0][1]][2] && myArr[fourthcoor[0]][fourthcoor[1]][3] != myArr[keeptrack[0][0]][keeptrack[0][1]][3]){
        checklines();
        pivotcount = -1;
    }
    else{
    myArr[keeptrack[0][0]][keeptrack[0][1]][0] = 0;
    myArr[keeptrack[1][0]][keeptrack[1][1]][0] = 0;
    myArr[keeptrack[2][0]][keeptrack[2][1]][0] = 0;
    myArr[keeptrack[3][0]][keeptrack[3][1]][0] = 0;
    myArr[fourthcoor[0]][fourthcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];    
    myArr[firstcoor[0]][firstcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];
    myArr[secondcoor[0]][secondcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];
    myArr[thirdcoor[0]][thirdcoor[1]] = [1,myArr[keeptrack[0][0]][keeptrack[0][1]][1],myArr[keeptrack[0][0]][keeptrack[0][1]][2],myArr[keeptrack[0][0]][keeptrack[0][1]][3]];

    keeptrack[0] = [fourthcoor[0],fourthcoor[1]];
    keeptrack[1] = [firstcoor[0],firstcoor[1]];
    keeptrack[2] = [secondcoor[0],secondcoor[1]];
    keeptrack[3] = [thirdcoor[0],thirdcoor[1]];
}
}

var object = 0;
var quit = 0;
function render() {
    if(quit){
        return;
    }

    window.addEventListener("keydown", getKey, false);
    window.addEventListener("keyup", getKeys, false);
    window.addEventListener("keypress", getKey, false);

    if(pivotcount == -1){
    var pivot = Math.floor(Math.random() * 8) + 1;
    console.log(pivot)
    object = Math.floor(Math.random() * 7);
    var rotatecount = Math.floor(Math.random() * 4);
    pivotpoint[0] = pivot;
    pivotpoint[1] = 1;
    var red = Math.random();
    var green = Math.random();
    var blue = Math.random();
    for(i = 0 ; i < 10; i++){
        if(myArr[i][1][0] == 1){

            pivotcount = 1;
            clearInterval(timerslow);
            return;
        }
    }
    if(object == 0){

        myArr[pivot][1] = [1,red,green,blue];
        myArr[pivot-1][1] = [1,red,green,blue];
        myArr[pivot][2] = [1,red,green,blue];
        myArr[pivot-1][2] = [1,red,green,blue];
        keeptrack = [[pivot,1],[pivot-1,1],[pivot,2],[pivot-1,2]];
    }
    if(object == 1){
        if(pivot == 1){
            pivot = pivot + 1;
        }
        myArr[pivot][1] = [1,red,green,blue];
        myArr[pivot-1][1] = [1,red,green,blue];
        myArr[pivot+1][1] = [1,red,green,blue];
        myArr[pivot-2][1] = [1,red,green,blue];
        keeptrack = [[pivot,1],[pivot-1,1],[pivot+1,1],[pivot-2,1]];
    }
    if(object == 2){
        myArr[pivot][1] = [1,red,green,blue];
        myArr[pivot+1][1] = [1,red,green,blue];
        myArr[pivot][2] = [1,red,green,blue];
        myArr[pivot-1][2] = [1,red,green,blue];
        keeptrack = [[pivot,1],[pivot+1,1],[pivot,2],[pivot-1,2]];
    }
    if(object == 3){
        myArr[pivot][1] = [1,red,green,blue];
        myArr[pivot-1][1] = [1,red,green,blue];
        myArr[pivot][2] = [1,red,green,blue];
        myArr[pivot+1][2] = [1,red,green,blue];
        keeptrack = [[pivot,1],[pivot-1,1],[pivot,2],[pivot+1,2]];
    }
    if(object == 4){
        myArr[pivot][1] = [1,red,green,blue];
        myArr[pivot-1][1] = [1,red,green,blue];
        myArr[pivot+1][1] = [1,red,green,blue];
        myArr[pivot-1][2] = [1,red,green,blue];
        keeptrack = [[pivot,1],[pivot-1,1],[pivot+1,1],[pivot-1,2]];
    }
    if(object == 5){
        myArr[pivot][1] = [1,red,green,blue];
        myArr[pivot-1][1] = [1,red,green,blue];
        myArr[pivot+1][1] = [1,red,green,blue];
        myArr[pivot+1][2] = [1,red,green,blue];
        keeptrack = [[pivot,1],[pivot-1,1],[pivot+1,1],[pivot+1,2]];
    }
    if(object == 6){
        myArr[pivot][1] = [1,red,green,blue];
        myArr[pivot-1][1] = [1,red,green,blue];
        myArr[pivot+1][1] = [1,red,green,blue];
        myArr[pivot][2] = [1,red,green,blue];
        keeptrack = [[pivot,1],[pivot-1,1],[pivot+1,1],[pivot,2]];
    }                
    for (i = 0; i < rotatecount; i++){
        rotate();
    }
    pivotcount = 1;


}



    var trianglevertices = [];
    for(i = -1.1;i < 2.2;i = i + 0.1){
    trianglevertices.push(0,i,0,0,0)
    trianglevertices.push(1.1,i,0,0,0)
    }
    for(i = 0; i < 1.1; i = i + 0.1){
    trianglevertices.push(i,3,0,0,0);
    trianglevertices.push(i,-3,0,0,0);

}
console.log(trianglevertices.length);
counter = 0;
    for(i = 0;i < 10;i++){
        for(j = 0;j < 20;j++){
            if(myArr[i][j][0] == 1){
                trianglevertices.push(0 + i * 0.1, 0.9 - j * 0.1,myArr[i][j][1],myArr[i][j][2],myArr[i][j][3]);
                trianglevertices.push(0.1 + i * 0.1,0.9 - j * 0.1,myArr[i][j][1],myArr[i][j][2],myArr[i][j][3]);
                trianglevertices.push(0 + i * 0.1,1 - j * 0.1,myArr[i][j][1],myArr[i][j][2],myArr[i][j][3]);
                trianglevertices.push(0.1 + i * 0.1,1 - j * 0.1,myArr[i][j][1],myArr[i][j][2],myArr[i][j][3]);
                trianglevertices.push(0.1 + i * 0.1,0.9 - j * 0.1,myArr[i][j][1],myArr[i][j][2],myArr[i][j][3]);
                trianglevertices.push(0 + i * 0.1,1 - j * 0.1,myArr[i][j][1],myArr[i][j][2],myArr[i][j][3]);
                counter = counter + 6;
            }
        }
    }
    

      gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);    
    gl.bufferData(gl.ARRAY_BUFFER, counter*450 , gl.STATIC_DRAW); 
   // gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(trianglevertices), gl.STATIC_DRAW );    
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(trianglevertices)); 
    // Associate out shader variables with our data buffer

     gl.drawArrays( gl.LINES, 0, 90 );
     gl.drawArrays( gl.TRIANGLES, 90, counter + 6  );

    window.requestAnimFrame(render);    
      
      

}
    // gl = WebGLUtils.setupWebGL( canvas );
    // if ( !gl ) { alert( "WebGL isn't available" ); }
    // var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    // gl.useProgram( program );
    // var newBuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, newBuffer);
    //       var vPosition = gl.getAttribLocation( program, "vPosition" );
    //   gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0 );
    //   gl.enableVertexAttribArray( vPosition );    
    //   var fColor = gl.getAttribLocation( program, "fColor" );
    //   gl.vertexAttribPointer( fColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    //   gl.enableVertexAttribArray( fColor );  
    // gl.clearStencil(0)