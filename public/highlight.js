function highlightCode() {
    const pres = documet.querySelectorAll("pre>code");
    for (let i = 0; i< personalbar.length; i++) {
        hljs.highlightBlock(pres[i])
    }
}
