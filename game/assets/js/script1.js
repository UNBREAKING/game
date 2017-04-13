// создаем массив цветов
var Color=["mediumpurple","SteelBlue","Black","#734E3A","#794C44","#3C685E","#395336","darkslateblue"];/**
 * Created by Alex on 12.04.2017.
 */

//методы для смены решима игры
function chooseclassic(){
    GF.GameRezim=0;
    document.getElementById("textOfGame").innerHTML="Classic";
}
function chooselines(){
    GF.GameRezim=1;
    document.getElementById("textOfGame").innerHTML="Lines";
}
// создаем фигуры и массив фигур
//фигура F и зеркалированная FL
var F=[[[136,1],[163,1],[109,28],[136,28],[136,55]],
        [[109,1],[109,28],[136,28],[163,28],[136,55]],
        [[136,1],[136,28],[163,28],[109,55],[136,55]],
        [[136,1],[109,28],[136,28],[163,28],[163,55]]];
var FL=[[[136,1],[109,1],[163,28],[136,28],[136,55]],
    [[136,55],[109,28],[136,28],[163,28],[163,1]],
    [[136,1],[136,28],[109,28],[163,55],[136,55]],
    [[109,55],[109,28],[136,28],[163,28],[136,1]]
];
//фигура I -зеркалирования нет
var I=[[[136,1],[136,28],[136,55],[136,82],[136,109]],
    [[82,55],[109,55],[136,55],[163,55],[190,55]]];
//фигура L и зеркалированная LL
var L= [[[136,1],[136,28],[136,55],[136,82],[163,82]],
    [[82,55],[109,55],[136,55],[163,55],[163,28]],
    [[109,28],[136,28],[136,55],[136,82],[136,109]],
    [[109,55],[136,55],[163,55],[190,55],[109,82]]];

var LL=[[[136,1],[136,28],[136,55],[136,82],[109,82]],
    [[109,55],[136,55],[163,55],[190,55],[109,28]],
    [[163,28],[136,28],[136,55],[136,82],[136,109]],
    [[82,55],[109,55],[136,55],[163,55],[163,82]]
];
//фигура N и зеркалированная NL
var N= [[[163,1],[136,28],[163,28],[136,55],[136,82]],
    [[109,1],[136,1],[136,28],[163,28],[190,28]],
    [[136,-26],[136,1],[136,28],[109,28],[109,55]],
    [[82,1],[109,1],[136,1],[136,28],[163,28]]];

var NL= [[[136,1],[163,28],[136,28],[163,55],[163,82]],
    [[190,1],[163,1],[136,28],[163,28],[109,28]],
    [[109,-26],[109,1],[109,28],[136,28],[136,55]],
    [[190,1],[163,1],[136,1],[136,28],[109,28]]];
//фигура P и зеркалированная PL
var P=[
    [[136,1],[109,28],[136,28],[109,55],[136,55]],
    [[109,28],[136,28],[163,28],[136,55],[163,55]],
    [[136,1],[163,1],[136,28],[163,28],[136,55]],
    [[109,1],[136,1],[109,28],[136,28],[163,28]]
];

var PL=[
    [[109,1],[109,28],[136,28],[109,55],[136,55]],
    [[109,1],[136,1],[109,28],[136,28],[163,1]],
    [[136,1],[163,1],[136,28],[163,28],[163,55]],
    [[109,55],[136,28],[163,28],[136,55],[163,55]]
];
//фигура T и зеркалированная TL
var T=[
    [[109,1],[136,1],[163,1],[136,28],[136,55]],
    [[109,1],[109,28],[109,55],[136,28],[163,28]],
    [[136,1],[136,28],[163,55],[136,55],[109,55]],
    [[163,1],[109,28],[136,28],[163,28],[163,55]]
];
var TL=[

    [[109,1],[136,1],[163,1],[136,28],[136,55]],
    [[163,1],[109,28],[136,28],[163,28],[163,55]],
    [[136,1],[136,28],[163,55],[136,55],[109,55]],
    [[109,1],[109,28],[109,55],[136,28],[163,28]]
];
//фигура U и зеркалированная UL
var  U=[[[109,1],[163,1],[109,28],[136,28],[163,28]],
    [[109,1],[136,1],[136,28],[109,55],[136,55]],
    [[109,28],[136,28],[163,28],[109,55],[163,55]],
    [[136,1],[163,1],[136,28],[136,55],[163,55]]];

