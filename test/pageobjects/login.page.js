class Login {
    async acessPage() {
        return browser.url(`/`)
    }
}
export default new Login()