import { FormControl } from "@angular/forms";

export class CustomOption {
    description: string = '';
    value: string;
    multiple: boolean;
    formControlName: string;
    selected: boolean;

    constructor(multiple: boolean, description: string, value: string, formControlName: string) {
        this.multiple = multiple;
        this.description = description;
        this.value = value;
        this.formControlName = formControlName;
    }
}