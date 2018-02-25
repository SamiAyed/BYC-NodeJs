const users = [{
    id: 1,
    name: "Sami"
}]

const getAllUsers = (req, res) => {
    res.json({
        users: users
    })
}

const getUser = (req, res) => {
    let user = users.find(el => el.id === parseInt(req.params.id))

    if (!user) {
        res
        .status(400)
        .json({
            error: 'User Not Found'
        })

        return
    }

    res.json({
        user
    })
}

const createUser = (req, res) => {
    req.body.id = 2
    users.push(req.body)

    res.json({
        user: req.body
    })
}

const updateUser = (req, res) => {
    res.json({
        success: true
    })
}

const deleteUser = (req, res) => {
    res.json({
        success: true
    })
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
