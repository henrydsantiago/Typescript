class Circulo{
    private radio:number
    private _color:string
    readonly _nombre:string  = "Circulo"
    private contexto:CanvasRenderingContext2D;
    private _x: number
    private _y: number

    constructor (contexto:CanvasRenderingContext2D){
        this.radio = Math.random()*100+20
        this._color = "yellow"
        this.contexto = contexto
        this._x = Math.random()*100+10
        this._y = Math.random()*100+10
    }

    public pintar(){
        this.contexto.fillStyle=this._color
        this.contexto.arc(this._x, this._y, this.radio, 0 , Math.PI*2)
        this.contexto.fill()
        this.contexto.stroke()
    }

    public setRadio(radio:number){
        this.radio;
    }

    public getRadio(){
        return this.radio
    }

    public get color(){
        return this._color
    }
    public set color(color:string){
    
        this._color=color
    }
}
var canvas:any = document.getElementById("canvas")
enum colores{"red","blue","yellow","white"}
if (canvas.getContext){
    //c.nombre = "circulo2"  no se puede hacer, porque readonly hace el atributo constante.
    var c:Circulo = new Circulo(canvas.getContext("2d"))
    c.color = colores[Math.round(Math.random()*3)]         // se usa el setter implicito
    c.setRadio(20)          // se usa el setter explicito   
    console.log("El color es " + c.color);      //getter implicito
    console.log("El radio es " + c.getRadio()); //getter explicito
    c.pintar()
}

