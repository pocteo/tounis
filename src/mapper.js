exports.convert = function (data) {
    return data.map(item => {
        return {
            name: `${item.firstname} ${item.lastname}`,
            job: item.position,
            freelance: item.independant.toLowerCase() === 'yes'
        }
    })
}
