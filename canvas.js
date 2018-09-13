var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");


//c.fillStyle = "rgba(255, 0, 0, 0.3)";
//c.fillRect(40, 40, 100, 100);
//c.fillStyle = "rgba(255, 0, 0, 0.4)";
//c.fillRect(110, 190, 100, 100);
//c.fillStyle = "rgba(255, 0, 0, 0.5)";
//c.fillRect(240, 200, 100, 100);
//c.fillStyle = "rgba(255, 0, 0, 0.6)";
//c.fillRect(200, 40, 100, 100);

//line
//c.beginPath();
//c.moveTo(50, 40);
//c.lineTo(100, 90);
//c.strokeStyle = "blue";
//c.stroke();

//arc
/*
c.beginPath();
c.arc(400, 200, 50, 0, Math.PI * 2, true);
c.strokeStyle = "pink";
c.stroke();

for(var i = 0; i < 4; i++)
{
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI * 2, true);
    c.strokeStyle = "rgba(255, 0, 0, 0.5)";
    c.stroke();
}
*/

var mouse = 
{
    x: undefined,
    y: undefined
}

var max_r = 40;
var min_r = 3;

var colorArray = [
    '#893ef5',
    '#389eae',
    '#120332',
    '#452432',
    '#e2344r'
];

window.addEventListener('resize',
    function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
)

window.addEventListener('mousemove',
    function(event)
    {
        mouse.x = event.x;
        mouse.y = event.y;
    });



function Circle(x, y, dx, dy, r)
{
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.color = colorArray[Math.round(Math.random() * colorArray.length)]

    this.draw = function()
    {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function()
    {
        if (this.x > innerWidth - this.r || this.x < this.r)
            this.dx = -this.dx;
        this.x += this.dx;
        if (this.y > innerHeight - this.r || this.y < this.r)
            this.dy = -this.dy;
        this.y += this.dy;
        
        if(mouse.x - this.x < 30 && mouse.x - this.x > -30 && mouse.y - this.y < 30 && mouse.y - this.y > -30)
        {
            if(this.r < max_r)
            {
                this.r += 2;
            }
        }
        else if(this.r > min_r)
        {
            this.r--;
        }
        this.draw();
    }
}



var circleArray = [];

for(var i = 0; i < 1000; i++)
{
    var x = Math.random() * innerWidth + this.r;
    var y = Math.random() * innerHeight + this.r;
    var dx = (Math.random() - 0.5) * 4;
    var dy = (Math.random() - 0.5) * 4;
    var r = 3;// * Math.random();
    circleArray.push(new Circle(x, y, dx, dy, r));
}


function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++)
    {
        circleArray[i].update();
    }
    
}

animate();
