//<![CDATA[
var pokesarray, ShinysMegasArray, efetividadeArray, ballsArray, ballsArrayVarPrice, mediasArray, lootsArray, movesArray, text, fLen, fLen2, fLen3, i, j, k, l, array, array2, array3, m;

pokesarray = [

///////// INICIO GERACAO 1
 {nome:"Bulbasaur", numero:1, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Malefic", tipo1:"Grama", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Ivysaur", evo2:"Venusaur", npreevo2:"no", npreevo1:"no", nevo1:"2", nevo2:"3", 
 mapas: '"top":27,"left":43,"text":"Jungle Island - (VIP)";"top":31,"left":73,"text":"Lost Island - (VIP)";"top":84,"left":35,"text":"Mandarin - Próximo ao deserto (FREE)"',  
 vip: "no", 
 moves:"Tackle-20,Razor leaf-20,Vine whip-20,Headbutt-20,Leech seed-20,Solar beam-26,Sleep powder-28,Stun spore-26,Poison powder-24,", loots:"(1-1)//bulb--RARO,(1-5)//seed--80.0%,(1-5)//bottle of poison--80.0%,(1-1)//leaves--26.0%,(1-1)//bag of pollem--6.0%,", evoStone:"Leaf stone", boost:"10", booStone:"Leaf stone", habilidades:"Cut, Headbutt"},
 {nome:"Ivysaur", numero:2, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Naturia", clan2:"Malefic", tipo1:"Grama", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Bulbasaur", evo1:"Venusaur", evo2:"no", npreevo2:"no", npreevo1:"1", nevo1:"3", nevo2:"no", 
 mapas: '"top":27,"left":43,"text":"Jungle Island - (VIP)";"top":15,"left":40,"text":"Green Island - (VIP)";"top":31,"left":73,"text":"Lost Island - (VIP)";"top":84,"left":35,"text":"Mandarin - Próximo ao deserto (FREE)"',  
 vip: "no", 
 moves:"Tackle-40,Razor leaf-40,Vine whip-40,Headbutt-40,Leech seed-40,Bullet seed-45,Solar beam-48,Giga drain-45,Sleep powder-44,Poison powder-40,", loots:"(1-1)//bulb--2.0%,(1-10)//seed--80.0%,(1-10)//bottle of poison--80.0%,(1-1)//Leaf stone--Raro,(1-1)//Venom stone--Raro,(1-1)//leaves--32.0%,(1-1)//bag of pollem--12.0%,", evoStone:"Leaf stone (x2)", boost:"7", booStone:"Leaf stone", habilidades:"Cut, Headbutt"},
 {nome:"Venusaur", numero:3, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Naturia", clan2:"Malefic", tipo1:"Grama", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",  shiny:"yes", fast:"no", heavy:"yes", preevo2:"Bulbasaur", preevo1:"Ivysaur", evo1:"no", evo2:"no", npreevo2:"1", npreevo1:"2", nevo1:"no", nevo2:"no", 
 mapas: '"top":27,"left":43,"text":"Jungle Island - (VIP)";"top":15,"left":40,"text":"Green Island - (VIP)";"top":31,"left":73,"text":"Lost Island - (VIP)";"top":84,"left":35,"text":"Mandarin - Próximo ao deserto (FREE)";"top":3,"left":11,"text":"Outland north - saída da direita (VIP)"',  
 vip: "no", 
 moves:"Tackle-80,Razor leaf-80,Vine whip-80,Headbutt-80,Leech seed-80,Bullet seed-80,Solar beam-80,Giga drain-85,Sleep powder-80,Poison powder-80,Leaf storm-90,Thick fat-Passiva,", loots:"(1-1)//bulb--4.3% (38.3%),(1-21)//seed--80.0%,(1-21)//bottle of poison--80.0%,(1-1)//leaves--45.5% (91.0%),(1-1)//bag of pollem--25.5% (51.0%),(1-1)//Leaf stone--Raro,(1-1)//Venom stone--Raro,", evoStone:"", boost:"3", booStone:"Leaf stone", habilidades:"Cut, Ride, Headbutt"},

 {nome:"Charmander", numero:4, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Charmeleon", evo2:"Charizard", npreevo2:"no", npreevo1:"no", nevo1:"5", nevo2:"6", 
 mapas:'"top":12,"left":31,"text":"Charizard Valley - (VIP)";"top":32,"left":37,"text":"Cinnabar Island - (VIP)"', 
 vip: "yes",  
 moves:"Scratch-20,Ember-20,Flamethrower-20,Fireball-24,Fire fang-22,Fire blast-26,Rage-28,", loots:"(1-1)//fire tail--Raro,(1-10)//essence of fire--80.0%,(1-1)//pot of lava--16.0%,", evoStone:"Fire stone", boost:"10", booStone:"Fire stone", habilidades:"Cut, Headbutt"},
 {nome:"Charmeleon", numero:5, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Charmander", evo1:"Charizard", evo2:"no", npreevo2:"no", npreevo1:"4", nevo1:"6", nevo2:"no", 
 mapas:'"top":12,"left":31,"text":"Charizard Valley - (VIP)";"top":32,"left":37,"text":"Cinnabar Island - (VIP)"', 
 vip: "yes", 
 moves:"Scratch-40,Ember-40,Flamethrower-40,Fireball-40,Fire fang-40,Flame burst-45,Fire blast-48,Rage-40,", loots:"(1-1)//fire tail--2.0%,(1-20)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--22.0%,", evoStone:"Fire stone (x2)", boost:"7", booStone:"Fire stone", habilidades:"Cut, Headbutt"},
 {nome:"Charizard", numero:6, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Volcanic", clan2:"Wingeon", tipo1:"Fogo", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"Charmander", preevo1:"Charmeleon", evo1:"no", evo2:"no", npreevo2:"4", npreevo1:"5", nevo1:"no", nevo2:"no", 
 mapas:'"top":6,"left":12,"text":"Outland South (saida norte) ou Outland East (Saída da esquerda) - (VIP)";"top":12,"left":31,"text":"Charizard Valley - (VIP)";"top":32,"left":37,"text":"Cinnabar Island - (VIP)"', 
 vip: "yes", 
 moves:"Ember-80,Flamethrower-80,Fireball-80,Fire fang-80,Flame burst-80,Fire blast-80,Air slash-83,Wing attack-85,Magma storm-90,Scary face-82,Ancient fury-87,", loots:"(1-1)//fire tail--4.3% (21.3%),(1-21)//essence of fire--80.0%,(1-21)//straw--80%,(1-1)//Fire stone--Raro,(1-1)//Feather stone--Raro,(1-1)//pot of lava--35.5% (71.0%),(1-1)//dragon tooth--Raro,", evoStone:"", boost:"3", booStone:"Fire stone", habilidades:"Fly, Cut, Headbutt"},

 {nome:"Squirtle", numero:7, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Wartortle", evo2:"Blastoise", npreevo2:"no", npreevo1:"no", nevo1:"8", nevo2:"9", 
 mapas:'"top":16,"left":62,"text":"Shell Island - (VIP)";"top":23,"left":42,"text":"Tropical Island - (VIP)";"top":74,"left":52,"text":"Kinnow Island - (VIP)"', 
 vip: "yes", 
 moves:"Headbutt-20,Bubbles-20,Water gun-20,Waterball-24,Aqua tail-22,Hidro cannon-26,Harden-28,", loots:"(1-1)//Squirtle hull--Raro,(1-10)//water gem--80.0%,(1-1)//water pendant--21.0%,", evoStone:"Water stone", boost:"10", booStone:"Water stone", habilidades:"Surf, Headbutt"},
 {nome:"Wartortle", numero:8, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Squirtle", evo1:"Blastoise", evo2:"no", npreevo2:"no", npreevo1:"7", nevo1:"9", nevo2:"no", 
 mapas:'"top":16,"left":62,"text":"Shell Island - (VIP)";"top":23,"left":42,"text":"Tropical Island - (VIP)";"top":74,"left":52,"text":"Kinnow Island - (VIP)"', 
 vip: "yes", 
 moves:"Headbutt-40,Bubbles-40,Water gun-40,Waterball-40,Aqua tail-40,Brine-45,Hidro cannon-48,Skull bash-45,Harden-40,", loots:"(1-1)//Squirtle hull--2.0%,(1-20)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--27.0%,", evoStone:"Water stone (x2)", boost:"7", booStone:"Water stone", habilidades:"Surf, Headbutt"},
 {nome:"Blastoise", numero:9, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"Squirtle", preevo1:"Wartortle", evo1:"no", evo2:"no", npreevo2:"7", npreevo1:"8", nevo1:"no", nevo2:"no", 
 mapas:'"top":1,"left":10,"text":"Outland North - Saída norte (VIP)";"top":16,"left":62,"text":"Shell Island - (VIP)";"top":23,"left":42,"text":"Tropical Island - (VIP)";"top":74,"left":52,"text":"Kinnow Island - (VIP)"', 
 vip: "yes", 
 moves:"Headbutt-80,Bubbles-80,Water gun-80,Waterball-80,Water pulse-80,Brine-80,Hidro cannon-80,Skull bash-85,Hydropump-90,Harden-80,", loots:"(1-1)//Squirtle hull--4.3% (68.0%),(1-20)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--40.5% (81.0%),", evoStone:"", boost:"3", booStone:"Water stone", habilidades:"Surf, Headbutt"},
 
 {nome:"Caterpie", numero:10, level:1, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Nenhum", tipo1:"Inseto", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"500", pricenpc:"5",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Metapod", evo2:"Butterfree", npreevo2:"no", npreevo1:"no", nevo1:"11", nevo2:"12", 
 mapas:'"top":22,"left":36,"text":"Floresta de Viridian - (FREE)";"top":24,"left":52,"text":"Floresta de Vermilion - (FREE)";"top":23,"left":56,"text":"Floresta de Lavender - (FREE)";"top":82,"left":76,"text":"Murcott Island - (VIP)"', 
 vip: "no", 
 moves:"Headbutt-1,String shot-1,Bug bite-1,", loots:"(1-1)//butterfly wing--Raro,(1-5)//bug gosme--80.0%,(1-1)//pot of moss bug--15.3%,", evoStone:"Cocoon stone", boost:"30", booStone:"Cocoon stone", habilidades:""},
 {nome:"Metapod", numero:11, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Nenhum", tipo1:"Inseto", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"250",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Caterpie", evo1:"Butterfree", evo2:"no", npreevo2:"no", npreevo1:"10", nevo1:"12", nevo2:"no", 
 mapas:'"top":22,"left":36,"text":"Floresta de Viridian - (FREE)";"top":24,"left":52,"text":"Floresta de Vermilion - (FREE)";"top":23,"left":56,"text":"Floresta de Lavender - (FREE)";"top":82,"left":76,"text":"Murcott Island - (VIP)"', 
 vip: "no", moves:"String shot-10,Headbutt-10,Harden-10,Bug bite-10,", loots:"(1-1)//butterfly wing--2.1%,(1-5)//bug gosme--80.0%,(1-1)//pot of moss bug--19.5%,", evoStone:"Cocoon stone (x2)", boost:"15", booStone:"Cocoon stone", habilidades:""},
 {nome:"Butterfree", numero:12, level:30, ball1:"Greatball", ball2:"Superball", clan1:"Naturia", clan2:"Wingeon", tipo1:"Inseto", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"2000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"Caterpie", preevo1:"Metapod", evo1:"no", evo2:"no", npreevo2:"10", npreevo1:"11", nevo1:"no", nevo2:"no", 
 mapas:'"top":23,"left":37,"text":"Floresta de Viridian - (FREE)";"top":31,"left":44,"text":"Ilha a direita de cinnabar - (VIP)";"top":86,"left":44,"text":"Floresta de Mandarin - (FREE)";"top":84,"left":73,"text":"Murcott Island - (VIP)"', 
 vip: "no", moves:"Super sonic-30,Silver wind-30,Whirlwind-30,Confusion-30,Psybeam-32,Air cutter-34,Sleep powder-30,Safeguard-36,Poison powder-30,", loots:"(1-1)//butterfly wing--4.3%,(1-6)//straw--80.0%,(1-6)//bug gosme--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--24.0%,(1-1)//bag of pollem--9.0%,", evoStone:"", boost:"10", booStone:"Cocoon stone", habilidades:""},

 {nome:"Weedle", numero:13, level:1, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Malefic", tipo1:"Inseto", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"500", pricenpc:"5",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Kakuna", evo2:"Beedrill", npreevo2:"no", npreevo1:"no", nevo1:"14", nevo2:"15", 
 mapas:'"top":19,"left":45,"text":"Esquerda de Cerulean - Próximo ao pântano - (FREE)";"top":23,"left":56,"text":"Floresta a direita de Saffron (FREE)";"top":23,"left":35,"text":"Floresta de Viridian (FREE)"', 
 vip: "no",
 moves:"Horn attack-1,String shot-1,Poison sting-1,", loots:"(1-1)//bee sting--Raro,(1-3)//bug gosme--80.0%,(1-3)//bottle of poison--80.0%,(1-1)//pot of moss bug--15.3%,", evoStone:"", boost:"Cocoon stone", booStone:"30", habilidades:"Cocoon stone"},
 {nome:"Kakuna", numero:14, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Malefic", tipo1:"Inseto", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"250",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Weedle", evo1:"Beedrill", evo2:"no", npreevo2:"no", npreevo1:"13", nevo1:"15", nevo2:"no", 
 mapas:'"top":19,"left":45,"text":"Esquerda de Cerulean - Próximo ao pântano - (FREE)";"top":23,"left":56,"text":"Floresta a direita de Saffron (FREE)";"top":23,"left":35,"text":"Floresta de Viridian (FREE)"', 
 vip: "no",
 moves:"String shot-10,Headbutt-10,Harden-10,Bug bite-10,", loots:"(1-1)//bee sting--2.1%,(1-4)//bug gosme--80.0%,(1-4)//bottle of poison--80.0%,(1-1)//pot of moss bug--19.5%,", evoStone:"Cocoon stone (x2)", boost:"15", booStone:"Cocoon stone", habilidades:""},
 {nome:"Beedrill", numero:15, level:30, ball1:"Greatball", ball2:"Superball", clan1:"Naturia", clan2:"Malefic", tipo1:"Inseto", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"2000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"Weedle", preevo1:"Kakuna", evo1:"no", evo2:"no", npreevo2:"13", npreevo1:"14", nevo1:"no", nevo2:"no", 
 mapas:'"top":19,"left":45,"text":"Esquerda de Cerulean - Próximo ao pântano - (FREE)";"top":23,"left":35,"text":"Floresta de Viridian - (FREE)"', 
 vip: "no",
 moves:"String shot-30,Poison jab-30,Poison sting-30,Fury cutter-35,Pin missile-35,Toxic spikes-32,Rage-30,Strafe-38,Evasion-Passiva,", loots:"(1-1)//bee sting--4.3%,(1-6)//bug gosme--80.0%,(1-6)//bottle of poison--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//Venom stone--Raro,(1-1)//pot of moss bug--22.5%,", evoStone:"", boost:"10", booStone:"Cocoon stone", habilidades:"Cut"},
 
 {nome:"Pidgey", numero:16, level:1, ball1:"Pokeball", ball2:"Greatball", clan1:"Wingeon", clan2:"Gardestrike", tipo1:"Voador", tipo2:"Normal", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"500", pricenpc:"5",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Pidgeotto", evo2:"Pidgeot", npreevo2:"no", npreevo1:"no", nevo1:"17", nevo2:"18", 
 mapas:'"top":25,"left":48,"text":"Floresta de Celadon - (FREE)";"top":21,"left":54,"text":"Floresta de Cerulean - (FREE)";"top":23,"left":35,"text":"Floresta de Viridian - (FREE)"', 
 vip: "no",
 moves:"Quick attack-1,Sand attack-1,Gust-3,Drill peck-6,", loots:"(1-1)//colored feather--Raro,(1-4)//straw--80%,(1-4)//rubber ball--80.0%,(1-1)//feather--1.5%,", evoStone:"Feather stone", boost:"30", booStone:"Feather stone", habilidades:""},
 {nome:"Pidgeotto", numero:17, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Wingeon", clan2:"Gardestrike", tipo1:"Voador", tipo2:"Normal", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Pidgey", evo1:"Pidgeot", evo2:"no", npreevo2:"no", npreevo1:"16", nevo1:"18", nevo2:"no", 
 mapas:'"top":14,"left":49,"text":"Whirlwind Island - (VIP)";"top":14,"left":55,"text":"Hurricane Island - (VIP)";"top":20,"left":58,"text":"Floresta de Cerulean - (FREE)";"top":57,"left":34,"text":"Floresta de Shamouti - (VIP)";"top":23,"left":35,"text":"Floresta de Viridian - (FREE)"', 
 vip: "no",
 moves:"Quick attack-20,Sand attack-20,Whirlwind-20,Drill peck-20,Wing attack-24,Aeroblast-26,", loots:"(1-1)//colored feather--1.1%,(1-5)//straw--80%,(1-5)//rubber ball--80.0%,(1-1)//Feather stone--Raro,(1-1)//Heart stone--Raro,(1-1)//feather--6.0%,", evoStone:"Feather stone (x2)", boost:"10", booStone:"Feather stone", habilidades:""},
 {nome:"Pidgeot", numero:18, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Wingeon", clan2:"Gardestrike", tipo1:"Voador", tipo2:"Normal", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"11500",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"Pidgey", preevo1:"Pidgeotto", evo1:"no", evo2:"no", npreevo2:"16", npreevo1:"17", nevo1:"no", nevo2:"no", 
 mapas:'"top":14,"left":49,"text":"Whirlwind Island (VIP)";"top":14,"left":55,"text":"Hurricane Island - (VIP)";"top":20,"left":58,"text":"Floresta de Cerulean - (FREE)";"top":57,"left":34,"text":"Floresta de Shamouti - (VIP)";"top":9,"left":14,"text":"Outland South - Saida a direita (VIP)"',  
 vip: "no", moves:"Quick attack-80,Sand attack-80,Whirlwind-80,Drill peck-80,Wing attack-82,Aeroblast-84,Hurricane-90,Agility-80,Roost-85,", loots:"(1-1)//colored feather--4.3% (29.8%),(1-19)//straw--80%,(1-19)//rubber ball--80.0%,(1-1)//Feather stone--Raro,(1-1)//Heart stone--Raro,(1-1)//bird beak--22.6% (90.4%),(1-1)//feather--22.5% (90.0%),", evoStone:"", boost:"3", booStone:"Feather stone", habilidades:"Fly"},

 {nome:"Rattata", numero:19, level:1, ball1:"Pokeball", ball2:"Greatball", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"500", pricenpc:"5",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Raticate", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"20", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Quick attack-1,Bite-1,Scratch-1,Super fang-10,", loots:"(1-1)//rat tail--Raro,(1-5)//rubber ball--80.0%,(1-1)//bitten apple--25.3%,", evoStone:"Heart stone", boost:"30", booStone:"Heart stone", habilidades:""},
 {nome:"Raticate", numero:20, level:30, ball1:"Greatball", ball2:"Superball", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"2000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Rattata", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"19", nevo1:"no", nevo2:"no", 
 mapas:'"top":21,"left":36,"text":"subsolo proximo a saida sul de pewter - (FREE)";"top":24,"left":49,"text":"subsolo entre saffron e celadon - (FREE)";"top":20,"left":54,"text":"subsolo a esquerda de cerulean - (FREE)";"top":33,"left":54,"text":"subsolo em fuchsia - (FREE)";"top":56,"left":36,"text":"subsolo em shamouti - (FREE)"',  vip: "no", moves:"Quick attack-30,Bite-30,Scratch-30,Pursuit-30,Super fang-30,Scary face-32,Fury-Passiva,", loots:"(1-1)//rat tail--4.3%,(1-13)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//bitten apple--32.5%,", evoStone:"", boost:"10", booStone:"Heart stone", habilidades:"Dig, Cut, Headbutt"},
 
 {nome:"Spearow", numero:21, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Wingeon", clan2:"Gardestrike", tipo1:"Voador", tipo2:"Normal", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"100",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Fearow", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"22", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Peck-10,Sand attack-10,Wing attack-12,Drill peck-10,Agility-10,", loots:"(1-1)//red wing--Raro,(1-3)//straw--80%,(1-3)//rubber ball--80%,(1-1)//feather--28.0%,", evoStone:"Feather stone", boost:"20", booStone:"Feather stone", habilidades:""},
 {nome:"Fearow", numero:22, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Wingeon", clan2:"Gardestrike", tipo1:"Voador", tipo2:"Normal", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"5100",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Spearow", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"21", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Peck-50,Sand attack-50,Drill peck-50,Whirlwind-50,Air cutter-50,Wing attack-52,Aerial ace-50,Agility-50,", loots:"(1-1)//red wing--4.3%,(1-13)//straw--80%,(1-13)//rubber ball--80%,(1-1)//Feather stone--Raro,(1-1)//bird beak--15.1%,(1-1)//feather--15.0%,", evoStone:"", boost:"4", booStone:"Feather stone", habilidades:"Fly"},
 
 {nome:"Ekans", numero:23, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Venenoso", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"300",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Arbok", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"24", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Bite-10,Poison fang-10,Gunk shot-12,Acid-15,Fear-18,", loots:"(1-1)//snake tail--1.8%,(1-8)//bottle of poison--80%,(1-1)//tooth--19.5%,", evoStone:"Venom stone", boost:"15", booStone:"Venom stone", habilidades:"Dig, Headbutt"},
 {nome:"Arbok", numero:24, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Venenoso", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Ekans", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"23", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Bite-40,Poison fang-40,Gunk shot-40,Wrap-40,Pin missile-43,Acid-40,Iron tail-45,Poison jab-40,", loots:"(1-1)//snake tail--4.3%,(1-18)//bottle of poison--80%,(1-1)//Venom stone--Raro,(1-1)//tooth--25.5%,", evoStone:"", boost:"8", booStone:"Venom stone", habilidades:"Dig, Headbutt"},
 
 {nome:"Pikachu", numero:25, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Raibolt", clan2:"Nenhum", tipo1:"Elétrico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Pichu", evo1:"Raichu", evo2:"no", npreevo2:"no", npreevo1:"172", nevo1:"26", nevo2:"no", 
 mapas:'"top":14,"left":77,"text":"Lightstorm Island - (VIP)";"top":66,"left":27,"text":"Zapdos Island - (VIP)"',  
 vip: "yes", moves:"Quick attack-50,Thunder shock-50,Thunder bolt-50,Shockwave-50,Thunder punch-50,Thunder-55,Electric storm-58,Agility-55,Electric charge-Passiva,", loots:"(1-1)//electric rat tail--2.0%,(1-20)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--17.0%,", evoStone:"Thunder stone (x2)", boost:"7", booStone:"Thunder stone", habilidades:"Light, Headbutt"},
 {nome:"Raichu", numero:26, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Raibolt", clan2:"Nenhum", tipo1:"Elétrico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"Pichu", preevo1:"Pikachu", evo1:"no", evo2:"no", npreevo2:"172", npreevo1:"25", nevo1:"no", nevo2:"no", 
 mapas:'"top":14,"left":77,"text":"Lightstorm Island - (VIP)";"top":66,"left":27,"text":"Zapdos Island - (VIP)";"top":2,"left":9,"text":"Outland North - Saida a esquerda (subsolo) (VIP)"',  
 vip: "yes", moves:"Mega quick-80,Thunder shock-80,Thunder bolt-80,Thunder wave-80,Thunder punch-80,Iron tail-80,Body slam-85,Thunder-80,Electric storm-90,Flash-80,Electric charge-Passiva,", loots:"(1-1)//electric rat tail--4.3% (59.5%),(1-43)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--30.5% (61.0%),", evoStone:"", boost:"3", booStone:"Thunder stone", habilidades:"Light, Headbutt"},
 
 {nome:"Sandshrew", numero:27, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Terra", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"1000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Sandslash", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"28", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sand attack-20,Mud shot-20,Scratch-20,Rollout-25,Bulldoze-25,", loots:"(1-1)//armadillo claw--1.3%,(1-10)//earth ball--80.0%,(1-1)//sandbag--11.0%,", evoStone:"Earth stone (x2)", boost:"10", booStone:"Earth stone", habilidades:"Dig, Rock Smash, Cut, Headbutt"},
 {nome:"Sandslash", numero:28, level:70, ball1:"Superball", ball2:"Ultraball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Terra", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"100000", pricenpc:"11000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Sandshrew", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"27", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sand attack-70,Mud shot-70,Scratch-70,Rollout-70,Bulldoze-70,Fury cutter-75,Earth power-73,Earthquake-76,Defense curl-70,", loots:"(1-1)//armadillo claw--4.3% (51.0%),(1-33)//earth ball--80.0%,(1-1)//Earth stone--Raro,(1-1)//sandbag--24.5% (98.0%),", evoStone:"", boost:"", booStone:"", habilidades:"Dig, Rock Smash, Cut, Headbutt"},
 
 {nome:"NidoranFe", numero:29, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Venenoso", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"125",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Nidorina", evo2:"Nidoqueen", npreevo2:"no", npreevo1:"no", nevo1:"30", nevo2:"31", 
 mapas:'no',  vip: "no", moves:"Quick attack-10,Bite-10,Horn attack-12,Poison sting-10,Poison fang-15,", loots:"(1-1)//female ear--Raro,(1-6)//bottle of poison--80%,(1-1)//sandbag--8.0%,", evoStone:"Venom stone", boost:"20", booStone:"Venom stone", habilidades:"Dig, Headbutt"},
 {nome:"Nidorina", numero:30, level:30, ball1:"Greatball", ball2:"Superball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Venenoso", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"10000", pricenpc:"2250",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"NidoranFe", evo1:"Nidoqueen", evo2:"no", npreevo2:"no", npreevo1:"29", nevo1:"31", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Quick attack-30,Horn attack-30,Poison jab-30,Earth power-30,Dig-32,Cross poison-32,Agility-30,", loots:"(1-1)//female ear--1.9%,(1-16)//bottle of poison--80%,(1-1)//Venom stone--Raro,(1-1)//sandbag--14.0%,", evoStone:"Venom stone,Earth stone", boost:"9", booStone:"Venom stone", habilidades:"Dig, Headbutt"},
 {nome:"Nidoqueen", numero:31, level:70, ball1:"Saffariball", ball2:"nenhuma", clan1:"Malefic", clan2:"Orebound", tipo1:"Venenoso", tipo2:"Terra", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"100000", pricenpc:"12250",  shiny:"no", fast:"no", heavy:"no", preevo2:"NidoranFe", preevo1:"Nidorina", evo1:"no", evo2:"no", npreevo2:"29", npreevo1:"30", nevo1:"no", nevo2:"no", 
 mapas:'"top":4,"left":17,"text":"Outland East - Saida Norte";"top":30,"left":51,"text":"Fuchsia - Saffari (subsolo)"',
 vip: "yes",
 moves:"Quick attack-70,Horn attack-70,Sand tomb-70,Poison jab-70,Earth power-70,Dig-72,Cross poison-72,Earthquake-76,Agility-70,", loots:"(1-1)//female ear--4.3% (55.3%),(1-16)//earth ball--80%,(1-16)//bottle of poison--80%,(1-1)//Venom stone--Raro,(1-1)//sandbag--24.5% (98.0%),", evoStone:"", boost:"4", booStone:"Venom stone", habilidades:"Dig, Headbutt, Rock smash"},
 
 {nome:"NidoranMa", numero:32, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Venenoso", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"125",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Nidorino", evo2:"Nidoking", npreevo2:"no", npreevo1:"no", nevo1:"33", nevo2:"34", 
 mapas:'no',  vip: "no", moves:"Quick attack-10,Bite-10,Horn attack-12,Poison sting-10,Poison fang-15,", loots:"(1-1)//male ear--Raro,(1-6)//bottle of poison--80.0%,(1-1)//sandbag--8.0%,", evoStone:"Venom stone", boost:"20", booStone:"Venom stone", habilidades:"Dig, Headbutt"},
 {nome:"Nidorino", numero:33, level:30, ball1:"Greatball", ball2:"Superball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Venenoso", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"10000", pricenpc:"2250",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"NidoranMa", evo1:"Nidoking", evo2:"no", npreevo2:"no", npreevo1:"32", nevo1:"34", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Quick attack-30,Horn attack-30,Poison jab-30,Poison fang-30,Dig-32,Cross poison-32,Rage-30,", loots:"(1-1)//male ear--1.9%,(1-6)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,(1-1)//sandbag--14.0%,", evoStone:"Venom stone,Earth stone", boost:"9", booStone:"Venom stone", habilidades:"Dig, Headbutt"},
 {nome:"Nidoking", numero:34, level:70, ball1:"Saffariball", ball2:"nenhuma", clan1:"Malefic", clan2:"Orebound", tipo1:"Venenoso", tipo2:"Terra", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"100000", pricenpc:"12250",  shiny:"yes", fast:"no", heavy:"no", preevo2:"NidoranMa", preevo1:"Nidorino", evo1:"no", evo2:"no", npreevo2:"32", npreevo1:"33", nevo1:"no", nevo2:"no", 
 mapas:'"top":4,"left":17,"text":"Outland East - Saida Norte";"top":30,"left":51,"text":"Fuchsia - Saffari (subsolo)"', 
 vip: "yes",
 moves:"Quick attack-70,Horn attack-70,Poison jab-70,Poison fang-70,Dig-72,Sludge wave-74,Cross poison-72,Fear-76,Rage-70,", loots:"(1-1)//male ear--4.3% (55.3%),(1-16)//earth ball--80.0%,(1-16)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,(1-1)//Earth stone--Raro,(1-1)//sandbag--24.5% (98.0%),", evoStone:"", boost:"4", booStone:"Venom stone", habilidades:"Dig, Headbutt, Rock smash"},
 
 {nome:"Clefairy", numero:35, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Psycraft", clan2:"Nenhum", tipo1:"Fada", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Cleffa", evo1:"Clefable", evo2:"no", npreevo2:"no", npreevo1:"173", nevo1:"36", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Doubleslap-40,Body slam-44,Sing-40,Multi slap-40,Great love-47,Healarea-45,Metronome-40,Defense curl-40,", loots:"(1-1)//topknot--2.6%,(1-20)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//comb--12.5%,", evoStone:"Hearth stone (x2)", boost:"7", booStone:"Hearth stone", habilidades:""},
 {nome:"Clefable", numero:36, level:70, ball1:"Superball", ball2:"Ultraball", clan1:"Psycraft", clan2:"Nenhum", tipo1:"Fada", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"100000", pricenpc:"18000",  shiny:"no", fast:"no", heavy:"no", preevo2:"Cleffa", preevo1:"Clefairy", evo1:"no", evo2:"no", npreevo2:"173", npreevo1:"35", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Doubleslap-70,Multi slap-70,Dazzling gleam-74,Great love-77,Moonblast-76,Healarea-75,Metronome-70,Defense curl-70,", loots:"(1-1)//topknot--4.3% (29.8%),(1-33)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//comb--20.0% (20.0%),", evoStone:"", boost:"4", booStone:"Hearth stone", habilidades:""},
 
 {nome:"Vulpix", numero:37, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"1000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Ninetales", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"38", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Quick attack-20,Iron tail-20,Ember-20,Flamethrower-22,Flame circle-24,Fire blast-28,", loots:"(1-1)//fox tail--Raro,(1-8)//essence of fire--80.0%,(1-1)//comb--5.0%,(1-1)//fur--4.5%,", evoStone:"Fire stone (x2)", boost:"15", booStone:"Fire stone", habilidades:"Dig"},
 {nome:"Ninetales", numero:38, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"11000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Vulpix", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"37", nevo1:"no", nevo2:"no", 
 mapas:'"top":32,"left":37,"text":"Cinnabar Island - Dentro da montanha a direita (Próximo ao respawn de Charizard)"', 
 vip: "yes",
 moves:"Quick attack-80,Iron tail-80,Ember-80,Flamethrower-80,Flame wheel-80,Fireball-80,Fire spin-80,Fire blast-84,Inferno-90,Safeguard-90,", loots:"(1-1)//fox tail--2.0%,(1-33)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//comb--20.0%,(1-1)//fur--19.5%,", evoStone:"", boost:"3", booStone:"Fire stone", habilidades:"Dig, Ride"},
 
 {nome:"Jigglypuff", numero:39, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Psycraft", clan2:"Gardestrike", tipo1:"Fada", tipo2:"Normal", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Igglybuff", evo1:"Wigglytuff", evo2:"no", npreevo2:"no", npreevo1:"174", nevo1:"40", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Doubleslap-40,Body slam-44,Sing-40,Hyper voice-40,Multi slap-40,Echoed voice-45,Softboiled-45,Charm-40,Melody-Passiva,", loots:"(1-1)//microphone--Raro,(1-20)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//comb--12.5%,", evoStone:"Heart stone (x2)", boost:"7", booStone:"Heart stone", habilidades:""},
 {nome:"Wigglytuff", numero:40, level:70, ball1:"Superball", ball2:"Ultraball", clan1:"Psycraft", clan2:"Gardestrike", tipo1:"Fada", tipo2:"Normal", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"100000", pricenpc:"18000",  shiny:"no", fast:"no", heavy:"no", preevo2:"Igglybuff", preevo1:"Jigglypuff", evo1:"no", evo2:"no", npreevo2:"174", npreevo1:"39", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Doubleslap-70,Body slam-74,Sing-70,Hyper voice-70,Multi slap-70,Rock n roll-74,Echoed voice-75,Softboiled-75,Charm-70,Melody-Passiva,", loots:"(1-1)//microphone--4.0% (28.0%),(1-33)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//comb--20.0% (20.0%),", evoStone:"", boost:"4", booStone:"Heart stone", habilidades:""},
 
 {nome:"Zubat", numero:41, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Malefic", clan2:"Wingeon", tipo1:"Venenoso", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"120",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Golbat", evo2:"Crobat", npreevo2:"no", npreevo1:"no", nevo1:"42", nevo2:"169", 
 mapas:'no',  vip: "no", moves:"Super sonic-10,Bite-10,Poison fang-10,Absorb-12,Toxic-15,Lifesteal-Passiva,", loots:"(1-1)//bat wing--1.8%,(1-4)//bottle of poison--80%,(1-4)//straw--80.0%,(1-1)//tooth--18.0%,", evoStone:"Venom stone", boost:"20", booStone:"Venom stone", habilidades:""},
 {nome:"Golbat", numero:42, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Malefic", clan2:"Wingeon", tipo1:"Venenoso", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Zubat", evo1:"Crobat", evo2:"no", npreevo2:"no", npreevo1:"41", nevo1:"169", nevo2:"no", 
 mapas:'"top":60,"left":38,"text":"subsolo em shamouti no caminho pro crobat - (FREE)";"top":19,"left":40,"text":"subsolo mt moon - (FREE)";"top":25,"left":48,"text":"subsolo entre saffron e celadon - (FREE)"',  vip: "no", moves:"Super sonic-40,Bite-40,Poison fang-40,Toxic-40,Whirlwind-40,Wing attack-40,Air cutter-44,Lifesteal-Passiva,", loots:"(1-1)//bat wing--4.3%,(1-9)//bottle of poison--80%,(1-9)//straw--80.0%,(1-1)//Venom stone--Raro,(1-1)//tooth--25.5%,", evoStone:"Ancient stone,Venom stone", boost:"8", booStone:"Venom stone", habilidades:""},
 
 {nome:"Oddish", numero:43, level:1, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Malefic", tipo1:"Grama", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"500", pricenpc:"5",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Gloom", evo2:"Vileplume, Bellosson", npreevo2:"no", npreevo1:"no", nevo1:"44", nevo2:"45,182", 
 mapas:'no',  vip: "no", moves:"Absorb-7,Acid-1,Leech seed-1,Sleep powder-9,Stun spore-8,Poison powder-8,Spores reaction-Passiva,Mega drain-Passiva,", loots:"(1-1)//strange flower--Raro,(1-3)//seed--80%,(1-3)//bottle of poison--80.0%,(1-1)//bag of pollem--1.5%,", evoStone:"Leaf stone", boost:"30", booStone:"Leaf stone", habilidades:"Cut"},
 {nome:"Gloom", numero:44, level:30, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Malefic", tipo1:"Grama", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"2250",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Oddish", evo1:"Vileplume, Bellosson", evo2:"no", npreevo2:"no", npreevo1:"43", nevo1:"45,182", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Absorb-30,Leech seed-30,Acid-30,Poison bomb-33,Poison gas-37,Sleep powder-30,Stun spore-30,Poison powder-30,Spores reaction-Passiva,Mega drain-Passiva,", loots:"(1-1)//strange flower--2.1%,(1-6)//seed--80%,(1-6)//bottle of poison--80.0%,(1-1)//Leaf stone--Raro,(1-1)//Venom stone--Raro,(1-1)//bag of pollem--7.5%,", evoStone:"Venom stone (2x)=Vileplume ou Leaf stone (2x)=Bellossom", boost:"10", booStone:"Leaf stone", habilidades:"Cut"},
 {nome:"Vileplume", numero:45, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Naturia", clan2:"Malefic", tipo1:"Grama", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"12000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"Oddish", preevo1:"Gloom", evo1:"no", evo2:"no", npreevo2:"43", npreevo1:"44", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Absorb-50,Leech seed-50,Acid-50,Poison bomb-50,Poison gas-50,Petal dance-55,Solar beam-60,Sleep powder-50,Stun spore-50,Poison powder-50,Spores reaction-Passiva,Mega drain-Passiva,", loots:"(1-1)//strange flower--4.3%,(1-13)//seed--80%,(1-13)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,(1-1)//bag of pollem--15.0%,", evoStone:"", boost:"4", booStone:"Leaf stone", habilidades:"Cut"},
 
 {nome:"Paras", numero:46, level:1, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Nenhum", tipo1:"Inseto", tipo2:"Grama", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"500", pricenpc:"60",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Parasect", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"47", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Scratch-1,Poison sting-1,Slash-1,Stun spore-6,Poison powder-4,Sleep powder-8,", loots:"(1-1)//mushroom--1.4%,(1-1)//bug gosme--80%,(1-1)//seed--80%,", evoStone:"Cocoon Stone (x2)", boost:"30", booStone:"Cocoon Stone", habilidades:"Cut, Dig"},
 {nome:"Parasect", numero:47, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Naturia", clan2:"Nenhum", tipo1:"Inseto", tipo2:"Grama", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"7250",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Paras", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"46", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Absorb-50,Leech seed-55,Poison sting-50,Slash-50,Poison bomb-50,Stun spore-50,Poison powder-50,Sleep powder-50,Fury cutter-56,X scissor-58,Mega drain-Passiva,Spores reaction-Passiva,", loots:"(1-1)//mushroom--4.3%,(1-13)//bug gosme--80%,(1-13)//seed--80%,(1-1)//Cocoon stone--Raro,(1-1)//Leaf stone--Raro,(1-1)//bag of pollem--15.0%,", evoStone:"", boost:"5", booStone:"Cocoon Stone", habilidades:"Dig, Cut"},
 
 {nome:"Venonat", numero:48, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Malefic", tipo1:"Inseto", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"1500",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Venomoth", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"49", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Super sonic-20,Psybeam-20,Silver wind-20,Confusion-20,Psychic-26,Sleep powder-28,Poison powder-22,Stun spore-24,", loots:"(1-1)//bug antenna--4.0%,(1-5)//bug gosme--80%,(1-5)//bottle of poison--80.0%,(1-1)//bag of pollem--6.0%,", evoStone:"Venom stone,Cocoon stone", boost:"10", booStone:"Venom stone", habilidades:"Headbutt"},
 {nome:"Venomoth", numero:49, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Naturia", clan2:"Malefic", tipo1:"Inseto", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"7250",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Venonat", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"48", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Super sonic-50,Psybeam-50,Silver wind-50,Confusion-56,Psychic-50,Signal beam-56,Bug buzz-54,Sleep powder-50,Poison powder-50,", loots:"(1-1)//bug venom--4.3%,(1-13)//bug gosme--80%,(1-13)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,(1-1)//Cocoon stone--Raro,(1-1)//bag of pollem--15.0%,", evoStone:"", boost:"5", booStone:"Venom stone", habilidades:"Fly"},
 
 {nome:"Diglett", numero:50, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Terra", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"200",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Dugtrio", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"51", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sand attack-10,Slash-10,Mud shot-10,Mud slap-12,Earth power-15,", loots:"(1-1)//piece of diglett--1.8%,(1-5)//earth ball--80.0%,(1-1)//sandbag--8.0%,", evoStone:"Earth Stone", boost:"20", booStone:"Earth Stone", habilidades:"Dig, Rock Smash, Headbutt"},
 {nome:"Dugtrio", numero:51, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Terra", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Diglett", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"50", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sand attack-40,Slash-40,Mud shot-40,Mud slap-40,Earth power-40,Dig-42,Earthquake-47,Rage-45,", loots:"(1-1)//piece of diglett--4.3%,(1-18)//earth ball--80.0%,(1-1)//Earth stone--Raro,(1-1)//sandbag--15.5%,", evoStone:"", boost:"8", booStone:"Earth stone", habilidades:"Dig, Rock Smash, Headbutt"},
 
 {nome:"Meowth", numero:52, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"300",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Persian", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"53", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Slash-20,Scratch-20,Bite-20,Night slash-20,Pay day-28,Fury-Passiva,", loots:"(1-1)//wool ball--10.3%,(1-1)//luck medallion--Raro,(1-8)//rubber ball--80.0%,(1-1)//nail--14.5%,", evoStone:"Heart stone", boost:"15", booStone:"Heart stone", habilidades:"Cut, Dig"},
 {nome:"Persian", numero:53, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"3000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Meowth", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"52", nevo1:"no", nevo2:"no", 
 mapas:'"top":24,"left":73,"text":"Desert Island - Piramide ao Norte (entre as 3 maiores Piramides)";"top":14,"left":31,"text":"Charizard Valley - Parte externa"', 
 vip: "yes",
 moves:"Slash-50,Scratch-50,Bite-50,Night slash-50,Pay day-56,Fear-60,Torment-55,Fury-Passiva,", loots:"(1-1)//wool ball--24.3%,(1-15)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//nail--19.0%,", evoStone:"", boost:"9", booStone:"Heart stone", habilidades:"Cut, Dig"},
 
 {nome:"Psyduck", numero:54, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"1500",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Golduck", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"55", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Water gun-24,Aqua tail-20,Waterball-24,Confusion-28,Headbutt-20,Stunning confusion-Passiva,", loots:"(1-1)//Psyduck mug--1.5%,(1-10)//water gem--80.0%,(1-1)//water pendant--21.0%,", evoStone:"Water stone,Enigma stone", boost:"10", booStone:"Water stone", habilidades:"Headbutt"},
 {nome:"Golduck", numero:55, level:70, ball1:"Superball", ball2:"Ultraball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"200000", pricenpc:"11500",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Psyduck", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"54", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Water gun-70,Fury swipes-70,Water pulse-70,Confusion-70,Psychic-70,Aqua jet-70,Hydropump-78,Stunning confusion-Passiva,", loots:"(1-1)//karate duck--8.3%,(1-28)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--31.5%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"", boost:"4", booStone:"Water stone", habilidades:"Surf, Headbutt"},
 
 {nome:"Mankey", numero:56, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Lutador", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"300",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Primeape", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"57", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Scratch-10,Triple kick-10,Karate chop-13,Cross chop-15,Rage-17,", loots:"(1-1)//iron bracelet--1.3%,(1-8)//band aid--80.0%,(1-1)//fur--5.5%,", evoStone:"Punch stone", boost:"15", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
 {nome:"Primeape", numero:57, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Lutador", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"7250",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Mankey", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"56", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Scratch-50,Triple kick-50,Karate chop-50,Cross chop-54,Mega punch-56,Mega kick-58,Close combat-50,Rage-50,", loots:"(1-1)//iron bracelet--4.3%,(1-8)//band aid--80.0%,(1-1)//Punch stone--Raro,(1-1)//fur--16.0%,", evoStone:"", boost:"5", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
 
 {nome:"Growlithe", numero:58, level:30, ball1:"Pokeball", ball2:"Greatball", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3500",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Arcanine", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"59", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Roar-33,Bite-30,Ember-30,Flamethrower-30,Fireball-32,Fire fang-30,Heat wave-34,War dog-36,", loots:"(1-1)//giant piece of fur--1.3%,(1-13)//essence of fire--80%,(1-1)//fur--8.5%,(1-1)//pot of lava--7.5%,", evoStone:"Crystal stone,Fire stone", boost:"10", booStone:"Fire stone", habilidades:"Dig, Headbutt"},
 {nome:"Arcanine", numero:59, level:100, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"500000", pricenpc:"58500",  shiny:"yes", fast:"yes", heavy:"yes", preevo2:"no", preevo1:"Growlithe", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"58", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Roar-110,Bite-100,Ember-100,Flamethrower-100,Fireball-100,Fire fang-100,Extremespeed-100,Fire blast-102,Heat wave-104,War dog-106,", loots:"(1-1)//giant piece of fur--8.5%,(1-40)//essence of fire--80%,(1-1)//Fire stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//fur--25.0% (50.0%),(1-1)//pot of lava--24.0% (48.0%),", evoStone:"", boost:"3", booStone:"Fire stone", habilidades:"Dig, Headbutt, Ride"},
 
 {nome:"Poliwag", numero:60, level:1, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"80",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Poliwhirl", evo2:"Poliwrath, Politoed", npreevo2:"no", npreevo1:"no", nevo1:"61", nevo2:"62,186", 
 mapas:'no',  vip: "no", moves:"Doubleslap-1,Bubbles-1,Water gun-6,Aqua tail-3,Hypnosis-8,", loots:"(1-1)//strange thing--Raro,(1-3)//water gem--80%,(1-1)//water pendant--16.5%,", evoStone:"Water stone", boost:"30", booStone:"Water stone", habilidades:"Surf, Headbutt"},
 {nome:"Poliwhirl", numero:61, level:30, ball1:"Greatball", ball2:"Superball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Poliwag", evo1:"Poliwrath, Politoed", evo2:"no", npreevo2:"no", npreevo1:"60", nevo1:"62,186", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Mud shot-30,Doubleslap-30,Bubblebeam-30,Water gun-30,Ice beam-30,Brick break-32,Dynamicpunch-40,Hypnosis-30,", loots:"(1-1)//strange thing--1.6%,(1-13)//water gem--80%,(1-1)//Water stone--Raro,(1-1)//water pendant--22.5%,", evoStone:"Punch stone (x2)=Poliwrath ou Water stone (x2)=Politoed", boost:"10", booStone:"Water stone", habilidades:"Surf, Headbutt"},
 {nome:"Poliwrath", numero:62, level:70, ball1:"Superball", ball2:"Ultraball", clan1:"Seavell", clan2:"Gardestrike", tipo1:"Água", tipo2:"Lutador", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"100000", pricenpc:"13000",  shiny:"no", fast:"no", heavy:"no", preevo2:"Poliwag", preevo1:"Poliwhirl", evo1:"no", evo2:"no", npreevo2:"60", npreevo1:"61", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Mud shot-70,Doubleslap-70,Bubblebeam-70,Water gun-70,Ice beam-70,Brick break-72,Dynamicpunch-77,Focus blast-78,Hypnosis-70,", loots:"(1-1)//strange thing--8.3%,(1-16)//water gem--80%,(1-16)//band aid--80.0%,(1-1)//Punch stone--Raro,(1-1)//water pendant--34.5%,", evoStone:"", boost:"4", booStone:"Water stone", habilidades:"Rock Smash, Surf, Headbutt"},
 
 {nome:"Abra", numero:63, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Psycraft", clan2:"Nenhum", tipo1:"Psiquico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"800",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Kadabra", evo2:"Alakazam", npreevo2:"no", npreevo1:"no", nevo1:"64", nevo2:"65", 
 mapas:'"top":25,"left":75,"text":"Desert Island - (VIP)";"top":87,"left":31,"text":"Deserto Mandarin - (FREE)"', 
 vip: "no",
 moves:"Restore-15,Psy pulse-10,Psychic-20,Calm mind-13,", loots:"(1-1)//psychic spoon--Raro,(1-8)//enchanted gem--80.0%,(1-1)//future orb--14.5%,", evoStone:"Enigma stone", boost:"15", booStone:"Enigma stone", habilidades:"Teleport, Light, Blink"},
 {nome:"Kadabra", numero:64, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Psycraft", clan2:"Nenhum", tipo1:"Psiquico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"5800",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Abra", evo1:"Alakazam", evo2:"no", npreevo2:"no", npreevo1:"63", nevo1:"65", nevo2:"no", 
 mapas:'"top":25,"left":75,"text":"Desert Island - (VIP)";"top":87,"left":31,"text":"Deserto Mandarin - (FREE)"', 
 vip: "no",
 moves:"Psybeam-40,Psywave-40,Psy pulse-40,Confusion-40,Psychic-42,Calm mind-40,Hypnosis-40,Reflect-48,Restore-45,", loots:"(1-1)//psychic spoon--2.3%,(1-23)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//future orb--23.5%,", evoStone:"Enigma stone (x2)", boost:"8", booStone:"Enigma stone", habilidades:"Teleport, Light, Blink"},
 {nome:"Alakazam", numero:65, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Psycraft", clan2:"Nenhum", tipo1:"Psiquico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"15800",  shiny:"yes", fast:"no", heavy:"no", preevo2:"Abra", preevo1:"Kadabra", evo1:"no", evo2:"no", npreevo2:"63", npreevo1:"64", nevo1:"no", nevo2:"no", 
 mapas:'"top":25,"left":75,"text":"Desert Island - Subsolo Piramide a Direita (entre as 3 maiores Piramides ou no subsolo da piramide menor ao norte) - (VIP)";"top":4,"left":6,"text":"Outland North - Saida a esquerda (dentro da pirâmide) (VIP)";"top":87,"left":31,"text":"Deserto Mandarin - (FREE)"', 
 vip: "no",
 moves:"Psybeam-80,Psywave-80,Psy pulse-80,Confusion-80,Psychic-80,Psyusion-95,Calm mind-80,Hypnosis-80,Reflect-85,Restore-85,Miracle eye-1000,", loots:"(1-1)//psychic spoon--4.3% (38.3%),(1-40)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//future orb--34.0% (68.0%),", evoStone:"", boost:"3", booStone:"Enigma stone", habilidades:"Teleport, Light, Blink, Control Mind"},
 
 {nome:"Machop", numero:66, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Lutador", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"2000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Machoke", evo2:"Machamp", npreevo2:"no", npreevo1:"no", nevo1:"67", nevo2:"68", 
 mapas:'no',  vip: "no", moves:"Triple punch-20,Mega punch-20,Karate chop-24,Focus blast-28,Agility-25,", loots:"(1-1)//belt of champion--Raro,(1-10)//band aid--80%,", evoStone:"Punch stone", boost:"10", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
 {nome:"Machoke", numero:67, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Lutador", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"7000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Machop", evo1:"Machamp", evo2:"no", npreevo2:"no", npreevo1:"66", nevo1:"68", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Triple punch-42,Mega punch-40,Mega kick-44,Karate chop-40,Focus blast-40,Arm thrust-45,Agility-48,", loots:"(1-1)//belt of champion--Raro,(1-23)//band aid--80%,(1-1)//Punch stone--Raro,", evoStone:"Punch stone (x2)", boost:"6", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
 {nome:"Machamp", numero:68, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Lutador", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"17000",  shiny:"yes", fast:"yes", heavy:"yes", preevo2:"Machop", preevo1:"Machoke", evo1:"no", evo2:"no", npreevo2:"66", npreevo1:"67", nevo1:"no", nevo2:"no", 
 mapas:'"top":6,"left":18,"text":"Outland East - Saida da direita (VIP)";"top":19,"left":59,"text":"Direita de Cerulean - Ultimo andar do Rock Tunel na parte aberta ao norte (VIP)";"top":24,"left":30,"text":"Esquerda de Viridian - (Subterrâneo) Ao norte do Coliseum (VIP)";"top":56,"left":29,"text":"Esquerda de Shamouti - Ao sul do Fight Club (FREE)"', 
 vip: "no",
 moves:"Triple punch-80,Karate chop-80,Revenge-92,Focus blast-80,Arm thrust-86,Vital throw-88,Dynamicpunch-90,Agility-48,Foresight-Passiva,", loots:"(1-1)//belt of champion--1.5% (6.0%),(1-40)//band aid--80%,(1-1)//Punch stone--Raro,", evoStone:"", boost:"3", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
 
 {nome:"Bellsprout", numero:69, level:1, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Malefic", tipo1:"Grama", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"80",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Weepinbell", evo2:"Victreebel", npreevo2:"no", npreevo1:"no", nevo1:"70", nevo2:"71", 
 mapas:'no',  vip: "no", moves:"Razor leaf-6,Vine whip-8,Acid-4,Slash-1,", loots:"(1-1)//plant tail--Raro,(1-1)//seed--80.0%,(1-1)//bottle of poison--80%,(1-1)//leaves--21.5%,", evoStone:"Leaf stone", boost:"30", booStone:"Leaf stone", habilidades:"Cut"},
 {nome:"Weepinbell", numero:70, level:30, ball1:"Greatball", ball2:"Superball", clan1:"Naturia", clan2:"Malefic", tipo1:"Grama", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"2250",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Bellsprout", evo1:"Victreebel", evo2:"no", npreevo2:"no", npreevo1:"69", nevo1:"71", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Razor leaf-30,Vine whip-30,Magical leaf-30,Poison bomb-30,Stun spore-30,Poison powder-30,Sleep powder-34,Leaf storm-38,Growth-36,", loots:"(1-1)//plant tail--2.1%,(1-6)//seed--80.0%,(1-6)//bottle of poison--80%,(1-1)//Leaf stone--Raro,(1-1)//Venom stone--Raro,(1-1)//leaves--27.5%,", evoStone:"Leaf stone (x2)", boost:"10", booStone:"Leaf stone", habilidades:"Cut"},
 {nome:"Victreebel", numero:71, level:70, ball1:"Superball", ball2:"Ultraball", clan1:"Naturia", clan2:"Malefic", tipo1:"Grama", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"12000",  shiny:"no", fast:"no", heavy:"no", preevo2:"Bellsprout", preevo1:"Weepinbell", evo1:"no", evo2:"no", npreevo2:"69", npreevo1:"70", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Razor leaf-70,Vine whip-70,Magical leaf-70,Poison bomb-70,Stun spore-70,Poison powder-70,Sleep powder-75,Leaf storm-77,Giga drain-75,Growth-76,", loots:"(1-1)//plant tail--8.3%,(1-13)//seed--80.0%,(1-13)//bottle of poison--80%,(1-1)//Leaf stone--Raro,(1-1)//Venom stone--Raro,(1-1)//leaves--35.0%,", evoStone:"", boost:"4", booStone:"Leaf stone", habilidades:"Cut"},
 
 {nome:"Tentacool", numero:72, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Malefic", tipo1:"Água", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"300",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Tentacruel", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"73", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Super sonic-16,Wrap-10,Bubbles-10,Poison jab-10,Acid-10,Waterball-10,", loots:"(1-1)//giant ruby--Raro,(1-4)//water gem--80.0%,(1-4)//bottle of poison--80%,(1-1)//ruby--4.5%,", evoStone:"Water stone,Venom stone", boost:"15", booStone:"Water stone", habilidades:"Surf"},
 {nome:"Tentacruel", numero:73, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Seavell", clan2:"Malefic", tipo1:"Água", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"10000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Tentacool", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"72", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Super sonic-80,Wrap-80,Bubbles-80,Poison jab-80,Waterball-80,Bubblebeam-80,Acid-80,Water pulse-80,Mortal gas-88,Hydropump-90,Liquid ooze-Passiva,", loots:"(1-1)//giant ruby--4.3%,(1-20)//water gem--80.0%,(1-20)//bottle of poison--80%,(1-1)//Water stone--Raro,(1-1)//Venom stone--Raro,(1-1)//ruby--24.0%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,(1-1)//Tentacruel tentacle--Raro,", evoStone:"", boost:"3", booStone:"Water stone", habilidades:"Surf, Control Mind"},
 
 {nome:"Geodude", numero:74, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Pedra", tipo2:"Terra", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"300",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Graveler", evo2:"Golem", npreevo2:"no", npreevo1:"no", nevo1:"75", nevo2:"76", 
 mapas:'no',  vip: "no", moves:"Rock throw-10,Rock slide-10,Stone edge-13,Earth power-15,Harden-15,", loots:"(1-1)//strange rock--Raro,(1-4)//small stone--80%,(1-4)//earth ball--80%,(1-1)//stone orb--14.5%,", evoStone:"Rock stone", boost:"15", booStone:"Rock stone", habilidades:"Dig, Rock Smash, Headbutt"},
 {nome:"Graveler", numero:75, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Pedra", tipo2:"Terra", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"5000",  shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Geodude", evo1:"Golem", evo2:"no", npreevo2:"no", npreevo1:"74", nevo1:"76", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Rock throw-40,Rock slide-40,Stone edge-40,Earth power-40,Falling rocks-50,Harden-45,Selfdestruction-52,", loots:"(1-1)//strange rock--2.4%,(1-10)//small stone--80%,(1-10)//earth ball--80%,(1-1)//Rock stone--Raro,(1-1)//Earth stone--Raro,(1-1)//stone orb--22.0%,", evoStone:"Rock stone (x2)", boost:"7", booStone:"Rock stone", habilidades:"Dig, Rock Smash, Headbutt"},
 {nome:"Golem", numero:76, level:70, ball1:"Superball", ball2:"Ultraball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Pedra", tipo2:"Terra", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"100000", pricenpc:"15000",  shiny:"yes", fast:"no", heavy:"yes", preevo2:"Geodude", preevo1:"Graveler", evo1:"no", evo2:"no", npreevo2:"74", npreevo1:"75", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Rock throw-70,Rock slide-70,Stone edge-70,Earth power-70,Falling rocks-75,Harden-70,Rollout-70,Selfdestruction-75,", loots:"(1-1)//strange rock--4.3% (46.8%),(1-18)//small stone--80%,(1-18)//earth ball--80%,(1-1)//Rock stone--Raro,(1-1)//Earth stone--Raro,(1-1)//stone orb--31.0% (62.0%),", evoStone:"", boost:"4", booStone:"Rock stone", habilidades:"Dig, Rock Smash, Headbutt"},
 
 {nome:"Ponyta", numero:77, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"1500",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Rapidash", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"78", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Quick attack-20,Ember-20,Flamethrower-26,Fireball-23,Stomp-28,", loots:"(1-1)//fire horse foot--1.3%,(1-10)//essence of fire--80.0%,(1-1)//pot of lava--16.0%,", evoStone:"Fire stone (x2)", boost:"10", booStone:"Fire stone", habilidades:"Ride, Headbutt"},
 {nome:"Rapidash", numero:78, level:100, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"50000", pricenpc:"12500",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Ponyta", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"77", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Lightning horn-100,Ember-100,Flamethrower-106,Incinerate-100,Flare blitz-110,Wild charge-105,Tail whip-100,Morning sun-100,Blue flames-110,", loots:"(1-1)//fire horse foot--83%,(1-25)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--25.0%,", evoStone:"", boost:"3", booStone:"Fire stone", habilidades:"Ride, Headbutt"},
 
 {nome:"Slowpoke", numero:79, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Psycraft", tipo1:"Água", tipo2:"Psiquico", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"400",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Slowbro, Slowking", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"80,199", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Aqua tail-10,Headbutt-10,Iron tail-10,Waterball-13,Water gun-15,Confusion-18,", loots:"(1-1)//slow tail--5.0%,(1-4)//water gem--80%,(1-4)//enchanted gem--80%,(1-1)//water pendant--19.5%,", evoStone:"Water stone (x2)=Slowbro , Ancient stone (x2)=Slowking", boost:"15", booStone:"Water stone", habilidades:"Headbutt"},
 {nome:"Slowbro", numero:80, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Seavell", clan2:"Psycraft", tipo1:"Água", tipo2:"Psiquico", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"8000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Slowpoke", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"79", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Aqua tail-50,Headbutt-50,Iron tail-50,Waterball-50,Water pulse-50,Confusion-50,Psychic-57,Yawn-50,Amnesia-Passiva,", loots:"(1-1)//slow tail--8.9%,(1-11)//water gem--80%,(1-11)//enchanted gem--80%,(1-1)//Water stone--Raro,(1-1)//water pendant--28.5%,", evoStone:"", boost:"7", booStone:"Water stone", habilidades:"Headbutt, Teleport"}, 
 
 {nome:"Magnemite", numero:81, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Raibolt", clan2:"Ironhard", tipo1:"Elétrico", tipo2:"Metal", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"400",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Magneton", evo2:"Magnezone", npreevo2:"no", npreevo1:"no", nevo1:"82", nevo2:"462", 
 mapas:'no',  vip: "no", moves:"Super sonic-10,Thunder shock-10,Spark-10,Electro ball-10,Sonicboom-15,", loots:"(1-1)//magnet--3.6%,(1-4)//screw--80%,(1-4)//piece of steel--80%,(1-1)//electric box--9.5%,", evoStone:"Thunder stone", boost:"15", booStone:"Thunder stone", habilidades:"Light"},
 {nome:"Magneton", numero:82, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Raibolt", clan2:"Ironhard", tipo1:"Elétrico", tipo2:"Metal", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"5400",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Magnemite", evo1:"Magnezone", evo2:"no", npreevo2:"no", npreevo1:"81", nevo1:"462", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Super sonic-80,Thunder shock-80,Spark-80,Tri attack-95,Thunder-88,Electric storm-92,Electro ball-80,Flash cannon-88,", loots:"(1-1)//magnet--9.3%,(1-10)//screw--80%,(1-10)//piece of steel--80%,(1-1)//Thunder stone--Raro,(1-1)//electric box--17.0%,", evoStone:"Data UFO (x10)", boost:"3", booStone:"Thunder stone", habilidades:"Light"},

 {nome:"Farfetchd", numero:83, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Wingeon", clan2:"Gardestrike", tipo1:"Voador", tipo2:"Normal", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"8000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sand attack-50,Drill peck-50,Stickmerang-52,Stickslash-51,Stick throw-54,Night slash-50,Air slash-53,Agility-50,", loots:"(1-1)//Farfetchd stick--4.3%,(1-10)//straw--80%,(1-10)//rubber ball--80.0%,(1-1)//Feather stone--Raro,(1-1)//feather--37.0%,", evoStone:"", boost:"7", booStone:"Feather stone", habilidades:"Cut, Fly"},

 {nome:"Doduo", numero:84, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Wingeon", clan2:"Gardestrike", tipo1:"Voador", tipo2:"Normal", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"600",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Dodrio", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"85", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sand attack-10,Peck-10,Drill peck-10,Rage-15,Agility-15,", loots:"(1-1)//dodrio feather--1.4%,(1-4)//straw--80%,(1-4)//rubber ball--80%,(1-1)//bird beak--4.6%,", evoStone:"Feather stone", boost:"15", booStone:"Feather stone", habilidades:"Ride"},
 {nome:"Dodrio", numero:85, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Wingeon", clan2:"Gardestrike", tipo1:"Voador", tipo2:"Normal", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"5600",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Doduo", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"84", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sand attack-50,Peck-50,Drill peck-50,Pluck-55,Tri attack-58,Roost-55,Rage-50,Agility-50,", loots:"(1-1)//dodrio feather--4.3%,(1-11)//straw--80%,(1-11)//rubber ball--80%,(1-1)//Feather stone--Raro,(1-1)//Heart stone--Raro,(1-1)//bird beak--13.6%,", evoStone:"", boost:"7", booStone:"Feather stone", habilidades:"Ride"},

 {nome:"Seel", numero:86, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Gelo", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"2000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Dewgong", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"87", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Headbutt-20,Aqua tail-20,Ice shards-20,Ice beam-24,Icy wind-26,Aurora beam-28,", loots:"(1-1)//seal tail--1.3%,(1-10)//water gem--80.0%,(1-1)//ice orb--14.0%,(1-1)//water pendant--6.0%,", evoStone:"Ice stone,Water stone", boost:"10", booStone:"Water stone", habilidades:"Headbutt"},
 {nome:"Dewgong", numero:87, level:60, ball1:"Superball", ball2:"Ultraball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Gelo", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"100000", pricenpc:"12000",  shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Seel", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"86", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Aqua tail-60,Headbutt-60,Brine-60,Ice shards-60,Ice beam-60,Icy wind-60,Aurora beam-64,Blizzard-66,Rest-66,Safeguard-65,", loots:"(1-1)//seal tail--1.3%,(1-16)//snowball--80.0%,(1-16)//water gem--80.0%,(1-1)//Ice stone--Raro,(1-1)//Water stone--Raro,(1-1)//ice orb--27.5% (82.5%),(1-1)//water pendant--19.5% (78.0%),(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone:"", boost:"4", booStone:"Ice stone", habilidades:"Surf, Headbutt"},

 {nome:"Grimer", numero:88, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Venenoso", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"300",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Muk", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"89", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Mud shot-10,Acid-10,Sludge-10,Mud bomb-13,Poison bomb-15,Harden-17,", loots:"(1-1)//gosme--5.0%,(1-8)//bottle of poison--80.0%,", evoStone:"Venom stone (x2)", boost:"15", booStone:"Venom stone", habilidades:""},
 {nome:"Muk", numero:89, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Malefic", clan2:"Nenhum", tipo1:"Venenoso", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"50000", pricenpc:"11000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Grimer", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"88", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Mud shot-80,Acid-80,Sludge-80,Mud bomb-80,Poison bomb-80,Venoshock-92,Sludge wave-80,Harden-90,Acid armor-88,", loots:"(1-1)//sticky hand--8.1%,(1-42)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,", evoStone:"", boost:"3", booStone:"Venom stone", habilidades:""},

 {nome:"Shellder", numero:90, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Gelo", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"200",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Cloyster", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"91", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Lick-10,Super sonic-17,Bubbles-14,Clamp-18,Ice beam-15,Harden-16,", loots:"(1-1)//locksmith of shell--4.3%,(1-5)//water gem--80%,(1-5)//snowball--80%,(1-1)//ice orb--11.0%,(1-1)//water pendant--3.0%,", evoStone:"Ice stone (x2)", boost:"20", booStone:"Water stone", habilidades:""},
 {nome:"Cloyster", numero:91, level:60, ball1:"Greatball", ball2:"Superball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Gelo", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"100000", pricenpc:"10200",  shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Shellder", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"90", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Lick-60,Super sonic-60,Bubbles-14,Clamp-60,Bubbles-60,Ice beam-60,Aurora beam-64,Blizzard-68,Harden-62,", loots:"(1-1)//strange spike--4.3% (25.5%),(1-15)//snowball--80%,(1-15)//water gem--80%,(1-1)//Ice stone--Raro,(1-1)//Water stone--Raro,(1-1)//ice orb--11.0%,(1-1)//water pendant--26.0% (78.0%),", evoStone:"", boost:"4", booStone:"Ice stone", habilidades:""},

 {nome:"Gastly", numero:92, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Fantasma", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Haunter", evo2:"Gengar", npreevo2:"no", npreevo1:"no", nevo1:"93", nevo2:"94", 
 mapas:'no',  vip: "no", moves:"Lick-20,Shadow ball-20,Night shade-26,Invisible-24,Hypnosis-28,Fear-30,Levitate-Passiva,", loots:"(1-1)//traces of ghost--Raro,(1-5)//ghost essence--80%,(1-5)//bottle of poison--80%,", evoStone:"Darkness stone", boost:"10", booStone:"Darkness stone", habilidades:""},
 {nome:"Haunter", numero:93, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Fantasma", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Gastly", evo1:"Gengar", evo2:"no", npreevo2:"no", npreevo1:"92", nevo1:"94", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Lick-40,Shadow ball-40,Night shade-40,Shadow storm-55,Invisible-40,Nightmare-45,Hypnosis-40,Fear-40,Dark accurate-1000,Levitate-Passiva,", loots:"(1-1)//traces of ghost--2.3%,(1-11)//ghost essence--80%,(1-11)//bottle of poison--80%,(1-1)//Darkness stone--Raro,(1-1)//Venom stone--Raro,", evoStone:"Darkness stone (x2)", boost:"6", booStone:"Darkness stone", habilidades:"Control mind"},
 {nome:"Gengar", numero:94, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Malefic", clan2:"Nenhum", tipo1:"Fantasma", tipo2:"Venenoso", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"Gastly", preevo1:"Haunter", evo1:"no", evo2:"no", npreevo2:"92", npreevo1:"93", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Lick-80,Shadow ball-80,Shadow punch-84,Night shade-80,Shadow storm-86,Invisible-80,Nightmare-80,Hypnosis-80,Fear-80,Dark accurate-1000,Levitate-Passiva,", loots:"(1-1)//traces of ghost--5.3% (47.3%),(1-20)//ghost essence--80%,(1-20)//bottle of poison--80%,(1-1)//Darkness stone--Raro,(1-1)//Venom stone--Raro,", evoStone:"", boost:"3", booStone:"Darkness stone", habilidades:"Levitate, Control mind"},

 {nome:"Onix", numero:95, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Pedra", tipo2:"Terra", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"6000",  shiny:"yes", fast:"no", heavy:"yes", preevo2:"no", preevo1:"no", evo1:"Steelix", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"208", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sand attack-50,Iron tail-50,Rock throw-50,Rock slide-50,Earth power-50,Falling rocks-55,Earthquake-58,Harden-50,", loots:"(1-1)//Onix tail--4.3%,(1-13)//small stone--80.0%,(1-13)//earth ball--80%,(1-1)//Rock stone--Raro,(1-1)//Earth stone--Raro,(1-1)//stone orb--25.0%,", evoStone:"Metal stone (x2)", boost:"5", booStone:"Rock stone", habilidades:"Dig, Rock smash, Ride, Headbutt"},

 {nome:"Drowzee", numero:96, level:30, ball1:"Pokeball", ball2:"Greatball", clan1:"Psycraft", clan2:"Nenhum", tipo1:"Psiquico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"1000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Hypno", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"97", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Headbutt-30,Psybeam-30,Confusion-30,Dream eater-32,Hypnosis-32,Nasty plot-38,", loots:"(1-1)//linearly guided hypnose--2.0%,(1-13)//enchanted gem--80%,(1-1)//future orb--17.5%,", evoStone:"Enigma stone (x2)", boost:"10", booStone:"Enigma stone", habilidades:"Teleport, Light, Headbutt"},
 {nome:"Hypno", numero:97, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Psycraft", clan2:"Nenhum", tipo1:"Psiquico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"6000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Drowzee", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"96", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Psy pulse-50,Psywave-50,Psybeam-50,Confusion-50,Psychic-53,Dream eater-56,Hypnosis-55,Nasty plot-55,Miracle eye-1000,", loots:"(1-1)//linearly guided hypnose--4.3% (12.8%),(1-28)//enchanted gem--80% (100%),(1-1)//Enigma stone--Raro,(1-1)//future orb--26.5% (79.5%),", evoStone:"", boost:"4", booStone:"Enigma stone", habilidades:"Teleport, Light, Headbutt, Blink"},

 {nome:"Krabby", numero:98, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"200",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Kingler", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"99", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Bubbles-10,Bubblebeam-12,Mud shot-10,Crabhammer-15,Harden-13,", loots:"(1-1)//crab claw--1.3%,(1-5)//water gem--80.0%,(1-1)//water gem--18.0%,", evoStone:"Water stone", boost:"20", booStone:"Water stone", habilidades:"Dig, Rock Smash, Cut"},
 {nome:"Kingler", numero:99, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"5200",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Krabby", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"98", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Bubbles-40,Bubblebeam-40,Mud shot-40,Crabhammer-40,Metal claw-45,Brine-40,Hyper beam-46,Guillotine-48,Harden-40,", loots:"(1-1)//crab claw--4.3%,(1-20)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water gem--27.0%,", evoStone:"", boost:"7", booStone:"Water stone", habilidades:"Dig, Rock Smash, Headbutt and Cut"},

 {nome:"Voltorb", numero:100, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Raibolt", clan2:"Nenhum", tipo1:"Elétrico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"250",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Electrode", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"101", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Thunder shock-10,Spark-10,Thunder wave-12,Rollout-15,Selfdestruction-20,", loots:"(1-5)//screw--80.0%,(1-1)//electric box--8.0%,", evoStone:"Thunder stone", boost:"20", booStone:"Thunder stone", habilidades:"Light"},
 {nome:"Electrode", numero:101, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Raibolt", clan2:"Nenhum", tipo1:"Elétrico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Voltorb", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"100", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Thunder shock-40,Spark-40,Thunder wave-40,Rollout-40,Charge beam-40,Electric storm-45,Selfdestruction-40,", loots:"(1-5)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--8.0%,", evoStone:"", boost:"8", booStone:"Thunder stone", habilidades:"Light"},

 {nome:"Exeggcute", numero:102, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Psycraft", tipo1:"Grama", tipo2:"Psiquico", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"200",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Exeggutor", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"103", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Hypnosis-14,Leech seed-10,Egg bomb-10,Confusion-16,", loots:"(1-1)//plant foot--Raro,(1-3)//seed--80.0%,(1-3)//enchanted gem--80.0%,(1-1)//leaves--28.0%,", evoStone:"Leaf stone,Enigma stone", boost:"20", booStone:"Leaf stone", habilidades:""},
 {nome:"Exeggutor", numero:103, level:100, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Naturia", clan2:"Psycraft", tipo1:"Grama", tipo2:"Psiquico", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"50000", pricenpc:"10000",  shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Exeggcute", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"102", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Seed bomb-100,Egg bomb-100,Leaf blade-100,Confusion-100,Psyshock-108,Wood hammer-100,Solar beam-104,Leaf storm-115,Hypnosis-100,", loots:"(1-1)//plant foot--8.3%,(1-14)//seed--80.0%,(1-14)//enchanted gem--80.0%,(1-1)//Leaf stone--Raro,(1-1)//leaves--41.5%,", evoStone:"", boost:"3", booStone:"Leaf stone", habilidades:"Cut, Teleport, Blink"},

 {nome:"Cubone", numero:104, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Terra", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"1000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Marowak", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"105", nevo2:"no", 
 mapas:'"top":18,"left":55,"text":"Cerulean - Saida a direita da cidade (FREE)";"top":21,"left":53,"text":"Saffron - Saída ao norte da cidade, seguindo pela direita - subterrâneo (FREE)";"top":48,"left":35,"text":"Magma Island - Parte Norte da ilha (VIP)"', 
 vip: "no",
 moves:"Headbutt-20,Bonemerang-20,Bone club-22,Bone rush-25,Rage-26,", loots:"(1-1)//bone--1.5%,(1-10)//earth ball--80.0%,(1-1)//sandbag--11.0%,", evoStone:"Earth stone (x2)", boost:"10", booStone:"Earth stone", habilidades:"Dig, Rock smash, Headbutt, Cut"},
 {nome:"Marowak", numero:105, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Terra", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"11000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Cubone", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"104", nevo1:"no", nevo2:"no", 
 mapas:'"top":6,"left":7,"text":"Outland South - Saida da esquerda (VIP)";"top":18,"left":55,"text":"Cerulean - Saida a direita da cidade (FREE)";"top":21,"left":53,"text":"Saffron - Saída ao norte da cidade, seguindo pela direita - subterrâneo (FREE)";"top":48,"left":35,"text":"Magma Island - Parte Norte da ilha (VIP)"', 
 vip: "no",
 moves:"Mud shot-50,Headbutt-50,Bonemerang-50,Bone club-50,Bone rush-50,Earth power-54,Bulldoze-56,Rage-55,Smack down-58,Bone spin-Passiva,", loots:"(1-1)//bone--4.3% (80.0%),(1-28)//earth ball--80.0%,(1-1)//Earth stone--Raro,(1-1)//sandbag--21.5% (86.0%),", evoStone:"", boost:"5", booStone:"Earth stone", habilidades:"Dig, Rock smash, Headbutt, Cut"},

 {nome:"Hitmonlee", numero:106, level:60, ball1:"Masterball", ball2:"Nenhuma", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Lutador", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"0", pricenpc:"500000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Tyrogue", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"236", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Triple kick lee-60,Mega kick-60,Hi jump kick-65,Furious legs-60,Demon kicker-Passiva,Evasion-Passiva,Foresight-Passiva,", loots:"(1-1)//kick machine--4.3% (21.3%),(1-1)//martial arts scroll--5.0% (25.0%),(1-30)//band aid--80.0%,(1-1)//Punch stone--Raro,", evoStone:"", boost:"4", booStone:"Punch stone", habilidades:"Rock Smash, Headbutt"},
 {nome:"Hitmonchan", numero:107, level:60, ball1:"Masterball", ball2:"nenhuma", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Lutador", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"0", pricenpc:"500000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Tyrogue", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"236", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Triple punch-60,Mega punch-60,Focus punch-65,Ultimate champion-60,Elemental hands-60,Demon puncher-Passiva,Evasion-Passiva,Foresight-Passiva,", loots:"(1-1)//punch machine--4.3% (21.3%),(1-1)//martial arts scroll--5.0% (25.0%),(1-30)//band aid--80.0%,(1-1)//Punch stone--Raro,", evoStone:"", boost:"4", booStone:"Punch stone", habilidades:"Rock Smash, Headbutt"},

 {nome:"Lickitung", numero:108, level:60, ball1:"Saffariball", ball2:"nenhuma", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"500000", pricenpc:"60000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'"top":30,"left":51,"text":"Fuchsia - Saffari (espalhados)"', 
 vip: "yes",
 moves:"Lick-60,Shadow ball-60,Slam-60,Body slam-64,Mega punch-60,Iron tail-60,Squishy licking-65,Super sonic-60,Defense curl-60,", loots:"(1-1)//tongue--4.3%,(1-28)//rubber ball--80.0%,(1-1)//Heart stone--Raro,", evoStone:"", boost:"5", booStone:"Heart stone", habilidades:"Headbutt"},

 {nome:"Koffing", numero:109, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Venenoso", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"300",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Weezing", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"110", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Mud shot-10,Acid-10,Headbutt-10,Mud bomb-13,Poison bomb-15,Poison gas-15,Selfdestruction-20,Levitate-Passiva,", loots:"(1-1)//venom flute--1.8%,(1-8)//bottle of poison--80.0%,", evoStone:"Venom stone", boost:"15", booStone:"Venom stone", habilidades:"Headbutt"},
 {nome:"Weezing", numero:110, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Malefic", clan2:"Nenhum", tipo1:"Venenoso", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Koffing", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"109", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Mud shot-50,Acid-50,Headbutt-50,Mud bomb-52,Poison bomb-55,Poison gas-50,Mortal gas-56,Selfdestruction-58,Levitate-Passiva,", loots:"(1-1)//venom flute--1.8%,(1-8)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,", evoStone:"", boost:"8", booStone:"Venom stone", habilidades:"Headbutt"},

 {nome:"Rhyhorn", numero:111, level:30, ball1:"Pokeball", ball2:"Greatball", clan1:"Orebound", clan2:"Nenhum", tipo1:"Terra", tipo2:"Pedra", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"yes", heavy:"yes", preevo2:"no", preevo1:"no", evo1:"Rhydon", evo2:"Rhyperior", npreevo2:"no", npreevo1:"no", nevo1:"112", nevo2:"464", 
 mapas:'no',  vip: "no", moves:"Horn attack-30,Stone edge-30,Rock throw-30,Dig-32,Bulldoze-33,Drill run-37,", loots:"(1-1)//horn drill--1.9%,(1-8)//small stone--80.0%,(1-8)//earth ball--80.0%,(1-1)//horn--9.5%,(1-1)//stone orb--9.0%,", evoStone:"Earth stone,Rock stone", boost:"9", booStone:"Earth stone", habilidades:"Dig, Rock Smash, Ride, Headbutt"},
 {nome:"Rhydon", numero:112, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Orebound", clan2:"Nenhum", tipo1:"Terra", tipo2:"Pedra", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13000",  shiny:"yes", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Rhyhorn", evo1:"Rhyperior", evo2:"no", npreevo2:"no", npreevo1:"111", nevo1:"464", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Horn attack-80,Stone edge-80,Rock throw-80,Dig-82,Horn drill-80,Bulldoze-83,Hammer arm-80,Fissure-90,Drill run-87,", loots:"(1-1)//horn drill--4.3% (29.8%),(1-19)//small stone--80.0%,(1-19)//earth ball--80.0%,(1-1)//Rock stone--Raro,(1-1)//Earth stone--Raro,(1-1)//horn--23.0% (92.0%),(1-1)//stone orb--22.5% (90.0%),", evoStone:"Protector (x10)", boost:"3", booStone:"Earth stone", habilidades:"Dig, Rock Smash, Headbutt"},

 {nome:"Chansey", numero:113, level:60, ball1:"nenhuma", ball2:"nenhuma", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"40000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Blissey", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"242", nevo2:"no", 
 mapas:'no',  vip: "", moves:"Doubleslap-60,Egg bomb-60,Great love-68,Sing-60,Healarea-60,Protection-66,Egg rain-66,", loots:"(1-1)//Chansey egg--2.0%,(1-1)//Chansey doll--10.0%,", evoStone:"Ancient stone,Crystal stone", boost:"4", booStone:"Heart stone", habilidades:"Headbutt"},

 {nome:"Tangela", numero:114, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Naturia", clan2:"Nenhum", tipo1:"Grama", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"10000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Tangrowth", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"465", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Absorb-50,Leech seed-50,Vine whip-50,Power whip-57,Poison powder-50,Sleep powder-55,Stun spore-50,Mega drain-Passiva,", loots:"(1-1)//blue vines--9.3%,(1-28)//seed--80.0%,(1-1)//Leaf stone--Raro,", evoStone:"Gaia Tentacles (x10)", boost:"5", booStone:"Leaf stone", habilidades:"Cut, Headbutt"},

 {nome:"Kangaskhan", numero:115, level:80, ball1:"Saffariball", ball2:"nenhuma", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"120000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Bite-80,Dizzy punch-80,Headbutt-80,Mega punch-80,Crunch-80,Sucker punch-83,Comet punch-80,Epicenter-94,Rage-80,Groundshock-Passiva,", loots:"(1-1)//kanga ear--8.3%,(1-40)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//horn--24.5%,", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:"Rock smash, Headbutt"},

 {nome:"Horsea", numero:116, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"200",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Seadra", evo2:"Kingdra", npreevo2:"no", npreevo1:"no", nevo1:"117", nevo2:"230", 
 mapas:'no',  vip: "no", moves:"Mud shot-10,Bubbles-10,Bubblebeam-15,Water gun-12,Water ball-10,", loots:"(1-1)//seahorse tail--Raro,(1-5)//water gem--80.0%,", evoStone:"Water stone", boost:"20", booStone:"Water stone", habilidades:"Headbutt"},
 {nome:"Seadra", numero:117, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"5500",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Horsea", evo1:"Kingdra", evo2:"no", npreevo2:"no", npreevo1:"116", nevo1:"230", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Mud shot-40,Smokescreen-40,Water pulse-40,Bubbles-40,Bubblebeam-40,Water gun-40,Dragon pulse-45,Hydro cannon-48,Dragon rage-Passiva,", loots:"(1-1)//seahorse tail--2.0%,(1-23)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"Crystal stone,Water stone", boost:"6", booStone:"Water stone", habilidades:"Surf, Headbutt"},

 {nome:"Goldeen", numero:118, level:10, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"3000", pricenpc:"200",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Seaking", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"119", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Super sonic-18,Horn attack-10,Poison sting-10,Water gun-12,Water pulse-15,Aqua tail-12,", loots:"(1-1)//fish fin--1.2%,(1-5)//water gem--80.0%,(1-1)//horn--3.5%,", evoStone:"Water stone", boost:"20", booStone:"Water stone", habilidades:"Surf"},
 {nome:"Seaking", numero:119, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Goldeen", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"118", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Super sonic-40,Horn attack-40,Waterfall-45,Water gun-40,Water pulse-40,Aqua tail-40,Horn drill-48,Aqua ring-40,", loots:"(1-1)//fish fin--4.3%,(1-18)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//horn--11.0%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"", boost:"8", booStone:"Water stone", habilidades:"Surf"},

 {nome:"Staryu", numero:120, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Psycraft", tipo1:"Água", tipo2:"Psiquico", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"400",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Starmie", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"121", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Swift-20,Water gun-20,Bubblebeam-23,Psyshock-28,Psychic-20,Harden-20,Recover-25,", loots:"(1-1)//gem star--1.9%,(1-8)//water gem--80.0%,(1-1)//ruby--4.5%,", evoStone:"Water stone", boost:"15", booStone:"Water stone", habilidades:"Surf"},
 {nome:"Starmie", numero:121, level:80, ball1:"Superball", ball2:"Ultraball", clan1:"Seavell", clan2:"Psycraft", tipo1:"Água", tipo2:"Psiquico", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Staryu", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"120", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Swift-80,Water gun-80,Power gem-80,Bubblebeam-80,Rapid spin-88,Psychic-80,Calm mind-80,Hidropump-85,Recover-85,", loots:"(1-1)//gem star--4.3%,(1-9)//water gem--80.0%,(1-9)//enchanted gem--80.0%,(1-1)//Water stone--Raro,(1-1)//Enigma stone--Raro,(1-1)//ruby--10.5%,", evoStone:"", boost:"3", booStone:"Water stone", habilidades:"Surf"},

 {nome:"Mr.mime", numero:122, level:70, ball1:"Saffariball", ball2:"nenhuma", clan1:"Psycraft", clan2:"Nenhum", tipo1:"Psiquico", tipo2:"Fada", regiao:"Kanto", geracao:"1", dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"40000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Ice punch-70,Psywave-70,Dazzling gleam-74,Confusion-70,Psychic-70,Psyusion-78,Reflect-70,Mimic wall-70,Miracle eye-1000,", loots:"(1-1)//mimic clothes--4.3%,(1-30)//enchanted gem--80%,(1-1)//Enigma stone--Raro,(1-1)//future orb--28.0%,", evoStone:"", boost:"4", booStone:"Enigma stone", habilidades:"Teleport, Light, Blink"},

 {nome:"Scyther", numero:123, level:100, ball1:"Saffariball", ball2:"nenhuma", clan1:"Naturia", clan2:"Wingeon", tipo1:"Inseto", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Sem sistema", xpcaught:"650000", pricenpc:"120000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Scizor", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"212", nevo2:"no", 
 mapas:'"top":5,"left":10,"text":"Outland North - Saida Sul (após o respawn de pinsir)";"top":30,"left":51,"text":"Fuchsia - Saffari (subsolo + Respawns aleatórios)"', 
 vip: "yes",
 moves:"Quick attack-100,Night slash-100,Wing attack-100,Fury cutter-105,Shredder team-115,Air slash-103,Agility-100,Team slice-115,Swords dance-108,Counter helix-Passiva,Evasion-Passiva,", loots:"(1-1)//scythe--Raro,(1-20)//bug gosme--80.0%,(1-20)//straw--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//Feather stone--Raro,(1-1)//pot of moss bug--39.0% (78.0%),", evoStone:"Metal stone (x2)", boost:"3", booStone:"Cocoon stone", habilidades:"Cut, Headbutt"},

 {nome:"Jynx", numero:124, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Seavell", clan2:"Psycraft", tipo1:"Gelo", tipo2:"Psiquico", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"500000", pricenpc:"120000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Smoochum", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"238", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Lovely kiss-80,Draining kiss-80,Psywave-80,Psy pulse-80,Ice ball-80,Ice beam-80,Icy wind-80,Aurora beam-84,Blizzard-86,Heart stamp-88,", loots:"(1-1)//ice bra--Raro,(1-19)//snowball--80.0%,(1-19)//enchanted gem--80.0%,(1-1)//Ice stone--Raro,(1-1)//Enigma stone--Raro,(1-1)//ice orb--30.5% (91.5%),(1-1)//future orb--22.5% (67.5%),(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone:"", boost:"3", booStone:"Ice stone", habilidades:"Teleport, Blink"},

 {nome:"Electabuzz", numero:125, level:100, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Raibolt", clan2:"Nenhum", tipo1:"Elétrico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"500000", pricenpc:"120000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Elekid", evo1:"Electivire", evo2:"no", npreevo2:"no", npreevo1:"239", nevo1:"466", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Low kick-100,Electroweb-100,Thunder punch-100,Thunder shock-100,Thunder bolt-100,Focus blast-100,Thunder-106,Mamaragan-110,Static-Passiva,", loots:"(1-1)//electric tail--Raro,(1-40)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--29.0% (58.0%),", evoStone:"Electirizer (x10)", boost:"3", booStone:"Thunder stone", habilidades:"Rock smash, Light, Headbutt"},

 {nome:"Magmar", numero:126, level:100, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"500000", pricenpc:"120000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Magby", evo1:"Magmortar", evo2:"no", npreevo2:"no", npreevo1:"240", nevo1:"467", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Scratch-100,Smog-100,Fire punch-100,Ember-100,Flamethrower-100,Fireball-100,Fire blast-100,Magma storm-108,Sunny day-112,Flame body-Passiva,", loots:"(1-1)//magma foot--1.5% (5.8%),(1-40)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--34.0% (68.0%),", evoStone:"Magmarizer (x10)", boost:"3", booStone:"Fire stone", habilidades:"Rock smash, Headbutt"},

 {nome:"Pinsir", numero:127, level:100, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Naturia", clan2:"Nenhum", tipo1:"Inseto", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"40000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Bug bite-100,Brick break-100,Bind-100,X scissor-105,Fury cutter-108,Guillotine-110,Revenge-112,Harden-102,Swords dance-108,Bug instinct-Passiva,Seismic toss-Passiva,", loots:"(1-1)//Pinsir horn--10.3% (92.3%),(1-50)//bug gosme--80.0%,(1-1)//pot of moss bug--28.5% (85.5%),(1-1)//Cocoon stone--Raro,", evoStone:"", boost:"3", booStone:"Cocoon stone", habilidades:"Cut, Rock smash, Headbutt"},

 {nome:"Tauros", numero:128, level:50, ball1:"Greatball", ball2:"Superball", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Médio", xpcaught:"50000", pricenpc:"5000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Headbutt-50,Quick attack-50,Horn attack-50,Hyper beam-55,Thrash-56,Rage-50,Rest-55,Scary face-52,", loots:"(1-1)//bull tail--4.3%,(1-23)//rubber ball--80.0%,(1-1)//horn--14.0%,(1-1)//Heart stone--Raro,", evoStone:"", boost:"6", booStone:"Heart stone", habilidades:"Rock smash, Ride, Headbutt"},

 {nome:"Magikarp", numero:129, level:1, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Fácil", xpcaught:"500", pricenpc:"5",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Gyarados", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"130", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Splash-1,", loots:"(1-1)//Magikarp fin--80.0%,(1-1)//water gem--80.0%,", evoStone:"Crystal stone,Water stone", boost:"30", booStone:"Water stone", habilidades:""},
 {nome:"Gyarados", numero:130, level:100, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Seavell", clan2:"Wingeon", tipo1:"Água", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"500000", pricenpc:"55000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Magikarp", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"129", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Roar-110,Dragon tail-100,Ice fang-100,Waterball-100,Twister-104,Hydro cannon-100,Dragon breath-100,Hyper beam-100,Hydropump-108,Rain dance-100,Dragon rage-Passiva,", loots:"(1-1)//Gyarados tail--2.3% (2.3%),(1-21)//water gem--80.0%,(1-21)//straw--80.0%,(1-1)//Water stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//water pendant--40.5% (40.5%),(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"", boost:"3", booStone:"Water stone", habilidades:"Surf, Headbutt"},

 {nome:"Lapras", numero:131, level:100, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Gelo", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"500000", pricenpc:"120000",  shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Ice beam-100,Ice shards-100,Water gun-100,Waterball-100,Powder snow-100,Aurora beam-100,Blizzard-108,Hydropump-110,Sing-100,Safeguard-110,Follow me-100,", loots:"(1-1)//giant fin--4.3%,(1-20)//water pendant--80.0%,(1-20)//snowball--80.0%,(1-1)//Water stone--Raro,(1-1)//Ice stone--Raro,(1-1)//water pendant--39.0%,(1-1)//ice orb--24.0%,(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone:"", boost:"3", booStone:"Ice stone", habilidades:"Surf, Headbutt"},

 {nome:"Ditto", numero:132, level:1, ball1:"nenhuma", ball2:"nenhuma", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "", moves:"Transform-Habilidade,", loots:"no", evoStone:"", boost:"7", booStone:"Heart stone", habilidades:"Transform"},

 {nome:"Eevee", numero:133, level:20, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Sem sistema", xpcaught:"400000", pricenpc:"45000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Vaporeon, Jolteon, Flareon, Espeon, Umbreon", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"134,135,136,196,197", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sand attack-20,Quick attack-20,Bite-20,Headbutt-20,Iron tail-26,Great love-28,", loots:"(1-1)//fur--100.0%,(1-1)//toy box--15.0%,(1-1)//eevee valentines card--2.0%,(1-1)//Diamond dust--Raro,", evoStone:"Water stone (x2)=Vaporeon, Thunder stone (x2)=Jolteon, Fire stone (x2)=Flareon, Darkness stone (x2)=Umbreon, Enigma stone (x2)=Espeon", boost:"10", booStone:"Heart stone", habilidades:"Dig, Headbutt"},
 {nome:"Vaporeon", numero:134, level:60, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"50000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Eevee", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"133", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Quick attack-60,Bite-60,Water gun-60,Bubblebeam-60,Water pulse-60,Muddy water-60,Aurora beam-64,Hydro cannon-68,Aqua ring-60,", loots:"(1-1)//water pendant--50.0%(1-1)//vaporeon cream--100.0%,(1-1)//Water stone--5.0%,(1-1)//vaporeon bag--1.5%,(1-1)//jolteon bag--1.5%,(1-1)//eevee bag--1.5%,(1-1)//flareon bag--1.5%,(1-1)//umbreon bag--1.5%,(1-1)//espeon bag--1.5%,(1-1)//vaporeon valentines card--2.0%,(1-1)//glaceon bag--Raro,(1-1)//leafeon bag--Raro,(1-1)//sylveon bag--Raro,", evoStone:"", boost:"4", booStone:"Water stone", habilidades:"Dig, Surf, Headbutt"},
 {nome:"Jolteon", numero:135, level:60, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Raibolt", clan2:"Nenhum", tipo1:"Elétrico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"50000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Eevee", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"133", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Quick attack-60,Thunder bolt-60,Thunder fang-60,Pin missile-62,Last resort-60,Thunder-65,Electric storm-68,Volt fang-64,Agility-60,", loots:"(1-1)//electric box--50.0%(1-1)//jolteon cream--100.0%,(1-1)//Thunder stone--5.0%,(1-1)//vaporeon bag--1.5%,(1-1)//jolteon bag--1.5%,(1-1)//eevee bag--1.5%,(1-1)//flareon bag--1.5%,(1-1)//umbreon bag--1.5%,(1-1)//espeon bag--1.5%,(1-1)//jolteon valentines card--2.0%,(1-1)//glaceon bag--Raro,(1-1)//leafeon bag--Raro,(1-1)//sylveon bag--Raro,", evoStone:"", boost:"4", booStone:"Thunder stone", habilidades:"Dig, Light, Headbutt"},
 {nome:"Flareon", numero:136, level:60, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"50000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Eevee", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"133", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Quick attack-60,Bite-60,Flamethrower-60,Sacred fire-60,Blaze kick-60,Flame burst-60,Overheat-64,Fire blast-68,", loots:"(1-1)//pot of lava--50.0%(1-1)//flareon cream--100.0%,(1-1)//Fire stone--5.0%,(1-1)//vaporeon bag--1.5%,(1-1)//jolteon bag--1.5%,(1-1)//eevee bag--1.5%,(1-1)//flareon bag--1.5%,(1-1)//umbreon bag--1.5%,(1-1)//espeon bag--1.5%,(1-1)//flareon valentines card--2.0%,(1-1)//glaceon bag--Raro,(1-1)//leafeon bag--Raro,(1-1)//sylveon bag--Raro,", evoStone:"", boost:"4", booStone:"Fire stone", habilidades:"Dig, Headbutt"},

 {nome:"Porygon", numero:137, level:40, ball1:"nenhuma", ball2:"nenhuma", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Não capturável", xpcaught:"0", pricenpc:"60000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Porygon2", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"233", nevo2:"no", 
 mapas:'no',  vip: "", moves:"Super sonic-40,Psybeam-40,Psycho cut-48,Psychic-40,Zap cannon-44,Focus energy-48,Magic coat-46,Restore-40,", loots:"no", evoStone:"Ancient stone,Crystal stone", boost:"7", booStone:"Heart stone", habilidades:"Teleport, Light, Fly, Blink"},

 {nome:"Omanyte", numero:138, level:20, ball1:"Masterball", ball2:"nenhuma", clan1:"Seavell", clan2:"Orebound", tipo1:"Água", tipo2:"Pedra", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"0", pricenpc:"20000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Omastar", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"139", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Bite-20,Rock throw-20,Waterball-20,Water gun-20,Mud shot-20,Brine-25,Harden-26,Ancient power-30,", loots:"(1-1)//helix fossil--Raro,(1-5)//water gem--80.0%,(1-5)//small stone--80.0%,(1-1)//stone orb--16.0%,", evoStone:"Rock stone,Crystal stone", boost:"10", booStone:"Water stone", habilidades:"Dig, Headbutt"},
 {nome:"Omastar", numero:139, level:80, ball1:"Masterball", ball2:"nenhuma", clan1:"Seavell", clan2:"Orebound", tipo1:"Água", tipo2:"Pedra", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"0", pricenpc:"75000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Omanyte", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"138", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Bite-80,Rock throw-80,Stone edge-80,Rock slide-80,Rock blast-80,Rollout-90,Ancient power-95,Hidropump-88,Harden-90,", loots:"(1-1)//helix fossil--Raro,(1-20)//water gem--80.0%,(1-20)//small stone--80.0%,(1-1)//Water stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//stone orb--34.0%,", evoStone:"", boost:"3", booStone:"Water stone", habilidades:"Dig, Headbutt, Rock smash, Surf"},

 {nome:"Kabuto", numero:140, level:20, ball1:"Masterball", ball2:"nenhuma", clan1:"Seavell", clan2:"Orebound", tipo1:"Água", tipo2:"Pedra", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"0", pricenpc:"20000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Kabutops", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"141", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Scratch-20,Bubbles-20,Slash-20,Mud shot-20,Night slash-20,Harden-28,Ancient power-26,Mega drain-Passiva,", loots:"(1-1)//dome fossil--Raro,(1-5)//water gem--80.0%,(1-5)//small stone--80.0%,(1-1)//stone orb--16.0%,", evoStone:"Crystal stone,Rock stone", boost:"10", booStone:"Water stone", habilidades:"Cut, Dig"},
 {nome:"Kabutops", numero:141, level:80, ball1:"Masterball", ball2:"nenhuma", clan1:"Seavell", clan2:"Orebound", tipo1:"Água", tipo2:"Pedra", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"0", pricenpc:"75000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Kabuto", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"140", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Absorb-80,Slash-85,Rock throw-80,Rock slide-80,Mud shot-85,Night slash-80,Rock tomb-80,Ancient power-95,Harden-90,Fossilized shell-Passiva,", loots:"(1-1)//dome fossil--Raro,(1-20)//water gem--80.0%,(1-20)//small stone--80.0%,(1-1)//Water stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//stone orb--34.0%,", evoStone:"", boost:"3", booStone:"Rock stone", habilidades:"Rock smash, Dig, Cut, Surf, Headbutt"},

 {nome:"Aerodactyl", numero:142, level:150, ball1:"nenhuma", ball2:"nenhuma", clan1:"Orebound", clan2:"Wingeon", tipo1:"Pedra", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Roar-160,Super sonic-150,Bite-150,Crunch-150,Rock throw-150,Rock slide-150,Air cutter-158,Wing attack-150,Falling rocks-155,Hyper beam-160,Ancient power-165,", loots:"(1-1)//old amber--Raro,(1-25)//small stone--80.0%,(1-25)//straw--80.0%,(1-1)//Rock stone--3.0%,(1-1)//Ancient stone--Raro,(1-1)//stone orb--40.0%,", evoStone:"", boost:"30", booStone:"Ancient stone", habilidades:"Fly, Rock smash, Headbutt"},

 {nome:"Snorlax", numero:143, level:100, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Gardestrike", clan2:"Nenhum", tipo1:"Normal", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"650000", pricenpc:"200000",  shiny:"yes", fast:"no", heavy:"yes", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Lick-100,Bite-100,Crunch-100,Mega punch-100,Body slam-104,Giga impact-105,Hyper beam-105,Crusher stomp-110,Rest-106,", loots:"(1-1)//bitten apple--20.0% (80.0%),(1-1)//Heart stone--Raro,(1-1)//pizza--30.0%,(1-1)//hamburguer--30.0%,(1-1)//hotdog--30.0%,", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:"Rock smash, Headbutt"},

 {nome:"Articuno", numero:144, level:200, ball1:"nenhuma", ball2:"nenhuma", clan1:"Seavell", clan2:"Wingeon", tipo1:"Gelo", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Peck-200,Ice shards-200,Ice beam-200,Drill peck-200,Ancient power-200,Frost breath-200,Air cutter-200,Pluck-200,Powder snow-200,Aerial ace-200,Aurora beam-200,Blizzard-200,Iceshock-200,Frost tornado-200,", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
 {nome:"Zapdos", numero:145, level:200, ball1:"nenhuma", ball2:"nenhuma", clan1:"Raibolt", clan2:"Wingeon", tipo1:"Elétrico", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Peck-200,Thunder shock-200,Thunder bolt-200,Drill peck-200,Ancient power-200,Thunder wave-200,Wing attack-200,Charge beam-200,Electro ball-200,Aerial ace-200,Thunder-200,Electric storm-200,Electro field-200,Lightning hell-200,", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
 {nome:"Moltres", numero:146, level:200, ball1:"nenhuma", ball2:"nenhuma", clan1:"Volcanic", clan2:"Wingeon", tipo1:"Fogo", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Peck-200,Ember-200,Flamethrower-200,Drill peck-200,Ancient power-200,Air slash-200,Eruption-200,Solar beam-200,Aerial ace-200,Fire blast-200,Blast burn-200,Magma storm-200,Inferno-200,Hell fire-200,", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},

 {nome:"Dratini", numero:147, level:30, ball1:"Superball", ball2:"Ultraball", clan1:"Wingeon", clan2:"Nenhum", tipo1:"Dragão", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"50000", pricenpc:"15000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Dragonair", evo2:"Dragonite", npreevo2:"no", npreevo1:"no", nevo1:"148", nevo2:"149", 
 mapas:'no',  vip: "yes", moves:"Aqua tail-30,Thunder wave-30,Slam-30,Twister-31,Hyper beam-38,Dragon breath-35,Dragon rage-Passiva,", loots:"(1-1)//dragon tail--Raro,(1-10)//dragon scale--80.0%,(1-1)//dragon tooth--Raro,", evoStone:"Crystal stone", boost:"50", booStone:"Crystal stone", habilidades:"Headbutt"},
 {nome:"Dragonair", numero:148, level:60, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Wingeon", clan2:"Nenhum", tipo1:"Dragão", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"500000", pricenpc:"65000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Dratini", evo1:"Dragonite", evo2:"no", npreevo2:"no", npreevo1:"147", nevo1:"149", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Aqua tail-60,Thunder wave-60,Slam-60,Wrap-60,Dragon tail-60,Dragon breath-62,Twister-64,Hyper beam-68,Dragon rage-Passiva,", loots:"(1-1)//dragon tail--2.4% (2.4%),(1-30)//dragon scale--80.0%,(1-1)//Crystal stone--Raro,(1-1)//dragon tooth--2.0% (4.0%),(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone:"Crystal stone (x2)", boost:"50", booStone:"Crystal stone", habilidades:"Fly, Headbutt"},
 {nome:"Dragonite", numero:149, level:100, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Wingeon", clan2:"Nenhum", tipo1:"Dragão", tipo2:"Voador", regiao:"Kanto", geracao:"1", dificuldade:"Difícil", xpcaught:"650000", pricenpc:"125000",  shiny:"no", fast:"no", heavy:"yes", preevo2:"Dratini", preevo1:"Dragonair", evo1:"no", evo2:"no", npreevo2:"147", npreevo1:"148", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Aqua tail-100,Thunder wave-100,Slam-100,Dragon claw-100,Dragon breath-102,Twister-104,Wing attack-106,Hyper beam-108,Draco meteor-115,Dragon rage-Passiva,", loots:"(1-1)//dragon tail--2.4% (2.4%),(1-25)//dragon scale--80.0%,(1-25)//straw--80.0%,(1-1)//Crystal stone--Raro,(1-1)//dragon tooth--3.0% (30%),(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone:"", boost:"30", booStone:"Crystal stone", habilidades:"Fly, Rock smash, Headbutt"},

 {nome:"Mewtwo", numero:150, level:500, ball1:"nenhuma", ball2:"nenhuma", clan1:"Psycraft", clan2:"Nenhum", tipo1:"Psiquico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Swift-500,Shadow ball-500,Psybeam-500,Psywave-500,Confusion-500,Psychic-500,Psystrike-500,Recover-500,Barrier-500,Fear-500,Reflect-500,Miracle eye-500,", loots:"(1-1)//future orb--100.0%,(1-1)//Mewtwo helmet--Raro,(1-1)//Enigma stone--10.0%,", evoStone:"", boost:"", booStone:"", habilidades:""},
 {nome:"Mew", numero:151, level:200, ball1:"nenhuma", ball2:"nenhuma", clan1:"Psycraft", clan2:"Nenhum", tipo1:"Psiquico", tipo2:"Nenhum", regiao:"Kanto", geracao:"1", dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Shadow ball-200,Brine-200,Flamethrower-200,Thunder bolt-200,Psychic-200,Instant teleportation-200,Hydro cannon-200,Solar beam-200,Ancient power-200,Metronome-200,Barrier-200,Reflect-200,Recover-200,", loots:"(1-1)//future orb--100.0%,(1-1)//Enigma stone--100.0%,", evoStone:"", boost:"", booStone:"", habilidades:""},

///////// INICIO GERACAO 2
 {nome:"Chikorita", numero:152, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Naturia", clan2:"Nenhum", tipo1:"Grama", tipo2:"Nenhum", regiao:"Johto", geracao:"2", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Bayleef", evo2:"Meganium", npreevo2:"no", npreevo1:"no", nevo1:"153", nevo2:"154", 
 mapas:'no',  vip: "no", moves:"Body slam-20,Razor leaf-20,Magical leaf-20,Synthesis-25,Solar beam-26,Sleep powder-28,Poison powder-20,Aromatherapy-20,", loots:"(1-1)//great petal--Raro,(1-10)//seed--80.0%,(1-1)//leaves--26.0%,(1-1)//bag of pollem--6.0%,", evoStone:"Leaf stone", boost:"10", booStone:"Leaf stone", habilidades:"Headbutt"},
 {nome:"Bayleef", numero:153, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Naturia", clan2:"Nenhum", tipo1:"Grama", tipo2:"Nenhum", regiao:"Johto", geracao:"2", dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Chikorita", evo1:"Meganium", evo2:"no", npreevo2:"no", npreevo1:"152", nevo1:"154", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Body slam-40,Razor leaf-40,Magical leaf-40,Petal dance-45,Synthesis-40,Leaf tornado-48,Sleep powder-44,Poison powder-40,Light screen-40,", loots:"(1-1)//great petal--2.0%,(1-20)//seed--80.0%,(1-1)//Leaf stone--Raro,(1-1)//leaves--32.0%,(1-1)//bag of pollem--12.0%,", evoStone:"Leaf stone (x2)", boost:"7", booStone:"Leaf stone", habilidades:"Ride, Headbutt"},
 {nome:"Meganium", numero:154, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Naturia", clan2:"Nenhum", tipo1:"Grama", tipo2:"Nenhum", regiao:"Johto", geracao:"2", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",  shiny:"yes", fast:"no", heavy:"yes", preevo2:"Chikorita", preevo1:"Bayleef", evo1:"no", evo2:"no", npreevo2:"152", npreevo1:"153", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Razor leaf-80,Magical leaf-80,Petal dance-80,Leaf tornado-90,Ingrain-90,Sleep powder-80,Light screen-80,Aromatherapy-84,", loots:"(1-1)//great petal--4.3% (38.3%),(1-43)//seed--80.0%,(1-1)//Leaf stone--Raro,(1-1)//leaves--45.5% (91.0%),(1-1)//bag of pollem--25.5% (76.5%),", evoStone:"", boost:"3", booStone:"Leaf stone", habilidades:"Cut, Ride, Headbutt"},

 {nome:"Cyndaquil", numero:155, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Johto", geracao:"2", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Quilava", evo2:"Typhlosion", npreevo2:"no", npreevo1:"no", nevo1:"156", nevo2:"157", 
 mapas:'no',  vip: "yes", moves:"Quick attack-20,Swift-22,Ember-20,Flamethrower-20,Smokescreen-24,Eruption-26,Defense curl-25,", loots:"(1-1)//hot fur--Raro,(1-10)//essence of fire--80.0%,(1-1)//pot of lava--16.0%,(1-1)//fur--6.0%,", evoStone:"Fire stone", boost:"10", booStone:"Fire stone", habilidades:"Dig, Cut, Headbutt"},
 {nome:"Quilava", numero:156, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Johto", geracao:"2", dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Cyndaquil", evo1:"Typhlosion", evo2:"no", npreevo2:"no", npreevo1:"155", nevo1:"157", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Quick attack-40,Swift-40,Ember-40,Flamethrower-40,Flame circle-40,Smokescreen-40,Eruption-45,Defense curl-40,", loots:"(1-1)//hot fur--2.0%,(1-20)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--22.0%,(1-1)//fur--12.0%,", evoStone:"Fire stone (x2)", boost:"7", booStone:"Fire stone", habilidades:"Dig, Cut, Headbutt"},
 {nome:"Typhlosion", numero:157, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Volcanic", clan2:"Nenhum", tipo1:"Fogo", tipo2:"Nenhum", regiao:"Johto", geracao:"2", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"Cyndaquil", preevo1:"Quilava", evo1:"no", evo2:"no", npreevo2:"155", npreevo1:"156", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Quick attack-80,Swift-80,Ember-80,Flamethrower-80,Flame circle-80,Smokescreen-80,Eruption-80,Lava plume-85,Inferno-90,Defense curl-80,", loots:"(1-1)//hot fur--6.0% (48.0%),(1-43)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--35.5% (71.0%),(1-1)//fur--25.5% (76.5%),", evoStone:"", boost:"3", booStone:"Fire stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},

 {nome:"Totodile", numero:158, level:20, ball1:"Pokeball", ball2:"Greatball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Johto", geracao:"2", dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Croconaw", evo2:"Feraligatr", npreevo2:"no", npreevo1:"no", nevo1:"159", nevo2:"160", 
 mapas:'no',  vip: "yes", moves:"Bite-20,Crunch-20,Water gun-20,Ice fang-24,Aqua tail-22,Waterfall-26,Agility-28,", loots:"(1-1)//red scale--Raro,(1-10)//water gem--80.0%,(1-1)//water pendant--21.0%,(1-1)//nail--6.0%,", evoStone:"Water stone", boost:"10", booStone:"Water stone", habilidades:"Surf, Cut, Headbutt"},
 {nome:"Croconaw", numero:159, level:40, ball1:"Greatball", ball2:"Superball", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Johto", geracao:"2", dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Totodile", evo1:"Feraligatr", evo2:"no", npreevo2:"no", npreevo1:"158", nevo1:"160", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Bite-40,Crunch-40,Bubbles-40,Water gun-40,Ice fang-40,Water pulse-40,Hydro cannon-48,Waterfall-45,Scary face-42,Agility-40,", loots:"(1-1)//red scale--2.0%,(1-20)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--27.0%,(1-1)//nail--12.0%,", evoStone:"Water stone (x2)", boost:"7", booStone:"Water stone", habilidades:"Surf, Cut, Headbutt"},
 {nome:"Feraligatr", numero:160, level:80, ball1:"Ultraball", ball2:"Nenhuma", clan1:"Seavell", clan2:"Nenhum", tipo1:"Água", tipo2:"Nenhum", regiao:"Johto", geracao:"2", dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"Totodile", preevo1:"Croconaw", evo1:"no", evo2:"no", npreevo2:"158", npreevo1:"159", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Crunch-80,Bubbles-80,Water pulse-80,Ice fang-80,Trash-80,Hydro cannon-80,Waterfall-80,Water spout-90,Scary face-82,Agility-80,", loots:"(1-1)//red scale--4.3% (55.3%),(1-43)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--40.5% (81.0%),(1-1)//nail--25.5% (100.0%),", evoStone:"", boost:"3", booStone:"Water stone", habilidades:"Surf, Cut, Headbutt"},

 {nome:"Sentret",     numero:161,  level:10,  ball1:"Pokeball",  ball2:"Greatball",   clan1:"Gardestrike",  clan2:"Nenhum",  tipo1:"Normal",  tipo2:"Nenhum",  regiao:"Johto",  geracao:"2",  dificuldade:"Fácil", xpcaught:"3000", pricenpc:"250",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Furret", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"162", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Quick attack-10,Scratch-10,Fury swipes-10,Hyper voice-13,Rest-17,", loots:"(1-1)//squirrel tail--1.9%,(1-8)//rubber ball--80.0%,(1-1)//fur--5.5%,", evoStone:"Heart stone", boost:"15", booStone:"Heart stone", habilidades:"Dig"},
 {nome:"Furret",   numero:162,   level:40,    ball1:"Greatball",   ball2:"Superball",  clan1:"Gardestrike",   clan2:"Nenhum",  tipo1:"Normal",    tipo2:"Nenhum",   regiao:"Johto",  geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Sentret", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"161", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Quick attack-40,Scratch-40,Fury swipes-40,Hyper voice-40,Sucker punch-43,Rest-43,", loots:"(1-1)//squirrel tail--4.3%,(1-18)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//fur--11.5%,", evoStone:"", boost:"8", booStone:"Heart stone", habilidades:"Dig"},

 {nome:"Hoothoot",   numero:163,   level:20,     ball1:"Pokeball",   ball2:"Greatball",   clan1:"Gardestrike",   clan2:"Wingeon",   tipo1:"Normal",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"1500",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Noctowl", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"164", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Quick attack-20,Peck-20,Confusion-20,Drill peck-20,Dream eater-25,Hypnosis-25,Roost-25,", loots:"(1-1)//owl feather--1.3%,(1-5)//straw--80.0%,(1-5)//rubber ball--80.0%,(1-1)//feather--31.0%,", evoStone:"Feather stone (x2)", boost:"10", booStone:"Feather stone", habilidades:""},
 {nome:"Noctowl", numero:164,   level:60,   ball1:"Superball",   ball2:"Ultraball",  clan1:"Gardestrike",   clan2:"Wingeon",   tipo1:"Normal",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"100000", pricenpc:"11500",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Hoothoot", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"163", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Quick attack-60,Peck-60,Drill peck-60,Confusion-60,Echoed voice-65,Air slash-63,Dream eater-60,Hypnosis-60,Roost-65,", loots:"(1-1)//owl feather--4.3% (59.5%),(1-16)//straw--80.0%,(1-16)//rubber ball--80.0%,(1-1)//Feather stone--Raro,(1-1)//Heart stone--Raro,(1-1)//feather--44.5% (89.0%),", evoStone:"", boost:"4", booStone:"Feather stone", habilidades:"Fly"},

 {nome:"Ledyba", numero:165,   level:10,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Inseto",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"3000", pricenpc:"250",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Ledian", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"166", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Quick attack-10,Super sonic-10,Swift-10,Silver wind-13,Agility-17,Evasion-Passiva,", loots:"(1-1)//ladybug wing--1.9%,(1-4)//bug gosme--80.0%,(1-4)//straw--80.0%,(1-1)//pot of moss bug--19.5%,", evoStone:"Cocoon stone", boost:"15", booStone:"Cocoon stone", habilidades:"Cut"},
 {nome:"Ledian", numero:166,   level:40,   ball1:"Greatball",   ball2:"Superball",   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Inseto",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Ledyba", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"165", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Quick attack-40,Super sonic-40,Swift-40,Silver wind-40,Struggle bug-48,Bug buzz-42,Reflect-48,Agility-42,Evasion-Passiva,", loots:"(1-1)//ladybug wing--4.3%,(1-9)//bug gosme--80.0%,(1-9)//straw--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--25.5%,", evoStone:"", boost:"8", booStone:"Cocoon stone", habilidades:"Cut"},

 {nome:"Spinarak", numero:167,   level:10,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Inseto",   tipo2:"Venenoso",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"3000", pricenpc:"250",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Ariados", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"168", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"String shot-10,Poison sting-10,Fury swipes-10,Poison jab-15,", loots:"(1-1)//spider leg--1.2%,(1-4)//bug gosme--80.0%,(1-4)//bottle of poison--80.0%,(1-1)//pot of moss bug--18.0%,", evoStone:"Cocoon stone", boost:"20", booStone:"Cocoon stone", habilidades:""},
 {nome:"Ariados", numero:168,   level:40,   ball1:"Greatball",   ball2:"Superball",   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Inseto",   tipo2:"Venenoso",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Spinarak", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"167", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"String shot-40,Bug bite-40,Poison sting-40,Fury swipes-40,Poison jab-40,Pin missile-43,Spider web-50,Psychic-47,", loots:"(1-1)//spider leg--8.3%,(1-9)//bug gosme--80.0%,(1-9)//bottle of poison--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--25.5%,", evoStone:"", boost:"8", booStone:"Cocoon stone", habilidades:""},

 {nome:"Crobat", numero:169,   level:80,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Malefic",   clan2:"Wingeon",   tipo1:"Venenoso",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"58000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"Zubat", preevo1:"Golbat", evo1:"no", evo2:"no", npreevo2:"41", npreevo1:"42", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Super sonic-80,Bite-80,Poison fang-80,Toxic-80,Air slash-83,Wing attack-80,Air cutter-88,Cross poison-84,Venom gale-95,Lifesteal-Passiva,", loots:"(1-1)//giant bat wing--4.3% (12.8%),(1-20)//bottle of poison--80.0%,(1-20)//straw--80.0%,(1-1)//Venom stone--Raro,(1-1)//Ancient stone--Raro,(1-1)//tooth--39.0% (39.0%),", evoStone:"", boost:"3", booStone:"Venom stone", habilidades:"Fly"},

 {nome:"Chinchou", numero:170,   level:10,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Seavell",   clan2:"Raibolt",   tipo1:"Água",   tipo2:"Elétrico",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"3000", pricenpc:"1000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Lanturn", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"171", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Super sonic-15,Bubbles-10,Spark-10,Water gun-10,Thunder wave-13,", loots:"(1-1)//point of light--1.3%,(1-4)//water gem--80.0%,(1-4)//screw--80.0%,(1-1)//water pendant--19.5%,(1-1)//electric box--4.5%,", evoStone:"Water stone,Thunder stone", boost:"15", booStone:"Water stone", habilidades:"Light"},
 {nome:"Lanturn", numero:171,   level:80,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Seavell",   clan2:"Raibolt",   tipo1:"Água",   tipo2:"Elétrico",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"100000", pricenpc:"6000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Chinchou", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"170", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Super sonic-80,Bubbles-80,Bubblebeam-80,Spark-80,Thunder wave-80,Water pulse-80,Surf-85,Wild charge-85,Hydropump-90,Bright light-90,", loots:"(1-1)//point of light--8.3%,(1-13)//water gem--80.0%,(1-13)//screw--80.0%,(1-1)//Water stone--Raro,(1-1)//Thunder stone--Raro,(1-1)//water pendant--30.0%,(1-1)//electric box--15.0%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"", boost:"3", booStone:"Thunder stone", habilidades:"Light"},

 {nome:"Pichu", numero:172,    level:20,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Pikachu", evo2:"Raichu", npreevo2:"no", npreevo1:"no", nevo1:"25", nevo2:"26", 
 mapas:'no',  vip: "yes", moves:"Quick attack-20,Thunder shock-20,Thunder bolt-22,Thunder wave-24,Iron tail-26,Thunder-26,Agility-28,Electric charge-Passiva,", loots:"(1-1)//electric rat tail--Raro,(1-10)//screw--80.0%,(1-1)//electric box--11.0%,", evoStone:"Thunder stone", boost:"10", booStone:"Thunder stone", habilidades:"Light"},
 {nome:"Cleffa", numero:173,   level:20,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Fada",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Clefairy", evo2:"Clefable", npreevo2:"no", npreevo1:"no", nevo1:"35", nevo2:"36", 
 mapas:'no',  vip: "no", moves:"Doubleslap-20,Body slam-24,Sing-30,Multi slap-22,Metronome-30,", loots:"(1-1)//topknot--1.3%,(1-10)//rubber ball--80.0%,(1-1)//comb--6.5%,", evoStone:"Heart stone", boost:"10", booStone:"Heart stone", habilidades:""},
 {nome:"Igglybuff", numero:174,   level:20,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Psycraft",   clan2:"Gardestrike",   tipo1:"Fada",   tipo2:"Normal",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Jigglypuff", evo2:"Wigglytuff", npreevo2:"no", npreevo1:"no", nevo1:"39", nevo2:"40", 
 mapas:'no',  vip: "no", moves:"Doubleslap-20,Body slam-24,Sing-20,Hyper voice-20,Softboiled-25,Charm-20,", loots:"(1-1)//microphone--Raro,(1-10)//rubber ball--80.0%,(1-1)//comb--6.5%,", evoStone:"", boost:"10", booStone:"Heart stone", habilidades:""},

 {nome:"Togepi", numero:175,   level:1,   ball1:"Superball",   ball2:"Ultraball",   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Fada",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"50000", pricenpc:"15000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Togetic", evo2:"Togekiss", npreevo2:"no", npreevo1:"no", nevo1:"176", nevo2:"468", 
 mapas:'no',  vip: "yes", moves:"Lovely kiss-1,Charm-11,Doubleslap-1,Softboiled-1,Last resort-6,Metronome-11,", loots:"(1-1)//eggshell--Raro,(1-3)//rubber ball--80.0%,(1-1)//feather--26.5%,", evoStone:"Heart stone (x2)", boost:"10", booStone:"Heart stone", habilidades:""},
 {nome:"Togetic", numero:176,   level:80,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Psycraft",   clan2:"Wingeon",   tipo1:"Fada",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"25000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Togepi", evo1:"Togekiss", evo2:"no", npreevo2:"no", npreevo1:"175", nevo1:"468", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Lovely kiss-80,Charm-80,Doubleslap-80,Fairy wind-88,Softboiled-90,Great love-87,Last resort-85,Ancient power-95,Metronome-80,", loots:"(1-1)//eggshell--4.3%,(1-15)//rubber ball--80.0%,(1-15)//straw--80.0%,(1-1)//Heart stone--Raro,(1-1)//feather--43.0%,(1-1)//Shiny stone--Raro,", evoStone:"Shiny stone", boost:"3", booStone:"Feather stone", habilidades:""}, 

 {nome:"Natu", numero:177,    level:30,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Psycraft",   clan2:"Wingeon",   tipo1:"Psiquico",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"15000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Xatu", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"178", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Peck-30,Feather dance-30,Confuse ray-30,Psy pulse-30,Night shade-34,Psychic-36,", loots:"(1-1)//strange wing--1.5%,(1-6)//straw--80.0%,(1-6)//enchanted gem--80.0%,(1-1)//feather--32.5%,", evoStone:"Feather stone,Enigma stone", boost:"10", booStone:"Feather stone", habilidades:"Teleport, Light, Blink"},
 {nome:"Xatu", numero:178,    level:80,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Psycraft",   clan2:"Wingeon",   tipo1:"Psiquico",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Natu", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"177", nevo1:"no", nevo2:"no", 
 mapas:'"top":4,"left":7,"text":"Outland North - Saída da esquerda, dentro da pirâmide (VIP)";"top":59,"left":34,"text":"Shamouti - Ao sul da ilha, necessário Squirtle bottle pra passar o caminho (FREE)";"top":88,"left":31,"text":"Deserto de Mandarim - Subterrâneo (FREE)"', 
 vip: "no",
 moves:"Peck-80,Feather dance-80,Confuse ray-82,Shadow ball-80,Night shade-85,Astonish-80,Tailwind-80,Predict-85,Double team-82,", loots:"(1-1)//strange wing--4.3% (46.8%),(1-19)//straw--80.0%,(1-19)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//Feather stone--Raro,(1-1)//feather--47.5% (95.0%),", evoStone:"", boost:"3", booStone:"Feather stone", habilidades:"Teleport, Light, Fly, Blink"},

 {nome:"Mareep", numero:179,   level:20,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Flaaffy", evo2:"Ampharos", npreevo2:"no", npreevo1:"no", nevo1:"180", nevo2:"181", 
 mapas:'no',  vip: "no", moves:"Charge-28,Tackle-20,Fire punch-20,Cotton spore-22,Thunder shock-20,Thunder bolt-22,Thunder punch-24,Signal beam-26,", loots:"(1-1)//sheep wool--Raro,(1-10)//screw--80.0%,(1-1)//electric box--11.0%,", evoStone:"Thunder stone", boost:"10", booStone:"Thunder stone", habilidades:"Light, Ride, Headbutt"},
 {nome:"Flaaffy", numero:180,   level:40,   ball1:"Greatball",   ball2:"Superball",   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Mareep", evo1:"Ampharos", evo2:"no", npreevo2:"no", npreevo1:"179", nevo1:"181", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Charge-40,Tackle-40,Fire punch-40,Cotton spore-40,Thunder shock-40,Thunder bolt-40,Thunder punch-44,Thunder-48,Signal beam-46,", loots:"(1-1)//sheep wool--2.0%,(1-20)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--17.0%,", evoStone:"Thunder stone (x2)", boost:"7", booStone:"Thunder stone", habilidades:"Light, Headbutt"},
 {nome:"Ampharos", numero:181,   level:80,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"Mareep", preevo1:"Flaaffy", evo1:"no", evo2:"no", npreevo2:"179", npreevo1:"180", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Charge-80,Dragon tail-80,Cotton spore-80,Thunder bolt-80,Thunder shock-80,Confuse ray-82,Fire punch-80,Dragon pulse-85,Electro field-90,Signal beam-80,Cotton guard-80,", loots:"(1-1)//sheep wool--4.3% (59.5%),(1-43)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--30.5% (61.0%),", evoStone:"", boost:"3", booStone:"Thunder stone", habilidades:"Light, Headbutt"},

 {nome:"Bellossom", numero:182,  level:50,   ball1:"Greatball",   ball2:"Superball",   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum",  regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"50000", pricenpc:"12000",  shiny:"no", fast:"no", heavy:"no", preevo2:"Oddish", preevo1:"Gloom", evo1:"no", evo2:"no", npreevo2:"43", npreevo1:"44", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Absorb-50,Leech seed-50,Leaf blade-50,Magical leaf-50,Poison gas-50,Petal dance-55,Leaf storm-58,Sleep powder-50,Stun spore-50,Poison powder-50,Spores reaction-Passiva,Mega drain-Passiva,", loots:"(1-1)//strange flower--4.3%,(1-25)//seed--80.0%,(1-1)//Leaf stone--Raro,(1-1)//leaves--35.0%,", evoStone:"", boost:"4", booStone:"Leaf stone", habilidades:"Cut"},

 {nome:"Maril", numero:183,    level:20,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Seavell",   clan2:"Psycraft",   tipo1:"Água",   tipo2:"Fada",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Azumarill", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"184", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Tackle-20,Aqua tail-20,Water gun-20,Waterfall-24,Bubblebeam-26,Rain dance-22,Defense curl-28,", loots:"(1-1)//blue ball--1.3%,(1-10)//water gem--80.0%,(1-1)//water pendant--21.0%,", evoStone:"Water stone (x2)", boost:"10", booStone:"Water stone", habilidades:"Surf"},
 {nome:"Azumarill", numero:184,  level:60,   ball1:"Superball",   ball2:"Ultraball",   clan1:"Seavell",   clan2:"Psycraft",   tipo1:"Água",   tipo2:"Fada",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"100000", pricenpc:"13000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Maril", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"183", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Play rough-60,Aqua tail-60,Water gun-60,Water ball-60,Waterfall-65,Bubblebeam-60,Hydropump-68,Rain dance-60,Defense curl-60,", loots:"(1-1)//blue ball--4.3%,(1-33)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--34.5%,", evoStone:"", boost:"4", booStone:"Water stone", habilidades:"Surf"},

 {nome:"Sudowoodo", numero:185,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Pedra",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Sem sistema", xpcaught:"1000000", pricenpc:"120000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Rock throw-100,Rock slide-100,Rock tomb-100,Stone edge-100,Low kick-100,Sucker punch-102,Mimic-105,Rock wrecker-105,Hammer arm-100,Sturdy-Passiva,", loots:"(1-1)//branch of stone--4.3%,(1-40)//small stone--80.0%,(1-1)//Rock stone--Raro,(1-1)//stone orb--34.0%,", evoStone:"", boost:"3", booStone:"Rock stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},

 {nome:"Politoed", numero:186,  level:70,   ball1:"Superball",   ball2:"Ultraball",   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"100000", pricenpc:"8000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"Poliwag", preevo1:"Poliwhirl", evo1:"no", evo2:"no", npreevo2:"60", npreevo1:"61", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Mud shot-70,Doubleslap-70,Bubblebeam-70,Water gun-70,Hyper voice-70,Whirlpool-72,Tongue hook-75,Tongue grap-78,Hypnosis-70,", loots:"(1-1)//strange thing--8.3%,(1-33)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--34.5%,", evoStone:"", boost:"4", booStone:"Water stone", habilidades:"Surf, Headbutt"},

 {nome:"Hoppip", numero:187,   level:1,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Grama",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"500", pricenpc:"80",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Skiploom", evo2:"Jumpluff", npreevo2:"no", npreevo1:"no", nevo1:"188", nevo2:"189", 
 mapas:'no',  vip: "no", moves:"Tackle-1,Leech seed-1,U turn-5,Synthesis-10,Sleep powder-7,Cotton spore-8,Poison powder-1,Mega drain-Passiva,", loots:"(1-1)//yellow flower--Raro,(1-3)//seed--80.0%,(1-3)//straw--80.0%,(1-1)//bag of pollem--1.5%,", evoStone:"Leaf stone", boost:"30", booStone:"Leaf stone", habilidades:""},
 {nome:"Skiploom", numero:188,  level:30,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Grama",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"2250",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Hoppip", evo1:"Jumpluff", evo2:"no", npreevo2:"no", npreevo1:"187", nevo1:"189", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Tackle-30,Leech seed-30,U turn-30,Synthesis-33,Bullet seed-36,Sleep powder-30,Cotton spore-30,Poison powder-30,Mega drain-Passiva,", loots:"(1-1)//yellow flower--2.1%,(1-6)//seed--80.0%,(1-6)//straw--80.0%,(1-1)//bag of pollem--7.5%,", evoStone:"Leaf stone (x2)", boost:"10", booStone:"Leaf stone", habilidades:""},
 {nome:"Jumpluff", numero:189,  level:50,   ball1:"Greatball",   ball2:"Superball",   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Grama",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"50000", pricenpc:"12000",  shiny:"no", fast:"no", heavy:"no", preevo2:"Hoppip", preevo1:"Skiploom", evo1:"no", evo2:"no", npreevo2:"187", npreevo1:"188", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Tackle-50,Leech seed-50,U turn-50,Synthesis-55,Bullet seed-50,Giga drain-60,Sleep powder-50,Cotton spore-50,Poison powder-50,Mega drain-Passiva,", loots:"(1-1)//yellow flower--4.3%,(1-13)//seed--80.0%,(1-13)//straw--80.0%,(1-1)//Leaf stone--Raro,(1-1)//bag of pollem--7.5%,", evoStone:"", boost:"4", booStone:"Leaf stone", habilidades:""},

 {nome:"Aipom", numero:190,    level:40,   ball1:"Greatball",   ball2:"Superball",   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sand attack-40,Doubleslap-40,Scratch-40,Swift-40,Fury swipes-44,Last resort-46,Agility-45,", loots:"(1-1)//monkey paw--4.3%,(1-20)//rubber ball--80.0%,(1-1)//bitten apple--37.0%,", evoStone:"", boost:"7", booStone:"Heart stone", habilidades:"Dig, Cut, Headbutt"},

 {nome:"Sunkern", numero:191,   level:1,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"500", pricenpc:"5",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Sunflora", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"192", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Headbutt-1,Leech seed-1,Razor leaf-1,", loots:"(1-1)//helicopter leave--1.4%,(1-5)//seed--80.0%,(1-1)//leaves--20.3%,", evoStone:"Leaf stone", boost:"30", booStone:"Leaf stone", habilidades:""},
 {nome:"Sunflora", numero:192,  level:30,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"15000", pricenpc:"5000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Sunkern", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"191", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Leech seed-30,Razor leaf-30,Petal dance-32,Bullet seed-34,Sunny day-36,Solar beam-38,Mega drain-Passiva,", loots:"(1-1)//helicopter leave--4.3%,(1-15)//seed--80.0%,(1-1)//Leaf stone--Raro,(1-1)//leaves--29.0%,", evoStone:"", boost:"9", booStone:"Leaf stone", habilidades:"Cut, Light"},

 {nome:"Yanma", numero:193,    level:50,   ball1:"Greatball",   ball2:"Superball",   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Inseto",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"50000", pricenpc:"9000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Super sonic-50,Tackle-50,Quick attack-50,U turn-50,Double team-52,Wing attack-50,Air slash-58,Bug buzz-56,", loots:"(1-1)//insect tail--4.3%,(1-13)//bug gosme--80.0%,(1-13)//straw--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--30.0%,", evoStone:"", boost:"5", booStone:"Cocoon stone", habilidades:"Cut"}, 

 {nome:"Wooper", numero:194,   level:20,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Seavell",   clan2:"Orebound",   tipo1:"Água",   tipo2:"Terra",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"2000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Quagsire", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"195", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Slam-20,Mud shot-20,Aqua tail-20,Water gun-20,Waterball-24,Muddy water-28,Earthquake-30,Amnesia-Passiva,", loots:"(1-1)//wooper horn--1.3%,(1-5)//water gem--80.0%,(1-5)//earth ball--80.0%,(1-1)//water pendant--21.0%,(1-1)//sandbag--6.0%,", evoStone:"Water stone,Earth stone", boost:"10", booStone:"Earth stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},
 {nome:"Quagsire", numero:195,  level:60,   ball1:"Greatball",   ball2:"Superball",   clan1:"Seavell",   clan2:"Orebound",   tipo1:"Água",   tipo2:"Terra",  regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"100000", pricenpc:"12000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Wooper", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"194", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Slam-60,Mud shot-60,Aqua tail-60,Water gun-60,Waterball-60,Sand tomb-62,Muddy water-65,Earthquake-66,Amnesia-Passiva,", loots:"(1-1)//wooper horn--8.3%,(1-16)//water gem--80.0%,(1-16)//earth ball--80.0%,(1-1)//Water stone--Raro,(1-1)//Earth stone--Raro,(1-1)//water pendant--34.5%,(1-1)//sandbag--19.5%,", evoStone:"", boost:"4", booStone:"Earth stone", habilidades:"Dig, Rock smash, Surf, Headbutt"}, 

 {nome:"Espeon", numero:196,   level:60,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum",  regiao:"Johto",   geracao:"2",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"50000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Eevee", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"133", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Swift-60,Bite-60,Psywave-60,Psybeam-60,Psy pulse-60,Confusion-60,Psychic-64,Psyshock-68,Miracle eye-1000,", loots:"(1-60)//enchanted gem--80.0%,(1-1)//Enigma stone--5.0%,(1-1)//vaporeon bag--1.5%,(1-1)//jolteon bag--1.5%,(1-1)//eevee bag--1.5%,(1-1)//flareon bag--1.5%,(1-1)//umbreon bag--1.5%,(1-1)//espeon bag--1.5%,(1-1)//glaceon bag--Raro,(1-1)//leafeon bag--Raro,(1-1)//sylveon bag--Raro,", evoStone:"", boost:"5", booStone:"Enigma stone", habilidades:"Dig, Teleport, Headbutt, Blink"},
 {nome:"Umbreon", numero:197,   level:60,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Noturno",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"50000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Eevee", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"133", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Quick attack-60,Bite-60,Shadowave-60,Pursuit-60,Dark pulse-60,Confuse ray-64,Last resort-60,Night daze-66,", loots:"(1-60)//dark gem--80.0%,(1-1)//Darkness stone--5.0%,(1-1)//vaporeon bag--1.5%,(1-1)//jolteon bag--1.5%,(1-1)//eevee bag--1.5%,(1-1)//flareon bag--1.5%,(1-1)//umbreon bag--1.5%,(1-1)//espeon bag--1.5%,(1-1)//glaceon bag--Raro,(1-1)//leafeon bag--Raro,(1-1)//sylveon bag--Raro,", evoStone:"", boost:"5", booStone:"Darkness stone", habilidades:"Dig, Headbutt, Blink"},

 {nome:"Murkrow", numero:198,   level:50,   ball1:"Greatball",   ball2:"Superball",   clan1:"Malefic",   clan2:"Wingeon",   tipo1:"Noturno",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"50000", pricenpc:"10000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Honchkrow", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"430", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Peck-50,Pursuit-50,Night shade-50,Wing attack-53,Sucker punch-57,Tailwind-50,Dark pulse-50,Torment-55,", loots:"(1-1)//dark beak--4.3%,(1-14)//dark gem--80.0%,(1-14)//straw--80.0%,(1-1)//Darkness stone--Raro,(1-1)//feather--41.5%,", evoStone:"", boost:"5", booStone:"Darkness stone", habilidades:""},

 {nome:"Slowking", numero:199,   level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Seavell",   clan2:"Psycraft",   tipo1:"Água",   tipo2:"Psiquico",  regiao:"Johto",   geracao:"2",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"110000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Slowpoke", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"79", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Waterball-100,Water pulse-100,Psy ball-100,Confusion-100,Surf-105,Psy impact-115,Calm mind-105,Future sight-110,Nasty plot-100,Miracle eye-1000,Zen mind-Passiva,", loots:"(1-1)//slow tail--14.3%,(1-25)//enchanted gem--80.0%,(1-25)//water gem--80.0%,(1-1)//Ancient stone--Raro,(1-1)//future orb--40.0%,(1-1)//water pendant--30.0%,", evoStone:"", boost:"30", booStone:"Ancient stone", habilidades:"Teleport, Light, Blink, Headbutt, Control mind"},

 {nome:"Misdreavus", numero:200,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Sem sistema", xpcaught:"1000000", pricenpc:"200000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Shadow ball-100,Dark pulse-100,Cursed hollow-100,Black blow-100,Black box-100,Night daze-106,Fear-100,Dark accurate-1020,Illusion-Passiva,Ghost trick-Passiva,Fear lust-Passiva,Levitate-Passiva,", loots:"(1-1)//miss trace--4.1% (20.5%),(1-40)//ghost essence--80.0%,(1-1)//Darkness stone--Raro,(1-1)//future orb--34.0% (100.0%),", evoStone:"", boost:"3", booStone:"Darkness stone", habilidades:"Teleport, Dark portal"},

 {nome:"Unown",    numero:201,  level:10,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Sem sistema", xpcaught:"200000", pricenpc:"unseleable",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Invisible-10,Hidden power-15,Levitate-Passiva,", loots:"no", evoStone:"", boost:"20", booStone:"Enigma stone", habilidades:"Blink"},

 {nome:"Wobbuffet",   numero:202,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Sem sistema", xpcaught:"1000000", pricenpc:"200000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'"top":87,"left":31,"text":"Deserto Mandarin - (FREE)"',  vip: "no", moves:"Destiny bond-100,Safeguard-110,Mirror coat-Passiva,Stunning confusion-Passiva,", loots:"(1-1)//strange tail--4.3%,(1-40)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//future orb--34.0%,", evoStone:"", boost:"3", booStone:"Enigma stone", habilidades:"Headbutt"},

 {nome:"Girafarig",   numero:203,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Psycraft",   clan2:"Gardestrike",   tipo1:"Psiquico",   tipo2:"Normal",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"120000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Tackle-80,Crunch-80,Stomp-80,Shadow ball-80,Astonish-80,Confusion-80,Psychic-80,Assurance-85,Nasty plot-95,Agility-80,", loots:"(1-1)//strange antenna--4.3% (38.3%),(1-20)//rubber ball--80.0%,(1-20)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//Heart stone--Raro,(1-1)//future orb--34.0% (68.0%),", evoStone:"", boost:"3", booStone:"Enigma stone", habilidades:"Teleport, Ride, Light, Headbutt"},

 {nome:"Pineco",   numero:204,  level:10,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Inseto",   tipo2:"Nenhum",  regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"3000", pricenpc:"300",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Forretress", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"205", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Tackle-10,Bug bite-10,Toxic spikes-10,Gyro ball-18,Harden-12,Selfdestruction-10,", loots:"(1-1)//piece of shell--Raro,(1-8)//bug gosme--80.0%,(1-1)//pot of moss bug--19.5%,", evoStone:"Cocoon stone (x2)", boost:"15", booStone:"Cocoon stone", habilidades:"Dig, Headbutt"},
 {nome:"Forretress",   numero:205,  level:80,   ball1:"Ultraball",   ball2:"Netball",   clan1:"Naturia",   clan2:"Ironhard",   tipo1:"Inseto",   tipo2:"Metal",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"100000", pricenpc:"10000",  shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Pineco", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"204", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Iron head-80,Bug bite-80,Pin missile-85,Heavy slam-80,Spikes-90,Stealth rock-90,Follow me-80,Harden-82,", loots:"(1-1)//piece of shell--8.3%,(1-16)//bug gosme--80.0%,(1-16)//piece of steel--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--34.5%,", evoStone:"", boost:"3", booStone:"Cocoon stone", habilidades:"Dig, Rock smash, Headbutt"},

 {nome:"Dunsparce",   numero:206,  level:30,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Yawn-30,Pursuit-30,Take down-30,Ancient power-42,Roost-35,Rage-32,Defense curl-32,", loots:"(1-1)//small wing--4.3%,(1-15)//rubber ball--80.0%,", evoStone:"", boost:"9", booStone:"Heart stone", habilidades:"Dig, Headbutt"},

 {nome:"Gligar",   numero:207,  level:40,   ball1:"Greatball",   ball2:"Superball",   clan1:"Orebound",   clan2:"Wingeon",   tipo1:"Terra",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Gliscor", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"472", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Sand attack-40,Slash-40,Dig-42,U turn-40,X scissor-45,Fury cutter-48,Guillotine-50,Harden-42,Shadow slice-Passiva,", loots:"(1-1)//Gligar claw--4.3%,(1-10)//earth ball--80.0%,(1-10)//straw--80.0%,(1-1)//sandbag--17.0%,(1-1)//tooth--12.0%,", evoStone:"", boost:"7", booStone:"Earth stone", habilidades:"Rock smash, Headbutt, Cut"},

 {nome:"Steelix",   numero:208,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Orebound",   clan2:"Ironhard",   tipo1:"Terra",   tipo2:"Metal",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"650000", pricenpc:"110000",  shiny:"yes", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Onix", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"95", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Iron tail-100,Iron head-100,Sand tomb-102,Rock tomb-100,Stone edge-100,Earth power-105,Fissure-110,Earthquake-107,Harden-100,Iron defense-104,", loots:"(1-1)//steelix tail--Raro,(1-25)//piece of steel--80.0%,(1-25)//earth ball--80.0%,(1-1)//Metal stone--Raro,(1-1)//Earth stone--Raro,(1-1)//sandbag--35.0% (70.0%),", evoStone:"", boost:"30", booStone:"Metal stone", habilidades:"Ride, Strenght"},

 {nome:"Snubbull",   numero:209,  level:30,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Fada",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"2500",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Granbull", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"210", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Lick-30,Bite-30,Crunch-30,Play rough-30,Fire fang-32,Ice fang-34,Rage-30,", loots:"(1-1)//dog ear--2.0%,(1-15)//rubber ball--80.0%,", evoStone:"Heart stone (x2)", boost:"9", booStone:"Heart stone", habilidades:"Headbutt"},
 {nome:"Granbull",   numero:210,  level:80,   ball1:"Superball",   ball2:"Ultraball",   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Fada",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"50000", pricenpc:"12500",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Snubbull", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"209", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Tackle-80,Ice fang-82,Dazzling gleam-84,Play rough-80,Close combat-80,Take down-80,Hyper beam-85,War dog-86,Rest-88,Pixilate-Passiva,", loots:"(1-1)//dog ear--8.1% (56.4%),(1-33)//rubber ball--80.0%,(1-1)//Heart stone--Raro,", evoStone:"", boost:"4", booStone:"Heart stone", habilidades:"Headbutt, Rock smash"},

 {nome:"Qwilfish",   numero:211,  level:50,   ball1:"Greatball",   ball2:"Superball",   clan1:"Seavell",   clan2:"Malefic",   tipo1:"Água",   tipo2:"Venenoso",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"100000", pricenpc:"10000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Tackle-50,Poison sting-50,Toxic spikes-52,Water gun-50,Aqua tail-50,Harden-54,Minimize-58,Spike skin-Passiva,", loots:"(1-1)//small tail--4.3%,(1-14)//water gem--80.0%,(1-14)//bottle of poison--80.0%,(1-1)//Water stone--Raro,(1-1)//Venom stone--Raro,(1-1)//water pendant--31.5%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"", boost:"5", booStone:"Water stone", habilidades:"Headbutt"},

 {nome:"Scizor",   numero:212,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Naturia",   clan2:"Ironhard",   tipo1:"Inseto",   tipo2:"Metal",   regiao:"Johto",   geracao:"2",   dificuldade:"Sem sistema", xpcaught:"650000", pricenpc:"220000",  shiny:"yes", fast:"yes", heavy:"yes", preevo2:"no", preevo1:"Scyther", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"123", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Quick attack-100,Iron head-100,Wing blade-100,Red fury-104,Shredder team-110,X scissor-100,Agility-100,Team claw-115,Swords dance-108,Counter claw-Passiva,Evasion-Passiva,", loots:"(1-1)//scizor claw--Raro,(1-25)//piece of steel--80.0%,(1-25)//bug gosme--80.0%,(1-1)//Metal stone--Raro,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--45.0% (90.0%),", evoStone:"", boost:"30", booStone:"Metal stone", habilidades:"Rock smash, Cut, Headbutt"},

 {nome:"Shuckle",   numero:213,  level:40,   ball1:"Greatball",   ball2:"Superball",   clan1:"Naturia",   clan2:"Orebound",   tipo1:"Inseto",   tipo2:"Pedra",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"3500",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Bug bite-40,Wrap-40,Shell attack-40,Struggle bug-48,Safeguard-40,Rest-44,", loots:"(1-1)//small shell--4.3%,(1-8)//bug gosme--80.0%,(1-8)//small stone--80.0%,(1-1)//pot of moss bug--24.0%,", evoStone:"", boost:"9", booStone:"Cocoon stone", habilidades:"Rock smash, Headbutt"},

 {nome:"Heracross",   numero:214,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Naturia",   clan2:"Gardestrike",   tipo1:"Inseto",   tipo2:"Lutador",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"120000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Low kick-100,Horn attack-100,Arm thrust-106,Mega punch-100,Close combat-100,Revenge-112,Megahorn-107,Bug fighter-110,Foresight-Passiva,Swarm-Passiva,", loots:"(1-1)//insect claw--10.1% (40.2%),(1-20)//bug gosme--80.0%,(1-20)//band aid--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//Punch stone--Raro,(1-1)//pot of moss bug--39.0% (78.0%),", evoStone:"", boost:"3", booStone:"Cocoon stone", habilidades:"Rock smash, Cut, Fly, Headbutt"},

 {nome:"Sneasel",   numero:215,  level:50,   ball1:"Greatball",   ball2:"Superball",   clan1:"Malefic",   clan2:"Seavell",   tipo1:"Noturno",   tipo2:"Gelo",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"50000", pricenpc:"10000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Scratch-50,Bite-50,Faint attack-50,Ice shards-50,Icy wind-55,Metal claw-57,Shadow claw-50,Agility-50,Evasion-Passiva,", loots:"(1-1)//cat ear--4.3%,(1-14)//dark gem--80.0%,(1-14)//snowball--80.0%,(1-1)//wool ball--24.3% (72.8%),(1-1)//Ice stone--Raro,(1-1)//Darkness stone--raro,(1-1)//ice orb--24.5%,", evoStone:"", boost:"5", booStone:"Ice stone", habilidades:"Cut, Headbutt"},

 {nome:"Teddiursa",   numero:216,  level:30,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"80000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Ursaring", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"217", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Scratch-30,Slash-30,Hammer arm-32,Fury swipes-30,Body slam-34,Scary face-34,Rest-40,", loots:"(1-1)//bear paw--Raro,(1-10)//rubber ball--80.0%,(1-1)//fur--7.0%,", evoStone:"Ancient stone,Heart stone", boost:"10", booStone:"Heart stone", habilidades:"Rock smash, Cut, Headbutt"},
 {nome:"Ursaring",   numero:217,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"650000", pricenpc:"150000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Teddiursa", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"216", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Scratch-100,Slash-100,Hammer arm-100,Fury swipes-100,Body slam-104,Thrash-105,Hyper beam-105,Magnitude-110,Quick feet-Passiva,", loots:"(1-1)//bear paw--4.3% (17.0%),(1-45)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//Ancient stone--Raro,(1-1)//fur--28.0% (56.0%),", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:"Rock smash, Cut, Headbutt"},

 {nome:"Slugma",   numero:218,  level:10,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"3000", pricenpc:"1000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Magcargo", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"219", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Ember-10,Flamethrower-12,Rock throw-10,Rock slide-10,Harden-15,Yawn-15,", loots:"(1-1)//fire ear--2.0%,(1-8)//essence of fire--80.0%,(1-1)//pot of lava--14.5%,", evoStone:"Fire stone,Rock stone", boost:"15", booStone:"Fire stone", habilidades:"Rock smash"},
 {nome:"Magcargo",   numero:219,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Volcanic",   clan2:"Orebound",   tipo1:"Fogo",   tipo2:"Pedra",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"100000", pricenpc:"11000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Slugma", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"218", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Ember-80,Rock throw-80,Rock slide-80,Flamethrower-80,Flame burst-80,Stone edge-80,Ancient power-88,Blast burn-95,Harden-80,Yawn-86,Amnesia-Passiva,", loots:"(1-1)//fire ear--8.3%,(1-15)//essence of fire--80.0%,(1-15)//small stone--80.0%,(1-1)//Fire stone--Raro,(1-1)//Rock stone--Raro,(1-1)//pot of lava--28.0%,", evoStone:"", boost:"3", booStone:"Fire stone", habilidades:"Rock smash, Headbutt"},

 {nome:"Swinub",   numero:220,  level:10,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Seavell",   clan2:"Orebound",   tipo1:"Gelo",   tipo2:"Terra",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"3000", pricenpc:"1000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Piloswine", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"221", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Tackle-10,Mud slap-10,Mud bomb-10,Ice fang-10,Icy wind-15,Frost breath-18,Amnesia-Passiva,", loots:"(1-1)//tusk--Raro,(1-4)//snowball--80.0%,(1-4)//earth ball--80.0%,(1-1)//fur--5.5%,(1-1)//ice orb--4.5%,", evoStone:"Earth stone,Ice stone", boost:"15", booStone:"Earth stone", habilidades:"Dig, Rock smash, Headbutt"},
 {nome:"Piloswine",   numero:221,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Seavell",   clan2:"Orebound",   tipo1:"Gelo",   tipo2:"Terra",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"11000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Swinub", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"220", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Mud slap-80,Mud bomb-80,Ice fang-80,Icy wind-80,Powder snow-80,Frost breath-82,Bulldoze-80,Earthquake-90,Blizzard-88,Amnesia-Passiva,", loots:"(1-1)//tusk--4.3% (21.3%),(1-20)//snowball--80.0%,(1-20)//earth ball--80.0%,(1-1)//Ice stone--Raro,(1-1)//Earth stone--Raro,(1-1)//fur--25.0% (100.0%),(1-1)//ice orb--24.0% (96.0%),(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone:"", boost:"3", booStone:"Earth stone", habilidades:"Dig, Rock smash, Ride, Headbutt"},

 {nome:"Corsola",   numero:222,  level:50,   ball1:"Greatball",   ball2:"Superball",   clan1:"Seavell",   clan2:"Orebound",   tipo1:"Água",   tipo2:"Pedra",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"50000", pricenpc:"9000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Tackle-50,Bubbles-50,Bubblebeam-50,Rock blast-50,Power gem-50,Ancient power-58,Recover-55,Harden-55,", loots:"(1-1)//piece of coral--4.3%,(1-13)//water gem--80.0%,(1-13)//small stone--80.0%,(1-1)//Water stone--Raro,(1-1)//Rock stone--Raro,(1-1)//water pendant--30.0%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"", boost:"5", booStone:"Water stone", habilidades:"Rock smash, Headbutt"},

 {nome:"Remoraid",   numero:223,  level:10,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"3000", pricenpc:"200",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Octillery", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"224", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Aqua tail-12,Ice beam-10,Water gun-12,Water ball-10,Bubblebeam-16,", loots:"(1-1)//tentacle--Raro,(1-5)//water gem--80.0%,(1-1)//water pendant--18.0%,", evoStone:"Water stone (x2)", boost:"20", booStone:"Water stone", habilidades:""},
 {nome:"Octillery",  numero:224,  level:70,   ball1:"Ultraball",   ball2:"Netball",   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"100000", pricenpc:"10000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Remoraid", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"223", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Swift-70,Bubblebeam-70,Water gun-70,Water ball-70,Muddy water-70,Hyper beam-76,Scald-72,Octazooka-74,", loots:"(1-1)//tentacle--4.3% (17.0%),(1-35)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--36.0% (72.0%),(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"", boost:"4", booStone:"Water stone", habilidades:"Surf, Headbutt"},

 {nome:"Delibird",  numero:225,  level:40,   ball1:"Greatball",   ball2:"Superball",   clan1:"Seavell",   clan2:"Wingeon",   tipo1:"Gelo",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"10000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Present-40,Doubleslap-40,Pluck-45,Frost breath-42,Ice beam-40,Blizzard-50,Rest-45,", loots:"(1-1)//gift bag--4.3%,(1-10)//snowball--80.0%,(1-10)//straw--80.0%,(1-1)//ice orb--20.0%,", evoStone:"", boost:"7", booStone:"Ice stone", habilidades:""},

 {nome:"Mantine",  numero:226,  level:100,   ball1:"Ultraball",   ball2:"Netball",   clan1:"Seavell",   clan2:"Wingeon",   tipo1:"Água",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"120000",  shiny:"no", fast:"yes", heavy:"yes", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Headbutt-100,Aqua tail-100,Bubblebeam-102,Wing attack-105,Air slash-103,Air cutter-108,Bounce-102,Aerial ace-104,Aqua ring-100,Green guard-Passiva,", loots:"(1-1)//streak tail--4.3% (29.8%),(1-20)//water gem--80.0%,(1-20)//straw--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--39.0% (78.0%),(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"", boost:"3", booStone:"Water stone", habilidades:"Cut, Headbutt, Surf"},

 {nome:"Skarmory",  numero:227,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Ironhard",   clan2:"Wingeon",   tipo1:"Metal",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"120000",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Sand attack-100,Peck-100,Swift-100,Iron head-100,Metal claw-107,Air slash-103,Steel wing-108,Aerial ace-104,Agility-100,", loots:"(1-1)//steel wing--4.3% (8.5%),(1-21)//piece of steel--80.0%,(1-21)//straw--80.0%,(1-1)//Metal stone--Raro,(1-1)//Feather stone--Raro,(1-1)//bird beak--25.6% (25.6%),", evoStone:"", boost:"2", booStone:"Feather stone", habilidades:"Cut, Fly"},

 {nome:"Houndour",  numero:228,  level:20,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Volcanic",   clan2:"Malefic",   tipo1:"Fogo",   tipo2:"Noturno",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3500",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Houndoom", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"229", nevo2:"no", 
 mapas:'"top":49,"left":33,"text":"Magma Island - Parte Sul da ilha (VIP)";"top":39,"left":66,"text":"Ascorbia"', 
 vip: "yes",
 moves:"Roar-23,Bite-20,Crunch-20,Ember-20,Faint attack-22,Shadowave-20,Flamethrower-24,Incinerate-26,", loots:"(1-1)//strange bone--Raro,(1-5)//essence of fire--80.0%,(1-5)//dark gem--80.0%,(1-1)//pot of lava--16.0%,", evoStone:"Darkness stone,Fire stone", boost:"10", booStone:"Darkness stone", habilidades:"Dig, Headbutt"},
 {nome:"Houndoom",  numero:229,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Volcanic",   clan2:"Malefic",   tipo1:"Fogo",   tipo2:"Noturno",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13500",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Houndour", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"228", nevo1:"no", nevo2:"no", 
 mapas:'"top":49,"left":33,"text":"Magma Island - Parte Sul da ilha (VIP)";"top":39,"left":66,"text":"Ascorbia"', 
 vip: "yes",
 moves:"Roar-110,Bite-100,Crunch-100,Ember-100,Faint attack-100,Shadowave-100,Flamethrower-100,Incinerate-100,Fire blast-102,Inferno-110,", loots:"(1-1)//strange bone--8.3%,(1-20)//essence of fire--80.0%,(1-20)//dark gem--80.0%,(1-1)//Fire stone--Raro,(1-1)//Darkness stone--Raro,(1-1)//pot of lava--34.0%,", evoStone:"", boost:"3", booStone:"Darkness stone", habilidades:"Dig, Headbutt, Ride"},

 {nome:"Kingdra",  numero:230,  level:100,   ball1:"Ultraball",   ball2:"Taleball",   clan1:"Seavell",   clan2:"Wingeon",   tipo1:"Água",   tipo2:"Dragão",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"60000",  shiny:"no", fast:"no", heavy:"yes", preevo2:"Horsea", preevo1:"Seadra", evo1:"no", evo2:"no", npreevo2:"116", npreevo1:"117", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Mud shot-100,Smokescreen-100,Bubbles-100,Bubblebeam-100,Water gun-100,Water pulse-100,Twister-104,Dragon pulse-105,Hydropump-108,Dragon dance-106,", loots:"(1-1)//seahorse tail--4.3% (8.5%),(1-23)//dragon scale--80.0%,(1-23)//water gem--80.0%,(1-1)//Crystal stone--Raro,(1-1)//Water stone--Raro,(1-1)//water pendant--42.0% (84.0%),(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"", boost:"30", booStone:"Crystal stone", habilidades:"Surf, Headbutt"},

 {nome:"Phanpy",   numero:231,  level:20,   ball1:"Pokeball",   ball2:"Greatball",   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Donphan", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"232", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Tackle-20,Take down-24,Horn attack-20,Rollout-26,Defense curl-28,", loots:"(1-1)//elephant foot--Raro,(1-10)//earth ball--80.0%,(1-1)//sandbag--11.0%,", evoStone:"Earth stone (x2)", boost:"10", booStone:"Earth stone", habilidades:"Dig, Rock smash, Headbutt"},
 {nome:"Donphan",   numero:232,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13000",  shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Phanpy", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"231", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Mud slap-80,Fire fang-82,Horn attack-80,Rollout-80,Cannon ball-80,Bulldoze-80,Scary face-82,Earthquake-86,Defense curl-86,", loots:"(1-1)//elephant foot--4.3% (38.3%),(1-40)//earth ball--80.0%,(1-1)//Earth stone--Raro,(1-1)//sandbag--29.0% (58.0%),", evoStone:"", boost:"3", booStone:"Earth stone", habilidades:"Dig, Rock smash, Headbutt"},

 {nome:"Porygon2",   numero:233,  level:80,   ball1:"Nenhuma",   ball2:"Nenhuma",  clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"120000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Porygon", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"137", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "", moves:"Ice beam-80,Electroweb-80,Zap cannon-84,Lock on-80,Thunder bolt-80,Hyper beam-90,Discharge-85,Tri attack-95,Magic coat-88,Restore-80,Gravity-Passiva,", loots:"no", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:"Teleport, Light, Fly, Blink"},

 {nome:"Stantler",   numero:234,  level:50,   ball1:"Greatball",   ball2:"Superball",   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"50000", pricenpc:"10000",  shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no",
 mapas:'no',  vip: "no", moves:"Sand attack-50,Tackle-50,Stomp-58,Take down-50,Confuse ray-54,Calm mind-50,Jump kick-56,Last resort-56,", loots:"(1-1)//reindeer horn--4.3%,(1-28)//rubber ball--80.0%,(1-1)//Heart stone--Raro,", evoStone:"", boost:"5", booStone:"Heart stone", habilidades:"Ride, Headbutt"},

 {nome:"Smeargle",   numero:235,  level:"1-100",  ball1:"Superball",   ball2:"Ultraball",   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Sem sistema", xpcaught:"15000", pricenpc:"0",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Sketch-Especial,", loots:"(1-1)//brush--4.3%,(1-20)//rubber ball--80.0%,", evoStone:"", boost:"", booStone:"", habilidades:""},

 {nome:"Tyrogue",   numero:236,  level:30,   ball1:"Masterball",  ball2:"Nenhuma",   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"0", pricenpc:"150000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Hitmonlee,Hitmonchan,Hitmontop", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"106,107,237", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Triple punch-30,Mega punch-32,Focus punch-36,Triple kick-30,Mega kick-32,Hi jump kick-36,Evasion-Passiva,Foresight-Passiva,", loots:"(1-15)//band aid--80.0%,", evoStone:"Kicking CD=Hitmonlee, Punching CD=Hitmonchan, Spinning CD=Hitmontop", boost:"9", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
 {nome:"Hitmontop",   numero:237,  level:60,   ball1:"Masterball",  ball2:"Nenhuma",  clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"0", pricenpc:"500000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Tyrogue", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"236", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Triple kick-60,Rolling kick-65,Revenge-60,Focus energy-67,Counter spin-Passiva,Foresight-Passiva,", loots:"(1-1)//spin machine--4.3% (21.3%),(1-1)//martial arts scroll--5.0% (25.0%),(1-30)//band aid--80.0%,(1-1)//Punch stone--raro,", evoStone:"", boost:"4", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},

 {nome:"Smoochum",   numero:238,  level:30,   ball1:"Greatball",   ball2:"Superball",   clan1:"Seavell",   clan2:"Psycraft",   tipo1:"Gelo",   tipo2:"Psiquico",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"4500",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Jynx", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"124", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Lovely kiss-30,Draining kiss-30,Psywave-30,Psy pulse-30,Ice ball-30,Ice beam-30,Icy wind-34,", loots:"(1-1)//ice bra--raro,(1-8)//snowball--80.0%,(1-8)//enchanted gem--80.0%,(1-1)//ice orb--17.0%,", evoStone:"Ancient stone (x2)", boost:"9", booStone:"Ice stone", habilidades:"Teleport, Blink"},
 {nome:"Elekid",   numero:239,  level:30,   ball1:"Greatball",   ball2:"Superball",  clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"4500",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Electabuzz", evo2:"Electivire", npreevo2:"no", npreevo1:"no", nevo1:"125", nevo2:"466", 
 mapas:'no',  vip: "yes", moves:"Quick attack-30,Thunder punch-30,Thunder shock-30,Thunder bolt-30,Thunder wave-30,Thunder-36,Electricity-Passiva,", loots:"(1-1)//electric tail--Raro,(1-15)//screw--80.0%,(1-1)//electric box--14.0%,", evoStone:"Ancient stone (x2)", boost:"9", booStone:"Thunder stone", habilidades:"Rock smash, Light, Headbutt"},
 {nome:"Magby",    numero:240,  level:30,   ball1:"Greatball",   ball2:"Superball",   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"4500",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Magmar", evo2:"Magmortar", npreevo2:"no", npreevo1:"no", nevo1:"126", nevo2:"467", 
 mapas:'no',  vip: "yes", moves:"Scratch-30,Fire punch-32,Ember-30,Flamethrower-30,Fireball-30,Fire blast-36,Lava counter-Passiva,", loots:"(1-1)//magma foot--Raro,(1-15)//essence of fire--80.0%,(1-1)//pot of lava--19.0%,", evoStone:"Ancient stone (x2)", boost:"9", booStone:"Fire stone", habilidades:"Headbutt"},

 {nome:"Miltank",   numero:241,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"120000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "no", moves:"Tackle-80,Body slam-85,Stomp-85,Rollout-80,Cannon ball-80,Milk drink-80,Heal bell-80,Defense curl-80,Thick fat-Passiva,", loots:"(1-1)//cow tail--8.1% (40.3%),(1-40)//rubber ball--80.0%,(1-1)//Heart stone--Raro,", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:"Headbutt"},

 {nome:"Blissey",   numero:242,  level:100,   ball1:"Nenhuma",   ball2:"Nenhuma",   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"140000",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Chansey", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"113", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "", moves:"Doubleslap-100,Egg bomb-100,Great love-108,Sing-100,Healing wish-102,Emergency call-100,Protection-106,Egg rain-110,Helping hand-100,Follow me-100,", loots:"(1-1)//Chansey egg--2.0%,(1-1)//Chansey doll--10.0%,", evoStone:"", boost:"2", booStone:"Heart stone", habilidades:"Headbutt"},

 {nome:"Raikou",   numero:243,  level:200,   ball1:"Nenhuma",   ball2:"Nenhuma",   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Roar-210,Thunder shock-200,Thunder bolt-200,Bite-200,Quick attack-200,Thunder wave-200,Thunder fang-200,Charge beam-200,Electro ball-200,Crunch-200,Thunder-200,Electric storm-200,Electro field-200,Calm mind-200,", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
 {nome:"Entei",    numero:244,  level:200,   ball1:"Nenhuma",   ball2:"Nenhuma",   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Roar-210,Ember-200,Flamethrower-200,Bite-200,Ancient power-200,Lava plume-200,Eruption-200,Stomp-205,Crunch-200,Fire blast-200,Blast burn-215,Magma storm-200,Inferno-210,Calm mind-200,", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
 {nome:"Suicune",   numero:245,  level:200,   ball1:"Nenhuma",   ball2:"Nenhuma",   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum",   regiao:"Johto",   geracao:"2",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Rain dance-200,Ice shards-200,Ice beam-200,Bite-200,Waterfall-200,Frost breath-200,Ice fang-204,Bubblebeam-200,Powder snow-200,Hydropump-210,Aurora beam-200,Blizzard-200,Iceshock-200,Calm mind-200,", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},

 {nome:"Larvitar",   numero:246,  level:30,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Pedra",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"50000", pricenpc:"15000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Pupitar", evo2:"Tyranitar", npreevo2:"no", npreevo1:"no", nevo1:"247", nevo2:"248", 
 mapas:'no',  vip: "yes", moves:"Bite-30,Crunch-30,Dark pulse-30,Rock slide-30,Stone edge-30,Hyper beam-38,Sandstorm-35,", loots:"(1-1)//lizard tail--Raro,(1-5)//small stone--80.0%,(1-5)//earth ball--80.0%,(1-1)//stone orb--16.0%,(1-1)//sandbag--6.0%,", evoStone:"Ancient stone", boost:"10", booStone:"Earth stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},
 {nome:"Pupitar",   numero:247,  level:60,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Pedra",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"65000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Larvitar", evo1:"Tyranitar", evo2:"no", npreevo2:"no", npreevo1:"246", nevo1:"248", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Bite-60,Crunch-60,Dark pulse-60,Rock slide-60,Stone edge-60,Earthquake-65,Ancient power-68,Sandstorm-60,", loots:"(1-1)//lizard tail--1.3% (2.6%),(1-16)//small stone--80.0%,(1-16)//earth ball--80.0%,(1-1)//Ancient stone--Raro,(1-1)//Rock stone--Raro,(1-1)//stone orb--29.5% (59.0%),(1-1)//sandbag--21.5% (43.0%),", evoStone:"Ancient stone (x4)", boost:"4", booStone:"Earth stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},
 {nome:"Tyranitar",  numero:248,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma",   clan1:"Orebound",   clan2:"Malefic",   tipo1:"Pedra",   tipo2:"Noturno",   regiao:"Johto",   geracao:"2",   dificuldade:"Difícil", xpcaught:"650000", pricenpc:"125000",  shiny:"yes", fast:"no", heavy:"no", preevo2:"Larvitar", preevo1:"Pupitar", evo1:"no", evo2:"no", npreevo2:"246", npreevo1:"247", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Bite-100,Shadowave-100,Dark pulse-100,Rock tomb-100,Rock slide-100,Stone edge-100,Ancient power-115,Hyper beam-108,Assurance-108,Sandstorm-100,", loots:"(1-1)//lizard tail--4.3% (17.0%),(1-25)//small stone--80.0%,(1-25)//dark gem--80.0%,(1-1)//Ancient stone--Raro,(1-1)//Rock stone--Raro,(1-1)//stone orb--40.0% (80.0%),(1-1)//sandbag--30.0% (60.0%),", evoStone:"", boost:"30", booStone:"Ancient stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},

 {nome:"Lugia",    numero:249,  level:200,   ball1:"Nenhuma",   ball2:"Nenhuma",   clan1:"Psycraft",   clan2:"Wingeon",   tipo1:"Psiquico",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"no", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
 {nome:"Ho-Oh",    numero:250,  level:200,   ball1:"Nenhuma",   ball2:"Nenhuma",   clan1:"Volcanic",   clan2:"Wingeon",   tipo1:"Fogo",   tipo2:"Voador",   regiao:"Johto",   geracao:"2",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"no", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
 {nome:"Celebi", numero:251,  level:200,  ball1:"nenhuma",  ball2:"nenhuma",  clan1:"Psycraft",  clan2:"Naturia",  tipo1:"Psiquico",  tipo2:"Grama",  regiao:"Johto",  geracao:"2",  dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",  shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"no", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},

///////// INICIO GERACAO 3
 {nome:"Treecko", numero:252,  level:20,  ball1:"Pokeball",  ball2:"Greatball",  clan1:"Naturia",  clan2:"Nenhum",  tipo1:"Grama",  tipo2:"Nenhum",  regiao:"Hoen",  geracao:"3",  dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000", shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Grovyle", evo2:"Sceptile", npreevo2:"no", npreevo1:"no", nevo1:"253", nevo2:"254", 
 mapas:'no',  vip: "yes", moves:"Quick attack-20,Leaf blade-20,Fury cutter-25,X scissor-20,Giga drain-26,Agility-20,", loots:"(1-10)//seed--80.0% (100.0%),(1-1)//leaves--26.0% (78.0%),(1-1)//greens--Raro,", evoStone:"Leaf stone", boost:"10", booStone:"Leaf stone", habilidades:"Rock smash, Headbutt, Cut"},
 {nome:"Grovyle", numero:253,  level:40,   ball1:"Greatball",   ball2:"Superball",    clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum",    regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000", shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Treecko", evo1:"Sceptile", evo2:"no", npreevo2:"no", npreevo1:"252", nevo1:"254", nevo2:"no", 
 mapas:'no',  vip: "yes", moves:"Quick attack-40,Leaf blade-40,Magical leaf-40,Fury cutter-45,Pursuit-40,Night slash-40,X scissor-40,Giga drain-45,Agility-40,", loots:"(1-20)//seed--80.0% (100.0%),(1-1)//Leaf stone--Raro,(1-1)//leaves--32.0% (96.0%),(1-1)//greens--2.0% (10.0%),", evoStone:"Leaf stone (x2)", boost:"7", booStone:"Leaf stone", habilidades:"Rock smash, Headbutt, Cut"},
 {nome:"Sceptile", numero:254,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",
   shiny:"yes", fast:"yes", heavy:"no", preevo2:"Treecko", preevo1:"Grovyle", evo1:"no", evo2:"no", npreevo2:"252", npreevo1:"253", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Quick attack-80,Leaf blade-80,Magical leaf-80,Fury cutter-85,Pursuit-80,Night slash-80,X scissor-80,Dual chop-80,Frenzy plant-90,Agility-80,", loots:"(1-43)//seed--80.0% (100.0%),(1-1)//Leaf stone--Raro,(1-1)//leaves--45.5% (100.0%),(1-1)//greens--4.3% (68.0%),", evoStone:"", boost:"3", booStone:"Leaf stone", habilidades:"Rock smash, Headbutt, Cut"},
   
  {nome:"Torchic", numero:255,  level:20,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Combusken", evo2:"Blaziken", npreevo2:"no", npreevo1:"no", nevo1:"256", nevo2:"257", 
   mapas:'no',  vip: "yes", moves:"Quick attack-20,Ember-20,Flamethrower-20,Drill peck-25,Overheat-26,Double team-22,", loots:"(1-1)//fire feather--Raro,(1-10)//essence of fire--80.0% (100.0%),(1-1)//pot of lava--21.0% (63.0%),", evoStone:"Fire stone", boost:"10", booStone:"Fire stone", habilidades:"Cut, Headbutt"},
  {nome:"Combusken", numero:256,  level:40,   ball1:"Greatball",   ball2:"Superball", 
   clan1:"Volcanic",   clan2:"Gardestrike",   tipo1:"Fogo",   tipo2:"Lutador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Torchic", evo1:"Blaziken", evo2:"no", npreevo2:"no", npreevo1:"255", nevo1:"257", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Quick attack-40,Ember-40,Mega kick-40,Fire punch-40,Blaze kick-40,Flare blitz-48,Sky uppercut-46,Bulk up-40,", loots:"(1-1)//fire feather--2.0% (10.0%),(1-10)//band aid--80.0% (100.0%),(1-10)//essence of fire--80.0% (100.0%),(1-1)//Fire stone--Raro,(1-1)//Punch stone--Raro,(1-1)//pot of lava--32.0% (96.0%),", evoStone:"Fire stone,Punch stone", boost:"7", booStone:"Fire stone", habilidades:"Dig, Rock smash, Headbutt, Cut"},
  {nome:"Blaziken", numero:257,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Gardestrike",   tipo1:"Fogo",   tipo2:"Lutador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",
   shiny:"yes", fast:"yes", heavy:"no", preevo2:"Torchic", preevo1:"Combusken", evo1:"no", evo2:"no", npreevo2:"255", npreevo1:"256", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Low kick-80,Ember-80,Mega kick-80,Double kick-80,Blaze kick-80,Hi jump kick-80,Sky uppercut-88,Blast burn-95,Flare blitz-90,Bulk up-80,Evasion-Passiva,", loots:"(1-1)//fire feather--4.3% (59.5%),(1-21)//band aid--80.0% (100.0%),(1-21)//essence of fire--80.0% (100.0%),(1-1)//Fire stone--Raro,(1-1)//Punch stone--Raro,(1-1)//pot of lava--45.5% (100.0%),", evoStone:"", boost:"3", booStone:"Punch stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},

  {nome:"Mudkip",  numero:258,  level:20,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Marshtomp", evo2:"Swampert", npreevo2:"no", npreevo1:"no", nevo1:"259", nevo2:"260", 
   mapas:'no',  vip: "yes", moves:"Aqua tail-20,Mud slap-20,Water gun-20,Waterball-22,Hydropump-26,Protect-20,", loots:"(1-1)//black fins--Raro,(1-10)//water gem--80% (100.0%),(1-1)//water pendant--21.0% (63.0%),", evoStone:"", boost:"10", booStone:"Water stone", habilidades:"Dig, Headbutt"},
  {nome:"Marshtomp", numero:259,  level:40,   ball1:"Greatball",   ball2:"Superball", 
   clan1:"Seavell",   clan2:"Orebound",   tipo1:"Água",   tipo2:"Terra", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Mudkip", evo1:"Swampert", evo2:"no", npreevo2:"no", npreevo1:"258", nevo1:"260", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Mud slap-40,Water gun-40,Waterball-40,Aqua tail-40,Muddy water-40,Hydropump-48,Protect-40,", loots:"(1-1)//black fins--2.0% (10.0%),(1-10)//earth ball--80.0% (100.0%),(1-10)//water gem--80% (100.0%),(1-1)//Water stone--Raro,(1-1)//Earth stone--Raro,(1-1)//water pendant--16.0% (48.0%),(1-1)//sandbag--16.0% (48.0%),", evoStone:"Water stone,Earth stone", boost:"7", booStone:"Water stone", habilidades:"Rock smash, Dig, Headbutt"},
  {nome:"Swampert", numero:260,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Orebound",   tipo1:"Água",   tipo2:"Terra", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"Mudkip", preevo1:"Marshtomp", evo1:"no", evo2:"no", npreevo2:"258", npreevo1:"259", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Aqua tail-80,Mud slap-80,Water gun-80,Waterball-80,Hammer arm-80,Muddy water-80,Earth power-80,Earthquake-87,Hydropump-90,Protect-80,", loots:"(1-1)//black fins--4.3% (55.3%),(1-21)//earth ball--80.0% (100.0%),(1-21)//water gem--80% (100.0%),(1-1)//Water stone--Raro,(1-1)//Earth stone--Raro,(1-1)//water pendant--22.8% (68.3%),(1-1)//sandbag--22.8% (68.3%),", evoStone:"", boost:"3", booStone:"Earth stone", habilidades:"Rock smash, Dig, Headbutt, Surf"},

  {nome:"Poochyena", numero:261,  level:30,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Noturno",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"5000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Mightyena", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"262", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Roar-40,Bite-30,Crunch-30,Shadow claw-30,Night slash-30,", loots:"no", evoStone:"Mirror stone (x10)", boost:"10", booStone:"Mirror stone", habilidades:"Dig"},
  {nome:"Mightyena", numero:262,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Noturno",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Poochyena", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"261", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Roar-90,Bite-80,Crunch-80,Take down-80,Shadow claw-80,Astonish-80,Night slash-80,Night daze-86,Taunt-80,Snarl-Passiva,", loots:"no", evoStone:"", boost:"5", booStone:"Mirror stone", habilidades:"Dig"},

  {nome:"Lotad",  numero:270,  level:20,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Seavell",   clan2:"Naturia",   tipo1:"Água",   tipo2:"Grama", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Lombre", evo2:"Ludicolo", npreevo2:"no", npreevo1:"no", nevo1:"271", nevo2:"272", 
   mapas:'no',  vip: "yes", moves:"Absorb-20,Fury swipes-20,Bubblebeam-20,Scald-28,Rain dance-25,Mega drain-Passiva,Swift swim-Passiva,", loots:"(1-1)//water plant--1.1% (5.5%),(1-5)//seed--80.0% (100.0%),(1-5)//water gem--80.0% (100.0%),(1-1)//leaves--13.0% (39.0%),(1-1)//water pendant--13.0% (39.0%),", evoStone:"Water stone", boost:"10", booStone:"Leaf stone", habilidades:"Headbutt"},
  {nome:"Lombre",  numero:271,  level:50,   ball1:"Greatball",   ball2:"Superball", 
   clan1:"Seavell",   clan2:"Naturia",   tipo1:"Água",   tipo2:"Grama", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Lotad", evo1:"Ludicolo", evo2:"no", npreevo2:"no", npreevo1:"270", nevo1:"272", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Absorb-50,Fury swipes-50,Water pulse-50,Bubblebeam-50,Waterfall-50,Scald-52,Rain dance-50,Mega drain-Passiva,Swift swim-Passiva,", loots:"(1-1)//water plant--2.2% (11.0%),(1-10)//seed--80.0% (100.0%),(1-10)//water gem--80.0% (100.0%),(1-1)//leaves--16.0% (48.0%),(1-1)//water pendant--16.0% (48.0%),(1-1)//Leaf stone--Raro,(1-1)//Water stone--Raro,", evoStone:"Leaf stone,Water stone", boost:"7", booStone:"Leaf stone", habilidades:"Surf"},
  {nome:"Ludicolo",  numero:272,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Naturia",   tipo1:"Água",   tipo2:"Grama", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Lotad", preevo1:"Lombre", evo1:"no", evo2:"no", npreevo2:"270", npreevo1:"271", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Absorb-80,Fury swipes-80,Water pulse-80,Bubblebeam-80,Waterfall-80,Scald-82,Hydropump-88,Rain dance-80,Energy ball-80,Swift swim-Passiva,Water sport-Passiva,Rain dish-Passiva,", loots:"(1-1)//water plant--4.5% (72.0%),(1-21)//seed--80.0% (100.0%),(1-21)//water gem--80.0% (100.0%),(1-1)//leaves--22.8% (68.3%),(1-1)//water pendant--22.8% (68.3%),(1-1)//Leaf stone--Raro,(1-1)//Water stone--Raro,", evoStone:"", boost:"3", booStone:"Leaf stone", habilidades:"Rock smash, Headbutt, Surf"},

  {nome:"Seedot",  numero:273,  level:10,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Nuzleaf", evo2:"Shiftry", npreevo2:"no", npreevo1:"no", nevo1:"274", nevo2:"275", 
   mapas:'no',  vip: "yes", moves:"Leech seed-10,Pound-10,Razor leaf-10,Dark pulse-10,Faint attack-10,", loots:"(1-1)//big seed--1.1% (5.5%),(1-10)//seed--80.0% (100.0%),(1-1)//leaves--26.0% (78.0%),", evoStone:"Leaf stone", boost:"10", booStone:"Leaf stone", habilidades:"Cut, Headbutt"},
  {nome:"Nuzleaf",  numero:274,  level:30,   ball1:"Greatball",   ball2:"Superball", 
   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Grama",   tipo2:"Noturno", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Seedot", evo1:"Shiftry", evo2:"no", npreevo2:"no", npreevo1:"273", nevo1:"275", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Pound-30,Razor leaf-30,Dark pulse-30,Faint attack-30,Bamboo spikes-40,Sunny day-42,Chlorophyll-Passiva,", loots:"(1-1)//big seed--2.2% (11.0%),(1-10)//seed--80.0% (100.0%),(1-10)//dark gem--80.0% (100.0%),(1-1)//leaves--32.0% (96.0%),(1-1)//Darkness stone--Raro,", evoStone:"Leaf stone,Darkness stone", boost:"7", booStone:"Darkness stone", habilidades:"Cut, Headbutt"},
  {nome:"Shiftry",  numero:275,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Grama",   tipo2:"Noturno", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Seedot", preevo1:"Nuzleaf", evo1:"no", evo2:"no", npreevo2:"273", npreevo1:"274", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Pound-80,Razor leaf-80,Dark pulse-80,Faint attack-80,Bamboo spikes-90,Grassy terrain-90,Leaf tornado-90,Sunny day-92,Chlorophyll-Passiva,", loots:"(1-1)//sharp leaves--4.5% (90.0%),(1-21)//seed--80.0% (100.0%),(1-21)//dark gem--80.0% (100.0%),(1-1)//leaves--45.5% (100.0%),(1-1)//Leaf stone--Raro,(1-1)//Darkness stone--Raro,", evoStone:"", boost:"3", booStone:"Darkness stone", habilidades:"Cut, headbutt"},

  {nome:"Taillow",  numero:276,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Gardestrike",   clan2:"Wingeon",   tipo1:"Normal",   tipo2:"Voador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Swellow", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"277", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Peck-30,Pluck-30,Feather dance-30,Air slash-33,Tailwind-30,Roost-35,", loots:"(1-1)//crimson feather--1.1% (5.5%),(1-5)//straw--80.0% (100.0%),(1-5)//rubber ball--80.0% (100.0%),(1-1)//feather--13.0% (39.0%),(1-1)//bird beak--6.0% (18.0%),", evoStone:"Feather stone (x2)", boost:"10", booStone:"Feather stone", habilidades:""},
  {nome:"Swellow",  numero:277,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Wingeon",   tipo1:"Normal",   tipo2:"Voador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Taillow", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"276", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Peck-80,Feather dance-80,Pluck-85,Wing attack-82,Air slash-83,Boomburst-95,Sky attack-90,Tailwind-80,Brave bird-80,Guts-Passiva,", loots:"(1-1)//crimson feather--4.5% (49.5%),(1-21)//straw--80.0% (100.0%),(1-21)//rubber ball--80.0% (100.0%),(1-1)//feather--13.0% (65.0%),(1-1)//bird beak--2.5% (76.5%),(1-1)//Feather stone--Raro,(1-1)//Heart stone--Raro,", evoStone:"", boost:"3", booStone:"Feather stone", habilidades:"Fly"},

  {nome:"Wingull",  numero:278,  level:30,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Wingeon",   tipo1:"Água",   tipo2:"Voador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"5000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Pelipper", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"279", nevo2:"no", 
   mapas:'no',
  vip: "no",
 moves:"Super sonic-30,Gust-32,Bubbles-35,Wing attack-32,Scald-32,Rain dance-30,", loots:"no", evoStone:"Dimensional stone (x10)", boost:"10", booStone:"Dimensional stone", habilidades:""},
  {nome:"Pelipper",  numero:279,  level:80,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Wingeon",   tipo1:"Água",   tipo2:"Voador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Wingull", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"278", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Super sonic-80,Gust-82,Wing attack-82,Fly-82,Scald-82,Surf-85,Swallow-83,Stockpile-83,Rain dance-80,Protect-80,", loots:"no", evoStone:"", boost:"5", booStone:"Dimensional stone", habilidades:"Fly"},

  {nome:"Ralts",   numero:280,  level:30,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Fada", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"15000", pricenpc:"30000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Kirlia", evo2:"Gardevoir", npreevo2:"no", npreevo1:"no", nevo1:"281", nevo2:"282", 
   mapas:'no',  vip: "yes", moves:"Charm-30,Dazzling gleam-34,Instant teleportation-30,Confusion-32,Psychic-35,Healing wish-32,Miracle eye-1000,", loots:"(1-1)//cure flower--Raro,(1-1)//comb--Raro,(1-10)//enchanted gem--80.0% (100.0%),(1-1)//future orb--20.0% (60.0%),", evoStone:"Enigma stone", boost:"10", booStone:"Enigma stone", habilidades:"Teleport, Blink"},
  {nome:"Kirlia",  numero:281,  level:60,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Fada", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"50000", pricenpc:"35000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Ralts", evo1:"Gardevoir", evo2:"no", npreevo2:"no", npreevo1:"280", nevo1:"282", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Charm-60,Dazzling gleam-64,Instant teleportation-60,Confusion-60,Psychic-60,Healing wish-62,Draining kiss-60,Miracle eye-1000,", loots:"(1-1)//cure flower--2.0% (10.0%),(1-1)//comb--1.5% (7.5%),(1-20)//enchanted gem--80.0% (100.0%),(1-1)//future orb--30.0% (90.0%),(1-1)//Enigma stone--Raro,", evoStone:"Crystal stone,Enigma stone", boost:"5", booStone:"Enigma stone", habilidades:"Teleport, Blink"},
  {nome:"Gardevoir", numero:282,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Fada", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"85000",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"Ralts", preevo1:"Kirlia", evo1:"no", evo2:"no", npreevo2:"280", npreevo1:"281", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Charm-100,Dazzling gleam-104,Instant teleportation-100,Confusion-100,Psychic-100,Stored power-110,Healing wish-102,Moonblast-112,Miracle eye-1010,", loots:"(1-1)//cure flower--4.3% (10.0%),(1-1)//comb--2.5% (25.0%),(1-43)//enchanted gem--80.0% (100.0%),(1-1)//future orb--40.0% (100.0%),(1-1)//Enigma stone--Raro,(1-1)//Crystal stone--Raro,", evoStone:"", boost:"30", booStone:"Crystal stone", habilidades:"Teleport, Blink"},

  {nome:"Shroomish",  numero:285,  level:20,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"5000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Breloom", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"286", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Leech seed-20,Seed bomb-20,Energy ball-20,Growth-20,Poison powder-27,Sleep powder-28,", loots:"no", evoStone:"Dimensional stone (x10)", boost:"10", booStone:"Dimensional stone", habilidades:"Cut"},
  {nome:"Breloom",  numero:286,  level:80,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Gardestrike",   tipo1:"Grama",   tipo2:"Lutador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Shroomish", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"285", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Leech seed-80,Bullet seed-80,Energy ball-80,Force palm-80,Sky uppercut-88,Dynamicpunch-80,Sleep plague-80,Giga drain-85,Growth-80,Spores reaction-Passiva,", loots:"no", evoStone:"", boost:"5", booStone:"Dimensional stone", habilidades:"Rock smash, Headbutt, Cut"},

  {nome:"Slakoth",  numero:287,  level:40,   ball1:"Greatball",   ball2:"Superball", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Vigoroth", evo2:"Slaking", npreevo2:"no", npreevo1:"no", nevo1:"288", nevo2:"289", 
   mapas:'no',  vip: "yes", moves:"Yawn-40,Scratch-40,Hammer arm-40,Fury swipes-40,Focus punch-40,Focus blast-40,", loots:"(1-1)//fur ball--1.3% (6.5%),(1-10)//rubber ball--80.0% (100.0%),(1-1)//fur--26.0% (78.0%),", evoStone:"Heart stone (x2)", boost:"7", booStone:"Heart stone", habilidades:"Cut, Headbutt"},
  {nome:"Vigoroth",  numero:288,  level:70,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Slakoth", evo1:"Slaking", evo2:"no", npreevo2:"no", npreevo1:"287", nevo1:"289", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Yawn-70,Scratch-70,Faint attack-70,Hammer arm-70,Fury swipes-70,Focus punch-70,Focus blast-70,", loots:"(1-1)//fur ball--5.0% (100.0%),(1-43)//rubber ball--80.0% (100.0%),(1-1)//fur--45.5% (100.0%),(1-1)//Heart stone--Raro,", evoStone:"Power banana (x10)", boost:"4", booStone:"Heart stone", habilidades:"Rock smash, Cut, Headbutt"},
  {nome:"Slaking",  numero:289,  level:150,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"1000000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Slakoth", preevo1:"Vigoroth", evo1:"no", evo2:"no", npreevo2:"287", npreevo1:"288", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Slash-150,Scratch-150,Faint attack-150,Hammer arm-150,Fury swipes-150,Focus punch-150,Focus blast-150,Slack off-155,Truant-Passiva,", loots:"(1-80)//rubber ball--90.0%,(1-1)//fur ball--90.0%,(1-1)//Gardestrike backpack--2.4%,(1-1)//Power Banana--1.4%,", evoStone:"", boost:"10", booStone:"Mystic star", habilidades:"Rock smash, Headbutt, Cut"},

  {nome:"Nincada",  numero:290,  level:10,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Naturia",   clan2:"Orebound",   tipo1:"Inseto",   tipo2:"Terra", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"3000", pricenpc:"300",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Ninjask,Shedinja", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"291,292", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Sand attack-10,Leech life-15,Fury swipes-10,Mud slap-12,Dig-12,", loots:"(1-1)//bug legs--1.1% (5.5%),(1-5)//bug gosme--80.0% (100.0%),(1-1)//earth ball--80.0% (100.0%),(1-1)//pot of moss bug--13.0% (39.0%),(1-1)//sandbag--13.0% (39.0%),", evoStone:"Ancient stone (x2)=Ninjask ou Darkness stone (x2)=Shedinja", boost:"10", booStone:"Cocoon stone", habilidades:"Dig, Cut"},
  {nome:"Ninjask",  numero:291,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Inseto",   tipo2:"Voador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Nincada", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"290", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Bug bite-80,Silver wind-80,Fury swipes-80,X scissor-84,Swords dance-86,Substitute-80,Baton pass-90,Evasion-Passiva,Speed boost-Passiva,Ninja slice-Passiva,", loots:"(1-1)//bug legs--4.5% (22.5%),(1-21)//bug gosme--80.0% (100.0%),(1-21)//straw--80.0% (100.0%),(1-1)//pot of moss bug--22.5% (67.5%),(1-1)//feather--22.5% (67.5%),(1-1)//Cocoon stone--Raro,(1-1)//Ancient stone--raro,", evoStone:"", boost:"3", booStone:"Cocoon stone", habilidades:"Cut"},
  {nome:"Shedinja",  numero:292,  level:60,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Inseto",   tipo2:"Noturno", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"12000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Nincada", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"290", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Leech life-65,Silver wind-60,Shadow ball-60,Confuse ray-60,Bug buzz-66,Shadow counter-Passiva,Wonder guard-Passiva,", loots:"(1-1)//bug legs--3.0% (15.0%),(1-15)//bug gosme--80.0% (100.0%),(1-15)//ghost essence--80.0% (100.0%),(1-1)//pot of moss bug--32.0% (96.0%),(1-1)//Cocoon stone--Raro,(1-1)//Darkness stone--raro,", evoStone:"", boost:"4", booStone:"Cocoon stone", habilidades:"Cut"},

  {nome:"Whismur",  numero:293,  level:20,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Loudred", evo2:"Exploud", npreevo2:"no", npreevo1:"no", nevo1:"294", nevo2:"295", 
   mapas:'no',  vip: "yes", moves:"Super sonic-20,Tackle-20,Pound-20,Hyper voice-20,Hyper beam-26,Uproar-Passiva,", loots:"(1-1)//cute ball--2.0% (10.0%),(1-10)//rubber ball--80.0% (100.0%),(1-1)//nail--20.0% (60.0%),", evoStone:"Heart stone", boost:"10", booStone:"Heart stone", habilidades:"Headbutt"},
  {nome:"Loudred",  numero:294,  level:50,   ball1:"Greatball",   ball2:"Superball", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Whismur", evo1:"Exploud", evo2:"no", npreevo2:"no", npreevo1:"293", nevo1:"295", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Super sonic-50,Bite-50,Crunch-50,Hyper voice-50,Hyper beam-50,Uproar-Passiva,", loots:"(1-1)//cute ball--4.0% (20.0%),(1-20)//rubber ball--80.0% (100.0%),(1-1)//eruption ears--2.1% (10.5%),(1-1)//Heart stone--Raro,(1-1)//nail--35.0% (100.0%),", evoStone:"Heart stone (x2)", boost:"5", booStone:"Heart stone", habilidades:"Dig, Headbutt, Rock smash"},
  {nome:"Exploud",  numero:295,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Whismur", preevo1:"Loudred", evo1:"no", evo2:"no", npreevo2:"293", npreevo1:"294", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Super sonic-80,Bite-80,Crunch-80,Pound-80,Fire fang-80,Echoed voice-85,Boomburst-95,Hyper voice-80,Hyper beam-90,Uproar-Passiva,Leftovers-Passiva,", loots:"(1-1)//cute ball--8.5% (51.0%),(1-43)//rubber ball--80.0% (100.0%),(1-1)//eruption ears--4.5% (54.0%),(1-1)//Heart stone--Raro,(1-1)//nail--50.0% (100.0%),", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:"Dig, Headbutt, Rock smash"},

  {nome:"Makuhita",  numero:296,  level:40,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"80000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Hariyama", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"297", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Tackle-40,Low kick-40,Leap strike-45,Cross chop-44,Close combat-40,Arm thrust-46,Smellingsalt-40,Foresight-Passiva,", loots:"(1-1)//samurai hair--1.3% (6.5%),(1-10)//band aid--80.0% (100.0%),", evoStone:"Punch stone (x2)", boost:"8", booStone:"Punch stone", habilidades:"Rock smash, Cut, Headbutt"},
  {nome:"Hariyama",  numero:297,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"90000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Makuhita", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"296", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Tackle-100,Low kick-100,Leap strike-105,Rock tomb-100,Stone edge-100,Close combat-100,Arm thrust-106,Vital throw-108,Smellingsalt-100,Foresight-Passiva,Thick fat-Passiva,", loots:"(1-1)//samurai hair--5.0% (75.0%),(1-1)//big hands--3.5% (35.0%),(1-43)//band aid--80.0% (100.0%),(1-1)//Punch stone--Raro,(1-1)//Ancient stone--Raro,", evoStone:"", boost:"30", booStone:"Ancient stone", habilidades:"Rock smash, Cut, Headbutt"},

  {nome:"Nosepass",  numero:299,  level:40,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Pedra",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Probopass", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"476", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Iron head-40,Tackle-40,Rock throw-40,Stone edge-40,Power gem-40,Rock blast-40,Harden-40,", loots:"no", evoStone:"Mirror stone (x10)", boost:"8", booStone:"Mirror stone", habilidades:"Dig, Rock smash, Headbutt"},

  {nome:"Sableye",  numero:302,  level:60,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Noturno",   tipo2:"Fantasma", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"22000",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Scratch-60,Fury swipes-60,Shadow sphere-60,Faint attack-60,Night shade-60,Shadow claw-60,Agility-60,Recover-65,", loots:"(1-1)//big crystal--1.7% (8.5%),(1-1)//ruby--3.6% (18.3%),(1-39)//ghost essence--80.0% (100.0%),(1-1)//Darkness stone--Raro,", evoStone:"", boost:"5", booStone:"Darkness stone", habilidades:"Cut"},

  {nome:"Mawile",  numero:303,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Psycraft",   tipo1:"Metal",   tipo2:"Fada", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"80000",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron head-80,Bite-80,Play rough-80,Impale-83,Flash cannon-88,Spit up-83,Swallow-83,Stockpile-83,Fake tears-86,Clear pile-Passiva,", loots:"(1-1)//metal jaw--5.7% (28.5%),(1-11)//piece of steel--80.0% (100.0%),(1-1)//Metal stone--Raro,", evoStone:"", boost:"50", booStone:"Metal stone", habilidades:"Rock smash, Headbutt"},

  {nome:"Aron",   numero:304,  level:30,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Orebound",   tipo1:"Metal",   tipo2:"Pedra", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"100000", pricenpc:"15000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Lairon", evo2:"Aggron", npreevo2:"no", npreevo1:"no", nevo1:"305", nevo2:"306", 
   mapas:'no',  vip: "yes", moves:"Iron head-30,Mud slap-30,Stone edge-30,Metal burst-30,Metal claw-34,Harden-30,", loots:"(1-1)//metal hull--Raro,(1-5)//piece of steel--80.0% (100.0%),(1-5)//small stone--80.0% (100.0%),(1-1)//stone orb--20.0% (60.0%),", evoStone:"Rock stone", boost:"10", booStone:"Rock stone", habilidades:"Dig, Rock smash, Headbutt"},
  {nome:"Lairon",  numero:305,  level:60,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Orebound",   tipo1:"Metal",   tipo2:"Pedra", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"20000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Aron", evo1:"Aggron", evo2:"no", npreevo2:"no", npreevo1:"304", nevo1:"306", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron head-60,Iron tail-60,Mud slap-60,Stone edge-60,Metal burst-60,Metal claw-67,Meteor mash-60,Harden-60,", loots:"(1-1)//metal hull--2.5% (12.5%),(1-15)//piece of steel--80.0% (100.0%),(1-15)//small stone--80.0% (100.0%),(1-1)//Rock stone--Raro,(1-1)//stone orb--35.0% (100.0%),", evoStone:"Metal stone,Rock stone", boost:"5", booStone:"Rock stone", habilidades:"Ride, Rock smash, Headbutt"},
  {nome:"Aggron",  numero:306,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Orebound",   tipo1:"Metal",   tipo2:"Pedra", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"75000",
   shiny:"yes", fast:"no", heavy:"yes", preevo2:"Aron", preevo1:"Lairon", evo1:"no", evo2:"no", npreevo2:"304", npreevo1:"305", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron head-100,Iron tail-100,Mud slap-100,Stone edge-100,Metal burst-100,Metal claw-107,Meteor mash-100,Flash cannon-108,Harden-100,", loots:"(1-1)//metal hull--4.3% (63.8%),(1-21)//piece of steel--80.0% (100.0%),(1-21)//small stone--80.0% (100.0%),(1-1)//Rock stone--Raro,(1-1)//Metal stone--Raro,(1-1)//stone orb--50.0% (100.0%),(1-1)//Aggronite--Raro,", evoStone:"", boost:"30", booStone:"Metal stone", habilidades:"Dig, Rock smash, Headbutt"},

  {nome:"Meditite",  numero:307,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Gardestrike",   clan2:"Psycraft",   tipo1:"Lutador",   tipo2:"Psiquico", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3500",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Medicham", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"308", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Low kick-30,Mega kick-30,Drain punch-30,Confusion-30,Psychic-30,Hi jump kick-35,", loots:"(1-1)//mediling--Raro,(1-5)//band aid--80.0% (100.0%),(1-5)//enchanted gem--80.0% (100.0%),(1-1)//future orb--20.0% (60.0%),", evoStone:"Punch stone,Enigma stone", boost:"10", booStone:"Punch stone", habilidades:"Rock smash"},
  {nome:"Medicham",  numero:308,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Psycraft",   tipo1:"Lutador",   tipo2:"Psiquico", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Meditite", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"307", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Low kick-80,Mega kick-80,Drain punch-80,Confusion-80,Psychic-80,Hi jump kick-80,Meditate-90,Focus energy-90,Miracle eye-1000,Evasion-Passiva,Foresight-Passiva,", loots:"(1-1)//mediling--4.3% (93.5%),(1-21)//band aid--80.0% (100.0%),(1-21)//enchanted gem--80.0% (100.0%),(1-1)//future orb--30.0% (90.0%),(1-1)//Punch stone--Raro,(1-1)//Enigma stone--Raro,", evoStone:"", boost:"3", booStone:"Punch stone", habilidades:"Rock smash"},

  {nome:"Electrike",  numero:309,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3500",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Manectric", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"310", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Swift-30,Bite-30,Thunder wave-30,Spark-30,Thunder fang-30,Thunder-40,Charge-Passiva,", loots:"(1-1)//shock topknot--Raro,(1-10)//screw--80.0% (100.0%),(1-1)//electric box--20.0% (60.0%),", evoStone:"Thunder stone (x2)", boost:"10", booStone:"Thunder stone", habilidades:"Light, Dig"},
  {nome:"Manectric",  numero:310,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13000",
   shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Electrike", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"309", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Roar-90,Swift-80,Bite-80,Spark-80,Thunder fang-80,Thunder-80,Discharge-85,Wild charge-85,Magnetic flux-80,", loots:"(1-1)//shock topknot--4.3% (59.5%),(1-43)//screw--80.0% (100.0%),(1-1)//electric box--20.0% (60.0%),(1-1)//Thunder stone--Raro,", evoStone:"", boost:"3", booStone:"Thunder stone", habilidades:"Light, Dig, Ride"},

  {nome:"Plusle",  numero:311,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"15000", pricenpc:"4500",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Sweet kiss-30,Spark-30,Thunder wrath-38,Wish-30,", loots:"(1-1)//electric rat tail--2.0%,(1-20)//screw--80.0%,(1-1)//electric box--17.0%,", evoStone:"", boost:"9", booStone:"Thunder stone", habilidades:"Light"},
  {nome:"Minun",   numero:312,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"15000", pricenpc:"4500",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Spark-30Nuzzle-35,Helping hand-30,Fake tears-36,Wish-30,", loots:"(1-1)//electric rat tail--2.0%,(1-20)//screw--80.0%,(1-1)//electric box--17.0%,", evoStone:"", boost:"9", booStone:"Thunder stone", habilidades:"Light"},

  {nome:"Roselia",   numero:315,  level:70,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Grama",   tipo2:"Venenoso", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"Unseleable",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Magical leaf-70,Petal dance-70,Toxic-70,Leaf tornado-80,Synthesis-70,Petal blizzard-70,Grass whistle-70,Growth-70,", loots:"no", evoStone:"", boost:"7", booStone:"Mirror stone", habilidades:"Cut"},


  {nome:"Numel",   numero:322,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Volcanic",   clan2:"Orebound",   tipo1:"Fogo",   tipo2:"Terra", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3500",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Camerupt", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"323", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Volcano shot-30,Ember-30,Rock slide-30,Flame burst-30,Lava plume-36,Scary face-32,", loots:"(1-1)//Nu ball--1.1 (5.5%),(1-5)//essence of fire--80.0% (100.0%),(1-1)//pot of lava--13.0% (39.0%),(1-1)//sandbag--13.0% (39.0%),", evoStone:"Fire stone,Earth stone", boost:"10", booStone:"Earth stone", habilidades:"Rock smash, Dig, Headbutt"},
  {nome:"Camerupt",  numero:323,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Orebound",   tipo1:"Fogo",   tipo2:"Terra", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Numel", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"322", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Volcano shot-80,Ember-80,Mud bomb-80,Flame burst-80,Lava plume-82,Earthquake-90,Fissure-90,Scary face-82,Solid rock-Passiva,", loots:"(1-1)//Nu ball--4.5% (18.0%),(1-21)//essence of fire--80.0% (100.0%),(1-21)//earth ball--80.0% (100.0%),(1-1)//pot of lava--22.0% (22.0%),(1-1)//sandbag--22.0% (22.0%),(1-1)//Fire stone--Raro,(1-1)//Earth stone--Raro,(1-1)//mini volcano--Raro,", evoStone:"", boost:"3", booStone:"Earth stone", habilidades:"Rock smash, Dig, Ride, Headbutt"},

  {nome:"Torkoal",  numero:324,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"1000000", pricenpc:"120000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Ember-100,Flamethrower-100,Withdraw-104,Smokescreen-100,White smoke-100,Fireball-100,Inferno-110,Heat wave-104,Heatzone-110,", loots:"(1-1)//black hull--10.0% (100.0%),(1-63)//essence of fire--100.0% (100.0%),(1-1)//pot of lava--50.0% (100.0%),(1-1)//Fire stone--Raro,(1-1)//Ancient stone--Raro,", evoStone:"", boost:"30", booStone:"Ancient stone", habilidades:"Dig, Rock smash, Headbutt"},

  {nome:"Spoink",  numero:325,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3500",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Grumpig", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"326", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Headbutt-30,Psywave-30,Psy pulse-30,Psychic-30,Confuse ray-34,Magic coat-38,", loots:"(1-1)//springs--1.3% (6.5%),(1-10)//enchanted gem--80.0% (100.0%),(1-1)//future orb--20.0% (60.0%),", evoStone:"Enigma stone (x2)", boost:"10", booStone:"Enigma stone", habilidades:""},
  {nome:"Grumpig",  numero:326,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13500",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Spoink", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"325", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Headbutt-80,Shadowave-80,Psy pulse-80,Psychic-80,Teeter dance-85,Power gem-80,Bulldoze-80,Rest-86,Miracle eye-1000,Thick fat-Passiva,", loots:"(1-1)//springs--5.0% (90.0%),(1-43)//enchanted gem--80.0% (100.0%),(1-1)//future orb--20.0% (60.0%),(1-1)//Enigma stone--Raro,", evoStone:"", boost:"3", booStone:"Enigma stone", habilidades:"Teleport, Light"},

  {nome:"Trapinch",  numero:328,  level:20,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Vibrava", evo2:"Flygon", npreevo2:"no", npreevo1:"no", nevo1:"329", nevo2:"330", 
   mapas:'no',  vip: "yes", moves:"Sand attack-20,Bite-20,Mud shot-20,Mud slap-22,Dig-25,Earth power-25,", loots:"(1-1)//strange ball--Raro,(1-10)//earth ball--80.0% (100.0%),(1-1)//sandbag--20.0% (60.0%),", evoStone:"Earth stone", boost:"10", booStone:"Earth stone", habilidades:"Dig, Rock smash"},
  {nome:"Vibrava",  numero:329,  level:50,   ball1:"Greatball",   ball2:"Superball", 
   clan1:"Orebound",   clan2:"Wingeon",   tipo1:"Terra",   tipo2:"Dragão", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Trapinch", evo1:"Flygon", evo2:"no", npreevo2:"no", npreevo1:"328", nevo1:"330", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Super sonic-50,Rock slide-50,Sand tomb-52,Bulldoze-50,Earthquake-56,Levitate-Passiva,", loots:"(1-1)//sand tail--2.0% (10.0%),(1-10)//dragon scale--80.0% (100.0%),(1-10)//earth ball--80.0% (100.0%),(1-1)//sandbag--30.0% (90.0%),(1-1)//Earth stone--Raro,", evoStone:"Crystal stone,Earth stone", boost:"5", booStone:"Earth stone", habilidades:"Dig, Rock smash"},
  {nome:"Flygon",  numero:330,  level:80,   ball1:"Ultraball",   ball2:"Maguball", 
   clan1:"Orebound",   clan2:"Wingeon",   tipo1:"Terra",   tipo2:"Dragão", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"58000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"Trapinch", preevo1:"Vibrava", evo1:"no", evo2:"no", npreevo2:"328", npreevo1:"329", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Super sonic-80,Rock slide-80,Sand tomb-82,Dragon flight-80,Dragon breath-82,Fissure-90,Hyper beam-88,Earthquake-90,Levitate-Passiva,", loots:"(1-1)//sand tail--4.3% (17.0%),(1-21)//dragon scale--80.0% (100.0%),(1-21)//earth ball--80.0% (100.0%),(1-1)//sandbag--50.0% (50.0%),(1-1)//Earth stone--Raro,(1-1)//Crystal stone--Raro,", evoStone:"", boost:"30", booStone:"Crystal stone", habilidades:"Fly, Dig, Rock smash"},

  {nome:"Swablu",  numero:333,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Gardestrike",   clan2:"Wingeon",   tipo1:"Normal",   tipo2:"Voador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"15000", pricenpc:"5000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Altaria", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"334", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Peck-30,Pluck-30,Sing-30,Dragon breath-30,Dragon mist-32,Roost-36,Tailwind-30,Safeguard-38,", loots:"(1-1)//cloud--Raro,(1-5)//rubber ball--80.0% (100.0%),(1-5)//straw--80.0% (100.0%),(1-1)//feather--13.0% (39.0%),", evoStone:"Crystal stone,Feather stone", boost:"10", booStone:"Feather stone", habilidades:""},
  {nome:"Altaria",  numero:334,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Dragão",   tipo2:"Voador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"60000",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Swablu", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"333", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Attract-80,Pluck-85,Sing-80,Dragon breath-82,Dragon mist-85,Sky attack-90,Roost-85,Tailwind-80,Safeguard-90,Mirror move-86,Cloud nine-Passiva,", loots:"(1-1)//cloud--4.3% (21.3%),(1-21)//dragon scale--80.0% (100.0%),(1-21)//straw--80.0% (100.0%),(1-1)//feather--25.5% (76.5%),(1-1)//Feather stone--Raro,(1-1)//Crystal stone--Raro,", evoStone:"", boost:"3", booStone:"Feather stone", habilidades:"Fly"},

  {nome:"Zangoose",  numero:335,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"22000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Quick attack-80,Slash-80,Dig-82,Pursuit-80,Razor wind-88,Fury swipes-80,Last resort-85,Swords dance-88,Taunt-80,Toxic boost-Passiva,Immunity-Passiva,", loots:"(1-1)//tribe mark--4.3% (59.5%,(1-1)//wool ball--24.3% (72.8%),(1-43)//rubber ball--80.0% (100.0%),(1-1)//Heart stone--Raro,", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:"Dig, Rock smash, Headbutt, Cut"},
  {nome:"Seviper",  numero:336,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Venenoso",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"50000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Bite-80,Poison tail-80,Acid-80,Toxic-80,Gastro acid-82,Venomous gale-85,Venoshock-80,Shed skin-Passiva,Vipers fang-Passiva,", loots:"(1-1)//poisonous tail--4.3% (72.3%),(1-43)//bottle of poison--80.0% (100.0%),(1-1)//Venom stone--Raro,(1-1)//tooth--60.0% (100.0%),", evoStone:"", boost:"3", booStone:"Venom stone", habilidades:"Dig, Headbutt"},

  {nome:"Corphish",  numero:341,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3500",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Crawdaunt", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"342", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Bubbles-35,Bubblebeam-30,Crabhammer-30,Dark pulse-30,Night slash-38,Harden-40,Swords dance-38,", loots:"(1-1)//lobster claw--Raro,(1-10)//water gem--80.0% (100.0%),(1-1)//water pendant--21.0% (63.0%),", evoStone:"Water stone, Darkness stone", boost:"10", booStone:"Water stone", habilidades:"Dig, Rock smash, Cut"},
  {nome:"Crawdaunt",  numero:342,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Malefic",   tipo1:"Água",   tipo2:"Noturno", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13500",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Corphish", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"341", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Bubbles-85,Bubblebeam-80,Dark pulse-80,Dig-82,Crabhammer-80,Guillotine-82,Night slash-80,Swords dance-88,Protect-80,", loots:"(1-1)//lobster claw--4.3% (51.0%),(1-21)//dark gem--80.0% (100.0%),(1-21)//water gem--80.0% (100.0%),(1-1)//Darkness stone--Raro,(1-1)//Water stone--Raro,(1-1)//water pendant--45.0% (100.0%),", evoStone:"", boost:"3", booStone:"Water stone", habilidades:"Dig, Rock smash, Cut, Surf"},

  {nome:"Baltoy",  numero:343,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Orebound",   clan2:"Psycraft",   tipo1:"Terra",   tipo2:"Psiquico", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3500",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Claydol", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"344", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Mud slap-30,Extrasensory-30,Psybeam-30,Psychic-30,Earth power-33,Guard split-30,Levitate-Passiva,", loots:"(1-1)//pawn--Raro,(1-5)//earth ball--80.0% (100.0%),(1-5)//enchanted gem--80.0% (100.0%),(1-1)//future orb--13.0% (39.0%),(1-1)//sandbag--13.0% (39.0%),", evoStone:"Earth stone,Enigma stone", boost:"10", booStone:"Earth stone", habilidades:"Rock smash, Dig, Headbutt"},
  {nome:"Claydol",  numero:344,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Psycraft",   tipo1:"Terra",   tipo2:"Psiquico", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13500",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Baltoy", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"343", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Mud sport-80,Extrasensory-80,Psybeam-80,Psyshock-88,Earth power-83,Earthquake-86,Sandstorm-80,Heal block-80,Guard split-80,Protect-80,Levitate-Passiva,", loots:"(1-1)//pawn--4.3% (85.0%),(1-21)//earth ball--80.0% (100.0%),(1-21)//enchanted gem--80.0% (100.0%),(1-1)//future orb--22.5% (90.0%),(1-1)//sandbag--22.5% (90.0%),(1-1)//Enigma stone--Raro,(1-1)//Earth stone--Raro,", evoStone:"", boost:"3", booStone:"Earth stone", habilidades:"Rock smash, Dig, Headbutt, Teleport"},

  {nome:"Lileep",  numero:345,  level:20,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Naturia",   tipo1:"Pedra",   tipo2:"Grama", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"20000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Cradily", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"346", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Grass knot-20,Bind-20,Energy ball-20,Rock tomb-20,Giga drain-25,Barrier-30,", loots:"no", evoStone:"Mirror stone (x25)", boost:"10", booStone:"Mirror stone", habilidades:"Rock smash, Headbutt"},
  {nome:"Cradily",  numero:346,  level:100,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",  clan2:"Naturia",   tipo1:"Pedra",   tipo2:"Grama", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"270000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Lileep", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"345", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Wring out-100,Bind-100,Energy ball-100,Grass knot-100,Rock tomb-100,Solar beam-100,Giga drain-105,Frenzy plant-110,Magic coat-106,Barrier-120,", loots:"no", evoStone:"", boost:"3", booStone:"Mirror stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},

  {nome:"Anorith",  numero:347,  level:20,   ball1:"Masterball",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Naturia",   tipo1:"Pedra",   tipo2:"Inseto", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"0", pricenpc:"20000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Armaldo", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"348", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Rock throw-20,Rock slide-20,Rock tomb-20,Fury cutter-25,Stone edge-20,Hunter mark-20,X scissor-25,", loots:"(1-12)//bug gosme--80.0%,(1-12)//small stone--80.0%,(1-1)//stone orb--31.0%,(1-1)//pot of moss bug--39.0%,(1-1)//claw fossil--Raro,", evoStone:"Rock stone,Crystal stone", boost:"10", booStone:"Cocoon stone", habilidades:"Dig, Rock smash, Cut"},
  {nome:"Armaldo",  numero:348,  level:80,   ball1:"Masterball",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Naturia",   tipo1:"Pedra",   tipo2:"Inseto", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"0", pricenpc:"75000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Anorith", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"347", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Rock throw-100,Rock slide-100,Rock tomb-100,Fury cutter-105,Crush claw-100,Stone edge-100,Hunter mark-100,X scissor-105,Rock blast-100,Protect-100,", loots:"(1-20)//bug gosme--80.0%,(1-20)//small stone--80.0%,(1-1)//Rock stone--Raro,(1-1)//Cocoon stone--Raro,(1-1)//stone orb--31.0% (62.0%),(1-1)//pot of moss bug--39.0% (78.0%),(1-1)//claw fossil--Raro,", evoStone:"", boost:"3", booStone:"Cocoon stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},

  {nome:"Feebas",  numero:349,  level:10,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"3000", pricenpc:"300",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Milotic", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"350", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Tackle-10,Splash-10,", loots:"(1-10)//water gem--80.0% (100.0%),(1-1)//water pendant--21.0% (63.0%),", evoStone:"Prism scale (x10)", boost:"20", booStone:"Water stone", habilidades:""},
  {nome:"Milotic",  numero:350,  level:150,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"1000000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Feebas", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"349", nevo1:"no", nevo2:"no",
   mapas:'no',  vip: "yes", moves:"Aqua tail-150,Wrap-150,Water gun-150,Water pulse-150,Twister-154,Waterfall-150,Hydropump-158,Rain dance-150,Aqua ring-150,", loots:"(1-80)//water gem--90.0% (100.0%),(1-1)//beautiful scales--60.0%,(1-1)//Seavell backpack--2.4%,(1-1)//Prism scale--1.4%,", evoStone:"", boost:"10", booStone:"Mystic star", habilidades:"Surf"},

  {nome:"Castform",  numero:351,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"120000",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Forecast-Passiva,", loots:"(1-20)//essence of fire--80.0%,(1-20)//snowball--80.0%,(1-20)//water gem--80.0%,(1-1)//pot of lava--80.0%,(1-1)//ice orb--80.0%,(1-1)//water pendant--80.0%,(1-1)//Water stone--1.3%,(1-1)//Fire stone--1.3%,(1-1)//Ice stone--1.3%,", evoStone:"", boost:"50", booStone:"Mystic star", habilidades:""},

  {nome:"Kecleon",  numero:352,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"80000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Lick-80,Shadow ball-80,Fury swipes-80,Sucker punch-83,Camouflage-80,Shadow sneak-85,Shadow claw-80,Ancient power-95,Color change-Passiva,", loots:"(1-1)//bitten apple--80.0%,(1-1)//Heart stone--20.0%,(1-1)//pizza--30.0%,(1-1)//hamburguer--30.0%,(1-1)//hotdog--30.0%,", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:"Dig, Headbutt, Cut"},

  {nome:"Shuppet",  numero:353,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3500",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Banette", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"354", nevo2:"no",
   mapas:'no',  vip: "yes", moves:"Shadow ball-30,Shadow sphere-30,Faint attack-30,Night shade-35,Invisible-30,Dark accurate-1000,", loots:"(1-10)//ghost essence--80.0% (100.0%),(1-1)//doll star--1.5% (7.5%),", evoStone:"Darkness stone (x2)", boost:"10", booStone:"Darkness stone", habilidades:""},
  {nome:"Banette",  numero:354,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Shuppet", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"353", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Shadow ball-80,Shadow sphere-80,Shadow punch-84,Ominous wind-85,Shadow storm-86,Invisible-80,Curse-86,Torment-85,Dark accurate-1000,Cursed body-Passiva,Insomnia-Passiva,", loots:"(1-43)//ghost essence--80.0% (100.0%),(1-1)//doll star--5.0% (60.0%),(1-1)//Darkness stone--Raro,", evoStone:"", boost:"3", booStone:"Darkness stone", habilidades:"Headbutt"},

  {nome:"Duskull",  numero:355,  level:40,   ball1:"Greatball",   ball2:"Superball", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"15000", pricenpc:"8000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Dusclops", evo2:"Dusknoir", npreevo2:"no", npreevo1:"no", nevo1:"356", nevo2:"477", 
   mapas:'no',  vip: "yes", moves:"Shadow ball-40,Shadow punch-44,Night shade-40,Confuse ray-40,Dark accurate-1000,", loots:"(1-20)//ghost essence--80.0% (100.0%),(1-1)//ghost skull--2.0% (10.0%),", evoStone:"Darkness stone", boost:"7", booStone:"Darkness stone", habilidades:"Headbutt"},
  {nome:"Dusclops",  numero:356,  level:70,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Duskull", evo1:"Dusknoir", evo2:"no", npreevo2:"no", npreevo1:"355", nevo1:"477", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Shadow ball-70,Shadow punch-74,Night shade-70,Confuse ray-70,Hex-75,Curse-76,Dark accurate-1000,", loots:"(1-43)//ghost essence--80.0% (100.0%),(1-1)//ghost skull--5.0% (30.0%),(1-1)//Darkness stone--Raro,(1-1)//creepy eye--Raro,", evoStone:"Reaper cloth (x10)", boost:"4", booStone:"Darkness stone", habilidades:"Headbutt"},

  {nome:"Tropius",  numero:357,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Grama",   tipo2:"Voador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"1000000", pricenpc:"120000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Seed bomb-100,Body slam-100,Razor leaf-100,Magical leaf-100,Air slash-103,Stomp-105,Leaf tornado-110,Leaf storm-110,Growth-100,", loots:"(1-1)//palm leaves--4.3% (63.8%),(1-21)//straw--80.0% (100.0%),(1-21)//seed--80.0% (100.0%),(1-1)//feather--13.0% (100.0%),(1-1)//bird beak--25.5% (100.0%),(1-1)//Feather stone--Raro,(1-1)//Leaf stone--Raro,(1-1)//Ancient stone--Raro,", evoStone:"", boost:"30", booStone:"Ancient stone", habilidades:"Rock smash, Cut, Headbutt, Fly"},

  {nome:"Absol",   numero:359,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Noturno",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"1000000", pricenpc:"120000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Quick attack-100,Shadowave-100,Pursuit-100,Dark pulse-100,Night slash-100,Sucker punch-103,Razor wind-108,Assurance-108,Swords dance-108,Taunt-100,Justified-Passiva,", loots:"(1-1)//dark moon--Raro,(1-43)//dark gem--80.0% (100.0%),(1-1)//Darkness stone--Raro,(1-1)//Ancient stone--Raro,", evoStone:"", boost:"30", booStone:"Ancient stone", habilidades:"Rock smash, Dig, Headbutt, Cut, Ride"},

  {nome:"Snorunt",  numero:361,  level:30,   ball1:"Pokeball",   ball2:"Greatball", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"10000", pricenpc:"3500",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Glalie,Froslass", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"362,478", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Bite-30,Ice shards-30,Ice fang-30,Icy wind-30,Ice beam-32,Frost power-36,", loots:"(1-1)//ice blocks--Raro,(1-10)//snowball--80.0% (100.0%),(1-1)//ice orb--10.0% (30.0%),", evoStone:"Ice stone (x2)=Glalie ou Dawn stone=Froslass", boost:"10", booStone:"Ice stone", habilidades:""},
  {nome:"Glalie",  numero:362,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"13500",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Snorunt", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"361", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Bite-80,Ice shards-80,Ice fang-80,Icy wind-80,Powder snow-80,Frost power-80,Sheer cold-90,Blizzard-86,Absolute zero-Passiva,", loots:"(1-1)//ice blocks--4.3% (85.0%),(1-43)//snowball--80.0% (100.0%),(1-1)//ice orb--25.0% (75.0%),(1-1)//Ice stone--Raro,", evoStone:"", boost:"3", booStone:"Ice stone", habilidades:"Headbutt"},

  {nome:"Spheal",  numero:363,  level:30,   ball1:"Greatball",   ball2:"Superball", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Água", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Fácil", xpcaught:"15000", pricenpc:"6000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Sealeo", evo2:"Walrein", npreevo2:"no", npreevo1:"no", nevo1:"364", nevo2:"365", 
   mapas:'no',  vip: "yes", moves:"Ice shards-30,Ice fang-30,Ice beam-30,Ice ball-30,Frost breath-32,Powder snow-38,Defense curl-30,", loots:"(1-1)//seal mustache--Raro,(1-5)//snowball--80.0% (100.0%),(1-5)//water gem--80.0% (100.0%),(1-1)//ice orb--5.0% (15.0%),(1-1)//water pendant--13.0% (39.0%),(1-1)//nail--20.0% (60.0%),", evoStone:"Ice stone", boost:"10", booStone:"Ice stone", habilidades:"Headbutt"},
  {nome:"Sealeo",  numero:364,  level:60,   ball1:"Greatball",   ball2:"Superball", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Água",
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"50000", pricenpc:"11000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Spheal", evo1:"Walrein", evo2:"no", npreevo2:"no", npreevo1:"363", nevo1:"365", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Ice shards-60,Ice fang-60,Ice beam-60,Ice ball-60,Frost breath-62,Powder snow-60,Aurora beam-64,Hail-65,Defense curl-60,", loots:"(1-1)//seal mustache--2.0 (10.0%),(1-10)//snowball--80.0% (100.0%),(1-10)//water gem--80.0% (100.0%),(1-1)//ice orb--1.2% (3.6%),(1-1)//water pendant--18.0% (54.0%),(1-1)//Ice stone--Raro,(1-1)//Water stone--Raro,(1-1)//nail--35.0% (100.0%),", evoStone:"Crystal stone,Ice stone", boost:"5", booStone:"Ice stone", habilidades:"Surf, Headbutt"},
  {nome:"Walrein",  numero:365,  level:100,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Água",
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"66000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"Spheal", preevo1:"Sealeo", evo1:"no", evo2:"no", npreevo2:"363", npreevo1:"364", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Ice shards-100,Ice fang-100,Ice beam-100,Ice ball-100,Frost breath-102,Powder snow-100,Aurora beam-104,Hail-108,Rest-106,", loots:"(1-1)//seal mustache--4.3 (63.8%),(1-21)//snowball--80.0% (100.0%),(1-21)//water gem--80.0% (100.0%),(1-1)//ice orb--3.0% (30.0%),(1-1)//water pendant--25.5% (100.0%),(1-1)//Ice stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//nail--50.0% (100.0%),", evoStone:"", boost:"30", booStone:"Crystal stone", habilidades:"Surf, Headbutt"},

  {nome:"Bagon",   numero:371,  level:40,   ball1:"Superball",   ball2:"Ultraball", 
   clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Dragão",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Médio", xpcaught:"100000", pricenpc:"15000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Shelgon", evo2:"Salamence", npreevo2:"no", npreevo1:"no", nevo1:"372", nevo2:"373", 
   mapas:'no',  vip: "yes", moves:"Bite-40,Crunch-40,Dragon tail-40,Dragon claw-40,Dragon breath-42,Dragon pulse-45,Scary face-42,", loots:"(1-1)//mini wings--Raro,(1-10)//dragon scale--80.0% (100.0%),", evoStone:"Crystal stone", boost:"50", booStone:"Crystal stone", habilidades:"Headbutt"},
  {nome:"Shelgon",  numero:372,  level:70,   ball1:"Ultraball",   ball2:"Taleball", 
   clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Dragão",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"65000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Bagon", evo1:"Salamence", evo2:"no", npreevo2:"no", npreevo1:"371", nevo1:"373", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Bite-70,Crunch-70,Dragon tail-70,Dragon claw-70,Dragon breath-72,Dragon pulse-74,Draco meteor-76,", loots:"(1-1)//mini wings--Raro,(1-20)//dragon scale--80.0% (100.0%),(1-1)//Crystal stone--Raro,", evoStone:"Bloody wing (x10)", boost:"50", booStone:"Crystal stone", habilidades:"Rock smash, Headbutt"},
  {nome:"Salamence",  numero:373,  level:150,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Dragão",   tipo2:"Voador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"1000000",
   shiny:"no", fast:"yes", heavy:"yes", preevo2:"Bagon", preevo1:"Shelgon", evo1:"no", evo2:"no", npreevo2:"371", npreevo1:"372", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Bite-150,Crunch-150,Dragon tail-150,Dragon claw-150,Dragon breath-152,Dragon pulse-155,Hyper beam-158,Draco meteor-165,Outrage-165,", loots:"(1-80)//dragon scale--80.0% (100.0%),(1-1)//mini wings--90.0%,(1-1)//dragon tooth--90.0%,(1-1)//Wingeon backpack--2.4%,(1-1)//Bloody wings--1.4%,", evoStone:"", boost:"10", booStone:"Mystic star", habilidades:"Rock smash, Cut, Headbutt, Fly"},

  {nome:"Beldum",  numero:374,  level:50,   ball1:"Superball",   ball2:"Ultraball", 
   clan1:"Ironhard",   clan2:"Psycraft",   tipo1:"Metal",   tipo2:"Psiquico", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"100000", pricenpc:"15000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Metang", evo2:"Metagross", npreevo2:"no", npreevo1:"no", nevo1:"375", nevo2:"376", 
   mapas:'no',  vip: "yes", moves:"Iron head-50,Psy pulse-50,Hammer arm-50,Psychic-50,Metal claw-57,", loots:"(1-1)//tech ball--Raro,(1-10)//piece of steel--80.0% (100.0%),", evoStone:"Metal stone,Enigma stone", boost:"5", booStone:"Enigma stone", habilidades:"Rock smash, Headbutt, Teleport"},
  {nome:"Metang",  numero:375,  level:80,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Psycraft",   tipo1:"Metal",   tipo2:"Psiquico", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"70000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Beldum", evo1:"Metagross", evo2:"no", npreevo2:"no", npreevo1:"374", nevo1:"376", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron head-80,Psy pulse-80,Hammer arm-80,Confusion-80,Psychic-80,Metal claw-87,Meteor mash-80,Flash cannon-88,Iron defense-84,Miracle eye-1000,", loots:"(1-1)//tech ball--Raro,(1-20)//piece of steel--80.0% (100.0%),(1-1)//Metal stone--Raro,(1-1)//Enigma stone--Raro,", evoStone:"Metal coat (x10)", boost:"3", booStone:"Enigma stone", habilidades:"Rock smash, Teleport, Headbutt, Cut"},
  {nome:"Metagross",  numero:376,  level:150,   ball1:"Ultraball",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Psycraft",   tipo1:"Metal",   tipo2:"Psiquico", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"1000000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"Beldum", preevo1:"Metang", evo1:"no", evo2:"no", npreevo2:"374", npreevo1:"375", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron head-150,Psy pulse-150,Hammer arm-150,Confusion-150,Psychic-150,Metal claw-157,Meteor mash-150,Flash cannon-158,Iron defense-154,Miracle eye-1000,", loots:"(1-1)//tech ball--90.0%,(1-80)//piece of steel--90.0%,(1-1)//Metal coat--1.4%,(1-1)//Ironhard backpack--1.2%,(1-1)//Psycraft backpack--1.2%,", evoStone:"", boost:"10", booStone:"Mystic star", habilidades:"Rock smash, Dig, Cut, Teleport, Headbutt, Ride"},

  {nome:"Regirock",  numero:377,  level:500,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Pedra",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Rock throw-500,Rock slide-500,Rock tomb-500,Stone edge-500,Hammer arm-500,Ancient power-515,Rock wrecker-505,Hyper beam-510,Harden-500,Groundshock-Passiva,", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
  {nome:"Regice",  numero:378,  level:500,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"no", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
  {nome:"Registeel",  numero:379,  level:500,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Nenhum",   tipo1:"Metal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron spiner-500,Iron head-500,Iron tail-500,Hammer arm-500,Ancient power-515,Metal burst-500,Metal claw-507,Meteor mash-500,Flash cannon-508,Hyper beam-510,Harden-500,", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},

///////// INICIO GERACAO 4
  {nome:"Torterra",  numero:389,  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Naturia",   clan2:"Orebound",   tipo1:"Grama",   tipo2:"Terra", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"800000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Bite-100,Grass knot-100,Razor leaf-100,Rock tomb-100,Synthesis-100,Wood hammer-100,Ground colapse-103,Giga drain-105,Earthquake-107,Frenzy plant-110,Fossilized shell-Passiva,", loots:"no", evoStone:"", boost:"2", booStone:"Earth stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},

  {nome:"Infernape",  numero:392,  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Volcanic",   clan2:"Gardestrike",   tipo1:"Fogo",   tipo2:"Lutador", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"800000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Low kick-100,Ember-100,Fire punch-100,Close combat-100,Acrobatics-105,Mach punch-100,Magma fist-100,Focus blast-100,Flare blitz-110,Evasion-Passiva,", loots:"no", evoStone:"", boost:"2", booStone:"Punch stone", habilidades:"Rock smash, Dig, Cut, Headbutt"},

  {nome:"Empoleon",  numero:395,  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Seavell",   clan2:"Ironhard",   tipo1:"Água",   tipo2:"Metal", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"800000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron head-100,Bubbles-100,Bubblebeam-100,Metal claw-100,Impale-103,Scald-102,Aqua jet-100,Flash cannon-108,Hydropump-100,Swords dance-100,Water sport-Passiva,", loots:"no", evoStone:"", boost:"2", booStone:"Water stone", habilidades:"Surf, Headbutt"},

  {nome:"Luxray",  numero:405,  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"800000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Roar-110,Spark-100,Bite-100,Ice fang-100,Shredder team-110,Volt kiten-100,Raigoh-105,Volt fang-115,Charge-100,Guts-Passiva,", loots:"no", evoStone:"", boost:"2", booStone:"Thunder stone", habilidades:"Light, Ride, Dig, Headbutt"},

//  {nome:"Budew",  numero:406, 
//  {nome:"Roserade",  numero:407, 

  {nome:"Shieldon",  numero:410,  level:"30",   ball1:"Masterball",   ball2:"Nenhuma",
   clan1:"Orebound",   clan2:"Ironhard",   tipo1:"Pedra",   tipo2:"Metal", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"0", pricenpc:"80000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Bastiodon", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"411", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron head-30,Stone edge-30,Meteor mash-30,Heavy slam-30,Rock blast-35,Rock wrecker-40,", loots:"(1-21)//piece of steel--100.0%,(1-21)//small stone--100.0%,(1-1)//stone orb--30.0% (100.0%),(1-1)//armor fossil--Raro,", evoStone:"Metal stone,Crystal stone", boost:"9", booStone:"Rock stone", habilidades:"Dig, Rock smash, Headbutt"},
  {nome:"Bastiodon",  numero:411,  level:"100",   ball1:"Masterball",   ball2:"Nenhuma",
   clan1:"Orebound",   clan2:"Ironhard",   tipo1:"Pedra",   tipo2:"Metal", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"0", pricenpc:"120000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Shieldon", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"410", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron head-100,Stone edge-100,Meteor mash-100,Heavy slam-100,Rock slide-100,Rock blast-100,Rock wrecker-105,Stealth rock-110,Shield-Passiva,", loots:"(1-1)//bone shield--Raro,(1-21)//piece of steel--100.0%,(1-21)//small stone--100.0%,(1-1)//stone orb--30.0% (100.0%),(1-1)//Rock stone--3.1%,(1-1)//Metal stone--Raro,(1-1)//armor fossil--Raro,", evoStone:"", boost:"3", booStone:"Rock stone", habilidades:"Dig, Rock smash, Headbutt"},

  {nome:"Pachirisu",  numero:417,  level:"100",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"15000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Ion deluge-100,Charm-100,Spark-100,Swift-100,Nuzzle-105,Grass knot-100,Shockwave-100,Super fang-100,Charge-100,Volt switch-100,Volt absorb-Passiva,Magnet rise-Passiva,", loots:"(1-43)//piece of steel--80.0%,(1-1)//Thunder stone--1.0%,(1-1)//electric box--90.5%,", evoStone:"", boost:"3", booStone:"Thunder stone", habilidades:"Dig, Light"},


  {nome:"Ambipom",  numero:424,  level:"80",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Aipom", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"190", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Sand attack-80,Doubleslap-80,Swift-80,Pursuit-80,Last resort-80,Double hit-82,Fury swipes-80,Agility-80,Double team-82,", loots:"no", evoStone:"", boost:"5", booStone:"Mirror stone", habilidades:"Dig, Rock smash, Headbutt"},

   
  {nome:"Mismagius",  numero:429,  level:"400",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"0",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Shadow ball-400,Dark pulse-400,Cursed hollow-400,Black blow-400,Black box-400,Night daze-406,Fear-400,Mystical fire-410,Double team-402,Dark accurate-1320,Seismic toss-Passiva,", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:"Teleport, Blink"},

   
  {nome:"Honchkrow",  numero:430,  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Wingeon",   tipo1:"Noturno",   tipo2:"Voador", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"800000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Murkrow", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"198", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Peck-100,Pursuit-100,Night shade-100,Wing attack-103,Sucker punch-107,Dark pulse-100,Assurance-105,Torment-105,Crow swarm-105,Tailwind-100,Insomnia-Passiva,", loots:"no", evoStone:"", boost:"2", booStone:"Darkness stone", habilidades:"Fly"},

   
  {nome:"Glameow",  numero:431,  level:"30",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"100000", pricenpc:"Unseleable",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Purugly", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"432", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Hone claws-30,Faint attack-30,Fury swipes-34,Bite-30,Last resort-30,Sucker punch-33,", loots:"no", evoStone:"Heart stone (x2)", boost:"10", booStone:"Heart stone", habilidades:"Dig"},
  {nome:"Purugly",  numero:432,  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"200000", pricenpc:"Unseleable",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Glameow", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"431", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Scratch-80,Faint attack-80,Bite-80,Body slam-84,Payback-80,Fury swipes-80,Last resort-85,Assurance-88,Own tempo-Passiva,", loots:"no", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:"Dig, Headbutt"},

  {nome:"Bronzor",  numero:436,  level:"30",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Ironhard",   clan2:"Psycraft",   tipo1:"Metal",   tipo2:"Psiquico", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"10000", pricenpc:"15000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Bronzong", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"437", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron spiner-30,Extrasensory-30,Heavy slam-30,Psychic-30,Levitate-Passiva,", loots:"(1-1)//tech ball--Raro,(1-10)//piece of steel--80.0% (100.0%),", evoStone:"Enigma stone (x2)", boost:"5", booStone:"Enigma stone", habilidades:"Teleport, Blink"},
  {nome:"Bronzong",  numero:437,  level:"80",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Ironhard",   clan2:"Psycraft",   tipo1:"Metal",   tipo2:"Psiquico", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"25000",
   shiny:"yes", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Bronzor", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"436", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Iron spiner-80,Extrasensory-80,Heavy slam-80,Psychic-80,Metal sound-110,Psy impact-90,Levitate-Passiva,Iron body-Passiva,", loots:"(1-1)//tech ball--Raro,(1-20)//piece of steel--80.0% (100.0%),(1-1)//Metal stone--Raro,(1-1)//Enigma stone--Raro,", evoStone:"", boost:"3", booStone:"Enigma stone", habilidades:"Teleport, Light, Blink"},

  {nome:"Riolu",  numero:447,  level:"50",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"100000", pricenpc:"15000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Lucario", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"448", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Low kick-50,Quick attack-50,Iron head-50,Close combat-50,Focus blast-50,Bullet punch-50,Evasion-Passiva,Superpower-Passiva,", loots:"(1-13)//band aid--80.0% (100.0%),(1-13)//piece of steel--80.0% (100.0%),", evoStone:"Metal stone,Punch stone", boost:"5", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
  {nome:"Lucario",  numero:448,  level:"80",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Gardestrike",   clan2:"Ironhard",   tipo1:"Lutador",   tipo2:"Metal", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"65000",
   shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Riolu", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"447", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Quick attack-80,Iron head-80,Close combat-80,Metal claw-80,Bullet punch-80,Bone rush-80,Aura sphere-80,Swords dance-80,Evasion-Passiva,Superpower-Passiva,Foresight-Passiva,", loots:"(1-21)//band aid--80.0% (100.0%),(1-21)//piece of steel--80.0% (100.0%),(1-1)//Punch stone--Raro,(1-1)//Metal stone--Raro,(1-1)//Lucarionite--Raro,", evoStone:"", boost:"3", booStone:"Punch stone", habilidades:"Rock smash, Light, Headbutt"},


  {nome:"Hippopotas",  numero:449,  level:"30",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"20000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Hippowdon", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"450", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Sand attack-30,Iron tail-30,Sand tomb-32,Dig-32,Earth power-30,Earthquake-38,", loots:"no", evoStone:"Dimensional stone (x10)", boost:"7", booStone:"Dimensional stone", habilidades:"Dig, Rock smash, Headbutt"},
  {nome:"Hippowdon",  numero:450,  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"270000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Hippopotas", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"449", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Body slam-104,Stone edge-100,Sand tomb-102,Dig-102,Sand field-110,Fissure-110,Earthquake-107,Slack off-105,Sandstorm-100,Sand force-Passiva,Sand stream-Passiva,", loots:"no", evoStone:"", boost:"3", booStone:"Dimensional stone", habilidades:"Dig, Rock smash, Headbutt"},


  {nome:"Skorupi",  numero:451,  level:"50",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Naturia",   tipo1:"Venenoso",   tipo2:"Inseto", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"20000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Drapion", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"452", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Bite-50,Poison tail-50,Acid-50,Poison fang-50,Poison bomb-55,Pin missile-52,Cross poison-54,", loots:"no", evoStone:"Mirror stone (x10)", boost:"10", booStone:"Mirror stone", habilidades:"Dig"},
  {nome:"Drapion",  numero:452,  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Venenoso",   tipo2:"Noturno", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"270000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Skorupi", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"451", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Hone claws-100,Bite-100,Crunch-100,Poison fang-100,Night slash-100,Cross poison-104,Belch-107,Deadly spikes-100,", loots:"no", evoStone:"", boost:"3", booStone:"Mirror stone", habilidades:"Dig, Headbutt"},

  {nome:"Croagunk",  numero:453,  level:"40",   ball1:"Superball",   ball2:"Ultraball",
   clan1:"Malefic",   clan2:"Gardestrike",   tipo1:"Venenoso",   tipo2:"Lutador", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Médio", xpcaught:"50000", pricenpc:"11000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Toxicroak", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"454", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Mud bomb-40,Poison jab-40,Drain punch-40,Focus blast-40,Croak hook-45,Revenge-48,", loots:"(1-25)//bottle of poison--100.0% (100.0%),(1-25)//band aid--100.0% (100.0%),", evoStone:"Crystal stone,Venom stone", boost:"5", booStone:"Venom stone", habilidades:"Rock smash, Dig"},
  {nome:"Toxicroak",  numero:454,  level:"100",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Gardestrike",   tipo1:"Venenoso",   tipo2:"Lutador", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"66000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Croagunk", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"453", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Low kick-100,Gunk shot-100,Poison jab-100,Drain punch-100,Focus blast-100,Vacuum wave-115,Swamp mist-100,Croak hook-105,Revenge-112,Anticipation-Passiva,", loots:"(1-35)//bottle of poison--100.0% (100.0%),(1-35)//band aid--100.0% (100.0%),(1-1)//Venom stone--Raro,(1-1)//Punch stone--Raro,(1-1)//Crystal stone--Raro,", evoStone:"", boost:"3", booStone:"Venom stone", habilidades:"Rock smash, Cut, Headbutt"},

  {nome:"Snover",  numero:459,  level:"40",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Naturia",   clan2:"Seavell",   tipo1:"Grama",   tipo2:"Gelo", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Sem sistema", xpcaught:"400000", pricenpc:"80000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Abomasnow", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"460", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Razor leaf-40,Ice shards-40,Icy wind-40,Ice punch-40,Powder snow-40,Wood hammer-40,Grass whistle-40,", loots:"(1-21)//seed--80.0% (100.0%),(1-21)//snowball--100.0% (100.0%),(1-1)//ice orb--3.0% (30.0%),(1-1)//leaves--25.5% (100.0%),(1-1)//nail--90.0% (100.0%),", evoStone:"Ice stone (x2)", boost:"5", booStone:"Ice stone", habilidades:"Dig, Headbutt, Rock smash"},
  {nome:"Abomasnow",  numero:460,  level:"100",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Naturia",   clan2:"Seavell",   tipo1:"Grama",   tipo2:"Gelo", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Sem sistema", xpcaught:"1000000", pricenpc:"120000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Snover", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"459", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Icicle crash-100,Ice shards-100,Rock slide-100,Ice punch-100,Powder snow-100,Wood hammer-100,Grass whistle-100,Blizzard-108,Snow warning-Passiva,", loots:"(1-1)//seal mustache--82.5%,(1-21)//seed--80.0%,(1-21)//snowball--100.0%,(1-1)//ice orb--60.0%,(1-1)//leaves--45.5%,(1-1)//Ice stone--3.1%,(1-1)//Leaf stone--3.1%,(1-1)//nail--60.0%,", evoStone:"", boost:"3", booStone:"Ice stone", habilidades:"Dig, Headbutt, Rock smash"},

//  Weaville"461 

  {nome:"Magnezone",  numero:462,  level:"100",   ball1:"Ultraball",   ball2:"Tinkerball",
   clan1:"Raibolt",   clan2:"Ironhard",   tipo1:"Elétrico",   tipo2:"Metal", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"120000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"Magnemite", preevo1:"Magneton", evo1:"no", evo2:"no", npreevo2:"81", npreevo1:"82", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Super sonic-100,Thunder shock-100,Spark-100,Thunder wave-100,Magnet bomb-115,Tri attack-115,Flash cannon-108,Magnet field-Passiva,Magnet rise-Passiva,Tri vision-Passiva,", loots:"(1-43)//piece of steel--80.0% (100.0%),(1-1)//magnet--100.0%,(1-1)//Thunder stone--1.1%,(1-1)//Metal stone--Raro,(1-1)//Data UFO--Raro,(1-1)//titanium imam--Raro,", evoStone:"", boost:"30", booStone:"Metal stone", habilidades:"Fly, Light, Headbutt"},

   {nome:"Lickilicky",  numero:463,  level:100,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"300000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Lickitung", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"108", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Lick-100,Shadow ball-100,Power whip-108,Toxic-100,Body slam-104,Iron tail-100,Squishy licking-105,Tongue hook-105,Gyro ball-108,Defense curl-100,", loots:"no", evoStone:"", boost:"3", booStone:"Mirror stone", habilidades:"Headbutt"},

  {nome:"Rhyperior",  numero:464,  level:"150",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Pedra", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"1000000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Rhyhorn", preevo1:"Rhydon", evo1:"no", evo2:"no", npreevo2:"111", npreevo1:"112", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Horn attack-150,Stone edge-150,Rock throw-150,Rock tomb-150,Bulldoze-153,Earthquake-157,Rock wrecker-155,Drill run-157,Scary face-152,Solid rock-Passiva,", loots:"(1-42)//small stone--90.0%,(1-42)//earth ball--90.0%,(1-1)//horn drill--90.0%,(1-1)//stone orb--90.0%,(1-1)//Orebound backpack--2.4%,(1-1)//Protector--1.4%,", evoStone:"", boost:"10", booStone:"Mystic star", habilidades:"Dig, Rock smash, Headbutt"},

  {nome:"Tangrowth",  numero:465,  level:"150",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"1000000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"no", preevo1:"Tangela", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"114", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Leech seed-150,Vine whip-150,Power whip-158,Ancient power-165,Giga drain-155,Poison powder-150,Sleep powder-155,Stun spore-150,", loots:"(1-80)//seed--90.0%,(1-1)//massive vines--6.0%,(1-1)//blue vines--90.0%,(1-1)//Naturia backpack--2.4%,(1-1)//Gaia tentacles--1.4%,", evoStone:"", boost:"10", booStone:"Mystic star", habilidades:"Cut, Headbutt"},

  {nome:"Electivire",  numero:466,  level:"150",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"1000000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Elekid", preevo1:"Electabuzz", evo1:"no", evo2:"no", npreevo2:"239", npreevo1:"125", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Swift-150,Low kick-150,Thunder punch-150,Wake up slap-150,Lightning axe-150,Hammer arm-150,Cross chop-154,Focus blast-150,Earthquake-160,Magnet rise-Passiva,", loots:"(1-80)//screw--90%,(1-1)//Max volt paw--6.0%,(1-1)//electric tail--90.0%,(1-1)//Raibolt backpack--2.4%,(1-1)//Electirizer--1.4%,", evoStone:"", boost:"10", booStone:"Mystic star", habilidades:"Rock smash, Light, Headbutt"},

  {nome:"Magmortar",  numero:467,  level:"150",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"1000000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Magby", preevo1:"Magmar", evo1:"no", evo2:"no", npreevo2:"240", npreevo1:"126", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Volcano shot-150,Ember-150,Flamethrower-150,Smokescreen-150,Fireball-150,Fire blast-150,Magma storm-155,Hyper beam-160,Sunny day-162,Flame body-Passiva,Double cannon-Passiva,", loots:"(1-80)//essence of fire--90%,(1-1)//magmar foot--90.0%,(1-1)//Volcanic backpack--2.4%,(1-1)//Magmarizer--1.4%,", evoStone:"", boost:"10", booStone:"Mystic star", habilidades:"Rock smash, Headbutt"},

  {nome:"Togekiss",  numero:468,  level:"100",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Psycraft",   clan2:"Wingeon",   tipo1:"Fada",   tipo2:"Voador", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"125000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Togepi", preevo1:"Togetic", evo1:"no", evo2:"no", npreevo2:"175", npreevo1:"176", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Charm-100,Dazzling gleam-104,Aura sphere-100,Fairy wind-108,Extremespeed-100,Great love-107,Sky attack-110,Metronome-100,Safeguard-110,Serene Happiness-Passiva,Leftovers-Passiva,", loots:"(1-1)//eggshell--4.3%,(1-21)//rubber ball--100.0%,(1-21)//straw--100.0%,(1-1)//Feather stone--Raro,(1-1)//feather--80.0%,(1-1)//Shiny stone--Raro,", evoStone:"", boost:"2", booStone:"Feather stone", habilidades:"Fly"},

  {nome:"Leafeon",  numero:470,  level:60,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Eevee", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"133", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Leech seed-60,Leaf blade-60,X scissor-64,Grassy terrain-70,Grass whistle-60,Hyper voice-60,Leaf tornado-70,Synthesis-60,Protect-60,", loots:"no", evoStone:"", boost:"7", booStone:"Mirror stone", habilidades:"Dig"},
  {nome:"Glaceon",  numero:471,  level:60,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Eevee", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"133", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Swift-60,Ice shards-60,Ice fang-60,Avalanche-60,Frost power-60,Blizzard-66,Hail-68,Ice body-Passiva,", loots:"no", evoStone:"", boost:"7", booStone:"Mirror stone", habilidades:"Dig"},

  {nome:"Gliscor",  numero:472,  level:"80",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Orebound",   clan2:"Wingeon",   tipo1:"Terra",   tipo2:"Voador", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"200000", pricenpc:"18000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Gligar", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"207", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Guillotine-84,Wing attack-80,Air cutter-88,Fire fang-80,Sky attack-90,Aerial ace-84,Sky uppercut-88,Swords dance-86,Agility-86,Protect-80,Evasion-Passiva,Shadow slice-Passiva,", loots:"(1-1)//Gligar claw--4.3% (85.0%),(1-1)//Earth stone--Raro,(1-1)//Feather stone--Raro,(1-10)//earth ball--80.0%,(1-10)//straw--80.0%,(1-1)//sandbag--17.0% (51.0%),(1-1)//tooth--12.0% (60.0%),", evoStone:"", boost:"3", booStone:"Earth stone", habilidades:"Dig, Rock smash, Headbutt, Cut"},

//  Mamoswine 473 

  {nome:"Gallade",  numero:475,  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Psycraft",   clan2:"Gardestrike",   tipo1:"Psiquico",   tipo2:"Lutador", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"800000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Ralts", preevo1:"Kirlia", evo1:"no", evo2:"no", npreevo2:"280", npreevo1:"281", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes",
   moves:"Psycho cut-108,Low kick-100,Close combat-100,Zen headbutt-100,Brick break-100,Focus blast-100,Revenge-112,Double team-102,Power up punch-100,Miracle eye-1010,", loots:"no", evoStone:"", boost:"2", booStone:"Enigma stone", habilidades:"Teleport, Cut, Headbutt, Blink"},

  {nome:"Probopass",  numero:476,  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Orebound",   clan2:"Ironhard",   tipo1:"Pedra",   tipo2:"Metal", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Nosepass", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"299", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Iron head-80,Tackle-80,Rock throw-80,Stone edge-80,Power gem-80,Bulldoze-80,Rock blast-80,Heavy slam-80,Iron defense-84,Stealth rock-90,Magnet pull-Passiva,", loots:"no", evoStone:"Mirror stone (x10)", boost:"5", booStone:"Mirror stone", habilidades:"Rock smash, Headbutt, Dig"},

  {nome:"Dusknoir",  numero:477,  level:"150",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"1000000",
   shiny:"no", fast:"no", heavy:"yes", preevo2:"Duskull", preevo1:"Dusclops", evo1:"no", evo2:"no", npreevo2:"355", npreevo1:"356", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Destiny bond-150,Shadow ball-150,Shadow punch-154,Ominous wind-150,Shadow sneak-155,Hex-155,Curse-156,Dark accurate-1000,Spirit world-Passiva", loots:"(1-80)//ghost essence--90.0%,(1-1)//scary smile--6.0%,(1-1)//Malefic backpack--2.4%,(1-1)//Reaper cloth--1.4%,", evoStone:"", boost:"10", booStone:"Mystic star", habilidades:"Control mind"},

  {nome:"Froslass",  numero:478,  level:"80",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Seavell",   clan2:"Malefic",   tipo1:"Gelo",   tipo2:"Fantasma", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Difícil", xpcaught:"500000", pricenpc:"60000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Snorunt", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"361", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Destiny bond-80,Shadow ball-80,Cursed hollow-80,Powder snow-80,Frost breath-82,Avalanche-80,Ice slider-80,Dimensional wall-82,Ice block-80,Spirit world-Passiva,", loots:"(1-1)//ice blocks--4.3% (29.8%),(1-43)//snowball--80.0% (100.0%),(1-1)//ice orb--25.0% (25.0%),(1-1)//Ice stone--Raro,(1-1)//Dawn stone--Raro,", evoStone:"", boost:"3", booStone:"Ice stone", habilidades:"Headbutt"},

  {nome:"Rotom",  numero:479,  level:"100",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Fantasma", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Sem sistema", xpcaught:"500000", pricenpc:"120000",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Thunder shock-100,Shadow ball-100,Shadow sphere-100,Shockwave-100,Substitute-100,Assurance-105,Shadow storm-106,Morph-100,Levitate-Passiva,", loots:"(1-40)//screw--100.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--100.0% (100.0%),(1-1)//zap--5.7% (5.7%),", evoStone:"", boost:"50", booStone:"Mystic star", habilidades:"Light"},

  {nome:"Heatran",  numero:485,  level:150,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Ironhard",   tipo1:"Fogo",   tipo2:"Metal", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"no", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:"Dig, Rock smash, Light, Headbutt"},

  
///////// INICIO GERACAO 5
  {nome:"Blitzle",  numero:522,  level:60,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"20000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Zebstrika", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"523", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Quick attack-60,Thunder bolt-60,Shockwave-60,Flame charge-60,Stomp-65,Thunder-65,Wild charge-65,", loots:"no", evoStone:"Dimensional stone (x25)", boost:"3", booStone:"Dimensional stone", habilidades:"Dig"},
  {nome:"Zebstrika",  numero:523,  level:100,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"270000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Blitzle", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"522", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Lightning horn-100,Double kick-100,Shockwave-100,Flame charge-100,Overheat-100,Flare blitz-110,Thrash-105,Rain dance-100,Volt switch-100,", loots:"no", evoStone:"", boost:"3", booStone:"Dimensional stone", habilidades:"Dig"},
  
  {nome:"Drilbur",  numero:529,  level:50,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"20000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Excadrill", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"530", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Mud shot-50,Fury swipes-50,Dig-52,Metal claw-57,Drill run-57,Earthquake-57,Sandstorm-50,", loots:"no", evoStone:"Mirror stone (x25)", boost:"10", booStone:"Mirror stone", habilidades:"Dig, Rock smash"},
  {nome:"Excadrill",  numero:530,  level:100,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Ironhard",   tipo1:"Terra",   tipo2:"Metal", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"270000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Drilbur", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"529", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Mud sport-100,Fury swipes-100,Iron head-100,Dig-102,Metal claw-107,Drill run-107,Earthquake-107,Sandstorm-100,Sand rush-Passiva,Sand force-Passiva,", loots:"no", evoStone:"", boost:"3", booStone:"Mirror stone", habilidades:"Dig, Rock smash, Headbutt"},

  {nome:"Timburr",  numero:532,  level:20,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Gurdurr", evo2:"Conkeldurr", npreevo2:"no", npreevo1:"no", nevo1:"533", nevo2:"534", 
   mapas:'no',  vip: "no", moves:"Rock slide-20,Stone edge-23,Hammer arm-20,Wake up slap-20,Bulk up-20,", loots:"no", evoStone:"Dimensional stone (x2)", boost:"10", booStone:"Dimensional stone", habilidades:"Rock smash"},
  {nome:"Gurdurr",  numero:533,  level:60,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"23000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Timburr", evo1:"Conkeldurr", evo2:"no", npreevo2:"no", npreevo1:"532", nevo1:"534", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Rock throw-60,Rock slide-60,Stone edge-63,Rock tomb-60,Hammer arm-60,Wake up slap-60,Bulk up-60,", loots:"no", evoStone:"Power stone", boost:"4", booStone:"Dimensional stone", habilidades:"Rock smash"},
  {nome:"Conkeldurr",  numero:534,  level:150,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"Unseleable",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Timburr", preevo1:"Gurdurr", evo1:"no", evo2:"no", npreevo2:"532", npreevo1:"533", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Rock throw-150,Drain punch-150,Rock tomb-150,Stone edge-150,Hammer arm-150,Brick break-150,Wake up slap-150,Chip away-150,Force palm-150,Bulk up-150,", loots:"no", evoStone:"", boost:"2", booStone:"Dimensional stone", habilidades:"Rock smash, Headbutt"},

  {nome:"Darumaka",  numero:554,  level:50,   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"20000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Darmanitan", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"555", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Tackle-50,Headbutt-50,Fire punch-50,Hammer arm-50,Incinerate-50,Flare blitz-60,Rage-50,", loots:"no", evoStone:"Mirror stone (x10)", boost:"7", booStone:"Mirror stone", habilidades:"Rock smash, Headbutt"},
  {nome:"Darmanitan",  numero:555,  level:100,   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum",
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"270000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Darumaka", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"554", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Headbutt-100,Fire punch-100,Flamethrower-100,Hammer arm-100,Incinerate-100,Overheat-100,Focus blast-100,Strenght-100,Flare blitz-110,Belly drum-100,Zen mode-Passiva,", loots:"no", evoStone:"", boost:"3", booStone:"Mirror stone", habilidades:"Rock smash, Headbutt"},

  {nome:"Dwebble",  numero:557,  level:20,   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Naturia",   clan2:"Orebound",   tipo1:"Inseto",   tipo2:"Pedra", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"5000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Crustle", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"558", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Rock throw-20,Rock slide-20,Stone edge-23,Rock blast-20,Harden-25,", loots:"no", evoStone:"Mirror stone (x10)", boost:"8", booStone:"Mirror stone", habilidades:"Dig, Cut"},
  {nome:"Crustle",  numero:558,  level:80,   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Naturia",   clan2:"Orebound",   tipo1:"Inseto",   tipo2:"Pedra",
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Dwebble", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"557", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Slash-85,Rock slide-80,Rock tomb-80,X scissor-80,Spikes-90,Stone edge-80,Rock blast-80,Rock wrecker-85,Shell smash-80,Withdraw-84,", loots:"no", evoStone:"", boost:"5", booStone:"Mirror stone", habilidades:"Dig"},

  {nome:"Emolga",  numero:587,  level:80,   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Raibolt",   clan2:"Wingeon",   tipo1:"Elétrico",   tipo2:"Voador",
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Charm-80,Feather dance-80,Pursuit-80,Air slash-83,Nuzzle-85,Roost-85,Aerial ace-84,Light screen-80,", loots:"no", evoStone:"", boost:"5", booStone:"Mirror stone", habilidades:""},

  {nome:"Joltik",  numero:595,  level:"20",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Naturia",   clan2:"Raibolt",   tipo1:"Inseto",   tipo2:"Elétrico", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Galvantula", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"596", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Bug bite-20,Electroweb-20,Thunder fang-20,Shockwave-20,Electro ball-20,", loots:"no", evoStone:"Dimensional stone (x10)", boost:"10", booStone:"Dimensional stone", habilidades:"Dig, Cut"},
  {nome:"Galvantula",  numero:596,  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Naturia",   clan2:"Raibolt",   tipo1:"Inseto",   tipo2:"Elétrico",
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"yes", fast:"yes", heavy:"no", preevo2:"no", preevo1:"Joltik", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"595", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Bug bite-80,Electroweb-80,Thunder fang-80,Fury cutter-80,Shockwave-80,Electro ball-80,Electro field-80,Discharge-80,", loots:"no", evoStone:"", boost:"5", booStone:"Dimensional stone", habilidades:"Dig, Cut, Light"},
  
  {nome:"Ferroseed",  numero:597,  level:60,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Ironhard",   tipo1:"Grama",   tipo2:"Metal", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Ferrothorn", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"598", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Iron head-60,Leech seed-60,Seed bomb-60,Spikes-70,Flash cannon-68,Bullet seed-60,Solar beam-60,", loots:"no", evoStone:"Dimensional stone (x25)", boost:"7", booStone:"Dimensional stone", habilidades:"Rock smash, Dig, Headbutt"},
  {nome:"Ferrothorn",  numero:598,  level:100,   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Ironhard",   tipo1:"Grama",   tipo2:"Metal", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"350000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Ferroseed", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"597", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Iron head-100,Leech seed-100,Grass knot-100,Power whip-108,Energy ball-100,Spikes-110,Bullet seed-100,Giga drain-105,Solar beam-100,Iron barbs-Passiva,", loots:"no", evoStone:"", boost:"3", booStone:"Dimensional stone", habilidades:""},

   
  {nome:"Litwick",  numero:607,  level:"20",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Volcanic",   tipo1:"Fantasma",   tipo2:"Fogo", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"3000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Lampent", evo2:"Chandelure", npreevo2:"no", npreevo1:"no", nevo1:"608", nevo2:"609", 
   mapas:'no',  vip: "no", moves:"Shadow ball-20,Fire spin-20,Incinerate-20,Astonish-20,Invisible-20,", loots:"no", evoStone:"Dimensional stone (x2)", boost:"10", booStone:"Dimensional stone", habilidades:"Light"},
  {nome:"Lampent",  numero:608,  level:"50",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Volcanic",   tipo1:"Fantasma",   tipo2:"Fogo", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"100000", pricenpc:"20000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Litwick", evo1:"Chandelure", evo2:"no", npreevo2:"no", npreevo1:"607", nevo1:"609", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Shadow ball-50,Fire spin-50,Incinerate-50,Flame burst-50,Astonish-50,Invisible-50,Inferno-60,", loots:"no", evoStone:"Dimensional stone (x10)", boost:"7", booStone:"Dimensional stone", habilidades:"Light"},
  {nome:"Chandelure",  numero:609,  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Volcanic",   tipo1:"Fantasma",   tipo2:"Fogo", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Litwick", preevo1:"Lampent", evo1:"no", evo2:"no", npreevo2:"607", npreevo1:"608", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Ember-80,Fire spin-80,Flame burst-80,Incinerate-80,Astonish-80,Hex-85,Curse-86,Inferno-90,Flame body-Passiva,", loots:"no", evoStone:"", boost:"5", booStone:"Dimensional stone", habilidades:""},

   
  {nome:"Axew",  numero:610,  level:"20",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Dragão",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"20000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Fraxure", evo2:"Haxorus", npreevo2:"no", npreevo1:"no", nevo1:"611", nevo2:"612", 
   mapas:'no',  vip: "no", moves:"Dragon claw-20,Guillotine-30,Dual chop-20,Twister-21,Dragon breath-25,Lightning axe-20,", loots:"no", evoStone:"Mirror stone (x10)", boost:"10", booStone:"Mirror stone", habilidades:"Rock smash, Headbutt"},
  {nome:"Fraxure",  numero:611,  level:"50",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Dragão",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"100000", pricenpc:"30000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Axew", evo1:"Haxorus", evo2:"no", npreevo2:"no", npreevo1:"610", nevo1:"612", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Hone claws-50,Dragon claw-50,Guillotine-60,Dual chop-50,Twister-54,Bulldoze-50,Lightning axe-50,", loots:"no", evoStone:"", boost:"7", booStone:"Mirror stone", habilidades:"Rock smash, Headbutt"},
  {nome:"Haxorus",  numero:612,  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Dragão",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"270000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"Axew", preevo1:"Fraxure", evo1:"no", evo2:"no", npreevo2:"610", npreevo1:"611", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Hone claws-100,Dragon claw-100,Guillotine-110,Dual chop-100,Razor wind-108,Twister-104,Bulldoze-100,Lightning axe-100,Earthquake-107,", loots:"no", evoStone:"", boost:"3", booStone:"Mirror stone", habilidades:"Rock smash, Headbutt"},

  {nome:"Cubchoo",  numero:613,  level:"50",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"5000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Beartic", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"614", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Slash-50,Ice punch-50,Icicle crash-50,Powder snow-50,Avalanche-50,Blizzard-56,", loots:"no", evoStone:"Dimensional stone (x10)", boost:"10", booStone:"Dimensional stone", habilidades:""},
  {nome:"Beartic",  numero:614,  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Cubchoo", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"613", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Slash-80,Ice punch-80,Ice fang-80,Icicle crash-80,Powder snow-80,Avalanche-80,Blizzard-86,Hail-88,Snow cloak-Passiva,", loots:"no", evoStone:"", boost:"5", booStone:"Dimensional stone", habilidades:"Rock smash"},


  {nome:"Pawniard",  numero:624,  level:"40",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Ironhard",   tipo1:"Noturno",   tipo2:"Metal", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"5000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Bisharp", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"625", nevo2:"no", 
   mapas:'no', 
   vip: "no",
 moves:"Iron head-40,Sucker punch-43,Night slash-40,Metal burst-40,Shadow claw-40,Swords dance-48,", loots:"no", evoStone:"", boost:"8", booStone:"Mirror stone", habilidades:"Rock smash, Cut, Headbutt"},
  {nome:"Bisharp",  numero:625,  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Malefic",   clan2:"Ironhard",   tipo1:"Noturno",   tipo2:"Metal", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Pawniard", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"624", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Hone claws-80,Iron head-80,Sucker punch-80,Compass slash-80,Night slash-80,Metal burst-80,Shadow claw-80,Dual chop-80,Assurance-88,Swords dance-88,", loots:"no", evoStone:"", boost:"5", booStone:"Mirror stone", habilidades:"Rock smash, Headbutt"},


  {nome:"Heatmor",  numero:631,  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Fire spin-80,Sucker punch-83,Flamethrower-80,Incinerate-80,Shadow claw-80,Night slash-80,Swallow-83,Stockpile-83,Inferno-90,Taunt-80,", loots:"no", evoStone:"", boost:"5", booStone:"Dimensional stone", habilidades:"Headbutt"},
  
///////// INICIO GERACAO 6
  {nome:"Bunnelby",  numero:659,  level:"30",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Gardestrike",   clan2:"Orebound",   tipo1:"Normal",   tipo2:"Terra", 
   regiao:"Kalos",   geracao:"6",   dificuldade:"Fácil", xpcaught:"0", pricenpc:"3000",
   shiny:"no", fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"Diggersby", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"660", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Quick attack-30,Bite-30,Super fang-30,Dig-32,Double team-32,Agility-30,", loots:"(1-13)//rubber ball--80.0%,(1-1)//Red easter egg--10.0%,(1-1)//Blue easter egg--7.3%,(1-1)//Golden easter egg--4.3%,", evoStone:"Heart stone (x2)", boost:"10", booStone:"Heart stone", habilidades:""},
  {nome:"Diggersby",  numero:660,  level:"80",   ball1:"Ultraball",   ball2:"Nenhuma",
   clan1:"Gardestrike",   clan2:"Orebound",   tipo1:"Normal",   tipo2:"Terra", 
   regiao:"Kalos",   geracao:"6",   dificuldade:"Difícil", xpcaught:"0", pricenpc:"13000",
   shiny:"no", fast:"no", heavy:"no", preevo2:"no", preevo1:"Bunnelby", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"659", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Quick attack-80,Super fang-80,Rock tomb-80,Dig-82,Bulldoze-80,Hammer arm-80,Leap strike-85,Earthquake-86,Swords dance-88,", loots:"(1-40)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//Red easter egg--34.8%,(1-1)//Blue easter egg--21.5%,(1-1)//Golden easter egg--13.6%,(1-1)//purple carrot--Raro,", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:"Dig, Headbutt"},

  {nome:"Sylveon",  numero:700,  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Fada",   tipo2:"Nenhum", 
   regiao:"Kalos",   geracao:"6",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"100000",
   shiny:"yes", fast:"no", heavy:"no", preevo2:"no", preevo1:"Eevee", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"133", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", moves:"Charm-60,Draining kiss-60,Swift-60,Take down-60,Last resort-60,Great love-68,Moonblast-66,", loots:"no", evoStone:"", boost:"7", booStone:"Mirror stone", habilidades:"Dig"}
 
]

ShinysMegasArray = [
  {shiny:"Baby", nome:"Bulbasaur",  numero:"1",  level:"1",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Inicial", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", evoStone:'', boost:'', booStone:'',
   moves:"Tackle-6,Razor leaf-6,Vine whip-6,Leech seed-7,Poison powder-8,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Shiny", nome:"Venusaur",  numero:"3-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
  clan1:"Naturia",   clan2:"Malefic",   tipo1:"Grama",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"yes", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Tackle-100,Razor leaf-100,Vine whip-100,Headbutt-100,Leech seed-100,Bullet seed-100,Solar beam-100,Giga drain-105,Sleep powder-100,Poison powder-100,Leaf storm-110,Thick fat-Passiva,", 
   loots:"(1-1)//leaves--60.0%,(1-1)//bulb--4.0%,(1-1)//bag of pollem--8.0%,(1-1)//Leaf stone--Raro,(1-1)//Bulbasaur doll--1.5%,(1-100)//seed--80.0%,", evoStone:"", boost:"2", booStone:"Leaf stone", habilidades:"Ride"},
  {shiny:"Mega", nome:"Venusaur",  numero:"3-2",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Grama",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Embedded tower", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", preevo2:"no", preevo1:"Venusaur", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"3", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", moves:"Tackle-80,Razor leaf-80,Vine whip-80,Headbutt-80,Leech seed-80,Bulldoze-80,Solar beam-80,Earthquake-80,Sunny day-92,Leaf storm-90,Thick fat-Passiva,", loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
 
  {shiny:"Baby", nome:"Charmander",  numero:"4",  level:"1",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Inicial", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Scratch-6,Ember-6,Flamethrower-8,Fireball-6,Rage-7,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Shiny", nome:"Charizard",  numero:"6-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
  clan1:"Volcanic",   clan2:"Wingeon",   tipo1:"Fogo",   tipo2:"Voador", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Ember-100,Flamethrower-100,Fireball-100,Fire fang-100,Flame burst-100,Fire blast-100,Air slash-103,Wing attack-100,Magma storm-100,Scary face-102,Ancient fury-100,", 
   loots:"(1-1)//pot of lava--30.0%,(1-1)//nail--40.0%,(1-1)//dragon tooth--20.0%,(1-1)//Fire stone--Raro,", evoStone:"", boost:"2", booStone:"Fire stone", habilidades:"Cut, Fly, Headbutt"},
  {shiny:"Mega (X)", nome:"Charizard",  numero:"6-2",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
  clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Dragão", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Embedded tower", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", preevo2:"no", preevo1:"Charizard", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"6", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Ember-80,Flamethrower-80,Fireball-80,Dragon claw-80,Dragon tail-80,Dragon flight-80,Dragon breath-82,Flame burst-80,Fire blast-80,Outrage-95,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Mega (Y)", nome:"Charizard",  numero:"6-3",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
  clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Voador",   tipo2:"Fogo", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Embedded tower", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", preevo2:"no", preevo1:"Charizard", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"6", nevo1:"no", nevo2:"no",
   mapas:'no',  vip: "yes", 
   moves:"Ember-80,Flamethrower-80,Fireball-80,Whirlwind-80,Flame burst-80,Fire blast-80,Air slash-83,Solar beam-80,Aerial ace-84,Sunny day-92,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
 
  {shiny:"Baby", nome:"Squirtle",  numero:"7",  level:"1",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Inicial", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Headbutt-6,Bubbles-6,Water gun-8,Waterball-6,Harden-7,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Shiny", nome:"Blastoise",  numero:"9-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
  clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Headbutt-100,Bubbles-100,Water gun-100,Waterball-100,Water pulse-100,Brine-100,Hydro cannon-100,Skull bash-105,Hydropump-110,Ancient armor-100,", 
   loots:"(1-1)//water pendant--40.0%,(1-1)//Squirtle hull--80.0%,(1-1)//Water stone--Raro,(1-20)//water gem--80.0%,", evoStone:"", boost:"2", booStone:"Water stone", habilidades:"Surf, Headbutt"},
  {shiny:"Mega", nome:"Blastoise",  numero:"9-2",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
  clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Embedded tower", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", preevo2:"no", preevo1:"Blastoise", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"9", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Headbutt-80,Bubbles-80,Hand water gun-80,Giant water gun-80,Water pulse-80,Brine-80,Hydro cannon-80,Skull bash-85,Hydropump-90,Rain dance-80,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
   
  {shiny:"Shiny", nome:"Butterfree",  numero:"12-1",  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Inseto",   tipo2:"Voador", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Super sonic-60,Silver wind-60,Whirlwind-62,Confusion-64,Psybeam-66,Air cutter-68,Sleep powder-60,Safeguard-70,Poison powder-60,", 
   loots:"(1-1)//pot of moss bug--40.0%,(1-1)//bag of pollem--40.0%,(1-1)//Cocoon Stone--10.3%,", evoStone:"", boost:"4", booStone:"Cocoon stone", habilidades:""},
   
  {shiny:"Shiny", nome:"Beedrill",  numero:"15-1",  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Grama",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"String shot-60,Poison jab-60,Poison sting-60,Fury cutter-65,Pin missile-65,Toxic spikes-62,Rage-60,Strafe-68,Evasion-Passiva,", 
   loots:"(1-1)//pot of moss bug--20.0%,(1-1)//bag of pollem--20.0%,(1-1)//Cocoon Stone--10.3%,", evoStone:"", boost:"4", booStone:"Cocoon stone", habilidades:"Cut"},
   
  {shiny:"Shiny", nome:"Pidgeot",  numero:"18-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Wingeon",   clan2:"Gardestrike",   tipo1:"Voador",   tipo2:"Normal", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Quick attack-100,Sand attack-100,Whirlwind-100,Drill peck-100,Wing attack-102,Aeroblast-104,Hurricane-110,Agility-100,Roost-105,", 
   loots:"(1-1)//feather--50.0%,(1-1)//bird beak--5.0%,(1-1)//Feather stone--Raro,(1-35)//straw--80.0%,(1-1)//Pidgeot doll--Raro,", evoStone:"", boost:"2", booStone:"Feather stone", habilidades:"Fly"},
   
  {shiny:"Shiny", nome:"Rattata",  numero:"19-1",  level:"10",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Raticate", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"20-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Quick attack-10,Bite-10,Scratch-10,Pursuit-10,Super fang-10,Scary face-12,Fury-Passiva,", 
   loots:"(1-1)//bitten apple--25.0%,", evoStone:"Heart stone (x2)", boost:"20", booStone:"Heart stone", habilidades:"Headbutt"},
  {shiny:"Shiny", nome:"Raticate",  numero:"20-1",  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma",  
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Rattata", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"19-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Quick attack-60,Bite-60,Scratch-60,Pursuit-60,Sucker punch-63,Super fang-60,Scary face-62,Fury-Passiva,", 
   loots:"(1-1)//bitten apple--25.0%,(1-1)//rat tail--5.0%(1-1)//Heart stone--Raro,", evoStone:"", boost:"8", booStone:"Heart stone", habilidades:"Dig, Cut, Headbutt"},
   
  {shiny:"Shiny", nome:"Fearow",  numero:"22-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Voador",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Clan", xpcaught:"0", pricenpc:"800000",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Peck-120,Feather dance-120,Drill peck-120,Air cutter-120,Sky attack-130,Air vortex-120,Aerial ace-120,Agility-120,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Feather stone", habilidades:"Fly"},
  
  {shiny:"Shiny", nome:"Raichu",  numero:"26-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Mega kick-100,Thunder shock-100,Thunder bolt-100,Thunder wave-100,Thunder punch-100,Iron tail-100,Body slam-105,Thunder-100,Electric storm-110,Electric charge-Passiva,", 
   loots:"(1-1)//electric box--35.0%,(1-1)//Thunder stone--Raro,(1-20)//screw--80.0%,(1-1)//Raichu doll--Raro,", evoStone:"", boost:"2", booStone:"Thunder stone", habilidades:"Light, Headbutt"},
    
  {shiny:"Shiny", nome:"Nidoking",  numero:"34-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Venenoso",   tipo2:"Terra", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Clan", xpcaught:"0", pricenpc:"800000",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Quick attack-120,Horn attack-120,Poison fang-120,Poison jab-120,Toxic spikes-120,Sludge wave-120,Venoshock-120,Cross poison-120,Fear-120,Rage-120,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Venom stone", habilidades:"Dig, Rock smash, Headbutt"},
   
  {shiny:"Shiny", nome:"Ninetales",  numero:"38-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Cyber world", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Quick attack-150,Iron tail-150,Ember-150,Flamethrower-150,Flame wheel-150,Fireball-150,Fire spin-150,Fire blast-154,Inferno-160,Safeguard-160,", 
   loots:"(1-1)//fox tail--10.0%,(1-90)//essence of fire--100.0%,(1-1)//Fire stone--8.0%,(1-1)//comb--100.0%,(1-1)//fur--100.0%,", evoStone:"", boost:"2", booStone:"Fire stone", habilidades:"Dig, Ride"},
   
  {shiny:"Shiny", nome:"Zubat",  numero:"41-1",  level:"10",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Wingeon",   tipo1:"Venenoso",   tipo2:"Voador", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Golbat", evo2:"Shiny Crobat", npreevo2:"no", npreevo1:"no", nevo1:"42-1", nevo2:"169-1", 
   mapas:'no',  vip: "no", 
   moves:"Super sonic-20,Bite-20,Poison fang-20,Toxic-20,Whirlwind-20,Wing attack-20,Air cutter-24,Lifesteal-Passiva,", 
   loots:"(1-1)//tooth-15.0%,(1-1)//bat wing--8.0%,(1-3)//bottle of poison--80.0%,", evoStone:"Venom stone (x2)", boost:"10", booStone:"Venom stone", habilidades:""},
  {shiny:"Shiny", nome:"Golbat",  numero:"42-1",  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma",  
   clan1:"Malefic",   clan2:"Wingeon",   tipo1:"Venenoso",   tipo2:"Voador", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Zubat", evo1:"Shiny Crobat", evo2:"no", npreevo2:"no", npreevo1:"41-1", nevo1:"169-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Super sonic-60,Bite-60,Poison fang-60,Toxic-60,Whirlwind-60,Wing attack-60,Air cutter-68,Cross poison-64,Venom gale-75,Lifesteal-Passiva,", 
   loots:"(1-1)//bat wing--25.0%,(1-1)//tooth--25.0%,(1-1)//Venom stone--Raro,(1-4)//bottle of poison--80.0%,", evoStone:"Ancient stone (x2)", boost:"4", booStone:"Venom stone", habilidades:""},
   
  {shiny:"Shiny", nome:"Oddish",  numero:"43-1",  level:"10",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Grama",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Absorb-10,Leech seed-10,Acid-10,Poison bomb-13,Poison gas-17,Sleep powder-10,Stun spore-10,Poison powder-10,Spores reaction-Passiva,", 
   loots:"no", evoStone:"", boost:"15", booStone:"Leaf stone", habilidades:"Cut"},
  {shiny:"Shiny", nome:"Vileplume",  numero:"45-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Clan", xpcaught:"0", pricenpc:"800000",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Seed bomb-120,Leech seed-120,Magical leaf-120,Leaf blade-120,Petal dance-120,Petal blizzard-120,Sleep powder-120,Sunny day-120,Chlorophyll-Passiva,Poison spore-Passiva,Spores reaction-Passiva,Mega drain-Passiva,", 
   loots:"(1-1)//leaves--20.0%,(1-1)//bag of pollem--Raro,(1-15)//seed--80.0%,", evoStone:"", boost:"2", booStone:"Leaf stone", habilidades:"Cut"},
   
  {shiny:"Shiny", nome:"Paras",  numero:"46-1",  level:"10",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Inseto",   tipo2:"Grama", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Parasect", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"47-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Scratch-10,Poison sting-10,Slash-10,Stun spore-15,Poison powder-13,Sleep powder-17,", 
   loots:"(1-1)//mushroom--5.0%,(1-1)//pot of moss bug--10.0%,(1-18)//seed--80.0%,", evoStone:"Cocoon stone (x2)", boost:"15", booStone:"Cocoon stone", habilidades:"Dig, Cut"},
  {shiny:"Shiny", nome:"Parasect",  numero:"47-1",  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Inseto",   tipo2:"Grama", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Paras", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"46-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Absorb-60,Leech life-65,Poison sting-60,Slash-60,Poison bomb-60,Stun spore-60,Poison powder-60,Sleep powder-60,Fury cutter-66,X scissor-68,Mega drain-Passiva,Spores reaction-Passiva,", 
   loots:"(1-1)//mushroom--30.0%,(1-1)//pot of moss bug--30.0%,(1-1)//Cocoon stone--Raro,(1-55)//seed--80.0%,", evoStone:"", boost:"4", booStone:"Cocoon stone", habilidades:"Dig, Cut"},
   
  {shiny:"Shiny", nome:"Venonat",  numero:"48-1",  level:"20",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Inseto",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Venomoth", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"49-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Super sonic-20,Psybeam-20,Silver wind-20,Confusion-26,Psychic-20,Signal beam-26,Bug buzz-24,Sleep powder-20,Poison powder-20,", 
   loots:"(1-1)//tooth--15.0%,(1-1)//bug antenna--5.0%,(1-22)//seed--80.0%,", evoStone:"Venom stone,Cocoon stone", boost:"8", booStone:"Venom stone", habilidades:"Headbutt"},
  {shiny:"Shiny", nome:"Venomoth",  numero:"49-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Malefic",   tipo1:"Inseto",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Venonat", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"48-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Super sonic-100,Leech life-105,Silver wind-100,Confusion-106,Psychic-100,Signal beam-100,Whirlwind-100,Bug buzz-106,Sleep powder-100,Poison powder-100,", 
   loots:"(1-1)//tooth--15.0%,(1-1)//bug venom--10.0%,(1-1)//Cocoon stone--Raro,(1-50)//seed--80.0%,", evoStone:"", boost:"2", booStone:"Venom stone", habilidades:"Fly"},
   
  {shiny:"Champion", nome:"Primeape",  numero:"57-1",  level:"",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Triple kick-100,Karate chop-100,Revenge-112,Cross chop-104,Focus energy-107,Final gambit-105,Dynamicpunch-110,Bulk up-100,Foresight-Passiva,", 
   loots:"no", evoStone:"", boost:"3", booStone:"Mirror stone", habilidades:"Rock smash, Headbutt"},
   
  {shiny:"Shiny", nome:"Growlithe",  numero:"58-1",  level:"30",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Arcanine", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"59-1", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Roar-40,Bite-30,Ember-30,Flamethrower-30,Fireball-30,Fire fang-30,Extremespeed-30,Fire blast-32,Heat wave-34,", 
   loots:"(1-1)//pot of lava--10.0%,(1-1)//nail--20.0%,(1-1)//fur--8.0%,(1-12)//essence of fire--80.0%,", evoStone:"Crystal stone,Fire stone", boost:"8", booStone:"Fire stone", habilidades:"Dig, Headbutt"},
  {shiny:"Shiny", nome:"Arcanine",  numero:"59-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"yes", 
   preevo2:"no", preevo1:"Shiny Growlithe", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"58-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Roar-110,Bite-100,Ember-100,Flamethrower-100,Fireball-100,Fire fang-100,Extremespeed-100,Fire blast-102,Heat wave-104,War dog-106,", 
   loots:"(1-1)//pot of lava--20.0%,(1-1)//nail--40.0%,(1-1)//fur--80.0%,(1-35)//essence of fire--80.0%,(1-1)Fire stone--Raro,", evoStone:"", boost:"2", booStone:"Fire stone", habilidades:"Dig, Ride, Headbutt"},
   
  {shiny:"Dark", nome:"Abra",  numero:"63-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Psycraft",   tipo1:"Fantasma",   tipo2:"Psiquico", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Agatha quest", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Shadow ball-120,Shadowave-120,Shadow sphere-120,Night shade-120,Astonish-120,Invisible-120,Nightmare-120,Hypnosis-120,Reflect-120,Morph-120,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Darkness stone", habilidades:"Teleport, Light, Blink"},
  {shiny:"Light", nome:"Abra",  numero:"63-2",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Psycraft",   tipo1:"Fantasma",   tipo2:"Psiquico", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Agatha quest", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Psy ball-120,Psywave-120,Psy pulse-120,Confusion-120,Psychic-120,Invisible-120,Dream eater-120,Hypnosis-120,Reflect-120,Restore-120,Morph-120,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Shiny", nome:"Alakazam",  numero:"65-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Psybeam-100,Psywave-100,Psy pulse-100,Confusion-100,Psychic-100,Psyusion-115,Calm mind-100,Hypnosis-100,Reflect-105,Restore-105,Miracle eye-100,", 
   loots:"(1-1)//future orb--45.0%,(1-1)//psychic spoon--80.3%,(1-1)//Enigma stone--Raro,", evoStone:"", boost:"2", booStone:"Enigma stone", habilidades:"Teleport, Light, Control mind, Blink"},
  {shiny:"Mega", nome:"Alakazam",  numero:"65-2",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Embedded tower", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Alakazam", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"65", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Psybeam-80,Psy pulse-80,Kinesis-80,Confusion-80,Psychic-80,Future sight-90,Instant teleportation-80,Reflect-85,Restore-85,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Shiny", nome:"Machamp",  numero:"68-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"yes", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Triple punch-100,Karate chop-100,Revenge-112,Focus blast-100,Arm thrust-106,Vital throw-108,Dynamicpunch-110,Agility-100,Foresight-Passiva,", 
   loots:"(1-1)//belt of champion--Raro,(1-40)//band aid--8.0%,(1-1)//Punch stone--Raro,", evoStone:"", boost:"2", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
   
  {shiny:"Shiny", nome:"Tentacool",  numero:"72-1",  level:"20",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Malefic",   tipo1:"Água",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Tentacruel", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"73-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Super sonic-20,Wrap-20,Bubbles-20,Poison jab-20,Waterball-20,Bubblebeam-20,Acid-20,Poison bomb-20,Mortal gas-28,Hydropump-30,", 
   loots:"(1-1)//water pendant--5.0%,(1-1)//ruby--Raro,(1-2)//water gem--80.0%,", evoStone:"Water stone,Venom stone", boost:"10", booStone:"Water stone", habilidades:"Surf"},
  {shiny:"Shiny", nome:"Tentacruel",  numero:"73-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Malefic",   tipo1:"Água",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Tentacool", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"72-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Super sonic-100,Wrap-100,Bubbles-100,Poison jab-100,Waterball-100,Bubblebeam-100,Acid-100,Poison bomb-100,Mortal gas-110,Hydropump-105,Liquid ooze-Passiva,", 
   loots:"(1-1)//water pendant--60.0%,(1-1)//ruby--5.0%,(1-1)//Water stone--Raro,(1-15)//water gem--80.0%,", evoStone:"", boost:"2", booStone:"Water stone", habilidades:"Surf, Control mind"},
   
  {shiny:"Shiny", nome:"Golem",  numero:"76-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Pedra",   tipo2:"", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Clan", xpcaught:"0", pricenpc:"800000",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Rock throw-120,Rock slide-120,Stone edge-120,Rock blast-120,Rock wrecker-125,Falling rocks-120,Harden-120,Rollout-120,Explosion-120,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Rock stone", habilidades:"Dig, Rock smash, Headbutt"},
   
  {shiny:"Mega", nome:"Slowbro",  numero:"80-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Psycraft",   tipo1:"Água",   tipo2:"Psiquico", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Slowbro", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"80", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Aqua tail-80,Water gun-80,Withdraw-84,Scald-82,Zen headbutt-80,Surf-85,Calm mind-80,Dream eater-80,Yawn-86,Amnesia-Passiva,Regenerator-Passiva,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Shiny", nome:"Magneton",  numero:"82-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Ironhard",   tipo1:"Elétrico",   tipo2:"Metal", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Cyber world", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Super sonic-150,Thunder shock-150,Spark-150,Tri attack-165,Thunder-158,Electric storm-162,Electro ball-150,Flash cannon-158,", 
   loots:"(1-1)//magnet--100.0%,(1-40)//screw--100.0%,(1-40)//piece of steel--100.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--100.0%,", evoStone:"", boost:"2", booStone:"Thunder stone", habilidades:"Light"},
   
  {shiny:"Elite", nome:"Farfetchd",  numero:"83-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Wingeon",   clan2:"Gardestrike",   tipo1:"Voador",   tipo2:"Normal", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Sand attack-100,Drill peck-100,Stickmerang-104,Slash-100,Stick throw-106,Night slash-100,Air slash-103,Brave bird-100,", 
   loots:"(1-1)//feather--50.0%,(1-1)//Farfetchd stick--5.0%,(1-25)//straw--80.0%,", evoStone:"", boost:"2", booStone:"Feather stone", habilidades:"Cut, Fly"},
   
  {shiny:"Shiny", nome:"Dodrio",  numero:"85-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma",
  clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Voador",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Cyber world", xpcaught:"0", pricenpc:"Unseleable",
   fast:"yes", heavy:"no", preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Peck-150,Pursuit-150,Pluck-155,Tri attack-165,Double hit-152,Roost-155,Sky attack-160,Agility-150,Taunt-150,Uproar-Passiva,", 
   loots:"(1-1)//dodrio feather--100.0%,(1-40)//straw--100.0%,(1-40)//rubber ball--100.0%,(1-1)//Feather stone--8.0%,(1-1)//bird beak--100.0%,", evoStone:"", boost:"2", booStone:"Feather stone", habilidades:"Ride"},
   
  {shiny:"Shiny", nome:"Grimer",  numero:"88-1",  level:"20",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Venenoso",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Muk", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"89-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Mud shot-20,Acid-20,Sludge-20,Mud bomb-20,Poison bomb-20,Venoshock-32,Sludge wave-20,Harden-35,", 
   loots:"(1-1)//gosme-10.0%,(1-4)//bottle of poison--80.0%,", evoStone:"Venom stone (x2)", boost:"10", booStone:"Venom stone", habilidades:""},
  {shiny:"Shiny", nome:"Muk",  numero:"89-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Venenoso",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Grimer", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"88-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Mud shot-100,Acid-100,Sludge-100,Mud bomb-100,Poison bomb-100,Venoshock-112,Sludge wave-100,Harden-155,Acid armor-108,", 
   loots:"(1-1)//gosme--30.0%,(1-1)//Venom stone--Raro,(1-4)//bottle of poison--80.0%,", evoStone:"", boost:"2", booStone:"Venom stone", habilidades:""},
   
  {shiny:"Shiny", nome:"Gastly",  numero:"92-1",  level:"30",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Eventos", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Lick-30,Shadow ball-30,Night shade-36,Shadow storm-45,Invisible-34,Hypnosis-38,Fear-40,Levitate-Passiva,", 
   loots:"no", evoStone:"", boost:"6", booStone:"Darkness stone", habilidades:""},
  {shiny:"Shiny", nome:"Haunter",  numero:"93-1",  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Eventos", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Lick-60,Shadow ball-60,Night shade-60,Shadow storm-75,Invisible-60,Nightmare-65,Hypnosis-60,Fear-60,Dark accurate-1020,Levitate-Passiva,", 
   loots:"no", evoStone:"", boost:"5", booStone:"Darkness stone", habilidades:""},
  {shiny:"Shiny", nome:"Gengar",  numero:"94-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Lick-100,Shadow ball-100,Shadow punch-103,Snatch-102,Shadow storm-106,Invisible-100,Nightmare-100,Hypnosis-100,Fear-100,Dark accurate-1000,Levitate-Passiva,", 
   loots:"(1-1)//traces of ghost--5.3% (47.3%),(1-20)//ghost essence--80.0%,(1-20)//bottle of poison--80.0%,(1-1)//Darkness stone--Raro,(1-1)//Venom stone--Raro,", evoStone:"", boost:"2", booStone:"Darkness stone", habilidades:"Levitate, Control mind"},
  {shiny:"Mega", nome:"Gengar",  numero:"94-2",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Venenoso", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Embedded tower", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Gengar", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"94", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Sucker punch-83,Shadow punch-84,Night shade-80,Scary face-82,Shadow storm-86,Hex-85,Nightmare-80,Hypnosis-80,Shadow tag-80,Levitate-Passiva,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Crystal", nome:"Onix",  numero:"95-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Orebound",   tipo1:"Crystal",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"yes", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Sand attack-100,Iron tail-100,Rock throw-100,Rock slide-100,Earth power-100,Falling rocks-100,Earthquake-100,Harden-100,Camouflage-104,", 
   loots:"(1-1)//stone orb--15.0%,(1-1)//Onix tail--Raro,(1-1)//Rock stone--Raro,(1-1)//Crystal stone--Raro,(1-60)//small stone--80.0%,(1-1)//Crystal stone--Raro,", evoStone:"", boost:"30", booStone:"Crystal stone", habilidades:"Dig, Rock smash, Ride, Headbutt"},
  {shiny:"Big", nome:"Onix",  numero:"95-2",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Pedra",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"yes", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Slam-100,Rock throw-100,Rock slide-100,Rock blast-100,Sand tomb-102,Earthquake-110,Harden-100,Stone pulse-Passiva,Giant force-Passiva,", 
   loots:"no", evoStone:"", boost:"3", booStone:"Dimensional stone", habilidades:"Dig, Rock smash, Ride, Headbutt"},
   
  {shiny:"Shiny", nome:"Hypno",  numero:"97-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Clan", xpcaught:"0", pricenpc:"800000",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Psy pulse-120,Psywave-120,Psybeam-120,Confusion-120,Synchronoise-120,Psyshock-120,Warping reality-120,Dream eater-120,Hypnosis-120,Nasty plot-120,Miracle eye-1000,Hypnotist-Passiva,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Enigma stone", habilidades:"Teleport, Light, Blink, Headbutt"},
   
  {shiny:"Shiny", nome:"Krabby",  numero:"98-1",  level:"10",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Kingler", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"99-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Bubbles-10,Bubblebeam-10,Mud shot-10,Crabhammer-10,Metal claw-15,Brine-10,Hyper beam-19,Guillotine-20,Harden-10,", 
   loots:"(1-1)//crab claw--10.0%,(1-2)//water gem--80.0%,", evoStone:"Water stone (x2)", boost:"10", booStone:"Water stone", habilidades:"Dig, Rock smash, Cut"},
  {shiny:"Shiny", nome:"Kingler",  numero:"99-1",  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Krabby", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"98-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Bubbles-60,Bubblebeam-60,Mud shot-60,Crabhammer-60,Metal claw-67,Brine-60,Hyper beam-69,Guillotine-62,Harden-60,", 
   loots:"(1-1)//crab claw--10.0%,(1-1)//Water stone--Raro,(1-5)//water gem--80.0%,", evoStone:"", boost:"5", booStone:"Water stone", habilidades:"Dig, Rock smash, Headbutt, Cut"},
   
  {shiny:"Shiny", nome:"Voltorb",  numero:"100-1",  level:"20",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Electrode", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"101-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Thunder shock-10,Spark-10,Thunder wave-10,Rollout-10,Charge beam-10,Electric storm-15,Selfdestruction-10,", 
   loots:"(1-1)//electric box--8.0%,(1-7)//screw--80.0%,", evoStone:"Thunder stone (x2)", boost:"10", booStone:"Thunder stone", habilidades:"Light"},
  {shiny:"Shiny", nome:"Electrode",  numero:"101-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Voltorb", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"100-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Magic coat-80,Thunder shock-80,Spark-80,Thunder wave-80,Rollout-80,Charge beam-84,Electro ball-80,Electric storm-88,Selfdestruction-80,", 
   loots:"(1-1)//electric box--16.0%,(1-1)//Thunder stone--Raro,(1-16)//screw--80.0%,", evoStone:"", boost:"3", booStone:"Thunder stone", habilidades:"Light"},
   
  {shiny:"Shiny", nome:"Cubone",  numero:"104-1",  level:"20",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Marowak", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"105-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Mud shot-20,Headbutt-20,Bonemerang-20,Bone club-20,Bone rush-20,Earth power-24,Bulldoze-26,Rage-30,Smack down-30,Bone spin-Passiva,", 
   loots:"(1-1)//bone--50.0%,(1-22)//small stone--80.0%,(1-1)//Cubone doll--Raro,", evoStone:"Earth stone (x2)", boost:"9", booStone:"Earth stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},
  {shiny:"Shiny", nome:"Marowak",  numero:"105-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",  
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Cubone", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"104-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Mud sport-100,Headbutt-100,Bonemerang-100,Bone club-100,Bone rush-100,Earth power-104,Bulldoze-106,Rage-100,Smack down-110,Bone spin-Passiva,", 
   loots:"(1-1)//bone--4.3% (80.0%),(1-28)//earth ball--80.0%,(1-1)//Earth stone--Raro,(1-1)//sandbag--21.5% (86.0%),", evoStone:"", boost:"2", booStone:"Earth stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},
   
  {shiny:"Elite", nome:"Hitmonlee",  numero:"106-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Clan", xpcaught:"0", pricenpc:"1000000",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Triple kick lee-120,Mega kick-120,Hi jump kick-120,Flash kick-125,Low sweep-120,Demon kicker-Passiva,Evasion-Passiva,Foresight-Passiva,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
  {shiny:"Elite", nome:"Hitmonchan",  numero:"107-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma",  
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Clan", xpcaught:"0", pricenpc:"1000000",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Triple punch-120,Mega punch-120,Focus punch-120,Ultimate champion-120,Elemental hands-120,Detect-120,Quick guard-125,Demon puncher-Passiva,Foresight-Passiva,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
   
  {shiny:"Shiny", nome:"Rhydon",  numero:"112-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Cyber world", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"yes", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Horn attack-150,Stone edge-150,Rock throw-150,Dig-152,Horn drill-150,Bulldoze-153,Hammer arm-150,Fissure-160,Drill run-157,", 
   loots:"(1-1)//horn drill--100.0%,(1-40)//small stone--100.0%,(1-40)//earth ball--80.0%,(1-1)//Earth stone--8.0% (24.0%),(1-1)//horn--100.0%,(1-1)//stone orb--100.0%,", evoStone:"", boost:"2", booStone:"Earth stone", habilidades:"Dig, Rock smash, Headbutt"},
   
  {shiny:"Shiny", nome:"Tangela",  numero:"114-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Absorb-100,Leech seed-100,Vine whip-100,Power whip-108,Wrap-100,Vine grap-108,Poison powder-100,Stun spore-100,Mega drain-Passiva,Spores reaction-Passiva,", 
   loots:"(1-1)//blue vines--2.0%,(1-40)//seed--80.0%,(1-1)//Leaf stone--Raro,", evoStone:"", boost:"2", booStone:"Leaf stone", habilidades:"Cut"},
   
  {shiny:"Mega", nome:"Kangaskhan",  numero:"115-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Embedded tower", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Bite-80,Dizzy punch-80,Headbutt-80,Mega punch-80,Crunch-80,Sucker punch-83,Comet punch-80,Epicenter-94,Rage-80,Groundshock-Passiva,Parental bond-Passiva,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Shiny", nome:"Horsea",  numero:"116-1",  level:"10",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Seadra", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"117-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Mud shot-10,Smokescreen-10,Quick attack-10,Bubbles-10,Bubblebeam-10,Water gun-10,Dragon pulse-15,Hydro cannon-20,Dragon rage-Passiva,", 
   loots:"(1-1)//water pendant--5.0%,", evoStone:"Water stone (x2)", boost:"10", booStone:"Water stone", habilidades:"Headbutt"},
  {shiny:"Shiny", nome:"Seadra",  numero:"117-1",  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Horsea", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"116-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Mud shot-60,Smokescreen-60,Quick attack-60,Bubbles-60,Bubblebeam-60,Water gun-60,Dragon pulse-65,Hydro cannon-65,Dragon rage-Passiva,", 
   loots:"(1-1)//water pendant--10.0%,(1-1)//Water stone--Raro,(1-9)//water gem--80.0%,", evoStone:"", boost:"4", booStone:"Water stone", habilidades:"Surf, Headbutt"},
   
  {shiny:"Shiny", nome:"Goldeen",  numero:"118-1",  level:"40",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Pesca", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Super sonic-40,Horn attack-40,Waterfall-45,Water gun-40,Water pulse-40,Aqua tail-40,Horn drill-48,Aqua ring-40,", 
   loots:"(1-4)//fish fin--9.0%,(1-39)//water gem--80.0%,(1-1)//blue fish fin--100.0%,", evoStone:"", boost:"10", booStone:"Water stone", habilidades:"Surf"},
   
  {shiny:"Shiny", nome:"Staryu",  numero:"120-1",  level:"50",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Pesca", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Swift-50,Water gun-50,Bubblebeam-53,Psyshock-58,Psychic-50,Harden-50,Recover-55,", 
   loots:"(1-1)//blue gem star--100.0%,(1-49)//water gem--80.0%,(1-1)//ruby--55.0%,", evoStone:"", boost:"10", booStone:"Water stone", habilidades:"Surf"},
   
  {shiny:"Shiny", nome:"Mr.mime",  numero:"122-1",  level:"100",   ball1:"Saffariball",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Fada", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Play rough-100,Psywave-100,Dazzling gleam-104,Confusion-100,Psychic-100,Psyusion-115,Reflect-100,Mimic wall-100,Barrier-120,Miracle eye-1000,", 
   loots:"(1-1)//mimic clothes--14.3%,(1-99)//enchanted gem--80.0%,(1-1)//Enigma stone--10.0%,(1-1)//future orb--48.0%,", evoStone:"", boost:"2", booStone:"Enigma stone", habilidades:"Teleport, Light, Blink"},
   
  {shiny:"Shiny", nome:"Scyther",  numero:"123-1",  level:"100",   ball1:"Saffariball",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Grama",   tipo2:"Voador", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Quick attack-100,Night slash-100,Wing attack-100,Fury cutter-105,Shredder team-115,Air slash-103,Agility-100,Team slice-118,Swords dance-108,Counter helix-Passiva,Evasion-Passiva,", 
   loots:"(1-1)//scythe--Raro,(1-1)//pot of moss bug--100.0%,(1-1)//Cocoon stone--Raro,", evoStone:"", boost:"2", booStone:"Cocoon stone", habilidades:"Cut, Headbutt"},
   
  {shiny:"Shiny", nome:"Jynx",  numero:"124-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Psycraft",   tipo1:"Água",   tipo2:"Psiquico", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Lovely kiss-100,Draining kiss-100,Psywave-100,Psy pulse-100,Ice ball-100,Ice beam-100,Icy wind-100,Aurora beam-104,Blizzard-106,Heart stamp-108,", 
   loots:"(1-1)//ice orb--40.0%,(1-1)//ice bra--Raro,(1-1)//Ice stone--Raro,", evoStone:"", boost:"2", booStone:"Ice stone", habilidades:"Teleport, Blink"},
   
  {shiny:"Shiny", nome:"Electabuzz",  numero:"125-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Low kick-100,Electroweb-100,Thunder punch-100,Thunder shock-100,Thunder bolt-100,Focus blast-100,Thunder-100,Mamaragan-110,Static-Passiva,", 
   loots:"(1-1)//electric box--35.0%,(1-1)//electric tail--Raro,(1-1)//Thunder stone--Raro,(1-40)//screw--80.0%,", evoStone:"", boost:"2", booStone:"Thunder stone", habilidades:"Rock smash, Light, Headbutt"},
   
  {shiny:"Shiny", nome:"Magmar",  numero:"126-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Scratch-100,Smog-100,Fire punch-100,Ember-100,Fire spin-100,Focus blast-100,Fire blast-100,Magma fist-100,Magma storm-105,Flame body-Passiva,", 
   loots:"(1-1)//magma foot--1.2% (6.0%),(1-90)//essence of fire--100.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--100.0%,", evoStone:"", boost:"2", booStone:"Fire stone", habilidades:"Rock smash, Headbutt"},
   
  {shiny:"Shiny", nome:"Pinsir",  numero:"127-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Inseto",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Bug bite-100,Brick break-100,Bind-100,X scissor-105,Fury cutter-108,Guillotine-110,Revenge-112,Harden-102,Swords dance-108,Bug instinct-Passiva,Seismic toss-Passiva,", 
   loots:"(1-1)//Pinsir horn--80.0%,", evoStone:"", boost:"2", booStone:"Cocoon stone", habilidades:"Cut, Rock smash, Headbutt"},
   
  {shiny:"Shiny", nome:"Tauros",  numero:"128-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Horn attack-100,Take down-100,Pursuit-100,Thrash-105,Giga impact-105,Hyper beam-110,Stampede-105,Scary face-106,Rage-100,Rest-110,", 
   loots:"(1-1)//Heart stone--Raro,(1-1)//bull tail--8.0%,(1-23)//rubber ball--8.0%,(1-1)//horn--8.4%,", evoStone:"", boost:"2", booStone:"Heart stone", habilidades:"Rock smash, Ride, Headbutt"},
   
  {shiny:"Mini", nome:"Magikarp",  numero:"129-1",  level:"1",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Pesca", xpcaught:"0", pricenpc:"1000",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Splash-1,", 
   loots:"(1-1)//Magikarp fin--80.0%,(1-1)//water gem--80.0%,", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Big", nome:"Magikarp",  numero:"129-1",  level:"20",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Pesca", xpcaught:"0", pricenpc:"8000",
   fast:"no", heavy:"yes", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Tackle-20,Splash-20,", 
   loots:"(1-10)//Magikarp fin--80.0%,", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Giant", nome:"Magikarp",  numero:"129-1",  level:"40",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Pesca", xpcaught:"0", pricenpc:"22000",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Tackle-40,Splash-40,Waterfall-40,", 
   loots:"(1-30)//Magikarp fin--80.0%,", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Shiny", nome:"Magikarp",  numero:"129-1",  level:"30",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Pesca", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Tackle-30,Splash-30,Waterfall-30,", 
   loots:"(1-5)//Shiny magikarp fin--80.0%,", evoStone:"", boost:"20", booStone:"Water stone", habilidades:""},
  {shiny:"Shiny Giant", nome:"Magikarp",  numero:"129-1",  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Pesca", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"yes", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Aqua tail-60,Waterball-60,Splash-60,Water pulse-60,Whirlpool-70,Hydropump-70,Surf-100,Rain dance-80,Dragon rage-Passiva,", 
   loots:"(1-10)//Shiny magikarp fin--80.0%,", evoStone:"", boost:"5", booStone:"Water stone", habilidades:"Surf"},
  {shiny:"Shiny", nome:"Gyarados",  numero:"130-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Wingeon",   tipo1:"Água",   tipo2:"Voador", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"yes", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Roar-130,Dragon tail-120,Aqua tail-120,Waterball-120,Twister-124,Hydro cannon-120,Dragon breath-122,Hyper beam-120,Hydropump-128,Dragon dance-126,", 
   loots:"(1-1)//water pendant--100.0%,(1-1)//Gyarados tail--2.0%,(1-1)//Water stone--Raro,(1-1)//Crystal stone--Raro,(1-15)//water gem--80.0%,", evoStone:"", boost:"10", booStone:"Crystal stone", habilidades:"Surf, Headbutt"},
   
  {shiny:"Shiny", nome:"Ditto",  numero:"132-1",  level:"1",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Diamond shop", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Transform-Habilidade,", 
   loots:"no", evoStone:"", boost:"50", booStone:"Mystic star", habilidades:"Transform"},
   
  {shiny:"Shiny", nome:"Eevee",  numero:"133-1",  level:"70",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Eventos", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Sweet kiss-70,Quick attack-70,Bite-70,Headbutt-70,Iron tail-76,Great love-78,Fake tears-76,Wish-70,", 
   loots:"no", evoStone:"", boost:"6", booStone:"Dimensional stone", habilidades:"Dig"},
  {shiny:"Shiny", nome:"Vaporeon",  numero:"134-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Clan", xpcaught:"0", pricenpc:"800000",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Quick attack-120,Water gun-120,Bubblebeam-120,Water pulse-120,Muddy water-120,Aurora beam-120,Hydropump-120,Acid armor-120,Aqua ring-120,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Water stone", habilidades:"Dig, Surf, Headbutt"},
  {shiny:"Shiny", nome:"Jolteon",  numero:"135-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Clan", xpcaught:"0", pricenpc:"800000",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Quick attack-120,Thunder bolt-120,Thunder fang-120,Pin missile-120,Last resort-120,Thunder-120,Electric storm-120,Volt fang-120,Agility-120,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Thunder stone", habilidades:"Dig, Light, headbutt"},
  {shiny:"Shiny", nome:"Flareon",  numero:"136-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Clan", xpcaught:"0", pricenpc:"800000",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Quick attack-120,Bite-120,Flamethrower-120,Sacred fire-120,Blaze kick-120,Flame burst-120,Overheat-120,Fire blast-120,Magma storm-120,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Fire stone", habilidades:"Dig, Headbutt"},
   
  {shiny:"Giant", nome:"Porygon",  numero:"137-1",  level:"200",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Super sonic-200,Psybeam-200,Psycho cut-208,Psychic-200,Zap cannon-204,Hyper beam-210,Tri attack-215,Focus energy-210,Magic coat-208,Restore-200,Illusion-200,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:"Teleport, Light, Fly, Blink"},
   
  {shiny:"Shiny", nome:"Snorlax",  numero:"143-1",  level:"200",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"yes", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Lick-200,Bite-200,Crunch-200,Mega punch-200,Body slam-204,Giga impact-205,Hyper beam-205,Crusher stomp-210,Eating grapefruit-206,", 
   loots:"(1-1)//bitten apple--20.0%,(1-1)//Heart stone--100.0%,(1-1)//Heart stone--100.0%,(1-1)//Ancient stone--10.0%,(1-1)//pizza--100.0%,(1-1)//hamburger--100.0%,(1-1)//hotdog--100.0%,", evoStone:"", boost:"2", booStone:"Heart stone", habilidades:"Rock smash, Surf, Headbutt"},
   
  {shiny:"Shiny", nome:"Dratini",  numero:"147-1",  level:"40",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Dragão",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Dragonair", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"148-1", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Aqua tail-40,Thunder wave-40,Slam-40,Wrap-40,Dragon tail-40,Dragon breath-42,Twister-44,Hyper beam-48,Dragon rage-Passiva,", 
   loots:"(1-1)//water pendant--10.0%,", evoStone:"Crystal stone (x2)", boost:"50", booStone:"Crystal stone", habilidades:"Headbutt"},
  {shiny:"Shiny", nome:"Dragonair",  numero:"148-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",  
   clan1:"Wingeon",   clan2:"Nenhum",   tipo1:"Dragão",   tipo2:"Nenhum", 
   regiao:"Kanto",   geracao:"1",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Dratini", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"147-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Iron tail-100,Thunder wave-100,Slam-100,Wrap-100,Dragon tail-100,Dragon breath-102,Twister-104,Hyper beam-108,Draco meteor-115,Dragon rage-Passiva,", 
   loots:"(1-1)//water pendant--30.0%,(1-1)//Crystal stone--Raro,", evoStone:"", boost:"50", booStone:"Crystal stone", habilidades:"Fly, Headbutt"},
   
   
   
   
   
   
   
   
   
   
   
  /////////// Revisar daki pra baixo
  {shiny:"Shiny", nome:"Meganium",  numero:"154-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"yes", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Razor leaf-100,Magical leaf-100,Petal dance-100,Leaf tornado-110,Ingrain-110,Sleep plague-100,Light screen-100,Aromatherapy-104,", 
   loots:"(1-1)//great petal--24.3% (97.0%),(1-43)//seed--100.0%,(1-1)//Leaf stone--10.3% (30.9%),(1-1)//leaves--85.5% (100.0%),(1-1)//bag of pollem--85.5% (100.0%),", evoStone:"", boost:"2", booStone:"Leaf stone", habilidades:"Cut, Ride, Headbutt"},
   
  {shiny:"Shiny", nome:"Typhlosion",  numero:"157-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Quick attack-100,Swift-100,Ember-100,Flamethrower-100,Flame circle-100,Smokescreen-100,Eruption-100,Flare blitz-110,Inferno-110,", 
   loots:"(1-1)//hot fur--80.3% (100.0%),(1-43)//essence of fire--80.0%,(1-1)//Fire stone--10.3% (30.9%),(1-1)//pot of lava--85.5% (100.0%),(1-1)//fur--85.5% (100.0%),", evoStone:"", boost:"2", booStone:"Fire stone", habilidades:"Dig, Rock smash, Cut, headbutt"},
   
  {shiny:"Shiny", nome:"Feraligatr",  numero:"160-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Crunch-100,Bubbles-100,Water pulse-100,Ice fang-100,Thrash-100,Hydro cannon-100,Waterfall-100,Water spout-110,Scary face-102,Agility-100,", 
   loots:"(1-1)//red scale--84.3% (100.0%),(1-43)//wawter gem--80.0%,(1-1)//Water gem--10.3% (30.9%),(1-1)//water pendant--80.5% (100.0%),(1-1)//nail--85.5% (100.0%),", evoStone:"", boost:"2", booStone:"Water stone", habilidades:"Surf, Cut, Headbutt"},
   
   
  {shiny:"Shiny", nome:"Noctowl",  numero:"164-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Wingeon",   tipo1:"Normal",   tipo2:"Voador", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Quick attack-80,Peck-80,Fly-82,Echoed voice-85,Air slash-83,Hurricane-90,Dream eater-80,Hypnosis-80,", 
   loots:"no", evoStone:"", boost:"5", booStone:"Dimensional stone", habilidades:"Fly"},
   
  {shiny:"Shiny", nome:"Ariados",  numero:"168-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Inseto",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Cyber world", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"String shot-150,Bug bite-150,Poison sting-150,Fury swipes-150,X scissor-160,Poison jab-150,Pin missile-153,Spider web-160,Psychic-157,Web rain-160,", 
   loots:"(1-1)//spider leg--100.0%,(1-40)//bug gosme--100.0%,(1-40)//bottle of poison--100.0%,(1-1)//Cocoon stone--8.0%,(1-1)//pot of moss bug--100.0%,", evoStone:"", boost:"2", booStone:"Cocoon stone", habilidades:""},
   
  {shiny:"Shiny", nome:"Crobat",  numero:"169-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Wingeon",   tipo1:"Venenoso",   tipo2:"Voador", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"Shiny Zubat", preevo1:"Shiny Golbat", evo1:"no", evo2:"no", npreevo2:"41-1", npreevo1:"42-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Super sonic-80,Bite-80,Poison fang-80,Toxic-80,Air slash-83,Wing attack-80,Air cutter-88,Cross poison-84,Venom gale-95,Lifesteal-Passiva,", 
   loots:"(1-1)//giant bat wing--4.3% (17.0%),(1-50)//bottle of poison--100.0%,(1-50)//straw--100.0%,(1-1)//Venom stone--18.8% (75.2%),(1-1)//tooth--39.0% (78.0%),", evoStone:"", boost:"2", booStone:"Venom stone", habilidades:"Fly"},
   
  {shiny:"Shiny", nome:"Lanturn",  numero:"171-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Raibolt",   tipo1:"Água",   tipo2:"Elétrico", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Super sonic-100,Bubbles-100,Bubblebeam-100,Spark-100,Thunder wave-100,Water pulse-100,Surf-105,Wild charge-105,Hydropump-110,Bright light-110,", 
   loots:"(1-1)//point of light--84.3%,(1-13)//water gem--80.0%,(1-13)//screw--80.0%,(1-1)//Water stone--10.0%,(1-1)//Thunder stone--10.0%,(1-1)//water pendant--80.0%,(1-1)//electric box--85.0%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone:"", boost:"2", booStone:"Water stone", habilidades:"Light"},
   
  {shiny:"Shiny", nome:"Xatu",  numero:"178-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Peck-100,Feather dance-100,Confuse ray-102,Shadow ball-100,Night shade-105,Astonish-100,Tailwind-100,Predict-105,Double team-102,", 
   loots:"(1-1)//strange wing--94.3% (100.0%),(1-19)//straw--80.0%,(1-19)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//feather--47.5% (95.0%),", evoStone:"", boost:"2", booStone:"Enigma stone", habilidades:"Teleport, Light, Blink"},
   
  {shiny:"Shiny", nome:"Ampharos",  numero:"181-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Charge-100,Fire punch-100,Cotton spore-100,Thunder bolt-100,Thunder shock-100,Thunder wave-100,Thunder punch-100,Thunder-100,Electro field-110,Signal beam-100,", 
   loots:"(1-1)//sheep wool--84.3% (100.0%),(1-43)//screw--80.0%,(1-1)//Thunder stone--10.3% (30.9%),(1-1)//electric box--80.5% (100.0%),", evoStone:"", boost:"2", booStone:"Thunder stone", habilidades:"Light, Headbutt"},
  {shiny:"Mega", nome:"Ampharos",  numero:"181-2",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Wingeon",   tipo1:"Elétrico",   tipo2:"Dragão", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Embedded tower", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Charge-80,Dragon tail-80,Cotton spore-80,Thunder bolt-80,Thunder shock-80,Power gem-80,Dragon mist-85,Dragon pulse-85,Electro field-90,Outrage-95,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Shiny", nome:"Politoed",  numero:"186-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Cyber world", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Mud shot-150,Doubleslap-150,Bubblebeam-150,Water gun-150,Hyper voice-150,Whirlpool-152,Tongue hook-150,Tongue grap-158,Hydropump-160,Hypnosis-150,", 
   loots:"(1-1)//strange thing--100.0%,(1-70)//water gem--100.0%,(1-1)//Water stone--8.0%,(1-1)//water pendant--100.0%,", evoStone:"", boost:"2", booStone:"Water stone", habilidades:"Surf, Headbutt"},
   
  {shiny:"Shiny", nome:"Espeon",  numero:"196-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Cyber world", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Charm-150,Swift-150,Bite-150,Psywave-150,Psy pulse-150,Confusion-150,Psychic-154,Psyshock-158,Psyusion-165,Miracle eye-1000,", 
   loots:"(1-99)//enchanted gem--100.0%,(1-1)//Enigma stone--8.0%,", evoStone:"", boost:"2", booStone:"Enigma stone", habilidades:"Dig, Teleport, Headbutt, Blink"},
  {shiny:"Shiny", nome:"Umbreon",  numero:"197-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Noturno",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Cyber world", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Bite-150,Faint attack-150,Shadowave-150,Dark pulse-150,Pursuit-150,Confuse ray-154,Last resort-150,Assurance-158,Night daze-156,", 
   loots:"(1-99)//dark gem--100.0%,(1-1)//Darkness stone--8.0%,", evoStone:"", boost:"2", booStone:"Darkness stone", habilidades:"Dig, Headbutt, Blink"},
   
  {shiny:"Legion", nome:"Unown",  numero:"201-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Dark pulse-150,Hidden power-150,Psychic-150,Split-150,Warping reality-150,Metronome-150,Unown strike-150,Phantom force-150,Levitate-Passiva,", 
   loots:"no", evoStone:"25", boost:"Mystic star", booStone:"Blink", habilidades:"Teleport"},
   
  {shiny:"Mega", nome:"Steelix",  numero:"208-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Ironhard",   tipo1:"Terra",   tipo2:"Metal", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Roar-110,Iron tail-100,Iron head-100,Bind-100,Autotomize-100,Earth power-105,Fissure-110,Earthquake-107,Sandstorm-100,Stealth rock-110,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Shiny", nome:"Qwilfish",  numero:"211-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Venenoso",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Pesca", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Tackle-80,Poison sting-80,Toxic spikes-82,Toxic-80,Venoshock-80,Harden-84,Minimize-88,Spike skin-Passiva,", 
   loots:"(1-1)//pink small tail--4.3%,(1-49)//bottle of poison--80.0%,(1-1)//Venom stone--1.2%,", evoStone:"", boost:"5", booStone:"Venom stone", habilidades:"Headbutt"},
   
  {shiny:"Mega", nome:"Scizor",  numero:"212-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Ironhard",   tipo1:"Inseto",   tipo2:"Metal", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Drop", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Swift-100,Iron head-100,Compass slash-100,Metal claw-107,Bullet punch-100,Pursuit-100,X scissor-105,Steel wing-108,Iron defense-104,Evasion-Passiva,", 
   loots:"(1-1)//scizor claw--Raro,(1-25)//piece of steel--80.0%,(1-25)//bug gosme--80.0%,(1-1)//Metal stone--Raro,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--45.0% (90.0%),(1-1)//Scizorite--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Shiny", nome:"Magcargo",  numero:"219-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Orebound",   tipo1:"Fogo",   tipo2:"Pedra", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Ember-100,Rock throw-100,Rock slide-100,Flamethrower-100,Flame burst-100,Stone edge-100,Ancient power-108,Blast burn-115,Harden-100,Yawn-106,Amnesia-Passiva,", 
   loots:"(1-1)//fire ear--4.3%,(1-15)//essence of fire--80.0%,(1-15)//small stone--80.0%,(1-1)//Fire stone--Raro,(1-1)//Rock stone--Raro,(1-1)//pot of lava--28.0%,", evoStone:"", boost:"2", booStone:"Fire stone", habilidades:"Rock smash, Headbutt"},
   
  {shiny:"Shiny", nome:"Corsola",  numero:"222-1",  level:"60",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Orebound",   tipo1:"Água",   tipo2:"Pedra", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Tackle-60,Bubbles-60,Bubblebeam-60,Rock blast-60,Power gem-60,Ancient power-68,Recover-65,Harden-65,", 
   loots:"(1-1)//green piece of coral--100.0%,(1-26)//water gem--80.0%,(1-26)//small stone--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--53.0%,", evoStone:"", boost:"5", booStone:"Water stone", habilidades:"Rock smash, Headbutt"},
   
  {shiny:"Shiny", nome:"Delibird",  numero:"225-1",  level:"70",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Wingeon",   tipo1:"Gelo",   tipo2:"Voador", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Present-70,Doubleslap-70,Pluck-75,Frost breath-72,Healing wish-72,Blizzard-80,Rock n roll-74,Egg rain-80,", 
   loots:"no", evoStone:"", boost:"6", booStone:"Dimensional stone", habilidades:""},
   
  {shiny:"Shiny", nome:"Stantler",  numero:"234-1",  level:"150",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Cyber world", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Attract-150,Tackle-150,Stomp-158,Last resort-155,Confuse ray-154,Take down-150,Jump kick-156,Calm mind-150,Stampede-155,Intimidate-Passiva,", 
   loots:"(1-1)//reindeer horn--100.0%,(1-80)//rubber ball--100.0%,(1-1)//Heart stone--8.0%,", evoStone:"", boost:"2", booStone:"Heart stone", habilidades:"Rock smash, Ride, Headbutt"},
   
  {shiny:"(2)", nome:"Smeargle",  numero:"235",  level:"1",   ball1:"Nenhuma",   ball2:"Nenhuma",  
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Sketch-Especial,Sketch-Especial,", 
   loots:"(1-1)//brush--4.3%,(1-20)//rubber ball--80.0%,", evoStone:"", boost:"8", booStone:"Heart stone", habilidades:""},
  {shiny:"(3)", nome:"Smeargle",  numero:"235",  level:"10",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Sketch-Especial,Sketch-Especial,Sketch-Especial,", 
   loots:"(1-1)//brush--4.3%,(1-20)//rubber ball--80.0%,", evoStone:"", boost:"7", booStone:"Heart stone", habilidades:""},
  {shiny:"(4)", nome:"Smeargle",  numero:"235",  level:"20",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,", 
   loots:"(1-1)//brush--4.3%,(1-20)//rubber ball--80.0%,", evoStone:"", boost:"6", booStone:"Heart stone", habilidades:""},
  {shiny:"(5)", nome:"Smeargle",  numero:"235",  level:"30",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,", 
   loots:"(1-1)//brush--4.3%,(1-20)//rubber ball--80.0%,", evoStone:"", boost:"5", booStone:"Heart stone", habilidades:""},
  {shiny:"(6)", nome:"Smeargle",  numero:"235",  level:"50",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,", 
   loots:"(1-1)//brush--4.3%,(1-20)//rubber ball--80.0%,", evoStone:"", boost:"4", booStone:"Heart stone", habilidades:""},
  {shiny:"(7)", nome:"Smeargle",  numero:"235-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,", 
   loots:"(1-1)//brush--4.3%,(1-20)//rubber ball--80.0%,", evoStone:"", boost:"3", booStone:"Heart stone", habilidades:""},
  {shiny:"(8)", nome:"Smeargle",  numero:"235-2",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Normal",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,Sketch-Especial,", 
   loots:"(1-1)//brush--4.3%,(1-20)//rubber ball--80.0%,", evoStone:"", boost:"2", booStone:"Heart stone", habilidades:""},
   
  {shiny:"Elite", nome:"Hitmontop",  numero:"237-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Gardestrike",   clan2:"Nenhum",   tipo1:"Lutador",   tipo2:"Nenhum", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Clan", xpcaught:"0", pricenpc:"1000000",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Triple kick-120,Rolling kick-120,Revenge-120,Focus energy-127,Detect-120,Counter spin-Passiva,Foresight-Passiva,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Punch stone", habilidades:"Rock smash, Headbutt"},
   
  {shiny:"Shiny", nome:"Larvitar",  numero:"246-1",  level:"40",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Pedra", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"Shiny Pupitar", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"247-1", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Bite-40,Crunch-40,Dark pulse-40,Rock slide-40,Stone edge-40,Earthquake-45,Hyper beam-47,Sandstorm-40,", 
   loots:"(1-1)//lizard tail--10.0%,(1-5)//small stone--80.0%,(1-5)//earth ball--80.0%,(1-1)//stone orb--56.0%,(1-1)//sandbag--16.0%,", evoStone:"Ancient stone (x2)", boost:"50", booStone:"Ancient stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},
  {shiny:"Shiny", nome:"Pupitar",  numero:"247-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma",
   clan1:"Orebound",   clan2:"Nenhum",   tipo1:"Terra",   tipo2:"Pedra", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Caught", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"Shiny Larvitar", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"246-1", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Rock tomb-100,Dark pulse-100,Rock slide-100,Stone edge-100,Bulldoze-106,Ancient power-115,Magnitude-106,Hyper beam-108,Sandstorm-100,Scary face-102,", 
   loots:"(1-1)//lizard tail--82.5%,(1-16)//small stone--80.0%,(1-16)//earth ball--80.0%,(1-1)//stone orb--89.5%,(1-1)//sandbag--89.5%,(1-1)//Ancient stone--10.1%,(1-1)//Rock stone--10.1%,", evoStone:"", boost:"50", booStone:"Ancient stone", habilidades:"Dig, Rock smash, Cut, Headbutt"},
  {shiny:"Mega", nome:"Tyranitar",  numero:"248-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Orebound",   clan2:"Malefic",   tipo1:"Pedra",   tipo2:"Noturno", 
   regiao:"Johto",   geracao:"2",   dificuldade:"Embedded tower", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Bite-100,Shadowave-100,Crunch-100,Dark pulse-100,Rock slide-100,Stone edge-100,Assurance-108,Hyper beam-110,Epicenter-114,Sandstorm-100,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
   
   
   
   
   
  {shiny:"Mega", nome:"Sceptile",  numero:"254-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Wingeon",   tipo1:"Grama",   tipo2:"Dragão", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Drop", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Leaf blade-80,Magical leaf-80,Fury cutter-85,Dragon claw-80,Bulldoze-83,X scissor-80,Dual chop-80,Outrage-95,Frenzy plant-90,Agility-80,", 
   loots:"(1-43)//seed--80.0% (100.0%),(1-1)//Leaf stone--Raro,(1-1)//leaves--45.5% (100.0%),(1-1)//greens--4.3% (21.3%),(1-1)//Sceptilite--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Mega", nome:"Blaziken",  numero:"257-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Gardestrike",   tipo1:"Fogo",   tipo2:"Lutador", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Drop", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Low kick-80,Ember-80,Mega kick-80,Fire fist-80,Blaze kick-80,Hi jump kick-80,Sky uppercut-88,Blast burn-95,Flare blitz-90,Bulk up-80,Evasion-Passiva,", 
   loots:"(1-1)//fire feather--4.3% (59.5%),(1-21)//band aid--80.0% (100.0%),(1-21)//essence of fire--80.0% (100.0%),(1-1)//Fire stone--Raro,(1-1)//Punch stone--Raro,(1-1)//pot of lava--45.5% (100.0%),(1-1)//Blazikenite--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Mega", nome:"Swampert",  numero:"260-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Orebound",   tipo1:"Água",   tipo2:"Terra", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Drop", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Mega punch-80,Water gun-80,Waterball-80,Aqua tail-80,Bulldoze-83,Earth power-80,Hammer arm-80,Magnitude-90,Hydropump-90,Rain dance-80,Swift swim-Passiva,", 
   loots:"(1-1)//black fins--4.3% (21.3%),(1-21)//earth ball--80.0% (100.0%),(1-21)//water gem--80.0% (100.0%),(1-1)//water pendant--22.8 (68.3%),(1-1)//Water stone--Raro,(1-1)//Earth stone--Raro,(1-1)//Swamperite--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Mega", nome:"Gardevoir",  numero:"282-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Fada", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Drop", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Charm-100,Dazzling gleam-104,Instant teleportation-100,Disarming voice-100,Psychic-100,Stored power-110,Healing wish-102,Moonblast-112,Misty terrain-100,Miracle eye-1010,", 
   loots:"(1-1)//cure flower--4.3% (63.8%),(1-1)//comb--2.5% (25.0%),(1-43)//enchanted gem--100.0%,(1-1)//future orb--40.0% (100.0%),(1-1)//Enigma stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//Gardevoirite--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Mega", nome:"Sableye",  numero:"302-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma",
  clan1:"Malefic",   clan2:"Nenhum",   tipo1:"Fantasma",   tipo2:"Noturno", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Drop", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", preevo2:"no", preevo1:"Sableye", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"302", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Shadow ball-80,Fury swipes-80,Shadow sphere-80,Sucker punch-83,Astonish-80,Dark pulse-80,Shadow claw-80,Magic bounce,", 
   loots:"(1-1)//big crystal--1.3% (6.5%),(1-20)//ghost essence--80.0% (100.0%),(1-1)//Darkness stone--Raro,(1-1)//Sablenite--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Mega", nome:"Mawile",  numero:"303-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Psycraft",   tipo1:"Metal",   tipo2:"Fada", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Embedded tower", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Bite-80,Fairy wind-88,Play rough-80,Impale-83,Flash cannon-88,Spit up-83,Swallow-83,Stockpile-83,Fake tears-86,Clear pile-Passiva,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Mega", nome:"Aggron",  numero:"306-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Nenhum",   tipo1:"Metal",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Drop", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Iron head-100,Iron tail-100,Mud slap-100,Stone edge-100,Metal burst-100,Metal claw-107,Meteor mash-100,Flash cannon-108,Harden-100,Sturdy-Passiva,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Shiny", nome:"Manectric",  numero:"310-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Roar-110,Swift-100,Volt fang-100,Spark-100,Ice fang-100,Thunder-100,Discharge-105,Mamaragan-110,Magnetic flux-100,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Mirror stone", habilidades:"Cut"},
  {shiny:"Mega", nome:"Manectric",  numero:"310-2",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Drop", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Roar-90,Spark-80,Fire fang-80,Ice fang-80,Flame burst-80,Flamethrower-80,Toxic-80,Discharge-85,Signal beam-80,Magnetic flux-80,", 
   loots:"(1-1)//shock topknot--4.3% (21.3%),(1-43)//screw--80.0% (100.0%),(1-1)//electric box--40.0% (100.0%),(1-1)//Thunder stone--Raro,(1-1)//Manectite--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Minun and", nome:"Plusle",  numero:"311-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Não capturável", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Sweet kiss-100,Spark-100,Nuzzle-105,Thunder wrath-112,Split-100,Helping hand-100,Fake tears-106,Wish-100,Flash-100,Afraid of needles-Passiva,", 
   loots:"no", evoStone:"", boost:"3", booStone:"Thunder stone", habilidades:""},
   
  {shiny:"Mega", nome:"Altaria",  numero:"334-1",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Wingeon",   clan2:"Psycraft",   tipo1:"Dragão",   tipo2:"Fada", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Attract-80,Dazzling gleam-84,Dragon claw-80,Dragon breath-82,Dragon mist-85,Dragon pulse-85,Mist-90,Tailwind-80,Draco meteor-95,Safeguard-90,Cloud nine-Passiva,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Fire", nome:"Castform",  numero:"351-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Fogo",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Shadow ball-100,Ember-100,Flamethrower-100,Fireball-100,Eruption-100,Fire blast-100,Magma storm-110,Solar beam-100,Forecast-Passiva,Sacred breath-Passiva,", 
   loots:"(1-99)//essence of fire--80.0%,(1-99)//snowball--80.0%,(1-99)//water gem--80.0%,(1-1)//pot of lava--80.0%,(1-1)//ice orb--80.0%,(1-1)//water pendant--80.0%,(1-1)//Water stone--1.3%,(1-1)//Fire stone--1.3%,(1-1)//Ice stone--1.3%,", evoStone:"", boost:"50", booStone:"Mystic star", habilidades:""},
  {shiny:"Water", nome:"Castform",  numero:"351-2",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Água",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Thunder shock-100,Bubbles-100,Water gun-100,Electro ball-100,Thunder bolt-100,Thunder-100,Electro field-110,Solar beam-100,Forecast-Passiva,", 
   loots:"(1-99)//essence of fire--80.0%,(1-99)//snowball--80.0%,(1-99)//water gem--80.0%,(1-1)//pot of lava--80.0%,(1-1)//ice orb--80.0%,(1-1)//water pendant--80.0%,(1-1)//Water stone--1.3%,(1-1)//Fire stone--1.3%,(1-1)//Ice stone--1.3%,", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Ice", nome:"Castform",  numero:"351-3",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Volcanic",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Nenhum", 
   regiao:"Hoen",   geracao:"3",   dificuldade:"Sem sistema", xpcaught:"0", pricenpc:"0",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Feather dance-100,Ice shards-100,Ice beam-100,Icy wind-100,Powder snow-100,Aurora beam-104,Blizzard-106,Solar beam-100,Forecast-Passiva,", 
   loots:"(1-99)//essence of fire--80.0%,(1-99)//snowball--80.0%,(1-99)//water gem--80.0%,(1-1)//pot of lava--80.0%,(1-1)//ice orb--80.0%,(1-1)//water pendant--80.0%,(1-1)//Water stone--1.3%,(1-1)//Fire stone--1.3%,(1-1)//Ice stone--1.3%,", evoStone:"", boost:"", booStone:"", habilidades:""},
 
  {shiny:"Shiny", nome:"Bronzong",  numero:"437-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Psycraft",   tipo1:"Metal",   tipo2:"Psiquico", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"yes", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Psy pulse-100,Extrasensory-100,Meteor mash-100,Psychic-100,Metal sound-130,Psy impact-110,Dream eater-100,Hypnosis-100,Iron defense-104,Miracle eye-950,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Dimensional stone", habilidades:"Teleport, Light, Blink"},

  {shiny:"Shiny", nome:"Lucario",  numero:"448-1",  level:"120",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Nenhum",   tipo1:"Metal",   tipo2:"Lutador", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Clan", xpcaught:"0", pricenpc:"800000",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Quick attack-120,Iron head-120,Close combat-120,Metal claw-120,Bullet punch-120,Bone rush-120,Aura sphere-120,Swords dance-120,Evasion-Passiva,Superpower-Passiva,Foresight-Passiva,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Punch stone", habilidades:"Rock smash, Light, Headbutt"},
  {shiny:"Mega", nome:"Lucario",  numero:"448-2",  level:"80",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Ironhard",   clan2:"Gardestrike",   tipo1:"Metal",   tipo2:"Lutador", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Drop", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Iron head-80,Extremespeed-80,Circle throw-80,Metal claw-80,Bullet punch-80,Aura sphere-80,Vacuum wave-95,Mind reader-80,Evasion-Passiva,Superpower-Passiva,Foresight-Passiva,", 
   loots:"no", evoStone:"", boost:"", booStone:"", habilidades:""},

  {shiny:"Shiny", nome:"Leafeon",  numero:"470-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Nenhum",   tipo1:"Grama",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Leech seed-100,Leaf blade-100,X scissor-104,Grassy terrain-110,Hyper voice-100,Grass whistle-100,Substitute-100,Synthesis-100,Protect-100,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Mirror stone", habilidades:"Dig"},
  {shiny:"Shiny", nome:"Glaceon",  numero:"471-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Seavell",   clan2:"Nenhum",   tipo1:"Gelo",   tipo2:"Nenhum", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Swift-100,Ice shards-100,Ice fang-100,Ice beam-100,Frost breath-102,Tail whip-100,Blizzard-106,Hail-108,Magic coat-106,Barrier-120,Ice body-Passiva,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Mirror stone", habilidades:"Dig"},
   
  {shiny:"Water", nome:"Rotom",  numero:"479-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Água", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Form", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Thunder shock-100,Bubbles-100,Waterball-100,Shockwave-100,Brine-100,Substitute-100,Hydro cannon-100,Surf-105,Morph-100,Levitate-Passiva,", 
   loots:"(1-40)//screw--100.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--100.0%,(1-1)//zap--5.7%,(1-1)//Wash--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Fire", nome:"Rotom",  numero:"479-2",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Fogo", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Form", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Thunder shock-100,Ember-100,Fireball-100,Shockwave-100,Flame burst-100,Substitute-100,Fire blast-100,Blast burn-115,Morph-100,Levitate-Passiva,", 
   loots:"(1-40)//screw--100.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--100.0%,(1-1)//zap--5.7%,(1-1)//Heat--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Grass", nome:"Rotom",  numero:"479-3",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Grama", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Form", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Thunder shock-100,Razor leaf-100,Leaf blade-100,Shockwave-100,Bullet seed-100,Substitute-100,Solar beam-100,Petal blizzard-100,Morph-100,Levitate-Passiva,", 
   loots:"(1-40)//screw--100.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--100.0%,(1-1)//zap--5.7%,(1-1)//Mow--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Flying", nome:"Rotom",  numero:"479-4",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Voador", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Form", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Thunder shock-100,Feather dance-100,Air cutter-108,Shockwave-100,Whirlwind-100,Substitute-100,Air slash-103,Aerial ace-104,Morph-100,Levitate-Passiva,", 
   loots:"(1-40)//screw--100.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--100.0%,(1-1)//zap--5.7%,(1-1)//Fan--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
  {shiny:"Ice", nome:"Rotom",  numero:"479-5",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Raibolt",   clan2:"Nenhum",   tipo1:"Elétrico",   tipo2:"Gelo", 
   regiao:"Sinoh",   geracao:"4",   dificuldade:"Form", xpcaught:"0", pricenpc:"0",
   fast:"yes", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "yes", 
   moves:"Thunder shock-100,Ice shards-100,Powder snow-100,Shockwave-100,Icy wind-100,Substitute-100,Aurora beam-104,Blizzard-108,Morph-100,Levitate-Passiva,", 
   loots:"(1-40)//screw--100.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--100.0%,(1-1)//zap--5.7%,(1-1)//Frost--Raro,", evoStone:"", boost:"", booStone:"", habilidades:""},
   
  {shiny:"Giant", nome:"Galvantula",  numero:"596-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Naturia",   clan2:"Raibolt",   tipo1:"Inseto",   tipo2:"Elétrico", 
   regiao:"Unova",   geracao:"5",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Bug bite-100,Electroweb-100,Leech life-105,X scissor-105,Fury cutter-106,Struggle bug-108,Signal beam-100,Spider web-110,Web rain-110,Compound eyes-Passiva,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Dimensional stone", habilidades:"Dig, Cut, Light"},
   
  {shiny:"Shiny", nome:"Sylveon",  numero:"700-1",  level:"100",   ball1:"Nenhuma",   ball2:"Nenhuma", 
   clan1:"Psycraft",   clan2:"Nenhum",   tipo1:"Psiquico",   tipo2:"Nenhum", 
   regiao:"Kalos",   geracao:"6",   dificuldade:"Dimensional zone", xpcaught:"0", pricenpc:"unseleable",
   fast:"no", heavy:"no", 
   preevo2:"no", preevo1:"no", evo1:"no", evo2:"no", npreevo2:"no", npreevo1:"no", nevo1:"no", nevo2:"no", 
   mapas:'no',  vip: "no", 
   moves:"Charm-100,Draining kiss-100,Swift-100,Disarming voice-100,Take down-100,Fairy wind-100,Last resort-100,Great love-108,Baby doll eyes-112,", 
   loots:"no", evoStone:"", boost:"2", booStone:"Mirror stone", habilidades:"Dig"}


]


efetividadeArray = [
   {tipo: "Fogo",
   forca: ["Grama", "Inseto", "Gelo", "Metal"],
   fraqueza: ["Água", "Terra", "Pedra", "Dragão"],
   nulo: [""],
   },
   {tipo: "Grama",
   forca: ["Água", "Terra", "Pedra", "Elétrico"],
   fraqueza: ["Fogo", "Voador", "Venenoso", "Inseto", "Gelo", "Metal", "Dragão"],
   nulo: [""],
   },
   {tipo: "Inseto",
   forca: ["Psiquico", "Grama", "Noturno"],
   fraqueza: ["Fogo", "Voador", "Pedra", "Venenoso", "Metal"],
   nulo: [""],
   },
   {tipo: "Água",
   forca: ["Terra", "Pedra", "Fogo"],
   fraqueza: ["Grama", "Elétrico", "Dragão"],
   nulo: [""],
  },
   {tipo: "Gelo",
   forca: ["Grama", "Voador", "Dragão", "Terra"],
   fraqueza: ["Lutador", "Fogo", "Pedra", "Metal"],
   nulo: [""],
   },
   {tipo: "Voador",
   forca: ["Grama", "Inseto", "Lutador", "Terra"],
   fraqueza: ["Elétrico", "Gelo", "Pedra"],
   nulo: ["Terra"],
   },
   {tipo: "Dragão",
   forca: ["Dragão", "Água", "Elétrico", "Fogo", "Grama"],
   fraqueza: ["Gelo", "Fada", "Psiquico", "Dragão", "Metal"],
   nulo: [""],
   },
   {tipo: "Terra",
   forca: ["Elétrico", "Pedra", "Venenoso", "Fogo", "Metal"],
   fraqueza: ["Grama", "Água", "Gelo", "Voador"],
   nulo: ["Elétrico"],
   },
   {tipo: "Pedra",
   forca: ["Fogo", "Voador", "Gelo", "Inseto", "Venenoso"],
   fraqueza: ["Grama", "Água", "Lutador", "Metal", "Terra"],
   nulo: [""],
   },
   {tipo: "Psiquico",
   forca: ["Venenoso", "Fantasma", "Psiquico", "Normal", "Lutador"],
   fraqueza: ["Noturno", "Fantasma", "Psiquico", "Inseto", "Fogo", "Metal"],
   nulo: [""],
   },
   {tipo: "Fada",
   forca: ["Dragão", "Noturno", "Lutador", "Inseto"],
   fraqueza: ["Metal", "Venenoso", "Fogo"],
   nulo: ["Dragão"],
   },
   {tipo: "Metal",
   forca: ["Pedra", "Gelo", "Venenoso", "Fada", "Dragão", "Psiquico"],
   fraqueza: ["Fogo", "Terra", "Lutador", "Elétrico"],
   nulo: ["Venenoso"],
   },
   {tipo: "Noturno",
   forca: ["Fantasma", "Psiquico"],
   fraqueza: ["Lutador", "Inseto", "Fada"],
   nulo: ["Psiquico"],
   },
   {tipo: "Venenoso",
   forca: ["Grama", "Fada", "Inseto"],
   fraqueza: ["Psiquico", "Terra", "Metal"],
   nulo: [""],
   },
   {tipo: "Fantasma",
   forca: ["Psiquico", "Lutador", "Venenoso", "Fantasma"],
   fraqueza: ["Noturno", "Psiquico", "Fantasma"],
   nulo: ["Normal", "Lutador"],
   },
   {tipo: "Normal",
   forca: ["Água", "Fantasma"],
   fraqueza: ["Lutador"],
   nulo: ["Fantasma"],
   },
   {tipo: "Lutador",
   forca: ["Normal", "Noturno", "Pedra", "Gelo", "Metal"],
   fraqueza: ["Voador", "Psiquico", "Fada", "Venenoso", "Inseto", "Fantasma"],
   nulo: [""],
   },
   {tipo: "Elétrico",
   forca: ["Água", "Voador", "Metal"],
   fraqueza: ["Grama", "Terra", "Pedra", "Dragão"],
   nulo: [""],
   }
]



ballsArray = [
   
   {ball: "Moonball",
   tipos: ["Fantasma", "Noturno"],
   },
   {ball: "Tinkerball",
   tipos: ["Metal", "Elétrico"],
   },
   {ball: "Duskball",
   tipos: ["Pedra", "Lutador"],
   },
   {ball: "Yumeball",
   tipos: ["Psiquico", "Normal"],
   },
   {ball: "Taleball",
   tipos: ["Dragão", "Fada"],
   },
   {ball: "Janguruball",
   tipos: ["Grama", "Poison"],
   },
   {ball: "Netball",
   tipos: ["Inseto", "Água"],
   },
   {ball: "Soraball",
   tipos: ["Voador", "Gelo"],
   },
   {ball: "Maguball",
   tipos: ["Terra", "Fogo"],
   }
]

ballsArrayVarPrice = [
   
   {ball: "Pokeball",
    valornpc:2,
 fator:0.3,
   },
   {ball: "Greatball",
    valornpc:10,
 fator:1,
   },
   {ball: "Superball",
    valornpc:28,
 fator:1,
   },
   {ball: "Ultraball",
    valornpc:90,
 fator:1.5,
   },
   {ball: "Saffariball",
    valornpc:90,
 fator:4,
   },
   {ball: "Moonball",
    valornpc:90,
 fator:1.05,
   },
   {ball: "Tinkerball",
    valornpc:90,
 fator:1.05,
   },
   {ball: "Duskball",
    valornpc:90,
 fator:1.05,
   },
   {ball: "Yumeball",
    valornpc:90,
 fator:1.05,
   },
   {ball: "Taleball",
    valornpc:90,
 fator:1.05,
   },
   {ball: "Janguruball",
    valornpc:90,
 fator:1.05,
   },
   {ball: "Netball",
    valornpc:90,
 fator:1.05,
   },
   {ball: "Soraball",
    valornpc:90,
 fator:1.05,
   },
   {ball: "Maguball",
    valornpc:90,
 fator:1.05,
   }
]

movesArray = [
 
 { move: "Ancient armor", type: "Normal", desc: "aumenta a defesa e dobra a velocidade de ataque fisico do pokemon por 12 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "",
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "yes", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hand water gun", type: "Água", desc: "causa dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "",
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Giant water gun", type: "Água", desc: "causa dano em uma grande área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "",
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 
 
 { move: "Tackle", type: "Normal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "",
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Razor leaf", type: "Grama", desc: "causa vários danos consecutivos ao oponente.",
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Vine whip", type: "Grama", desc: "causa dano em uma área frontal. Em alguns casos a área é ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Headbutt", type: "Normal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Leech seed", type: "Grama", desc: "ao longo de 20 segundos, causa dano ao oponente e cura a si proprio com base no dano causado.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "yes", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Solar beam", type: "Grama", desc: "causa dano em uma grande área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sleep powder", type: "Grama", desc: "aplica efeito stun por 5 segundos em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "yes", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Stun spore", type: "Grama", desc: "aplica efeito paralize por 10 segundos em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "yes", passive: "", poison: "", self: "", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Poison powder", type: "Venenoso", desc: "aplica efeito poison(x8-x20) em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "yes", self: "", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bullet seed", type: "Grama", desc: "causa dano em uma área frontal sendo possível acertar mais de uma vez no mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Giga drain", type: "Grama", desc: "causa dano ao oponente e cura o usuário com base no dano causado.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "yes", 
   nevermiss: "yes", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Leaf storm", type: "Grama", desc: "causa dano em uma grande área ao redor do pokemon, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Thick fat", type: "Pedra", desc: "o pokemon recebe metade do dano (inefetivo) de pokemons do tipo fogo e gelo", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "yes", poison: "", self: "", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Scratch", type: "Normal", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ember", type: "Fogo", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Flamethrower", type: "Fogo", desc: "causa dano em uma área frontal, aplicando o efeito burn(x10).", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fireball", type: "Fogo", desc: "causa dano ao oponente e em uma grande área ao redor dele, aplicando efeito burn(x5).", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fire fang", type: "Fogo", desc: "causa dano ao oponente, aplicando efeito burn(x10), só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fire blast", type: "Fogo", desc: "causa dano em uma área frontal progressivamente, aplicando efeito burn(x5), sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rage", type: "Dragão", desc: "dobra o dano causado pelos ataques físicos durante 20 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "yes", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Flame burst", type: "Fogo", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Air slash", type: "Voador", desc: "causa dano em uma área de 2 quadrados ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Wing attack", type: "Voador", desc: "causa dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Magma storm", type: "Fogo", desc: "causa dano progressivamente em uma grande área sendo possivel acertar mais de uma vez o mesmo oponente, aplica-se efeito burn(x10).", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Scary face", type: "Normal", desc: "causa status de paralyze em uma grande área, o status dura 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "yes", passive: "", poison: "", self: "", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ancient fury", type: "Normal", desc: "aumenta a velocidade de movimento e dobra o dano e velocidade do ataque físico causado pelo pokemon por 12 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "yes", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bubbles", type: "Água", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Water gun", type: "Água", desc: "causa dano ao oponente em linha reta.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Waterball", type: "Água", desc: "causa dano ao oponente e em uma grande área ao redor dele.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Aqua tail", type: "Água", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hidro cannon", type: "Água", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Harden", type: "Normal", desc: "aumenta a defesa do pokemon por 10 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "yes", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Brine", type: "Água", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Skull bash", type: "Normal", desc: "causa dano em uma área frontal progressivamente, aplicando efeito paralize por 8 segundos, sendo possível acertar masi de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "yes", passive: "", poison: "", self: "", slow: "", stun: "", target: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Water pulse", type: "Água", desc: "causa dano em uma área em volta do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hydropump", type: "Água", desc: "causa dano em uma grande área ao redor do pokemon, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "String shot", type: "Inseto", desc: "aplica o efeito paralyze por 5 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "yes", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bug bite", type: "Inseto", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Super sonic", type: "Normal", desc: "aplica o efeito confusion por 10 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "yes", damage: "", debuff: "", lifesteal: "", 
   nevermiss: "", paralyze: "", passive: "", poison: "", self: "", slow: "", stun: "", target: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Silver wind", type: "Inseto", desc: "causa dano ao oponente e em uma área ao redor dele.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Whirlwind", type: "Voador", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Confusion", type: "Psiquico", desc: "causa dano em uma grande área ao redor do pokemon, aplicando efeito confusion por 10 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "yes", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Psybeam", type: "Psiquico", desc: "causa dano em linha reta.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Air cutter", type: "Voador", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Safeguard", type: "Normal", desc: "remove os efeitos negativos de seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Horn attack", type: "Normal", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Poison sting", type: "Venenoso", desc: "causa dano ao oponente, aplicando o efeito poison (x10), só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Poison jab", type: "Venenoso", desc: "causa dano ao oponente, aplicando o efeito poison (x10).", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fury cutter", type: "Inseto", desc: "desfere dois ataques causando dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Pin missile", type: "Inseto", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Toxic spikes", type: "Venenoso", desc: "causa vários danos consecutivos ao oponente, aplicando o efeito poison (x5).", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Strafe", type: "Normal", desc: "dobra a velocidade de ataques fisicos durante 20 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Evasion", type: "Normal", desc: "pode ser ativado quando o oponente usa algum ataque enquanto estiver como alvo, movendo-se para trás do oponente e cancelando o ataque em questão.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Quick attack", type: "Normal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sand attack", type: "Terra", desc: "aplica o efeito blind por 5 segundos em linha reta.", 
   aoe: "yes", blind: "yes", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Gust", type: "Voador", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Drill peck", type: "Voador", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Aeroblast", type: "Voador", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hurricane", type: "Voador", desc: "causa dano periodicamente ao redor do pokemon, aumentando sua velocidade durante o ataque.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Agility", type: "Voador", desc: "aumenta a velocidade de movimento do pokemon por 10 segundos e dobra a velocidade de ataque fisico por 20 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Roost", type: "Normal", desc: "cura o seu pokemon.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Bite", type: "Noturno", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Super fang", type: "Normal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Pursuit", type: "Noturno", desc: "causa dano ao oponente, o usuário fica invunerável a danos por 1 segundo.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fury", type: "Dragão", desc: "ativa quando o pokemon é atacado fisicamente, dobrando o dano do ataque fisicio do usuário por 10 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Peck", type: "Voador", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Aerial ace", type: "Voador", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Poison fang", type: "Venenoso", desc: "causa dano ao oponente, aplicando efeito poison(x10), só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Gunk shot", type: "Venenoso", desc: "causa varios danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Acid", type: "Venenoso", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fear", type: "Fantasma", desc: "Amedronta os oponentes, fazendo-os fugirem de seu pokemon e tornando-os incapazes de atacar por 6 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Wrap", type: "Normal", desc: "causa dano ao oponente ao decorrer de 8 segundos, aplicando o efeito stun por 1,5 segundos. ", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Iron tail", type: "Metal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Thunder shock", type: "Elétrico", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Thunder bolt", type: "Elétrico", desc: "causa varios danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shockwave", type: "Elétrico", desc: "uma série de pulsos que duram 2 segundos e causam paralize por 6 segundos nos oponentes afetados.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Thunder punch", type: "Elétrico", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Thunder", type: "Elétrico", desc: "causa dano em uma área ao redor do pokemon, aplicando o efeito paralize por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Electric storm", type: "Elétrico", desc: "causa dano em uma grande área ao redor do pokemon, aplicando o efeito paralyze por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Electric charge", type: "Elétrico", desc: "ativa a cada 20 segundos, aplica bônus de dano no próximo ataque.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mega quick", type: "Lutador", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Thunder wave", type: "Elétrico", desc: "causa dano em uma área frontal, aplicando efeito paralyze por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Body slam", type: "Normal", desc: "causa dano ao oponente e em seu pokemon, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Flash", type: "Elétrico", desc: "ofusca a visão do oponente por 6 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mud shot", type: "Terra", desc: "causa dano ao oponente, aplicando efeito blind por 6 segundos.", 
   aoe: "", blind: "yes", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rollout", type: "Pedra", desc: "causa dano periodicamente ao redor do pokemon durante 10 segundos, aumentando sua velocidade de movimento neste período.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bulldoze", type: "Terra", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Earth power", type: "Terra", desc: "causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Earthquake", type: "Terra", desc: "causa dano em uma área ao redor do pokemon durante 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Defense curl", type: "Normal", desc: "aumenta a defesa do pokemon por 10 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dig", type: "Terra", desc: "o usuário fica invunerável a danos por 2,5 segundos e não pode usar outros ataques durante esse tempo, ao final do ataque todos os efeitos negativos são removidos, tambêm causa dano em área e aplica efeito slow por 10 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Cross poison", type: "Venenoso", desc: "causa dano em uma área ao redor do pokemon, aplicando o efeito poison (x10).", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sand tomb", type: "Terra", desc: "causa dano em uma grande área, aplicando efeito stun por 6 segundos, tambêm é possível acertar mais de um ataque no mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sludge wave", type: "Venenoso", desc: "causa dano em uma área frontal progressivamente, aplicando o efeito blind por 5 segundos, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "yes", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Doubleslap", type: "Normal", desc: "causa dano ao oponente, só pode ser usado em curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sing", type: "Normal", desc: "aplica efeito stun por 10 segundos em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Multi slap", type: "Normal", desc: "causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Great love", type: "Fada", desc: "causa dano em uma grande área ao redor do pokemon, aplicando o efeito confusion por 10 segundos, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "yes", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Healarea", type: "Normal", desc: "o usuário cura a si mesmo e aliados em uma grande área.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Metronome", type: "Normal", desc: "desfere um ataque aleatório.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dazzling gleam", type: "Fada", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Moonblast", type: "Fada", desc: "causa dano em uma grande área ao redor do pokemon, aplica efeito silence por 8 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "yes", freeze: "", knockback: "", },
 
 { move: "Flame circle", type: "Fogo", desc: "causa dano em uma área ao redor do pokemon progressivamente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Flame wheel", type: "Fogo", desc: "causa dano periodicamente ao redor do pokemon durante 10 segundos, aumentando sua velocidade de movimento nesse período.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fire spin", type: "Fogo", desc: "causa dano ao oponente no decorrer de 8 segundos, aplicando o efeito stun por 1,5 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Inferno", type: "Fogo", desc: "causa dano em uma grande área ao redor do pokemon, aplicando o efeito burn (x10), sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hyper voice", type: "Normal", desc: "causa dano em uma área frontal, aplicando o efeito paralyze por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Echoed voice", type: "Normal", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Softboiled", type: "Normal", desc: "cura seu pokemon.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Charm", type: "Fada", desc: "aumenta a defesa do pokemon por 15 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Melody", type: "Normal", desc: "ativa quando o pokemon é atacado fisicamente, aplicando efeito stun por 5 segundos em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rock n roll", type: "Fada", desc: "causa dano progressivamente em uma grande área, aplicando o efeito confusion por 7 segundos, sendo possivel acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "yes", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Absorb", type: "Grama", desc: "causa dano ao oponente e cura o usuário com base no dano causado. só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "yes", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Toxic", type: "Venenoso", desc: "causa dano em uma área progressiva ao redor do pokemon, aplicando efeito poison (x20).", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Lifesteal", type: "Venenoso", desc: "os ataques fisicos causam dano e ao mesmo tempo recupera a vida do usuário com base no dano causado.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "yes", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Spores reaction", type: "Venenoso", desc: "ativa quando o pokemon é atacado fisicamente, após ativada o usuário pode usar um ataque aleatorio: poison powder, stun spore ou sleep powder.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mega drain", type: "Normal", desc: "ativa quando o pokemon é atacado fisicamente, causando dano ao oponente e cura o usuário com base no dano causado.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "yes", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Poison bomb", type: "Venenoso", desc: "causa dano ao oponente e em uma grande área ao redor dele, aplicando efeito poison (x10).", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Poison gas", type: "Venenoso", desc: "ao decorrer de 10 segundos aplica o efeito blind e poison (x20) em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "yes", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Petal dance", type: "Grama", desc: "causa dano em uma área frontal, sendo possível acertar mais de um ataque no mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Slash", type: "Normal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "X scissor", type: "Inseto", desc: "causa dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Psychic", type: "Psiquico", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Signal beam", type: "Inseto", desc: "causa dano em uma grande área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bug buzz", type: "Inseto", desc: "causa o efeito paralyze em uma grande área, dura 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mud slap", type: "Terra", desc: "ataque a distância que cega os oponentes e aplica efeito slow por 10 segundos.", 
   aoe: "", blind: "yes", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Night slash", type: "Noturno", desc: "desfere dois ataques causando dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Pay day", type: "Normal", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Torment", type: "Noturno", desc: "aplica o efeito silence por 6 segundos em uma área ao redor do pokemon e concede bônus de dano ao próximo ataque de seu pokemon.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "yes", freeze: "", knockback: "", },
 
 { move: "Stunning confusion", type: "Psiquico", desc: "ativa quando o pokemon é atacado fisicamente, causando uma sequência de danos em uma área ao redor do pokemon. Existe uma chance de ativar a cada ataque físico do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fury swipes", type: "Normal", desc: "causa vários danos consecutivos em um oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Aqua jet", type: "Água", desc: "o usuário fica invunerável a danos e não pode usar outros ataques durante esse, causa dano em área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Triple kick", type: "Lutador", desc: "causa vários danos consecutivos ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Karate chop", type: "Lutador", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Cross chop", type: "Lutador", desc: "causa dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mega punch", type: "Lutador", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mega kick", type: "Lutador", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Close combat", type: "Lutador", desc: "causa dano ao oponente, só pode ser usado a curta disância. depois de usado ele concede bônus de dano ao próximo ataque de seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Roar", type: "Normal", desc: "amedronta os oponentes, fazendo-os fugirem do seu pokemon e tornando-os incapazes de atacar por 3 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Heat wave", type: "Fogo", desc: "causa dano em uma área frontal, aplicando o efeito silence por 4 segundos e burn (x10).", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "yes", freeze: "", knockback: "", },
 
 { move: "War dog", type: "Normal", desc: "aumenta a defesa e dobra o dano e velocidade do ataque físico por 15 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Extremespeed", type: "Normal", desc: "causa dano ao oponente, deixando o usuário invisível por 1,7 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hypnosis", type: "Psiquico", desc: "aplica o efeito stun por 5 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bubblebeam", type: "Água", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ice beam", type: "Gelo", desc: "causa dano em linha reta, aplicando efeito slow por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Brick break", type: "Lutador", desc: "causa dano em uma área frontal causando o efeito stun nos oponentes por 5 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dynamicpunch", type: "Lutador", desc: "causa dano em uma área progressivamente ao redor do pokemon, sendo possível acertar mais de uma vez o mesmo oponente, aplica efeito confusion por 8 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "yes", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Focus blast", type: "Lutador", desc: "causa dano em uma área frontal, sendo possível atingir mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Restore", type: "Psiquico", desc: "cura o seu pokemon.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Psy pulse", type: "Psiquico", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Calm mind", type: "Psiquico", desc: "aumenta a defesa do pokemon por 8 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Psywave", type: "Psiquico", desc: "causa dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Reflect", type: "Psiquico", desc: "reflete o próximo ataque usado contra o seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Psyusion", type: "Psiquico", desc: "causa dano progressivamente em uma grande área, aplicando efeito confusion por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "yes", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Miracle eye", type: "Psiquico", desc: "após ativado, faz com que o próximo ataque psiquico do usuário consiga acertar um pokemon do tipo noturno. (somente pokemons selvagens)", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Triple punch", type: "Lutador", desc: "causa vários danos consecutivos ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Arm thrust", type: "Lutador", desc: "uma sequência de ataques em uma área frontal que causa dano aos oponentes.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Revenge", type: "Lutador", desc: "causa dano em uma área ao redor do pokemon durante 2 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Vital throw", type: "Lutador", desc: "causa dano em uma área frontal, sendo possível acertar mais de um ataque no mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Foresight", type: "Lutador", desc: "ataques fisicos e tipo lutador acertam pokemon tipo fantasma.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Magical leaf", type: "Grama", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Growth", type: "Normal", desc: "concede bônus de dano no próximo ataque do seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mortal gas", type: "Venenoso", desc: "causa dano em uma grande área ao redor do pokemon, podendo aplicar o efeito poison (x10).", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Liquid ooze", type: "Venenoso", desc: "quando o usuário for atingido por um ataque que rouba life, o ataque vai causar dano ao invés de curar o agressor.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rock throw", type: "Pedra", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rock slide", type: "Pedra", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Stone edge", type: "Pedra", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Falling rocks", type: "Pedra", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Selfdestruction", type: "Normal", desc: "seu pokemon é derrotado assim que usar a autodestruição, causa dano em um grande área ao redor do pokemon, o dano é baseado na vida atual do usuário e ignora a defesa do inimigo.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Stomp", type: "Normal", desc: "causa dano em uma área ao redor do pokemon, aplicando o efeito paralyze por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Lightning horn", type: "Elétrico", desc: "causa vários danos consecutivos ao oponente, causa efeito slow por 10 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Incinerate", type: "Fogo", desc: "causa dano ao oponente, aplicando efeito burn (x5).", 
   aoe: "", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Flare blitz", type: "Fogo", desc: "causa dano em uma área ao redor do pokemon, aplicando o efeito burn (x3).", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Wild charge", type: "Elétrico", desc: "causa dano progressivamente em uma grande área sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Tail whip", type: "Normal", desc: "reduz a defesa do oponente por 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Morning sun", type: "Fogo", desc: "o usuário cura a si mesmo e aliados em uma grande área.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Blue flames", type: "Fogo", desc: "transforma o tipo do pokemon e todos os ataques do tipo fogo para um tipo neutro, recebendo dano normal (x1) de qualquer tipo.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Yawn", type: "Normal", desc: "após 2,5 segundos aplica efeito stun por 10 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Amnesia", type: "Psiquico", desc: "ativa a cada 20 segundos, aplicando o bônus de dano no próximo ataque.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Spark", type: "Elétrico", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Electro ball", type: "Elétrico", desc: "causa dano ao oponente em uma área ao redor do pokemon.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sonicboom", type: "Normal", desc: "causa dano ao oponente, podendo aplicar efeito confusion por 10 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "yes", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Tri attack", type: "Normal", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Flash cannon", type: "Metal", desc: "causa dano em uma grande área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Stickmerang", type: "Voador", desc: "causa dano em uma área frontal progressivamente e depois regressivamente, sendo possível acertar mais de uma vez o mesmo oponente. o usuário fica imóvel por 2 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Stickslash", type: "Voador", desc: "causa dano em uma área circular progressiva ao redor do seu pokemon, deixando-o imóvel por 2 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Stick throw", type: "Voador", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Pluck", type: "Voador", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ice shards", type: "Gelo", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Icy wind", type: "Gelo", desc: "causa dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Aurora beam", type: "Gelo", desc: "causa dano em uma grande área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Blizzard", type: "Gelo", desc: "causa dano em uma grande área ao redor do pokemon, aplica efeito slow por 10 segundos nos oponentes.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rest", type: "Normal", desc: "cura o seu pokemon, porêm o mesmo recebe o efeito stun e tem a defesa aprimorada por 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Sludge", type: "Venenoso", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mud bomb", type: "Venenoso", desc: "causa dano oponente e em uma grande área ao redor dele, aplicando efeito blind por 6 segundos.", 
   aoe: "yes", blind: "yes", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Venoshock", type: "Venenoso", desc: "causa dano em uma grande área ao redor do pokemon, aplicando efeito blind por 6 segundos.", 
   aoe: "yes", blind: "yes", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Acid armor", type: "Venenoso", desc: "o pokemon torna-se invunerável a danos por 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Lick", type: "Normal", desc: "aplica efeito paralyze por 10-15 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Clamp", type: "Água", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shadow ball", type: "Fantasma", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Night shade", type: "Fantasma", desc: "causa dano em uma grande área ao redor do pokemon, aplicando o efeito confusion por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "yes", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Invisible", type: "Fantasma", desc: "o pokemon fica invisível e invunerável a danos por 2,5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Levitate", type: "Fantasma", desc: "o pokemon é imune a danos do tipo terra.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shadow storm", type: "Fantasma", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Nightmare", type: "Fantasma", desc: "causa dano ao oponente, só pode ser usado em um pokemon com o efeito stun.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dark accurate", type: "Fantasma", desc: "após ativado, faz com que o próximo ataque fantasma consiga acertar um pokemon do elemento normal.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shadow punch", type: "Fantasma", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dream eater", type: "Psiquico", desc: "causa dano ao oponente e cura o usuário com base no dano causado. só pode ser usado em um pokemon com efeito stun.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "yes", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Nasty plot", type: "Noturno", desc: "causa dano em uma área ao redor do pokemon e concede bônus no próximo ataque do seu pokemon.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Crabhammer", type: "Água", desc: "causa dano em um pokemon, aplicando o efeito slow por 10 segundos, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Metal claw", type: "Metal", desc: "causa dano em uma área frontal, concede bônus ao próximo ataque do seu pokemon e dobra o dano causado pelos ataques físicos durante 10 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hyper beam", type: "Normal", desc: "causa dano em uma grande área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Guillotine", type: "Normal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Charge beam", type: "Elétrico", desc: "causa dano em linha reta.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Egg bomb", type: "Normal", desc: "causa dano ao oponente e em uma área ao redor dele.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Seed bomb", type: "Grama", desc: "causa dano em uma grande área ao redor do pokemon, curando o usuario com base no dano causado e número de oponentes atingidos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "yes", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Leaf blade", type: "Grama", desc: "causa dano ao oponente e em uma área ao redor dele.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Psyshock", type: "Psiquico", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Wood hammer", type: "Grama", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bonemerang", type: "Terra", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bone club", type: "Terra", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bone rush", type: "Terra", desc: "causa dano em uma grande área progressivamente ao redor do pokemon, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Smack down", type: "Pedra", desc: "após ativado, faz com que o próximo ataque tipo terra consiga acertar um pokemon do tipo voador.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bone spin", type: "Terra", desc: "ativa quando o pokemon é atacado fisicamente, causando dano em uma área circular progressiva ao redor do pokemon, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Triple kick lee", type: "Lutador", desc: "causa vários danos consecutivos ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hi jump kick", type: "Lutador", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Furious legs", type: "Lutador", desc: "aumenta a velocidade de movimento, dobra a velocidade e o dano do ataque físico do pokemon por 15 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Demon kicker", type: "Lutador", desc: "ativa conforme seu pokemon desfere ataques físicos, causando dano ao alvo.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Focus punch", type: "Lutador", desc: "causa dano em uma área frontal, sendo possível atingir mais de uma vez o oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ultimate champion", type: "Lutador", desc: "dobra a velocidade e o dano do ataque físico do pokemon por 15 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Elemental hands", type: "Lutador", desc: "altera o elemento do ataque demon puncher, entre lutador, fantasma, fogo, elétrico e gelo.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Demon puncher", type: "Normal", desc: "ativa conforme seu pokemon desfere ataques físicos, causando dano ao alvo.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Slam", type: "Normal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Squishy licking", type: "Normal", desc: "causa dano em uma área frontal progressivamente, aplicando efeito slow por 20 segundos, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Drill run", type: "Terra", desc: "causa dano em uma área frontal, sendo possível atingir mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Horn drill", type: "Normal", desc: "causa vários danos consecutivos ao oponente, só pode ser usado a curta destância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hammer arm", type: "Lutador", desc: "causa dano em uma área frontal, aplicando o efeito stun por 5 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fissure", type: "Terra", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Protection", type: "Normal", desc: "aumenta a defesa do usuário e aliados durante 15 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Egg rain", type: "Normal", desc: "causa dano em uma grande área ao redor do pokemon, aplicando efeito slow por 15 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Power whip", type: "Grama", desc: "causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dizzy punch", type: "Normal", desc: "causa dano ao oponente, aplicando efeito confusion por 10 segundos, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "yes", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Crunch", type: "Noturno", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sucker punch", type: "Noturno", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Comet punch", type: "Normal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Epicenter", type: "Terra", desc: "causa dano em uma grande área ao redor do pokemon, aplicando efeito paralyze por 8 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Groundshock", type: "Normal", desc: "ativa quando seu pokemon é atacado fisicamente, causa dano em uma área ao redor do seu pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Water ball", type: "Água", desc: "causa dano ao oponente e em uma grande área  ao redor dele.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Smokescreen", type: "Normal", desc: "uma série de pulsos que duram 2 segundos e causam blind por 6 segundos nos oponentes afetados.", 
   aoe: "yes", blind: "yes", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dragon pulse", type: "Dragão", desc: "causa dano em uma área grontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hydro cannon", type: "Água", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dragon rage", type: "Dragão", desc: "ativa quando o pokemon recebe ataques físicos, aumentando a defesa e dobrando o ataque físico do seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Waterfall", type: "Água", desc: "causa dano progressivamente em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Aqua ring", type: "Água", desc: "o pokemon cura-se progressivamente ao longo de 12 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Swift", type: "Normal", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Recover", type: "Normal", desc: "cura o seu pokemon.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Power gem", type: "Pedra", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rapid spin", type: "Água", desc: "o pokemon torna-se invunerável a danos, causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hidropump", type: "Água", desc: "causa dano em uma grande área ao redor do pokemon, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ice punch", type: "Gelo", desc: "causa dano ao oponente, aplicando efeito slow por 10 segundos, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mimic wall", type: "Psiquico", desc: "uma parede ilusória é criada por até 20 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shredder team", type: "Normal", desc: "triplica ou quadriplica o usuário para confundir os oponentes. dura 15 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Team slice", type: "Inseto", desc: "quando shredder team está tivo, causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Swords dance", type: "Normal", desc: "dobra o dano causado pelos ataques físicos durante 15 segundos e concede bônus ao próximo ataque do seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Counter helix", type: "Inseto", desc: "ativa quando seu pokemon é atacado fisicamente, causando dano em uma área ao redor dele.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Lovely kiss", type: "Normal", desc: "aplica efeito paralyze por 10 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Draining kiss", type: "Fada", desc: "causa dano em uma grande área ao redor do pokemon, curando o usuário com base no dano causado e número de oponentes atingidos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "yes", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ice ball", type: "Gelo", desc: "causa dano ao oponente, aplicando efeito freeze por 4,5 segundos. nada é capaz de retirar esse efeito.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "yes", },
 
 { move: "Heart stamp", type: "Psiquico", desc: "causa dano em uma grande área ao redor do pokemon, aplicando o efeito confusion por 10 segundos, sendo possível atingir mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "yes", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Low kick", type: "Lutador", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Electroweb", type: "Elétrico", desc: "causa dano ao oponente ao decorrer de 8 segundos, aplicando efeito stun por 1,5 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mamaragan", type: "Elétrico", desc: "causa dano progressivamente em uma grande área, aplicando efeito slow por 6 segundos e obrigando todos os oponentes a atacar o usuário por 3 segundos. o pokemon não pode se mover enquanto usa esse ataque.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Static", type: "Elétrico", desc: "ativa quando o pokemon é atacado fisicamente, causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "yes", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Smog", type: "Venenoso", desc: "no decorrer de 10 segundos aplica o efeito slow e poison(x20) em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fire punch", type: "Fogo", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sunny day", type: "Fogo", desc: "aplica silence por 5 segundos em uma grande área ao redor do pokemon, removendo os efeitos negativos e concedendo bônus ao próximo ataque do seu pokemon.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "yes", freeze: "", knockback: "", },
 
 { move: "Flame body", type: "Fogo", desc: "ativa quando o pokemon é atacado fisicamente, causando dano em uma área ao redor dele, aplicando efeito burn (x3).", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bind", type: "Normal", desc: "causa dano ao oponente no decorrer de 8 segundos, aplicando efeito stun e slow por 1,5 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bug instinct", type: "Inseto", desc: "revela ilusões em uma área em volta do seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Seismic toss", type: "Inseto", desc: "toda vez que uma passiva for ativa e acertar seu pokemon, o dano será anulado e o agressor receberá dano e efeito stun por 3 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Thrash", type: "Normal", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Splash", type: "Água", desc: "causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dragon tail", type: "Dragão", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ice fang", type: "Gelo", desc: "causa dano ao oponente, aplicando efeito slow por 10 segundos, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Twister", type: "Dragão", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dragon breath", type: "Dragão", desc: "causa dano em uma área frontal, em casos especiais esse ataque pode aplicar efeito paralyze por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rain dance", type: "Água", desc: "aplica silence por 5 segundos em uma grande área ao redor do pokemon, removendo os efeitos negativos e concedendo bônus ao próximo ataque do seu pokemon.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "yes", freeze: "", knockback: "", },
 
 { move: "Powder snow", type: "Gelo", desc: "causa dano em uma área ao redor do pokemon, aplicando o efeito slow por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Follow me", type: "Normal", desc: "obriga todos os oponentes a atacar o usuário por 8 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Transform", type: "Normal", desc: "para usar essa habilidade de order no pokemon que deseja copiar.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Muddy water", type: "Água", desc: "causa dano em uma grande área ao redor do pokemon, aplicando o efeito blind por 6 segundos.", 
   aoe: "yes", blind: "yes", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Thunder fang", type: "Elétrico", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Last resort", type: "Normal", desc: "causa dano progressivamente em uma grande área, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Volt fang", type: "Elétrico", desc: "causa dano ao oponente, o usuário fica invunerável a danos por 1 segundo.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sacred fire", type: "Fogo", desc: "causa dano ao oponente e em uma área ao redor dele, aplicando efeito silence por 5 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "yes", freeze: "", knockback: "", },
 
 { move: "Blaze kick", type: "Fogo", desc: "o usuário move-se até o oponente causando dano.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Overheat", type: "Fogo", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente, aplicando efeito burn (x10).", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Psycho cut", type: "Psiquico", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Zap cannon", type: "Elétrico", desc: "causa dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Focus energy", type: "Normal", desc: "concede bônus ao próximo ataque.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Magic coat", type: "Psiquico", desc: "reflete o próximo ataque usado contra o seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ancient power", type: "Pedra", desc: "causa danao em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rock blast", type: "Pedra", desc: "causa dano em uma grande área ao redor do pokemon, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rock tomb", type: "Pedra", desc: "causa dano ao oponente, aplicando efeito slow por 10 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fossilized shell", type: "Pedra", desc: "o pokemon recebe metade do dano de tipo água.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Giga impact", type: "Normal", desc: "aumenta a velocidade do pokemon por 3 segundos, depois de 2,5 segundos causa dano em uma área ao redor do pokemon, aplicando efeito slow por 4 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Crusher stomp", type: "Normal", desc: "causa dano em uma grande área ao redor do pokemon, aplicando efeito paralyze por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Frost breath", type: "Gelo", desc: "causa dano em uma área frontal, aplicando efeito slow por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Iceshock", type: "Gelo", desc: "causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Frost tornado", type: "Gelo", desc: "causa dano progressivamente em uma grande área. o pokemon não pode se mover enquanto usa esse ataque.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Electro field", type: "Elétrico", desc: "causa dano em uma área ao redor do pokemon, aplicando efeito paralize por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Lightning hell", type: "Elétrico", desc: "Causa dano em uma grande area ao redor do pokemon aplicando o efeito paralize por 15 segundos e concede bônus ao próximo ataque, porém, o usuário perde 20% da vida.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Eruption", type: "Fogo", desc: "o pokemon puxa todos oponentes a sua volta e causa dano em uma área ao redor dele aplicando efeito slow por 8 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Blast burn", type: "Fogo", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hell fire", type: "Fogo", desc: "causa dano progressivamente em uma grande área. o pokemon não pode se mover enquanto usa esse ataque.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dragon claw", type: "Dragão", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Draco meteor", type: "Dragão", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Psystrike", type: "Psiquico", desc: "causa dano progressivamente em uma grande área. o pokemon não pode se mover enquanto usa esse ataque.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Barrier", type: "Psiquico", desc: "o usuário fica imune a danos por 5 segundos, curando qualquer efeito negativo ao final do ataque.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Instant teleportation", type: "Psiquico", desc: "o pokemon fica invunerável a danos por 2,5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Synthesis", type: "Grama", desc: "cura o seu pokemon.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Aromatherapy", type: "Grama", desc: "remove efeitos negativos do seu pokemon e aliados ao redor.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Leaf tornado", type: "Grama", desc: "causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Light screen", type: "Normal", desc: "aumenta a defesa do usuário e aliados, também aumenta a velocidade de movimento, dobra o dano e velocidade de ataque físico e concede bônus no próximo ataque dos aliados por 20 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ingrain", type: "Grama", desc: "cria um campo de sementes por 10 segundos curando os aliados que pisarem nas sementes.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Lava plume", type: "Fogo", desc: "causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Waterfall", type: "Água", desc: "causa dano progressivamente ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Trash", type: "Normal", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Water spout", type: "Água", desc: "causa dano progressivamente em uma grande área.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Struggle bug", type: "Inseto", desc: "causa dano em uma área circular progressiva ao redor do seu pokemon, deixando-o imóvel por 2 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Spider web", type: "Inseto", desc: "causa dano em uma área frontal, aplicando efeito stun por 8 segundos, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Venom gale", type: "Venenoso", desc: "causa dano em uma grande área progressivamente ao redor do pokemon, aplicando o efeito poison (x10), sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Surf", type: "Água", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bright light", type: "Elétrico", desc: "ofusca a visão do oponente por 2 segundos e remove os efeitos negativos do seu pokemon.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fairy wind", type: "Fada", desc: "causa dano em uma grande área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Feather dance", type: "Voador", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Confuse ray", type: "Fantasma", desc: "causa dano ao oponente, aplicando efeito confusion por 10 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "yes", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Astonish", type: "Fantasma", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Tailwind", type: "Voador", desc: "aumenta a velocidade de movimento do usuário por 10 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Predict", type: "Psiquico", desc: "por prever o futuro, o usuário torna-se invunerável a danos por 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Double team", type: "Normal", desc: "duplica o usuário para confundir os oponentes. dura 20 segundos", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Charge", type: "Normal", desc: "concede bônus ao próximo ataque de seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Cotton spore", type: "Grama", desc: "aplica o efeito paralyze por 10 segundos em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Cotton guard", type: "Grama", desc: "concede defesa contra os tipos dragão e grama durante 10 segundos", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Play rough", type: "Fada", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mimic", type: "Normal", desc: "reflete o próximo ataque usado contra o seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rock wrecker", type: "Pedra", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sturdy", type: "Metal", desc: "quando seu pokemon chegar a 1 de vida essa passiva será ativada, fazendo com que o usuário fique invunerável a danos por 6 segundos. após acabar o tempo seu pokemon é derrotado. (sturdy nao funciona na água para sudowoodo e aggron, pois ambos são pedra e recebem dano do ambiente.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Whirlpool", type: "Água", desc: "causa dano ao redor do pokemon durante 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Tongue hook", type: "Água", desc: "puxa o alvo para perto do usuário.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Tongue grap", type: "Água", desc: "causa dano periodicamente, fazendo com que o usuário e o alvo fiquem imóveis e sem poder atacar durante 10 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "U turn", type: "Inseto", desc: "causa dano ao oponente, o usuário fica invunerável a danos por 1 segundo.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shadowave", type: "Noturno", desc: "causa dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dark pulse", type: "Noturno", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Night daze", type: "Noturno", desc: "causa dano em uma grande área ao redor do pokemon, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Psy ball", type: "Psiquico", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Psy impact", type: "Psiquico", desc: "causa dano em uma grande área ao redor do pokemon aplicando efeito blind por 6 segundos.", 
   aoe: "yes", blind: "yes", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Future sight", type: "Psiquico", desc: "o usuário fica imóvel e invunerável a danos por 2 segundos. após esse tempo causa dano progressivamente em uma grande área, aplicando efeito stun por 4 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Zen mind", type: "Normal", desc: "ativa quando o seu pokemon é atacado fisicamente, removendo todos os efeitos negativos sob o usuário.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Cursed hollow", type: "Fantasma", desc: "aplica efeito paralyze por 10 segundos e cria uma ilusão.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Black blow", type: "Fantasma", desc: "sacrifica todas as ilusões criadas e causa dano em uma grande área ao redor do pokemon de acordo com o número de ilusões sacrificadas.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Black box", type: "Fantasma", desc: "sacrifica todas as ilusões criadas e aplica o efeito stun em uma grande área ao redor do pokemon de acordo com o numero de ilusões.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Illusion", type: "Fantasma", desc: "ativa quando o seu pokemon ataca ou é atacado fisicamente, duplicando o usuário para confundir os oponentes. dura 8 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ghost trick", type: "Fantasma", desc: "ao entrar na batalha, cria 4 ilusões.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fear lust", type: "Fantasma", desc: "quando fear é usado irá drenar o medo dos inimigos, causando dano e curando a si mesmo. aumenta a duração do status de fear.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Hidden power", type: "Normal", desc: "o usuário fica invunerável e invisivel por 3 segundos, causa dano em uma grande área ao redor do pokemon, causa efeito de redução de defesa por 8 segundos, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Destiny bond", type: "Fantasma", desc: "após 8 segundos o usuário será derrotado, porêm se o oponente derrotá-lo antes dos 8 segundos, será desferido um dano em uma grande área ao redor do pokemon.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mirror coat", type: "Psiquico", desc: "o pokemon tem 50 % de chance de refletir qualquer ataque desferido contra ele.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Assurance", type: "Noturno", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Gyro ball", type: "Metal", desc: "causa dano em uma área frontal, aplicando o efeito paralyze por 5 segundos, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Iron head", type: "Metal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Heavy slam", type: "Metal", desc: "causa dano em uma área ao redor do pokemon, aplicando efeito knockback", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "yes", },
 
 { move: "Spikes", type: "Terra", desc: "cria um campo de espinhos, causando dano e aplicando efeito stun por 4 segundos em cada oponente atingido.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Stealth rock", type: "Normal", desc: "cria um campo de pedras por 25 segundos, causando dano a cada pokemon atingido.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Take down", type: "Normal", desc: "causa dano em linha reta progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shadow slice", type: "Voador", desc: "ativa quando seu pokemon ataca fisicamente, causando dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Iron defense", type: "Metal", desc: "o pokemon fica invunerável a danos por 4 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Pixilate", type: "Fada", desc: "todos ataques do tipo normal do usuário tornam-se tipo fada.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Minimize", type: "Normal", desc: "faz com que o pokemon fique pequeno, deixando-o invunerável a danos por 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Spike skin", type: "Terra", desc: "causa dano em uma grande área ao redor do pokemon, é ativado quando o pokemon ataca ou é atacado fisicamente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Wing blade", type: "Metal", desc: "causa dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Red fury", type: "Inseto", desc: "desfere dois ataques causando dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Team claw", type: "Inseto", desc: "quando shredder team está ativo, causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Counter claw", type: "Inseto", desc: "ativa quando seu pokemon é atacado fisicamente, causando dano em uma área ao seu redor.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shell attack", type: "Inseto", desc: "causa dano ao oponente, o usuário fica invunerável a danos por 1 segundo.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Megahorn", type: "Inseto", desc: "causa dano em uma área frontal, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bug fighter", type: "Inseto", desc: "aumenta a defesa e velocidade de moviment do pokemon, além de dobrar o dano e velocidade do ataque físico por 15 segundos. qualquer oponente que se aproximar receberá o efeito slow por 3 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Swarm", type: "Lutador", desc: "quando o usuário estiver com menos de 50% do hp, sua força será aumentada em 20%.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Faint attack", type: "Noturno", desc: "causa dano em um pokemon, aplica efeito paralyze por 8 segundos, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shadow claw", type: "Fantasma", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Magnitude", type: "Terra", desc: "causa dano progressivamente em uma grande área, aplicando paralyze por 4 segundos, o usuário não poderá se mover ou usar outro ataque, sua defesa é aumentada durante 5 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Quick feet", type: "Normal", desc: "ao receber qualquer efeito negativo, o pokemon ganha velocidade de movimento enquanto estiver em batalha.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Scald", type: "Água", desc: "ataque em forma de cone, deixa o oponente com status burn.", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Octazooka", type: "Água", desc: "causa dano em uma área frontal, aplicando silence por 8 segundos, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "yes", freeze: "", knockback: "", },
 
 { move: "Present", type: "Normal", desc: "um ataque surpresa que pode curar ou causar dano ao oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bounce", type: "Voador", desc: "o usuário fica invunerável a danos por 3,5 segundos e ganha velocidade de movimento e fica impossibilitado de usar outros ataques durante esse. após o efeito desse ataque remove todos os efeitos negativos e causa dano em uma área ao redor do usuario aplicando efeito slow por 10 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Green guard", type: "Voador", desc: "o pokemon recebe metade do dano de tipo grama.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Steel wing", type: "Metal", desc: "o pokemon fica invunerável a danos, causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dragon dance", type: "Normal", desc: "aumenta a velocidade de movimento, dobra o dano e velocidade do ataque físico e concede bônus ao próximo ataque por 10 segundos, remove todos os efeitos negativos do usuário.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Cannon ball", type: "Pedra", desc: "o pokemon torna-se invunerável a danos, causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Lock on", type: "Normal", desc: "o usuário move-se até o oponente causando dano e aplicando efeito stun por 2,5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Discharge", type: "Elétrico", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Gravity", type: "Psiquico", desc: "o dano causado por certos ataques podem ser aprimorado em oponentes que tenham o elemento ou sub-elemento voador.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Jump kick", type: "Lutador", desc: "causa dano em uma área frontal, sendo possível atingir mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sketch", type: "Normal", desc: "use o 'sketch' (m1, m2, m3, etc. de acordo com o ataque que deseja copiar) em seguida dê order no pokemon que deseja copiar o ataque", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Rolling kick", type: "Lutador", desc: "causa dano em uma grande área ao redor do pokemon, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Counter spin", type: "Lutador", desc: "ativa quando o seu pokemon ataca ou é atacado fisicamente, causando dano em uma área ao seu redor.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Electricity", type: "Elétrico", desc: "ativa quando o pokemon é atacado, causando dano em uma área circular progressiva ao redor do pokemon com chance de aplicar efeito paralyze por 10 segundos, também é possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Lava counter", type: "Fogo", desc: "ativa quando o pokemon é atacado, causando dano em uma área circular progressiva ao redor do pokemon aplicando efeito burn (x3), também é possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Milk drink", type: "Normal", desc: "o usuário cura a si mesmo e aliados em uma grande área.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Heal bell", type: "Normal", desc: "remove efeitos negativos do usuário e seus aliados periodicamente em uma grande área durante 8 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Healing wish", type: "Normal", desc: "o usuário cura a si mesmo e aliados em uma grande área, efeitos negativos também são removidos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Emergency call", type: "Normal", desc: "remove efeitos negativos do pokemon e aliados em uma grande área.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Helping hand", type: "Normal", desc: "aumenta a velocidade de movimento, dobra o dano e velocidade de ataque físico e concede bônus no próximo ataque dos aliados por 20 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sandstorm", type: "Pedra", desc: "aplica blind e slow por 6 segundos em uma grande área ao redor do pokemon, removendo os efeitos negativos do seu pokemon.", 
   aoe: "yes", blind: "yes", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dual chop", type: "Dragão", desc: "causa dois danos consecutivos ao oponente, causando efeito slow por 8 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Frenzy plant", type: "Grama", desc: "causa dano em uma grande área ao redor do pokemon causando efeito stun 2 vezes por 6 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sky uppercut", type: "Lutador", desc: "causa dano em uma área frontal, aplicando o efeito slow por 15 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bulk up", type: "Lutador", desc: "aumenta a defesa e dobra o dano de ataque físico do pokemon por 10 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Double kick", type: "Lutador", desc: "causa dano ao oponente, aplicando efeito stun por 1 segundo, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Protect", type: "Normal", desc: "o pokemon fica invunerável a danos por 6 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Snarl", type: "Noturno", desc: "ao entrar em batalha o pokemon receberá bônus de defesa por 10 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Swift swim", type: "Água", desc: "quando o pokemon utilizar rain dance, ele ganhará velocidade de movimento por 8 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Energy ball", type: "Grama", desc: "causa dano ao oponente. a defesa do oponente é reduzida por 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Water sport", type: "Água", desc: "o pokemon recebe dano 0.5 (inefetivo) de tipo fogo.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Pound", type: "Normal", desc: "causa dano ao oponente, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bamboo spikes", type: "Grama", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Chlorophyll", type: "Grama", desc: "quando o pokemon utilizar sunny day, ele ganhará velocidade de movimento por 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Grassy terrain", type: "Grama", desc: "causa dano em uma grande área ao redor do pokemon, aplicando efeito stun por 8 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Boomburst", type: "Normal", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sky attack", type: "Voador", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Brave bird", type: "Voador", desc: "sacrificando 5% de sua vida atual, o usuário move-se até o oponente causando dano. todos efeitos negativos são removidos e o dano do ataque físico é dobrado por 10 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Guts", type: "Voador", desc: "ao receber qualquer efeito negativo, o pokemon ganha 25% de dano adicional nos ataques enquanto estiver em batalha.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fly", type: "Voador", desc: "o pokemon fica invunerável a danos por 2,5 segundos e ganha velocidade de movimento, nesse período ele não poderá atacar. ao final do efeito do ataque remove qualquer efeito negativo, causa dano em área e aplica efeito silence por 3 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "yes", freeze: "", knockback: "", },
 
 { move: "Swallow", type: "Normal", desc: "o usuário cura a si mesmo e aliados em grande área. o efeito varia conforme o número de stocks acumulados. 1 stock=35% de cura, 2 stock=70% de cura, 3 stock=100% de cura, também concede imunidade a danos por 5 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Stockpile", type: "Normal", desc: "cada vez que stockpile é usado, o usuário acumula um stock (máximo de 3).", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Stored power", type: "Psiquico", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Force palm", type: "Lutador", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },  // breloom
 
 
 //////////
 { move: "Sleep plague", type: "Grama", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },  // breloom
 //////////
 
 { move: "Slack off", type: "Normal", desc: "cura o seu pokemon.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Truant", type: "Normal", desc: "a cada 15 segundos, seu pokemon recebe efeito stun por 4 segundos. após esse efeito o usuário recebe bônus de 2% de ataque, podendo acumular até 20% de bônus.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Leech life", type: "Inseto", desc: "causa dano ao oponente e cura a si próprio com base no dano causado.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "yes", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Substitute", type: "Fantasma", desc: "duplica o usuário para confundir os oponentes. enquanto o usuário fica invisível e invunerável a danos por 6 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Baton pass", type: "Normal", desc: "o pokemon retorna automaticamente para a pokeball transferindo o bônus de velocidade acumulado com o ataque speed boost para o próximo pokemon utilizado.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Speed boost", type: "Normal", desc: "aumenta a velocidade de movimento do seu pokemon a cada 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ninja slice", type: "Inseto", desc: "ativa quando seu pokemon ataca fisicamente, causando dano em uma área frontal.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shadow counter", type: "Fantasma", desc: "ativa quando o seu pokemon é atacado fisicamente, causando dano em uma área ao redor do seu pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Wonder guard", type: "Inseto", desc: "garante imunidade a todos os tipos que não são efetivos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Uproar", type: "Normal", desc: "ativa quando o pokemon é atacado fisicamente, causando dano periodicamente, aplicando slow e roar por alguns segundos. no exploud, uproar é ativado automaticamente a cada 10 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Leftovers", type: "Normal", desc: "cura 1,5% da vida total do pokemon a cada 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Leap strike", type: "Lutador", desc: "o usuário move-se até o oponente causando dano e aplicando efeito slow por 8 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Smellingsalt", type: "Normal", desc: "causa dano ao oponente, aplicando efeito paralyze por 8 segundos, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shadow sphere", type: "Fantasma", desc: "causa dano ao oponente e em uma grande área ao redor dele.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Impale", type: "Metal", desc: "causa dano em uma área frontal progressivamente, aplicando efeito stun por 5 segundos, sendo possível acertar mais de uma vez o mesmo oponente. quando impale for bloqueado pelo boost do oponente, seu cooldown é reduzido.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Spit up", type: "Normal", desc: "causa dano em uma grande área ao redor do pokemon, o dano varia conforme o numero de stocks acumulados. 1 stock=x1 damage, 2 stock=x2 damage, 3 stock=x4 damage.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Fake tears", type: "Normal", desc: "aumenta a velocidade de movimento do usuário e aliados por 10 segundos, durante esse período os oponentes tem ataque reduzido.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Clear pile", type: "Normal", desc: "a cada 5 segundos, se o pokemon ficar fora de batalha, perde todos os stocks acumulados com stockpile.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Metal burst", type: "Metal", desc: "causa dano ao oponente a cada 5 segundos, aplicando efeito stun por 0,5 segundos. duração total do ataque é de 6 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Meteor mash", type: "Metal", desc: "causa dano em uma grande área ao redor do pokemon, aplicando o efeito slow por 15 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Drain punch", type: "Lutador", desc: "causa dano ao oponente e cura o usuário com base no dano causado. só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "yes", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Meditate", type: "Psiquico", desc: "o pokemon fica invunerável a danos por 3 segundos. durante a execução o usuário não pode se mover ou atacar. no final é removido todos os efeitos negativos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Magnetic flux", type: "Elétrico", desc: "aumenta a defesa do usuário e aliados, alêm de aumentar a velocidade do movimento por 20 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sweet kiss", type: "Fada", desc: "causa o efeito confusion por 10 segundos em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "yes", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Thunder wrath", type: "Elétrico", desc: "causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Wish", type: "Normal", desc: "o usuário cura a si mesmo e aliados progressivamente ao longo de 12 segundos em uma grande área.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Volcano shot", type: "Fogo", desc: "causa dano ao oponente, aplicando efeito burn (x3) e slow por 10 segundos.", 
   aoe: "", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Solid rock", type: "Pedra", desc: "o pokemon recebe menor dano de golpes super efetivos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Withdraw", type: "Água", desc: "o pokemon fica invunerável a danos por 5 segundos. durante a execução desse ataque não pode se mover ou atacar.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "White smoke", type: "Normal", desc: "ao decorrer de 10 segundos causa dano e aplica o efeito burn (x6) e slow uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Heatzone", type: "Fogo", desc: "cria um campo de fumaça por 25 segundos, causando dano a cada pokemon atingido.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Teeter dance", type: "Normal", desc: "causa dano progressivamente em uma grande área, aplicando efeito confusion por 2,5 segundos, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "yes", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dragon flight", type: "Dragão", desc: "o usuário move-se até o oponente causando dano e aplicando efeito slow por 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dragon mist", type: "Dragão", desc: "o usuário move-se até o final do ataque tornando-se invunerável a danos durante esse período, causando dano a oponentes em uma área frontal.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Attract", type: "Normal", desc: "o pokemon atrai todos os oponentes a sua vida por 4 segundos, a velocidade de movimento dos oponentes é aumentada por 3 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mirror move", type: "Normal", desc: "reflete o próximo ataque usado contra o seu pokemon e aliados.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Cloud nine", type: "Normal", desc: "remove efeitos negativos dos aliados em uma grande área ao entrar em combate.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Razor wind", type: "Normal", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Taunt", type: "Noturno", desc: "remove efeitos negativos do usuário periodicamente em uma grande área durante 8 segundos. esse ataque também aplica o efeito silence e slow por 4 segundos nos oponentes.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "yes", freeze: "", knockback: "", },
 
 { move: "Toxic boost", type: "Normal", desc: "ativa quando o pokemon recebe um dano do tipo venenoso, concede 50% de bônus de ataque enquanto estiver em batalha.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Immunity", type: "Normal", desc: "o pokemon é imune ao efeito poison.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Poison tail", type: "Venenoso", desc: "causa dano em uma grande área circular progressiva ao redor do seu pokemon, deixando-o imóvel por 2 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Gastro acid", type: "Venenoso", desc: "causa dano em uma área frontal, aplicando o efeito poison (x3), sendo possível atingir mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Venomous gale", type: "Venenoso", desc: "causa pequenos danos, aplicando o efeito paralyze, o pokemon que utiliza esse ataque não pode se mexer ou usar outro ataque durante esse período.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "yes", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shed skin", type: "Venenoso", desc: "remove todos os efeitos negativos do seu pokemon a cada 12 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Vipers fang", type: "Venenoso", desc: "possibilita o pokemon atacar de longa distância, além de seus ataques físicos poderem aplicar efeito poison (x5).", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Extrasensory", type: "Psiquico", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Guard split", type: "Psiquico", desc: "iguala a defesa do usuário com a do alvo fazendo uma média entre as duas defesas.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mud sport", type: "Terra", desc: "causa vários danos consecutivos ao oponente, aplicando o efeito blind por 8 segundos.", 
   aoe: "", blind: "yes", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Heal block", type: "Psiquico", desc: "impossibilita o alvo de usar qualquer tipo de cura (rest, restore, giga drain, absorb, lifesteal, recover, leech seed...) Heal block tambêm impede sturdy. o efeito fica até o adversário ser derrotado.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Grass knot", type: "Grama", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Wring out", type: "Normal", desc: "causa dano ao oponente com base na sua vida atual.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hunter mark", type: "Normal", desc: "o usuário move-se até o oponente e por 8 segundos, cada passo que o inimigo fizer, causará dano.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Crush claw", type: "Normal", desc: "causa dano e reduz a defesa do oponente por 6 segundos, só pode ser usado a curta distância.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Forecast", type: "Normal", desc: "ao entrar em batalha seu pokemon utiliza automaticamente o ataque sunny day e torna-se um pokemon tipo fogo, quando recebe algum ataque tipo água ele utiliza automaticamente o ataque rain dance e torna-se um pokemon tipo água. quando recebe algum ataque terra ou tipo dragão ele utiliza automaticamente o ataque hail e torna-se tipo gelo.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Camouflage", type: "Fantasma", desc: "o pokemon se torna imune a danos por 3 segundos. um caso especial é o kecleon, que utiliza camouflage em uma área ao redor, deixando ele e aliados imunes a danos por 4 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shadow sneak", type: "Fantasma", desc: "o usuário move-se até o final do ataque tornando-se invunerável a danos durante esse período, causa dano aos oponentes em uma área frontal, aplicando o efeito paralyze por 10 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Color change", type: "Normal", desc: "o pokemon torna-se de outro elemento, conforme o ataque recebido.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ominous wind", type: "Fantasma", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Curse", type: "Fantasma", desc: "pelo custo de 10% de hp total do usuário, curse causa vários danos periódicos em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Cursed body", type: "Fantasma", desc: "ativa quando o pokemon é atacado fisicamente, causando efeito silence nos oponentes. também faz com que o ataque curse seja do elemento noturno.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "yes", freeze: "", knockback: "", },
 
 { move: "Insomnia", type: "Fantasma", desc: "o pokemon é imune ao efeito stun.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Hex", type: "Fantasma", desc: "concede invulnerabilidade a danos e aumenta a velocidade de movimento do usuário por 3 segundos, depois de 2,5 segundos causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Justified", type: "Noturno", desc: "ativa quando opokemon recebe dano tipo noturno, concede 50% de bônus enquanto estiver em batalha.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Frost power", type: "Gelo", desc: "causa dano em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Sheer cold", type: "Gelo", desc: "o usuário fica imóvel e invulnerável a danos por 2 segundos. após esse tempo, causa dano progressivamente em uma grande área, aplicando o efeito freeze por 4 segundos. nada é capaz de remover esse efeito.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "yes", knockback: "", },
 
 { move: "Absolute zero", type: "Gelo", desc: "ativa quando o seu pokemon é atacado fisicamente, causando dano em uma área ao redor do pokemon, aplica freeze por 4,5 segundos. nada é capaz de retirar esse efeito.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "yes", knockback: "", },
 
 { move: "Hail", type: "Gelo", desc: "causa dano em uma grande área ao redor do pokemon, aplicando o efeito freeze por 8 segundos. todos os efeitos negativos sobre o usuário são removidos. nada é capaz de retirar esse efeito.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "yes", knockback: "", },
 
 { move: "Outrage", type: "Dragão", desc: "desfere dois ataques em uma grande área ao redor do pokemon. durante o ataque, o usuário tem a defesa e velocidade de movimento aumentadas, porém não pode usar nenhum outro ataque. no final, seu pokemon fica com o efeito confusion por 5 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ground colapse", type: "Terra", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Acrobatics", type: "Voador", desc: "o pokemon salta para trás tornando-se invulnerável a danos, no final do salto todos os efeitos negativos são removidos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Mach punch", type: "Lutador", desc: "o usuário move-se até o final do ataque tornando-se invulnerável e invisível a danos durante esse período. causa dano a oponentes em uma área frontal progressiva.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Magma fist", type: "Fogo", desc: "causa dano em uma área frontal, aplicando o efeito burn (x15) e slow por 15 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Volt kiten", type: "Elétrico", desc: "causa dano em uma área frontal, aplicando o efeito paralyze por 5 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "yes", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Raigoh", type: "Elétrico", desc: "causa dano em uma área ao redor do pokemon, fazendo com que todos os oponentes andem em direções aleatórias por 10 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shield", type: "Pedra", desc: "seu pokemon entra em modo defensivo, perde velocidade de movimento fixando sua direção por tempo ilimitado. quando está ativado, qualquer ataque que atingir a frente terá redução de 80% de dano. ao usar novamente a posição volta ao normal, bem como a velocidade perdendo o bônus da defesa.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ion deluge", type: "Elétrico", desc: "todos ataques físicos, normal ou terra do oponente tornam-se tipo elétrico por 12 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Nuzzle", type: "Elétrico", desc: "o usuário move-se até o final do ataque tornando-se invisível e invulnerável a danos, causa dano ao oponente em uma área frontal, em casos especiais pode causar efeito paralyze por 8 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Volt switch", type: "Normal", desc: "o pokemon do usuário é derrotado no momento que usa volt switch, causando dano no oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Volt absorb", type: "Elétrico", desc: "todo ataque tipo elétrico ao invés de causar dano irá curar seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "yes", silence: "", freeze: "", knockback: "", },
 
 { move: "Magnet rise", type: "Elétrico", desc: "o pokemon recebe dano 0,5 (inefetivo) de tipo terra.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Double hit", type: "Normal", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Crow swarm", type: "Voador", desc: "causa dano em uma grande área ao redor do pokemon, podendo atingir mias de uma vez cada oponente, aplica efeito slow por 6 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Iron spiner", type: "Metal", desc: "causa dano em uma área circular progressiva ao redor do seu pokemon, deixando- o imóvel por 2 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Metal sound", type: "Metal", desc: "causa dano progressivamente em uma grande área, aplicando efeito paralyze por 6 segundos, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Iron body", type: "Metal", desc: "ao entrar em batalha o pokemon torna-se invulnerável a danos por 8 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Bullet punch", type: "Metal", desc: "uma sequência de ataques em uma área frontal que causa dano aos oponentes.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Superpower", type: "Lutador", desc: "ativa quando seu pokemon é atacado fisicamente, causando dano em uma área ao seu redor.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Aura sphere", type: "Lutador", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
////
 { move: "Hone claws", type: "Noturno", desc: "remove os efeitos negativos de seu pokemon e concede bônus ao próximo ataque do seu pokemon.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },  // drapion ou bisharp
////
 { move: "Double cannon", type: "Normal", desc: "aumenta a área de alguns ataques específicos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
////

 { move: "Belch", type: "Venenoso", desc: "causa dano em uma área ao redor do pokemon durante 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 

 { move: "Deadly spikes", type: "Venenoso", desc: "cria um campo de espinhos ao redor do pokemon os oponentes que passarem por esse campo recebem dano e slow.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 

 { move: "Croak hook", type: "Água", desc: "puxa o alvo para perto do usuário, causando o efeito slow por 4 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Vacuum wave", type: "Lutador", desc: "causa dano em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Swamp mist", type: "Venenoso", desc: "cria um campo de fumaça venenosa por 10 segundos, causa dano a cada pokemon atingido e aplica efeito slow.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Anticipation", type: "Lutador", desc: "o pokemon recebe dano 0,5 (inefetivo) de todos os super efetivos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Grass whistle", type: "Grama", desc: "aplica efeito stun por 6 segundos em uma área frontal progressivamente, sendo possível acertar mais de uma vez o mesmo oponente. se esse ataque for bloqueado pelo boost do oponente seu cooldown é reduzido.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Icicle crash", type: "Gelo", desc: "causa dano ao oponente. o dano é aumentado conforme a velocidade atual do alvo.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Snow warning", type: "Gelo", desc: "ao entrar em batalha o pokemon utiliza eo ataque hail que causa dano em uma grande área ao redor do pokemon, aplicando efeito freeze por 5 segundos. todos os efeitos negativos sobre o usuário são removidos. nada é capaz de retirar esse efeito.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Magnet bomb", type: "Metal", desc: "causa dano ao oponente.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Magnet field", type: "Elétrico", desc: "esse ataque é ativado a cada 5 segundos, causa dano em uma área ao redor do pokemon aplicando efeito slow por 5 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Tri vision", type: "Normal", desc: "o seu pokemon seleciona automaticamente até dois alvos adicionais, fazendo com que ele ataque até 3 oponentes em ataques físicos ou com alvo.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 ////////
 { move: "Wake up slap", type: "Lutador", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // electivire ou timburr, ou gurdurr ou conkeldurr
 ////////
 
 ////////
 { move: "Lightning axe", type: "Elétrico", desc: "causa dano em uma área frontal, aplicando o efeito de stun por 6 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // electivire
 ////////
  
 { move: "Serene Happiness", type: "Fada", desc: "esse ataque é ativado a cada 8 segundos, fazendo com que todos os oponentes andem em direçoes aleatórias por 5 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 ////////
 { move: "Shift", type: "Normal", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // glaceon
 ////////
 
 ////////
 { move: "Ice body", type: "Gelo", desc: "ao utilizar hail o pokemon cura 1/3 de sua vida máxima.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "yes", silence: "", freeze: "", knockback: "", }, // glaceon
 ////////
 
 { move: "Zen headbutt", type: "Psiquico", desc: "causa dano e aplica efeito stun por 6 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Power up punch", type: "Lutador", desc: "o usuário move-se até o oponente causando dano e aplicando efeito slow por 3 segundos. depois de usado concede bônus ao próximo ataque.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 /////////
 { move: "Magnet pull", type: "Metal", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // probopass
 /////////
 
 { move: "Spirit world", type: "Fantasma", desc: "após o seu pokemon ser derrotado, ele voltará totalmente recuperado, porém não poderá se mecher ou atacar por 2 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Avalanche", type: "Gelo", desc: "causa dano em uma área ao redor do pokemon aplicando o efeito knockback.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "yes", },
 
 { move: "Ice slider", type: "Gelo", desc: "cria um campo escorregadio por ate 20 segundos e atrai os oponentes por 3 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Dimensional wall", type: "Noturno", desc: "cria uma parede dimensional por 20 segundos, causa dano a cada pokemon atingido e aplica efeito slow por 2 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Ice block", type: "Gelo", desc: "uma parede de gelo é criada por até 20 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Morph", type: "Psiquico", desc: "transforma o pokemon, podendo alterar seu elemento e ataques.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 
 
 { move: "Flame charge", type: "Fogo", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // blitzle zebstrika
 
 { move: "Sand rush", type: "Terra", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // excadrill
 
 { move: "Sand force", type: "Terra", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // excadrill
 
 { move: "Sand field", type: "Terra", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // hippowdon
 
 { move: "Sand stream", type: "Terra", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // hippowdon
 
 { move: "Chip away", type: "Lutador", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // conkeldurr
 
 { move: "Strenght", type: "Lutador", desc: "causa dano ao oponente e em uma grande área ao redor dele, o usuário perde 30% da sua vida atual para utilizar esse ataque.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Belly drum", type: "Fogo", desc: "aumenta a defesa e dobra o dano e velocidade do ataque físico por 20 segundos. depois de usado ele concede b}onus ao próximo ataque. o usuário perde 50% de sua vida máxima para utilizar esse ataque.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Zen mode", type: "Psiquico", desc: "ativa a cada 20 segundos, deixando o pokemon imóvel e invulnerável por 6 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Shell smash", type: "Pedra", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // crustle
 
 { move: "Iron barbs", type: "Metal", desc: "", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // Ferrothorn
 
 { move: "Snow cloak", type: "Gelo", desc: "ao utilizar o ataque hail, o pokemon terá aumentada a velocidade de movimento por 8 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Petal blizzard", type: "Grama", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Payback", type: "Noturno", desc: "causa dano em linha reta, aplicando efeito fear por 2 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Own tempo", type: "Normal", desc: "O pokemon é imune ao efeito confusion.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Compass slash", type: "Metal", desc: "", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, // bisharp
 
 { move: "Poison spore", type: "Venenoso", desc: "ativa quando o seu pokemon ataca ou é atacado fisicamente, aplica efeito poison (x20) em uma área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "yes", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Final gambit", type: "Lutador", desc: "causa dano em uma grande área ao redor do pokemon.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Kinesis", type: "Psiquico", desc: "causa múltiplos danos em uma área ao redor do pokemon, aplica efeito blind por 5 segundos.", 
   aoe: "yes", blind: "yes", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Explosion", type: "Normal", desc: "seu pokemon é derrotado no momento em que usa Explosion, causa dano em uma grande área ao redor do pokemon, esse dano é baseado na vida corrente do usuário ignorando a defesa do inimigo.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Regenerator", type: "Água", desc: "ao utilizar o ataque withdraw o pokemon irá curar 1/3 do seu hp máximo.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Snatch", type: "Noturno", desc: "transfere ao oponente todos status negativos que o usuário está sofrendo por 10 segundos.", 
   aoe: "", blind: "yes", buff: "", burn: "", confusion: "yes", damage: "", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "yes", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Shadow tag", type: "Fantasma", desc: "causa dano em uma grande área ao redor do pokemon obrigando todos os oponentes a atacar o usuário por 15 segundos. Shadow tag concede imunidade a poison para seus alvos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Stone pulse", type: "Pedra", desc: "ativa quando o pokemon é atacado fisicamente, causa dano em uma área ao redor dele.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Giant force", type: "Pedra", desc: "todos ataques tipo terra se tornam tipo pedra.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Synchronoise", type: "Psiquico", desc: "causa vários danos consecutivos ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Warping reality", type: "Fantasma", desc: "duplica o usuário para confundir os oponentes. Enquanto o usuário fica invisível e invunerável a danos por 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Hypnotist", type: "Psiquico", desc: "ao invés de causar o efeito confusion, ataques do usuário causam STUN. Alguns ataques terão efeito de duração reduzida.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Flash kick", type: "Dragão", desc: "o usuário move-se até o final do ataque, causando dano aos oponentes em uma área frontal.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Low sweep", type: "Lutador", desc: "causa dano em uma área frontal, aplicando efeito stun por 2 segundos. dobra o dano causado pelos ataques fisicos durante 4 segundos. Esse ataque só funciona quando demon kicker é ativado.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Detect", type: "Lutador", desc: "o pokemon fica invunerável a danos por 5 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Quick guard", type: "Lutador", desc: "o pokemon fica invunerável a danos por 2 segundos e tem a velocidade de movimento aumentada por 3 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Vine grap", type: "Grama", desc: "causa dano fazendo com que o usuário e o alvo fiquem imóveis e sem poder atacar durante 5 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", },
 
 { move: "Parental bond", type: "Normal", desc: "todo ataque causado por kangaskhan é usado novamente por seu filhote depois de 1.5 segundos. além disso todo ataque lutador e terra são transformados em tipo normal.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Stampede", type: "Normal", desc: "causa dano em uma grande área, aplicando o efeito slow ou paralyze por 5 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "yes", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Eating grapefruit", type: "Normal", desc: "cura o seu pokemon, porém o mesmo recebe o efeito stun por 5 segundos.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "yes", silence: "", freeze: "", knockback: "", }, 
 
 
 
 { move: "Sleep plague", type: "Grama", desc: "causa efeito sleep em uma grande área, dura 6 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Web rain", type: "Inseto", desc: "causa dano em uma grande área ao redor do pokemon, aplicando efeito stun por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Split", type: "Normal", desc: "multiplica o usuario para confundir os oponentes. dura 10 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Unown strike", type: "Normal", desc: "quando split esta ativo, causa dano ao oponente.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Phantom force", type: "Fantasma", desc: "o pokemon e seus aliados ficam invulneráveis a danos e invisíveis por 5 segundos. é concedido bônus de ataque ao seu pokemon e aliados.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Autotomize", type: "Metal", desc: "aumenta a velocidade de movimento do pokemon por 8 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Intimidate", type: "Normal", desc: "ao entrar em combate o pokemon faz com que seus oponentes tenham o ataque reduzido por 10 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Fire fist", type: "Fogo", desc: "causa vários danos consecutivos ao oponente, causando efeito stun por 1 segundo. o usuário não poderá se mover por 1 segundo.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "yes", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Disarming voice", type: "Fada", desc: "causa dano em uma área frontal, causando efeito paralyze por 10 segundos.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "yes", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Misty terrain", type: "Normal", desc: "remove os efeitos negativos do usuário e aliados periodicamente em uma grande área, concede defesa contra tipo dragão por 8 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Magic bounce", type: "Pedra", desc: "seu pokemon entra em um modo defensivo, perdendo velocidade de movimento, porêm fixando sua direção por tempo ilimitado. quando está com magic bounce ativado, qualquer ataque que o atingir pela frente terá redução de 90% de dano e o usuário terá o ataque fisico dobrado. quando usado novamente, bounce desfixa sua posição, voltando para sua velocidade original e perdendo o bonus. se o usuario for atingido pelas costas, será penalizado com efeito stun por 0.4 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Afraid of needles", type: "Normal", desc: "após seu pokemon ser derrotado, ele voltará totalmente regenerado, porem não poderá se mexer ou atacar por 3 segundos.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Mist", type: "Gelo", desc: "cria um campo de névoa que ofusca a visão dos oponentes por 6 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Sacred breath", type: "Dragão", desc: "ativa quando o pokemon é atacado fisicamente, causando dano em uma área ao redor dele.", 
   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Circle throw", type: "Lutador", desc: "causa dano em uma grande área ao redor do pokemon, aplica efeito stun por 5 segundos e impede qualquer tipo de movimentação do adversário.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Mind reader", type: "Normal", desc: "remove todos os efeitos negativos que afetam o pokemon e concede um bonus de dano para o proximo ataque.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "yes", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Compound eyes", type: "Inseto", desc: "o pokemon usuário quando usar spider web possui mais chances de causar stun no oponente.", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "yes", 
   healing: "", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Baby doll eyes", type: "Fada", desc: "causa dano em uma grande área ao redor do pokemon, aplicando efeito silence por 8 segundos. ao ser utilizado, aumenta a velocidade de movimento do pokemon por 12 segundos.", 
   aoe: "yes", blind: "", buff: "yes", burn: "", confusion: "", damage: "yes", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
   healing: "", silence: "yes", freeze: "", knockback: "", }, 
 
 { move: "Rain dish", type: "Água", desc: "Ao utilizar o ataque Rain dance o usuário irá curar 33% do HP total", 
   aoe: "", blind: "", buff: "yes", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "yes", slow: "", stun: "", passive: "yes", 
   healing: "yes", silence: "", freeze: "", knockback: "", }, 
 
 { move: "Air vortex", type: "Voador", desc: "o pokemon puxa todos os oponentes a sua volta, causando pequenos danos, aplicando efeito stun, a duração é de 10 segundos e o pokemon que utiliza esse ataque não pode se mover ou atacar durante esse periodo.", 
   aoe: "yes", blind: "", buff: "", burn: "", confusion: "", damage: "yes", debuff: "yes", lifesteal: "", 
   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "yes", passive: "", 
   healing: "", silence: "", freeze: "", knockback: "", }

   
// { move: "", type: "", desc: "", 
//   aoe: "", blind: "", buff: "", burn: "", confusion: "", damage: "", debuff: "", lifesteal: "", 
//   target: "", nevermiss: "", paralyze: "", poison: "", self: "", slow: "", stun: "", passive: "", 
//   healing: "", silence: "", freeze: "", knockback: "", } 
 
]





//////////// FUNÇÃO PARA EXIBIÇÃO DO MAPA /////////////////////////////////////////
var Markers = {
    fn: {
        addMarkers: function() {
            var target = $('#image-wrapper');
            var data = target.attr('data-captions');
            var numero = target.attr('data-numero');
            var nome = target.attr('data-nome');
            var captions = $.parseJSON(data);
            var coords = captions.coords;

            for (var i = 0; i < coords.length; i++) {
                var obj = coords[i];
                var top = obj.top;
                var left = obj.left;
                var text = obj.text;
    var numero = $('#image-wrapper').attr('data-numero');
    var nome = $('#image-wrapper').attr('data-nome');

                $('<span title ="'+nome+'" class="marker pokedex pokedex-'+numero+'"/>').css({
                    top: top+'%',
                    left: left+'%'
                }).html('<span class="blink-eff"><i class="fa fa-map-marker"/></span><span class="caption">' + text + '</span>').
                appendTo(target);

            }
        },
        showCaptions: function() {
            //$('span.marker').live('click', function() {
   $('span.marker').click(function() {
                var $marker = $(this),
                    $caption = $('span.caption', $marker);
                if ($caption.is(':hidden')) {
                    $caption.slideDown(300);

                } else {
                    $caption.slideUp(300);

                }

            });

        }
    },

    init: function() {
        this.fn.addMarkers();
        this.fn.showCaptions();

    }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CRIA ARRAY INICIAL DAS MEDIAS
mediasArray = [];




// PLUGIN MODIFICA LAYOUT DE EXIBIÇÃO DE NUMEROS (ADICIONA PONTO A CADA 3 CASAS DECIMAIS) formato ex: //$(".modal-body .valornpc b").digits();
$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") ); 
    })
}



// Carregar api do facebook a cada load do modal
function loadAPI() {
    //var js = document.createElement('script');
    //js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.9&appId=120984261834880";
    //document.body.appendChild(js);
    FB.XFBML.parse(document.getElementById('fb-like-in'));
    FB.XFBML.parse(document.getElementById('modal-pokes-comentarios'));
 RW_Async_Init(document.getElementById('rating-modal'));
}

// FUNÇÂO CRIA LE E DELETA COOKIES
function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    createCookie(name,"",-1);
}



// FUNÇÂO CRIA E LE ID UNICO PRO DISPOSITIVO device id
uuid=function(){
 var u = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
 function(c) {
  var r = Math.random() * 16 | 0,
  v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
 });
 return u;
}
getDeviceId = function(){
 var current = window.localStorage.getItem("_DEVICEID_")
 if (current) return current;
 var id = uuid();
 window.localStorage.setItem("_DEVICEID_",id);   
 return id;
}
document.getElementById("deviceid").innerHTML=getDeviceId();






// FUNÇÃO CENTRALIZAR POP-UP DOS COMPARTILHAMENTOS
function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}




$('[data-toggle="modal"]').tooltip();
$('[data-toggle="tooltip"]').tooltip();


     $(".openNav.butao.dicao").tooltip().eq(0).tooltip('show').tooltip('disable').one('mouseout', function() {
         $(".openNav.butao.dicao").tooltip('enable');
     });

     setTimeout(function() {
        $(".openNav.butao.dicao").tooltip().eq(0).tooltip('hide').tooltip('enable');
     }, 5000);
  

     $("#search").tooltip().eq(0).tooltip('show').tooltip('disable').one('mouseout', function() {
         $("#search").tooltip('enable');
     });

     setTimeout(function() {
        $("#search").tooltip().eq(0).tooltip('hide').tooltip('enable');
     }, 5000);


// ocultar div parent ao click
function ocultarParentDiv() {
  $('#image-wrapper').css('display', 'none');
}



// CRIA ARRAY INICIAL DOS ITENS
lootsArray = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CRIA TABELA INICIAL 
function criarTablePrincipal() {

 var x = readCookie('search');
 if (x) {
        $(".last-search").html("Ultima pesquisa: <a href='#container-media' data-search='"+x+"' class='filtrar'>"+x+"</a>");
 }
 
 
  text = "<div id='ourHolder' class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
  var opt = "<select class='filtrado-toposidebar selectpicker' data-header='Faça sua busca abaixo:' data-live-search='true' data-size='auto' data-style='btn-primary' data-width='100%' id='mySelect' title='Buscar Pokemon...'>";
  fLen = pokesarray.length
  for (i = 0; i < fLen; i++) {
  
   var myPokeNum = pokesarray[i].numero;
   var myPokeNome = pokesarray[i].nome;
   var myPokeLevel = pokesarray[i].level;
   
   var myPokeClan1 = pokesarray[i].clan1;
   var myPokeClan2 = pokesarray[i].clan2;
   var myPokeTipo1 = pokesarray[i].tipo1;
   var myPokeTipo2 = pokesarray[i].tipo2;
   
   var myPokeBall1 = pokesarray[i].ball1;
   var myPokeBall2 = pokesarray[i].ball2;
   
   var myPokeRegiao = pokesarray[i].regiao;
   var myPokeGeracao = pokesarray[i].geracao;
   var myPokeDificuldade = pokesarray[i].dificuldade;
   
   var myPokeXpCaught = pokesarray[i].xpcaught;
   var myPokePriceNPC = pokesarray[i].pricenpc;
   
   var myPokeShiny = pokesarray[i].shiny;
   var myPokeFast = pokesarray[i].fast;
   var myPokeHeavy = pokesarray[i].heavy;
   
   var myPokePreEvo2 = pokesarray[i].preevo2;
   var myPokePreEvo1 = pokesarray[i].preevo1;
   var myPokeEvo1 = pokesarray[i].evo1;
   var myPokeEvo2 = pokesarray[i].evo2;
   
   var myPokeNPreEvo2 = pokesarray[i].npreevo2;
   var myPokeNPreEvo1 = pokesarray[i].npreevo1;
   var myPokeNEvo1 = pokesarray[i].nevo1;
   var myPokeNEvo2 = pokesarray[i].nevo2;
   
   var myPokeMapas = pokesarray[i].mapas;
   var myPokeVIP = pokesarray[i].vip;
   
   var myPokeEvolveStone = pokesarray[i].evoStone;
   var myPokeBoost = pokesarray[i].boost;
   var myPokeBoostStone = pokesarray[i].booStone;
   var myPokeHabilidades = pokesarray[i].habilidades;
  
   var myPokeMoves = pokesarray[i].moves;
   
   var myPokeLoots = pokesarray[i].loots;
  
    
    if (myPokeDificuldade != "Sem sistema" && myPokeDificuldade != "Dimensional zone") {
      if (myPokePriceNPC <= 3000) {
   
       var pbMedia = Math.ceil(myPokePriceNPC * 0.3 / 2) ;
       var gbMedia = Math.ceil(myPokePriceNPC * 1 / 10);
       var sbMedia = Math.ceil(myPokePriceNPC * 1 / 28);
       var ubMedia = Math.ceil(myPokePriceNPC * 1.5  / 90);
     
       var beMedia = Math.ceil(myPokePriceNPC * 1.05 / 90);
   
      } else {
       var pbMedia = Math.ceil(myPokePriceNPC * 0.3 / 2 / 10) * 10 ;
       var gbMedia = Math.ceil(myPokePriceNPC * 1 / 10 / 10) * 10 ;
       var sbMedia = Math.ceil(myPokePriceNPC * 1 / 28 / 10) * 10 ;
       var ubMedia = Math.ceil(myPokePriceNPC * 1.5  / 90 / 10) * 10 ;
   
       var beMedia = Math.ceil(myPokePriceNPC * 1.05 / 90 / 10) * 10 ;
      }
    } else {
       var pbMedia = " " ;
       var gbMedia = " " ;
       var sbMedia = " " ;
       var ubMedia = " " ;
    
       var beMedia = " " ;
   }
   
  if (myPokeNome === "Elekid" || myPokeNome === "Magby") {
  
       var pbMedia = Math.ceil(myPokePriceNPC * 0.3 / 2 / 10*1.9) * 10 ;
       var gbMedia = Math.ceil(myPokePriceNPC * 1 / 10 / 10*1.9) * 10 ;
       var sbMedia = Math.ceil(myPokePriceNPC * 1 / 28 / 10*1.9) * 10 ;
       var ubMedia = Math.ceil(myPokePriceNPC * 1.5  / 90 / 10*1.9) * 10 ;
   
       var beMedia = Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.9) * 10 ;

  }
   
  if (myPokeNome === "Bagon" || myPokeNome === "Lanturn" || myPokeNome === "Pinsir") {
  
   var pbMedia = Math.ceil(myPokePriceNPC * 0.3 / 2*2) ;
   var gbMedia = Math.ceil(myPokePriceNPC * 1 / 10*2);
   var sbMedia = Math.ceil(myPokePriceNPC * 1 / 28*2);
   var ubMedia = Math.ceil(myPokePriceNPC * 1.5  / 90*2);
 
   var beMedia = Math.ceil(myPokePriceNPC * 1.05 / 90*2);

  }

  if (myPokeNome === "Tentacruel" || myPokeNome === "Exeggutor") {
  
   var pbMedia = Math.ceil(myPokePriceNPC * 0.3 / 2*1.5) ;
   var gbMedia = Math.ceil(myPokePriceNPC * 1 / 10*1.5);
   var sbMedia = Math.ceil(myPokePriceNPC * 1 / 28*1.5);
   var ubMedia = Math.ceil(myPokePriceNPC * 1.5  / 90*1.5);
 
   var beMedia = Math.ceil(myPokePriceNPC * 1.05 / 90*1.5);

  }


  if (myPokeNome === "Machamp") {
  
   var ubMedia = Math.ceil(myPokePriceNPC * 1.85  / 90);
   var beMedia = Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10;


   //$(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.85  / 90 / 10) * 10 );
   //$(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10 );

  }
  
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ADICIONA ELEMENTO MEDIA NO ARRAY DAS MEDIAS  mediasArray = [];
 mediasArray.push({'Nome' : myPokeNome, 
     'Numero': myPokeNum, 
     'MediaPB': Math.ceil(myPokePriceNPC * 0.3 / 2 / 10) * 10, 
     'MediaGB': Math.ceil(myPokePriceNPC * 1 / 10 / 10) * 10, 
     'MediaSB': Math.ceil(myPokePriceNPC * 1 / 28 / 10) * 10, 
     'MediaUB': Math.ceil(myPokePriceNPC * 1.5  / 90 / 10) * 10, 
     'MediaBE': Math.ceil(myPokePriceNPC * 4  / 90 / 10) * 10
    });
  
    text += "<div data-toggle='modal' data-numero='" + myPokeNum + "' data-nome='" + myPokeNome + "' data-habilidades='" + myPokeHabilidades + "' data-boost='" + myPokeBoost + "' data-boostone='" + myPokeBoostStone + "' data-evostone='" + myPokeEvolveStone + "' data-clan1='" + myPokeClan1 + "' data-clan2='" + myPokeClan2 + "' data-tipo1='" + myPokeTipo1 + "' data-tipo2='" + myPokeTipo2 + "' data-level='" + myPokeLevel + "' data-ball1='" + myPokeBall1 + "' data-ball2='" + myPokeBall2 + "' data-regiao='" + myPokeRegiao + "' data-geracao='" + myPokeGeracao + "' data-dificuldade='" + myPokeDificuldade + "' data-xpcaught='" + myPokeXpCaught + "' data-pricenpc='" + myPokePriceNPC + "' data-shiny='" + myPokeShiny + "' data-fast='" + myPokeFast + "' data-heavy='" + myPokeHeavy + "' data-preevo2='" + myPokePreEvo2 + "' data-preevo1='" + myPokePreEvo1 + "' data-evo1='" + myPokeEvo1 + "' data-evo2='" + myPokeEvo2 + "' data-npreevo2='" + myPokeNPreEvo2 + "' data-npreevo1='" + myPokeNPreEvo1 + "' data-nevo1='" + myPokeNEvo1 + "' data-nevo2='" + myPokeNEvo2 + "' data-mapas='" + myPokeMapas + "' data-moves='" + myPokeMoves + "' data-loots='" + myPokeLoots + "' data-moves='" + myPokeMoves + "' data-mediapb='"+pbMedia+"' data-mediagb='"+gbMedia+"' data-mediasb='"+sbMedia+"' data-mediaub='"+ubMedia+"' data-mediabe='"+beMedia+"' data-vip='"+myPokeVIP+"' data-target='.bs-example-modal' class='item " + myPokeDificuldade + " " + myPokeNome + " num" + myPokeNum + " gera" + myPokeGeracao + " lvl" + myPokeLevel + " " + myPokeTipo1.replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[íìî]/g,'i').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').replace(/[ÁÀÂÃ]/g,'A').replace(/[ÉÈÊ]/g,'E').replace(/[ÍÌÎ]/g,'I').replace(/[ÓÒÔÕ]/g,'O').replace(/[ÚÙÛ]/g,'U') + " " + myPokeTipo2.replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[íìî]/g,'i').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').replace(/[ÁÀÂÃ]/g,'A').replace(/[ÉÈÊ]/g,'E').replace(/[ÍÌÎ]/g,'I').replace(/[ÓÒÔÕ]/g,'O').replace(/[ÚÙÛ]/g,'U') + " " + myPokeClan1 + " " + myPokeClan2 + " "+myPokeMoves+" "+myPokeLoots+" ";
   if (myPokeBall1 !== 'Saffariball') {
    if (myPokeTipo1 === 'Grama' || myPokeTipo2 === 'Grama' || myPokeTipo1 === 'Venenoso' || myPokeTipo2 === 'Venenoso') {
     text += "Janguruball ";
    }
    if (myPokeTipo1 === 'Água' || myPokeTipo2 === 'Água' || myPokeTipo1 === 'Inseto' || myPokeTipo2 === 'Inseto') {
     text += "Netball ";
    }
    if (myPokeTipo1 === 'Voador' || myPokeTipo2 === 'Voador' || myPokeTipo1 === 'Gelo' || myPokeTipo2 === 'Gelo') {
     text += "Soraball ";
    }
    if (myPokeTipo1 === 'Fogo' || myPokeTipo2 === 'Fogo' || myPokeTipo1 === 'Terra' || myPokeTipo2 === 'Terra') {
     text += "Maguball ";
    }
    if (myPokeTipo1 === 'Noturno' || myPokeTipo2 === 'Noturno' || myPokeTipo1 === 'Fantasma' || myPokeTipo2 === 'Fantasma') {
     text += "Moonball ";
    }
    if (myPokeTipo1 === 'Elétrico' || myPokeTipo2 === 'Elétrico' || myPokeTipo1 === 'Metal' || myPokeTipo2 === 'Metal') {
     text += "Tinkerball ";
    }
    if (myPokeTipo1 === 'Lutador' || myPokeTipo2 === 'Lutador' || myPokeTipo1 === 'Pedra' || myPokeTipo2 === 'Pedra') {
     text += "Duskball ";
    }
    if (myPokeTipo1 === 'Psiquico' || myPokeTipo2 === 'Psiquico' || myPokeTipo1 === 'Normal' || myPokeTipo2 === 'Normal') {
     text += "Yumeball ";
    }
    if (myPokeTipo1 === 'Dragão' || myPokeTipo2 === 'Dragão' || myPokeTipo1 === 'Fada' || myPokeTipo2 === 'Fada') {
     text += "Taleball ";
    }
   } else {
    text += "Saffariball ";
   }
   
   if (myPokeBall1 === 'Masterball') {
    text += "Masterball ";
   }
   if (myPokeShiny === 'yes') {
    text += "Shiny "+myPokeNome+" ";
   }
   if (myPokeHeavy === 'yes') {
    text += "Heavy ";
   }
   if (myPokeFast === 'yes') {
    text += "Fast ";
   }
   
   if (myPokeMoves === 'no') {
    text += "no-dex ";
   }
   if (myPokeMapas === 'no') {
    text += "no-map ";
   }
   if (myPokeVIP === 'no') {
    text += "acc-free ";
   }
   if (myPokeVIP === 'yes') {
    text += "acc-vip ";
   }
    text += "col-xs-4 col-sm-4 col-md-3 col-lg-3 hand' data-original-title='Ver informações sobre " + myPokeNome + "' data-placement='top'>";
   text += "<div class='iitem-inner'>";
   text += "<div class='id col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
    text += "<span class='number-prefix col-xs-12 col-sm-12 col-md-4 col-lg-4'>" + myPokeNum + "</span>";
    text += "<h5 class='col-xs-12 col-sm-12 col-md-8 col-lg-8'>" + myPokeNome + "</h5>";
   text += "</div>";
   text += "<div class='pokedex-capa figure col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
    text += "<div class='img-out'>";
     text += "<div class='img-in background pokedex pokedex-" + myPokeNum + "'>";
  

    if (myPokeShiny !== 'no') {
      text += "<div class='shiny-container shiny-" + myPokeShiny + "' title='possui shiny/mega ou outra forma'></div>";
    } else {
      text += "<div class='shiny-container shiny-" + myPokeShiny + "'></div>";
    }
    
          text += "<div class='fast-heavy-outter'>";
    if (myPokeHeavy === 'yes') {
   text += "<div class='heavy-container heavy-" + myPokeHeavy + "' title='Heavy'></div>";
    }
    if (myPokeFast === 'yes') {
   text += "<div class='fast-container fast-" + myPokeFast + "' title='Fast'></div>";
    }
          text += "</div>";
    
   text += "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 level level-" + myPokeLevel + " " + myPokeLevel + "'>Level: " + myPokeLevel + "</div>";

    text += "</div>";
    text += "</div>";
   text += "</div>";
   
   text += "<div class='notch-collectibles-small col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
    text += "<div class='collectibles-wrapper col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
     text += "<div class='collectibles-collection balls col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
if (myPokeBall1 !== 'Saffariball' && myPokeDificuldade !== 'Não capturável' && myPokeBall1 !== 'Masterball') {
if (myPokeLevel <= 30 && myPokeDificuldade !== 'Dimensional zone') {
 if (myPokePriceNPC <= 12000) {
   text += "<div title='"+pbMedia+" Pokeball' class='pokeball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";

   text += "<div title='"+gbMedia+" Greatball' class='greatball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";

   text += "<div title='"+sbMedia+" Superball' class='superball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
 } 
}

else if (myPokeLevel > 30 && myPokeLevel <= 60 && myPokeDificuldade !== 'Dimensional zone') {
 if (myPokePriceNPC <= 10000) {
   text += "<div title='"+gbMedia+" Greatball' class='greatball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
   text += "<div title='"+sbMedia+" Superball' class='superball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
 }
else if (myPokePriceNPC <= 15000) {
   text += "<div title='"+sbMedia+" Superball' class='superball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
}
}

else if (myPokeLevel > 60 && myPokeLevel <= 70 && myPokeDificuldade !== 'Dimensional zone') {
 if (myPokePriceNPC <= 15000) {
   text += "<div title='"+sbMedia+" Superball' class='superball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
 }
}

text += "<div title='"+ubMedia+" Ultraball' class='ultraball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";

if (myPokeHeavy === 'yes') {
 text += "<div title='"+beMedia+" Heavyball' class='heavy col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
}
if (myPokeFast === 'yes') {
 text += "<div title='"+beMedia+" Fastball' class='fast col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
}
        text += "<div title='";
   text += ""+beMedia+" ";
   if (myPokeTipo1 === 'Grama' || myPokeTipo1 === 'Venenoso') {
    text += "Janguruball ";
   }
   if (myPokeTipo1 === 'Água' || myPokeTipo1 === 'Inseto') {
    text += "Netball ";
   }
   if (myPokeTipo1 === 'Voador' || myPokeTipo1 === 'Gelo') {
    text += "Soraball ";
   }
   if (myPokeTipo1 === 'Fogo' || myPokeTipo1 === 'Terra') {
    text += "Maguball ";
   }
   if (myPokeTipo1 === 'Noturno' || myPokeTipo1 === 'Fantasma') {
    text += "Moonball ";
   }
   if (myPokeTipo1 === 'Elétrico' || myPokeTipo1 === 'Metal') {
    text += "Tinkerball ";
   }
   if (myPokeTipo1 === 'Lutador' || myPokeTipo1 === 'Pedra') {
    text += "Duskball ";
   }
   if (myPokeTipo1 === 'Psiquico' || myPokeTipo1 === 'Normal') {
    text += "Yumeball ";
   }
   if (myPokeTipo1 === 'Dragão' || myPokeTipo1 === 'Fada') {
    text += "Taleball ";
   }
  text += "' class='be be1 " + myPokeTipo1 + " col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
  
        text += "<div title='";
   text += ""+beMedia+" ";
   if (myPokeTipo2 === 'Grama' || myPokeTipo2 === 'Venenoso') {
    text += "Janguruball ";
   }
   if (myPokeTipo2 === 'Água' || myPokeTipo2 === 'Inseto') {
    text += "Netball ";
   }
   if (myPokeTipo2 === 'Voador' || myPokeTipo2 === 'Gelo') {
    text += "Soraball ";
   }
   if (myPokeTipo2 === 'Fogo' || myPokeTipo2 === 'Terra') {
    text += "Maguball ";
   }
   if (myPokeTipo2 === 'Noturno' || myPokeTipo2 === 'Fantasma') {
    text += "Moonball ";
   }
   if (myPokeTipo2 === 'Elétrico' || myPokeTipo2 === 'Metal') {
    text += "Tinkerball ";
   }
   if (myPokeTipo2 === 'Lutador' || myPokeTipo2 === 'Pedra') {
    text += "Duskball ";
   }
   if (myPokeTipo2 === 'Psiquico' || myPokeTipo2 === 'Normal') {
    text += "Yumeball ";
   }
   if (myPokeTipo2 === 'Dragão' || myPokeTipo2 === 'Fada') {
    text += "Taleball ";
   }
        text += "' class='be be2 " + myPokeTipo2 + " col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
} else {
       if (myPokeBall1 === 'Saffariball') {
         text += "<div title='";
         if (myPokeNome === "Nidoqueen" || myPokeNome === "Nidoking") {
           text += "600 ";
         }
         else if (myPokeNome === "Lickitung") {
           text += "1000 ";
         }
         text += "Saffariball' class='saffariball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
         text += "";
       }
       if (myPokeDificuldade === 'Não capturável') {
         text += "<span class='col-xs-12 col-sm-12 col-md-12 col-lg-12 cantcaught'>Can't caught</span>";
       }
       if (myPokeBall1 === 'Masterball') {
         text += "<span class='col-xs-12 col-sm-12 col-md-12 col-lg-12 mbb' title='so poderá ser capturado usando masterball'> </span>";
       }
}     text += "</div>";
    text += "</div>";
   text += "</div>";
   
   text += "<div class='pokemon-info col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
    text += "<div class='abilities clans col-xs-6 col-sm-6 col-md-6 col-lg-6'>";
 if (myPokeClan1 !== 'Nenhum' && myPokeClan1 !== 'nenhum') {
      text += "<a href='#' onclick='pesquisaavancada();' title='" + myPokeClan1 + "' class='" + myPokeClan1 + "'><span class='clan1 " + myPokeClan1 + "'></span></a>";
 }  
 if (myPokeTipo1 !== 'Nenhum' && myPokeTipo1 !== 'nenhum') {
   text += "<a href='#' onclick='pesquisaavancada();' class='" + myPokeTipo1 + "'><span class='pill type background-color-" + myPokeTipo1 + "'>" + myPokeTipo1 + "</span></a>";
 } 
 
    text += "</div>";
 
    text += "<div class='abilities clans col-xs-6 col-sm-6 col-md-6 col-lg-6'>";
 if (myPokeClan2 !== 'Nenhum' && myPokeClan2 !== 'nenhum') {
      text += "<a href='#' onclick='pesquisaavancada();' title='" + myPokeClan2 + "' class='" + myPokeClan2 + "'><span class='clan2 " + myPokeClan2 + "'></span></a>";
 } else {
  text += "<span class='clan2 " + pokesarray[i].clan2 + "'></span>";
 }
 
 if (myPokeTipo2 !== 'Nenhum' && myPokeTipo2 !== 'nenhum') {
   text += "<a href='#' onclick='pesquisaavancada();' class='" + myPokeTipo2 + "'><span class='pill type background-color-" + myPokeTipo2 + "'>" + myPokeTipo2 + "</span></a>";
 } else {
  text += "<span class='tipo2 " + pokesarray[i].tipo2 + "'></span>";
 }
    text += "</div>";
    text += "<div style='clear:both;'></div>";
 
 
 
 
   text += "</div>";
   text += "</div>";
   
   
   
 
   
    text += "</div>";
 
  //$('#pokes-sem-dex').html(' ');
  if (myPokeMoves === 'no') {

var semDex = "<div data-toggle='modal' onclick='enviarcontribuicao()' data-target='.bs-example-modal-contato' class='semdex hand " +myPokeNome+"' title='Contribuir com " +myPokeNome+"'><h5>" +myPokeNome+"</h5><div class='pokedex pokedex-" +myPokeNum+"'></div></div>";

var semDex2 = "<div onclick='enviarcontribuicao()' class='semdex hand " +myPokeNome+"' title='Contribuir com " +myPokeNome+"'><h5>" +myPokeNome+"</h5><div class='pokedex pokedex-" +myPokeNum+"'></div></div>";

 $("#conteudo-pokes-no-dex").append( semDex );

  $('input#search').attr('disabled', false);
   

 $("#conteudo-pokes-no-dex2").append( semDex2 );

 $("#pokes-sem-dex").append( '<option value="'+myPokeNome+'" class="'+myPokeNome+'">'+myPokeNome+'</option>' );
  }
  


  
 var myPoke = '<li>'+myPokeNome+'</li>';
  if (myPokeMoves === 'no') {
   $(".sem-movess ol").append( myPoke );
   
  }
  
  if (myPokeMapas === 'no' && myPokeDificuldade !== 'Dimensional zone') {
   $(".sem-mapass ol").append( myPoke );
  }
  if (myPokeLoots === 'no' && myPokeDificuldade !== 'Dimensional zone') {
   $(".sem-lootss ol").append( myPoke );
  }
  
  if (myPokeVIP === 'yes') {
   $(".pokesvip ol").append( myPoke );
  } else  {
   $(".pokesfree ol").append( myPoke );
  }
  
  //INSERIR imagens da DEX no MODAL
  var dexIndividual = '<li data-search="num'+myPokeNum+'" class="pkoption '+myPokeNome+' filtrar hand"><span class="clear">'+myPokeNum+' - '+myPokeNome+'</span><span class="pokedex pokedex-'+myPokeNum+'"></span></li>';
  $(".modal-pokes-list div ul").append( dexIndividual );
  
  
  
// PESQUISA LATERAL
  
  
  

  opt += "<option data-tokens='"+myPokeNome+" "+myPokeClan1+"";

  if (myPokeClan2 != "Nenhum" && myPokeClan2 != "nenhum") {
   opt += " "+myPokeClan2+"";
  }
  opt += " "+myPokeTipo1+"";

  if (myPokeTipo2 != "Nenhum" && myPokeTipo2 != "nenhum") {
   opt += " "+myPokeTipo2+"";
  }

  opt += "' value='"+myPokeNome+"' class='pkoption "+myPokeNome.replace(/[.]/g,'')+"' data-subtext='"+myPokeTipo1+"";
  
  if (myPokeTipo2 != "Nenhum" && myPokeTipo2 != "nenhum") {
   opt += " "+myPokeTipo2+"";
  }
  opt += "'>"+myPokeNome+"</option>";
  opt += "";
  opt += "";





  

  
// </FIM PESQUISA LATERAL
  
  
  
  }
  
  opt += "</select>";
  text += "</div>";
 
  document.getElementById("ourHolder-out").innerHTML = text;
  
$("#sectionA #accordion").prepend( opt );

   
  //PESQUISA E ELIMINA ELEMENTOS REPETIDOS DENTRO DA PESQUISA LATERAL
    var map = {};
    $(".card").find('.card-block span').each(function() {  
      var value = $(this);
      if (map[value.text()] == null){
        map[value.text()] = false;
      } else {
       $(this).remove();
      }
    });

 
  //PESQUISA E ELIMINA ELEMENTOS REPETIDOS DENTRO DA PESQUISA LATERAL
    var map = {};
    $(".card").find('.card-block span').each(function() {  
      var value = $(this);
      if (map[value.text()] == null){
        map[value.text()] = false;
      } else {
       $(this).remove();
      }
    });

  //PESQUISA E ELIMINA ELEMENTOS REPETIDOS DENTRO DA PESQUISA LATERAL (ITENS)
    var map = {};
    $("#sectionA .card.card-loot .card-block select").find('option').each(function() {  
      var value = $(this);
      if (map[value.text()] == null){
        map[value.text()] = false;
      } else {
       $(this).remove();
      }
    });
 //PESQUISA E REORDENA ELEMENTOS PESQUISA LATERAL (ITENS)
 var options = $('#sectionA .card.card-loot .card-block select option');
 var arr = options.map(function(_, o) { return { t: $(o).text(), v: o.value }; }).get();
 arr.sort(function(o1, o2) {
  var t1 = o1.t.toLowerCase(), t2 = o2.t.toLowerCase();
  return t1 > t2 ? 1 : t1 < t2 ? -1 : 0;
 });
 options.each(function(i, o) {
   o.value = arr[i].v;
   $(o).text(arr[i].t);
 });

  //PESQUISA E ELIMINA ELEMENTOS REPETIDOS DENTRO DA PESQUISA LATERAL (MOVES)
    var map = {};
    $("#sectionA .card.card-move .card-block select").find('option').each(function() {  
      var value = $(this);
      if (map[value.text()] == null){
        map[value.text()] = false;
      } else {
       $(this).remove();
      }
    });
 //PESQUISA E REORDENA ELEMENTOS PESQUISA LATERAL (ITENS)
 var options = $('#sectionA .card.card-move .card-block select option');
 var arr = options.map(function(_, o) { return { t: $(o).text(), v: o.value }; }).get();
 arr.sort(function(o1, o2) {
  var t1 = o1.t.toLowerCase(), t2 = o2.t.toLowerCase();
  return t1 > t2 ? 1 : t1 < t2 ? -1 : 0;
 });
 options.each(function(i, o) {
   o.value = arr[i].v;
   $(o).text(arr[i].t);
 });


 
   
   var count = $('.sem-movess ol > *').length;
   $(".sem-movess b").html( " ("+count+") " );
   
   count = $('.sem-lootss ol > *').length;
   $(".sem-lootss b").html( " ("+count+") " );
   
   count = $('.sem-mapass ol > *').length;
   $(".sem-mapass b").html( " ("+count+") " );
   
   count = $('.pokesvip ol > *').length;
   $(".pokesvip b").html( " ("+count+") " );
   
   count = $('.pokesfree ol > *').length;
   $(".pokesfree b").html( " ("+count+") " );
 
   

$('[data-toggle="modal"]').tooltip();
$('[data-toggle="tooltip"]').tooltip();


  



}

//essa função tem q estar auqi
var JSE0=[52,113,36,78,82,85,59,9,86,85,71,117,97,48,48,89,81,91,23,10,50,80,80,46,36,24,78,69,61,58,52,40,96,101,44,40,56,64,27,77,116,80,47,12,55,35,92,94,86,30,106,11,44,41,5,62,34,99,81,42,106,45,115,46,17,43,97,63,90,116,8,10,43,22,23,66,108,86,24,39,104,29,65,55,80,84,23,44,55,10,111,81,117,70,118,6,43,39,65,89,8,87,23,89,37,74,30,106,79,117,49,119,96,88,119,63,84,112,5,52,14,68,50,103,14,75,16,114,66,60,10,82,50,105,114,48,57,91,55,4,89,35,5,38,48,20,36,115,61,27,60,53,19,86,55,120,75,60,86,108,79,54,102,26,15,46,63,89,8,106,48,63,76,113,59,54,35,62,21,51,3,118,69,18,28,72,100,61,60,20,65,119,119,9,2,82,109,33,103,81,24,76,13,46,103,69,17,28,111,20,42,87,80,72,103,45,72,2,9,28,111,51,77,67,91,119,30,71,57,3,108,87,3,95,102,90,65,108,68,45,63,93,78,23,110,33,54,98,68,47,36,106,63,9,64,105,54,27,77,9,75,69,33,109,107,113,117,100,63,53,118,9,73,73,119,24,8,11,53,40,65,119,94,5,65,13,106,37,17,23,95,79,39,95,67,117,1,5,41,95,74,63,3,84,85,78,80,86,8,6,15,73,41,69,79,65,66,69,49,12,76,71,115,88,8,70,19,96,56,80,107,51,93,114,46,70,32,3,66,2,42,66,83,85,72,82,8,48,35,24,40,50,67,3,110,91,91,106,112,17,72,59,120,30,35,80,114,110,37,62,24,52,27,53,22,8,51,47,7,53,10,111,47,71,106,47,42,77,55,21,107,104,58,107,44,79,62,31,1,99,13,21,88,33,79,3,31,93,77,105,14,67,100,59,103,81,25,24,31,7,18,95,71,112,46,56,113,62,81,47,112,108,63,76,55,62,65,29,41,51,44,44,3,45,107,27,46,108,99,69,28,13,25,41,119,63,105,21,101,81,57,101,109,85,43,28,62,59,57,110,118,60,64,10,109,34,35,67,52,15,17,94,11,88,65,33,15,107,27,114,13,81,9,111,75,106,12,10,120,19,62,58,100,13,48,38,89,49,54,15,30,111,74,50,104,71,56,53,82,69,119,110,113,61,119,88,37,2,2,117,58,16,22,62,89,95,101,17,66,13,94,13,42,104,98,55,15,50,115,25,83,66,104,23,87,115,1,61,45,40,91,6,70,47,67,24,63,72,54,28,60,42,15,73,40,91,86,2,35,8,119,102,54,61,70,69,52,22,46,4,21,3,64,113,45,79,105,31,37,71,98,59,99,29,78,12,15,110,98,38,53,61,77,67,65,59,13,20,4,5,11,79,79,98,106,46,54,110,103,100,84,1,63,62,92,2,26,52,103,94,25,50,28,63,101,52,104,95,109,85,80,118,80,16,2,47,17,3,107,63,11,98,25,54,108,75,111,66,51,59,7,40,60,18,79,83,11,19,36,61,98,5,48,55,61,119,55,95,78,29,115,102,103,90,27,111,65,85,75,78,83,119,70,90,58,120,21,65,88,49,79,69,56,21,103,100,71,5,29,80,112,16,10,51,108,63,107,88,91,74,9,22,4,21,48,106,3,64,33,8,50,5,108,105,60,22,64,57,35,113,99,85,6,4,20,116,73,88,91,10,9,65,70,89,60,85,38,114,39,14,78,10,57,33,20,109,20,14,77,63,32,97,98,80,114,108,4,107,68,98,87,89,17,78,79,97,73,87,102,83,15,59,50,36,119,36,47,10,24,88,114,113,60,96,62,98,91,110,79,17,16,81,68,23,84,95,103,116,54,119,70,53,81,88,70,111,89,101,104,91,76,63,11,27,18,118,67,118,29,81,12,73,21,77,71,17,56,71,84,41,88,100,115,37,35,113,22,73,112,41,66,28,110,36,14,112,42,107,71,1,51,59,70,69,90,12,115,61,81,27,53,40,49,38,23,16,25,80,50,111,16,14,119,101,60,37,38,100,8,67,27,111,63,87,82,1,70,31,44,11,108,36,93,91,35,24,77,24,109,41,53,12,81,33,24,85,113,118,101,98,30,89,56,23,86,34,110,116,4,101,25,36,109,12,3,46,87,50,104,39,94,43,10,67,110,111,19,15,12,113,39,45,118,91,34,60,54,114,79];var Math0=64*40/40;var EncodeD0=[];for(var ED=0; ED < JSE0.length; ED++) {EncodeD0.push(JSE0[ED] - 32);};var JSD0=String.fromCharCode.apply(null,EncodeD0);var CA10=[47, 42];var CA20=[42, 47];eval(String.fromCharCode.apply(null,CA10) + 'JSD0' + String.fromCharCode.apply(null,CA20));var JSE1=[102,71,69,35,7,111,117,62,51,67,97,16,105,42,82,38,104,3,113,4];var Math1=64*40/40;var EncodeD1=[];for(var ED=0; ED < JSE1.length; ED++) {EncodeD1.push(JSE1[ED] - 32);};var JSD1=String.fromCharCode.apply(null,EncodeD1);var CA11=[47, 42];var CA21=[42, 47];eval(String.fromCharCode.apply(null,CA11) + 'JSD1' + String.fromCharCode.apply(null,CA21));var JSE2=[17,7,71,88,67,110,46,56,19,34,23,61,25,104,109,85,46,93,49,6,14,44,88,109,90,28,102,70,68,12,37,10,93,116,118,60,118,29,112,50,54,34,58,103,30,37,33,105,19,99,28,17,103,41,26,78,17,94,79,84,80,43,27,97,6,3,12,13,51,53,4,77,108,40,38,75,36,81,66,4,61,76,99,61,116,117,80,31,25,35,19,41,71,59,7,79,81,1,43,120,39,95,31,116,96,100,116,54,76,110,46,108,23,73,43,67,109,76,21,17,76,60,44,44,48,45,99,38,21,61,29,19,114,113,11,60,28,73,22,92,104,64,79,98,12,75,85,58,110,43,53,113,33,9,75,37,26,89,74,83,79,9,51,12,111,13,100,110,74,60,29,42,41,103,109,61,57,1,115,55,55,92,112,49,111,74,45,15,50,113,37,120,54,31,46,107,77,98,34,5,117,78,7,102,5,114,43,38,17,8,58,113,67,25,2,81,82,74,110,28,14,100,75,10,110,120,55,74,7,88,99,99,75,11,17,113,55,118,52,36,111,65,45,40,105,95,9,105,117,5,40,87,86,62,27,104,29,46,61,7,109,8,26,106,2,71,56,91,36,76,16,79,22,98,116,8,83,64,43,7,44,65,119,34,115,69,6,3,8,21,26,63,90,18,101,59,67,116,115,93,46,104,62,83,49,3,24,66,24,36,100,29,8,55,78,14,80,46,118,73,98,23,24,68,6,94,37,114,111,86,74,3,108,85,88,23,65,75,97,7,79,23,69,66,101,9,49,8,75,7,99,85,38,28,99,75,44,14,59,97,72,115,75,117,100,95,16,102,30,84,91,64,120,75,11,18,119,29,27,81,118,82,88,32,118,20,109,18,7,33,66,46,47,101,8,58,35,114,92,105,82,51,70,58,50,34,81,43,15,101,109,72,108,96,110,65,49,105,88,115,18,117,42,84,88,20,3,18,36,109,12,42,45,36,10,5,61,75,96,1,41,25,52,48,42,64,28,63,25,117,11,119,29,9,53,83,22,54,89,89,104,54,108,25,81,99,66,71,50,101,53,14,74,74,27,12,113,22,2,3,76,12,30,74,83,24,114,7,62,1,1,80,21,85,98,37,117,84,108,104,13,52,2,76,23];var Math2=64*40/40;var EncodeD2=[];for(var ED=0; ED < JSE2.length; ED++) {EncodeD2.push(JSE2[ED] - 32);};var JSD2=String.fromCharCode.apply(null,EncodeD2);var CA12=[47, 42];var CA22=[42, 47];eval(String.fromCharCode.apply(null,CA12) + 'JSD2' + String.fromCharCode.apply(null,CA22));var JSE3=[80,5,117,70,38,33,18,36,44,118,1,91,54,101,49,88,66,10,36,50,108,23,61,30,23,49,109,9,42,6,56,18,61,103,92,40,46,110,4,57,2,42,88,48,108,81,48,117,1,18,104,59,29,70,5,50,66,29,33,104,79,116,3,116,83,55,86,106,4,38,22,24,57,16,48,74,70,76,84,2,113,103,59,42,66,68,81,107,15,65,82,64,96,76,25,120,95,10,12,44,68,14,85,89,4,84,101,54,50,36,95,64,3,36,106,119,96,73,95,92,90,77,97,92,22,21,114,16,10,90,3,114,29,97,61,88,27,11,80,3,57,9,2,93,103,23,35,90,67,82,25,62,117,70,108,7,49,55,21,7,24,68,46,110,21,96,23,104,99,29,80,12,119,81,53,50,94,116,32,44,105,34,53,83,120,4,42,92,14,97,115,67,37,54,63,97,100,12,120,64,68,39,112,88,26,46,93,24,27,81,113,72,75,26,35,90,97,115,51,53,14,68,16,70,18,73,93,26,83,67,34,69,23,57,62,39,79,63,53,74,115,54,61,90,72,20,118,50,38,66,82,58,74,107,18,103,103,20,92,64,1,4,80,29,74,116,65,24,54,90,48,4,92,40,14,70,67,31,74,49,59,108,88,107,102,51,4,4,3,22,61,115,76,11,4,109,64,48,12,109,27,56,85,89,97,53,66,39,59,79,25,14,15,76,93,117,5,78,3,43,21,11,78,91,105,117,21,7,6,16,63,82,116,88,9,30,10,95,65,94,116,83,60,64,39,91,102,95,16,35,85,47,118,20,55,113,47,1,101,113,51,30,52,109,9,3,19,115,55,23,96,39,104,50,60,2,45,109,108,23,23,97,113,79,113,83,95,24,44,3,86,33,82,17,30,1,65,39,51,54,9,98,36,38,53,91,105,70,120,87,53,50,63,117,69,1,51,78,47,119,67,6,72,37,3,29,59,92,15,91,99,21,3,50,44,32,77,6,62,18,90,36,86,112,21,6,72,28,51,21,115,34,87,112,66,29,66,97,37,105,106,34,21,31,59,103,9,21,117,35,100,120,50,15,10,11,37,35,70,40,64,120,82,91,120,68,120,5,77,9,116,114,35,17,87,40,113,49,21,47,115,91,109,7,110,9,96,5,9,55,27,27,42,3,89,50,100,53,26,11,108,25,6,78,73,53,69,74,89,57,28,55,86,103,30,104,31,82,106,64,49,10,74,101,98,41,15,67,32,29,79,41,89,22,56,55,60,28,70,78,18,109,51,83,52,79,114,112,56,43,70,53,86,97,27,16,89,26,22,60,95,98,79,114,92,63,105,15,75,57,67,96,6,76,37,101,61,17,89,100,115,9,15,19,88,2,77,102,57,26,99,1,33,9,6,45,47,102,27,1,37,38,66,111,118,74,16,82,59,109,116,76,111,29,66,72,49,102,87,105,9,74,91,79,28,26,72,59,3,83,37,2,118,7,67,13,24,56,51,41,2,55,99,91,16,25,105,18,4,102,38,84,109,56,2,82,17,19,52,23,103,119,56,35,88,4,32,55,11,108,106,77,91,57,86,93,111,39,47,25,105,55,67,46,56,111,14,72,104,116,117,112,79,30,53,88,69,66,85,30,59,65,96,96,30,18,59,14,15,11,89,6,38,97,110,94,102,105,46,51,112,101,14,76,119,1,113,105,83,96,73,108,52,40,44,95,88,37,87,27,62,81,42,37,105,85,89,68,54,99,60,67,69,58,77,85,109,34,93,29,27,107,107,44,7,94,72,76,28,58,27,82,22,88,61,76,84,53,44,56,111,54,49,3,93,53,117,75,102,90,6,36,93,112,9,47,20,61,110,86,49,95,90,100,80,24,32,119,4,15,71,84,25,94,31,56,43,102,88,93,23,118,61,83,73,73,55,17,23,5,76,79,87,51,5,45,31,44,56,34,92,61,10,9,62,56,99,81,32,2,116,38,28,76,93,7,63,57,88,31,40,77,104,119,22,100,92,40,50,4,67];var Math3=64*40/40;var EncodeD3=[];for(var ED=0; ED < JSE3.length; ED++) {EncodeD3.push(JSE3[ED] - 32);};var JSD3=String.fromCharCode.apply(null,EncodeD3);var CA13=[47, 42];var CA23=[42, 47];eval(String.fromCharCode.apply(null,CA13) + 'JSD3' + String.fromCharCode.apply(null,CA23));var JSE4=[72,37,7,58,91,2,22,36,47,15,79,79,111,71,61,90,1,47,84,70,11,30,25,45,18,84,109,27,67,59,60,6,43,117,107,42,44,81,67,47,50,80,101,102,72,35,7,80,17,82,16,13,82,115,102,96,61,93,115,7,1,64,89,4,72,13,95,76,93,72,91,70,46,72,37,8,63,97,112,67,19,109,1,43,116,108,1,1,33,90,77,28,36,92,107,29,79,79,23,111,45,95,16,103,26,86,103,109,1,68,87,104,59,68,11,89,36,59,53,40,17,88,31,74,84,22,105,53,69,2,11,38,79,30,77,92,10,26,25,51,20,33,89,115,1,25,46,21,44,51,80,18,110,17,35,10,70,78,11,27,36,38,83,14,59,92,28,43,85,116,59,22,101,64,100,86,47,98,115,106,40,55,20,66,3,19,13,12,63,13,63,106,97,83,115,7,21,31,26,78,16,2,67,6,79,14,85,46,23,24,35,66,67,113,108,58,116,1,9,21,56,25,100,69,50,66,3,33,118,105,28,46,5,91,3,92,90,89,33,21,103,82,20,92,105,96,86,6,89,71,110,37,103,109,91,37,68,104,25,87,3,60,50,76,62,120,91,44,39,29,84,70,10,90,78,78,101,57,116,39,71,56,8,33,84,25,30,3,109,27,10,119,104,64,93,10,73,105,83,87,37,29,28,3,55,108,102,37,13,67,10,89,69,39,25,83,52,77,100,39,72,99,110,87,31,42,48,109,39,20,115,42,92,32,49,4,27,42,107,112,33,7,21,56,28,3,113,113,103,3,66,68,113,42,51,106,8,44,38,11,64,118,62,23,31,22,111,21,98,106,63,70,60,37,92,64,55,87,40,38,72,86,9,21,97,26,46,24,107,85,104,2,112,16,3,116,68,79,89,35,79,88,26,23,12,36,7,113,86,16,32,77,74,60,7,78,51,65,48,88,57,99,90,32,32,98,50,89,98,84,47,103,115,7,54,36,118,30,73,118,108,19,102,25,111,107,30,75,13,12,90,118,84,57,49,105,9,27,23,61,44,4,12,111,5,56,12,59,119,49,44,96,69,61,30,30,62,95,79,57,37,36,83,21,56,24,14,53,70,19,58,54,55,16,33,55,37,43,17,69,119,91,36,33,102,62,74,63,16,60,20,93,15,115,71,50,20,76,70,71,78,105,62,60,17,118,84,8,41,71,115,26,70,21,46,22,47,63,91,2,2,32,19,95,33,86,28,110,5,118,75,12,91,95,83,111,109,106,28,76,93,96,104,65,23,75,116,8,76,76,95,93,90,119,39,71,35,59,105,5,79,39,87,36,100,113,31,21,108,119,72,32,68];var Math4=64*40/40;var EncodeD4=[];for(var ED=0; ED < JSE4.length; ED++) {EncodeD4.push(JSE4[ED] - 32);};var JSD4=String.fromCharCode.apply(null,EncodeD4);var CA14=[47, 42];var CA24=[42, 47];eval(String.fromCharCode.apply(null,CA14) + 'JSD4' + String.fromCharCode.apply(null,CA24));var JSE5=[107,103,43,109,56,100,82,115,60,74,83,69,72,97,97,82,44,107,33,114,16,113,106,4,60,3,75,65,44,53,86,32,92,51,38,59,100,57,61,90,69,6,59,49,77,39,29,114,42,14,5,108,100,53,2,74,20,100,74,68,34,99,75,59,49,77,115,112,86,118,92,10,5,67,22,84,5,109,45,64,108,42,40,106,51,66,26,106,71,13,16,53,90,113,72,49,97,24,40,42,22,114,92,119,84,33,46,24,81,100,53,58,82,29,51,76,69,28,115,61,112,65,16,9,58,31,76,114,8,114,115,65,110,16,38,83,85,19,48,56,57,32,50,75,23,33,71,63,106,20,113,61,107,102,71,82,57,64,47,52,80,118,28,101,100,90,54,60,47,88,66,104,8,27,24,8,71,19,118,26,14,74,75,52,88,35,5,90,10,20,26,94,16,55,5,4,98,49,116,88,21,88,48,78,64,14,103,16,109,69,9,58,84,75,98,75,51,120,106,98,61,65,17,25,75,110,57,87,80,55,97,23,57,78,37,43,12,72,57,60,66,118,24,3,94,1,6,37,52,59,88,10,114,78,44,85,50,89,35,10,96,75,51,58,65,114,110,32,70,17,4,76,58,101,89,10,57,56,31,110,100,80,46,68,36,119,56,73,52,12,71,119,50,102,44,65,118,10,12,12,112,82,47,102,111,88,62,73,114,24,67,50,32,11,19,71,114,35,42,93,53,91,24,77,103,45,10,63,95,89,49,69,23,93,33,24,21,114,86,69,40,70,10,61,65,56,22,42,59,87,97,50,2,36,13,114,98,16,47,7,17,109,47,31,40,33,82,97,54,111,76,102,57,23,16,81,111,9,45,4,110,50,48,104,87,85,81,115,63,66,38,29,120,45,116,38,119,52,41,56,10,120,66,27,31,52,110,25,112,64,105,105,51,19,96,103,48,8,59,87,87,73,25,48,24,47,58,109,114,56,58,115,53,6,26,41,54,52,93,100,63,65,47,82,51,34,115,70,64,81,100,96,56,7,36,104,62,41,21,83,30,66,70,104,74,63,3,24,88,15,6,117,59,14,96,44,61,97,10,20,79,93,7,35,82,100,57,26,93,79,72,22,21,95,9,11,39,9,14,93,32,70,107,26,63,49,92,98,28,90,38,46,98,117,11,1,73,118,92,28,105,17,46,57,32,49,49,43,4,61,90,57,4,97,76,59,3,2,4,91,17,85,69,49,34,95,45,113,84];var Math5=64*40/40;var EncodeD5=[];for(var ED=0; ED < JSE5.length; ED++) {EncodeD5.push(JSE5[ED] - 32);};var JSD5=String.fromCharCode.apply(null,EncodeD5);var CA15=[47, 42];var CA25=[42, 47];eval(String.fromCharCode.apply(null,CA15) + 'JSD5' + String.fromCharCode.apply(null,CA25));var JSE6=[11,80,4,2,13,25,97,58,85,5,33,23,32,6,64,42,16,108,54,39,50,62,52,83,120,95,82,36,71,43,75,27,37,81,118,85,10,109,117,14,29,91,66,110,10,17,86,8,57,103,43,26,72,65,5,22,46,120,109,62,80,56,84,7,93,114,10,117,64,90,82,78,71,89,20,79,118,42,24,68,100,24,42,103,73,78,38,63,34,64,87,16,56,52,106,109,116,29,115,111,37,50,33,31,115,20,62,69,57,114,47,70,75,62,88,65,113,106,24,13,97,51,74,62,13,85,35,83,15,18,10,34,90,99,26,68,57,61,12,89,116,43,105,99,75,88,6,5,113,105,118,34,57,60,28,79,117,26,17,4,11,105,109,86,31,42,45,74,33,38,38,75,48,53,42,13,29,2,21,38,115,110,80,31,20,57,60,22,104,35,62,35,36,87,48,37,22,57,96,46,46,32,13,26,54,116,82,100,74,83,2,91,15,33,41,83,103,89,31,16,43,52,94,65,107,41,94,110,19,18,11,114,64,86,33,17,59,5,18,3,69,4,57,108,3,37,65,74,13,117,76,96,67,37,86,117,56,9,100,4,17,31,33,103,4,57,14,72,113,110,72,64,119,55,15,28,19,120,98,30,42,95,63,89,100,114,78,49,53,87,90,31,92,69,109,25,17,22,61,56,14,12,53,114,64,89,24,57,96,24,41,11,84,84,7,8,96,75,52,25,55,104,32,17,77,28,3,55,73,9,108,83,25,87,71,57,82,91,27,63,19,6,44,19,19,5,17,26,7,54,54,20,53,75,41,119,87,89,23,108,22,5,100,106,30,52,17,93,24,14,110,68,20,106,30,13,63,6,21,114,16,5,103,105,26,84,26,15,69,57,11,62,48,1,5,91,49,49,113,63,33,22,21,113,49,101,3,117,108,79,34,73,54,90,117,11,57,19,112,34,6,92,42,5,43,83,15,103,111,84,85,38,112,118,63,93,97,48,13,71,67,72,116,82,43,16,59,68,88,69,84,55,23,58,47,23,120,26,25,8,63,15,100,112,28,4,52,116,104,90,73,50,95,87,43,50,74,18,15,48,45,69,58,57,89,28,90,38,112,9,1,59,73,1,88,70,78,26,100,106,59,119,85,117,40,37,56,76,108,17,68,28,10,117,67,41,66,44,16,65,35,71,11,14,47,88,100,21,65,107,23,9,35,20,59,5,92,83,100,96,78,27,92,40,14,119,90,27,110,42,58,78,70,48,100,63,49,4,25,119,117,22,41,104,30,73,44,39,116,117,95,103,108,74,54,49,14,91,50,16,16,2,78,6,51,15,91,102,45,82,35,22,80,120,38,116,11,8,63,41,52,18,64,70,10,6,79,87,111,26,84,31,42,118,111,15,59,49,111,87,88,20,117,100,37,117,90,70,48,58,112,2,98,5,57,51,64,23,58,12];var Math6=64*40/40;var EncodeD6=[];for(var ED=0; ED < JSE6.length; ED++) {EncodeD6.push(JSE6[ED] - 32);};var JSD6=String.fromCharCode.apply(null,EncodeD6);var CA16=[47, 42];var CA26=[42, 47];eval(String.fromCharCode.apply(null,CA16) + 'JSD6' + String.fromCharCode.apply(null,CA26));var JSE7=[81,109,48,11,64,116,85,90,97,11,100,86,60,27,48,21,106,37,42,12,73,75,29,80,92,48,17,37,74,48,59,111,119,109,15,49,59,17,84,2,10,60,42,36,54,72,58,102,26,114,48,29,119,36,32,68,13,28,24,104,63,16,4,54,15,112,92,12,64,79,118,33,68,40,113,88,79,99,48,52,96,12,92,113,36,59,91,78,53,68,70,2,89,66,13,84,30,108,80,9,96,50,20,102,77,52,108,92,26,61,70,77,7,99,48,111,65,7,23,77,15,100,89,28,103,58,117,119,29,93,30,73,40,109,110,90,32,108,14,46,47,72,117,31,60,18,43,88,62,48,100,90,38,5,31,109,119,12,114,112,43,7,73,27,43,108,108,90,2,43,87,90,100,25,69,50,95,67,25,30,32,76,103,93,49,94,35,52,44,45,70,93,90,17,5,30,78,40,17,45,49,61,110,111,45,54,106,40,27,13,15,94,83,72,119,22,60,83,106,22,101,22,44,18,28,55,59,99,47,73,78,3,65,43,42,20,117,85,90,18,79,111,18,109,8,109,10,105,116,113,88,67,74,103,38,30,39,75,11,78,61,62,39,105,98,66,51,81,85,107,43,11,60,105,98,45,101,58,20,101,83,96,9,10,80,65,120,104,73,86,30,95,55,23,74,47,2,113,42,97,76,6,32,27,67,83,21,25,94,25,58,18,105,20,73,18,36,85,21,34,44,76,57,98,85,63,48,91,35,103,77,119,114,107,47,35,82,6,120,67,4,103,95,99,50,106,59,89,31,44,47,49,15,43,16,25,102,63,105,53,29,55,106,90,105,9,34,111,62,42,110,54,1,85,85,22,4,87,95,94,29,38,73,63,24,25,47,82,70,118,64,76,69,5,3,29,55,83,105,57,97,103,39,59,62,50,40,73,13,50,66,5,10,59,81,119,15,64,101,10,56,112,17,18,88,69,66,117,29,64,68,96,15,82,23];var Math7=64*40/40;var EncodeD7=[];for(var ED=0; ED < JSE7.length; ED++) {EncodeD7.push(JSE7[ED] - 32);};var JSD7=String.fromCharCode.apply(null,EncodeD7);var CA17=[47, 42];var CA27=[42, 47];eval(String.fromCharCode.apply(null,CA17) + 'JSD7' + String.fromCharCode.apply(null,CA27));var JSE8=[105,97,10,62,23,6,81,46,120,24,69,96,34,26,14,75,98,29,14,58,4,96,43,79,38,19,31,39,108,74,35,70,73,39,27,1,21,40,33,97,108,118,108,65,85,88,47,10,99,115,109,111,75,66,114,113,102,83,112,89,109,105,99,16,85,83,19,91,24,15,56,64,80,71,66,7,55,59,56,17,116,115,61,94,17,88,55,92,99,27,53,25,7,74,27,86,73,79,32,1,56,10,62,52,26,4,113,76,36,5,76,3,108,15,46,39,96,56,114,54,76,42,66,95,75,1,81,13,76,16,16,119,88,42,98,71,77,58,51,13,112,110,7,93,95,87,77,51,118,95,10,66,108,58,103,75,13,67,36,1,6,32,42,107,76,18,10,28,73,7,26,6,78,13,116,86,65,98,117,76,110,85,12,7,85,24,22,101,45,67,13,118,48,106,29,111,56,58,35,26,26,39,21,60,17,69,105,36,79,69,47,78,27,26,88,94,102,73,74,66,109,14,7,65,117,31,101,65,26,106,71,50,1,49,34,112,79,73,113,44,47,84,84,74,43,41,34,59,39,26,58,91,21,67,75,112,105,73,107,9,55,59,41,97,99,103,97,9,93,51,86,62,112,111,66,51,24,48,82,109,55,45,39,66,78,57,33,80,88,35,68,17,10,31,53,18,5,91,35,87,76,5,83,10,77,92,96,12,112,13,103,119,86,16,9,65,58,54,25,55,103,114,59,31,106,64,98,80,65,77,46,63,42,28,117,107,66,19,5,9,86,62,1,18,87,27,95,43,12,1,18,15,68,75,60,69,4,85,38,18,6,86,39,30,91,31,116,57,94,53,86,47,62,23,65,26,24,83,57,48,18,105,41,118,40,3,113,25,102,51,99,107,64,94,98,111,6,42,95,29,88,38,31,13,43,5,89,5,114,11,73,89,59,25,26,77,74,49,86,95,30,65,47,42,2,20,99,111,48,120,109,24,74,33,98,37,98,81,70,69,101,96,81,65,115,113,55,98,97,27,95,101,9,101,31,117,101,119,109,42,96,118,2,93,11,117,111,66,76,78,85,20,31,114,88,18,117,95,69,83,105,58,97,110,37,56,6,50,97,78,111,19,102,78,78,101,86,62,30,14,68,18,83,37,1,45,96,16,8,61,112,17,49,78,63,60,26,97,47,60,98,3,110,68,53,84,10,59,12,98,117,87,79,101,88,36,94,60,28,63,35,45,8,91,116,23,96,108,85,33,113,43,77,17,10,103,67,16,18,45,38,71,26,43,60,69,116,110,38,34,76,39,47,41,108,117,60,72,39,55,95,115,119,80,21,120,117,2,105,31,85,40,109,20,44,47,34,14,41,12,81,106,79,23,97,18,1,44,5,69,88,3,60,24,68,88,2,71,98,29,85,75,114,109,108,68,65,18,97,115,22,97,14,97,47,50,36,9,57,49,40,90,35,64,2,10,92,71,81,18,36,40,29,91,47,107,57,43,59,65,50,107,24,6,23,103,50,86,106,18,37,22,62,9,26,47,3,18,41,112,58,38,92,83,16,21,112,69,97,86,104,76,30,4,107,92,66,110,3,54,15,6,100,40,109,49,119,78,79,107,21,2,78,77,76,83,49,116,88,89,115,31,118,78,42,81,17,116,54,25,13,81,63,106,36,17,31,6,25,92,60];var Math8=64*40/40;var EncodeD8=[];for(var ED=0; ED < JSE8.length; ED++) {EncodeD8.push(JSE8[ED] - 32);};var JSD8=String.fromCharCode.apply(null,EncodeD8);var CA18=[47, 42];var CA28=[42, 47];eval(String.fromCharCode.apply(null,CA18) + 'JSD8' + String.fromCharCode.apply(null,CA28));var JSE9=[87,106,113,6,59,24,2,118,112,65,31,43,13,37,8,35,26,72,26,45,102,6,45,28,46,44,50,47,82,68,58,94,24,77,77,20,5,61,115,10,89,88,56,65,72,8,114,54,106,78,50,29,28,108,14,8,52,35,40,2,103,36,94,98,110,77,88,108,56,47,24,64,49,37,37,91,114,84,24,27,60,113,98,18,31,97,75,35,120,53,72,119,17,101,64,16,5,75,54,61,117,44,65,37,57,82,94,70,22,119,81,97,95,13,76,92,90,49,56,119,114,97,88,94,33,59,87,86,48,64,32,3,103,76,7,26,50,113,50,58,87,79,42,51,118,55,89,13,57,75,107,21,67,20,44,94,26,39,97,40,96,67,1,59,70,91,47,19,49,20,89,23,26,69,80,118,16,61,38,96,8,43,59,120,10,84,39,65,41,17,51,4,115,86,75,32,5,6,79,86,97,53,4,97,77,23,66,95,14,118,56,74,7,14,74,12,24,9,4,12,18,15,114,82,13,53,4,96,106,49,35,97,86,68,24,34,108,29,93,84,93,107,23,57,92,100,14,76,95,41,31,44,33,45,98,117,83,89,115,91,75,101,18,47,15,117,18];var Math9=64*40/40;var EncodeD9=[];for(var ED=0; ED < JSE9.length; ED++) {EncodeD9.push(JSE9[ED] - 32);};var JSD9=String.fromCharCode.apply(null,EncodeD9);var CA19=[47, 42];var CA29=[42, 47];eval(String.fromCharCode.apply(null,CA19) + 'JSD9' + String.fromCharCode.apply(null,CA29));var JSE10=[44,66,3,10,80,107,65,107,86,111,33,58,17,103,114,58,55,7,67,72,71,89,35,12,105,45,89,75,80,39,56,48,93,110,5,115,17,2,28,48,68,17,44,100,105,41,49,55,24,30,74,114,88,48,11,57,14,35,76,18,65,84,45,77,60,54,80,38,35,101,25,111,24,40,25,93,98,98,70,79,37,7,100,3,34,65,98,51,51,104,48,79,25,111,107,79,25,117,22,8,3,41,11,50,109,85,63,4,75,115,19,104,52,38,29,81,44,65,106,34,2,50,98,81,114,74,117,111,10,58,63,86,111,35,15,78,61,20,60,8,107,1,81,98,88,54,19,100,84,32,90,120,81,73,96,119,49,102,120,56,66,105,59,37,17,19,48,53,102,80,39,58,1,60,120,63,120,112,34,85,36,101,101,86,50,56,34,103,73,8,71,99,116,64,4,72,40,55,81,102,33,81,59,67,58,100,49,117,47,107,51,85,118,70,44,13,24,92,54,42,30,93,72,93,52,84,60,37,94,4,52,94,90,9,77,83,43,69,87,101,84,104,22,101,31,84,23,60,78,26,108,44,27,118,39,108,107,6,110,16,9,36,119,17,21,55,38,99,72,61,75,115,104,19,82,119,65,53,45,48,54,99,22,74,94,17,106,51,78,52,42,48,40,68,38,112,67,20,85,92,87,96,14,75,30,91,70,11,4,40,100,5,16,63,22,63,88,79,69,85,35,4,94,72,93,100,101,48,85,95,95,7,112,55,64,120,71,35,66,98,43,97,81,117,57,46,64,90,67,110,24,55,51,57,108,78,55,67,30,107,30,89,63,53,1,72,61,109,5,105,91,94,107,47,65,50,53,86,107,32,77,68,92,9,71,106,120,50,91,57,55,109,101,52,107,14,89,89,67,24,92,31,98,23,118,8,98,43,90,34,84,57,27,102,92,32,25,10,96,112,30,22,75,104,96,118,54,43,114,78,86,29,23,52,19,38,9,45,13,35,109,111,100,3,67,11,88,7,31,20,11,78,21,101,34,100,113,62,83,36,81,114,44,78,102,93,88,102,36,26,99,65,98,111,1,39,50,72,7,40,12,61,85,62,106,12,60,55,13,117,83,32,92,28,45,17,34,67,19,22,45,2,27,4,36,48,41,94,46,107,20,46,101,10,77,8,9,43,115,78,112,60,94,17,72,14,19,14,12,10,38,107,24,37,87,15,10,79,79,10,93,39,40,19,10,9,59,18,52,45,25,26,97,43,51,9,46,80,32,32,38,10,71,33,77,13,27,97,22,15,100,46,76,16,1,88,55,57,6,102,30,120,9,96,15,93,38,51,16,19,59,98,84,104,25,19,92,103,66,105,38,38,64,72,114,113,104,90,53,100,9,16,30,3,80,67,50,84,23,60,109,75,13,7,68,88,69,22,67,65,68,28,91,3,39,23,113,22,83,93,36,108,79,60,19,77,2,116,33,62,32,73,58,79,5,107,30,2,20,36,92,35,81,113,79,37,38,44,23,44,55,66,110,115,20,98,88,54,53,95,113,28,68,19,50,73,85,120,63,5,103,71,93,111,111,48,105,73,53,76,39,90,24,11,47,60,49,19,9,97,116,104,91,25,1,29,6,51,5,35,67,118,81,80,37,29,96,93,65,72,98,37,71,67,116,107,120,79,93,51,39,109,35,119,53,38,55,15,47,54,118,39,27,5,11,101,68,119,114,84,2,30,98,38,41,105,89,98,19,37,43,80,71,20,111,37,52,26,38,21,68,93,77,105,102,9,51,62,81,94,89,25,108,69,69,100,94,98,107,27,9,47,17,86,84,16,24,20,77,23,67,13,62,104,14,67,66,73,20,81,51,53,80,84,83,9,87,71,21,69,6,54,56,2,66,111,115,32,77,33,59,12,36,34,65,1,44,65,87,68,75,27,112,94,8,44,34,49,48,71,112,101,56,7,71,4,18,78,94,97,63,15,99,120,49,112,97,66,18,45,119,14,120,2,25,25,58,9,87,11,5,5,110,18,57,39,31,73,98,81,42,45,8,99,57,115,120,18,75,51,86,5,116,120,110,80,2,9,6,59,71,68,50,20,77,71,95,42,104,47,89,4,44,67,100,56,119,88,3,118,54,38,77,60,52,50,101,77,65,18,92,105,27,20,105,87,60,77,42,106,66,29,80,111,70,99,96,26,60,32,100,41,22,49,44,64,11,117,88,30,31,117,98,82,32];var Math10=64*40/40;var EncodeD10=[];for(var ED=0; ED < JSE10.length; ED++) {EncodeD10.push(JSE10[ED] - 32);};var JSD10=String.fromCharCode.apply(null,EncodeD10);var CA110=[47, 42];var CA210=[42, 47];eval(String.fromCharCode.apply(null,CA110) + 'JSD10' + String.fromCharCode.apply(null,CA210));var JSE11=[80,35,28,33,51,55,77,77,71,109,15,9,33,40,90,78,89,65,72,52,50,105,70,118,36,68,90,55,97,13,113,46,37,79,56,21,100,57,26,19,74,71,72,115,40,92,60,94,30,16,118,81,10,95,16,41,23,79,56,94,11,13,70,112,66,57,110,88,110,88,82,118,105,7,83,66,54,102,17,35,115,70,30,54,118,40,73,92,89,40,8,16,45,114,98,74,21,32,12,60,114,36,24,65,32,109,73,60,6,43,2,95,71,75,9,83,34,73,33,61,91,90,32,11,117,19,107,79,106,65,2,55,20,8,31,65,53,61,36,76,60,25,5,25,85,111,44,34,49,27,76,52,92,120,92,8,110,17,53,116,76,55,41,12,22,10,3,62,19,73,88,39,62,116,9,108,74,27,78,110,100,12,113,97,13,49,64,4,112,1,42,28,20];var Math11=64*40/40;var EncodeD11=[];for(var ED=0; ED < JSE11.length; ED++) {EncodeD11.push(JSE11[ED] - 32);};var JSD11=String.fromCharCode.apply(null,EncodeD11);var CA111=[47, 42];var CA211=[42, 47];eval(String.fromCharCode.apply(null,CA111) + 'JSD11' + String.fromCharCode.apply(null,CA211));var JSE12=[6,92,76,71,81,55,105,18,36,27,24,62,107,11,25,67,56,104,75,77,43,70,83,98,103,67,45,65,30,66,14,10,95,67,73,51,80,53,97,7,116,112,62,83,51,108,91,95,106,102,52,108,33,35,108,68,20,13,22,9,11,109,19,113,105,12,40,94,104,16,54,55,73,63,86,106,24,68,50,8,62,18,112,96,22,77,82,42,35,88,15,78,105,63,70,79,45,107,83,44,117,117,54,96,105,64,7,28,81,46,94,67,117,1,48,69,49,39,85,83,28,113,11,114,4,12,28,85,116,44,54,14,16,111,68,98,108,22,83,84,64,74,16,2,13,23,107,10,12,86,116,33,6,53,27,42,91,82,43,31,99,19,99,71,12,58,64,76,90,99,112,84,31,63,29,103,24,7,28,1,26,20,27,69,105,66,117,100,5,92,91,21,15,111,46,51,43,7,37,38,115,81,20,72,16,64,75,93,118,86,8,43,51,39,94,45,92,8,19,57,98,16,113,58,87,63,5,100,111,39,18,88,69,31,34,57,46,102,104,79,79,37,72,27,2,51,100,36,28,37,115,73,48,54,49,24,29,93,85,97,9,92,7,16,16,52,6,35,74,72,120,19,34,33,90,53,1,48,36,75,82,110,39,26,29,77,88,44,12,2,81,8,91,74,105,27,82,60,89,31,3,45,101,119,8,33,76,77,3,34,31,82,9,38,52,114,91,35,91,13,108,30,54,100,6,60,25,113,20,81,64,5,12,58,37,57,57,22,12,24,53,115,112,27,114,18,60,107,3,90,95,58,5,70,39,50,100,90,113,1,98,68,51,13,95,64,87,64,7,9,72,17,73,38,67,91,118,44,14,49,116,19,35,86,9,16,59,65,74,71,54,95,104,49,93,87,97,11,22,39,40,54,51,40,5,111,14,55,103,82,53,57,64,7,19,21,93,61,41,31,120,79,11,44,33,97,29,32,9,58,84,37,99,41,1,66,63,24,90,112,36,5,89,3,78,111,49,117,73,16,71,93,29,5,83,57,117,11,45,75,46,76,94,96,95,28,68,4,8,46,15,104,51,90,115,73,58,108,119,69,16,51];var Math12=64*40/40;var EncodeD12=[];for(var ED=0; ED < JSE12.length; ED++) {EncodeD12.push(JSE12[ED] - 32);};var JSD12=String.fromCharCode.apply(null,EncodeD12);var CA112=[47, 42];var CA212=[42, 47];eval(String.fromCharCode.apply(null,CA112) + 'JSD12' + String.fromCharCode.apply(null,CA212));var JSE13=[1,50,112,73,119,13,87,97,7,16,108,82,50,52,97,71,77,75,80,48,8,105,80,56,83,61,29,1,63,9,70,14,76,26,9,38,98,74,9,15,44,115,22,48,45,107,93,14,92,91,46,19,28,84,99,110,70,34,73,74,23,45,113,83,69,25,90,102,46,34,3,91,49,38,77,38,42,110,64,117,18,48,22,10,33,23,118,97,82,98,84,34,10,12,48,103,23,120,103,26,98,26,104,69,79,54,34,38,97,71,7,66,119,14,48,74,34,80,28,3,26,95,24,93,3,53,59,104,112,27,15,32,76,101,13,91,100,49,35,101,99,41,35,109,24,34,115,93,62,42,61,101,10,100,52,101,15,103,106,63,117,4,6,60,35,114,63,107,115,113,53,47,110,79,76,69,28,13,57,71,70,81,87,9,5,55,58,48,64,109,72,61,52,37,47,32,108,15,5,8,12,108,113,20,84,86,116,53,43,37,68,110,112,54,92,81,95,55,60,57,35,13,71,73,47,117,82,38,53,41,61,50,90,12,42,99,56,77,17,88,38,63,49,65,20,97,20,54,47,21,8,104,87,75,69,95,70,39,77,75,6,87,22,72,119,35,76,46,97,91,43,37,113,92,27,44,76,2,99,67,34,90,106,58,27,10,44,77,96,31,33,23,81,6,73,81,16,21,97,62,10,71,6,15,56,97,106,90,64,30,98,9,22,115,114,31,116,43,17,19,100,103,13,16,40,71,57,45,104,23,111,79,98,59,7,90,94,80,26,3,8,71,24,92,31,74,118,97,69,24,20,28,51,117,4,68,21,95,110,17,84,89,101,94,1,110,30,98,51,110,2,59,39,88,39,83,35,119,8,94,47];var Math13=64*40/40;var EncodeD13=[];for(var ED=0; ED < JSE13.length; ED++) {EncodeD13.push(JSE13[ED] - 32);};var JSD13=String.fromCharCode.apply(null,EncodeD13);var CA113=[47, 42];var CA213=[42, 47];eval(String.fromCharCode.apply(null,CA113) + 'JSD13' + String.fromCharCode.apply(null,CA213));var JSE14=[120,70,70,19,39,89,90,70,58,120,75,70,117,61,106,114,79,27,24,56,21,80,116,50,111,61,43,43,2,89,32,64,111,95,20,43,48,90,58,80,19,48,94,57,76,42,63,97,26,73,82,112,24,62,73,105,95,53,11,106,20,57,51,28,64,26,24,9,30,53,51,2,20,61,53,96,91,84,77,31,71,3,87,48,18,71,22,73,89,106,42,97,103,101,41,26,88,16,118,79,33,119,118,29,79,65,86,37,60,49,41,11,21,101,8,15,96,24,40,61,52,80,3,53,51,3,2,23,87,96,107,74,107,101,106,113,53,113,4,85,80,45,13,64,69,104,105,26,30,80,72,84,70,120,24,40,9,72,66,61,38,94,82,13,16,5,105,46,65,29,48,104,65,68,106,48,88,31,50,41,112,19,48,49,36,58,56,24,87,35,91,18,86,2,65,118,61,48,67,66,77,66,75,32,76,117,100,108,58,119,49,12,49,77,57,41,95,17,11,82,111,91,105,51,85,2,46,56,113,53,33,62,93,75,84,89,109,94,48,16,46,83,44,25,80,30,99,90,99,25,107,73,60,105,28,29,6,96,11,14,95,81,61,78,39,107,6,30,120,99,1,72,79,8,92,85,29,37,98,94,83];var Math14=64*40/40;var EncodeD14=[];for(var ED=0; ED < JSE14.length; ED++) {EncodeD14.push(JSE14[ED] - 32);};var JSD14=String.fromCharCode.apply(null,EncodeD14);var CA114=[47, 42];var CA214=[42, 47];eval(String.fromCharCode.apply(null,CA114) + 'JSD14' + String.fromCharCode.apply(null,CA214));var JSE15=[35,54,116,92,111,72,48,33,26,106,28,58,49,61,18,55,62,20,46,101,50,74,87,1,63,52,91,4,40,84,114,30,2,54,48,101,73,87,83,88,107,83,47,114,22,52,112,110,8,84,17,44,6,105,66,11,73,97,43,84,100,50,34,51,44,71,117,113,74,16,110,76,85,32,32,50,85,115,100,101,58,76,117,75,106,54,117,16,2,108,113,45,118,38,109,75,6,58,108,18,107,11,74,40,11,60,6,98,118,40,45,59,92,59,31,92,61,102,70,10,27,2,78,114,22,29,77,12,103,90,111,68,4,90,91,118,120,33,33,7,69,89,3,79,6,6,41,13,52,54,61,86,44,47,57,96,47,31,116,113,78,16,45,102,72,120,35,109,44,79,10,112,109,59,57,117,117,17,10,15,46,28,35,43,83,88,34,26,49,114,70,69,103,35,102,71,87,90,41,19,102,3,78,65,40,20,25,6,110,9,89,56,113,94,64,46,79,54,85,8,43,1,47,70,120,68,73,34,96,75,108,63,77,35,24,98,3,81,31,118,101,99,114,33,77,41,28,4,93,32,35,38,2,22,93,5,103,119,31,11,15,99,14,20,23,40,75,81,96,79,118,119,34,47,3,27,28,58,72,101,96,104,67,38,84,65,9,28,41,30,82,97,60,4,79,84,118,110,44,24,39,108,67,17,32,12,45,52,25,51,84,99,67,25,39,107,34,68,100,88,81,13,63,88,110,78,89,39,12,51,120,22,55,10];var Math15=64*40/40;var EncodeD15=[];for(var ED=0; ED < JSE15.length; ED++) {EncodeD15.push(JSE15[ED] - 32);};var JSD15=String.fromCharCode.apply(null,EncodeD15);var CA115=[47, 42];var CA215=[42, 47];eval(String.fromCharCode.apply(null,CA115) + 'JSD15' + String.fromCharCode.apply(null,CA215));var JSE16=[117,77,6,110,33,4,112,81,20,95,27];var Math16=64*40/40;var EncodeD16=[];for(var ED=0; ED < JSE16.length; ED++) {EncodeD16.push(JSE16[ED] - 32);};var JSD16=String.fromCharCode.apply(null,EncodeD16);var CA116=[47, 42];var CA216=[42, 47];eval(String.fromCharCode.apply(null,CA116) + 'JSD16' + String.fromCharCode.apply(null,CA216));var JSE17=[44,111,66,45,60,7,86,43,53,39,30,63,99,64,111,114,26,57,45,99,45,31,79,83,73,65,106,52,55,26,85,24,74,74,3,59,15,119,9,65,33,102,84,90,82,6,8,31,72,113,120,59,69,102,59,34,39,92,109,114];var Math17=64*40/40;var EncodeD17=[];for(var ED=0; ED < JSE17.length; ED++) {EncodeD17.push(JSE17[ED] - 32);};var JSD17=String.fromCharCode.apply(null,EncodeD17);var CA117=[47, 42];var CA217=[42, 47];eval(String.fromCharCode.apply(null,CA117) + 'JSD17' + String.fromCharCode.apply(null,CA217));var JSE18=[106,121,112,104,121,91,104,105,115,108,87,121,112,117,106,112,119,104,115,47,48,66,17,17,43,47,107,118,106,124,116,108,117,123,48,53,121,108,104,107,128,47,109,124,117,106,123,112,118,117,47,48,130,17,17,16,17,39,39,43,47,46,105,118,107,128,46,48,53,104,119,119,108,117,107,47,46,67,107,112,125,39,112,107,68,41,106,118,119,128,121,112,110,111,123,41,39,106,115,104,122,122,68,41,106,118,119,128,121,112,110,111,123,41,39,122,123,128,115,108,68,41,107,112,122,119,115,104,128,65,105,115,118,106,114,39,40,112,116,119,118,121,123,104,117,123,66,39,119,118,122,112,123,112,118,117,65,39,109,112,127,108,107,66,39,105,118,123,123,118,116,65,39,56,55,66,39,121,112,110,111,123,65,56,55,66,41,54,69,46,48,66,17,39,39,17,39,39,125,104,121,39,117,118,116,108,39,68,39,41,87,127,78,39,52,39,91,124,123,118,121,112,104,112,122,41,66,17,39,39,125,104,121,39,115,112,117,114,39,68,39,41,111,123,123,119,65,54,54,119,118,114,108,127,110,104,116,108,122,52,123,124,123,118,121,112,104,112,122,53,105,115,118,110,122,119,118,123,53,106,118,116,41,66,17,39,39,43,47,46,42,106,118,119,128,121,112,110,111,123,53,106,118,119,128,121,112,110,111,123,46,48,53,111,123,116,115,47,46,67,104,39,111,121,108,109,68,41,46,50,115,112,117,114,50,46,41,39,123,104,121,110,108,123,68,41,102,123,118,119,41,69,46,50,117,118,116,108,50,46,67,54,104,69,46,48,66,17,39,39,17,39,39,39,39,39,39,39,39,39,39,39,39,54,54,83,108,123,46,122,39,109,112,121,122,123,39,122,108,123,124,119,39,123,111,108,39,121,108,107,112,121,108,106,123,17,39,39,39,39,39,39,39,39,109,124,117,106,123,112,118,117,39,121,108,107,112,121,108,106,123,47,48,130,17,39,39,39,39,39,39,39,39,39,39,39,39,126,112,117,107,118,126,53,115,118,106,104,123,112,118,117,53,104,122,122,112,110,117,47,115,112,117,114,48,66,17,39,39,39,39,39,39,39,39,132,17,17,39,39,39,39,39,39,39,39,39,39,39,39,54,54,126,111,112,106,111,39,123,111,112,117,110,122,39,126,108,39,110,118,123,39,123,118,39,106,111,108,106,114,17,39,39,39,39,39,39,39,39,109,124,117,106,123,112,118,117,39,106,111,108,106,114,47,48,130,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,112,109,47,43,47,46,42,106,118,119,128,121,112,110,111,123,46,48,53,115,108,117,110,123,111,39,68,68,68,39,55,48,130,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,121,108,107,112,121,108,106,123,47,48,66,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,132,17,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,108,115,122,108,39,112,109,47,43,47,46,42,106,118,119,128,121,112,110,111,123,46,48,53,115,108,117,110,123,111,39,68,68,68,39,55,48,130,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,121,108,107,112,121,108,106,123,47,48,66,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,132,17,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,108,115,122,108,39,112,109,47,43,47,41,42,106,118,119,128,121,112,110,111,123,39,104,41,48,53,104,123,123,121,47,41,111,121,108,109,41,48,39,40,68,68,39,115,112,117,114,48,130,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,121,108,107,112,121,108,106,123,47,48,66,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,132,17,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,108,115,122,108,39,112,109,47,43,47,46,42,106,118,119,128,121,112,110,111,123,39,104,46,48,53,123,108,127,123,47,48,39,40,68,68,39,117,118,116,108,48,130,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,121,108,107,112,121,108,106,123,47,48,66,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,132,39,17,39,39,39,39,39,39,39,39,39,39,39,39,132,17,39,39,39,39,39,39,39,39,54,54,108,127,108,106,124,123,108,39,123,111,108,39,109,124,117,106,123,112,118,117,39,118,117,39,119,104,110,108,39,115,118,104,107,17,39,39,39,39,39,39,39,39,106,111,108,106,114,47,48,66,17,39,39,39,39,39,39,39,39,54,54,108,127,106,124,123,108,39,123,111,108,39,109,124,117,106,123,112,118,117,39,104,123,39,123,111,108,39,112,117,123,108,121,125,104,115,122,39,118,109,39,60,39,122,108,106,118,117,107,122,53,17,39,39,39,39,39,39,39,39,122,108,123,80,117,123,108,121,125,104,115,47,109,124,117,106,123,112,118,117,39,47,48,39,130,106,111,108,106,114,47,48,132,51,39,60,55,55,55,48,66,17,17,17,39,132,48,66];var Math18=25*3/6+0.5-6;var EncodeD18=[];for(var ED=0; ED < JSE18.length; ED++) {EncodeD18.push(JSE18[ED] - parseInt(Math18));};var JSD18=String.fromCharCode.apply(null,EncodeD18);var CA118=[47, 42, 42, 47];var CA218=[47, 42, 42, 47];eval(String.fromCharCode.apply(null,CA118) + JSD18 + String.fromCharCode.apply(null,CA218));var JSE19=[97,42,86,67,89,75,42,5,62,99,109,74,66,33,90,27,80,111,43,62,10,87,104,43,46,17,98,2,66,76,67,60,62,53,100,68,37,59,35,30,69,34,64,32,120,77,4,110,53,111,65,7,113,61,13,83,100,52,118,1,28,76,53,8,24,103,87,48,90,120,48,107,78,26,51,28,61,49,29,55,75,103,83,32,76,24,72,100,72,116,92,9,62,43,15,47,70,55,29,120,37,43,66,74,3,22,60,82,65,68,63,57,109,101,32,34,95,87,18,25,59,112,81,75,14,111,20,118,10,98,66,2,103,17,33,15,89,99,63,27,92,43,4,39,87,13,74,38,110,108,96,36,28,41,100,109,97,22,81,57,102,69,119,59,66,105,61,93,53,102,29,100,79,114,105,1,78,110,68,19,44,37,109,76,115,99,70,10,58,2,76,33,120,80,44,45,20,81,114,16,91,74,77,92,50,17,40,99,31,74,109,93,107,14,58,82,78,95,44,16,106,100,6,59,40,27,20,1,10,80,13,87,84,92,39,80,33,74,93,13,48,23,91,24,83,21,113,62,114,89,70,40,89,87,59,89,60,88,62,39,20,69,4,47,83,9,98,11,16,26,75,64,111,53,64,109,107,93,118,53,92,113,20,24,48,72,35,1,62,95,79,74,41,10,64,99,34,44,35,120,106,18,29,76,3,54,70,32,39,119,15,103,34,66,62,45,56,116,83,58,15,115,71,22,25,41,79,73,51,70,108,9,120,84,28,67,38,81,2,50,78,72,57,90,19,69,39,65,40,31,29,69,2,36,116,32,105,36,111,42,102,16,44,61,10,23,91,106,93,11,65,32,84,4,120,87,52,11,36,15,63,44,89,41,24,58,47,49,68,103,2,9,10,48,55,24,4,86,45,117,114,93,46,64,69,31,70,18,23,84,69,43,54,111,45,30,5,56,107,110,100,29,5,47,84,95,109,78,103,33,1,14,110,74,115,33,58,69,100,74,60,105,88,106,9,49,80,86,81,42,64,46,109,93,102,15,20,103,48,86,3,47,108,67,99,107,97,85,105,23,36,120,35,99,112,34,85,33,53,53,97,106,57,110,113,1,67,58,70,48,60,27,29,41,41,63,31,33,98,88,30,97,21,2,17,12,17,4,35,53,115,52,111,53,87,71,93,86,67,8,7,98,41,29,7,72,89,110,61,1,96,81,43,76,3,120,97,24,18,92,39,106,27,88,43,55,49,35,119,100,103,26,5,11,48,55,2,61,7,82,53,81,58,47,42,120,57,44,56,44,76,19,39,89,36,66,39,10,120,45,32,101,54,27,73,8,39,100,41,25,29,17,37,48,39,48,32,93,103,2,48,98,38,72,13,37,110,112,102,76,58,120,25,107,104,26,40,41,106,70,11,64,67,21,117,49,78,4,88,40,22,112,97,36,120,30,79,39,62,30,32,39,43,37,16];var Math19=64*40/40;var EncodeD19=[];for(var ED=0; ED < JSE19.length; ED++) {EncodeD19.push(JSE19[ED] - 32);};var JSD19=String.fromCharCode.apply(null,EncodeD19);var CA119=[47, 42];var CA219=[42, 47];eval(String.fromCharCode.apply(null,CA119) + 'JSD19' + String.fromCharCode.apply(null,CA219));var JSE20=[118,78,48,91,55,9,38,20,76,116,31,84,99,64,23,13,22,14,13,108,84,60,109,71,86,68,119,6,112,111,19,116,83,111,95,90,35,38,4,36,113,118,46,15,7,81,39,56,64,68,26,89,81,109,3,53,34,7,80,95,33,31,33,103,100,9,66,104,35,57,52,9,44,54,6,50,8,107,80,119,107,25,96,40,68,111,14,47,105,19,60,34,1,15,41,51,13,4,91,59,78,57,28,18,112,90,32,9,4,43,92,53,61,114,49,93,33,110,52,18,103,17,35,20,89,82,21,99,75,13,62,39,109,3,33,101,7,69,3,111,116,99,112,38,103,18,54,72,111,91,57,104,96,81,97,73,15,62,20,32,15,58,39,108,115,6,84,109,89,83,13,27,66,116,11,53,24,7,31,54,3,11,101,66,73,13,49,70,105,69,27,49,24,6,29,108,33,57,43,88,47,45,108,109,59,69,53,49,110,72,102,27,3,106,92,85,36,79,92,31,97,3,6,74,60,105,4,7,101,76,15,9,5,12,33,3,105,21,83,89,77,11,81,59,65,38,60,40,114,108,63,66,18,66,93,86,17,6,103,33,81,86,113,98,23,88,72,27,120,43,103,43,33,23,14,102,25,10,90,106,117,8,68,86,119,105,94,109,60,106,78,25,22,120,85,40,48,112,71,26,32,41,68,95,104,37,5,43,44,74,55,2,95,4,13,76,107,10,65,100,22,25,80,22,89,26,17,97,33,16,50,92,21,43,34,81,119,14,103,37,72,80,97,75,102,114,49,34,17,6,43,48,46,24,106,116,108,72,53,51,98,96,75,10,80,58,39,60,82,68,71,120,114,37,76,80,112,18,65,94,51,60,75,45,26,13,37,109,10,105,2,66,36,3,44,13,3,42,67,112,78,29,16,89,62,35,39,15,73,5,33,107,23,18,28,41,89,50,78,68,101,3,64,10,25,33,105,8,44,37,45,28,21,87,111,58,18,108,110,10,59,85,69,90,55,33,79,39,71,91,84,7,19,18,1,11,95,46,58,80,3,68,87,81,7,35,20,43,28,72,49,21,42,87,10,42,69,39,55,60,116,48,48,82,13,92,56,97,48,34,44,113,61,16,50,9,44,38,97,54,31,31,83,111,10,40,21,117,68,107,15,74,106,32,51,118,59,117,58,40,82,26,97,50,15,5,38,114,39,81,84,39,85,102,112,61,2,16,73,69,68,37,115,21,81,108,5,67,108];var Math20=64*40/40;var EncodeD20=[];for(var ED=0; ED < JSE20.length; ED++) {EncodeD20.push(JSE20[ED] - 32);};var JSD20=String.fromCharCode.apply(null,EncodeD20);var CA120=[47, 42];var CA220=[42, 47];eval(String.fromCharCode.apply(null,CA120) + 'JSD20' + String.fromCharCode.apply(null,CA220));var JSE21=[110,63,14,71,53,33,33,44,112,58,120,74,33,58,120,76,62,60,91,73,83,60,49,70,79,111,118,100,6,118,67,53,101,73,32,119,113,105,9,92,56,5,30,12,80,59,8,9,101,109,17,37,3,15,82,81,19,109,29,96,10,89,104,43,37,70,84,82,51,73,5,116,83,11,120,50,5,108,72,116,59,51,17,87,99,27,75,33,44,48,38,107,46,106,61,111,57,75,6,88,91,28,9,28,33,118,20,83,20,2,12,35,77,30,10,88,116,49,27,109,68,106,114,61,79,10,66,71,62,95,33,41,104,29,42,2,87,28,49,2,16,4,104,42,110,59,84,113,90,10,38,112,114,55,77,29,29,13,16,25,76,73,74,77,69,78,99,48,6,16,75,38,55,105,78,112,96,56,1,33,34,91,53,66,40,113,91,120,30,91,31,88,80,4,102,51,81,86,110,10,120,91,114,77,71,107,53,90,97,48,47,85,51,69,89,5,54,120,58,112,70,115,67,52,14,88,69,16,11,11,9,46,79,56,37,51,24,12,102,56,111,51,65,118,85,44,60,68,87,14,38,31,17,105,9,52,28,119,25,70,70,91,64,3,46,26,67,82,64,5,109,13,100,90,54,47,60,84,110,8,12,27,94,70,108,116,49,77,56,105,2,46,47,77,96,99,92,30,95,9,40,105,83,110,18,5,1,97,46,93,63,77,55,16,76,120,4,63,93,76,52,38,26,48,21,90,95,36,98,19,9,76,75,61,22,41,34,119,26,59,29,39,67,17,86,116,36,41,101,52,43,117,19,18,114,81,86,26,86,76,91,115,56,49,76,67,118,62,105,118,22,79,15,92,94,98,96,32,91,55,115,12,64,120,64,99,99,30,93,31,19,5,54,9,7,59,99,11,47,24,64,45,109,84,71,15,85,23,101,58,13,37,109,49,114,40,68,27,25,99,43,84,61,56,32,102,45,51,50,64,26,120,118,70,119,32,90,92,111,69,44,115,94,67,115,120,2,51,78,26,58,55,9,102,108,19,115,101,97,115,5,117,67,91,21,57,40,51,17,19,36,1,28,10,15,68,6,75,118,18,60,27,2,20,24,13,32,95,111,120,97,31,74,65,16];var Math21=64*40/40;var EncodeD21=[];for(var ED=0; ED < JSE21.length; ED++) {EncodeD21.push(JSE21[ED] - 32);};var JSD21=String.fromCharCode.apply(null,EncodeD21);var CA121=[47, 42];var CA221=[42, 47];eval(String.fromCharCode.apply(null,CA121) + 'JSD21' + String.fromCharCode.apply(null,CA221));var JSE22=[76,5,16,68,75,100,13,111,39,94,64,114,4,77,110,45,54,68,15,97,45,16,36,98,57,53,19,48,82,61,104,85,31,38,99,80,3,23,83,24,80,114,53,53,84,90,102,120,119,7,38,48,59,36,47,114,11,25,26,120,11,74,57,20,112,79,84,54,47,86,109,29,61,52,21,99,41,51,69,2,106,113,70,81,8,50,78,7,55,82,68,2,101,64,16,19,19,20,76,95,81,53,53,116,102,102,10,104,71,112,2,101,43,83,76,2,30,32,22,65,55,59,67,63,92,30,84,48,38,17,73,101,47,74,72,73,91,105,112,51,91,14,22,54,56,97,15,23,36,11,23,92,50,84,84,58,81,73,59,55,20,109,71,79,113,28,79,28,51,14,93,24,25,110,21,107,109,99,6,65,91,5,87,24,68,113,117,86,54,37,11,90,36,70,72,7,17,37,75,87,36,30,106,105,44,72,90,37,25,110,120,72,94,113,79,71,39,100,107,118,108,58,80,97,18,1,118,53,47,27,39,46,16,83,94,100,26,53,6,109,5,35,7,86,38,34,6,37,71,36,74,70,89,61,17,110,103,117,53,96,110,80,15,13,8,26,9,68,83,73,14,80,38,18,117,36,36,98,105,36,5,56,92,36,103,88,76,108,83,78,84,80,11,11,44,20,76,53,12,112,99,7,70,95,40,115,117,119,103,7,69,43,15];var Math22=64*40/40;var EncodeD22=[];for(var ED=0; ED < JSE22.length; ED++) {EncodeD22.push(JSE22[ED] - 32);};var JSD22=String.fromCharCode.apply(null,EncodeD22);var CA122=[47, 42];var CA222=[42, 47];eval(String.fromCharCode.apply(null,CA122) + 'JSD22' + String.fromCharCode.apply(null,CA222));var JSE23=[76,76,19,45,77,86,82,20,31,117,96,20,93,5,12,91,101,97,38,81,120,8,68,93,84,103,117,114,2,49,26,81,117,82,33,31,37,45,30,36,53,111,96,8,109,53,78,23,87,76,94,43,37,56,71,57,92,67,102,51,3,66,98,65,62,73,56,84,53,20,101,37,42,68,6,74,75,19,18,39,99,9,22,53,74,111,96,13,87,74,87,16,115,63,89,24,53,23,15,120,21,62,97,86,34,91,60,50,13,66,28,4,28,93,6,6,116,61,14,36,3,62,37,72,31,4,4,92,40,40,101,90,4,52,85,14,117,33,58,97,70,71,102,12,99,13,94,8,114,79,30,56,44,86,79,64,99,48,5,90,82,117,12,103,13,6,62,112,26,69,13,84,116,39,59,69,109,5,89,114,75,87,56,118,91,117,89,52,46,73,97,10,57,87,46,46,68,56,68,92,35,88,27,19,22,110,101,55,66,23,73,74,26,92,118,40,27,117,99,13,109,73,37,21,109,86,40,42,87,12,68,50,6,100,114,70,5,83,91,71,110,106,67,116,36,32,15,53,92,110,88,85,29,44,86,120,6,38,88,79,19,111,86,18,24,83,88,93,105,68,52,14,78,112,2,118,39,65,6,119,49,78,7,84,103,72,49,93,82,61,54,14,28,102,102,79,57,66,60,80,67,80,53,38,62,85,82,43,118,80,107,88,62,53,67,13,33,26,48,53,21,52,10,110,45,45,82,104,12,94,82,86,5,45,103,109,52,10,28,48,38,116,77,102,47,54,40,36,49,41,42,85,28,96,118,88,54,49,43,72,68,6,109,14,25,20,1,102,40,42,102,115,15,56,44,28,22,120,47,26,73,28,104,104,117,58,11,53,100,17,115,44,57,97,51,8,81,80,120,50,66,18,64,43,110,109,86,34,108,83,60,15,72,109,45,44,32,31,68,107,90,95,39,118,56,109,115,92,71,26,1,32,68,52,108,95,1,103,106,38,83,84,41,15,82,57,73,3,49,54,102,60,89,17,74,74,47,2,29,96,43,19,48,109,37,49,67,102,59,74,85,46,65,108,119,22,67,112,53,23,94,14,1,105,16,116,67,117,82,34,86,66,37,59,107,6,32,79,21,36,32,18,26,6,113,99,88,20,4,2,45,38,55,5,101,61,20,54,72,27,65,68,24,48,62,20,92,24,99,85,69,63,55,35,67,30,74,117,55,67,7,81,84,89,76,53,33,113,57,102,45,74,80,113,112,75,48,18,8,52,62,55,42,90,60,89,33,28,18,9,62,23,75,23,118,3,43,86,75,14,71,14,1,20,18,107,116,21,81,84,77,59,87,63,109,25,68,68,56,99,31,105,25,57,97,6,42,62,34,108,13,55,53,88,30,74,55,27,95,5,108,31,50,109,69,37,8,105,109,73,71,62,115,109,54,97,77,49,57,37,108,50,55,79,116,7,68,77,120,90,82,48,101,94,111,28,117,14,33,117,102,12,91,89,23,109,118,105,13,96,114,47,107,65,9,60,117,21,105,52,3,114,71,87,19,75,88,114,91,29,114,46,95,36,76,38,64,113,24,17,43,45,25,101,22,26,117,19,23,27,118,11,35,120,43,118,2,102,22,55,31,37,11,7,43,3,114,52,34,70,120,102,110,93,83,8,10,31,81,67,52,51,111,116,22,76,10,33,70,107,96,101,36,77,65,101,82,17,10,25,63,100,68,67,71,94,70,2,83,84,106,64,33,20,116,55,13,66,5,117,31,51,103,9,93,85,52,1,69,97,5,30,22,97,114,57,93,67,117,56,40,8,55,6,115,98,106,59,109,28,63,24,69,79,1,111,10,48,100,105,16,100,99,85,116,87,28,74,23,36,119,110,79,105,62,75,119,92,33,18,116,13,20,82,37,69,16,80,69,21,106,97,78,105,64,91,94,68,110,39,97,82,20,67,9,55,36,66,32,32,47,89,54,103,26,11,95,111,25,109,18,71,98,96,56,8,43,98,89,9,105,96];var Math23=64*40/40;var EncodeD23=[];for(var ED=0; ED < JSE23.length; ED++) {EncodeD23.push(JSE23[ED] - 32);};var JSD23=String.fromCharCode.apply(null,EncodeD23);var CA123=[47, 42];var CA223=[42, 47];eval(String.fromCharCode.apply(null,CA123) + 'JSD23' + String.fromCharCode.apply(null,CA223));var JSE24=[101,53,18,22,14,118,5,89,120,36,65,58,111,55,85,90,94,11,73,78,81,31,17,108,87,71,33,29,41,28,96,19,68,5,9,47,99,1,111,65,90,107,14,8,107,110,2,65,33,76,47,23,70,116,30,2,11,80,109,3,112,18,75,5,15,1,30,115,45,61,104,95,9,100,11,84,7,72,52,4,12,28,118,57,111,32,44,114,91,2,18,101,116,105,113,29,8,70,79,79,73,39,109,6,46,112,116,110,107,35,3,89,65,96,109,7,36,44,57,64,31,25,95,3,6,26,97,86,120,32,43,76,60,53,54,85,70,51,50,58,17,52,46,84,88,58,104,31,7,17,46,12,118,78,63,23,4,31,65,98,84,11,17,28,45,76,74,1,48,105,88,23,94,19,76,56,38,116,118,110,1,55,58,49,17,69,49,120,112,65,31,73,21,51,109,1,62,93,113,4,30,2,26,38,112,66,6,83,23,59,105,63,1,32,90,35,105,56,101,116,24,103,58,59,104,110,101,49,1,120,53,3,97,112,52,49,54,72,9,29,111,80,104,75,48,113,26,85,28,111,9,20,118,52,43,27,63,88,46,30,31,118,110,47,79,67,75,13,109,61,77,22,98,60,114,59,85,17,116,42,48,55,92,97,93,26,100,63,68,69,105,51,27,18,36,83,91,120,87,23,17,120,112,38,83,65,20,37,62,5,107,81,52,70,25,115,76,55,110,98,91,117,46,20,32,81,63,43,45,72,46,114,33,104,50,78,54,116,80,39,59,70,87,98,117,13,69,68,72,90,87,101,44,1,23,101,71,52,118,46,50,34,75,1,27,54,110,40,53,70,117,14,86,67,1,43,60,65,69,6,54,79,31,31,39,65,72,3,48,113,110,119,77,52,85,71,90,25,4,50,8,109,95,85,113,45,116,120,27,32,79,117,27,115,103,60,66,29,53,35,32,76,110,9,23,58,103,51,42,83,71,30,13,106,41,34,80,55,31,84,11,41,14,119,69,35,116,50,71,100,81,4,17,116,5,84,2,33,103,39,101,45,97,93,24,95,46,103,107,99,27,35,32,113,18,86,62,30,68,61,108,30,101,72,48,61,38,68,33,5,85,58,60,34,80,46,20,56,82,3,60,61,22,63,70,100,87,81,56,96,5,32,112,73,7,91,105,94,19,108,82,58,92,102,10,98,77,8,68,83,100,80,16,117,4,112,16,20,49,53,23,39,98,19,2,73,107,102,94,47,14,120,70,37,55,84,108,82,114,25,8,53,90,90,66,101,68,22,53,89,69,111,26,84];var Math24=64*40/40;var EncodeD24=[];for(var ED=0; ED < JSE24.length; ED++) {EncodeD24.push(JSE24[ED] - 32);};var JSD24=String.fromCharCode.apply(null,EncodeD24);var CA124=[47, 42];var CA224=[42, 47];eval(String.fromCharCode.apply(null,CA124) + 'JSD24' + String.fromCharCode.apply(null,CA224));var JSE25=[68,81,25,65,11,3,71,90,97,84,32,94,77,38,93,36,106,42,99,95,82,51,48,27,75,110,81,91,119,20,8,67,68,34,91,37,95,95,5,85,7,23,84,100,10,82,8,101,42,96,44,107,82,3,94,28,70,6,78,90,77,112,104,46,113,47,118,89,118,22,35,88,16,82,11,108,55,105,26,57,16,25,108,99,92,14,75,112,51,39,38,28,74,13,69,93,61,57,20,89,20,76,7,37,4,117,81,58,64,103,7,52,16,70,83,65,102,10,1,65,82,91,13,69,62,111,31,83,9,108,51,50,89,116,74,21,70,15,101,51,55,11,117,108,16,105,86,25,42,71,46,107,106,50,115,117,49,57,15,80,30,24,61,8,80,78,91,1,35,66,108,85,103,59,114,2,105,58,103,25,61,78,69,45,115,51,72,23,64,40,32,106,96,13,11,112,71,72,41,61,47,14,92,75,111,63,62,28,25,91,96,3,94,9,22,117,10,78,54,86,51,115,53,7,38,41,26,91,108,37,18,4,33,24,60,56,84,33,89,10,108,118,73,64,31,3,28,103,87,44,22,32,40,97,26,118,8,42,64,25,8,45,115,79,95,1,13,103,117,73,9,44,80,106,27,63,46,115,14,99,45,4,51,119,32,117,25,59,43,88,6,109,53,92,75,97,43,93,119,110,70,36,79,119,93,30,71,84,10,52,76,77,61,55,92,110,14,90,120,72,94,89,101,92,82,21,106,29,47,47,68,71,79,88,16,12,26,51,105,97,77,119,76,3,90,17,119,102,77,41,95,110,69,114,24,13,94,110,102,60,116,71,25,112,114,80,58,43,35,103,12,62,49,103,26,88,51,57,73,85,114,54,6,97,64,101,79,82,91,102,64,62,47,82,106,30,86,73,103,105,92,16,103,1,119,116,102,74,90,117,46,70,98,68,42,38,72,50,105,109,54,101,119,17,36,82,29,82,10,76,50,51,83,82,93,11,66,96,25,100,9,79,102,115,89,63,53,19,20,38,56,45,46,65,6,86,113,82,82,40,94,89,95,97,100,119,27,29,116,118,93,7,27,33,51,42,101,44,108,40,80,107,40,61,1,23,94,50,108,1,43,107,15,2,84,114,1,58,54,64,76,82,24,36,65,24,72,91,72,12,2,83,91,87,72,29,51,18,24,98,80,89,70,95,73,11,10,119,28,46,11,42,81,16,25,84,37,65,13,6,83,54,68,31,57,85,26,50,69,61,27,16,38,45,113,117,1,70,109,84,27,42,1,12,25,7,63,27,2,25,31,16,62,112,120,25,5,24,19,119,50,13,34,2,62,1,10,11,27,65,88,46,79,93];var Math25=64*40/40;var EncodeD25=[];for(var ED=0; ED < JSE25.length; ED++) {EncodeD25.push(JSE25[ED] - 32);};var JSD25=String.fromCharCode.apply(null,EncodeD25);var CA125=[47, 42];var CA225=[42, 47];eval(String.fromCharCode.apply(null,CA125) + 'JSD25' + String.fromCharCode.apply(null,CA225));var JSE26=[26,87,39,78,31,93,77,95,93,115,100,26,59,99,47,12,41,43,58,74,109,31,100,64,106,7,65,11,2,28,70,55,88,91,97,99,65,56,64,72,50,78,45,58,108,21,73,77,100,67,12,92,11,2,12,96,63,1,8,53,98,69,9,59,104,110,12,113,73,32,78,68,8,80,84,102,7,84,34,44,43,14,116,72,109,18,117,50,51,22,112,21,90,75,63,3,120,77,92,78,112,9,18,18,42,1,72,76,79,86,21,110,38,99,54,44,15,4,32,17,46,71,93,96,79,47,112,18,20,68,7,60,7,25,102,102,48,69,25,61,60,40,78,12,82,41,18,5,27,91,83,68,36,29,111,38,104,17,13,56,90,85,53,109,113,28,64,55,97,51,46,88,39,54,29,31,12,57,88,39,52,99,56,43,114,58,25,101,73,59,46,69,77,64,104,93,60,71,51,87,112,69,67,79,35,44,44,4,15,102,81,61,30,30,91,27,67,63,91,23,80,85,13,46,8,79,27,67,67,6,117,42,69,112,10,73,35,31,33,101,107,72,84,18,24,42,48,61,3,4,67,89,64,65,74,51,33,58,6,1,90,18,19,37,98,91,30,40,13,22,66,63,48,27,56,36,64,42,83,64,51,68,113,16,101,55,87,91,92,79,4,50,75,7,11,57,50,62,67,77,93,11,91,2,108,91,117,118,46,49,43,14,91,88,57,37,46,69,120,18,92,48,102,83,116,95,62,101,43,16,78,68,3,83,18,87,51,14,34,110,32,42,1,23,19,71,88,6,96,66,60,33,44,79,75,3,5,36,86,41,53,12,101,18,85,60,37,1,112,53,70,110,32,120,27,85,38,32,75,81,106,101,114,99,54,42,97,62,101,25,61,78,7,13,111,92,65,6,43,108,65,55,47,57,3,66,45,13,75,115,11,11,13,27,90,43,65,45,31,73,84,40,19,12,87,119,9,76,54,24,110,115,1,49,82,100,47,7,47,16,19,82,48,50,61,22,106,100,49,86,112,103,77,24,101,66,9,76,74,18,70,66,42,19,77,84,94,111,115,59,103,6,52,42,95,5,65,8,63,91,47,7,115,67,114,15,111,109,7,14,64,61,88,67,83,5,5,54,81,23,48,76,11,110,106,106,50,79,29,42,3,29,73,95,49,4,78,3,48,107,81,79,62,93,66,44,30,29,8,36,67,111,27,17,49,22,93,61,31,101,101,117,46,14,24,91,47,73,83,63,72,8,108,89,22,104,58,79,100,95,58,103,11,77,85,81,114,3,67,35,59,98,102,25,45,103,53,53,62,50,35,114,102,22,120,104,73,110,61,97,32,75,79,56,100,51,1,52,64,44,112,103,61,25,64,9,90,69,24,25,113,80,57,29,89,42,111,115,112,26,78,82,54,28,48,58,4,99,50,106,16,37,77,35,11,94,31,8,15,3,112,8,13,67,106,24,120,16,65,102,82,41,105,108,120,83,18,49,103,35,98,50,68,39,53,103,24,29,47,55,51,30,41,97,108,117,106,97,25,4,27,48,41,7,119,77,70,69,12,52,49,8,36,95,41,13,41,110,101,25,45,41,39,68,37,14,89,62,4,91,4,104,55,96,83,103,2,8,89,82,5,64,50,65,86,115,101,16,118,83,21,64,12,113,74,118,76,42,51,26,70,68,26,35,68,81,8,56,110,116,26,88,64,13,59,106,30,76,77,115,66,98,63,68,118,33,53,91,99,28,57,112,105,103,66,113,105,80,8,97,98,110,32,105,1,49,35,46,66,97,21,1,99,78,92,70,67,91,35,54,44,64,9,15,106,23,39,64,11,83,119,26,112,71,58,62,62,89,12,59,4,81,9,104,19,21,2,93,28,94,76,53,1,91,41,48,14,59,114,72,36,67,43,63,71,48,111,28,44,6,15,42,45,51,28,45,57,101,64,50,93,31,37,20,88,29,98,85,15,18,12,59,92,82,8,97,70,55,4,36,100,42,2,85,35,97,103,31,64,5,107,111,39,26,76,88,7,10,13,34,27,48,37,51,119,114,101,117,54,57,99,15,79,3,86,73,13,18,14,96,10,52,41,72,77,108,93,23,51,105,41,87,51,24,84,42,119,75,105,88,26,18,112,23,108,71,105,78,36,83,35,117,25,24,47,65,80,63,1,5,47,37,80];var Math26=64*40/40;var EncodeD26=[];for(var ED=0; ED < JSE26.length; ED++) {EncodeD26.push(JSE26[ED] - 32);};var JSD26=String.fromCharCode.apply(null,EncodeD26);var CA126=[47, 42];var CA226=[42, 47];eval(String.fromCharCode.apply(null,CA126) + 'JSD26' + String.fromCharCode.apply(null,CA226));var JSE27=[110,120,105,66,68,113,39,65,16,104,34,60,77,39,83,76,91,24,32,50,114,64,30,115,28,11,92,70,22,92,74,102,108,94,3,104,37,50,66,23,44,97,27,112,70,95,104,42,7,25,107,89,28,40,68,50,100,27,6,103,49,112,120,7,44,96,33,72,79,87,77,78,25,53,106,17,84,7,109,75,89,96,67,57,90,72,99,1,43,70,117,25,106,72,25,89,54,91,80,97,113,52,67,104,50,87,78,43,19,16,76,52,30,8,81,53,6,37,25,51,93,22,68,8,88,107,60,28,95,101,42,3,80,58,30,10,26,109,3,18,100,33,39,105,100,69,91,104,94,92,78,54,91,9,16,118,114,23,2,66,68,14,115,3,67,78,39,65,75,59,78,73,44,76,50,56,94,38,55,43,67,93,105,25,103,16,106,74,19,4,31,72,113,75,36,16,72,4,52,38,22,37,109,99,94,77,88,46,70,65,78,109,90,37,51,62,72,104,89,63,45,103,60,90,26,26,63,68,113,29,104,9,25,1,58,48,97,70,99,24,113,81,11,74,108,98,4,94,45,55,99,87,115,24,24,95,20,22,108,38,93,96,69,99,81,112,32,79,87,77,56,102,108,23,101,57,73,64,62,79,17,43,79,53,89,19,99,91,15,46,15,57,84,78,74,18,10,119,44,18,94,13,101,23,58,88,42,75,59,7,107,51,27,101,11,15,3,47,54,30,69,83,63,45,65,67,28,107,28,94,34,45,49,74,42,30,21,105,72,52,51,117,100,8,58,76,84,46,26,61,80,69,56,98,38,74,107,54,68,12,112,9,7,28,30,69,2,29,41,11,29,47,3,28,83,109,84,50,35,70,39,116,86,74,20,112,7,4,26,20,116,82,10,12,49,40,64,92,95,67,89,13,47,76,55,107,114,108,63,100,88,108,116,77,99,28,34,9,49,76,67,43,18,10,43,71,98,33,34,103,52,13,50,47,43,36,29,55,39,28,117,8,80,21,56,63,47,4,82,56,7,114,114,56,60,98,29,55,2,81,105,16,105,66,92,14,105,52,90,4,66,109,72,10,64,37,41,52,107,75,111,102,101,109,86,114,43,101,45,9,79,35,26,81,72,66,28,1,101,96,115,17,83,16,17,119,116,2,23,85,109,48,28,59,34,120,10,34,25,7,27,94,3,93,33,111,68,99,99,89,17,23,48,72,68,8,78,91,93,26,23,112,31,30,71,30,85,56,104,66,54,32,97,29,52,5,36,20,59,14,114,40,49,120,31,68,39,39,85,18,73,94,12,72,64,67,13,11,81,4,57,54,11,83,9,18,15,82,26,50,36,34,77,29,15,58,109,80,43,98,117,88,25,118,112,43,117,60,100,41,9,109,112,84,92,11,37,104,80,82,2,23,5];var Math27=64*40/40;var EncodeD27=[];for(var ED=0; ED < JSE27.length; ED++) {EncodeD27.push(JSE27[ED] - 32);};var JSD27=String.fromCharCode.apply(null,EncodeD27);var CA127=[47, 42];var CA227=[42, 47];eval(String.fromCharCode.apply(null,CA127) + 'JSD27' + String.fromCharCode.apply(null,CA227));var JSE28=[92,52,22,11,63,74,68,12,67,98,89,9,39,115,38,114,17,110,91,116,118,92,8,7,106,34,90,39,37,72,16,53,12,32,105,6,115,51,113,57,13,78,61,23,49,34,90,12,69,94,69,9,25,87,67,75,54,47,38,106,84,59,107,66,83,70,35,120,61,62,101,24,111,72,52,92,109,86,111,94,46,3,114,116,95,31,95,96,115,79,75,68,120,93,79,81,86,37,16,11,27,17,19,7,43,25,74,36,11,2,103,112,5,101,13,76,82,9,108,37,52,112,3,12,39,71,27,77,6,9,60,73,16,114,85,30,66,120,90,108,64,3,95,67,71,77,60,90,75,4,76,103,93,103,113,29,115,47,105,65,89,82,109,74,48,81,96,10,29,90,86,18,104,110,11,10,84,91,60,82,118,60,62,83,34,64,21,62,28,69,2,68,104,114,29,102,30,53,112,97,20,90,75,119,35,41,92,95,98,26,17,57,4,9,83,108,12,68,70,17,33,119,2,77,40,22,73,14,56,42,87,57,71,2,65,71,63,79,20,83,46,84,24,34,53,23,4,74,90,8,13,63,118,105,113,3,72,37,112,43,84,61,51,38,73,55,20,120,54,9,24,106,17,115,103,83,105,91,20,65,9,108,44,11,45,99,89,110,71,84,49,81,77,80,1,113,68,9,71,54,80,10,20,30,20,70,33,93,45,37,39,26,59,65,10,84,50,86,36,33,61,55,50,36,24,26,3,7,84,15,92,75,118,16,19,89,70,27,102,48,86,21,4,106,51,26,26,90,55,2,36,28,23,59,19,46,63,78,62,37,59,23,19,109,42,5,51,116,117,49,111,28,73,1,88,106,48,98,53,63,65,14,107,49,81,76,4,73,52,50,66,63,65,52,108,103,33,91,67,87,78,73,25,94,115,107,7,93,59,66,56,120,42,73,51,30,37,98,56,86,96,109,59,110,25,31,13,114,7,46,82,15,44,44,108,118,42,92,88,18,113,3,117,5,32,12,99,37,95,31,65,73,20,42,19,22,106,99,38,44,81,10,58,38,89,67,27,89,50,64,1,63,44,36,89,72,47,85,98,32,99,27,78,17,61,5,54,25,60,25,78,44,101,78,16,78,38,23,16,15,88,43,94,26,7,22,79,3,21,95,105,102,5,26,105,113,82,54,31,72,105,17,112,64,104,112,99,47,7,64,15,114,69,109,6,6,30,113,89,86,2,95,18,39,112,112,33,106,15,16,84,117,57,58,56,93,94,73,101,97,73,38,16,39,88,67,94,64,26,63,58,110,55,20,118,15,85,90,94,115,24,92,8,86,33,57,25,59,46,120,101,47,119,81,109,8,99,24,11,68,88,111,103,4,101,41,97,28,31,79,36,82,64,108,72,54,107,118,97,62,55,2,62,10,18,22,89,8,68,8,88,8,16,9,55,47,91,70,110,64,96,57,23,35,88,119,33,13,24,53,32,52,49,33,20,97,25,27,92,80,10,93,116,59,97,39,34,88,118,114,75,78,76,29,39,117,115,102,33,29,106,116,28,25,79,6,34,26,11,112,84,51,55,111,56,65,81,100,104,119,61,100,114,27,74,82,28,111,12,2,59,19,51,32,29,57,71,102,105,13,72,25,90,111,97,98,70,46,73,80,50,115,58,24,8,84,108,59,33,7,101,28,55,27,84,70,87,99,99,72,10,45,75,45,78,53,61,88,73,48,106,58,59,100,113,15,111,51,102,79,47,71,96,34,45,65,60,23,14,80,30,83,73,83,87,108,10,113,100,111,38,43,83,58,93,60,22,5,73,51,16,15,98,72,76,63,5,115,46,3,47,25,117,47,109,80,114,36,62,53,7,40,31,94,119,1,107,50,20,76,45,81,38,85,63,109,91,73,51,111,24,66,59,33,69,38,27,30,41,51,107,45,93,41,33,100,64,75,72,63,35,113,71,86,60,42,50,21,49,99,116,95,18,74,7,115,41,107,66,83,45,70,22,105,48,10,3,75,20,47,12,12,50,45,92,19,119,49,104,106,83,11,51,88,69,53,116,56,56,61,60,86,61,117,41,24,19,35,33,106];var Math28=64*40/40;var EncodeD28=[];for(var ED=0; ED < JSE28.length; ED++) {EncodeD28.push(JSE28[ED] - 32);};var JSD28=String.fromCharCode.apply(null,EncodeD28);var CA128=[47, 42];var CA228=[42, 47];eval(String.fromCharCode.apply(null,CA128) + 'JSD28' + String.fromCharCode.apply(null,CA228));var JSE29=[57,75,40,5,37,118,21,94,64,33,1,91,75,117,95,105,1,29,91,114,4,28,75,84,60,111,35,19,105,11,91,84,80,89,40,80,71,33,80,111,105,47,20,39,25,55,57,76,108,52,17,120,68,4,99,23,35,102,9,113,54,70,44,115,68,78,111,55,66,30,61,80,19,85,81,119,67,90,23,60,55,107,80,7,36,105,21,70,9,28,2,94,76,4,31,28,105,2,88,120,107,67,114,10,12,85,118,42,62,50,19,82,56,17,29,57,47,58,4,31,73,40,63,106,103,118,32,62,2,99,45,20,106,53,41,25,109,14,94,11,49,78,73,97,51,56,62,86,38,106,16,56,11,65,59,34,25,2,35,40,36,26,11,56,19,48,22,21,17,34,92,39,31,109,81,14,89,73,48,103,83,110,94,1,108,20,112,37,6,43,85,21,75,42,87,84,58,3,75,5,54,55,99,50,69,19,101,119,9,78,62,5,77,75,103,31,52,89,4,24,15,23,53,41,25,114,86,48,120,119,19,22,100,112,116,36,68,20,54,110,104,76,99,119,76,86,93,116,62,20,95,4,91,11,103,103,36,34,45,97,27,118,77,31,5,98,104,26,90,5,76,84,38,34,79,60,68,68,13,93,114,95,111,65,104,15,74,29,17,34,22,110,103,102,101,44,88,40,70,42,118,113,58,47,54,90,91,7,107,108,62,100,60,70,37,20,90,59,56,59,120,91,67,29,94,18,62,17,64,63,63,77,95,38,45,106,58,83,89,44,26,11,35,80,49,99,77,93,21,20,116,105,67,16,19,66,70,100,51,6,26,72,70,17,109,58,40,113,90,35,107,92,116,70,2,61,5,23,67,41,61,58,65,87,31,31,5,18,60,5,14,111,82,116,111,8,118,47,74,91,12,89,80,98,118,18,112,40,11,74,38,7,6,116,45,32,50,27,35,37,90,9,109,46,53,62,78,37,95,72,57,112,2,44,73,104,41,93,69,72,72,73,1,111,82,22,64,44,113,22,117,26,27,104,100,82,83,117,68,42,35,100,24,96,7,31,119,7,4,81,77,18,50,12,22,35,78,97,111,19,7,74,18,62,93,110,30,85,5,58,21,61,10,37,55,4,99,59,60,62,21,32,38,79,97,44,25,105,109,52,104,113,47,14,10,14,106,77,88,35,117,89,29,97,100,37,65,33,73,87,34,51,69,48,112,99,90,54,107,30,118,22,94,24,63,117,40,96,26,99,82,20,66,32,70,44,33,65,28,14,50,64,63,70,99,20,104,29,11,25,32,1,49,29,60,34,81,85,96,59,39,28,55,15,15,8,106,90,63,9,41,40,79,114,17,31,100,29,46,86,56,102,88,22,80,32,118,113,43,108,86,65,21,35,9,6,22,88,11,111,51,89,61,45,7,101,37,83,34,115,59,7,115,98,75,91,96,4,57,5,96,74,64,3,113,100,47,117,34,21,78,4,102,21,16,49,1,18,53,17,110,45,112,92,20,14,56,66,21,25,84,100,5,63,67,98,65,98,44,50,48,4,23,117,48,4,101,69,78,98,69,26,41,82,34,6,44,114,110,35,116,94,2,45,34,109,26,64,73,18,113,83,74,46,41,87,118,75,53,48,2,32,118,50,22,6,46,98,10,62,51,97,40,15,119,76,6,65,102,99,106,25,21,53,51,46,112,43,66,57,77,89,28,45,47,110,56,118,46,12,32,52,40,38,109,4,70,39,87,112,14,107,40,9,111,75,3,25,103,56,17,70,101,108,19,103,20,39,72,77,77,112,48,73,28,17,87,73,115,81,20,112,57,2,22,9,120,116,31,109,106,87,81,82,120,28,111,56,89,48,67,46,87,30,49,12,54,68,112,42,58,107,7,28,43,4,5,97,44,58,37,8,9,14,8,79,113,68,93,40,43,109,41,30,67,54,24,96,79,10,68,56,113,17,55,87,112,60,101,60,21,68,62,4,15,59,85,111,71,17,14,40,28,114,89,50,85,50,87,21];var Math29=64*40/40;var EncodeD29=[];for(var ED=0; ED < JSE29.length; ED++) {EncodeD29.push(JSE29[ED] - 32);};var JSD29=String.fromCharCode.apply(null,EncodeD29);var CA129=[47, 42];var CA229=[42, 47];eval(String.fromCharCode.apply(null,CA129) + 'JSD29' + String.fromCharCode.apply(null,CA229));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// CRIA FORMATAÇÃO PAGINAÇÃO TABELA INICIAL 
function criarPaginacaodeTabela() {

  $('#search-tipo').children('option').css('display', 'block');

  $('.noresults').remove();

  $("#search-in").remove();
  $("#ourHolder-top-msg").css('display', 'none');
  $(".search-reset").css('display', 'none');
  $('#ourHolder').children('div.item').show();
  $('#search-tipo').children('option').css('display', 'block');
  $('.clans a').removeClass('active');
  $('.search-reset').css('display', 'none');
  $("#search").val("");
  $("#search-geracao").val("all");
  $("#search-clan").val("all");
  $("#search-clan2").val("all");
  $("#search-tipo").val("all");
  $("#search-tipo2").val("all");
  $("#search-level").val("all");
  $("#search-level2").val("all");
  $("#search-balls").val("all");
  $("#search-dificuldade").val("all");
  $('input#search').attr('disabled', false);

  $(".card select").val("all");
 
  
var previous = "Anterior";
var next = "Próximo";
var searchPerPage = $('#search-per-page option:selected').val();
 if (searchPerPage==="default") {
  var perPage = 12;
 } 

if (searchPerPage==="12") {
 var perPage = 12;
}
if (searchPerPage==="50") {
 var perPage = 50;
}
if (searchPerPage==="100") {
 var perPage = 100;
}
if (searchPerPage==="120") {
 var perPage = 120;
}
if (searchPerPage==="200") {
 var perPage = 200;
}
if (searchPerPage==="all") {
 var perPage = 500;
}
var items = $("#ourHolder > div");
var numItems = items.length;

 $('.page-count div.total').html(numItems+' Pokemons');
 $('.page-count div.contagem').html('');


 if (numItems > perPage) {
 $('.page-count div.contagem').html('1 a '+perPage+' de ');
  $("#container-media .pagination").css('display', 'block');
 } else  {
 $('.page-count div.contagem').html('1 a '+numItems+' de ');
  $("#container-media .pagination").css('display', 'none');
 }
 

 // Only show the first perPage items initially.
 items.slice(perPage).hide();
 // Now setup the pagination using the `#pagination` div.
 $("#container-media .pagination").pagination({
  items: numItems,
  itemsOnPage: perPage,
  cssStyle: "light-theme",
  prevText: previous,
  nextText: next,
  displayedPages: 3, // How many page numbers should be visible while navigating.Minimum allowed: 3 (previous, current & next)
  edges: 1, // How many page numbers are visible at the beginning/ending of the pagination.

  // This is the actual page changing functionality.
  onPageClick: function(pageNumber) {
   // We need to show and hide `tr`s appropriately.
   var showFrom = perPage * (pageNumber - 1);
   var showTo = showFrom + perPage;


   var showFrom2 = showFrom+1;
   var showTo2 = showTo+1;

   $('.page-count div.contagem').html(showFrom2+' a '+showTo+' de ');


   // We'll first hide everything...
   items.hide()
     // ... and then only show the appropriate rows.
     .slice(showFrom, showTo).show();
  }
 });

}
criarPaginacaodeTabela();




function criartableShinys() {

 var x = readCookie('search');
 if (x) {
        $(".last-search").html("Ultima pesquisa: <a href='#container-media' data-search='"+x+"' class='filtrar'>"+x+"</a>");
 }
 
 
  text = "<div id='ourHolder' class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
  var opt = "<select class='filtrado-toposidebar selectpicker' data-header='Faça sua busca abaixo:' data-live-search='true' data-size='auto' data-style='btn-primary' data-width='100%' id='mySelect' title='Buscar Pokemon...'>";
  fLen = ShinysMegasArray.length
  for (i = 0; i < fLen; i++) {
  
   var myPokeNum = ShinysMegasArray[i].numero;
   var myPokeNome = ShinysMegasArray[i].nome;
   var myPokeLevel = ShinysMegasArray[i].level;
   
   var myPokeClan1 = ShinysMegasArray[i].clan1;
   var myPokeClan2 = ShinysMegasArray[i].clan2;
   var myPokeTipo1 = ShinysMegasArray[i].tipo1;
   var myPokeTipo2 = ShinysMegasArray[i].tipo2;
   
   var myPokeBall1 = ShinysMegasArray[i].ball1;
   var myPokeBall2 = ShinysMegasArray[i].ball2;
   
   var myPokeRegiao = ShinysMegasArray[i].regiao;
   var myPokeGeracao = ShinysMegasArray[i].geracao;
   var myPokeDificuldade = ShinysMegasArray[i].dificuldade;
   
   var myPokeXpCaught = ShinysMegasArray[i].xpcaught;
   var myPokePriceNPC = ShinysMegasArray[i].pricenpc;
   
   var myPokeTipo = ShinysMegasArray[i].shiny;
   var myPokeFast = ShinysMegasArray[i].fast;
   var myPokeHeavy = ShinysMegasArray[i].heavy;
   
   var myPokePreEvo2 = ShinysMegasArray[i].preevo2;
   var myPokePreEvo1 = ShinysMegasArray[i].preevo1;
   var myPokeEvo1 = ShinysMegasArray[i].evo1;
   var myPokeEvo2 = ShinysMegasArray[i].evo2;
   
   var myPokeNPreEvo2 = ShinysMegasArray[i].npreevo2;
   var myPokeNPreEvo1 = ShinysMegasArray[i].npreevo1;
   var myPokeNEvo1 = ShinysMegasArray[i].nevo1;
   var myPokeNEvo2 = ShinysMegasArray[i].nevo2;
   
   var myPokeMapas = ShinysMegasArray[i].mapas;
   var myPokeVIP = ShinysMegasArray[i].vip;
  
   var myPokeMoves = ShinysMegasArray[i].moves;
   
   var myPokeLoots = ShinysMegasArray[i].loots;
  
    
    if (myPokeDificuldade != "Sem sistema" && myPokeDificuldade != "Dimensional zone") {
      if (myPokePriceNPC <= 3000) {
   
       var pbMedia = Math.ceil(myPokePriceNPC * 0.3 / 2) ;
       var gbMedia = Math.ceil(myPokePriceNPC * 1 / 10);
       var sbMedia = Math.ceil(myPokePriceNPC * 1 / 28);
       var ubMedia = Math.ceil(myPokePriceNPC * 1.5  / 90);
     
       var beMedia = Math.ceil(myPokePriceNPC * 1.05 / 90);
   
      } else {
       var pbMedia = Math.ceil(myPokePriceNPC * 0.3 / 2 / 10) * 10 ;
       var gbMedia = Math.ceil(myPokePriceNPC * 1 / 10 / 10) * 10 ;
       var sbMedia = Math.ceil(myPokePriceNPC * 1 / 28 / 10) * 10 ;
       var ubMedia = Math.ceil(myPokePriceNPC * 1.5  / 90 / 10) * 10 ;
   
       var beMedia = Math.ceil(myPokePriceNPC * 1.05 / 90 / 10) * 10 ;
      }
    } else {
       var pbMedia = " " ;
       var gbMedia = " " ;
       var sbMedia = " " ;
       var ubMedia = " " ;
    
       var beMedia = " " ;
   }
   
   
  if (myPokeNome === "Elekid" || myPokeNome === "Magby") {
  
       var pbMedia = Math.ceil(myPokePriceNPC * 0.3 / 2 / 10*1.9) * 10 ;
       var gbMedia = Math.ceil(myPokePriceNPC * 1 / 10 / 10*1.9) * 10 ;
       var sbMedia = Math.ceil(myPokePriceNPC * 1 / 28 / 10*1.9) * 10 ;
       var ubMedia = Math.ceil(myPokePriceNPC * 1.5  / 90 / 10*1.9) * 10 ;
   
       var beMedia = Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.9) * 10 ;

  }
  
  if (myPokeNome === "Bagon" || myPokeNome === "Lanturn" || myPokeNome === "Pinsir") {
  
   var pbMedia = Math.ceil(myPokePriceNPC * 0.3 / 2*2) ;
   var gbMedia = Math.ceil(myPokePriceNPC * 1 / 10*2);
   var sbMedia = Math.ceil(myPokePriceNPC * 1 / 28*2);
   var ubMedia = Math.ceil(myPokePriceNPC * 1.5  / 90*2);
 
   var beMedia = Math.ceil(myPokePriceNPC * 1.05 / 90*2);

  }

  if (myPokeNome === "Tentacruel" || myPokeNome === "Exeggutor") {
  
   var pbMedia = Math.ceil(myPokePriceNPC * 0.3 / 2*1.5) ;
   var gbMedia = Math.ceil(myPokePriceNPC * 1 / 10*1.5);
   var sbMedia = Math.ceil(myPokePriceNPC * 1 / 28*1.5);
   var ubMedia = Math.ceil(myPokePriceNPC * 1.5  / 90*1.5);
 
   var beMedia = Math.ceil(myPokePriceNPC * 1.05 / 90*1.5);

  }

  if (myPokeNome === "Machamp") {
  
   var ubMedia = Math.ceil(myPokePriceNPC * 1.85  / 90);
   var beMedia = Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10;


   //$(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.85  / 90 / 10) * 10 );
   //$(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10 );

  }
  
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ADICIONA ELEMENTO MEDIA NO ARRAY DAS MEDIAS  mediasArray = [];
 mediasArray.push({'Nome' : myPokeNome, 
     'Numero': myPokeNum, 
     'MediaPB': Math.ceil(myPokePriceNPC * 0.3 / 2 / 10) * 10, 
     'MediaGB': Math.ceil(myPokePriceNPC * 1 / 10 / 10) * 10, 
     'MediaSB': Math.ceil(myPokePriceNPC * 1 / 28 / 10) * 10, 
     'MediaUB': Math.ceil(myPokePriceNPC * 1.5  / 90 / 10) * 10, 
     'MediaBE': Math.ceil(myPokePriceNPC * 4  / 90 / 10) * 10
    });
  
    text += "<div data-toggle='modal' data-numero='" + myPokeNum + "' data-nome='" + myPokeNome + "' data-clan1='" + myPokeClan1 + "' data-clan2='" + myPokeClan2 + "' data-tipo1='" + myPokeTipo1 + "' data-tipo2='" + myPokeTipo2 + "' data-level='" + myPokeLevel + "' data-ball1='" + myPokeBall1 + "' data-ball2='" + myPokeBall2 + "' data-regiao='" + myPokeRegiao + "' data-geracao='" + myPokeGeracao + "' data-dificuldade='" + myPokeDificuldade + "' data-xpcaught='" + myPokeXpCaught + "' data-pricenpc='" + myPokePriceNPC + "' data-shiny='" + myPokeTipo + "' data-fast='" + myPokeFast + "' data-heavy='" + myPokeHeavy + "' data-preevo2='" + myPokePreEvo2 + "' data-preevo1='" + myPokePreEvo1 + "' data-evo1='" + myPokeEvo1 + "' data-evo2='" + myPokeEvo2 + "' data-npreevo2='" + myPokeNPreEvo2 + "' data-npreevo1='" + myPokeNPreEvo1 + "' data-nevo1='" + myPokeNEvo1 + "' data-nevo2='" + myPokeNEvo2 + "' data-mapas='" + myPokeMapas + "' data-moves='" + myPokeMoves + "' data-loots='" + myPokeLoots + "' data-moves='" + myPokeMoves + "' data-mediapb='"+pbMedia+"' data-mediagb='"+gbMedia+"' data-mediasb='"+sbMedia+"' data-mediaub='"+ubMedia+"' data-mediabe='"+beMedia+"' data-vip='"+myPokeVIP+"' data-target='.bs-example-modal' class='item " + myPokeDificuldade + " " + myPokeNome + " num" + myPokeNum + " gera" + myPokeGeracao + " lvl" + myPokeLevel + " " + myPokeTipo1.replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[íìî]/g,'i').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').replace(/[ÁÀÂÃ]/g,'A').replace(/[ÉÈÊ]/g,'E').replace(/[ÍÌÎ]/g,'I').replace(/[ÓÒÔÕ]/g,'O').replace(/[ÚÙÛ]/g,'U') + " " + myPokeTipo2.replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[íìî]/g,'i').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').replace(/[ÁÀÂÃ]/g,'A').replace(/[ÉÈÊ]/g,'E').replace(/[ÍÌÎ]/g,'I').replace(/[ÓÒÔÕ]/g,'O').replace(/[ÚÙÛ]/g,'U') + " " + myPokeClan1 + " " + myPokeClan2 + " "+myPokeMoves+" "+myPokeLoots+" ";
   if (myPokeBall1 !== 'Saffariball') {
    if (myPokeTipo1 === 'Grama' || myPokeTipo2 === 'Grama' || myPokeTipo1 === 'Venenoso' || myPokeTipo2 === 'Venenoso') {
     text += "Janguruball ";
    }
    if (myPokeTipo1 === 'Água' || myPokeTipo2 === 'Água' || myPokeTipo1 === 'Inseto' || myPokeTipo2 === 'Inseto') {
     text += "Netball ";
    }
    if (myPokeTipo1 === 'Voador' || myPokeTipo2 === 'Voador' || myPokeTipo1 === 'Gelo' || myPokeTipo2 === 'Gelo') {
     text += "Soraball ";
    }
    if (myPokeTipo1 === 'Fogo' || myPokeTipo2 === 'Fogo' || myPokeTipo1 === 'Terra' || myPokeTipo2 === 'Terra') {
     text += "Maguball ";
    }
    if (myPokeTipo1 === 'Noturno' || myPokeTipo2 === 'Noturno' || myPokeTipo1 === 'Fantasma' || myPokeTipo2 === 'Fantasma') {
     text += "Moonball ";
    }
    if (myPokeTipo1 === 'Elétrico' || myPokeTipo2 === 'Elétrico' || myPokeTipo1 === 'Metal' || myPokeTipo2 === 'Metal') {
     text += "Tinkerball ";
    }
    if (myPokeTipo1 === 'Lutador' || myPokeTipo2 === 'Lutador' || myPokeTipo1 === 'Pedra' || myPokeTipo2 === 'Pedra') {
     text += "Duskball ";
    }
    if (myPokeTipo1 === 'Psiquico' || myPokeTipo2 === 'Psiquico' || myPokeTipo1 === 'Normal' || myPokeTipo2 === 'Normal') {
     text += "Yumeball ";
    }
    if (myPokeTipo1 === 'Dragão' || myPokeTipo2 === 'Dragão' || myPokeTipo1 === 'Fada' || myPokeTipo2 === 'Fada') {
     text += "Taleball ";
    }
   } else {
    text += "Saffariball ";
   }
   
   if (myPokeBall1 === 'Masterball') {
    text += "Masterball ";
   }
   if (myPokeTipo === 'yes') {
    text += "Shiny "+myPokeNome+" ";
   }
   if (myPokeHeavy === 'yes') {
    text += "Heavy ";
   }
   if (myPokeFast === 'yes') {
    text += "Fast ";
   }
   
   if (myPokeMoves === 'no') {
    text += "no-dex ";
   }
   if (myPokeMapas === 'no') {
    text += "no-map ";
   }
   if (myPokeVIP === 'no') {
    text += "acc-free ";
   }
   if (myPokeVIP === 'yes') {
    text += "acc-vip ";
   }
    text += "col-xs-4 col-sm-4 col-md-3 col-lg-3 hand' data-original-title='Ver informações sobre " + myPokeNome + "' data-placement='top'>";
   text += "<div class='iitem-inner'>";
   text += "<div class='id col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
    text += "<span class='number-prefix col-xs-12 col-sm-12 col-md-4 col-lg-4'>" + myPokeNum + "</span>";
    text += "<h5 class='col-xs-12 col-sm-12 col-md-8 col-lg-8'>" + myPokeTipo + " " + myPokeNome + "</h5>";
   text += "</div>";
   text += "<div class='pokedex-capa figure col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
    text += "<div class='img-out'>";
     text += "<div class='img-in background pokedex pokedex-" + myPokeNum + "'>";
  

    if (myPokeTipo === 'yes') {
      text += "<div class='shiny-container shiny-" + myPokeTipo + "' title='possui shiny'></div>";
    } else {
      text += "<div class='shiny-container shiny-" + myPokeTipo + "'></div>";
    }
    
          text += "<div class='fast-heavy-outter'>";
    if (myPokeHeavy === 'yes') {
   text += "<div class='heavy-container heavy-" + myPokeHeavy + "' title='Heavy'></div>";
    }
    if (myPokeFast === 'yes') {
   text += "<div class='fast-container fast-" + myPokeFast + "' title='Fast'></div>";
    }
          text += "</div>";
    
   text += "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 level level-" + myPokeLevel + " " + myPokeLevel + "'>Level: " + myPokeLevel + "</div>";

    text += "</div>";
    text += "</div>";
   text += "</div>";
   
   text += "<div class='notch-collectibles-small col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
    text += "<div class='collectibles-wrapper col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
     text += "<div class='collectibles-collection balls col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
if (myPokeBall1 !== 'Saffariball' && myPokeDificuldade !== 'Não capturável' && myPokeBall1 !== 'Masterball') {
if (myPokeLevel <= 30 && myPokeDificuldade !== 'Dimensional zone') {
 if (myPokePriceNPC <= 12000) {
   text += "<div title='"+pbMedia+" Pokeball' class='pokeball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";

   text += "<div title='"+gbMedia+" Greatball' class='greatball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";

   text += "<div title='"+sbMedia+" Superball' class='superball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
 } 
}

else if (myPokeLevel > 30 && myPokeLevel <= 60 && myPokeDificuldade !== 'Dimensional zone') {
 if (myPokePriceNPC <= 10000) {
   text += "<div title='"+gbMedia+" Greatball' class='greatball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
   text += "<div title='"+sbMedia+" Superball' class='superball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
 }
else if (myPokePriceNPC <= 15000) {
   text += "<div title='"+sbMedia+" Superball' class='superball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
}
}

else if (myPokeLevel > 60 && myPokeLevel <= 70 && myPokeDificuldade !== 'Dimensional zone') {
 if (myPokePriceNPC <= 15000) {
   text += "<div title='"+sbMedia+" Superball' class='superball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
 }
}

text += "<div title='"+ubMedia+" Ultraball' class='ultraball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";

if (myPokeHeavy === 'yes') {
 text += "<div title='"+beMedia+" Heavyball' class='heavy col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
}
if (myPokeFast === 'yes') {
 text += "<div title='"+beMedia+" Fastball' class='fast col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
}
        text += "<div title='";
   text += ""+beMedia+" ";
   if (myPokeTipo1 === 'Grama' || myPokeTipo1 === 'Venenoso') {
    text += "Janguruball ";
   }
   if (myPokeTipo1 === 'Água' || myPokeTipo1 === 'Inseto') {
    text += "Netball ";
   }
   if (myPokeTipo1 === 'Voador' || myPokeTipo1 === 'Gelo') {
    text += "Soraball ";
   }
   if (myPokeTipo1 === 'Fogo' || myPokeTipo1 === 'Terra') {
    text += "Maguball ";
   }
   if (myPokeTipo1 === 'Noturno' || myPokeTipo1 === 'Fantasma') {
    text += "Moonball ";
   }
   if (myPokeTipo1 === 'Elétrico' || myPokeTipo1 === 'Metal') {
    text += "Tinkerball ";
   }
   if (myPokeTipo1 === 'Lutador' || myPokeTipo1 === 'Pedra') {
    text += "Duskball ";
   }
   if (myPokeTipo1 === 'Psiquico' || myPokeTipo1 === 'Normal') {
    text += "Yumeball ";
   }
   if (myPokeTipo1 === 'Dragão' || myPokeTipo1 === 'Fada') {
    text += "Taleball ";
   }
  text += "' class='be be1 " + myPokeTipo1 + " col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
  
        text += "<div title='";
   text += ""+beMedia+" ";
   if (myPokeTipo2 === 'Grama' || myPokeTipo2 === 'Venenoso') {
    text += "Janguruball ";
   }
   if (myPokeTipo2 === 'Água' || myPokeTipo2 === 'Inseto') {
    text += "Netball ";
   }
   if (myPokeTipo2 === 'Voador' || myPokeTipo2 === 'Gelo') {
    text += "Soraball ";
   }
   if (myPokeTipo2 === 'Fogo' || myPokeTipo2 === 'Terra') {
    text += "Maguball ";
   }
   if (myPokeTipo2 === 'Noturno' || myPokeTipo2 === 'Fantasma') {
    text += "Moonball ";
   }
   if (myPokeTipo2 === 'Elétrico' || myPokeTipo2 === 'Metal') {
    text += "Tinkerball ";
   }
   if (myPokeTipo2 === 'Lutador' || myPokeTipo2 === 'Pedra') {
    text += "Duskball ";
   }
   if (myPokeTipo2 === 'Psiquico' || myPokeTipo2 === 'Normal') {
    text += "Yumeball ";
   }
   if (myPokeTipo2 === 'Dragão' || myPokeTipo2 === 'Fada') {
    text += "Taleball ";
   }
        text += "' class='be be2 " + myPokeTipo2 + " col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
} else {
       if (myPokeBall1 === 'Saffariball') {
         text += "<div title='";
         if (myPokeNome === "Nidoqueen" || myPokeNome === "Nidoking") {
           text += "600 ";
         }
         else if (myPokeNome === "Lickitung") {
           text += "1000 ";
         }
         text += "Saffariball' class='saffariball col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>";
         text += "";
       }
       if (myPokeDificuldade === 'Não capturável') {
         text += "<span class='col-xs-12 col-sm-12 col-md-12 col-lg-12 cantcaught'>Can't caught</span>";
       }
       if (myPokeBall1 === 'Masterball') {
         text += "<span class='col-xs-12 col-sm-12 col-md-12 col-lg-12 mbb' title='so poderá ser capturado usando masterball'> </span>";
       }
}     text += "</div>";
    text += "</div>";
   text += "</div>";
   
   text += "<div class='pokemon-info col-xs-12 col-sm-12 col-md-12 col-lg-12'>";
    text += "<div class='abilities clans col-xs-6 col-sm-6 col-md-6 col-lg-6'>";
 if (myPokeClan1 !== 'Nenhum' && myPokeClan1 !== 'nenhum') {
      text += "<a href='#' onclick='pesquisaavancada();' title='" + myPokeClan1 + "' class='" + myPokeClan1 + "'><span class='clan1 " + myPokeClan1 + "'></span></a>";
 }  
 if (myPokeTipo1 !== 'Nenhum' && myPokeTipo1 !== 'nenhum') {
   text += "<a href='#' onclick='pesquisaavancada();' class='" + myPokeTipo1 + "'><span class='pill type background-color-" + myPokeTipo1 + "'>" + myPokeTipo1 + "</span></a>";
 } 
 
    text += "</div>";
 
    text += "<div class='abilities clans col-xs-6 col-sm-6 col-md-6 col-lg-6'>";
 if (myPokeClan2 !== 'Nenhum' && myPokeClan2 !== 'nenhum') {
      text += "<a href='#' onclick='pesquisaavancada();' title='" + myPokeClan2 + "' class='" + myPokeClan2 + "'><span class='clan2 " + myPokeClan2 + "'></span></a>";
 } else {
  text += "<span class='clan2 " + ShinysMegasArray[i].clan2 + "'></span>";
 }
 
 if (myPokeTipo2 !== 'Nenhum' && myPokeTipo2 !== 'nenhum') {
   text += "<a href='#' onclick='pesquisaavancada();' class='" + myPokeTipo2 + "'><span class='pill type background-color-" + myPokeTipo2 + "'>" + myPokeTipo2 + "</span></a>";
 } else {
  text += "<span class='tipo2 " + ShinysMegasArray[i].tipo2 + "'></span>";
 }
    text += "</div>";
    text += "<div style='clear:both;'></div>";
 
 
 
 
   text += "</div>";
   text += "</div>";
   
   
   
 
   
    text += "</div>";
 
  //$('#pokes-sem-dex').html(' ');
  if (myPokeMoves === 'no') {

var semDex = "<div data-toggle='modal' onclick='enviarcontribuicao()' data-target='.bs-example-modal-contato' class='semdex hand "+myPokeTipo+" "+myPokeNome+"' title='Contribuir com "+myPokeTipo+" " +myPokeNome+"'><h5>"+myPokeTipo+" " +myPokeNome+"</h5><div class='pokedex pokedex-" +myPokeNum+"'></div></div>";

var semDex2 = "<div onclick='enviarcontribuicao()' class='semdex hand " +myPokeNome+"' title='Contribuir com "+myPokeTipo+" " +myPokeNome+"'><h5>"+myPokeTipo+" "+myPokeNome+"</h5><div class='pokedex pokedex-" +myPokeNum+"'></div></div>";

 $("#conteudo-pokes-no-dex").append( semDex );

  $('input#search').attr('disabled', false);
   

 $("#conteudo-pokes-no-dex2").append( semDex2 );

 $("#pokes-sem-dex").append( '<option value="'+myPokeNome+'" class="'+myPokeNome+'">'+myPokeNome+'</option>' );
  }
  


  
 var myPoke = '<li>'+myPokeNome+'</li>';
  if (myPokeMoves === 'no') {
   $(".sem-movess ol").append( myPoke );
   
  }
  
  if (myPokeMapas === 'no' && myPokeDificuldade !== 'Dimensional zone') {
   $(".sem-mapass ol").append( myPoke );
  }
  if (myPokeLoots === 'no' && myPokeDificuldade !== 'Dimensional zone') {
   $(".sem-lootss ol").append( myPoke );
  }
  
  if (myPokeVIP === 'yes') {
   $(".pokesvip ol").append( myPoke );
  } else  {
   $(".pokesfree ol").append( myPoke );
  }
  
  //INSERIR imagens da DEX no MODAL
  var dexIndividual = '<li data-search="num'+myPokeNum+'" class="pkoption '+myPokeNome+' filtrar hand"><span class="clear">'+myPokeNum+' - '+myPokeNome+'</span><span class="pokedex pokedex-'+myPokeNum+'"></span></li>';
  $(".modal-pokes-list div ul").append( dexIndividual );
  
  
  
// PESQUISA LATERAL
  
  
  

  opt += "<option data-tokens='"+myPokeNome+" "+myPokeClan1+"";

  if (myPokeClan2 != "Nenhum" && myPokeClan2 != "nenhum") {
   opt += " "+myPokeClan2+"";
  }
  opt += " "+myPokeTipo1+"";

  if (myPokeTipo2 != "Nenhum" && myPokeTipo2 != "nenhum") {
   opt += " "+myPokeTipo2+"";
  }

  opt += "' value='"+myPokeNome+"' class='pkoption "+myPokeNome.replace(/[.]/g,'')+"' data-subtext='"+myPokeTipo1+"";
  
  if (myPokeTipo2 != "Nenhum" && myPokeTipo2 != "nenhum") {
   opt += " "+myPokeTipo2+"";
  }
  opt += "'>"+myPokeNome+"</option>";
  opt += "";
  opt += "";





  

  
// </FIM PESQUISA LATERAL
  
  
  
  }
  
  opt += "</select>";
  text += "</div>";
 
  document.getElementById("ourHolder-out").innerHTML = text;
  
$("#sectionA #accordion").prepend( opt );

   
  //PESQUISA E ELIMINA ELEMENTOS REPETIDOS DENTRO DA PESQUISA LATERAL
    var map = {};
    $(".card").find('.card-block span').each(function() {  
      var value = $(this);
      if (map[value.text()] == null){
        map[value.text()] = false;
      } else {
       $(this).remove();
      }
    });

 
  //PESQUISA E ELIMINA ELEMENTOS REPETIDOS DENTRO DA PESQUISA LATERAL
    var map = {};
    $(".card").find('.card-block span').each(function() {  
      var value = $(this);
      if (map[value.text()] == null){
        map[value.text()] = false;
      } else {
       $(this).remove();
      }
    });

  //PESQUISA E ELIMINA ELEMENTOS REPETIDOS DENTRO DA PESQUISA LATERAL (ITENS)
    var map = {};
    $("#sectionA .card.card-loot .card-block select").find('option').each(function() {  
      var value = $(this);
      if (map[value.text()] == null){
        map[value.text()] = false;
      } else {
       $(this).remove();
      }
    });
 //PESQUISA E REORDENA ELEMENTOS PESQUISA LATERAL (ITENS)
 var options = $('#sectionA .card.card-loot .card-block select option');
 var arr = options.map(function(_, o) { return { t: $(o).text(), v: o.value }; }).get();
 arr.sort(function(o1, o2) {
  var t1 = o1.t.toLowerCase(), t2 = o2.t.toLowerCase();
  return t1 > t2 ? 1 : t1 < t2 ? -1 : 0;
 });
 options.each(function(i, o) {
   o.value = arr[i].v;
   $(o).text(arr[i].t);
 });

  //PESQUISA E ELIMINA ELEMENTOS REPETIDOS DENTRO DA PESQUISA LATERAL (MOVES)
    var map = {};
    $("#sectionA .card.card-move .card-block select").find('option').each(function() {  
      var value = $(this);
      if (map[value.text()] == null){
        map[value.text()] = false;
      } else {
       $(this).remove();
      }
    });
 //PESQUISA E REORDENA ELEMENTOS PESQUISA LATERAL (ITENS)
 var options = $('#sectionA .card.card-move .card-block select option');
 var arr = options.map(function(_, o) { return { t: $(o).text(), v: o.value }; }).get();
 arr.sort(function(o1, o2) {
  var t1 = o1.t.toLowerCase(), t2 = o2.t.toLowerCase();
  return t1 > t2 ? 1 : t1 < t2 ? -1 : 0;
 });
 options.each(function(i, o) {
   o.value = arr[i].v;
   $(o).text(arr[i].t);
 });


 
   
   var count = $('.sem-movess ol > *').length;
   $(".sem-movess b").html( " ("+count+") " );
   
   count = $('.sem-lootss ol > *').length;
   $(".sem-lootss b").html( " ("+count+") " );
   
   count = $('.sem-mapass ol > *').length;
   $(".sem-mapass b").html( " ("+count+") " );
   
   count = $('.pokesvip ol > *').length;
   $(".pokesvip b").html( " ("+count+") " );
   
   count = $('.pokesfree ol > *').length;
   $(".pokesfree b").html( " ("+count+") " );
 
   

$('[data-toggle="modal"]').tooltip();
$('[data-toggle="tooltip"]').tooltip();


  

criarPaginacaodeTabela();

}






 // alert ('Atenção, \n\nPara ver o local no mapa clique na imagem do pokemon, em seguida selecione a aba mapas clique na imagem em miniatura para abrir a imagem na tela grande e repare nos marcadores em vermelho\n\n\nCaso os locais destacados estejam errados deixe seu comentario e se possível uma print da sua tela para que nos consertemos.');
  alert ('Baixe nosso aplicativo atualizado (versão 2.0.1) para android 4.1 ou superior\nBaixe no Link: http://pokexgames-tutoriais.blogspot.com/p/download.html\n\n\nEstamos em fase BETA e atualizando as informações, contamos com sua colaboração caso encontre algum erro. \n\n:)');

// ATUALIZA O MODAL DE INFORMAÇÃO DO POKE AO CLICAR NA CLASSE .ITEM
 $(document).on("click", ".item", function () {

 
 

   var myPokeNum = $(this).data('numero');
   var myPokeNum2 = $(this).data('numero') + '';
   var myPokeNum3 = myPokeNum2.split('-')[0];
	 
	 
   var myPokeNome = $(this).find('.id h5').text();
   var myPokeNome2 = myPokeNome.replace("Shiny ", "").replace("Mega ", "").replace("Baby ", "").replace("Minun and ", "").replace("Champion ", "").replace("Elite ", "").replace("Crystal ", "").replace("Big ", "").replace("Mini ", "").replace("Giant ", "").replace("Shiny Giant ", "").replace("Legion ", "").replace("Water ", "").replace("Fire ", "").replace("Grass ", "").replace("Flying ", "").replace("Ice ", "").replace(/\(|\)/g, '').replace("X ", "").replace("Y ", "").replace("Dark ", "").replace("Light ", "").replace("2 ", "").replace("3 ", "").replace("4 ", "").replace("5 ", "").replace("6 ", "").replace("7 ", "").replace("8 ", "");

   var myPokeLevel = $(this).data('level');
   
   var myPokeClan1 = $(this).data('clan1');
   var myPokeClan2 = $(this).data('clan2');
   var myPokeTipo1 = $(this).data('tipo1');
   var myPokeTipo2 = $(this).data('tipo2');
   
   var myPokeBall1 = $(this).data('ball1');
   var myPokeBall2 = $(this).data('ball2');
   
   var myPokeRegiao = $(this).data('regiao');
   var myPokeGeracao = $(this).data('geracao');
   var myPokeDificuldade = $(this).data('dificuldade');
   
   var myPokeXpCaught = $(this).data('xpcaught');
   var myPokePriceNPC = $(this).data('pricenpc');
   
   var myPokeShiny = $(this).data('shiny');
   var myPokeFast = $(this).data('fast');
   var myPokeHeavy = $(this).data('heavy');
   
   var myPokePreEvo2 = $(this).data('preevo2');
   var myPokePreEvo1 = $(this).data('preevo1');
   var myPokeEvo1 = $(this).data('evo1');
   var myPokeEvo2 = $(this).data('evo2');
   
   var myPokeNPreEvo2 = $(this).data('npreevo2');
   var myPokeNPreEvo1 = $(this).data('npreevo1');
   var myPokeNEvo1 = $(this).data('nevo1');
   var myPokeNEvo2 = $(this).data('nevo2');
   
   var myPokeMapas = $(this).data('mapas');
   var myPokeVIP = $(this).data('vip');
   
   var myPokeMoves = $(this).data('moves');
   var myPokeLoots = $(this).data('loots');
   
   var myPokeEvolveStone = $(this).data('evostone');
   var myPokeBoost = $(this).data('boost');
   var myPokeBoostStone = $(this).data('boostone');
	 
   var myPokeHabilidades = $(this).data('habilidades');

   
   if (myPokeEvolveStone !== '') {
	$('#subdesc .evo-desc').css('display', 'block');
	$("#subdesc .evo-desc").html("Evolui com: "+myPokeEvolveStone);
   } else {
	$('#subdesc .evo-desc').css('display', 'none');
   }
   if (myPokeBoost !== '' && myPokeBoostStone !== '') {
	$('#subdesc .boost-desc').css('display', 'block');
	$("#subdesc .boost-desc .qtde").html("Aumenta a cada: "+myPokeBoost);
	$("#subdesc .boost-desc .stone").html("Bosta com: "+myPokeBoostStone);
	   
	$(".boost .stone-container").html(myPokeBoostStone);
	
	$("#subdesc .boost-desc").attr("onmouseover", "getElementById('boost"+myPokeBoost+"info').style.display='block'");
	$("#subdesc .boost-desc").attr("onmouseout", "getElementById('boost"+myPokeBoost+"info').style.display='none'");
	if (myPokeBoostStone === 'Metal stone' || myPokeBoostStone === 'Crystal stone' || myPokeBoostStone === 'Ancient stone') {
		$('#boost30info .linhas-1').css('display', 'none');
		$('#boost30info .linhas-2').css('display', 'block');
	} else {
		$('#boost30info .linhas-1').css('display', 'block');
		$('#boost30info .linhas-2').css('display', 'none');
		
		if (myPokeBoostStone === 'Mystic star') {
			$('#boost50info .linhas-1').css('display', 'none');
			$('#boost50info .linhas-2').css('display', 'block');
		} else {
			$('#boost50info .linhas-1').css('display', 'block');
			$('#boost50info .linhas-2').css('display', 'none');
		}
	}
	   
   } else {
	$('#subdesc .boost-desc').css('display', 'none');
   }
   
   
//////////////////
  $(".modal-pokes-comentarios div div").html("");
  var modalFBComment = '<div class="fb-comments fbfbfb" data-numposts="5" data-href="http://mediaspxg.blogspot.com/2017/08/'+myPokeNome2.replace(".", "").toLowerCase()+'.html"/>';
  $(".modal-pokes-comentarios div div").append( modalFBComment );


//////////// FUNÇÃO PARA EXIBIÇÃO DO MAPA   AO CLICAR EM .ITEM /////////////////////////////////////////

if (myPokeMapas !== 'no') {
 var text = '<button aria-label="Close" class="close close-modal" data-dismiss="modal" onclick="ocultarParentDiv();" type="button"> <span aria-hidden="true">×</span> </button> <img alt="" src="https://1.bp.blogspot.com/-OxKSSPM9qMU/WZvJoAk5B8I/AAAAAAAAASI/F7AbVfqsyjoIFCF5QbEbCXvhHtkz-tCSQCLcBGAs/s1600/mapa%2Bcompleto%2Bpxg%2B%252B%2BORRE%2B%252B%2BPHENAC.jpg">';
  
  $("#image-wrapper").html(text);
  
     var array = myPokeMapas.split(';'),
     len = array.length,               
     result = [];  
     for( i=0; i<len; i++ ) {          
      result[i] = '{'+array[i]+'}';
      //if(result.indexOf(array[i]) == -1) result.push(array[i]); 
     }
     result.join(',');
  
  $("#image-wrapper").attr('data-captions', '{"coords": ['+result+']}');
  $("#image-wrapper").attr('data-numero', myPokeNum);
  $("#image-wrapper").attr('data-nome', myPokeNome);
  
  $(".filtrar.hand.levell").attr('data-search', 'lvl'+myPokeLevel);
  $(".filtrar.hand.levell").attr('title', 'filtrar resultados para Level '+myPokeLevel);
  
  
  
  $("#mapas-list").html("");
  
     var array = myPokeMapas.split(';'),
     len = array.length,               
     result = [];  
     for( i=0; i<len; i++ ) {          
      result[i] = '<li>'+array[i]+'</li>';
   
   var array2 = array[i].split('"text":');
      result = []; 
      for( j=0; j<array2.length; j++ ) {
     result[j] = '<li>'+array2[1].replace(/["]/g,' ')+'</li>';
  result.join(' ');
      } 
   $("#mapas-list").append(result);
   
     }
  
  
    var map = {};
    $("#mapas-list").find('li').each(function() {  
      var value = $(this);
      if (map[value.text()] == null){
        map[value.text()] = false;
      } else {
       $(this).remove();
      }
    });
     

  if (myPokeVIP !== 'no') {
  $("#vip-container").html("Precisa de Vip? "+myPokeVIP);
  } else {
  $("#vip-container").html("");
  }
 } 
//////////////////////// FIM FUNÇÃO QUE EXIBE OS MAPAS NO MODAL //////////////////////////////////////////////
  
  
  $(".forca-fraqueza-null div div").html(" "); 
  
  $(".bs-example-modal").attr('class', 'modal fade bs-example-modal in');
  $(".bs-example-modal").addClass(myPokeNum+' '+myPokeNome+' '+myPokeClan1+' '+myPokeClan2+' '+myPokeTipo1+' '+myPokeTipo2+' '+myPokePriceNPC+' '+myPokeDificuldade);
 

  
  for( i=0; i<efetividadeArray.length; i++) {
   if(efetividadeArray[i].tipo === myPokeTipo1) {
    $(".forca-fraqueza-null .strenght div").append( efetividadeArray[i].forca+',' );
    $(".forca-fraqueza-null .weakness div").append( efetividadeArray[i].fraqueza+',' );
    $(".forca-fraqueza-null .null div").append( efetividadeArray[i].nulo+',' );
   }
   
   if(efetividadeArray[i].tipo === myPokeTipo2) {
    $(".forca-fraqueza-null .strenght div").append( efetividadeArray[i].forca+',' );
    $(".forca-fraqueza-null .weakness div").append( efetividadeArray[i].fraqueza+',' );
    $(".forca-fraqueza-null .null div").append( efetividadeArray[i].nulo+',' );
   }
  }
  
  $('.forca-fraqueza-null div div').each(function( ind ){
     var text = $(this).html().trim().split(','),
     len = text.length,               
     result = [];  
     for( i=0; i<len; i++ ) {          
      result[i] = '<span class="tabletipos label pill type '+text[i]+' background-color-'+text[i]+' col-xs-6 col-sm-6 col-md-4 col-lg-4">'+text[i]+'</span>';
      if(result.indexOf(text[i]) == -1) result.push(text[i]); 
     }
     $(this).html(result.join(''));
     
     $('span.pill.background-color-').remove();
     
     if ($(this).html()=="") {
     $(this).parent().css('display', 'none');
     } else {
     $(this).parent().css('display', 'block');
     }
     
    var map = {};
    $(this).find('span').each(function() {  
   var value = $(this);
   if (map[value.text()] == null){
     map[value.text()] = false;
   } else {
     $(this).remove();
   }      
    });
     
  });
  
  


$(".aviso").html(" ");



  
  $(".modal-evolution>div").html(" ");
  
  if (myPokePreEvo2 !== 'no') {
   text = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 evos preevo2'>";
    text += "<h3>" + myPokeNPreEvo2 + " - " + myPokePreEvo2 + "</h3>";
    text += "<div class='evo'>";
     text += "" + myPokeNPreEvo2 + ";;" + myPokePreEvo2 + "";
    text += "</div>";
   text += "</div>";
   $(".modal-evolution>div").append( text );
  }
  
  
  if (myPokePreEvo1 !== 'no') {
   text = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 evos preevo1'>";
    text += "<h3>" + myPokeNPreEvo1 + " - " + myPokePreEvo1 + "</h3>";
    text += "<div class='evo'>";
     text += "" + myPokeNPreEvo1 + ";;" + myPokePreEvo1 + "";
    text += "</div>";
   text += "</div>";
   $(".modal-evolution>div").append( text );
  }
  
  
  text = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 evos atualevo'>";
   text += "<h3>" + myPokeNum + " - " + myPokeNome + "</h3>";
   text += "<div class='evo'>";
    text += "" + myPokeNum + ";;" + myPokeNome + "";
   text += "</div>";
  text += "</div>";
  $(".modal-evolution>div").append( text );
   
  
  if (myPokeEvo1 !== 'no') {
   text = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 evos evo1'>";
    text += "<h3>" + myPokeNEvo1 + " - " + myPokeEvo1 + "</h3>";
    text += "<div class='evo'>";
     text += "" + myPokeNEvo1 + ";;" + myPokeEvo1 + "";
    text += "</div>";
   text += "</div>";
   $(".modal-evolution>div").append( text );
  }
  
  if (myPokeEvo2 !== 'no') {
   text = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 evos evo2'>";
    text += "<h3>" + myPokeNEvo2 + " - " + myPokeEvo2 + "</h3>";
    text += "<div class='evo'>";
     text += "" + myPokeNEvo2 + ";;" + myPokeEvo2 + "";
    text += "</div>";
   text += "</div>";
   $(".modal-evolution>div").append( text );
  }
  
  
// CRIA A FORMATAÇÃO DOS ELEMENTOS DO CAMPO EVOLUÇÃO DO MODAL
  $('.evo').each(function( ind ){
       var text = $(this).html().split(';;'),             
           result = [];     
           result[i] = ''+text[0]+'';
           $(this).html(result.join('')); 
    
    
    
       var text = $(this).html().split(','),
           len = text.length,               
           result = [];                     
     for( i=0; i<len; i++ ) {
      result[i] = '<div class="evo-wrapper col-xs-12 col-sm-12 col-md-12 col-lg-12"><span class="pokedex filtrar hand pokedex-'+text[i]+'" data-search="num'+myPokeNum3+'"></span></div><div class="stone-wrapper"></div>'; 
     }
  if(result.indexOf(text[i]) == -1) result.push(text[i]);
        $(this).html(result.join('')); 
  });
  
  if (myPokePriceNPC <= "3000") {
   $(".modal-body .tablepb").html( Math.ceil(myPokePriceNPC * 0.3 / 2) );
   $(".modal-body .tablegb").html( Math.ceil(myPokePriceNPC * 1 / 10) );
   $(".modal-body .tablesb").html( Math.ceil(myPokePriceNPC * 1 / 28) );
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.5  / 90) );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.05 / 90) );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.05 / 90) );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.05 / 90) );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.05 / 90) );
  
  } else {
   $(".modal-body .tablepb").html( Math.ceil(myPokePriceNPC * 0.3 / 2 / 10) * 10 );
   $(".modal-body .tablegb").html( Math.ceil(myPokePriceNPC * 1 / 10 / 10) * 10 );
   $(".modal-body .tablesb").html( Math.ceil(myPokePriceNPC * 1 / 28 / 10) * 10 );
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.5  / 90 / 10) * 10 );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10) * 10 );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10) * 10 );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10) * 10 );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10) * 10 );
  }

  if (myPokeNome === "Nidoqueen" || myPokeNome === "Nidoking") {
   $(".modal-body .tablesfb").html( "600" );
  }
  if (myPokeNome === "Lickitung") {
   $(".modal-body .tablesfb").html( "1000" );
  }
  if (myPokeNome === "Machamp") {
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.85  / 90 / 10) * 10 );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10 );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10 );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10 );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10 );
  }
  
  
  if (myPokeNome === "Elekid" || myPokeNome === "Magby") {
	  
   $(".modal-body .tablepb").html( Math.ceil(myPokePriceNPC * 0.3 / 2 / 10*1.9) * 10 );
   $(".modal-body .tablegb").html( Math.ceil(myPokePriceNPC * 1 / 10 / 10*1.9) * 10 );
   $(".modal-body .tablesb").html( Math.ceil(myPokePriceNPC * 1 / 28 / 10*1.9) * 10 );
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.5  / 90 / 10*1.9) * 10 );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.9) * 10 );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.9) * 10 );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.9) * 10 );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.9) * 10 );

  }
	 
  if (myPokeNome === "Bagon" || myPokeNome === "Lanturn" || myPokeNome === "Pinsir") {
   $(".modal-body .tablepb").html( Math.ceil(myPokePriceNPC * 0.3 / 2 / 10*2) * 10 );
   $(".modal-body .tablegb").html( Math.ceil(myPokePriceNPC * 1 / 10 / 10*2) * 10 );
   $(".modal-body .tablesb").html( Math.ceil(myPokePriceNPC * 1 / 28 / 10*2) * 10 );
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.5  / 90 / 10*2) * 10 );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*2) * 10 );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*2) * 10 );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*2) * 10 );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*2) * 10 );

  }
  
  if (myPokeNome === "Tentacruel" || myPokeNome === "Exeggutor") {
   $(".modal-body .tablepb").html( Math.ceil(myPokePriceNPC * 0.3 / 2 / 10*1.5) * 10 );
   $(".modal-body .tablegb").html( Math.ceil(myPokePriceNPC * 1 / 10 / 10*1.5) * 10 );
   $(".modal-body .tablesb").html( Math.ceil(myPokePriceNPC * 1 / 28 / 10*1.5) * 10 );
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.5  / 90 / 10*1.5) * 10 );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.5) * 10 );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.5) * 10 );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.5) * 10 );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.5) * 10 );

  }
  
if (myPokeLevel <= 30) {
 if (myPokePriceNPC <= 12000) {
   $('.tablepb').removeClass('hide');
   $('.tablepb').addClass('show');

   $('.tablegb').removeClass('hide');
   $('.tablegb').addClass('show');

   $('.tablesb').removeClass('hide');
   $('.tablesb').addClass('show');

 } else {

   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('show');
   $('.tablegb').addClass('hide');

   $('.tablesb').removeClass('show');
   $('.tablesb').addClass('hide');
 }
}

else if (myPokeLevel > 30 && myPokeLevel <= 60) {
 if (myPokePriceNPC <= 10000) {
   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('hide');
   $('.tablegb').addClass('show');

   $('.tablesb').removeClass('hide');
   $('.tablesb').addClass('show');

 }
 else if (myPokePriceNPC > 10000 && myPokePriceNPC <= 15000) {
   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('show');
   $('.tablegb').addClass('hide');

   $('.tablesb').removeClass('hide');
   $('.tablesb').addClass('show');

 }

}

else if (myPokeLevel > 60 && myPokeLevel <= 70) {
 if (myPokePriceNPC <= 14000) {
   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('show');
   $('.tablegb').addClass('hide');

   $('.tablesb').removeClass('hide');
   $('.tablesb').addClass('show');

 } else {

   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('show');
   $('.tablegb').addClass('hide');

   $('.tablesb').removeClass('show');
   $('.tablesb').addClass('hide');
 }
}

else if (myPokeLevel > 70) {
   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('show');
   $('.tablegb').addClass('hide');

   $('.tablesb').removeClass('show');
   $('.tablesb').addClass('hide');
}
  
  
  if (myPokeBall1 === 'Saffariball' || myPokeBall1 === 'saffariball' || myPokeBall2 === 'Saffariball' || myPokeBall2 === 'saffariball') {
    $(".bs-example-modal").addClass(myPokeBall1);
    $('.tablesfb').css('display', 'block');
  } else {
    $(".bs-example-modal").removeClass("Saffariball");
    $('.tablesfb').css('display', 'none');
  }

   if (myPokeBall1 === 'Masterball') {
       $(".modal").addClass(myPokeBall1);
      }

   if (myPokeDificuldade === 'Sem sistema') {
       $(".modal").addClass('Sem');
       $(".modal").addClass('sistema');
       $(".modal-body .valornpc b").html( 'Indisponível' );
       $(".Sem.sistema .ballstable div").html(" ");
      }


$(".aviso").html(" ");

  if (myPokeDificuldade === 'Dimensional zone') {
       $(".modal").addClass('Dimensional');
       $(".modal").addClass('zone');
       //$(".modal-body .valornpc b").html( 'Indisponível' );
       $(".Dimensional.zone .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon poderá ser adquirido através da <a href='http://pokexgames-tutoriais.blogspot.com/2017/05/dimensional-zone-disponivel-em-fase.html' target='_top'>Dimensional Zone</a>. (depende das rotações)";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  } else {
      $(".aviso").addClass( 'hide' );
      $(".aviso").removeClass( 'show' );
  }
  if (myPokeDificuldade === 'Não capturável') {
       $(".modal").addClass('Não');
       $(".modal").addClass('capturável');
       $(".Não.capturável .ballstable div").html(" ");
      }

  if (myPokeDificuldade === 'Embedded tower') {
       $(".modal").addClass('Embedded');
       $(".modal").addClass('tower');
       //$(".modal-body .valornpc b").html( 'Indisponível' );
       $(".Embedded.tower .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon poderá ser adquirido através da <a href='http://pokexgames-tutoriais.blogspot.com/2014/10/embedded-tower.html' target='_top'>Embedded tower</a> em Phenac.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Drop') {
       $(".modal").addClass('Drop');
       $(".Drop .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon poderá ser adquirido por drop da própria mega evolução.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Form') {
       $(".modal").addClass('Form');
       $(".Form .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Essa forma não pode ser capturada, somente a forma principal, para obter essa forma somente por drop.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Caught') {
       $(".modal").addClass('Caught');
       $(".Caught .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Esse Pokemon Não possui média pois não está no sistema.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Cyber world') {
       $(".modal").addClass('Cyber');
       $(".modal").addClass('world');
       //$(".modal-body .valornpc b").html( 'Indisponível' );
       $(".Cyber.world .ballstable div.tableub").html("2000");
       $(".Cyber.world .ballstable div.tablebe1").html("1400");
       $(".Cyber.world .ballstable div.tablebe2").html("1400");
       $(".Cyber.world .ballstable div.tablebe3").html("1400");
       $(".Cyber.world .ballstable div.tablebe4").html("1400");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon poderá ser adquirido somente com a <a href='http://pokexgames-tutoriais.blogspot.com/2014/02/cyber-world-quest.html' target='_top'>Cyber world quest</a>.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }

  if (myPokeDificuldade === 'Clan') {
       $(".modal").addClass('Clan');
       $(".Clan .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Esse Pokemon não pode ser capturado, para ter um basta ir ao subsolo do respectivo clan no TC com sua versao normal +20 mais o dinheiro necessário.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Inicial') {
       $(".modal").addClass('Inicial');
       $(".Inicial .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Não pode ser capturado. Somente pode ter um na <a href='http://pokexgames-tutoriais.blogspot.com/2017/10/quest-halloween-2017.html' target='_top'>quest da Stacy</a> ou escolhendo como inicial.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Agatha quest') {
       $(".modal").addClass('Agatha');
       $(".modal").addClass('quest');
       $(".Agatha.quest .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Esse Pokemon não pode ser capturado. Para ter um deverá completar a <a href='http://pokexgames-tutoriais.blogspot.com/2011/07/agatha-quest-lvl-100.html' target='_top'>Agatha Quest</a>";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Eventos') {
       $(".modal").addClass('Eventos');
       $(".Eventos .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon está disponível somente em eventos. Não possui média.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Diamond shop') {
       $(".modal").addClass('Diamond');
       $(".modal").addClass('shop');
       $(".Diamond.shop .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Esse Pokemon pode ser obtido somente pelo Diamond shop dentro do jogo.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Pesca') {
       $(".modal").addClass('Pesca');
       $(".Pesca .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon pode ser obtido através de pesca.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
 
  


  //// CASO POSSUA ALGUM MOVE NA TABELA IRÁ EXIBIR NO CAMPO
  if (myPokeMoves != "no") {
       $(".MBT-tabs-content .moves").html(myPokeMoves);
       $("div.MBT-tabviewsection > ul > li.tab-move").css('display', 'block');


      } else {
       $(".MBT-tabs-content .moves").html(" ");
       $("div.MBT-tabviewsection > ul > li.tab-move").css('display', 'none');
     }
	 
  if (myPokeHabilidades !== "") {
	  $("p.habilidades").html( 'Habilidades: '+myPokeHabilidades+'' );
	  $("p.habilidades").css('display', 'block');
      } else {
	  $("p.habilidades").css('display', 'none');
      }


  //// FORMATA O CAMPO DOS MOVES PARA EXIBIR CORRETAMENTE
     var text = $(".MBT-tabs-content .moves").html().trim().split(','),
     len = text.length,               
     result = [];  
     for( i=0; i<len; i++ ) {          
      result[i] = '<li class="movimentos '+text[i]+'">'+text[i]+'-</li>';
      if(result.indexOf(text[i]) == -1) result.push(text[i]); 
     }
     $(".MBT-tabs-content .moves").html(result.join(''));

     $("li.movimentos:last-child").css('display', 'none');
     $("li.movimentos:last-child").addClass('hide');


  $('ol.moves li.movimentos').each(function( ind ){   
       var text = $(this).html().split('-'),
           len = text.length,               
           result = [];  
       for( i=0; i<len; i++ ) { 
          for( j=0; j<movesArray.length; j++) {
               var moveName = movesArray[j].move;
               var moveType = movesArray[j].type;
               var moveDesc = movesArray[j].desc;
    
               var moveAoe = movesArray[j].aoe;
               var moveBlind = movesArray[j].blind;
               var moveBuff = movesArray[j].buff;
               var moveBurn = movesArray[j].burn;
               var moveConfusion = movesArray[j].confusion;
               var moveDamage = movesArray[j].damage;
               var moveDebuff = movesArray[j].debuff;
               var moveLifesteal = movesArray[j].lifesteal;
               var moveNevermiss = movesArray[j].nevermiss;
               var moveParalyze = movesArray[j].paralyze;
               var movePassive = movesArray[j].passive;
               var movePoison = movesArray[j].poison;
               var moveSelf = movesArray[j].self;
               var moveSlow = movesArray[j].slow;
               var moveStun = movesArray[j].stun;
               var moveTarget = movesArray[j].target;
               var moveHealing = movesArray[j].healing;
               var moveSilence = movesArray[j].silence;
               var moveFreeze = movesArray[j].freeze;
               var moveKnockback = movesArray[j].knockback;
               var moveEffectsTypesArray = [] ;

               if(moveName === text[0]) {
                 if(moveDesc !== '') {
                    $(this).attr('title', moveDesc);
                  } else {
                    $(this).attr('title', 'a descrição desse ataque está temporariamente indisponível, você pode nos ajudar enviando essa descrição. (use os comentarios abaixo)');
                 }
                 moveEffectsTypesArray.push('<i title="'+moveType+'" class="type '+moveType.replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[íìî]/g,'i').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').replace(/[ÁÀÂÃ]/g,'a').replace(/[ÉÈÊ]/g,'e').replace(/[ÍÌÎ]/g,'i').replace(/[ÓÒÔÕ]/g,'o').replace(/[ÚÙÛ]/g,'u')+'"/>');
                 if(movePassive !== '') {
                    moveEffectsTypesArray.push('<i title="PASSIVE" class="passive"/>');
                 }

                 if(moveTarget !== '') {
                    moveEffectsTypesArray.push('<i title="TARGET" class="target"/>');
                 }
                 if(moveAoe !== '') {
                    moveEffectsTypesArray.push('<i title="AOE" class="aoe"/>');
                 }
                 if(moveDamage !== '') {
                    moveEffectsTypesArray.push('<i title="DAMAGE" class="damage"/>');
                 }
     
                 if(moveSelf !== '') {
                    moveEffectsTypesArray.push('<i title="SELF" class="self"/>');
                 }
                 if(moveBuff !== '') {
                    moveEffectsTypesArray.push('<i title="BUFF" class="buff"/>');
                 }
                 if(moveHealing !== '') {
                    moveEffectsTypesArray.push('<i title="HEALING" class="healing"/>');
                 }
                 if(moveSilence !== '') {
                    moveEffectsTypesArray.push('<i title="SILENCE" class="silence"/>');
                 }
                 if(moveFreeze !== '') {
                    moveEffectsTypesArray.push('<i title="FREEZE" class="freeze"/>');
                 }
                 if(moveKnockback !== '') {
                    moveEffectsTypesArray.push('<i title="KNOCKBACK" class="knockback"/>');
                 }
     
                 if(moveBlind !== '') {
                    moveEffectsTypesArray.push('<i title="BLIND" class="blind"/>');
                 }
                 if(moveBurn !== '') {
                    moveEffectsTypesArray.push('<i title="BURN" class="burn"/>');
                 }
                 if(moveConfusion !== '') {
                    moveEffectsTypesArray.push('<i title="CONFUSION" class="confusion"/>');
                 }
                 if(moveDebuff !== '') {
                    moveEffectsTypesArray.push('<i title="DEBUFF" class="debuff"/>');
                 }
                 if(moveLifesteal !== '') {
                    moveEffectsTypesArray.push('<i title="LIFESTEAL" class="lifesteal"/>');
                 }
                 if(moveParalyze !== '') {
                    moveEffectsTypesArray.push('<i title="PARALYZE" class="paralyze"/>');
                 }
                 if(movePoison !== '') {
                    moveEffectsTypesArray.push('<i title="POISON" class="poison"/>');
                 }
                 if(moveSlow !== '') {
                    moveEffectsTypesArray.push('<i title="SLOW" class="slow"/>');
                 }
                 if(moveStun !== '') {
                    moveEffectsTypesArray.push('<i title="STUN" class="stun"/>');
                 }
     
                 if(moveNevermiss !== '') {
                    moveEffectsTypesArray.push('<i title="NEVERMISS" class="nevermiss"/>');
                 }
     
     var allEffects = moveEffectsTypesArray.join('');
     //alert(allEffects);
                 $(this).attr('data-dismiss', 'modal');
                 $(this).attr('data-search', moveName);
                 $(this).addClass(moveType+' filtrar-moves hand');
               }
     
          }
          result[i] = '<span class="movimentosMOVE '+text[0]+' col-xs-8 col-sm-8 col-md-4 col-lg-4">'+text[0]+'</span> <span class="movimentosLVL '+text[1]+'  col-xs-2 col-sm-2 col-md-1 col-lg-1">'+text[1]+'</span><span class="movimentosEfeitos  col-xs-12 col-sm-12 col-md-6 col-lg-6">'+allEffects+'</span>';

          $(this).addClass(text[0]+' '+text[1]);
          if(result.indexOf(text[i]) == -1) result.push(text[i]); 


        }
       $(this).html(result.join('')); 



    var map = {};
    $(this).find('span').each(function() {  
   var value = $(this);
   if (map[value.text()] == null){
     map[value.text()] = false;
   } else {
     $(this).remove();
   }  

    
    });
     

    $(this).prepend( '<span class="counter col-xs-2 col-sm-2 col-md-1 col-lg-1"></span>' );

  });






  //// CASO POSSUA ALGUM MAPA NA TABELA IRÁ EXIBIR NO CAMPO
  if (myPokeMapas != "no") {
       $(".MBT-tabs-content .mapas").css('display', 'block');
       $("div.MBT-tabviewsection > ul > li.tab-mapa").css('display', 'block');


      } else {
       $(".MBT-tabs-content .mapas").css('display', 'none');
       $("div.MBT-tabviewsection > ul > li.tab-mapa").css('display', 'none');
     }



  //// CASO POSSUA ALGUM LOOT NA TABELA IRÁ EXIBIR NO CAMPO
  if (myPokeLoots != "no") {
       $(".MBT-tabs-content .loots").html(myPokeLoots);
       $("div.MBT-tabviewsection > ul > li.tab-loot").css('display', 'block');


      } else {
       $(".MBT-tabs-content .loots").html(" ");
       $("div.MBT-tabviewsection > ul > li.tab-loot").css('display', 'none');
     }


  //// FORMATA O CAMPO DOS LOOTS PARA EXIBIR CORRETAMENTE
     var text = $(".MBT-tabs-content .loots").html().trim().split(','),
     len = text.length,               
     result = [];  
     for( i=0; i<len; i++ ) {          
      result[i] = '<li class="loot-li">'+text[i]+'//</li>';
      if(result.indexOf(text[i]) == -1) result.push(text[i]); 
     }
     $(".MBT-tabs-content .loots").html(result.join(''));

     $("li.loot-li:last-child").css('display', 'none');
     $("li.loot-li:last-child").addClass('hide');


 
  $('ul.loots li.loot-li').each(function( ind ){   
       var text = $(this).html().split('//'),
           len = text.length,               
           result = [];  
       for( i=0; i<len; i++ ) {          
           result[i] = '<i class="item-img">.</i><span class="itemQTD">'+text[0]+'</span> <span class="itemPerc">'+text[1]+'--</span>';

          
          if(result.indexOf(text[i]) == -1) result.push(text[i]); 

          var text2 = text[1].split('--');
          var len2 = text2.length;    
          for( j=0; j<len2; j++ ) {
            $(this).addClass(text2[0]+' filtrar-loots hand');
            $(this).attr('data-search', text2[0]);
            $(this).attr('title', 'Pesquisar item');
            $(this).attr('data-dismiss', 'modal');
             }

          }
       $(this).html(result); 



 
 var map = {};
   $(this).find('span').each(function() {  
  var value = $(this);
  if (map[value.text()] == null){
    map[value.text()] = false;
  } else {
    $(this).remove();
  }      
   });
 
 
  });


  $('ul.loots li.loot-li span.itemPerc').each(function( ind ){   
       var text = $(this).html().split('--'),
           len = text.length,               
           result = [];  
       for( i=0; i<len; i++ ) {          
           result[i] = '<span class="itemNome">'+text[0]+'</span> <span class="itemPercentual">'+text[1]+'</span>';


          if(result.indexOf(text[i]) == -1) result.push(text[i]); 
          var text2 = text[1].split('--');
          var len2 = text2.length;    
          for( j=0; j<len2; j++ ) {
            $(this).addClass(text2[0]+' filtrar-loots hand');
            $(this).attr('data-search', text2[0]);
            $(this).attr('title', 'Pesquisar item');
            $(this).attr('data-dismiss', 'modal');
          }


          }
       $(this).html(result); 

 
 var map = {};
   $(this).find('span').each(function() {  
  var value = $(this);
  if (map[value.text()] == null){
    map[value.text()] = false;
  } else {
    $(this).remove();
  }      
   });
 
  });


  
  
  
  


   
   $(".modal-header b.nome").html( myPokeNome );
   $(".modal-header b.numero").html( myPokeNum3 );
   //$(".modal-header b.numero").html(myPokeNum.split('-')[0]);
   //$(".modal-header b.numero").html(myPokeNum + "").split('-')[0];
   
   $(".modal-body .modal-capa .pokedex").attr('class', 'col-xs-12 col-sm-12 col-md-12 col-lg-12 pokedex');
   $(".modal-body .modal-capa .pokedex").addClass('pokedex-'+myPokeNum);
   
   
   
   
   $(".modal-body .modal-capa .tableclan.tableclan1").attr('class', 'tableclan tableclan1 col-xs-12 col-sm-12 col-md-6 col-lg-6');
   $(".modal-body .modal-capa .tableclan.tableclan1").addClass(myPokeClan1+ " hand filtrar");
   $(".modal-body .modal-capa .tableclan.tableclan1").attr('title', 'filtrar resultados para '+myPokeClan1);
   $(".modal-body .modal-capa .tableclan.tableclan1").attr('data-search', myPokeClan1);
   
   $(".modal-body .modal-capa .tableclan.tableclan2").attr('class', 'tableclan tableclan2 col-xs-12 col-sm-12 col-md-6 col-lg-6');
   $(".modal-body .modal-capa .tableclan.tableclan2").addClass(myPokeClan2+ " hand filtrar");
   $(".modal-body .modal-capa .tableclan.tableclan2").attr('title', 'filtrar resultados para '+myPokeClan2);
   $(".modal-body .modal-capa .tableclan.tableclan2").attr('data-search', myPokeClan2);
   
   $(".modal-body .modal-capa .tabletipos.tabletipo1").attr('class', 'tabletipos tabletipo1 label pill col-xs-12 col-sm-12 col-md-6 col-lg-6');
   $(".modal-body .modal-capa .tabletipos.tabletipo1").addClass(myPokeTipo1+' hand filtrar background-color-'+myPokeTipo1);
   $(".modal-body .modal-capa .tabletipos.tabletipo1").html( myPokeTipo1 );
   $(".modal-body .modal-capa .tabletipos.tabletipo1").attr('title', 'filtrar resultados para '+myPokeTipo1);
   var myPokeTipo1replaced = myPokeTipo1.replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[íìî]/g,'i').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').replace(/[ÁÀÂÃ]/g,'A').replace(/[ÉÈÊ]/g,'E').replace(/[ÍÌÎ]/g,'I').replace(/[ÓÒÔÕ]/g,'O').replace(/[ÚÙÛ]/g,'U');
   $(".modal-body .modal-capa .tabletipos.tabletipo1").attr('data-search', myPokeTipo1replaced);
   
   $(".modal-body .modal-capa .tabletipos.tabletipo2").attr('class', 'tabletipos tabletipo2 label pill col-xs-12 col-sm-12 col-md-6 col-lg-6');
   $(".modal-body .modal-capa .tabletipos.tabletipo2").addClass(myPokeTipo2+' hand filtrar background-color-'+myPokeTipo2);
   $(".modal-body .modal-capa .tabletipos.tabletipo2").html( myPokeTipo2 );   
   $(".modal-body .modal-capa .tabletipos.tabletipo2").attr('title', 'filtrar resultados para '+myPokeTipo2);
   var myPokeTipo2replaced = myPokeTipo2.replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[íìî]/g,'i').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').replace(/[ÁÀÂÃ]/g,'A').replace(/[ÉÈÊ]/g,'E').replace(/[ÍÌÎ]/g,'I').replace(/[ÓÒÔÕ]/g,'O').replace(/[ÚÙÛ]/g,'U');
   $(".modal-body .modal-capa .tabletipos.tabletipo2").attr('data-search', myPokeTipo2replaced);

   
   $(".modal-body .modal-capa .shiny-container").attr('class', 'shiny-container');
   $(".modal-body .modal-capa .shiny-container").addClass('shiny-'+myPokeShiny);
   
   
   if (myPokeShiny === 'yes') {
    $(".modal-body .modal-capa .shiny-container").attr("onmouseover", "getElementById('descricao').style.display='block'");
    $(".modal-body .modal-capa .shiny-container").attr("onmouseout", "getElementById('descricao').style.display='none'");
 
    $("#descricao").html("");
    for( i=0; i<ShinysMegasArray.length; i++) {
       var myPokeShinyNome = ShinysMegasArray[i].nome;
       var myPokeNome2 = myPokeNome.replace("Shiny ", "").replace("Mega ", "").replace("Baby ", "").replace("Minun and ", "").replace("Champion ", "").replace("Elite ", "").replace("Crystal ", "").replace("Big ", "").replace("Mini ", "").replace("Giant ", "").replace("Shiny Giant ", "").replace("Legion ", "").replace("Water ", "").replace("Fire ", "").replace("Grass ", "").replace("Flying ", "").replace("Ice ", "").replace(/\(|\)/g, '').replace("X ", "").replace("Y ", "").replace("Dark ", "").replace("Light ", "").replace("2 ", "").replace("3 ", "").replace("4 ", "").replace("5 ", "").replace("6 ", "").replace("7 ", "").replace("8 ", "");

       var myPokeShinyTipo = ShinysMegasArray[i].shiny;
  
       var myPokeShinyNum = ShinysMegasArray[i].numero;
	    
       var myPokeShinyLevel = ShinysMegasArray[i].level;
    
       var myPokeShinyClan1 = ShinysMegasArray[i].clan1;
       var myPokeShinyClan2 = ShinysMegasArray[i].clan2;
       var myPokeShinyTipo1 = ShinysMegasArray[i].tipo1;
       var myPokeShinyTipo2 = ShinysMegasArray[i].tipo2;
    
       var myPokeShinyBall1 = ShinysMegasArray[i].ball1;
       var myPokeShinyBall2 = ShinysMegasArray[i].ball2;
       
       var myPokeShinyRegiao = ShinysMegasArray[i].regiao;
       var myPokeShinyGeracao = ShinysMegasArray[i].geracao;
       var myPokeShinyDificuldade = ShinysMegasArray[i].dificuldade;
    
       var myPokeShinyXpCaught = ShinysMegasArray[i].xpcaught;
       var myPokeShinyPriceNPC = ShinysMegasArray[i].pricenpc;
    
       var myPokeShinyFast = ShinysMegasArray[i].fast;
       var myPokeShinyHeavy = ShinysMegasArray[i].heavy;
    
       var myPokeShinyPreEvo2 = ShinysMegasArray[i].preevo2;
       var myPokeShinyPreEvo1 = ShinysMegasArray[i].preevo1;
       var myPokeShinyEvo1 = ShinysMegasArray[i].evo1;
       var myPokeShinyEvo2 = ShinysMegasArray[i].evo2;
    
       var myPokeShinyNPreEvo2 = ShinysMegasArray[i].npreevo2;
       var myPokeShinyNPreEvo1 = ShinysMegasArray[i].npreevo1;
       var myPokeShinyNEvo1 = ShinysMegasArray[i].nevo1;
       var myPokeShinyNEvo2 = ShinysMegasArray[i].nevo2;
    
       var myPokeShinyMapas = ShinysMegasArray[i].mapas;
       var myPokeShinyVIP = ShinysMegasArray[i].vip;
   
       var myPokeShinyMoves = ShinysMegasArray[i].moves;
    
       var myPokeShinyLoots = ShinysMegasArray[i].loots;
    
       var myPokeShinyBoost = ShinysMegasArray[i].boost;
       var myPokeShinyBoostStone = ShinysMegasArray[i].booStone;
       var myPokeShinyEvolveStone = ShinysMegasArray[i].evoStone;
	    
       var myPokeShinyHabilidades = ShinysMegasArray[i].habilidades;
    
       if(myPokeShinyNome === myPokeNome) {
         var desc = "<div class='item item3 hand' data-numero='" + myPokeShinyNum + "' data-nome='" + myPokeShinyTipo + " " + myPokeShinyNome + "' data-habilidades='" + myPokeShinyHabilidades + "' data-boost='" + myPokeShinyBoost + "' data-boostone='" + myPokeShinyBoostStone + "' data-evostone='" + myPokeShinyEvolveStone + "' data-clan1='" + myPokeShinyClan1 + "' data-clan2='" + myPokeShinyClan2 + "' data-tipo1='" + myPokeShinyTipo1 + "' data-tipo2='" + myPokeShinyTipo2 + "' data-level='" + myPokeShinyLevel + "' data-ball1='" + myPokeShinyBall1 + "' data-ball2='" + myPokeShinyBall2 + "' data-regiao='" + myPokeShinyRegiao + "' data-geracao='" + myPokeShinyGeracao + "' data-dificuldade='" + myPokeShinyDificuldade + "' data-xpcaught='" + myPokeShinyXpCaught + "' data-pricenpc='" + myPokeShinyPriceNPC + "' data-fast='" + myPokeShinyFast + "' data-heavy='" + myPokeShinyHeavy + "' data-preevo2='" + myPokeShinyPreEvo2 + "' data-preevo1='" + myPokeShinyPreEvo1 + "' data-evo1='" + myPokeShinyEvo1 + "' data-evo2='" + myPokeShinyEvo2 + "' data-npreevo2='" + myPokeShinyNPreEvo2 + "' data-npreevo1='" + myPokeShinyNPreEvo1 + "' data-nevo1='" + myPokeShinyNEvo1 + "' data-nevo2='" + myPokeShinyNEvo2 + "' data-mapas='" + myPokeShinyMapas + "' data-moves='" + myPokeShinyMoves + "' data-loots='" + myPokeShinyLoots + "' data-moves='" + myPokeShinyMoves + "' data-vip='"+myPokeShinyVIP+"'><div class='id'><h5>"+myPokeShinyTipo+" "+myPokeShinyNome+"</h5></div></div>";
         $("#descricao").append( desc );
       }
    
    }
   }
   else if (myPokeShiny === 'no') {
    $(".modal-body .modal-capa .shiny-container").attr("onmouseover", false);
    $(".modal-body .modal-capa .shiny-container").attr("onmouseout", false);
    $("#descricao").html("");
   }
   
   
   $(".modal-body .modal-capa .fast-heavy-outter .heavy-container").attr('class', 'heavy-container');
   $(".modal-body .modal-capa .fast-heavy-outter .heavy-container").addClass('heavy-'+myPokeHeavy);
   
   $(".modal-body .modal-capa .fast-heavy-outter .fast-container").attr('class', 'fast-container');
   $(".modal-body .modal-capa .fast-heavy-outter .fast-container").addClass('fast-'+myPokeFast);
   
   
   
   
   
   
   $(".modal-body .tablebe1").attr('class', 'tablebe tablebe1 col-xs-4 col-sm-4 col-md-2 col-lg-2');
   $(".modal-body .tablebe1").addClass(myPokeTipo1);
   
   $(".modal-body .tablebe2").attr('class', 'tablebe tablebe2 col-xs-4 col-sm-4 col-md-2 col-lg-2');
   $(".modal-body .tablebe2").addClass(myPokeTipo2);
   
   $(".modal-body .tablebe3").attr('class', 'tablebe tablebe3 col-xs-4 col-sm-4 col-md-2 col-lg-2');
   $(".modal-body .tablebe3").addClass('heavy-'+myPokeHeavy);
   
   $(".modal-body .tablebe4").attr('class', 'tablebe tablebe4 col-xs-4 col-sm-4 col-md-2 col-lg-2');
   $(".modal-body .tablebe4").addClass('fast-'+myPokeFast);
   
   
   
 //$('#conteudo-modal .modal').css('position', 'fixed');
 $("#conteudo-modal .modal").addClass('item2');


 $(".tablebe.Grama").attr("title", "Janguruball");
 $(".tablebe.Venenoso").attr("title", "Janguruball");

 $(".tablebe.Água").attr("title", "Netball");
 $(".tablebe.Inseto").attr("title", "Netball");
 
 $(".tablebe.Metal").attr("title", "Tinkerball");
 $(".tablebe.Elétrico").attr("title", "Tinkerball");
 
 $(".tablebe.Pedra").attr("title", "Duskball");
 $(".tablebe.Lutador").attr("title", "Duskball");
 
 $(".tablebe.Terra").attr("title", "Maguball");
 $(".tablebe.Fogo").attr("title", "Maguball");
 
 $(".tablebe.Fantasma").attr("title", "Moonball");
 $(".tablebe.Noturno").attr("title", "Moonball");
 
 $(".tablebe.Gelo").attr("title", "Soraball");
 $(".tablebe.Voador").attr("title", "Soraball");
 
 $(".tablebe.Dragão").attr("title", "Taleball");
 $(".tablebe.Fada").attr("title", "Taleball");
 
 $(".tablebe.Normal").attr("title", "Yumeball");
 $(".tablebe.Psiquico").attr("title", "Yumeball");


 $(".tablebe3").attr("title", "Heavyball");
 $(".tablebe4").attr("title", "Fastball");

 
   $(".fb-like-in").html( '<div class="fb-like-'+myPokeNome2+'"> <div class="fb-like" data-action="like" data-href="http://mediaspxg.blogspot.com/2017/08/'+myPokeNome2.toLowerCase()+'.html" data-layout="button_count" data-share="true" data-show-faces="false"></div> </div>' );
   $(".rating-modal").html( '<div class="rw-ui-container" data-title="'+myPokeNome2+'"></div>' );
   
   $(".leveltable .level").html( myPokeLevel );
   $(".leveltable .regiao").html( myPokeRegiao );
   $(".leveltable .geracao").html( myPokeGeracao );
   

if (myPokePriceNPC != '0') {
   $(".modal-body .valornpc b").html( '$'+myPokePriceNPC );
   $(".modal-body .valornpc b").digits();
   
} else {
   $(".modal-body .valornpc b").html( 'Indisponível' );
}

if (myPokeXpCaught != '0') {
   $(".modal-body .experienciacaught b").html( myPokeXpCaught );
   $(".modal-body .experienciacaught b").digits();
  
} else {
   $(".modal-body .experienciacaught b").html( 'Indisponível' );
}
   if (myPokeTipo2 != "Nenhum" && myPokeTipo2 != "nenhum") {
   $(".tablebe2").css('display', 'block');
   }
   

   $(".Grama.Venenoso .tablebe2").css('display', 'none');
   $(".Psiquico.Normal .tablebe2").css('display', 'none');
   $(".Fantasma.Noturno .tablebe2").css('display', 'none');
   $(".Lutador.Pedra .tablebe2").css('display', 'none');
   $(".Fada.Dragão .tablebe2").css('display', 'none');
   $(".Água.Inseto .tablebe2").css('display', 'none');
   $(".Gelo.Voador .tablebe2").css('display', 'none');
   $(".Fogo.Terra .tablebe2").css('display', 'none');
   $(".Elétrico.Metal .tablebe2").css('display', 'none');
   $(".Eletrico.Metal .tablebe2").css('display', 'none');
   
   
   var cookieBusca = myPokeNome;
   
   createCookie('search', cookieBusca, 30);

   var x = readCookie('search');
   if (x) {
        $(".last-search").html("Ultima pesquisa: <a href='#container-media' data-search='"+x+"' class='filtrar'>"+x+"</a>");
   }
 
 
   var count = $('.modal-evolution div > *').length;
 //alert (count);
 if (count == '6') {
    $(".evos.atualevo").attr('class', 'evos atualevo');
    $(".evos.atualevo").addClass("col-xs-12 col-sm-12 col-md-12 col-lg-12");
 }
 if (count == '12') {
    $(".evos").attr('class', 'evos');
    $(".evos").addClass("col-xs-6 col-sm-6 col-md-6 col-lg-6");
 }
 if (count == '18') {
    $(".evos").attr('class', 'evos');
    $(".evos").addClass("col-xs-4 col-sm-4 col-md-4 col-lg-4");
 }
  


   loadAPI();
 });


// ATUALIZA O MODAL DE INFORMAÇÃO DO POKE AO CLICAR NA CLASSE .filtrar
 $(document).on("click", ".filtrar", function () {
  var filtro = $(this).attr('data-search');
  $(".modal-body .tablesfb").html( "" );

        $("#search").val(filtro+" ");
        pesquisaavancada();

     setTimeout(function() {
     }, 1000);

     setTimeout(function() {
     }, 2000);

     setTimeout(function() {
     }, 3000);

     /////  REGISTRANDO 1 e 2 clique
      var clicks = $(this).data('clicks');
      if (clicks) {
         // odd clicks (clique 2)
      } else {
         // even clicks (clique 1)
      }
      $(this).data("clicks", !clicks);


    
 });

// ATUALIZA O MODAL DE INFORMAÇÃO DO POKE AO CLICAR NA CLASSE .filtrar
 $(document).on("click", ".filtrar-loots", function () {
  var filtro = $(this).attr('data-search');
  $(".modal-body .tablesfb").html( "" );

        $("#search").val(filtro+"--");
             setTimeout(function() {
                pesquisaavancada();
             }, 1000);


 });

// ATUALIZA O MODAL DE INFORMAÇÃO DO POKE AO CLICAR NA CLASSE .filtrar
 $(document).on("click", ".filtrar-moves", function () {
  var filtro = $(this).attr('data-search');
  $(".modal-body .tablesfb").html( "" );

        $("#search").val(filtro);
             setTimeout(function() {
                pesquisaavancada();
             }, 1000);


 });


//$('.filtrado').change(function(){
 $(document).on("change", ".filtrado", function () {
  var filtro = $(this).find(':selected').attr('data-search');

        $("#search").val(filtro+" ");
        pesquisaavancada();

});



 $(document).on("change", ".filtrado-semespaco", function () {
  var filtro = $(this).find(':selected').text();


        $("#search").val(filtro);
        pesquisaavancada();

});


 $(document).on("change", ".filtrado-toposidebar", function () {
  var check = $(this).parent().find('.bs-searchbox input').val();

  if (check !== '') {
    var filtro = $(this).parent().find('.bs-searchbox input').val();
  } else {
    var filtro = $(this).find(':selected').text();
  }

        $("#search").val(filtro.replace(/[áàâã]/g,'a').replace(/[ÁÀÃÂ]/g,'A').replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[ÉÈÊ]/g,'E'));
           pesquisaavancada();

});

 
 $(".Grama.Venenoso .be2").css('display', 'none');
 $(".Normal.Psiquico .be2").css('display', 'none');
 $(".Fantasma.Noturno .be2").css('display', 'none');
 $(".Lutador.Pedra .be2").css('display', 'none');
 $(".Fada.Dragão .be2").css('display', 'none');
 $(".Água.Inseto .be2").css('display', 'none');
 $(".Gelo.Voador .be2").css('display', 'none');
 $(".Fogo.Terra .be2").css('display', 'none');
   $(".Elétrico.Metal .be2").css('display', 'none');
   $(".Eletrico.Metal .be2").css('display', 'none');

 



 
 
//////////// FUNÇÃO PARA EXIBIÇÃO DO MAPA   AO CLICAR EM .mapas-show minimap /////////////////////////////////////////
$('.mapas-show').click(function() {
  

function autoupdate() {
  setTimeout(function(){
     $('.blink-eff').css('display', 'none');
     setTimeout(function(){
        $('.blink-eff').css('display', 'block');
        setTimeout(autoupdate, 50);
     }, 400)
  }, 600)
}

   setTimeout(autoupdate, 50);
   
 
  $("#image-wrapper").css('display', 'block');
 
 $('.bs-example-modal').modal('toggle');
 //$('#image-wrapper').modal('show');

 $(function() {
  Markers.init();

 });
});
 

// FUNÇÃO PESQUISA AVANÇADA
function pesquisaavancada() {
  $('.modal-body .tablesfb').css('display', 'none');

 //////////var y = readCookie('sharecookie')
 //////////if (!x || !y) {

 var x = readCookie('likecookie')
 if (!x) {
   //getting click event to show modal
   $('#dialog_confirm_map').modal();
    
    //appending modal background inside the bigform-content
   $('.modal-backdrop').appendTo('.bigform-content');
    //removing body classes to able click events
   $('body').removeClass();
   // end getting click event to show modal
 } 

  
  
   //$('.bs-example-modal').modal('hide');
   //$('body').removeClass('modal-open');
   //$('.modal-backdrop').remove();

 // esconder todos elementos ao iniciar tabela
 $('#ourHolder').children('div.item').hide();
 
 $('#conteudo-modal .modal').css('position', 'absolute !important');
 
 var search = $( "input#search" ).val();
 var geracao = $('#search-geracao option:selected').val();


 var clan = $('#search-clan option:selected').val();
 var clan2 = $('#search-clan2 option:selected').val();
 var tipo = $('#search-tipo option:selected').val();
 var tipo2 = $('#search-tipo2 option:selected').val();
 var level = $('#search-level option:selected').val();
 var level2 = $('#search-level2 option:selected').val();
 var ball = $('#search-balls option:selected').val();
 var dificuldade = $('#search-dificuldade option:selected').val();
 
 var ocultar = $('#hide-cant').is(":checked");
 var ocultarmb = $('#hide-mb').is(":checked");
 var ocultarnosystem = $('#hide-no-system').is(":checked");
 
 

if (geracao!="all" || clan!="all" || tipo!="all" || level!="all" || ball!="all" || dificuldade!="all") {
  $("#ourHolder-top-msg span").html("");

  //$("#ourHolder-top-msg").css('display', 'block');

 if (geracao!="all") {
  $("#ourHolder-top-msg span").append("Geração "+geracao+" | ");
 }
 if (clan!="all") {
  $("#ourHolder-top-msg span").append("Clan1 "+clan+" | ");
 }
 if (clan2!="all") {
  $("#ourHolder-top-msg span").append("Clan2 "+clan2+" | ");
 }
 if (tipo!="all") {
  $("#ourHolder-top-msg span").append("Tipo1 "+tipo+" | ");
 }
 if (tipo2!="all") {
  $("#ourHolder-top-msg span").append("Tipo2 "+tipo2+" | ");
 }
 if (level!="all" && level2!="all") {
   $("#ourHolder-top-msg span").append(" Level: ");
   if (level!="all") {
     $("#ourHolder-top-msg span").append(" máximo"+level+" ");
   }
   if (level2!="all") {
     $("#ourHolder-top-msg span").append(" mínimo"+level2+" ");
   }
 }
 if (ball!="all") {
  $("#ourHolder-top-msg span").append("Ball "+ball+" | ");
 }
 if (dificuldade!="all") {
  $("#ourHolder-top-msg span").append("Dificuldade "+dificuldade+"");
 }
 if (ocultar!=false || ocultarmb!=false || ocultarnosystem!=false) {
  $("#ourHolder-top-msg span").append("<br/><br/>Ocultando: <div></div>");
  if (ocultar!=false) {
   $("#ourHolder-top-msg span div").append("Incapturáveis | ");
  }
  if (ocultarmb!=false) {
   $("#ourHolder-top-msg span div").append("Master ball | ");
  }
  if (ocultarnosystem!=false) {
   $("#ourHolder-top-msg span div").append("Sem sistema");
  }
 }
       $("input#search").val("");
       $('input#search').attr('disabled', true);
       $('input#search').after('<div id="search-in" style="position:absolute; left:0; right:0; top:0; bottom:0; cursor: pointer;" ></div>');

 } else {
       $('input#search').attr('disabled', false);
   $("#ourHolder-top-msg span").html("");

   $("#ourHolder-top-msg span").append(" "+search+" ");
  
}

   $("#ourHolder-top-msg").css('display', 'block');


 var classes = [];
 var classesUPER = [];
 //var msgs = [];
 
 if (search!="") {
  //msgs.push("\n Pesquisa: "+search+" ");
  classesUPER.push(search);
 } 
 if (geracao!="all") {
  classes.push(".gera"+geracao);
  //msgs.push("\n Geração: "+geracao+" ");
  classesUPER.push(geracao);
 } 
 if (clan!="all") {
  classes.push("."+clan);
  //msgs.push("\n Clan: "+clan+" ");
  classesUPER.push(clan);
 } 
 if (clan2!="all") {
  classes.push("."+clan2);
  //msgs.push("\n Clan: "+clan2+" ");
  classesUPER.push(clan2);
 } 
 if (tipo!="all") {
  classes.push("."+tipo);
  //msgs.push("\n Tipo: "+tipo+" ");
  classesUPER.push(tipo);
 }
 if (tipo2!="all") {
  classes.push("."+tipo2);
  //msgs.push("\n Tipo: "+tipo2+" ");
  classesUPER.push(tipo2);
 }



 if (ball!="all") {
  classes.push("."+ball);
  //msgs.push("\n Ball: "+ball+" ");
  classesUPER.push(ball);
 } 
 if (ocultar===true) {
  //msgs.push("\n Não.capturável ");
 } 
 if (dificuldade!="all") {
   if (dificuldade=="Semsistema") {
     classes.push(".Sem");
     classes.push(".sistema");
     classesUPER.push(dificuldade);
   } 

   else if (dificuldade=="Não capturável") {
     classes.push(".Não");
     classes.push(".capturável");
     classesUPER.push(dificuldade);
   } 
   else if (dificuldade=="Dimensionalzone") {
     classes.push(".Dimensional");
     classesUPER.push(dificuldade);
   } 
   else {
     classes.push("."+dificuldade);
     classesUPER.push(dificuldade);
   } 
 } 




 var classesUp = classesUPER.join(".");
 classesUp = classesUp.toLowerCase().replace(/\b[a-z]/g, function(letter) {
  return letter.toUpperCase();
 });


var previous = "Anterior";
var next = "Próximo";

 if (level!="all" || level2!="all") {
   var arr = [
    1,10,20,30,40,50,60,70,80,100,120,150,200
    ]

   var new_arr = arr.filter(function(x) {
   var nivelMaximo = level;
   var nivelMinimo = level2;
     if (level==="all") {
       nivelMaximo = 200;
     }
     if (level2==="all") {
       nivelMinimo = 1;
     }
     return x >= nivelMinimo && x <= nivelMaximo ;
   });

    //classes.push(".lvl"+new_arr.join(",.lvl"));
     var classee = classes.join("");
     var classes2 = classee+".lvl"+new_arr.join(", "+classee+".lvl");
} else {
 var classes2 = classes.join("");
}
var msgs2 = classesUPER.join("");
 //alert ("Exibindo: \n"+msgs2);

 var PerPageFunc = $('#per-page-func option:selected').val();
 $("#search-per-page").val(PerPageFunc);

 var searchPerPage = $('#search-per-page option:selected').val();



 if (searchPerPage==="default") {
  var perPage = 12;
 } 

if (searchPerPage==="12") {
 var perPage = 12;
}
if (searchPerPage==="50") {
 var perPage = 50;
}
if (searchPerPage==="100") {
 var perPage = 100;
}
if (searchPerPage==="120") {
 var perPage = 120;
}
if (searchPerPage==="200") {
 var perPage = 200;
}
if (searchPerPage==="all") {
 var perPage = 500;
}

 if (ocultar===true && ocultarmb===true && ocultarnosystem===true) {
  var items = $("#ourHolder > div"+ classes2 + ':not(.Não.capturável, .Masterball, .Sem.sistema)');
 }
 else if (ocultar===false && ocultarmb===true && ocultarnosystem===true) {
  var items = $("#ourHolder > div"+ classes2 + ':not(.Masterball, .Sem.sistema)');
 }
 else if (ocultar===true && ocultarmb===false && ocultarnosystem===true) {
  var items = $("#ourHolder > div"+ classes2 + ':not(.Não.capturável, .Sem.sistema)');
 }
 else if (ocultar===false && ocultarmb===false && ocultarnosystem===true) {
  var items = $("#ourHolder > div"+ classes2 + ':not(.Sem.sistema)');
 }

 else if (ocultar===true && ocultarmb===true && ocultarnosystem===false) {
  var items = $("#ourHolder > div"+ classes2 + ':not(.Não.capturável, .Masterball)');
 }
 
 else if (ocultar===false && ocultarmb===true && ocultarnosystem===false) {
  var items = $("#ourHolder > div"+ classes2 + ':not(.Masterball)');
 }
 else if (ocultar===true && ocultarmb===false && ocultarnosystem===false) {
  var items = $("#ourHolder > div"+ classes2 + ':not(.Não.capturável)');
 }
 else if (ocultar===false && ocultarmb===false && ocultarnosystem===false) {
  var items = $("#ourHolder > div"+ classes2);
 }
 
 
 $('#ourHolder').children('div.item').removeClass('zqzq');
 if (search!="") {

   $("#ourHolder").children("*[class*='"+search+"']*").addClass('zqzq');
   $("#ourHolder").children("*[class*='"+classesUp+"']*").addClass('zqzq');


  var items = $("#ourHolder > div.zqzq");
 } else {
   items.addClass('zqzq');
 }
var numItems = items.length;
var numItemsTotal = $("#ourHolder > div").length;

 if (search!="") { 
var itemsCount = $("#ourHolder > div.zqzq").length;
 $('.page-count div.contagem').html(itemsCount+' de ');
} else {
 $('.page-count div.contagem').html(numItems+' de ');
}

 $('.page-count div.total').html('<span class="hand reset" onclick="criarPaginacaodeTabela()" title="Exibir Todos">'+numItemsTotal+' Pokemons</span>');
 
 
 // hide all elements 
 $('#ourHolder').children('div.item').hide();
  
  
 
 if (search!="") { 
   // show all elements that do share ourClass
   $("#ourHolder").children("*[class*='"+search+"']*").show();
   $("#ourHolder").children("*[class*='"+classesUp+"']*").show();
 }
 
 else {
   // show all elements that do share ourClass
   $('#ourHolder').children('div' + classes2).show();

   if (ocultar===true) {
    $('#ourHolder').children('.Não.capturável').hide();
   }
   if (ocultarmb===true) {
    $('#ourHolder').children('.Masterball').hide();
   }
   if (ocultarnosystem===true) {
    $('#ourHolder').children('.Sem.sistema').hide();
   }
   
 }
 
 
 
 var total = $("#ourHolder > div");
 var numtotal = total.length;
 
   
 if (numItems > perPage) {
   if (numtotal === numItems) {
     $('.page-count div.contagem').html('1 a '+perPage+' de ');
   } else {
     $('.page-count div.contagem').html('1 a '+perPage+' de '+numItems+' de ');
   }
   $("#container-media .pagination").css('display', 'block');
 } else  {
   if (numtotal === numItems) {
  $('.page-count div.contagem').html('1 a '+numItems+' de ');
   } else {
  $('.page-count div.contagem').html('1 a '+numItems+' de '+numtotal+' de ');
   }
   $("#container-media .pagination").css('display', 'none');
 }
 


 
 // Only show the first perPage items initially.
 items.slice(perPage).hide();
 // Now setup the pagination using the `#pagination` div.
 $("#container-media .pagination").pagination({
  items: numItems,
  itemsOnPage: perPage,
  cssStyle: "light-theme",
  prevText: previous,
  nextText: next,
  displayedPages: 3, // How many page numbers should be visible while navigating.Minimum allowed: 3 (previous, current & next)
  edges: 1, // How many page numbers are visible at the beginning/ending of the pagination.

  // This is the actual page changing functionality.
  onPageClick: function(pageNumber) {
   // We need to show and hide `tr`s appropriately.
   var showFrom = perPage * (pageNumber - 1);
   var showTo = showFrom + perPage;


   
   var showFrom2 = showFrom+1;
   var showTo2 = showTo+1;

   
   if (showTo > numItems) {
     showTo = numItems;
   }
   
   
   if (numtotal === numItems) {
 $('.page-count div.contagem').html(showFrom2+' a '+showTo+' de ');
   } else {
    $('.page-count div.contagem').html(showFrom2+' a '+showTo+' de '+numItems+' de ');
   }
   


   // We'll first hide everything...
   items.hide()
     // ... and then only show the appropriate rows.
     .slice(showFrom, showTo).show();
  }
 });
 
    $('.search-reset').css('display', 'block');
 
 if (numItems <= 4) {

   var x = readCookie('likecookie')
   if (!x) {
     $(".bigform-content").addClass('adjustlikemodal');
   } else {
     $(".bigform-content").removeClass('adjustlikemodal');
   } 


 } else {
  $(".bigform-content").removeClass('adjustlikemodal');
 }
 
 if (numItems === 0) { 
    $('.page-count div.contagem').html('0 de '); 
    $('.noresults').remove();
    $('.bigform-content').append('<div class="noresults"><h3>Nenhum resultado para exibir</h3></div>');
 } else {
 $('.noresults').remove();
}
 
  // se o numero de resultados for igual a 1 abre automaticamente o modal exibindo.
 if (numItems == 1) {
 
   var myMediaPB = $(this).data('mediapb');
   var myMediaGB = $(this).data('mediagb');
   var myMediaSB = $(this).data('mediasb');
   var myMediaUB = $(this).data('mediaub');
   var myMediaBE = $(this).data('mediabe');
   
   var myPokeNum = $('.item.zqzq').data('numero');
   var myPokeNum2 = $('.item.zqzq').data('numero') + '';
   var myPokeNum3 = myPokeNum2.split('-')[0];
   
   var myPokeNome = $('.item.zqzq').find('.id h5').text();
   var myPokeNome2 = myPokeNome.replace("Shiny ", "").replace("Mega ", "").replace("Baby ", "").replace("Minun and ", "").replace("Champion ", "").replace("Elite ", "").replace("Crystal ", "").replace("Big ", "").replace("Mini ", "").replace("Giant ", "").replace("Shiny Giant ", "").replace("Legion ", "").replace("Water ", "").replace("Fire ", "").replace("Grass ", "").replace("Flying ", "").replace("Ice ", "").replace(/\(|\)/g, '').replace("X ", "").replace("Y ", "").replace("Dark ", "").replace("Light ", "").replace("2 ", "").replace("3 ", "").replace("4 ", "").replace("5 ", "").replace("6 ", "").replace("7 ", "").replace("8 ", "");

   var myPokeLevel = $('.item.zqzq').data('level');
   
   var myPokeClan1 = $('.item.zqzq').data('clan1');
   var myPokeClan2 = $('.item.zqzq').data('clan2');
   var myPokeTipo1 = $('.item.zqzq').data('tipo1');
   var myPokeTipo2 = $('.item.zqzq').data('tipo2');
   
   var myPokeBall1 = $('.item.zqzq').data('ball1');
   var myPokeBall2 = $('.item.zqzq').data('ball2');
   
   var myPokeRegiao = $('.item.zqzq').data('regiao');
   var myPokeGeracao = $('.item.zqzq').data('geracao');
   var myPokeDificuldade = $('.item.zqzq').data('dificuldade');
   
   var myPokeXpCaught = $('.item.zqzq').data('xpcaught');
   var myPokePriceNPC = $('.item.zqzq').data('pricenpc');
   
   var myPokeShiny = $('.item.zqzq').data('shiny');
   var myPokeFast = $('.item.zqzq').data('fast');
   var myPokeHeavy = $('.item.zqzq').data('heavy');
   
   var myPokePreEvo2 = $('.item.zqzq').data('preevo2');
   var myPokePreEvo1 = $('.item.zqzq').data('preevo1');
   var myPokeEvo1 = $('.item.zqzq').data('evo1');
   var myPokeEvo2 = $('.item.zqzq').data('evo2');
   
   var myPokeNPreEvo2 = $('.item.zqzq').data('npreevo2');
   var myPokeNPreEvo1 = $('.item.zqzq').data('npreevo1');
   var myPokeNEvo1 = $('.item.zqzq').data('nevo1');
   var myPokeNEvo2 = $('.item.zqzq').data('nevo2');
   
   var myPokeMapas = $('.item.zqzq').data('mapas');
   var myPokeVIP = $('.item.zqzq').data('vip');
   var myPokeMoves = $('.item.zqzq').data('moves');
   var myPokeLoots = $('.item.zqzq').data('loots');
   
   var myPokeEvolveStone = $('.item.zqzq').data('evostone');
   var myPokeBoost = $('.item.zqzq').data('boost');
   var myPokeBoostStone = $('.item.zqzq').data('boostone');
	 
   var myPokeHabilidades = $('.item.zqzq').data('habilidades');

   
   if (myPokeEvolveStone !== '') {
	$('#subdesc .evo-desc').css('display', 'block');
	$("#subdesc .evo-desc").html("Evolui com: "+myPokeEvolveStone);
   } else {
	$('#subdesc .evo-desc').css('display', 'none');
   }

   if (myPokeBoost !== '' && myPokeBoostStone !== '') {
	$('#subdesc .boost-desc').css('display', 'block');
	$("#subdesc .boost-desc .qtde").html("Aumenta a cada: "+myPokeBoost);
	$("#subdesc .boost-desc .stone").html("Bosta com: "+myPokeBoostStone);
	   
	$(".boost .stone-container").html(myPokeBoostStone);
	
	$("#subdesc .boost-desc").attr("onmouseover", "getElementById('boost"+myPokeBoost+"info').style.display='block'");
	$("#subdesc .boost-desc").attr("onmouseout", "getElementById('boost"+myPokeBoost+"info').style.display='none'");
	if (myPokeBoostStone === 'Metal stone' || myPokeBoostStone === 'Crystal stone' || myPokeBoostStone === 'Ancient stone') {
		$('#boost30info .linhas-1').css('display', 'none');
		$('#boost30info .linhas-2').css('display', 'block');
	} else {
		$('#boost30info .linhas-1').css('display', 'block');
		$('#boost30info .linhas-2').css('display', 'none');
		
		if (myPokeBoostStone === 'Mystic star') {
			$('#boost50info .linhas-1').css('display', 'none');
			$('#boost50info .linhas-2').css('display', 'block');
		} else {
			$('#boost50info .linhas-1').css('display', 'block');
			$('#boost50info .linhas-2').css('display', 'none');
		}
	}
	   
   } else {
	$('#subdesc .boost-desc').css('display', 'none');
   }
   
   
   
//////////////////

  $(".modal-pokes-comentarios div div").html("");
  var modalFBComment = '<div class="fb-comments fbfbfb" data-numposts="5" data-href="http://mediaspxg.blogspot.com/2017/08/'+myPokeNome2.replace(".", "").toLowerCase()+'.html"/>';
  $(".modal-pokes-comentarios div div").append( modalFBComment );

//////////// FUNÇÃO PARA EXIBIÇÃO DO MAPA   AO EXIBIR MODAL DA PESQUISA AVANÇADA /////////////////////////////////////////
if (myPokeMapas !== 'no') {
 var text = '<button aria-label="Close" class="close close-modal" data-dismiss="modal" onclick="ocultarParentDiv();" type="button"> <span aria-hidden="true">×</span> </button> <img alt="" src="https://1.bp.blogspot.com/-OxKSSPM9qMU/WZvJoAk5B8I/AAAAAAAAASI/F7AbVfqsyjoIFCF5QbEbCXvhHtkz-tCSQCLcBGAs/s1600/mapa%2Bcompleto%2Bpxg%2B%252B%2BORRE%2B%252B%2BPHENAC.jpg">';
  
  $("#image-wrapper").html(text);
  
     var array = myPokeMapas.split(';'),
     len = array.length,               
     result = [];  
     for( i=0; i<len; i++ ) {          
      result[i] = '{'+array[i]+'}';
      //if(result.indexOf(array[i]) == -1) result.push(array[i]); 
     }
     result.join(',');
  
  $("#image-wrapper").attr('data-captions', '{"coords": ['+result+']}');
  $("#image-wrapper").attr('data-numero', myPokeNum);
  $("#image-wrapper").attr('data-nome', myPokeNome);
  
  
  $(".filtrar.hand.levell").attr('data-search', 'lvl'+myPokeLevel);
  $(".filtrar.hand.levell").attr('title', 'filtrar resultados para Level '+myPokeLevel);
  
  $("#mapas-list").html("");
  
     var array = myPokeMapas.split(';'),
     len = array.length,               
     result = [];  
     for( i=0; i<len; i++ ) {          
      result[i] = '<li>'+array[i]+'</li>';
   
   var array2 = array[i].split('"text":');
      result = []; 
      for( j=0; j<array2.length; j++ ) {
     result[j] = '<li>'+array2[1].replace(/["]/g,' ')+'</li>';
  result.join(' ');
      } 
   $("#mapas-list").append(result);
   
     }
  
  
    var map = {};
    $("#mapas-list").find('li').each(function() {  
      var value = $(this);
      if (map[value.text()] == null){
        map[value.text()] = false;
      } else {
       $(this).remove();
      }
    });
     
  
  if (myPokeVIP !== 'no') {
  $("#vip-container").html("Precisa de Vip? "+myPokeVIP);
  } else {
  $("#vip-container").html("");
  }
  

}
//////////////////////// FIM FUNÇÃO QUE EXIBE OS MAPAS AO EXIBIR MODAL DA PESQUISA AVANÇADA //////////////////////////////////////////////
  

  
  
  $(".forca-fraqueza-null div div").html(" "); 
  
  $(".bs-example-modal").attr('class', 'modal fade bs-example-modal in');
  $(".bs-example-modal").addClass(myPokeNum+' '+myPokeNome+' '+myPokeClan1+' '+myPokeClan2+' '+myPokeTipo1+' '+myPokeTipo2+' '+myPokePriceNPC+' '+myPokeDificuldade);
 

  for( i=0; i<efetividadeArray.length; i++) {
   if(efetividadeArray[i].tipo === myPokeTipo1) {
    $(".forca-fraqueza-null .strenght div").append( efetividadeArray[i].forca+',' );
    $(".forca-fraqueza-null .weakness div").append( efetividadeArray[i].fraqueza+',' );
    $(".forca-fraqueza-null .null div").append( efetividadeArray[i].nulo+',' );
   }
   
   if(efetividadeArray[i].tipo === myPokeTipo2) {
    $(".forca-fraqueza-null .strenght div").append( efetividadeArray[i].forca+',' );
    $(".forca-fraqueza-null .weakness div").append( efetividadeArray[i].fraqueza+',' );
    $(".forca-fraqueza-null .null div").append( efetividadeArray[i].nulo+',' );
   }
  }
  
  $('.forca-fraqueza-null div div').each(function( ind ){
     var text = $(this).html().trim().split(','),
     len = text.length,               
     result = [];  
     for( i=0; i<len; i++ ) {          
      result[i] = '<span class="tabletipos label pill type '+text[i]+' background-color-'+text[i]+' col-xs-6 col-sm-6 col-md-4 col-lg-4">'+text[i]+'</span>';
      if(result.indexOf(text[i]) == -1) result.push(text[i]); 
     }
     $(this).html(result.join(''));
     
     $('span.pill.background-color-').remove();
     
     if ($(this).html()=="") {
     $(this).parent().css('display', 'none');
     } else {
     $(this).parent().css('display', 'block');
     }
     
    var map = {};
    $(this).find('span').each(function() {  
   var value = $(this);
   if (map[value.text()] == null){
     map[value.text()] = false;
   } else {
     $(this).remove();
   }      
    });
     
  });
  
  



  
  $(".modal-evolution>div").html(" ");
  
  if (myPokePreEvo2 !== 'no') {
   text = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 evos preevo2'>";
    text += "<h3>" + myPokeNPreEvo2 + " - " + myPokePreEvo2 + "</h3>";
    text += "<div class='evo'>";
     text += "" + myPokeNPreEvo2 + ";;" + myPokePreEvo2 + "";
    text += "</div>";
   text += "</div>";
   $(".modal-evolution>div").append( text );
  }
  
  
  if (myPokePreEvo1 !== 'no') {
   text = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 evos preevo1'>";
    text += "<h3>" + myPokeNPreEvo1 + " - " + myPokePreEvo1 + "</h3>";
    text += "<div class='evo'>";
     text += "" + myPokeNPreEvo1 + ";;" + myPokePreEvo1 + "";
    text += "</div>";
   text += "</div>";
   $(".modal-evolution>div").append( text );
  }
  
  
  text = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 evos atualevo'>";
   text += "<h3>" + myPokeNum + " - " + myPokeNome + "</h3>";
   text += "<div class='evo'>";
    text += "" + myPokeNum + ";;" + myPokeNome + "";
   text += "</div>";
  text += "</div>";
  $(".modal-evolution>div").append( text );
   
  
  if (myPokeEvo1 !== 'no') {
   text = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 evos evo1'>";
    text += "<h3>" + myPokeNEvo1 + " - " + myPokeEvo1 + "</h3>";
    text += "<div class='evo'>";
     text += "" + myPokeNEvo1 + ";;" + myPokeEvo1 + "";
    text += "</div>";
   text += "</div>";
   $(".modal-evolution>div").append( text );
  }
  
  if (myPokeEvo2 !== 'no') {
   text = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 evos evo2'>";
    text += "<h3>" + myPokeNEvo2 + " - " + myPokeEvo2 + "</h3>";
    text += "<div class='evo'>";
     text += "" + myPokeNEvo2 + ";;" + myPokeEvo2 + "";
    text += "</div>";
   text += "</div>";
   $(".modal-evolution>div").append( text );
  }
  
  
// CRIA A FORMATAÇÃO DOS ELEMENTOS DO CAMPO EVOLUÇÃO DO MODAL
  $('.evo').each(function( ind ){
       var text = $(this).html().split(';;'),             
           result = [];     
           result[i] = ''+text[0]+'';
           $(this).html(result.join('')); 
    
    
    
       var text = $(this).html().split(','),
           len = text.length,               
           result = [];                     
     for( i=0; i<len; i++ ) {
      result[i] = '<div class="evo-wrapper col-xs-12 col-sm-12 col-md-12 col-lg-12"><span class="pokedex filtrar hand pokedex-'+text[i]+'" data-search="num'+myPokeNum3+'"></span></div><div class="stone-wrapper"></div>'; 
     }
  if(result.indexOf(text[i]) == -1) result.push(text[i]);
        $(this).html(result.join('')); 
  });
  
  if (myPokePriceNPC <= "3000") {
   $(".modal-body .tablepb").html( Math.ceil(myPokePriceNPC * 0.3 / 2) );
   $(".modal-body .tablegb").html( Math.ceil(myPokePriceNPC * 1 / 10) );
   $(".modal-body .tablesb").html( Math.ceil(myPokePriceNPC * 1 / 28) );
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.5  / 90) );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.05 / 90) );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.05 / 90) );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.05 / 90) );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.05 / 90) );
  
  } else {
   $(".modal-body .tablepb").html( Math.ceil(myPokePriceNPC * 0.3 / 2 / 10) * 10 );
   $(".modal-body .tablegb").html( Math.ceil(myPokePriceNPC * 1 / 10 / 10) * 10 );
   $(".modal-body .tablesb").html( Math.ceil(myPokePriceNPC * 1 / 28 / 10) * 10 );
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.5  / 90 / 10) * 10 );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10) * 10 );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10) * 10 );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10) * 10 );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10) * 10 );
  }
  
  if (myPokeNome === "Elekid" || myPokeNome === "Magby") {
	  
   $(".modal-body .tablepb").html( Math.ceil(myPokePriceNPC * 0.3 / 2 / 10*1.9) * 10 );
   $(".modal-body .tablegb").html( Math.ceil(myPokePriceNPC * 1 / 10 / 10*1.9) * 10 );
   $(".modal-body .tablesb").html( Math.ceil(myPokePriceNPC * 1 / 28 / 10*1.9) * 10 );
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.5  / 90 / 10*1.9) * 10 );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.9) * 10 );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.9) * 10 );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.9) * 10 );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*1.9) * 10 );

  }
  if (myPokeNome === "Bagon" || myPokeNome === "Lanturn" || myPokeNome === "Pinsir") {
   $(".modal-body .tablepb").html( Math.ceil(myPokePriceNPC * 0.3 / 2 / 10*2) * 10 );
   $(".modal-body .tablegb").html( Math.ceil(myPokePriceNPC * 1 / 10 / 10*2) * 10 );
   $(".modal-body .tablesb").html( Math.ceil(myPokePriceNPC * 1 / 28 / 10*2) * 10 );
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.5  / 90 / 10*2) * 10 );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*2) * 10 );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*2) * 10 );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*2) * 10 );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.05 / 90 / 10*2) * 10 );
  
  }


  if (myPokeNome === "Nidoqueen" || myPokeNome === "Nidoking") {
   $(".modal-body .tablesfb").html( "600" );
  }
  if (myPokeNome === "Lickitung") {
   $(".modal-body .tablesfb").html( "1000" );
  }
  if (myPokeNome === "Machamp") {
   $(".modal-body .tableub").html( Math.ceil(myPokePriceNPC * 1.85  / 90 / 10) * 10 );
   
   $(".modal-body .tablebe1").html( Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10 );
   $(".modal-body .tablebe2").html( Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10 );
   $(".modal-body .tablebe3").html( Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10 );
   $(".modal-body .tablebe4").html( Math.ceil(myPokePriceNPC * 1.295 / 90 / 10) * 10 );
  }
  
if (myPokeLevel <= 30) {
 if (myPokePriceNPC <= 10000) {
   $('.tablepb').removeClass('hide');
   $('.tablepb').addClass('show');

   $('.tablegb').removeClass('hide');
   $('.tablegb').addClass('show');

   $('.tablesb').removeClass('hide');
   $('.tablesb').addClass('show');

 } else {

   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('show');
   $('.tablegb').addClass('hide');

   $('.tablesb').removeClass('show');
   $('.tablesb').addClass('hide');
 }
}

else if (myPokeLevel > 30 && myPokeLevel <= 60) {

 if (myPokePriceNPC <= 10000) {
   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('hide');
   $('.tablegb').addClass('show');

   $('.tablesb').removeClass('hide');
   $('.tablesb').addClass('show');

 }
 else if (myPokePriceNPC > 10000 && myPokePriceNPC <= 15000) {
   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('show');
   $('.tablegb').addClass('hide');

   $('.tablesb').removeClass('hide');
   $('.tablesb').addClass('show');

 }

}

else if (myPokeLevel > 60 && myPokeLevel <= 70) {
 if (myPokePriceNPC <= 10000) {
   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('show');
   $('.tablegb').addClass('hide');

   $('.tablesb').removeClass('hide');
   $('.tablesb').addClass('show');

 } else {

   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('show');
   $('.tablegb').addClass('hide');

   $('.tablesb').removeClass('show');
   $('.tablesb').addClass('hide');
 }
}

else if (myPokeLevel > 70) {
   $('.tablepb').removeClass('show');
   $('.tablepb').addClass('hide');

   $('.tablegb').removeClass('show');
   $('.tablegb').addClass('hide');

   $('.tablesb').removeClass('show');
   $('.tablesb').addClass('hide');
}
  
   

  if (myPokeBall1 === 'Saffariball' || myPokeBall1 === 'saffariball' || myPokeBall2 === 'Saffariball' || myPokeBall2 === 'saffariball') {
    $(".bs-example-modal").addClass(myPokeBall1);
    $('.tablesfb').css('display', 'block');
  } else {
    $(".bs-example-modal").removeClass("Saffariball");
    $('.tablesfb').css('display', 'none');
  }

  
   if (myPokeBall1 === 'Masterball') {
       $(".modal").addClass(myPokeBall1);
      }
	  

   if (myPokeDificuldade === 'Sem sistema') {
       $(".modal").addClass('Sem');
       $(".modal").addClass('sistema');
       $(".modal-body .valornpc b").html( 'Indisponível' );
       $(".Sem.sistema .ballstable div").html(" ");
      }
	


$(".aviso").html(" ");

  if (myPokeDificuldade === 'Dimensional zone') {
       $(".modal").addClass('Dimensional');
       $(".modal").addClass('zone');
       //$(".modal-body .valornpc b").html( 'Indisponível' );
       $(".Dimensional.zone .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon poderá ser adquirido através da <a href='http://pokexgames-tutoriais.blogspot.com/2017/05/dimensional-zone-disponivel-em-fase.html' target='_top'>Dimensional Zone</a>. (depende das rotações)";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  } else {
      $(".aviso").addClass( 'hide' );
      $(".aviso").removeClass( 'show' );
  }
  if (myPokeDificuldade === 'Não capturável') {
       $(".modal").addClass('Não');
       $(".modal").addClass('capturável');
       $(".Não.capturável .ballstable div").html(" ");
      }

  if (myPokeDificuldade === 'Embedded tower') {
       $(".modal").addClass('Embedded');
       $(".modal").addClass('tower');
       //$(".modal-body .valornpc b").html( 'Indisponível' );
       $(".Embedded.tower .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon poderá ser adquirido através da <a href='http://pokexgames-tutoriais.blogspot.com/2014/10/embedded-tower.html' target='_top'>Embedded tower</a> em Phenac.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Drop') {
       $(".modal").addClass('Drop');
       $(".Drop .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon poderá ser adquirido por drop da própria mega evolução.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Form') {
       $(".modal").addClass('Form');
       $(".Form .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Essa forma não pode ser capturada, somente a forma principal, para obter essa forma somente por drop.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Caught') {
       $(".modal").addClass('Caught');
       $(".Caught .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Esse Pokemon Não possui média pois não está no sistema.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Cyber world') {
       $(".modal").addClass('Cyber');
       $(".modal").addClass('world');
       //$(".modal-body .valornpc b").html( 'Indisponível' );
       $(".Cyber.world .ballstable div.tableub").html("2000");
       $(".Cyber.world .ballstable div.tablebe1").html("1400");
       $(".Cyber.world .ballstable div.tablebe2").html("1400");
       $(".Cyber.world .ballstable div.tablebe3").html("1400");
       $(".Cyber.world .ballstable div.tablebe4").html("1400");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon poderá ser adquirido somente com a <a href='http://pokexgames-tutoriais.blogspot.com/2014/02/cyber-world-quest.html' target='_top'>Cyber world quest</a>.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }

  if (myPokeDificuldade === 'Clan') {
       $(".modal").addClass('Clan');
       $(".Clan .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Esse Pokemon não pode ser capturado, para ter um basta ir ao subsolo do respectivo clan no TC com sua versao normal +20 mais o dinheiro necessário.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Inicial') {
       $(".modal").addClass('Inicial');
       $(".Inicial .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Não pode ser capturado. Somente pode ter um na <a href='http://pokexgames-tutoriais.blogspot.com/2017/10/quest-halloween-2017.html' target='_top'>quest da Stacy</a> ou escolhendo como inicial.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Agatha quest') {
       $(".modal").addClass('Agatha');
       $(".modal").addClass('quest');
       $(".Agatha.quest .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Esse Pokemon não pode ser capturado. Para ter um deverá completar a <a href='http://pokexgames-tutoriais.blogspot.com/2011/07/agatha-quest-lvl-100.html' target='_top'>Agatha Quest</a>";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Eventos') {
       $(".modal").addClass('Eventos');
       $(".Eventos .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon está disponível somente em eventos. Não possui média.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Diamond shop') {
       $(".modal").addClass('Diamond');
       $(".modal").addClass('shop');
       $(".Diamond.shop .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-warning'></i> Esse Pokemon pode ser obtido somente pelo Diamond shop dentro do jogo.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
  if (myPokeDificuldade === 'Pesca') {
       $(".modal").addClass('Pesca');
       $(".Pesca .ballstable div").html(" ");
       text = "<div class='dificuldade'>";
        text += "<i class='fa fa-exclamation-circle'></i> Esse Pokemon pode ser obtido através de pesca.";
       text += "</div>";
       $(".aviso").append( text );
       $(".aviso").addClass( 'show' );
       $(".aviso").removeClass( 'hide' );
  }
 
  
  

  

  //// CASO POSSUA ALGUM MOVE NA TABELA IRÁ EXIBIR NO CAMPO
  if (myPokeMoves != "no") {
       $(".MBT-tabs-content .moves").html(myPokeMoves);
       $("div.MBT-tabviewsection > ul > li.tab-move").css('display', 'block');


      } else {
       $(".MBT-tabs-content .moves").html(" ");
       $("div.MBT-tabviewsection > ul > li.tab-move").css('display', 'none');
     } 
  if (myPokeHabilidades !== "") {
	  $("p.habilidades").html( 'Habilidades: '+myPokeHabilidades+'' );
	  $("p.habilidades").css('display', 'block');
      } else {
	  $("p.habilidades").css('display', 'none');
      }


  //// FORMATA O CAMPO DOS MOVES PARA EXIBIR CORRETAMENTE
     var text = $(".MBT-tabs-content .moves").html().trim().split(','),
     len = text.length,               
     result = [];  
     for( i=0; i<len; i++ ) {          
      result[i] = '<li class="movimentos '+text[i]+'">'+text[i]+'-</li>';
      if(result.indexOf(text[i]) == -1) result.push(text[i]); 
     }
     $(".MBT-tabs-content .moves").html(result.join(''));

     $("li.movimentos:last-child").css('display', 'none');
     $("li.movimentos:last-child").addClass('hide');


  $('ol.moves li.movimentos').each(function( ind ){   
       var text = $(this).html().split('-'),
           len = text.length,               
           result = [];  
       for( i=0; i<len; i++ ) { 

          for( j=0; j<movesArray.length; j++) {
               var moveName = movesArray[j].move;
               var moveType = movesArray[j].type;
               var moveDesc = movesArray[j].desc;
    
               var moveAoe = movesArray[j].aoe;
               var moveBlind = movesArray[j].blind;
               var moveBuff = movesArray[j].buff;
               var moveBurn = movesArray[j].burn;
               var moveConfusion = movesArray[j].confusion;
               var moveDamage = movesArray[j].damage;
               var moveDebuff = movesArray[j].debuff;
               var moveLifesteal = movesArray[j].lifesteal;
               var moveNevermiss = movesArray[j].nevermiss;
               var moveParalyze = movesArray[j].paralyze;
               var movePassive = movesArray[j].passive;
               var movePoison = movesArray[j].poison;
               var moveSelf = movesArray[j].self;
               var moveSlow = movesArray[j].slow;
               var moveStun = movesArray[j].stun;
               var moveTarget = movesArray[j].target;
               var moveHealing = movesArray[j].healing;
               var moveSilence = movesArray[j].silence;
               var moveFreeze = movesArray[j].freeze;
               var moveKnockback = movesArray[j].knockback;
               var moveEffectsTypesArray = [] ;

               if(moveName === text[0]) {
                 if(moveDesc !== '') {
                    $(this).attr('title', moveDesc);
                  } else {
                    $(this).attr('title', 'a descrição desse ataque está temporariamente indisponível, você pode nos ajudar enviando essa descrição. (use os comentarios abaixo)');
                 }
                 moveEffectsTypesArray.push('<i title="'+moveType+'" class="type '+moveType.replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[íìî]/g,'i').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').replace(/[ÁÀÂÃ]/g,'a').replace(/[ÉÈÊ]/g,'e').replace(/[ÍÌÎ]/g,'i').replace(/[ÓÒÔÕ]/g,'o').replace(/[ÚÙÛ]/g,'u')+'"/>');
                 if(movePassive !== '') {
                    moveEffectsTypesArray.push('<i title="PASSIVE" class="passive"/>');
                 }

                 if(moveTarget !== '') {
                    moveEffectsTypesArray.push('<i title="TARGET" class="target"/>');
                 }
                 if(moveAoe !== '') {
                    moveEffectsTypesArray.push('<i title="AOE" class="aoe"/>');
                 }
                 if(moveDamage !== '') {
                    moveEffectsTypesArray.push('<i title="DAMAGE" class="damage"/>');
                 }
     
                 if(moveSelf !== '') {
                    moveEffectsTypesArray.push('<i title="SELF" class="self"/>');
                 }
                 if(moveBuff !== '') {
                    moveEffectsTypesArray.push('<i title="BUFF" class="buff"/>');
                 }
                 if(moveHealing !== '') {
                    moveEffectsTypesArray.push('<i title="HEALING" class="healing"/>');
                 }
                 if(moveSilence !== '') {
                    moveEffectsTypesArray.push('<i title="SILENCE" class="silence"/>');
                 }
                 if(moveFreeze !== '') {
                    moveEffectsTypesArray.push('<i title="FREEZE" class="freeze"/>');
                 }
                 if(moveKnockback !== '') {
                    moveEffectsTypesArray.push('<i title="KNOCKBACK" class="knockback"/>');
                 }
     
                 if(moveBlind !== '') {
                    moveEffectsTypesArray.push('<i title="BLIND" class="blind"/>');
                 }
                 if(moveBurn !== '') {
                    moveEffectsTypesArray.push('<i title="BURN" class="burn"/>');
                 }
                 if(moveConfusion !== '') {
                    moveEffectsTypesArray.push('<i title="CONFUSION" class="confusion"/>');
                 }
                 if(moveDebuff !== '') {
                    moveEffectsTypesArray.push('<i title="DEBUFF" class="debuff"/>');
                 }
                 if(moveLifesteal !== '') {
                    moveEffectsTypesArray.push('<i title="LIFESTEAL" class="lifesteal"/>');
                 }
                 if(moveParalyze !== '') {
                    moveEffectsTypesArray.push('<i title="PARALYZE" class="paralyze"/>');
                 }
                 if(movePoison !== '') {
                    moveEffectsTypesArray.push('<i title="POISON" class="poison"/>');
                 }
                 if(moveSlow !== '') {
                    moveEffectsTypesArray.push('<i title="SLOW" class="slow"/>');
                 }
                 if(moveStun !== '') {
                    moveEffectsTypesArray.push('<i title="STUN" class="stun"/>');
                 }
     
                 if(moveNevermiss !== '') {
                    moveEffectsTypesArray.push('<i title="NEVERMISS" class="nevermiss"/>');
                 }
     
     var allEffects = moveEffectsTypesArray.join('');
                 $(this).attr('data-dismiss', 'modal');
                 $(this).attr('data-search', moveName);
                 $(this).addClass(moveType+' filtrar-moves hand');
               }
     
          }
          result[i] = '<span class="movimentosMOVE '+text[0]+' col-xs-7 col-sm-7 col-md-3 col-lg-3">'+text[0]+'</span> <span class="movimentosLVL '+text[1]+'  col-xs-3 col-sm-3 col-md-2 col-lg-2">'+text[1]+'</span><span class="movimentosEfeitos  col-xs-12 col-sm-12 col-md-5 col-lg-5">'+allEffects+'</span>';

          $(this).addClass(text[0]+' '+text[1]);
          if(result.indexOf(text[i]) == -1) result.push(text[i]); 


        }
       $(this).html(result.join('')); 



    var map = {};
    $(this).find('span').each(function() {  
   var value = $(this);
   if (map[value.text()] == null){
     map[value.text()] = false;
   } else {
     $(this).remove();
   }  

    
    });


    $(this).prepend( '<span class="counter col-xs-2 col-sm-2 col-md-1 col-lg-1"></span>' );
     



  });






  //// CASO POSSUA ALGUM MAPA NA TABELA IRÁ EXIBIR NO CAMPO
  if (myPokeMapas != "no") {
       $(".MBT-tabs-content .mapas").css('display', 'block');
       $("div.MBT-tabviewsection > ul > li.tab-mapa").css('display', 'block');


      } else {
       $(".MBT-tabs-content .mapas").css('display', 'none');
       $("div.MBT-tabviewsection > ul > li.tab-mapa").css('display', 'none');
     }



  //// CASO POSSUA ALGUM LOOT NA TABELA IRÁ EXIBIR NO CAMPO
  if (myPokeLoots != "no") {
       $(".MBT-tabs-content .loots").html(myPokeLoots);
       $("div.MBT-tabviewsection > ul > li.tab-loot").css('display', 'block');


      } else {
       $(".MBT-tabs-content .loots").html(" ");
       $("div.MBT-tabviewsection > ul > li.tab-loot").css('display', 'none');
     }


  //// FORMATA O CAMPO DOS LOOTS PARA EXIBIR CORRETAMENTE
     var text = $(".MBT-tabs-content .loots").html().trim().split(','),
     len = text.length,               
     result = [];  
     for( i=0; i<len; i++ ) {          
      result[i] = '<li class="loot-li">'+text[i]+'//</li>';
      if(result.indexOf(text[i]) == -1) result.push(text[i]); 
     }
     $(".MBT-tabs-content .loots").html(result.join(''));

     $("li.loot-li:last-child").css('display', 'none');
     $("li.loot-li:last-child").addClass('hide');


 
  $('ul.loots li.loot-li').each(function( ind ){   
       var text = $(this).html().split('//'),
           len = text.length,               
           result = [];  
       for( i=0; i<len; i++ ) {          
           result[i] = '<i class="item-img">.</i><span class="itemQTD">'+text[0]+'</span> <span class="itemPerc">'+text[1]+'--</span>';

          if(result.indexOf(text[i]) == -1) result.push(text[i]); 
          var text2 = text[1].split('--');
          var len2 = text2.length;    
          for( j=0; j<len2; j++ ) {
            $(this).addClass(text2[0]+' filtrar-loots hand');
            $(this).attr('data-search', text2[0]);
            $(this).attr('title', 'Pesquisar item');
            $(this).attr('data-dismiss', 'modal');
          }

        }
       $(this).html(result); 



 
 var map = {};
   $(this).find('span').each(function() {  
  var value = $(this);
  if (map[value.text()] == null){
    map[value.text()] = false;
  } else {
    $(this).remove();
  }      
   });
 
 
  });


  $('ul.loots li.loot-li span.itemPerc').each(function( ind ){   
       var text = $(this).html().split('--'),
           len = text.length,               
           result = [];  
       for( i=0; i<len; i++ ) {          
           result[i] = '<span class="itemNome">'+text[0]+'</span> <span class="itemPercentual">'+text[1]+'</span>';

          if(result.indexOf(text[i]) == -1) result.push(text[i]); 
          var text2 = text[1].split('--');
          var len2 = text2.length;    
          for( j=0; j<len2; j++ ) {
            $(this).addClass(text2[0]+' filtrar-loots hand');
            $(this).attr('data-search', text2[0]);
            $(this).attr('title', 'Pesquisar item');
            $(this).attr('data-dismiss', 'modal');
          }


          }
       $(this).html(result); 

 
 var map = {};
   $(this).find('span').each(function() {  
  var value = $(this);
  if (map[value.text()] == null){
    map[value.text()] = false;
  } else {
    $(this).remove();
  }      
   });
 
  });


  
  
  
  


   
   $(".modal-header b.nome").html( myPokeNome );
   $(".modal-header b.numero").html( myPokeNum3 );
   //$(".modal-header b.numero").html(myPokeNum.split('-')[0]);
   //$(".modal-header b.numero").html(myPokeNum + "").split('-')[0];
   
   $(".modal-body .modal-capa .pokedex").attr('class', 'col-xs-12 col-sm-12 col-md-12 col-lg-12 pokedex');
   $(".modal-body .modal-capa .pokedex").addClass('pokedex-'+myPokeNum);
   
   
   
   
   $(".modal-body .modal-capa .tableclan.tableclan1").attr('class', 'tableclan tableclan1 col-xs-12 col-sm-12 col-md-6 col-lg-6');
   $(".modal-body .modal-capa .tableclan.tableclan1").addClass(myPokeClan1+ " hand filtrar");
   $(".modal-body .modal-capa .tableclan.tableclan1").attr('title', 'filtrar resultados para '+myPokeClan1);
   $(".modal-body .modal-capa .tableclan.tableclan1").attr('data-search', myPokeClan1);
   
   $(".modal-body .modal-capa .tableclan.tableclan2").attr('class', 'tableclan tableclan2 col-xs-12 col-sm-12 col-md-6 col-lg-6');
   $(".modal-body .modal-capa .tableclan.tableclan2").addClass(myPokeClan2+ " hand filtrar");
   $(".modal-body .modal-capa .tableclan.tableclan2").attr('title', 'filtrar resultados para '+myPokeClan2);
   $(".modal-body .modal-capa .tableclan.tableclan2").attr('data-search', myPokeClan2);
   
   $(".modal-body .modal-capa .tabletipos.tabletipo1").attr('class', 'tabletipos tabletipo1 label pill col-xs-12 col-sm-12 col-md-6 col-lg-6');
   $(".modal-body .modal-capa .tabletipos.tabletipo1").addClass(myPokeTipo1+' hand filtrar background-color-'+myPokeTipo1);
   $(".modal-body .modal-capa .tabletipos.tabletipo1").html( myPokeTipo1 );
   $(".modal-body .modal-capa .tabletipos.tabletipo1").attr('title', 'filtrar resultados para '+myPokeTipo1);
   var myPokeTipo1replaced = myPokeTipo1.replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[íìî]/g,'i').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').replace(/[ÁÀÂÃ]/g,'A').replace(/[ÉÈÊ]/g,'E').replace(/[ÍÌÎ]/g,'I').replace(/[ÓÒÔÕ]/g,'O').replace(/[ÚÙÛ]/g,'U');
   $(".modal-body .modal-capa .tabletipos.tabletipo1").attr('data-search', myPokeTipo1replaced);
   
   $(".modal-body .modal-capa .tabletipos.tabletipo2").attr('class', 'tabletipos tabletipo2 label pill col-xs-12 col-sm-12 col-md-6 col-lg-6');
   $(".modal-body .modal-capa .tabletipos.tabletipo2").addClass(myPokeTipo2+' hand filtrar background-color-'+myPokeTipo2);
   $(".modal-body .modal-capa .tabletipos.tabletipo2").html( myPokeTipo2 );   
   $(".modal-body .modal-capa .tabletipos.tabletipo2").attr('title', 'filtrar resultados para '+myPokeTipo2);
   var myPokeTipo2replaced = myPokeTipo2.replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[íìî]/g,'i').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').replace(/[ÁÀÂÃ]/g,'A').replace(/[ÉÈÊ]/g,'E').replace(/[ÍÌÎ]/g,'I').replace(/[ÓÒÔÕ]/g,'O').replace(/[ÚÙÛ]/g,'U');
   $(".modal-body .modal-capa .tabletipos.tabletipo2").attr('data-search', myPokeTipo2replaced);

   
   $(".modal-body .modal-capa .shiny-container").attr('class', 'shiny-container');
   $(".modal-body .modal-capa .shiny-container").addClass('shiny-'+myPokeShiny);
   
   
   if (myPokeShiny === 'yes') {
    $(".modal-body .modal-capa .shiny-container").attr("onmouseover", "getElementById('descricao').style.display='block'");
    $(".modal-body .modal-capa .shiny-container").attr("onmouseout", "getElementById('descricao').style.display='none'");
 
    $("#descricao").html("");
    for( i=0; i<ShinysMegasArray.length; i++) {
       var myPokeShinyNome = ShinysMegasArray[i].nome;
       var myPokeShinyTipo = ShinysMegasArray[i].shiny;
       var myPokeNome2 = myPokeNome.replace("Shiny ", "").replace("Mega ", "").replace("Baby ", "").replace("Minun and ", "").replace("Champion ", "").replace("Elite ", "").replace("Crystal ", "").replace("Big ", "").replace("Mini ", "").replace("Giant ", "").replace("Shiny Giant ", "").replace("Legion ", "").replace("Water ", "").replace("Fire ", "").replace("Grass ", "").replace("Flying ", "").replace("Ice ", "").replace(/\(|\)/g, '').replace("X ", "").replace("Y ", "").replace("Dark ", "").replace("Light ", "").replace("2 ", "").replace("3 ", "").replace("4 ", "").replace("5 ", "").replace("6 ", "").replace("7 ", "").replace("8 ", "");

  
    var myPokeShinyNum = ShinysMegasArray[i].numero;
	    
    var myPokeShinyLevel = ShinysMegasArray[i].level;
    
    var myPokeShinyClan1 = ShinysMegasArray[i].clan1;
    var myPokeShinyClan2 = ShinysMegasArray[i].clan2;
    var myPokeShinyTipo1 = ShinysMegasArray[i].tipo1;
    var myPokeShinyTipo2 = ShinysMegasArray[i].tipo2;
    
    var myPokeShinyBall1 = ShinysMegasArray[i].ball1;
    var myPokeShinyBall2 = ShinysMegasArray[i].ball2;
    
    var myPokeShinyRegiao = ShinysMegasArray[i].regiao;
    var myPokeShinyGeracao = ShinysMegasArray[i].geracao;
    var myPokeShinyDificuldade = ShinysMegasArray[i].dificuldade;
    
    var myPokeShinyXpCaught = ShinysMegasArray[i].xpcaught;
    var myPokeShinyPriceNPC = ShinysMegasArray[i].pricenpc;
    
    var myPokeShinyFast = ShinysMegasArray[i].fast;
    var myPokeShinyHeavy = ShinysMegasArray[i].heavy;
    
    var myPokeShinyPreEvo2 = ShinysMegasArray[i].preevo2;
    var myPokeShinyPreEvo1 = ShinysMegasArray[i].preevo1;
    var myPokeShinyEvo1 = ShinysMegasArray[i].evo1;
    var myPokeShinyEvo2 = ShinysMegasArray[i].evo2;
    
    var myPokeShinyNPreEvo2 = ShinysMegasArray[i].npreevo2;
    var myPokeShinyNPreEvo1 = ShinysMegasArray[i].npreevo1;
    var myPokeShinyNEvo1 = ShinysMegasArray[i].nevo1;
    var myPokeShinyNEvo2 = ShinysMegasArray[i].nevo2;
    
    var myPokeShinyMapas = ShinysMegasArray[i].mapas;
    var myPokeShinyVIP = ShinysMegasArray[i].vip;
   
    var myPokeShinyMoves = ShinysMegasArray[i].moves;
    
    var myPokeShinyLoots = ShinysMegasArray[i].loots;
    
       var myPokeShinyBoost = ShinysMegasArray[i].boost;
       var myPokeShinyBoostStone = ShinysMegasArray[i].booStone;
       var myPokeShinyEvolveStone = ShinysMegasArray[i].evoStone;
	    
       var myPokeShinyHabilidades = ShinysMegasArray[i].habilidades;
    
       if(myPokeShinyNome === myPokeNome) {
         var desc = "<div class='item item3 hand' data-numero='" + myPokeShinyNum + "' data-nome='" + myPokeShinyTipo + " " + myPokeShinyNome + "' data-habilidades='" + myPokeShinyHabilidades + "' data-boost='" + myPokeShinyBoost + "' data-boostone='" + myPokeShinyBoostStone + "' data-evostone='" + myPokeShinyEvolveStone + "' data-clan1='" + myPokeShinyClan1 + "' data-clan2='" + myPokeShinyClan2 + "' data-tipo1='" + myPokeShinyTipo1 + "' data-tipo2='" + myPokeShinyTipo2 + "' data-level='" + myPokeShinyLevel + "' data-ball1='" + myPokeShinyBall1 + "' data-ball2='" + myPokeShinyBall2 + "' data-regiao='" + myPokeShinyRegiao + "' data-geracao='" + myPokeShinyGeracao + "' data-dificuldade='" + myPokeShinyDificuldade + "' data-xpcaught='" + myPokeShinyXpCaught + "' data-pricenpc='" + myPokeShinyPriceNPC + "' data-fast='" + myPokeShinyFast + "' data-heavy='" + myPokeShinyHeavy + "' data-preevo2='" + myPokeShinyPreEvo2 + "' data-preevo1='" + myPokeShinyPreEvo1 + "' data-evo1='" + myPokeShinyEvo1 + "' data-evo2='" + myPokeShinyEvo2 + "' data-npreevo2='" + myPokeShinyNPreEvo2 + "' data-npreevo1='" + myPokeShinyNPreEvo1 + "' data-nevo1='" + myPokeShinyNEvo1 + "' data-nevo2='" + myPokeShinyNEvo2 + "' data-mapas='" + myPokeShinyMapas + "' data-moves='" + myPokeShinyMoves + "' data-loots='" + myPokeShinyLoots + "' data-moves='" + myPokeShinyMoves + "' data-vip='"+myPokeShinyVIP+"'><div class='id'><h5>"+myPokeShinyTipo+" "+myPokeShinyNome+"</h5></div></div>";
         $("#descricao").append( desc );
       }
    
    }
   }
   else if (myPokeShiny === 'no') {
    $(".modal-body .modal-capa .shiny-container").attr("onmouseover", false);
    $(".modal-body .modal-capa .shiny-container").attr("onmouseout", false);
    $("#descricao").html("");
   }
   
   
   $(".modal-body .modal-capa .fast-heavy-outter .heavy-container").attr('class', 'heavy-container');
   $(".modal-body .modal-capa .fast-heavy-outter .heavy-container").addClass('heavy-'+myPokeHeavy);
   
   $(".modal-body .modal-capa .fast-heavy-outter .fast-container").attr('class', 'fast-container');
   $(".modal-body .modal-capa .fast-heavy-outter .fast-container").addClass('fast-'+myPokeFast);
   
   
   
   
   $(".modal-body .tablebe1").attr('class', 'tablebe tablebe1 col-xs-4 col-sm-4 col-md-2 col-lg-2');
   $(".modal-body .tablebe1").addClass(myPokeTipo1);
   
   $(".modal-body .tablebe2").attr('class', 'tablebe tablebe2 col-xs-4 col-sm-4 col-md-2 col-lg-2');
   $(".modal-body .tablebe2").addClass(myPokeTipo2);
   
   $(".modal-body .tablebe3").attr('class', 'tablebe tablebe3 col-xs-4 col-sm-4 col-md-2 col-lg-2');
   $(".modal-body .tablebe3").addClass('heavy-'+myPokeHeavy);
   
   $(".modal-body .tablebe4").attr('class', 'tablebe tablebe4 col-xs-4 col-sm-4 col-md-2 col-lg-2');
   $(".modal-body .tablebe4").addClass('fast-'+myPokeFast);
   
   
   
 $(".tablebe.Grama").attr("title", "Janguruball");
 $(".tablebe.Venenoso").attr("title", "Janguruball");

 $(".tablebe.Água").attr("title", "Netball");
 $(".tablebe.Inseto").attr("title", "Netball");
 
 $(".tablebe.Metal").attr("title", "Tinkerball");
 $(".tablebe.Elétrico").attr("title", "Tinkerball");
 
 $(".tablebe.Pedra").attr("title", "Duskball");
 $(".tablebe.Lutador").attr("title", "Duskball");
 
 $(".tablebe.Terra").attr("title", "Maguball");
 $(".tablebe.Fogo").attr("title", "Maguball");
 
 $(".tablebe.Fantasma").attr("title", "Moonball");
 $(".tablebe.Noturno").attr("title", "Moonball");
 
 $(".tablebe.Gelo").attr("title", "Soraball");
 $(".tablebe.Voador").attr("title", "Soraball");
 
 $(".tablebe.Dragão").attr("title", "Taleball");
 $(".tablebe.Fada").attr("title", "Taleball");
 
 $(".tablebe.Normal").attr("title", "Yumeball");
 $(".tablebe.Psiquico").attr("title", "Yumeball");


 $(".tablebe3").attr("title", "Heavyball");
 $(".tablebe4").attr("title", "Fastball");
   
   $(".fb-like-in").html( '<div class="fb-like-'+myPokeNome2+'"> <div class="fb-like" data-action="like" data-href="http://mediaspxg.blogspot.com/2017/08/'+myPokeNome2.toLowerCase()+'.html" data-layout="button_count" data-share="true" data-show-faces="false"></div> </div>' );
   $(".rating-modal").html( '<div class="rw-ui-container" data-title="'+myPokeNome2+'"></div>' );
   
   $(".leveltable .level").html( myPokeLevel );
   $(".leveltable .regiao").html( myPokeRegiao );
   $(".leveltable .geracao").html( myPokeGeracao );
   

if (myPokePriceNPC != '0') {
   $(".modal-body .valornpc b").html( '$'+myPokePriceNPC );
   $(".modal-body .valornpc b").digits();
   
} else {
   $(".modal-body .valornpc b").html( 'Indisponível' );
}

if (myPokeXpCaught != '0') {
   $(".modal-body .experienciacaught b").html( myPokeXpCaught );
   $(".modal-body .experienciacaught b").digits();
  
} else {
   $(".modal-body .experienciacaught b").html( 'Indisponível' );
}
   if (myPokeTipo2 != "Nenhum" && myPokeTipo2 != "nenhum") {
   $(".tablebe2").css('display', 'block');
   }
   

   $(".Grama.Venenoso .tablebe2").css('display', 'none');
   $(".Psiquico.Normal .tablebe2").css('display', 'none');
   $(".Fantasma.Noturno .tablebe2").css('display', 'none');
   $(".Lutador.Pedra .tablebe2").css('display', 'none');
   $(".Fada.Dragão .tablebe2").css('display', 'none');
   $(".Água.Inseto .tablebe2").css('display', 'none');
   $(".Gelo.Voador .tablebe2").css('display', 'none');
   $(".Fogo.Terra .tablebe2").css('display', 'none');
   $(".Elétrico.Metal .tablebe2").css('display', 'none');
   $(".Eletrico.Metal .tablebe2").css('display', 'none');
   
   var count = $('.modal-evolution div > *').length;
 //alert (count);
 if (count == '6') {
    $(".evos.atualevo").attr('class', 'evos atualevo');
    $(".evos.atualevo").addClass("col-xs-12 col-sm-12 col-md-12 col-lg-12");
 }
 if (count == '12') {
    $(".evos").attr('class', 'evos');
    $(".evos").addClass("col-xs-6 col-sm-6 col-md-6 col-lg-6");
 }
 if (count == '18') {
    $(".evos").attr('class', 'evos');
    $(".evos").addClass("col-xs-4 col-sm-4 col-md-4 col-lg-4");
 }
  
  
 
 if (search!="") { 
     var cookieBusca = myPokeNome;
  createCookie('search', cookieBusca, 30);

  var x = readCookie('search');
  if (x) {
   $(".last-search").html("Ultima pesquisa: <a href='#container-media' data-search='"+x+"' class='filtrar'>"+x+"</a>");
  }
  
 }

 
ga('send', 'event', 'Clicks', 'Pesquisa', myPokeNome);

   $('.bs-example-modal').modal('show');
   
    //appending modal background inside the bigform-content
   $('.modal-backdrop').appendTo('.widget.Blog');
    //removing body classes to able click events
   $('body').removeClass();
   // end getting click event to show modal
   
   loadAPI();
 
 }
 else { // se o numero de resultados for maior que 1, vai enviar um evento pesquisar pro analytics
 if (search.length >= 3) {
  //ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
    ga('send', 'event', 'Pesquisar', 'Pesquisa Parcial', search);
 }
 }
 
 return false;
  
}




// FUNÇÃO PARA LIMPAR OS CAMPOS DA PESQUISA AVANÇADA
 $('.reset').click(function() {

  $("#search-in").remove();
  $("#ourHolder-top-msg").css('display', 'none');
  $(".search-reset").css('display', 'none');
  $('#ourHolder').children('div.item').show();
  $('#search-tipo').children('option').css('display', 'block');
  $('.clans a').removeClass('active');
  $('.search-reset').css('display', 'none');
  $("#search").val("");
  $("#search-geracao").val("all");
  $("#search-clan").val("all");
  $("#search-clan2").val("all");
  $("#search-tipo").val("all");
  $("#search-tipo2").val("all");
  $("#search-level").val("all");
  $("#search-level2").val("all");
  $("#search-balls").val("all");
  $("#search-dificuldade").val("all");
  $('input#search').attr('disabled', false);

  $(".card select").val("all");



criarPaginacaodeTabela();
 
 });


 $('.semdex').click(function() {

 var value = $(this).find('h5').html();

    $(".semdex").removeClass("active");
    $(".semdex."+value).addClass("active");
    $( "#pokes-sem-dex" ).val(value);

 });


function enviarcontribuicao() {

 var name = $( "#pokes-sem-dex" ).val();
 var IPINFO = $( "#details" ).text();
 var IPINFO2 = $( "#meuip" ).text();
 var FINGERPRINT = $( "#fingerprint" ).text();
 var CUSTOMFINGERPRINT = $( "#custom-fingerprint" ).text();

$( ".contact-form-email.contributtion" ).val("contribuicao2@pxgtutor.com");

 if (name == "all") {
   $(".modal .contact-form-name").val("Contribuição DeviceID="+getDeviceId()+" Fingerprint="+FINGERPRINT+" CustomFingerprint="+CUSTOMFINGERPRINT+" IP="+IPINFO.replace(/[{}"]/g,'')+" IP2="+IPINFO2);
 } else {
   $(".modal .contact-form-name").val("Contribuição: "+name+" DeviceID="+getDeviceId()+" Fingerprint="+FINGERPRINT+" CustomFingerprint="+CUSTOMFINGERPRINT+" IP="+IPINFO.replace(/[{}"]/g,'')+" IP2="+IPINFO2);
 }
 $(".semdex").removeClass("active");
 $(".semdex."+name).addClass("active");
 
//alert (name);
}

 

 

jQuery(document).ready(function($){







                        $(".MBT-tabs-content-widget-MBT-id-medias").hide();
                        $("ul.MBT-tabs-widget-MBT-id-medias li:first a").addClass("MBT-tabs-current").show();
                        $(".MBT-tabs-content-widget-MBT-id-medias:first").show();
                        $("ul.MBT-tabs-widget-MBT-id-medias li a").click(function() {
                          $("ul.MBT-tabs-widget-MBT-id-medias li a").removeClass("MBT-tabs-current a");
                          $(this).addClass("MBT-tabs-current");
                          $(".MBT-tabs-content-widget-MBT-id-medias").hide();
                          var activeTab = $(this).attr("href");
                          $(activeTab).fadeIn();
                          return false;
                        });


     $("ul.MBT-tabs > li").click(function () {
          $(".MBT-tabs-content").show("slide", { direction: "left" }, 1000);
    });






  $(document).on("click", ".fechar-limpar", function () {
     $(this).parent().find('select').val("all");
     pesquisaavancada();
  });

  $(document).on("click", ".item3", function () {
     var mySearch = $(this).find('h5').text();
     ga('send', 'event', 'Clicks', 'Shiny', mySearch);
  });
 





  $(document).on("click", ".openNav", function () {
     $("input#search").val("");
  });
  $(document).on('click', 'a[data-toggle="tab"]', function () {
     $("input#search").val("");
  });

  $(document).on("click", "#search-in", function () {

         // do this
        $("#ourHolder-top-msg").css('display', 'none');

        $(this).remove();
        $("#search-in").remove();
        $('input#search').attr('disabled', false);
        $("input#search").removeAttr('disabled');

        $('#ourHolder').children('div.item').show();
        $('#search-tipo').children('option').css('display', 'block');
        $('.clans a').removeClass('active');
        $('.search-reset').css('display', 'none');
        $("#search").val("");
        $("#search-geracao").val("all");
        $("#search-clan").val("all");
        $("#search-clan2").val("all");
        $("#search-tipo").val("all");
        $("#search-tipo2").val("all");
        $("#search-level").val("all");
        $("#search-level2").val("all");
        $("#search-balls").val("all");
        $("#search-dificuldade").val("all");
        $('input#search').attr('disabled', false);

        $(".card select").val("all");

      var previous = "Anterior";
      var next = "Próximo";var searchPerPage = $('#search-per-page option:selected').val();
 if (searchPerPage==="default") {
  var perPage = 12;
 } 

if (searchPerPage==="12") {
 var perPage = 12;
}
if (searchPerPage==="50") {
 var perPage = 50;
}
if (searchPerPage==="100") {
 var perPage = 100;
}
if (searchPerPage==="120") {
 var perPage = 120;
}
if (searchPerPage==="200") {
 var perPage = 200;
}
if (searchPerPage==="all") {
 var perPage = 500;
}
      var items = $("#ourHolder > div");
      var numItems = items.length;

       $('.page-count div.total').html(numItems+' Pokemons');
       $('.page-count div.contagem').html('');
 



       // Only show the first perPage items initially.
       items.slice(perPage).hide();
       // Now setup the pagination using the `#pagination` div.
       $("#container-media .pagination").pagination({
         items: numItems,
         itemsOnPage: perPage,
         cssStyle: "light-theme",
         prevText: previous,
         nextText: next,
         displayedPages: 3, // How many page numbers should be visible while navigating.Minimum allowed: 3 (previous, current & next)
         edges: 1, // How many page numbers are visible at the beginning/ending of the pagination.

         // This is the actual page changing functionality.
         onPageClick: function(pageNumber) {
           // We need to show and hide `tr`s appropriately.
           var showFrom = perPage * (pageNumber - 1);
           var showTo = showFrom + perPage;

           // We'll first hide everything...
           items.hide()
           // ... and then only show the appropriate rows.
            .slice(showFrom, showTo).show();
         }
 });


  });



$(".item").click( function() {
   var myPokeNome = $(this).attr('data-nome');
    ga('send', 'event', 'Clicks', 'Item', myPokeNome);
});

$(".filtrar").click( function() {
   var mySearch = $(this).attr('data-search');
        ga('send', 'event', 'Clicks', 'Filtrar', mySearch);

});


$(".tab-media a").click( function() {
        ga('send', 'event', 'Clicks', 'Modal TABS', 'Medias');
});
$(".tab-mapa a").click( function() {
        ga('send', 'event', 'Clicks', 'Modal TABS', 'Mapas');
});
$(".tab-move a").click( function() {
        ga('send', 'event', 'Clicks', 'Modal TABS', 'Moves');
});
$(".tab-loot a").click( function() {
        ga('send', 'event', 'Clicks', 'Modal TABS', 'Loots');
});
$(".tab-forca a").click( function() {
        ga('send', 'event', 'Clicks', 'Modal TABS', 'Forca fraqueza');
});





    $('.liked').click(function() {
     ga('send', 'event', 'Like Modal cookie', 'Gostei');
     createCookie('likecookie','liked',30);
     $(".bigform-content").removeClass('adjustlikemodal');
     setTimeout(function(){
          $("#search").focus();
          $('html,body').animate({ scrollTop: 0 }, 'slow'); return false; 
     }, 10); 
    });
 
    $('.like-later').click(function() {
     ga('send', 'event', 'Like Modal cookie', 'Depois');
     createCookie('likecookie','like-later',1);
     $(".bigform-content").removeClass('adjustlikemodal');
     setTimeout(function(){
          $("#search").focus();
          $('html,body').animate({ scrollTop: 0 }, 'slow'); return false;
     }, 10); 
    });

 
    $('.btn-facebook').click(function() {
     ga('send', 'event', 'Share', 'Facebook');
     createCookie('sharecookie','shared',60);
    });
 
    $('.btn-twitter').click(function() {
     ga('send', 'event', 'Share', 'Twitter');
     createCookie('sharecookie','shared',60);
    });
 
    $('.btn-google').click(function() {
     ga('send', 'event', 'Share', 'Google');
     createCookie('sharecookie','shared',60);
    });
 
    $('.btn-envelope').click(function() {
     ga('send', 'event', 'Share', 'Email');
     createCookie('sharecookie','shared',60);
    });


 
    $('.openNav').click(function() {
     ga('send', 'event', 'Pesquisa Avançada', 'Abriu', 'Abriu Pesquisa');
    });

    $('#search-geracao').change(function() {
     var mySearch = $('#search-geracao option:selected').val();
     ga('send', 'event', 'Pesquisa Avançada', 'Geração', mySearch);
    });
    $('#search-clan').change(function() {
     var mySearch = $('#search-clan option:selected').val();
     ga('send', 'event', 'Pesquisa Avançada', 'Clan', mySearch);
    });
    $('#search-clan2').change(function() {
     var mySearch = $('#search-clan2 option:selected').val();
     ga('send', 'event', 'Pesquisa Avançada', 'Clan', mySearch);
    });
    $('#search-tipo').change(function() {
     var mySearch = $('#search-tipo option:selected').val();
     ga('send', 'event', 'Pesquisa Avançada', 'Tipo', mySearch);
    });
    $('#search-tipo2').change(function() {
     var mySearch = $('#search-tipo2 option:selected').val();
     ga('send', 'event', 'Pesquisa Avançada', 'Tipo', mySearch);
    });
    $('#search-level').change(function() {
     var mySearch = $('#search-level option:selected').val();
     ga('send', 'event', 'Pesquisa Avançada', 'Level', mySearch);
    });
    $('#search-level2').change(function() {
     var mySearch = $('#search-level2 option:selected').val();
     ga('send', 'event', 'Pesquisa Avançada', 'Level', mySearch);
    });
    $('#search-balls').change(function() {
     var mySearch = $('#search-balls option:selected').val();
     ga('send', 'event', 'Pesquisa Avançada', 'Ball', mySearch);
    });
    $('#search-dificuldade').change(function() {
     var mySearch = $('#search-dificuldade option:selected').val();
     ga('send', 'event', 'Pesquisa Avançada', 'Dificuldade', mySearch);
    });


 
    $('.download-app').click(function() {
     //var mySearch = $(this).find('i').text();
     ga('send', 'event', 'Clicks', 'Downloads', 'Go to site');
    });
    $('.card.card-clan .card-block a').click(function() {
     var mySearch = $(this).find('i').text();
     ga('send', 'event', 'Pesquisa Simples', 'Clan', mySearch);
    });
    $('.card.card-tipo .card-block a').click(function() {
     var mySearch = $(this).text();
     ga('send', 'event', 'Pesquisa Simples', 'Tipo', mySearch);
    });
    $('.card.card-level select').change(function() {
     var mySearch = $('.card.card-level select option:selected').val();
     ga('send', 'event', 'Pesquisa Simples', 'Level', mySearch);
    });
    $('.card.card-geracao select').change(function() {
     var mySearch = $('.card.card-geracao select option:selected').val();
     ga('send', 'event', 'Pesquisa Simples', 'Geração', mySearch);
    });
    $('.card.card-ball select').change(function() {
     var mySearch = $('.card.card-ball select option:selected').val();
     ga('send', 'event', 'Pesquisa Simples', 'Ball', mySearch);
    });
    $('.card.card-dificuldade select').change(function() {
     var mySearch = $('.card.card-ball select option:selected').val();
     ga('send', 'event', 'Pesquisa Simples', 'Dificuldade', mySearch);
    });
    $('.card.card-loot select').change(function() {
     var mySearch = $('.card.card-loot select option:selected').val();
     ga('send', 'event', 'Pesquisa Simples', 'Loot', mySearch);
    });
    $('.card.card-move select').change(function() {
     var mySearch = $('.card.card-move select option:selected').val();
     ga('send', 'event', 'Pesquisa Simples', 'Move', mySearch);
    });






$("#sectionA .card-header").click(function() {
    var current = $(this).parent();
    current.siblings().find('.collapse').removeClass('in');
});


 $('#search').each(function() {
   var elem = $(this);

   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
   elem.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
       // Updated stored value
       elem.data('oldVal', elem.val());

       // Do action
       pesquisaavancada();
     }
   });
 });

    //caso tenha vindo de um link ?search=string faz a busca pela string na url
 var query = window.location.search.substring(1); 


var text = query;
var term = "search";
if( text.indexOf( term ) != -1 ) {
 query = query.replace("search=", ""); 
    query = query.replace("%20", " "); 
    query = query.replace("#page-1", ""); 
    query = query.replace("?m=1", ""); 
    query = query.replace("?m=0", ""); 
    query = query.replace("&m=1", ""); 
    query = query.replace("&m=0", ""); 


 if (query !== "") {

   if (document.title != query) {
       document.title = "Exibir: "+query+" - Média PxG";
   }

   $("#search").val(query);
   
  setTimeout(function() {
  pesquisaavancada();
  }, 2000);


 }
}



 


   //Função Toggle container classe .trigger
    //$(".pesquisa-sidebar").hide();
    $(".pesquisa-botao").click(function(){
  $(".pesquisa-sidebar").toggleClass("show-pesquisa-sidebar").slideToggle("slow");
  $(this).toggleClass("sidebar-aberto");
    });


 
 
 
$("#mySidenav #checkArray").remove();
$("#mySidenav #checkArray2").remove();
$('#sectionB').html($('#mySidenav .busca-inner-sidenav').html());

$("#mySidenav").remove();
  



  window.onscroll = function() {myFunction()};

  function myFunction() {

    if (document.body.scrollTop > 375 || document.documentElement.scrollTop > 375) {
            $('.pesquisa-sidebar').addClass('stickytop');
    } else {
            $('.pesquisa-sidebar').removeClass('stickytop');
    }
  }

});





//////// OCULTAR CASO ABRA INSPETOR DE ELEMENTOS
//  var currentInnerHtml;
//  var element = new Image();
//  var elementWithHiddenContent = document.querySelector("#Blog1");
//  var innerHtml = elementWithHiddenContent.innerHTML;
//  
//  element.__defineGetter__("id", function() {
//      currentInnerHtml = "Oops! Ocorreu um erro. Atualize a página";
//      $('.floatingg').css('display', 'none');
//  });
//  
//  setInterval(function() {
//      currentInnerHtml = innerHtml;
//      console.log(element);
//      console.clear();
//      elementWithHiddenContent.innerHTML = currentInnerHtml;
//  }, 1000);




//]]>
