function szamol()
{
    
    var megtakaritas = document.getElementById("megtakaritas").value;
    var ido = document.getElementById("ido").value;
    
    var megTak = megtakaritas * ido * 52;

    if(document.getElementById("kerekpar").checked && megTak >= 100000){
        document.getElementById("eredmeny").innerHTML = "Van elég pénzed";
    }else if(document.getElementById("kerekpar").checked){
        document.getElementById("eredmeny").innerHTML = "Nincs elég pénzed";
    }

    if(document.getElementById("telefon").checked && megTak >= 80000){
        document.getElementById("eredmeny").innerHTML = "Van elég pénzed";
    }else if(document.getElementById("telefon").checked){
        document.getElementById("eredmeny").innerHTML = "Nincs elég pénzed";
    }

    if(document.getElementById("jatekkonzol").checked && megTak >= 150000){
        document.getElementById("eredmeny").innerHTML = "Van elég pénzed";
    }else if(document.getElementById("jatekkonzol").checked){
        document.getElementById("eredmeny").innerHTML = "Nincs elég pénzed";
    }
    
    if(megTak == 0){
        document.getElementById("eredmeny").innerHTML = "Hiányzó adatok";
    }else{
        document.getElementById("eredmeny").innerHTML += " <br><br>" + megTak + " Ft";
    }
    
}