var  UL=[ [[109,1],[163,1],[109,28],[136,28],[163,28]],
    [[136,1],[163,1],[136,28],[136,55],[163,55]],
    [[109,28],[136,28],[163,28],[109,55],[163,55]],
    [[109,1],[136,1],[136,28],[109,55],[136,55]]
];
//фигура V и зеркалированная VL
var V= [[[109,1],[109,28],[109,55],[136,55],[163,55]],
    [[163,1],[163,28],[109,55],[136,55],[163,55]] ,
    [[109,1],[136,1],[163,1],[163,28],[163,55]],
    [[109,1],[136,1],[163,1],[109,28],[109,55]]];

var VL= [
    [[163,1],[163,28],[109,55],[136,55],[163,55]] ,
    [[109,1],[109,28],[109,55],[136,55],[163,55]],
    [[109,1],[136,1],[163,1],[109,28],[109,55]],
    [[109,1],[136,1],[163,1],[163,28],[163,55]]];
//фигура W и зеркалированная WL
var W=[[[109,1],[109,28],[136,28],[136,55],[163,55]],
    [[163,1],[136,28],[163,28],[109,55],[136,55]],
    [[109,1],[136,1],[136,28],[163,28],[163,55]] ,
    [[136,1],[163,1],[109,28],[136,28],[109,55]]];

var WL=[[[163,1],[136,28],[163,28],[109,55],[136,55]],
    [[109,1],[109,28],[136,28],[136,55],[163,55]],
    [[136,1],[163,1],[109,28],[136,28],[109,55]],
    [[109,1],[136,1],[136,28],[163,28],[163,55]]
];
//фигура X
var X=[[[136,1],[109,28],[136,28],[163,28],[136,55]]];
//фигура Y и зеркалированная YL
var Y=[[[136,1],[109,28],[136,28],[136,55],[136,82]],
    [[109,28],[136,28],[163,28],[190,28],[136,55]],
    [[136,1],[136,28],[136,55],[163,55],[136,82]],
    [[82,28],[109,28],[136,28],[136,1],[163,28]]];

var YL=[[[136,1],[163,28],[136,28],[136,55],[136,82]],
    [[109,28],[136,28],[163,28],[190,28],[163,55]],
    [[136,1],[136,28],[136,55],[109,55],[136,82]],
    [[82,28],[109,28],[136,28],[109,1],[163,28]]];
//фигура Z и зеркалированная ZL
var Z=[[[109,1],[136,1],[136,28],[136,55],[163,55]],
    [[163,1],[109,28],[136,28],[163,28],[109,55]]];

var ZL=[[[163,1],[136,1],[136,28],[136,55],[109,55]],
    [[163,55],[109,28],[136,28],[163,28],[109,1]]];
//массив фигур
var Mass=[[F,FL],[I,I],[L,LL],[N,NL],[P,PL],[T,TL],[U,UL],[V,VL],[W,WL],[X,X],[Y,YL],[Z,ZL]];


