export class StringValidator {
	validate(input: string): boolean{
		return input.length > 0;
	}
}