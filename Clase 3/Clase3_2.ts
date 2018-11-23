class Figura{
    private _x:number
    private _y:number
    protected _color:string
    protected _context:CanvasRenderingContext2D


    public get color(){
        return this._color
    }
    public set color(color:string){
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
}

class Triangulo extends Figura {
    private _tamLados : number

    constructor(contexto: CanvasRenderingContext2D, tamLados:number){
        super(contexto)
        this._tamLados = tamLados
    }

    public dibujar(){
        this._context.fillStyle = this.color
        this._context.beginPath()
        this._context.moveTo(this.x, this.y)
        this._context.lineTo(this.x, this.y + this._tamLados)
        this._context.lineTo(this.x + this._tamLados, this.y + this._tamLados)
        this._context.closePath()
        this._context.fill()
        this._context.stroke()
    }
}
var canvas:any = document.getElementById("canvas")
enum colors{"black","skyblue","pink","green"}
if (canvas.getContext){
    var t:Triangulo = new Triangulo(canvas.getContext("2d"), 100)
    t.color = colors[Math.round(Math.random()*3)] 
    t.dibujar()
}