class GameField{
    constructor(){
        this.AllMass=[];
        this.elem = document.getElementById('myCanvas');
        this.context = this.elem.getContext('2d');
        this.elem1 = document.getElementById('SNF');
        this.context1 = this.elem1.getContext('2d');
        this.Figurine=null;
        this.CurFig=null;
        this.Fig=null;
        this.NextCurFig=null;
        this.NextFig=null;
        this.lol1=null;
        this.lol2=null;
        this.MaxY=null;
        this.MaxX=null;
        this.MinX=null;
        this.ConY=null;
        this.ConX=null;
        this.ResEnd=null;
        this.Schetchik=null;
        this.LOCK=0;
        this.gameOn=false;
//Базовое значение нижней ячейки
        this.BasicY=513;
//переменная для поворта фигуры
        this.Kol=0;

//переменная определяющая решим игры
        this.GameRezim=0;
        //все для рейтинга игры
        this.onPause=0;
        this.Speed= 0;this.Points= 0;this.AllDer= 0;this.NumOfFigures= 0;this.Time= 0;this.BeginTime=0;this.EndTime= 0;this.Lines=0;
        this.Score= 0 ;this.XORDVIZH= 0;this.NODLBCF= 0;
        this.Exp=0;
        this.D=0;
        this.TimeOfGame=0;
        this.Power=0;
        this.Schet=0;
        this.ForTime=['x',0];
        this.ForPower=['power',0];
        this.ForSpeed=['speed',0];
        this.ForScore=['score',0];
        this.chart = c3.generate({
            bindto: '#ToPower',
            data: {
                x:'x',
                columns: [this.ForTime,
                    this.ForPower
                ],
                type: 'spline'
            }
        });
        this.chart1 = c3.generate({
            bindto: '#ToSpeed',
            data: {x:'x',
                columns: [this.ForTime,
                    this.ForSpeed
                ],
                type: 'spline'
            },
            axis: {
                x: {
                    tick: {
                        count: 2

                    }
                }
            }
        });
        this.chart2 = c3.generate({
            bindto: '#ToScore',
            data: {x:'x',
                columns: [this.ForTime,
                    this. ForScore
                ],
                type: 'spline'
            },
            axis: {
                x: {
                    tick: {
                        count: 2

                    }
                }
            }
        });
//все для рейтинга игры
    }
}

GameField.prototype.fillstyle=function (Color) {
    this.context.fillStyle =Color;
    this.context1.fillStyle =Color;
}
//функция целочисленного рандома
GameField.prototype.getRandomInt =function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


GameField.prototype.drawf= function(context,figure){
    for(var i=0;i<figure.length;i++)
        context.fillRect(figure[i][0],figure[i][1], 26, 26);
}

GameField.prototype.beginFigure= function (){
    var Num=this.getRandomInt(0,11);
    this.Figurine=Mass[Num];
    this.CurFig=this.Figurine[0];
    this.Fig=this.CurFig[0];
}

GameField.prototype.beginNextFigure=function () {
    var Num=this.getRandomInt(0,11);
    this.NextCurFig=Mass[Num];
    this.NextFig=this.NextCurFig[0];
}

GameField.prototype.clearf= function (context,figure){
    for(var i=0;i<figure.length;i++)
        context.clearRect(figure[i][0],figure[i][1], 26, 26);
}

GameField.prototype.movedownf=function (context,figure){
    this.clearf(context,figure);
    context.translate(0,27);
    this.drawf(context,figure);
}

GameField.prototype.moveleftf=function (context,figure){
    this.clearf(context,figure);
    context.translate(-27,0);
    this.drawf(context,figure);
}

//двигаем фигуру вправо
GameField.prototype.moverightf =function (context,figure){
    this.clearf(context,figure);
    context.translate(27,0);
    this.drawf(context,figure);
}


// находим максимум Y фигуры
GameField.prototype.maxY=function (){
    var max=this.Fig[0][1];
    for(var i=1;i<this.Fig.length;i++)
        if(max<this.Fig[i][1])
        {max=this.Fig[i][1];}
    return max;
}
// находим максимум X фигуры
GameField.prototype.maxX=function(){
    var max=this.Fig[0][0];
    for(var i=1;i<this.Fig.length;i++)
        if(max<this.Fig[i][0])
        {max=this.Fig[i][0];}
    return max;
}
// находим минимум X фигуры
GameField.prototype.minX=function (){
    var min=this.Fig[0][0];
    for(var i=1;i<this.Fig.length;i++)
        if(min>this.Fig[i][0])
        {min=this.Fig[i][0];}
    return min;
}
//находим минимум Y в фигуре
GameField.prototype.minY=function (){
    var min=this.Fig[0][1];
    for(var i=1;i<this.Fig.length;i++)
        if(min>this.Fig[i][1])
        {min=this.Fig[i][1];}
    return min;
}

