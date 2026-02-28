import { transleet } from "../utils/leet";

import { blacklist } from "../dictionary/index";
import { createPattern } from "../utils/regex";

export function extract(text: string): string[] {
    const found: string[] = [];

    for (const word of blacklist) {
        const regex = createPattern(word);

        const matches = text.match(regex);
        if (matches) {
            found.push(...matches);
        }
    }
    return found;
}

export function leetExtract(text: string): string[] {
    const leetText = transleet(text);
    return extract(leetText);
}