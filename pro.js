var mainImage = document.getElementById("mainImg");
var smallImage = document.getElementsByClassName("small-img");

smallImage[0].onclick = function() {
    mainImage.src = smallImage[0].src;
}
smallImage[1].onclick = function() {
    mainImage.src = smallImage[1].src;
}
smallImage[2].onclick = function() {
    mainImage.src = smallImage[2].src;
}
smallImage[3].onclick = function() {
    mainImage.src = smallImage[3  ].src;
}