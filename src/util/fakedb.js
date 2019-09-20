export const generateId = () => {
	const data = findAll();
	let result = 0;
	Object.keys(data).forEach(key => {
		if (Number(key) > result) {
			result = Number(key);
		}
	});
	return result + 1;
}

export const debounce = (func, delay) => {
	let timer;
	return function () {
		const context = this;
		const args = arguments;
		clearTimeout(timer);
		timer = setTimeout(() => func.apply(context, args), delay);
	}
}

export const findAll = () => {
	return JSON.parse(localStorage.getItem('memoAppData') || '{}');
}

export const findAllAsArray = () => {
	const objData = findAll();
	return Object.keys(objData).map(key => ({
		id: key,
		title: objData[key].title,
		text: objData[key].text
	})).sort((a, b) => Number(a.id) > Number(b.id) ? -1 : 1);
}

export const deleteById = (id) => {
	const allData = findAll();
	delete allData[id];
	localStorage.setItem('memoAppData', JSON.stringify(allData));
}

export const saveMemo = (id, title, text) => {
	const appData = findAll();
	if (id && appData[id]) {
		appData[id] = {
			title: title === undefined ? appData[id].title : title,
			text: text === undefined ? appData[id].text : text
		}
	} else {
		appData[generateId()] = {
			title,
			text
		}
	}
	localStorage.setItem('memoAppData', JSON.stringify(appData));
}