var quotes = [
    'Travelling is one of the best things I\'ve ever been a part of. I\'ve learned very much while travelling, seeing things and understanding stories without having to put a word out from the mouth. Here\'s a video dedicated to National Expressway 1',
    'Diwali is always about fun. Without fun it\'s definitely not diwali for me.',
];
var links = [   
    "https://www.youtube.com/watch?v=dRScoyCaFBY",
    "https://www.youtube.com/watch?v=pluWaVmLoVo"
];
for(var i=0;i<quotes.length;i++){
    document.write("<p><i class='text-danger fa fa-youtube'></i> <a class='text-dark small' href='"+ links[i] +"' class='lead small' target='_blank'>"+quotes[i]+"</a></p>")
}
