let defaultCity = '杭州'
try {
    defaultCity = localStorage.city
} catch (e) {
    console.log(e)
}

export default {
    city: defaultCity
}