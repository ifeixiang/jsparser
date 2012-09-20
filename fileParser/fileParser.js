/**
 *  RE parser for cpp files  
 */

function html5Parser(source,outputDom)
{
	var source = document.getElementById("source").innerHTML;
	var outputDom = document.getElementById("result"); 
	var rs = "" ;
	rs = source.replace(/<html.*/g,"<html>");
	rs = rs.replace(/<!DOCTYPE html.*/g,"<DOCTYPE html>");
	
	outputDom.innerHTML = rs ;
}

function cppParser()
{
	var source = document.getElementById("source").innerHTML;
	var outputDom = document.getElementById("result"); 
	var rs = "" ;
	rs = source.replace(/LPCSTR/g,"LPCTSTR");
	rs = rs.replace(/LPSTR/g,"LPTSTR");
	rs = rs.replace(/str(cmp|cpy)/g,"_tcs$1");
	rs = rs.replace(/a(toi|tof)/g,"_ts$1");
	rs = rs.replace(/(s|vs)(printf)/g,"_$1t$2");
	rs = rs.replace(/vsbprintf/g,"_vstnprintf");
	rs = rs.replace(/(string|ifstream)/g,"w$1");
	
	
	outputDom.innerHTML = rs ;
}


function forFubang()
{
	var source = document.getElementById("source").innerHTML;
	var outputDom = document.getElementById("result"); 
	var rs = "" ;
	rs = source.replace(/W|D|H|L|\*/g,"   ");
	outputDom.innerHTML = rs ;
}