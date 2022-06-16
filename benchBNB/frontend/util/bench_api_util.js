

export const fetchBenches = () => {
    return $.ajax({
        method: "GET",
        url: "/api/benches",
        error: (err) => console.log(err)
    })
}

export const receiveBench = bench => {
    return $.ajax({
        method: "POST",
        url: "/api/benches",
        data: { bench },
        error: (err) => console.log(err)
    })
}