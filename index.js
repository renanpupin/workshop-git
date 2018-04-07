module.exports = class Calculator{

	print(a,b){
		return String("a = "+a, "b = "+b);
	}
	sum(a,b){
		return a+b;
	}

	subtract(a,b){
		return a-b;
	}  
	
	multiply(a,b){
		return a*b;
	}

		
	divide(a,b)
	{
		return ( b == 0 ? String("Division by zero!") : a/b ) ;
	}
	
	sqrt(a,b)
	{
		return Math.pow(a,1/b)
	}
	// implementar as outras funções aqui
}

