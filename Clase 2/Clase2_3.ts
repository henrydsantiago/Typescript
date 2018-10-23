
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
        contexto.fill();
    contexto.closePath();
    contexto.fillStyle = "red"
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
            true)
    }else
        console.log("No se pudo acceder al Canvas");