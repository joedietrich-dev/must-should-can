const authProvider = {
  isAuthenticated: false,
  errors: [],
  async login(user, callback = (f) => f) {
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    if (res.ok) {
      authProvider.isAuthenticated = true;
      const returningUser = await res.json();
      callback(returningUser);
    } else {
      authProvider.isAuthenticated = false;
      const data = await res.json();
      authProvider.errors = [data.error];
    }
  },
};

export default authProvider;
