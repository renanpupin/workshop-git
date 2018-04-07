module.exports = class Calculator{

	print(a,b){
		return String("a = "+a, "b = "+b);
	}

	sum(a,b) {
		return a + b;
	}

	// implementar as outras funções aqui
	subtract(a,b){
		return a-b;
	}

	divide(a,b){
		if (b > 0){
			return a/b;
		} else {
			console.log("ERROR");
		}
	}
}

