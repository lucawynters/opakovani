// 1. Napiš funkci, která zjistí, zda je návštevník v baru plnoletý.
// Funkce bere jeden parametr (věk) a vrací řetězec informující o výsledku.
let vek = 23;
console.log(jePlnolety(vek));

const age = (vek) => {
	if (vek >= 18) {
		console.log(`Je plnoletý ${vek}`);
	} else {
		console.log(`Není plnoletý ${vek}`);
	}

	// 2. Napiš funkci, která otestuje, zda je osoba muž (M) nebo žena (Z).
	let pohlavi = 'Z';

	const gender = (pohlavi) => {
		if (pohlavi === 'M') {
			console.log('Muž');
		} else {
			console.log('Žena');
		}
	};

	// 3. Představ si, že žiješ na Měsíci. Teploty se tam pohybují
	// od -173°C do +127°C. Než vylezeš z domu, zjisti nejdřív,
	// zda je venku teplota vhodná na kraťasy a tričko s krátkým
	// rukávem, tj. teplota mezi 20°C a 38°C.
	// Protože máš na měsíci hodně kolegů, připrav pro ně funkci (která tohle otestuje), 
	// aby nemuseli psát kód pokaždé znovu.
	let teplota = 28;

	const muzuVen = (teplota) => {
		if (teplota >= 20 && teplota <= 38) {
			console.log('Můžeš');
		} else {
			console.log('Nemůžeš');
		}
	};

	// 4. Napiš funkci, která zjistí, zda je daná osoba dospělá žena, která může řídit.
	// Funkce bere dva parametry, osobu a aktuální rok.
	let osoba = {
		jmeno: 'Ema',
		pohlavi: 'Z',
		rokNarozeni: 1992,
		ridicak: true
	};

	let aktualniRok = 2019;

	const ridicka = (osoba, aktualniRok) => {
		if (osoba.pohlavi === 'Z' && aktualniRok - osoba.rokNarozeni >= 18 && osoba.ridicak === true) {
			console.log('Je řidička');
		} else {
			console.log('Není řidička');
		}
	};

	// 5. Podle věku napiš, o jakého člověka jde:
	// 0-5 miminko
	// 6-18 dítě
	// 19 - 65 dospělý
	// 66 a víc - důchodce
	let vek = 23;

	const identita = (vek) => {
		if (vek >= 66) {
			console.log('Jsi důchodce');
		} else if (vek >= 18) {
			console.log('Jsi dospělý');
		} else if (vek >= 6) {
			console.log('Jsi dítě');
		} else {
			console.log('Jsi miminko');
		}
	};

	// 6. Moje oblíbené ovoce jsou jahody, melouny nebo hrušky.
	// Řekni mi, zda si dnes zamlsám!
	// Pro pokročilé - troufneš si to napsat pomocí hledání v poli, ve kterém bude uloženo, jaké ovoce mám rád?

	const favOvoce = ['jahody', 'melouny', 'hrušky']


// 7. Pro mírně pokročilé
// Napiš funkci, která jako parametr bere třídu id nějakého html prvku, a přidá mu třídu "active".
// Pozor, prvek už může nějaké třídy mít!

// 8. Pro pokročilé.
// Napište posluchač události, který bude zachycovat událost "click" na celém dokumentu (pověste ho na "document.body"). 
// Událost si uložte do parametru event a vypište ji do konzole. Prohlédněte si celý vypsaný objekt a popřemýšlejte, 
// co znamenají jeho jednotlivé vlastnosti. Mimojiné se zaměřte na vlastnost clientX a clientY. Zkuste pomocí googlu
// zjistit, co přesně znamenají (např. na MDN tuhle informaci určitě najdete.)
// Pro super pokročilé: Dokážete z objektu události zjistit, kterým tlačítkem bylo kliknuto? (Pomůže opět google.)