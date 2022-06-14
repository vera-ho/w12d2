
export const signup = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
)

export const login = (userId) => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
)