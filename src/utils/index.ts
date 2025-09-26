export function windowOpen (url: string) {
    const originUlr = window.location.origin
    window.open(`${originUlr}${url}`)
}