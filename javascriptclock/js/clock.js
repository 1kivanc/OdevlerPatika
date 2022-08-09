const input = prompt('Kullanıcı adınız..');
isimAlani = document.querySelector("#myName");
tarihAlani = document.querySelector("#myClock");

tarihAlani.classList.add("text-white");

if (!input){

    isimAlani.innerHTML = "Sayın kullanıcı";

}else{
    isimAlani.innerHTML = `${input}`;
}

function tarihGoster(){

var tarih = new Date();
  var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  let gun =(gunler[tarih.getDay()]);
  let saat = tarih.getHours();
  let dakika = tarih.getMinutes();
  let saniye = tarih.getSeconds();

tarihAlani.innerHTML = `Bugün ${gun} saat ${saat}:${dakika}:${saniye}`; 

}
//her 1 saniyede sayfayı yeniler ve sayfada anlık olarak saniyeyi görebiliriz
setInterval("tarihGoster()", 1000);
