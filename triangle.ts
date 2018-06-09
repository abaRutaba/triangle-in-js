//right triangle

function lTriangle(rows:number)
{
    console.log("left trianlge");
    for(var i:number=1;i<=rows;i++)
    {
        var output:string="";
        for(var j:number=i;j>=1;j--)
        {
            output+="*";
        }
        console.log(output);
    }
    
}
lTriangle(5);


//Simple triangle

function triangle(rows:number)
{
    console.log("Simple trianlge");
    for(var x:number=1;x<=rows;x++)
    {
        var output:string="";
        for(var y:number=rows;y-x>=1;y--)
        {
            output+=" ";
        }
        for(var z:number=x;z>=1;z--)
        {
            output+=" *";
        }
        console.log(output);
    }
}
triangle(5);


function rTriangle(rows:number)
{
    console.log("right triangle");
    for(var i:number=1;i<=rows;i++)
    {
        var output:string="";
        for(var j=1;j<=rows-i;j++)
        {
            output+=" ";
        }
        for(var k=1;k<=i;k++)
        {
            output+="*";
        }
        console.log(output);
    }
}
rTriangle(5);