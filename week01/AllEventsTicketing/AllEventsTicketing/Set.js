function Set() {
	
	
	this.intersection = function(listA, listB) {
		// copied directly from Br. Jackson's instructions
		var resultList = new Array();
		if(listA === null || listB === null) {
			return null;
		}
		for (var i = 0; i < listA.length; i++) {
			var nextValue = listA[i];
			for (var j = 0; j < listB.length; j++) {
				if (listB[j] === nextValue) {
					resultList.push(listB[j]);
					break;
				}
			}
		}
		return resultList;

	}
    
    
    
	this.union = function(listA, listB) {
		var resultList = new Array();
		if(listA === null || listB === null) {
			return null;
		}
		if (listA.length == 0) {
			return listB;
		}
		if (listB.length == 0){
			return listA;
		}
			
		var temp_array = listA.concat(listB);
		temp_array.sort();
		resultList.push(temp_array[0]);
		for (var i = 1; i < temp_array.length; i++){
			if (temp_array[i - 1] != temp_array[i]) {
				resultList.push(temp_array[i]);
			}
		}
	   
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {
		// it's A - B, so return A without any intersection with B
	   var resultList = new Array();
	   if(listA === null || listB === null) {
			return null;
		}
		if (listA.length == 0) {
			return [];
		}
		if (listB.length == 0){
			return listA;
		}
		
	   var intersect = this.intersection(listA, listB);
	   for (var a = 0; a < listA.length; a++) {
		   var doit = true;
		   for (var i = 0; i < intersect.length; i++) {
			   if ( listA[a] == intersect[i]) {
				   doit = false;
				   break;
			   }
		   }
		   if (doit) {
			   resultList.push(listA[a]);
		   }
	   }
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {
		if(listA === null || listB === null) {
			return null;
		}
		if (listA.length == 0) {
			return listB;
		}
		if (listB.length == 0){
			return listA;
		}
		
		var resultList = new Array();
		var uni = this.union(listA, listB);
		var intersect = this.intersection(listA, listB);
		for (var u = 0; u < uni.length; u++) {
		   var doit = true;
		   for (var i = 0; i < intersect.length; i++) {
			   if ( uni[u] == intersect[i]) {
				   doit = false;
				   break;
			   }
		   }
		   if (doit) {
			   resultList.push(uni[u]);
		   }
		}
		return resultList;
	}	
	

}
