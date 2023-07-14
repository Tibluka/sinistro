export class CustomOption {
    description: string = '';
    value: string;
    multiple: boolean;
    selected: boolean;

    constructor(multiple: boolean, description: string, value: string) {
        this.multiple = multiple;
        this.description = description;
        this.value = value;
    }
}