//функция добавления координат в наш массив всех координат
GameField.prototype.AddToAllMass=function (x,y){
    for (var i=0;i<this.Fig.length;i++){
        X=this.Fig[i][0]+x;
        Y=this.Fig[i][1]+y;
        this.AllMass.push([X,Y]);
    }
}

//проверка на касание по Y
GameField.prototype.contactY= function (x,y){
    var RES=0;
    for(var i=this.Fig.length-1;i>=0;i--){
        for(var j=this.AllMass.length-1;j>=0;j--)
        {
            if(this.Fig[i][0]+x===this.AllMass[j][0] && this.Fig[i][1]+y-this.AllMass[j][1]===-27){
                RES=1;
            }
        }

    }
    return RES;
}

//проверка на касание по X
GameField.prototype.contactX= function (x,y){
    var RES=[0,0];
    for(var i=this.Fig.length-1;i>=0;i--) {
        for (var j = this.AllMass.length - 1; j >= 0; j--) {
            if (this.Fig[i][1] + y === this.AllMass[j][1] && this.Fig[i][0] + x - this.AllMass[j][0] === -27) {
                RES[0] = -1;
            }
            if (this.Fig[i][1] + y === this.AllMass[j][1] && this.Fig[i][0] + x - this.AllMass[j][0] === 27) {
                RES[1] = 1;
            }
        }

    }
    return RES;
}

//удаление заполненной строки
GameField.prototype.Deletef=function (max,min){
    this.context.clearRect(0,0,this.elem.width,this.elem.height);
    var y=max;
    while(y>=min && y<=max){
        var R=0;
        for(var i=0;i<this.AllMass.length;i++){
            if(this.AllMass[i][1]==y){
                R++;
            }
        }

        if(R===14){

            for(var i=0;i<this.AllMass.length;i++){
                if(this.AllMass[i][1]==y){
                    this.AllMass.splice(i,1);
                    i-=1;
                }
            }

            for(var i=0;i<this.AllMass.length;i++){
                if(this.AllMass[i][1]<y){
                    this.AllMass[i][1]+=27;
                }
            }

            y+=27;
            this.Exp+=15;
            this.Points+=15;
            this.NODLBCF+=1;
            this.Lines+=1;
        }

        y-=27;
    }
    this.drawf(this.context,this.AllMass);
}

//функция поворота
GameField.prototype.rotate=function (){

    if(this.Kol+1==this.CurFig.length){
        this.Kol=0;
    }else{this.Kol++;}
    var K=this.CurFig[this.Kol];
    return K;
}


//конец игры
GameField.prototype.engG=function (){
    var K=0;
    for(var x=109;x<190;x++){
        for(var i=0;i<this.AllMass.length;i++){
            if(this.AllMass[i][0]==x && this.AllMass[i][1]==55){
                K++;
            }
        }
    }
    return K;
}



