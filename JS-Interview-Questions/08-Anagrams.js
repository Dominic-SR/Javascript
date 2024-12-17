const areAnagrams = (str1,str2) ={
 str1 = str1.replace('/\s+/g','').toLowerCase();
 str2 = str2.replace("/\s+/g",'').toLowerCase();

 if(str1.lemgth != str2.length){
	return false;
 }

}
let result = areAnagrams();
