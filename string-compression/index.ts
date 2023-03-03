function compress(chars: string[]): number {
    let write = 0; // current write position in chars array
    let i = 0; // current read position in chars array
    let count = 1; // count of consecutive characters
    for (let j = 1; j <= chars.length; j++) {
        if (j < chars.length && chars[j] === chars[i]) {
            count++;
        } else {
            chars[write++] = chars[i];
            if (count > 1) {
                const countStr = count.toString();
                for (let k = 0; k < countStr.length; k++) {
                    chars[write++] = countStr[k];
                }
            }
            count = 1;
            i = j;
        }
    }
    return write;
}