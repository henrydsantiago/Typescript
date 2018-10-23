
interface Punto{
    x:number,
    y:number
}

function pintarTriangulo(p1:Punto, p2:Punto,  p3:Punto,
                contexto:CanvasRenderingContext2D,
                relleno:boolean=false){
    contexto.beginPath();
    contexto.moveTo(p1.x,p1.y);
    contexto.lineTo(p2.x,p2.y);
    contexto.lineTo(p3.x,p3.y);
    if(relleno)
        contexto.fillStyle = "red"
        contexto.fill();
    contexto.closePath();
    contexto.stroke();
}

function pintarCirculo(p1:Punto,radio:number,
    contexto:CanvasRenderingContext2D,
    relleno:boolean=false){
//contexto.moveTo(p1.x,p1.y);
contexto.beginPath();
contexto.arc(p1.x,p1.y,radio,0,Math.PI*2);
if (relleno){
contexto.fillStyle="blue";
contexto.fill();
}

contexto.closePath();
contexto.stroke();
}

var c1:any = document.getElementById("canvas1");
if (c1!=undefined && c1.getContext){
    let ancho:number = c1.width;
    let alto:number = c1.height;
    var ctx1:CanvasRenderingContext2D = c1.getContext("2d");
    pintarTriangulo(
        {x:0,y:0},
        {x:ancho,y:alto},
        {x:0,y:alto},
        ctx1,
        true)
}else
    console.log("No se pudo acceder al Canvas");

var c2:any = document.getElementById("canvas2");
if (c2!=undefined && c2.getContext){
        let ancho:number = c2.width;
        let alto:number = c2.height;
        var ctx2:CanvasRenderingContext2D = c2.getContext("2d");
        pintarTriangulo(
            {x:50,y:50},
            {x:ancho,y:alto},
            {x:0,y:700},
            ctx2,
            false)
}else
    console.log("No se pudo acceder al Canvas");

var c3:any = document.getElementById("canvas2");
    if (c3!=undefined && c3.getContext){
        var ctx3:CanvasRenderingContext2D = c3.getContext("2d");
            
    for (let i=1;i<=10;i++){
        pintarCirculo({x:i*50,y:i*50},20,ctx3,i%2==0);
    }
    

}else
    console.log("No se pudo acceder al Canvas");
