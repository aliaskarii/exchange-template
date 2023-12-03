export const fakeAuthProvider = {
  isAuthenticated: false,
  phone: null,
  async signin(phone) {
    await new Promise((r) => setTimeout(r, 500)) // fake delay
    fakeAuthProvider.isAuthenticated = true
    fakeAuthProvider.phone = phone
  },
  async signout() {
    await new Promise((r) => setTimeout(r, 500)) // fake delay
    fakeAuthProvider.isAuthenticated = false
    fakeAuthProvider.phone = ''
  },
}
