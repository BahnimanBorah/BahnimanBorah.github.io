var quotes = [
    'Energies',
    'Evenings',
    'Slowly sinking in this rain',
    'Moonsoon Clouds',
    'Good good evenings'
];
var links = [   
    "https://www.instagram.com/p/BlI-Hp-l_vv/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/Bk7FvA7lxYL/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/BkxpuYAF2JG/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/BkvDneMlh-1/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/Bkrj7TIl656/?taken-by=_bahnimanborah"
];

for(var i=0;i<quotes.length;i++){
    document.write("<p><i class='fa fa-instagram'></i> <a class='text-dark small' href='"+ links[i] +"' class='lead small' target='_blank'>"+quotes[i]+"</a></p>")
}
