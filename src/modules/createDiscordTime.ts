// Take a date string and return a Discord-formatted time
// string

export function createDiscordTime(
	unixDateTime: number,
	type: "t" | "T" | "d" | "D" | "f" | "F" | "R"
): string {

	const timeStamp = Math.floor(unixDateTime / 1000)
	return `<t:${timeStamp}:${type}>`

}
