const deleteUser = async (id: number) => {
    const res = await fetch('http://127.0.0.1:8080/deleteUser/' + id, {
        method: 'DELETE',
    })

    return res;
}

const createUser = async (name?: string, password?: string, sdt?: string) => {
    const res = await fetch("http://127.0.0.1:8080/register",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    name,
                    password,
                    sdt
                }
            )
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })

    return res
}
export { deleteUser, createUser }