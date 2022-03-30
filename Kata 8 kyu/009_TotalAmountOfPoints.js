// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point

// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4 
// 0 <= y <= 4
   

function points(games) {
    // console.log(games.length)
    let points = 0;
    for (let i=0;i<games.length;i++) {
        let g=(games.join(",").split(",")[i].split(":"))
        var j=0
        j+= (Number(g[0])>Number(g[1]))? points+=3 : (Number(g[0])<Number(g[1]))?points+=0 : points+=1
        // (Number(g[0])>Number(g[1]))? points=+3 : (Number(g[0])<Number(g[1]))?points=+0 : points=+1;

    }
    return j;
    
    

}
console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))