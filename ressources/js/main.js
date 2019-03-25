	/*
* Bramslo 17
* Devellopeur FullStack
* Dakar - Senegal
* me@bramslo17.online
*/



//Variable Globale
var RegionChoisie = "DK";
//Selection par defaut fixe de l'option français
document.getElementById("choix").selectedIndex = 1;
//Fonction qui redefinie la souce de notre iframe par un nouveau
function montremoi(id , url , elmt ){
	var ElementActive = document.getElementsByClassName("active");
	document.getElementById(id).src = url;
	ElementActive[0].className = ElementActive[0].className.replace("active", "");
	//Implementation d'une classe active sur le parent de l'ancre
	elmt.parentNode.className += " active"; 
		
		if (url.includes("dakar")) {
				RegionChoisie = "DK";
		}else if (url.includes("saintlouis")) {
				RegionChoisie = "SL";
		}else if (url.includes("Ziguinchor")) {
				RegionChoisie = "ZG";
		}

}

//Fontion de recuperation du fichier Xml 
function fichierXML(chemin , setdonnee){
	var requete = new XMLHttpRequest(); 
	requete.open("POST", chemin);
	requete.setRequestHeader("Content-Type", "text/xml");
	requete.onreadystatechange = function (){
		if (requete.readyState === 4 && requete.status === 200) {
			setdonnee(requete.responseXML);
		}
	}
	requete.send();
}

//FONCTION pour l'insertin des données Xml dans le DOM de notre site
 function setdonnee(xml){		
		//FONCTION POUR INSERTION DE DONNEE
		document.getElementById("headtitle").innerHTML = xml.getElementsByTagName('headerData')[0].childNodes[0].nextSibling.innerHTML;
		document.getElementsByTagName('title')[0].innerHTML = xml.getElementsByTagName('headerData')[0].childNodes[0].nextSibling.innerHTML;
		document.getElementsByTagName('a')[0].innerHTML =  xml.getElementsByTagName('menuData')[0].children[0].innerHTML;
	    document.getElementsByTagName('a')[1].innerHTML =  xml.getElementsByTagName('menuData')[0].children[1].innerHTML;
	    document.getElementsByTagName('a')[2].innerHTML =  xml.getElementsByTagName('menuData')[0].children[2].innerHTML;
	    document.getElementsByTagName('footer')[0].firstElementChild.innerHTML = xml.getElementsByTagName('footerData')[0].firstElementChild.innerHTML;
	    document.getElementsByTagName('option')[0].innerHTML=xml.getElementsByTagName('menuData')[0].children[3].innerHTML;
	    document.getElementsByTagName('option')[1].innerHTML=xml.getElementsByTagName('menuData')[0].children[4].innerHTML;
	    document.getElementsByTagName('option')[2].innerHTML=xml.getElementsByTagName('menuData')[0].children[5].innerHTML;
	    document.getElementById('frame').contentWindow.document.getElementsByTagName('p')[0].innerHTML =  xml.getElementsByTagName('contentData')[0].children[1].innerHTML;
	    document.getElementById('frame').contentWindow.document.getElementsByTagName('h2')[0].innerHTML	= xml.getElementsByTagName('contentData')[0].children[0].innerHTML;
	}



//Fonction pour changer le contenu de notre page suivant le choix de langue fait
function VoirSelection(selection){
	var choixLangue=selection.options[selection.selectedIndex].value;
	switch(choixLangue){
			case "wo": 	
					switch(RegionChoisie){
						case "DK" : fichierXML("./ressources/xmlData/Dakar/donneesdusite_wo.xml",setdonnee);
						break;
						case "SL" : fichierXML("./ressources/xmlData/Saintlouis/donneesdusite_wo.xml",setdonnee);
						break;
						case "ZG" : fichierXML("./ressources/xmlData/Ziguinchor/donneesdusite_wo.xml",setdonnee);
						break;
					}
			break;
			case "fr": 
					switch(RegionChoisie){
						case "DK" : fichierXML("./ressources/xmlData/Dakar/donneesdusite_fr.xml",setdonnee);
						break;
						case "SL" : fichierXML("./ressources/xmlData/Saintlouis/donneesdusite_fr.xml",setdonnee);
						break;
						case "ZG" : fichierXML("./ressources/xmlData/Ziguinchor/donneesdusite_fr.xml",setdonnee);
						break;
					}
			break;
			case "en": 
					switch(RegionChoisie){
						case "DK" : fichierXML("./ressources/xmlData/Dakar/donneesdusite_en.xml",setdonnee);
						break;
						case "SL" : fichierXML("./ressources/xmlData/Saintlouis/donneesdusite_en.xml",setdonnee);
						break;
						case "ZG" : fichierXML("./ressources/xmlData/Ziguinchor/donneesdusite_en.xml",setdonnee);
						break;
					}
			break;
	}
}