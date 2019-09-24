let city = [[ "Австралійський Союз", "Австрія", "Азербайджан", "Аландські острови", "Албанія", "Алжир", "Американські Віргінські острови", "Американське Самоа", "Ангілья", "Ангола", "Андорра" , "Антарктида", "Антигуа і Барбуда", "Аргентина", "Аруба", "Афганістан"],
	[ "Багамські острови", "Бангладеш", "Барбадос", "Бахрейн", "Беліз", "Білорусія", "Бельгія", "Бенін", "Болгарія", "Болівія", "Боснія", "Ботсвана", "Бразилія", "Буркіна-Фасо", "Бурунді", "Бутан"],
	[ "Вануату", "Ватикан", "Великобританія", "Венесуела", "Вірменія", "В'єтнам"],
	[ "Габон", "Гаїті", "Гайана", "Гамбія", "Гана", "Гватемала", "Гвінея", "Гвінея-Бісау", "Голландія", "Гондурас", "Гонконг" , "Гренада", "Гренландія", "Греція", "Грузія", "Гуам"],
	[ "Данія", "Джібуті", "Домініканська республіка"],
	[ "Єгипет"],
	[ "Замбія", "Західна Сахара", "Зімбабве"],
	[ "Ізраїль", "Індія", "Індонезія", "Ірак", "Іран", "Ірландія", "Ісландія", "Іспанія", "Італія"],
	[ "Йемен", "Йорданія"],
	[ "Кабо-Верде", "Казахстан", "Конго", "Камбоджа", "Камерун", "Канада", "Катар", "Кенія", "Кіпр", "Киргизія", "Кірібаті", "Китай", "Кндр" , "Колумбія", "Коморські острови", "Коста-Ріка", "Кот-д'Івуар", "Куба", "Кувейт"],
	[ "Лаос", "Латвія", "Лесото", "Ліберія", "Ліван", "Лівія", "Литва", "Ліхтенштейн", "Люксембург"],
	[ "Маврикій", "Мавританія", "Мадагаскар", "Македонія", "Малаві", "Малайзія", "Малі", "Мальдіви", "Мальта", "Марокко", "Мартініка", "Мексика", " Мікронезія "," Мозамбік "," Молдавія "," Монако "," Монголія "," М'янма "],
	[ "Намібія", "Непал", "Німеччина", "Нігер", "Нігерія", "Нікарагуа", "Нова Зеландія", "Нова Каледонія", "Норвегія"],
	[ "Оае", "Оман"],
	[ "Пакистан", "Палестина", "Панама", "Папуа-Нова Гвінея", "Парагвай", "Перу", "Польща", "Португалія", "Пуерто-Ріко", "Південно-Африканська Республіка"],
	[ "Республіка Конго", "Республіка Корея", "Росія", "Руанда", "Румунія"],
	[ "Сальвадор", "Сан-Марино", "Сан-Томе і Прінсіпі", "Саудівська Аравія", "Свазіленд", "Сенегал", "Сент-Кітс і Невіс", "Сент-Люсія", "Сербія", "Сінгапур", "Сирія", "Словаччина", "Словенія", "Соломонові острови", "Сомалі", "Судан", "Суринам", "Сша", "Сьерра-Леоне"],
	[ "Таджикистан", "Таїланд", "Тайвань", "Танзанія", "Того", "Тонга", "Тринідад і Тобаго", "Туніс", "Туркменістан", "Туреччина"],
	[ "Уганда", "Узбекистан", "Україна", "Уругвай", "Угорщина"],
	[ "Фіджі", "Філіппіни", "Фінляндія", "Франція", "Французька Гвіана"],
	[ "Хорватія"],
	[ "Центральноафриканська Республіка"],
	[ "Чад", "Чорногорія", "Чехія", "Чилі"],
	[ "Швейцарія", "Швеція", "Шрі-Ланка"],
	[ "Еквадор", "Екваторіальна Гвінея", "Еритрея", "Естонія", "Ефіопія"],
	[ "Ямайка", "Японія"]];

let time = 20;
let score = 0;
document.getElementById('timer_inp').innerText = time;
document.getElementById('score').innerText = score;

function timer(){
	let obj = document.getElementById('timer_inp');
	obj.innerHTML--;

	if(obj.innerHTML == 0){
		alert('Game over');
		setTimeout(function(){},1000);
		window.location.reload(true);
	}
	else
		setTimeout(timer,1000);
}

function enter(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    add(city);
  }
}

setTimeout(timer,1000);

function add(global_city)
{
	let latters = ['а','б','в','г','д','е','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','є','я'];

	let q = 0;
	let t = 1;
	let c = 0;
	let nomer = 0;
	let proverka1 = 0;
	let samaya_vazhnaya_peremennaya = 1;
	let word = document.getElementById('inp').value;

	while (proverka1 < t)
	{
		for(let chto_to of global_city[proverka1])
		{
		    if (word == chto_to)
		    {
		    	global_city[t-1].splice(q, 1);
		    	samaya_vazhnaya_peremennaya = 0;
		    	break;
		    }
		    q = q + 1;
		}  
		proverka1 = proverka1 + 1;
		q = 0;
		if (t == 26)
	  		break;
		t = t + 1;
	}
	if (samaya_vazhnaya_peremennaya == 1)
	{
		document.getElementById('out').innerText = "Країна не існує або була використана";
		document.getElementById('inp').value = "";
		score = score - 100;
		document.getElementById('score').innerHTML = score;
		if(score < 0){
		alert('Game over');
		window.location.reload(true);
	}
	}

	if (samaya_vazhnaya_peremennaya == 0)
	{
	    c = word.slice(-1);
		document.getElementById('timer_inp').innerHTML = time;
		score = score + 100;
		document.getElementById('score').innerHTML = score;
	}

	for (let r of latters)
	{
		if (c == r)
		{
			let chislo = Math.floor(Math.random() * global_city[nomer].length);
			let slovo = global_city[nomer][chislo];
			if(slovo != undefined)
			{
				global_city[nomer].splice(chislo, 1);
				document.getElementById('out').innerText = slovo;
				document.getElementById('inp').value = "";
			}
			else
			{
				alert("Людство перемогло! Розпочато нова гра\n");
				window.location.reload(true);
			}
			slovo = 0;
		}
		nomer = nomer + 1;
	}
	console.log(c);
	document.getElementById('inp').focus();
}