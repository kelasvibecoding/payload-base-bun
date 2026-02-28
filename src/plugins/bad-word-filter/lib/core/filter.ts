import { transleet } from "../utils/leet";
import { blacklist } from "../dictionary/index";
import { createPattern } from "../utils/regex";

export function filter(text: string): string {
    let result = text;

    for (const word of blacklist) {
        const regex = createPattern(word);

        result = result.replace(regex, "");
    }

    return result.replace(/\s+/g, " ").trim();
}

export function leetFilter(text: string): string {
    const leetText = transleet(text);
    return filter(leetText);
}