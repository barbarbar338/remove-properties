export function removeProperties<
	T extends Record<string, unknown>,
	K extends string | number | symbol,
>(obj: T, remove: K[]): Omit<T, K> {
	return (
		(Object.keys(obj) as K[]).filter((key) => !remove.includes(key)) as (
			| string
			| number
			| symbol
		)[]
	).reduce((newObj, key) => {
		(newObj as any)[key] = (obj as any)[key];
		return newObj;
	}, {} as Omit<T, K>);
}
