
function rgb(r, g, b){
	let a =[r, g, b]
	let i = 0
	let tb, f
	let bin = ""
	while (i < 3)
	{
		tb = a[i++].toString(2)
		tb = tb + "0".repeat(8 - tb.length)
		bin += tb;
	}
	bin  = bin.split("")
	console.log(bin.join(""))
	tb = ['q','q','q','q','q','q']
	for (i = 0; i < 6; i++)
	{
		f = +bin.splice(bin.length - 4, bin.length).join("")
		tb[5 - i] = parseInt(f, 2).toString(16)
	}
	return (tb)
  }
  console.log(rgb(173,255,47))

