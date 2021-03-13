export type TProperty = string | number;
export type TObject = {
	[key in TProperty]: any;
};

export function removeProperties(obj: TObject, remove: string[]): TObject {
	return Object.keys(obj)
		.filter((key) => !remove.includes(key))
		.reduce((newObj, key) => {
			newObj[key] = obj[key];
			return newObj;
		}, {} as TObject);
}
