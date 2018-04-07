module.exports = class Calculator{

	print(a,b){
		return String("a = "+a, "b = "+b);
	}

	subtract(a,b){
		return (a-b);
	}

	sum(a,b){
		return a+b;
	}
	
	divide (a,b){
		if(b != 0)
			return a/b;
		else return error;
	}
	// implementar as outras funções aqui
}

