	var math = Math,
		cos = math.cos,
		cosh = math.cosh,
		sin = math.sin,
		sinh = math.sinh,
		sqrt = math.sqrt,
		abs = math.abs;
		
	//Функции Штумпфа с 0 по 3
	function Stumpf(x, count=4){
		var s = x<0 ? sinh : sin,
			c = x<0 ? cosh : cos,
			x = abs(x),
			y = sqrt(x);
			
		var r = Array(count)
		r[0]= c(y);
		r[1] = s(y)/y;
		var nf = 1; //1/fac(k);
		for(let k=0, len = count-2; k<len; ++k){
			if(k>1){
				nf /= k;
			}
			r[k+2] = (nf - r[k])/x;
		}
		return r;
	};
	
	
	
	module.exports = Stumpf;