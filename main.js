	/*
	document.getElementById('countId').onclick = function (){
		var fishPrice = 120;
		var cokePrice = 40;
		var fishNum = parseInt(document.getElementById('fishNumId').value) * fishPrice;
		var cokeNum = parseInt(document.getElementById('cokeNumId').value) * cokePrice;
		document.getElementById('totalId').textContent = fishNum + cokeNum ;

	}
	*/
	//計算魚排吐司的總價

	var fish = document.getElementById('fishNumId');
	var coke = document.getElementById('cokeNumId');

	document.getElementById('countId').onclick = function (){
		var fishNumber = parseInt(fish.value);
		var cokeNumber = parseInt(coke.value);	
		console.log(typeof(fishNumber));

		if ((isNaN (fishNumber)) || (isNaN (cokeNumber))){
			alert('請輸入數值');
		} else {		
			var total;
			function getFishPrice(num){
				var fishPrice = 150;
				total = fishPrice * num;
				return total;
			}
			var Fish = getFishPrice(parseInt(document.getElementById('fishNumId').value));
			document.getElementById('totalId').textContent = total;
			console.log(Fish);			
		}
	}

	function fishMove(e){
		if (e.target.value == ''){
		alert('請填入數量');
		}
	}

	function cokeMove(e){
		if (e.target.value == ''){
		alert('請填入數量');
		}
	}

	fish.addEventListener('blur',fishMove,false);

	coke.addEventListener('blur',cokeMove,false);



	//計算可樂的總價


	/*
	document.getElementById('countId').onclick = function getNumPrice(fishNum,cokeNum){
		var fishPrice = 120;
		var cokePrice = 40;
		var fishNum = parseInt(document.getElementById('fishNumId').value);
		var cokeNum = parseInt(document.getElementById('cokeNumId').value);	
		var total = fishPrice * fishNum + cokePrice * cokeNum;
		return total;	
	}


		var total;
		function getFishPrice(num){
			var fishPrice = 150;
			total = fishPrice * num;
			return total;
		}
		var Fish = getFishPrice(parseInt(document.getElementById('fishNumId').value));
		document.getElementById('totalId').textContent = total;
		console.log(Fish);
		





	*/