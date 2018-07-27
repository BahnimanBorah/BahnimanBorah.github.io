var quotes = [
    'Energies',
    'Evenings',
    'Slowly sinking in this rain',
    'Moonsoon clouds',
    'Good good evenings',
    'Common Experiences',
    'I heard the nature',
    'Love for food'
];
var links = [   
    "https://www.instagram.com/p/BlI-Hp-l_vv/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/Bk7FvA7lxYL/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/BkxpuYAF2JG/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/BkvDneMlh-1/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/Bkrj7TIl656/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/Blh06vhl9K5/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/BllFL41FGfh/?taken-by=_bahnimanborah",
    "https://www.instagram.com/p/Bj9KBKiliZ-/?taken-by=_bahnimanborah"
];

for(var i=quotes.length-1;i>0;i--){
    document.write("<p><i class='text-info fa fa-instagram'></i> <a class='text-light lead' style='font-size:15px' href='"+ links[i] +"' class='lead small' target='_blank'>"+quotes[i]+"</a></p>")
}
