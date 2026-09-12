export type Language = 'en' | 'bn';

export const fallbackLanguage: Language = 'en';

export function localized<T extends { en: string; bn: string }>(value: T, language: Language = fallbackLanguage) {
	return value[language] || value.en;
}
