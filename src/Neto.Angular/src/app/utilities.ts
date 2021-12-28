declare let process: any

let baseAddress = ""

if (process.env.NODE_ENV == "development") {
    baseAddress = "http://localhost:5147"
}

let getApi = (route: string) => {
    return `${baseAddress}/${route}`
}

let route = {
    note: "note",
}

export { getApi, route }