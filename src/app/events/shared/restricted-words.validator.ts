import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
    return (control: FormControl): {[key: string]: any} => {
        if (!words) { return null; }
        const invalidWords = words
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w);
        return invalidWords.length ?
            { restrictedWords: invalidWords.join(', ') } :
            null;
    };
}
