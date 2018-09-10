import { Cookies } from 'react-cookie';

const supportedLocales = ['en', 'en-US'];

const cookies = new Cookies();

export default function getLocale(){
	// Cookies have property over browser and defaults
	const appLangCookie = cookies.get('applang');
	const suggestedLocale = appLangCookie || (window.navigator ? window.navigator.language : 'en');

	if ( supportedLocales.includes(suggestedLocale)) {
		return suggestedLocale;
	} else {
		return 'en';
	}
}