GameField.prototype.restart=function(){
    //обнуляем рейтинг
    this.context.clearRect(0,0,this.elem.width,this.elem.height);
    this.Speed= 0,this.Points= 0,this.AllDer= 0,this.NumOfFigures= 0,this.Time= 0,this.BeginTime=0,this.EndTime=0;this.Lines=0;
    this.Score= 0,this.XORDVIZH= 0,this.NODLBCF= 0;
    this.Exp=0;this.Power=0;
    this.TimeOfGame=new Date;
    this.Schet=0;
    this.ForTime=['x',0];
    this.ForPower=['power',0];
    this.ForSpeed=['speed',0];
    this.ForScore=['score',0];
    this.chart = c3.generate({
        bindto: '#ToPower',
        data: {
            x:'x',
            columns: [this.ForTime,
                this.ForPower
            ],
            type: 'spline'
        },
        axis: {
            x: {
                tick: {
                    count: 2

                }
            }
        }
    });
    this.chart1 = c3.generate({
        bindto: '#ToSpeed',
        data: {
            x:'x',
            columns: [this.ForTime,
                this.ForSpeed
            ],
            type: 'spline'
        },
        axis: {
            x: {
                tick: {
                    count: 2

                }
            }
        }
    });
    this.chart2 = c3.generate({
        bindto: '#ToScore',
        data: {
            x:'x',
            columns: [this.ForTime,
                this.ForScore
            ],
            type: 'spline'
        },
        axis: {
            x: {
                tick: {
                    count: 2

                }
            }
        }
    });
    //
    document.getElementById("play").blur();
    document.getElementById("myCanvas").focus();

    this.fillstyle(Color[GF.getRandomInt(0,Color.length-1)]);
    this.beginFigure();


    this.AllMass=[];
    var Sp = document.getElementById('speed');
    Sp.innerHTML = "speed: " + this.Speed.toFixed(2);
    var Sc = document.getElementById('kek');
    Sc.innerHTML = "score: " + this.Score;
    var P = document.getElementById('power');
    P.innerHTML = "power: " + this.Power.toFixed(2);
    var L = document.getElementById('lines');
    L.innerHTML = "lines: " + this.Lines;
    var T=document.getElementById('time');
    T.innerHTML="time:"+this.Time;
    this.onPause=0;
    document.getElementById('Pause').style.display="none";
}

