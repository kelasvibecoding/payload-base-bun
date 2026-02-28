import { transleet } from "../utils/leet";
import { blacklist } from "../dictionary/index";
import { createPattern } from "../utils/regex";

export function flag(text: string): boolean {
    for (const word of blacklist) {
        const regex = createPattern(word);

        if (regex.test(text)) {
            return true;
        }
    }
    return false;
}

export function leetFlag(text: string): boolean {
    const leetText = transleet(text);
    return flag(leetText);
}