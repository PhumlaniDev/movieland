export const calcTime = (time) => {
	const hours = Math.floor(time / 60);
	const minutes = time % 60;
	return `${hours}h ${minutes}m`;
};

export const convertMoney = (money) => {
	const formatValue = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "ZAR",
		minimumFractionDigits: 0,
	});
	return formatValue.format(money);
};

// Session Storage
export const isPersistedState = (stateName) => {
	const sessionState = sessionStorage.getItem(stateName);
	return sessionState && JSON.parse(sessionState);
};