function start(){
    //Учитываем рейтинг
    GF.NumOfFigures+=1;
    GF.BeginTime=new Date;
    GF.XORDVIZH=5;
    GF.NODLBCF=0;
    GF.Exp=0;
    GF.D=0;
    //

    GF.Schetchik=0;
    GF.Kol=0;
    GF.beginNextFigure();
    GF.drawf(GF.context,GF.Fig);
    GF.drawf(GF.context1,GF.NextFig[0]);
    GF.lol1=GF.maxY(GF.Fig);
    GF.lol2=GF.maxX(GF.Fig);
    GF.MaxY=GF.maxY(GF.Fig);
    GF.MaxX=GF.maxX(GF.Fig);
    GF.MinX=GF.minX(GF.Fig);
    GF.ConY=GF.contactY(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
    GF.ConX=0;
    GF.ResEnd=0;




    var  Res=setInterval(function() {
        if (GF.MaxY < GF.BasicY && GF.ConY === 0 && GF.gameOn==true && GF.onPause==0) {
            GF.movedownf(GF.context, GF.Fig);
            GF.MaxY += 27;
            GF.ConY = GF.contactY( GF.MaxX - GF.lol2, GF.MaxY - GF.lol1);
            GF.ConX = GF.contactX(GF.MaxX - GF.lol2, GF.MaxY - GF.lol1);

        }else if(GF.onPause==1){
            if(GF.gameOn==false) {
                GF.onPause=1;
                GF.context.translate(GF.lol2 - GF.MaxX, GF.lol1 - GF.MaxY);

                clearInterval(Res);
                setTimeout(function(){ play();},1200);
            }
        }
        else {
            clearInterval(Res);
            GF.context.translate(GF.lol2 - GF.MaxX, GF.lol1 - GF.MaxY);
            GF.AddToAllMass( GF.MaxX - GF.lol2, GF.MaxY - GF.lol1);
            GF.Deletef(GF.MaxY,GF.minY(GF.Fig)+GF.MaxY-GF.lol1);
            GF.ResEnd = GF.engG();

            //считаем скорость,очки и мощность
            if (GF.Speed > 0) {
                GF.Schet = 1;
            }
            GF.EndTime = new Date;
            GF.Time = (GF.EndTime - GF.BeginTime) / 1000;
            GF.AllDer = GF.NumOfFigures;
            GF.Speed = GF.Points / GF.AllDer;
            if (GF.XORDVIZH < 5) {
                GF.D = 1;
            }
            if (GF.XORDVIZH < 0) {
                GF.XORDVIZH = 1;
            }
            if (GF.Schet == 1) {
                GF.Score += Math.round(GF.Speed * ((GF.XORDVIZH + GF.NODLBCF) / GF.Time + GF.Exp) *GF.D);
            }
            else {
                GF.Score += ((GF.XORDVIZH + GF.NODLBCF) + GF.Exp) * GF.D;
            }
            GF.Time = (GF.EndTime - GF.TimeOfGame) / 1000;
            GF.Power = GF.Score / GF.Time;
            GF.ForTime.push(GF.Time.toFixed(2));
            GF.ForPower.push(GF.Power.toFixed(2));
            GF.ForSpeed.push(GF.Speed.toFixed(2));
            GF.ForScore.push(GF.Score.toFixed(2));
            GF.chart = c3.generate({
                bindto: '#ToPower',
                data: {
                    x: 'x',
                    columns: [GF.ForTime,
                        GF.ForPower
                    ],
                    type: 'spline'
                },
                axis: {
                    x: {
                        tick: {
                            count: 2

                        }
                    }
                }
            });
            GF.chart1 = c3.generate({
                bindto: '#ToSpeed',
                data: {
                    x: 'x',
                    columns: [GF.ForTime,
                        GF.ForSpeed
                    ],
                    type: 'spline'
                },
                axis: {
                    x: {
                        tick: {
                            count: 2

                        }
                    }
                }
            });
            GF.chart2 = c3.generate({
                bindto: '#ToScore',
                data: {
                    x: 'x',
                    columns: [GF.ForTime,
                        GF.ForScore
                    ],
                    type: 'spline'
                },
                axis: {
                    x: {
                        tick: {
                            count: 2

                        }
                    }
                }
            });
            var Sp = document.getElementById('speed');
            Sp.innerHTML = "speed: " + GF.Speed.toFixed(2);
            var Sc = document.getElementById('kek');
            Sc.innerHTML = "score: " + GF.Score;
            var P = document.getElementById('power');
            P.innerHTML = "power: " + GF.Power.toFixed(2);
            var L = document.getElementById('lines');
            L.innerHTML = "lines: " + GF.Lines;
            var T=document.getElementById('time');
            T.innerHTML="time: "+ GF.Time.toFixed(2);
            //
            if (GF.ResEnd == 0 && (GF.GameRezim==0 || GF.GameRezim==1 && GF.Lines<20) && GF.gameOn==true) {

                GF.Figurine = GF.NextCurFig;
                GF.CurFig = GF.Figurine[0];
                GF.Fig = GF.CurFig[0];
                GF.clearf(GF.context1,GF.NextFig[0]);
                start();
            }else if(GF.gameOn==false) {
                GF.onPause=1;
                setTimeout(function(){ play();},1200);
            }
            else {
                document.getElementById("SC").innerHTML="Your score : "+GF.Score;
                document.getElementById("SP").innerHTML="Your speed : "+GF.Speed.toFixed(2);
                document.getElementById("PO").innerHTML="Your power : "+GF.Power.toFixed(2);
                document.getElementById("LI").innerHTML="Deleted Lines : "+GF.Lines;
                document.getElementById("TI").innerHTML="Time : "+GF.Time.toFixed(2)+" seconds";
                document.getElementById("forClose").style.visibility="visible";
                GF.gameOn=false;

            }

        }

    },800);
}
















var GF=new GameField();
GF.context1.translate(-78, 26);

function play() {




    if(GF.gameOn==false){
       GF.gameOn=true;
        Close();
        GF.restart();
        start();
    }else{
        GF.gameOn=false;
    }

}

function Close(){
    document.getElementById("forClose").style.visibility="hidden";
    GF.context.clearRect(0,0,GF.elem.width,GF.elem.height);
    GF.context1.clearRect(0,0,GF.elem.width,GF.elem.height);
}


addEventListener("keydown", function (event) {


    if (event.keyCode == 37 && GF.MinX > 1 && GF.MaxY<GF.BasicY && GF.ConY===0 && GF.ConX[1]!=1 && GF.gameOn==true && GF.onPause==0) {
        GF.moveleftf(GF.context,GF.Fig);
        GF.MinX -= 27;
        GF.MaxX -= 27;
        GF.ConY=GF.contactY(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.ConX=GF.contactX(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.XORDVIZH-=1;
    }
    if(event.keyCode==32 && GF.MaxY<GF.BasicY && GF.ConY===0 && GF.gameOn==true && GF.onPause==0){
        while(GF.ConY===0 && GF.MaxY<GF.BasicY){
            GF.movedownf(GF.context,GF.Fig);
            GF.MaxY += 27;
            GF.ConY=GF.contactY(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
            GF.ConX=GF.contactX(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        }
    }
    if(event.keyCode==81 && GF.ConY===0 && GF.ConX[1]!=1 && GF.ConX[0]!=-1 && GF.gameOn==true && GF.onPause==0){
        var Ax=GF.MaxX-GF.lol2;
        var Ay=GF.MaxY-GF.lol1;
        var OldMaxX=GF.MaxX;
        var OldMinX=GF.MinX;
        var NewF=GF.NextCurFig;
        GF.clearf(GF.context1,GF.NextFig[0]);
        GF.clearf(GF.context,GF.Fig);
        GF.NextCurFig=GF.Figurine;
        GF.NextFig=GF.NextCurFig[0];
        GF.Figurine=NewF;
        GF.Kol=0;
        GF.CurFig=GF.Figurine[0];
        GF.Fig=GF.CurFig[0];
        GF.drawf(GF.context1,GF.NextFig[0]);

        GF.lol1=GF.maxY(GF.Fig);
        GF.lol2=GF.maxX(GF.Fig);
        GF.MaxY=GF.maxY(GF.Fig)+Ay;
        GF.MaxX=GF.maxX(GF.Fig)+Ax;
        GF.MinX=GF.minX(GF.Fig)+Ax;
        if(GF.MaxX-OldMaxX>0 && OldMaxX<=352 && OldMaxX>=324){
            GF.context.translate(OldMaxX-GF.MaxX,0);
            GF.MaxX-=(GF.MaxX-OldMaxX);
            GF.MinX-=(GF.MaxX-OldMaxX);
        }

        if(GF.MinX-OldMinX<0 && OldMinX>=1 && OldMinX<=28){
            GF.context.translate(OldMinX-GF.MinX,0);
            GF.MaxX+=(OldMinX-GF.MinX);
            GF.MinX+=(OldMinX-GF.MinX);
        }
        GF.ConY=GF.contactY(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.ConX=GF.contactX(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.drawf(GF.context,GF.Fig);
        GF.XORDVIZH-=1;
    }
    if(event.keyCode==87 && GF.ConY===0 && GF.ConX[1]!=1 && GF.ConX[0]!=-1 && GF.gameOn==true && GF.onPause==0){
        var Ax=GF.MaxX-GF.lol2;
        var Ay=GF.MaxY-GF.lol1;
        var OldMaxX=GF.MaxX;
        var OldMinX=GF.MinX;
        GF.clearf(GF.context,GF.Fig);
        if( GF.Schetchik>0){
            GF.Schetchik=0;
        }else{
            GF.Schetchik=1;
        }
        GF.CurFig=GF.Figurine[GF.Schetchik];
        GF.Fig=GF.CurFig[GF.Kol];
        GF.lol1=GF.maxY(GF.Fig);
        GF.lol2=GF.maxX(GF.Fig);
        GF.MaxY=GF.maxY(GF.Fig)+Ay;
        GF.MaxX=GF.maxX(GF.Fig)+Ax;
        GF.MinX=GF.minX(GF.Fig)+Ax;
        if(GF.MaxX-OldMaxX>0 && OldMaxX<=352 && OldMaxX>=324){
            GF.context.translate(OldMaxX-GF.MaxX,0);
            GF.MaxX-=(GF.MaxX-OldMaxX);
            GF.MinX-=(GF.MaxX-OldMaxX);
        }

        if(GF.MinX-OldMinX<0 && OldMinX>=1 && OldMinX<=28){
            GF.context.translate(OldMinX-GF.MinX,0);
            GF.MaxX+=(OldMinX-GF.MinX);
            GF.MinX+=(OldMinX-GF.MinX);
        }
        GF.ConY=GF.contactY(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.ConX=GF.contactX(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.drawf(GF.context,GF.Fig);
        GF.XORDVIZH-=1;
    }
    if (event.keyCode == 39 && GF.MaxX < 350 && GF.MaxY<GF.BasicY && GF.ConY===0 && GF.ConX[0]!=-1 && GF.gameOn==true && GF.onPause==0) {
        GF.moverightf(GF.context,GF.Fig);
        GF.MinX += 27;
        GF.MaxX += 27;
        GF.ConY=GF.contactY(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.ConX=GF.contactX(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.XORDVIZH-=1;
    }

    if (event.keyCode == 40 && GF.MaxY < GF.BasicY && GF.ConY===0 && GF.gameOn==true && GF.onPause==0) {
        GF.movedownf(GF.context,GF.Fig);
        GF.MaxY += 27;
        GF.ConY=GF.contactY(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.ConX=GF.contactX(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.XORDVIZH-=1;
    }
    if(event.keyCode==27){
        if(GF.onPause==0){
            document.getElementById('Pause').style.display="block";
            GF.onPause=1;}else{GF.onPause=0; document.getElementById('Pause').style.display="none";}
    }
    if (event.keyCode == 38 && GF.MinX >=1 && GF.MaxX <=352 && GF.MaxY< GF.BasicY && GF.ConX[0]===0 && GF.ConX[1]===0 && GF.ConY===0 && GF.gameOn==true && GF.onPause==0){
        var Ax=GF.MaxX-GF.lol2;
        var Ay=GF.MaxY-GF.lol1;
        var OldMaxX=GF.MaxX;
        var OldMinX=GF.MinX;
        GF.clearf(GF.context,GF.Fig);
        GF.Fig=GF.rotate(GF.CurFig);
        GF.lol1=GF.maxY(GF.Fig);
        GF.lol2=GF.maxX(GF.Fig);
        GF.MaxY=GF.maxY(GF.Fig)+Ay;
        GF.MaxX=GF.maxX(GF.Fig)+Ax;
        GF.MinX=GF.minX(GF.Fig)+Ax;
        if(GF.MaxX-OldMaxX>0 && OldMaxX<=352 && OldMaxX>=324){
            GF.context.translate(OldMaxX-GF.MaxX,0);
            GF.MaxX-=(GF.MaxX-OldMaxX);
            GF.MinX-=(GF.MaxX-OldMaxX);
        }

        if(GF.MinX-OldMinX<0 && OldMinX>=1 && OldMinX<=28){
            GF.context.translate(OldMinX-GF.MinX,0);
            GF.MaxX+=(OldMinX-GF.MinX);
            GF.MinX+=(OldMinX-GF.MinX);
        }
        GF.ConY=GF.contactY(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.ConX=GF.contactX(GF.MaxX-GF.lol2,GF.MaxY-GF.lol1);
        GF.drawf(GF.context,GF.Fig);
        GF.XORDVIZH-=1;
    }
});