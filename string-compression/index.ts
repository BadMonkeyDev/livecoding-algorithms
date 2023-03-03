export function compress(chars: string[]): number {
    let result: string = ''
    let i = 0 //current index of chars array
    let j = 1 //current elements count in group
    let k = 0 // position to rewrite new group
    while (i < chars.length) {
        if (chars[i] === chars[i + 1]) {
            j++
        } else {
            chars[k++] = chars[i]
            result += chars[i]
            if (j > 1) {
                const j_string = j.toString()
                let l = 0
                while (l < j_string.length) {
                    result += j_string[l]
                    chars[k++] = j_string[l]
                    l++
                }
            }
            j = 1
        }
        i++
    }
    return result.length
}