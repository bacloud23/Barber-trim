function trim(str) {
    try {
        return str.split(/\s/).filter(Boolean).join(' ')
    } catch (error) {
        return str
    }
}

export default trim;