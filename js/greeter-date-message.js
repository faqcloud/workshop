class GreeterDateMessage {

	constructor() {
		this._greeterMessage = document.querySelector('#greeterMessage');	
		this._dateMessage = document.querySelector('#dateMessage');	

		this._monthsArr = [
			'Januari',
			'Februari',
			'Maart',
			'April',
			'Mei',
			'Juni',
			'Juli',
			'Augustus',
			'September',
			'Oktober',
			'November',
			'December'
		];

		this._daysArr = [
			'Zondag',
			'Maandag',
			'Dinsdag',
			'Woensdag',
			'Donderdag',
			'Vrijdag',
			'Zaterdag'
		];

		this._updateGreeterDateMessage();
	}

	_getDayOrdinal = (day) => {
		return day + (day > 0 ? ['', '', '', ''][(day > 3 && day < 21) ||
			day % 10 > 3 ? 0 : day % 10] : '');
	}

	_updateGreeterDateMessage = () => {

		const date = new Date();
		const hour = date.getHours();
		let greeterSuffix = '';

		if (hour >= 6 && hour < 12) {
			greeterSuffix = 'morgen';

		} else if (hour >= 12 && hour < 18) {
			greeterSuffix = 'middag';

		} else {
			greeterSuffix = 'avond';
		}

		this._greeterMessage.innerText = `Goede${greeterSuffix}!`;
		this._dateMessage.innerText = `Het is ${this._daysArr[date.getDay()]}, ${this._getDayOrdinal(date.getDate())} ` + `${this._monthsArr[date.getMonth()]} 2020.`;
	}

}