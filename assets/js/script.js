// создаем массив цветов
var Color=["mediumpurple","SteelBlue","Black","#734E3A","#794C44","#3C685E","#395336","darkslateblue"];
//работаем с меню игры
function Close(){
    document.getElementById("forClose").style.visibility="hidden";
    context.clearRect(0,0,elem.width,elem.height);
    context1.clearRect(0,0,elem.width,elem.height);
}

var LOCK=0;
//Базовое значение нижней ячейки
BasicY=513;
//переменная для поворта фигуры
var Kol=0;

//переменная определяющая решим игры
var GameRezim=0;

//методы для смены решима игры
function chooseclassic(){
    GameRezim=0;
    document.getElementById("textOfGame").innerHTML="Classic";
}
function chooselines(){
    GameRezim=1;
    document.getElementById("textOfGame").innerHTML="Lines";
}

//все для рейтинга игры
var onPause=0;
var Speed= 0,Points= 0,AllDer= 0,NumOfFigures= 0,Time= 0,BeginTime=0,EndTime= 0,Lines=0;
var Score= 0,XORDVIZH= 0,NODLBCF= 0;
var Exp=0;
var D=0;
var TimeOfGame=0;
var Power=0;
var Schet=0;
var ForTime=['x',0];
var ForPower=['power',0];
var ForSpeed=['speed',0];
var ForScore=['score',0];
var chart = c3.generate({
    bindto: '#ToPower',
    data: {
        x:'x',
        columns: [ForTime,
            ForPower
        ],
        type: 'spline'
    }
});
var chart1 = c3.generate({
    bindto: '#ToSpeed',
    data: {x:'x',
        columns: [ForTime,
            ForSpeed
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
var chart2 = c3.generate({
    bindto: '#ToScore',
    data: {x:'x',
        columns: [ForTime,
            ForScore
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
// создаем массив координат,чтобы потом работать с упавшими фигурами
var AllMass=[];

//функция целочисленного рандома
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//рисуем фигуру
function drawf(context,figure){
    for(var i=0;i<figure.length;i++)
        context.fillRect(figure[i][0],figure[i][1], 26, 26);
}
// очищаем фигуру
function clearf(context,figure){
    for(var i=0;i<figure.length;i++)
        context.clearRect(figure[i][0],figure[i][1], 26, 26);
}
//двигаем фигуру вниз
function movedownf(context,figure){
    clearf(context,figure);
    context.translate(0,27);
    drawf(context,figure);
}
//двигаем фигуру влево
function moveleftf(context,figure){
    clearf(context,figure);
    context.translate(-27,0);
    drawf(context,figure);
}
//двигаем фигуру вправо
function moverightf(context,figure){
    clearf(context,figure);
    context.translate(27,0);
    drawf(context,figure);
}
// находим максимум Y фигуры
function maxY(figure){
    max=figure[0][1];
    for(var i=1;i<figure.length;i++)
        if(max<figure[i][1])
        {max=figure[i][1];}
    return max;
}
// находим максимум X фигуры
function maxX(figure){
    max=figure[0][0];
    for(var i=1;i<figure.length;i++)
        if(max<figure[i][0])
        {max=figure[i][0];}
    return max;
}
// находим минимум X фигуры
function minX(figure){
    min=figure[0][0];
    for(var i=1;i<figure.length;i++)
        if(min>figure[i][0])
        {min=figure[i][0];}
    return min;
}
//находим минимум Y в фигуре
function minY(figure){
    var min=figure[0][1];
    for(var i=1;i<figure.length;i++)
        if(min>figure[i][1])
        {min=figure[i][1];}
    return min;
}
//функция добавления координат в наш массив всех координат
function AddToAllMass(figure,x,y){
    for (var i=0;i<figure.length;i++){
        X=figure[i][0]+x;
        Y=figure[i][1]+y;
        AllMass.push([X,Y]);
    }
}
//проверка на касание по Y
function contactY(Figure,x,y){
    var RES=0;
    for(var i=Figure.length-1;i>=0;i--){
        for(var j=AllMass.length-1;j>=0;j--)
        {
            if(Figure[i][0]+x===AllMass[j][0] && Figure[i][1]+y-AllMass[j][1]===-27){
                RES=1;
            }
        }

    }
    return RES;
}
//проверка на касание по X
function contactX(Figure,x,y){
    var RES=[0,0];
    for(var i=Figure.length-1;i>=0;i--) {
        for (var j = AllMass.length - 1; j >= 0; j--) {
            if (Figure[i][1] + y === AllMass[j][1] && Figure[i][0] + x - AllMass[j][0] === -27) {
                RES[0] = -1;
            }
            if (Figure[i][1] + y === AllMass[j][1] && Figure[i][0] + x - AllMass[j][0] === 27) {
                RES[1] = 1;
            }
        }

    }
    return RES;
}
//удаление заполненной строки
function Deletef(context,max,min){
    context.clearRect(0,0,elem.width,elem.height);
    var y=max;
    while(y>=min && y<=max){
        var R=0;
        for(var i=0;i<AllMass.length;i++){
            if(AllMass[i][1]==y){
                R++;
            }
        }

        if(R===14){

            for(var i=0;i<AllMass.length;i++){
                if(AllMass[i][1]==y){
                    AllMass.splice(i,1);
                    i-=1;
                }
            }

            for(var i=0;i<AllMass.length;i++){
                if(AllMass[i][1]<y){
                    AllMass[i][1]+=27;
                }
            }

            y+=27;
            Exp+=15;
            Points+=15;
            NODLBCF+=1;
            Lines+=1;
        }

        y-=27;
    }
    drawf(context,AllMass);
}
//функция поворота
function rotate(Figurine){

    if(Kol+1==Figurine.length){
        Kol=0;
    }else{Kol++;}
    var K=Figurine[Kol];
    return K;
}

//функция зеркалирования
function Miracle(Figurine){

}
//конец игры
function engG(){
    var K=0;
    for(var x=109;x<190;x++){
        for(var i=0;i<AllMass.length;i++){
            if(AllMass[i][0]==x && AllMass[i][1]==55){
                K++;
            }
        }
    }
    return K;
}
//создаем фигуру
function BeginFigure(){
    var Num=getRandomInt(0,11);
    var Figurine=Mass[Num];
    return Figurine;
}
//создаем цвет
function color(){
    var Col=getRandomInt(0,Color.length-1);
    var K=Color[Col];
    return K;
}
//показываем следующую фигуру
var R=0; var FF=[];
function DRAWFIGURE(context1,figure){



    if(FF.length>0) {
        for (var i = 0; i < FF.length; i++)
            context1.clearRect(FF[i][0], FF[i][1], 26, 26);
    }
    FF=figure[0];

    if(R==0) {
        context1.translate(-78, 26);
        R=1;
    }

    for(var i=0;i<FF.length;i++)
        context1.fillRect(FF[i][0],FF[i][1], 26, 26);
}



var elem1 = document.getElementById('SNF');
var context1 = elem1.getContext('2d');
var elem = document.getElementById('myCanvas');
var context = elem.getContext('2d');

var Figurine;
var CurFig;
var Fig;
var Schetchik;



var lol1;
var lol2;
var MaxY;
var MaxX
var MinX;
var ConY;
var ConX;
var ResEnd;

addEventListener("keydown", function (event) {


    if (event.keyCode == 37 && MinX > 1 && MaxY<BasicY && ConY===0 && ConX[1]!=1 && gameOn==true && onPause==0) {
        moveleftf(context,Fig);
        MinX -= 27;
        MaxX -= 27;
        ConY=contactY(Fig,MaxX-lol2,MaxY-lol1);
        ConX=contactX(Fig,MaxX-lol2,MaxY-lol1);
        XORDVIZH-=1;
    }
    if(event.keyCode==32 && MaxY<BasicY && ConY===0 && gameOn==true && onPause==0){
        while(ConY===0 && MaxY<BasicY){
            movedownf(context,Fig);
            MaxY += 27;
            ConY=contactY(Fig,MaxX-lol2,MaxY-lol1);
            ConX=contactX(Fig,MaxX-lol2,MaxY-lol1);
        }
    }
    if(event.keyCode==81 && ConY===0 && ConX[1]!=1 && ConX[0]!=-1 && gameOn==true && onPause==0){
        var Ax=MaxX-lol2;
        var Ay=MaxY-lol1;
        var OldMaxX=MaxX;
        var OldMinX=MinX;
        var NewF=NextCurFig;
        clearf(context,Fig);
        NextCurFig=Figurine;
        NextFig=NextCurFig[0];
        Figurine=NewF;
        Kol=0;
        CurFig=Figurine[0];
        Fig=CurFig[0];
        DRAWFIGURE(context1,NextFig);

        lol1=maxY(Fig);
        lol2=maxX(Fig);
        MaxY=maxY(Fig)+Ay;
        MaxX=maxX(Fig)+Ax;
        MinX=minX(Fig)+Ax;
        if(MaxX-OldMaxX>0 && OldMaxX<=352 && OldMaxX>=324){
            context.translate(OldMaxX-MaxX,0);
            MaxX-=(MaxX-OldMaxX);
            MinX-=(MaxX-OldMaxX);
        }

        if(MinX-OldMinX<0 && OldMinX>=1 && OldMinX<=28){
            context.translate(OldMinX-MinX,0);
            MaxX+=(OldMinX-MinX);
            MinX+=(OldMinX-MinX);
        }
        ConY=contactY(Fig,MaxX-lol2,MaxY-lol1);
        ConX=contactX(Fig,MaxX-lol2,MaxY-lol1);
        drawf(context,Fig);
        XORDVIZH-=1;
    }
    if(event.keyCode==87 && ConY===0 && ConX[1]!=1 && ConX[0]!=-1 && gameOn==true && onPause==0){
        var Ax=MaxX-lol2;
        var Ay=MaxY-lol1;
        var OldMaxX=MaxX;
        var OldMinX=MinX;
        clearf(context,Fig);
        if( Schetchik>0){
            Schetchik=0;
        }else{
            Schetchik=1;
        }
        CurFig=Figurine[Schetchik];
        Fig=CurFig[Kol];
        lol1=maxY(Fig);
        lol2=maxX(Fig);
        MaxY=maxY(Fig)+Ay;
        MaxX=maxX(Fig)+Ax;
        MinX=minX(Fig)+Ax;
        if(MaxX-OldMaxX>0 && OldMaxX<=352 && OldMaxX>=324){
            context.translate(OldMaxX-MaxX,0);
            MaxX-=(MaxX-OldMaxX);
            MinX-=(MaxX-OldMaxX);
        }

        if(MinX-OldMinX<0 && OldMinX>=1 && OldMinX<=28){
            context.translate(OldMinX-MinX,0);
            MaxX+=(OldMinX-MinX);
            MinX+=(OldMinX-MinX);
        }
        ConY=contactY(Fig,MaxX-lol2,MaxY-lol1);
        ConX=contactX(Fig,MaxX-lol2,MaxY-lol1);
        drawf(context,Fig);
        XORDVIZH-=1;
    }
    if (event.keyCode == 39 && MaxX < 350 && MaxY<BasicY && ConY===0 && ConX[0]!=-1 && gameOn==true && onPause==0) {
        moverightf(context,Fig);
        MinX += 27;
        MaxX += 27;
        ConY=contactY(Fig,MaxX-lol2,MaxY-lol1);
        ConX=contactX(Fig,MaxX-lol2,MaxY-lol1);
        XORDVIZH-=1;
    }

    if (event.keyCode == 40 && MaxY < BasicY && ConY===0 && gameOn==true && onPause==0) {
        movedownf(context,Fig);
        MaxY += 27;
        ConY=contactY(Fig,MaxX-lol2,MaxY-lol1);
        ConX=contactX(Fig,MaxX-lol2,MaxY-lol1);
        XORDVIZH-=1;
    }
    if(event.keyCode==27){
        if(onPause==0){
            document.getElementById('Pause').style.display="block";
            onPause=1;}else{onPause=0; document.getElementById('Pause').style.display="none";}
    }
    if (event.keyCode == 38 && MinX >=1 && MaxX <=352 && MaxY< BasicY && ConX[0]===0 && ConX[1]===0 && ConY===0 && gameOn==true && onPause==0){
        var Ax=MaxX-lol2;
        var Ay=MaxY-lol1;
        var OldMaxX=MaxX;
        var OldMinX=MinX;
        clearf(context,Fig);
        Fig=rotate(CurFig);
        lol1=maxY(Fig);
        lol2=maxX(Fig);
        MaxY=maxY(Fig)+Ay;
        MaxX=maxX(Fig)+Ax;
        MinX=minX(Fig)+Ax;
        if(MaxX-OldMaxX>0 && OldMaxX<=352 && OldMaxX>=324){
            context.translate(OldMaxX-MaxX,0);
            MaxX-=(MaxX-OldMaxX);
            MinX-=(MaxX-OldMaxX);
        }

        if(MinX-OldMinX<0 && OldMinX>=1 && OldMinX<=28){
            context.translate(OldMinX-MinX,0);
            MaxX+=(OldMinX-MinX);
            MinX+=(OldMinX-MinX);
        }
        ConY=contactY(Fig,MaxX-lol2,MaxY-lol1);
        ConX=contactX(Fig,MaxX-lol2,MaxY-lol1);
        drawf(context,Fig);
        XORDVIZH-=1;
    }
});

var NextFig,NextCurFig;
function start(){
    //Учитываем рейтинг
    NumOfFigures+=1;
    BeginTime=new Date;
    XORDVIZH=5;
    NODLBCF=0;
    Exp=0;
    D=0;
    //


    Schetchik=0;
    Kol=0;
    NextCurFig=BeginFigure();
    NextFig=NextCurFig[0];
    DRAWFIGURE(context1,NextFig);
    drawf(context,Fig);
    lol1=maxY(Fig);
    lol2=maxX(Fig);
    MaxY=maxY(Fig);
    MaxX=maxX(Fig);
    MinX=minX(Fig);
    ConY=contactY(Fig,MaxX-lol2,MaxY-lol1);
    ConX=0;
    ResEnd=0;




    var  Res=setInterval(function() {
        if (MaxY < BasicY && ConY === 0 && gameOn==true && onPause==0) {
            movedownf(context, Fig);
            MaxY += 27;
            ConY = contactY(Fig, MaxX - lol2, MaxY - lol1);
            ConX = contactX(Fig, MaxX - lol2, MaxY - lol1);

        }else if(onPause==1){
            if(gameOn==false) {
                onPause=1;
                context.translate(lol2 - MaxX, lol1 - MaxY);

                clearInterval(Res);
                setTimeout(function(){ play();},1200);
            }
        }
        else {
            clearInterval(Res);
            context.translate(lol2 - MaxX, lol1 - MaxY);
            AddToAllMass(Fig, MaxX - lol2, MaxY - lol1);
            Deletef(context,MaxY,minY(Fig)+MaxY-lol1);
            ResEnd = engG();

            //считаем скорость,очки и мощность
            if (Speed > 0) {
                Schet = 1;
            }
            EndTime = new Date;
            Time = (EndTime - BeginTime) / 1000;
            AllDer = NumOfFigures;
            Speed = Points / AllDer;
            if (XORDVIZH < 5) {
                D = 1;
            }
            if (XORDVIZH < 0) {
                XORDVIZH = 1;
            }
            if (Schet == 1) {
                Score += Math.round(Speed * ((XORDVIZH + NODLBCF) / Time + Exp) * D);
            }
            else {
                Score += ((XORDVIZH + NODLBCF) + Exp) * D;
            }
            Time = (EndTime - TimeOfGame) / 1000;
            Power = Score / Time;
            ForTime.push(Time.toFixed(2));
            ForPower.push(Power.toFixed(2));
            ForSpeed.push(Speed.toFixed(2));
            ForScore.push(Score.toFixed(2));
            chart = c3.generate({
                bindto: '#ToPower',
                data: {
                    x: 'x',
                    columns: [ForTime,
                        ForPower
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
            chart1 = c3.generate({
                bindto: '#ToSpeed',
                data: {
                    x: 'x',
                    columns: [ForTime,
                        ForSpeed
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
            chart2 = c3.generate({
                bindto: '#ToScore',
                data: {
                    x: 'x',
                    columns: [ForTime,
                        ForScore
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
            Sp.innerHTML = "speed: " + Speed.toFixed(2);
            var Sc = document.getElementById('kek');
            Sc.innerHTML = "score: " + Score;
            var P = document.getElementById('power');
            P.innerHTML = "power: " + Power.toFixed(2);
            var L = document.getElementById('lines');
            L.innerHTML = "lines: " + Lines;
            var T=document.getElementById('time');
            T.innerHTML="time: "+ Time.toFixed(2);
            //
            if (ResEnd == 0 && (GameRezim==0 || GameRezim==1 && Lines<20) && gameOn==true) {

                Figurine = NextCurFig;
                CurFig = Figurine[0];
                Fig = CurFig[0];
                start();
            }else if(gameOn==false) {
                onPause=1;
                setTimeout(function(){ play();},1200);
            }
            else {
                document.getElementById("SC").innerHTML="Your score : "+Score;
                document.getElementById("SP").innerHTML="Your speed : "+Speed.toFixed(2);
                document.getElementById("PO").innerHTML="Your power : "+Power.toFixed(2);
                document.getElementById("LI").innerHTML="Deleted Lines : "+Lines;
                document.getElementById("TI").innerHTML="Time : "+Time.toFixed(2)+" seconds";
                document.getElementById("forClose").style.visibility="visible";
                gameOn=false;

            }

        }

    },800);
}
function obnulit(){
    //обнуляем рейтинг
    context.clearRect(0,0,elem.width,elem.height);
    Speed= 0,Points= 0,AllDer= 0,NumOfFigures= 0,Time= 0,BeginTime=0,EndTime=0;Lines=0;
    Score= 0,XORDVIZH= 0,NODLBCF= 0;
    Exp=0;Power=0;
    TimeOfGame=new Date;
    Schet=0;
    ForTime=['x',0];
    ForPower=['power',0];
    ForSpeed=['speed',0];
    ForScore=['score',0];
    chart = c3.generate({
        bindto: '#ToPower',
        data: {
            x:'x',
            columns: [ForTime,
                ForPower
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
    chart1 = c3.generate({
        bindto: '#ToSpeed',
        data: {
            x:'x',
            columns: [ForTime,
                ForSpeed
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
    chart2 = c3.generate({
        bindto: '#ToScore',
        data: {
            x:'x',
            columns: [ForTime,
                ForScore
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
    var Color=color();
    context.fillStyle =Color;
    context1.fillStyle =Color;
    Figurine=BeginFigure();
    CurFig=Figurine[0];
    Fig=CurFig[0];

    AllMass=[];
    var Sp = document.getElementById('speed');
    Sp.innerHTML = "speed: " + Speed.toFixed(2);
    var Sc = document.getElementById('kek');
    Sc.innerHTML = "score: " + Score;
    var P = document.getElementById('power');
    P.innerHTML = "power: " + Power.toFixed(2);
    var L = document.getElementById('lines');
    L.innerHTML = "lines: " + Lines;
    var T=document.getElementById('time');
    T.innerHTML="time:"+Time;
    onPause=0;
    document.getElementById('Pause').style.display="none";
}
//начало игры
var gameOn=false;
function play(){
    if(gameOn==false){
        gameOn=true;
        Close();
        obnulit();
        start();
    }else{
        gameOn=false;
    }
}
/**
 * Created by Alex on 11.04.2017.
 */
