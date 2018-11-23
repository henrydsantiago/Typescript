abstract class Figura{
    private _x:number
    private _y:number
    protected static _color:string = "orange"
    protected _context:CanvasRenderingContext2D
    private _f: number;

    public static get color(){
        return this._color
    }
    public static set color(color:string){
        this._color=color
    }

    public get x(){
        return this._x
    }
    public set x(x:number){
        this._x=x
    }

    public get y(){
        return this._y
    }
    public set y(y:number){
        this._y=y
    }

    constructor (context:CanvasRenderingContext2D, x?:number, y?:number){
        if(x==undefined)
            this._x = Math.random()*150+20
        else
            this._x=x;    
        this._y = (y==undefined)?Math.random()*150 : y;
        this._context = context
    }
    public abstract dibujar()
    public abstract mover()
}

class Triangulo extends Figura {
    private _tamLados: number;

    public get tamLados_1(): number {
        return this._tamLados;
    }
    public set tamLados_1(value: number) {
        this._tamLados = value;
    }

    constructor(contexto: CanvasRenderingContext2D, tamLados:number){
        super(contexto)
        this._tamLados = tamLados
    }

    public mover(){
        this.x++
        this.y++
    }

    public dibujar(){
        this._context.fillStyle = Figura.color
        this._context.beginPath()
        this._context.moveTo(this.x, this.y)
        this._context.lineTo(this.x, this.y + this._tamLados)
        this._context.lineTo(this.x + this._tamLados, this.y + this._tamLados)
        this._context.closePath()
        this._context.fill()
        //this._context.stroke()
    }
}

class Triangulito extends Triangulo{
    private nombre:string

    constructor(contexto:CanvasRenderingContext2D, nombre:string){
        super(contexto,300)
        this.nombre=nombre
    }

    //se sobreescribe el metodo de la superclase Triangulo
    public dibujar(){
        super.dibujar()
        this._context.fillStyle = "black"
        this._context.font = "25px arial"
        this._context.fillText(this.nombre, this.x+this.tamLados_1/8, this.y + this.tamLados_1*0.8)
        
    }
}


var canvas:any = document.getElementById("canvas")
enum colors{black,skyblue,pink,green}
if (canvas.getContext){

    var t1:Triangulito = new Triangulito(canvas.getContext("2d"),"Henry")
    Figura.color = colors[Math.round(Math.random()*3)] 
    t1.dibujar()

    var t:Triangulo = new Triangulo(canvas.getContext("2d"), 40)
    Figura.color = colors[Math.round(Math.random()*3)] 
    t.dibujar()

    Figura.color = colors[Math.round(Math.random()*3)] 
    for (let i=1;i<=2;i++){
        new Triangulo(canvas.getContext("2d"), 30).dibujar()
        new Triangulito(canvas.getContext("2d"), i.toString()).dibujar()
    }

}


