
document.getElementById("form").addEventListener("submit", function(e){
    var name = document.getElementById("name").value;
    var telepon = document.getElementById("telepon").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;
    
    e.preventDefault();
    
    document.getElementById("alert-name").innerHTML = "";
    document.getElementById("alert-telepon").innerHTML = "";
    document.getElementById("alert-email").innerHTML = "";
    document.getElementById("alert-pesan").innerHTML = "";
    
    if(name == "")
    {    
        document.getElementById("alert-name").innerHTML = "Nama harus ada!";
        return;
    }else if(name.length < 3) 
    {
        document.getElementById("alert-name").innerHTML = "Nama harus minimal 3 kata!";
        return;
    }
    
    if(telepon == "") 
    {
        document.getElementById("alert-telepon").innerHTML = "Nomor telepon harus ada!";
        return;
    }else if(telepon[0] != '0' || telepon[1] != '8')  
    {
        document.getElementById("alert-telepon").innerHTML = "Nomor telepon harus dimulai dari '08'!";
        return;
    }
    
    if(email == "") 
    {
        document.getElementById("alert-email").innerHTML = "Email harus ada!";
        return;
    }else if(email.length < 3) 
    {
        document.getElementById("alert-email").innerHTML = "Email harus minimal 3 kata!";
        return;
    }else if(email.search('@') < 0) 
    {
        document.getElementById("alert-email").innerHTML = "Email harus memiliki satu '@'!";
        return;
    }else if(email.search(".com") < 0) 
    {
        document.getElementById("alert-email").innerHTML = "Email harus memiliki '.com'!";
        return;
    }
    
    if(pesan == "") 
    {
        document.getElementById("alert-pesan").innerHTML = "Pesan harus ada!";
        return;
    }else if(pesan.length < 3) 
    {
        document.getElementById("alert-pesan").innerHTML = "Pesan harus minimal 3 kata!";
        return;
    }
    document.getElementById("form").submit();

});