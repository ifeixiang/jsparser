/**
 *  RE parser for cpp files  
 */
function parseFile(source,outputDom)
{
	var rs = "" ;
	var regex = "/<html(*.)>/g" ; 
	rs = source.replace(/<html.*/g,"<html>");
	rs = rs.replace(/<!DOCTYPE html.*/g,"<DOCTYPE html>");
	
	document.getElementById(outputDom).innerHTML = rs ;
}