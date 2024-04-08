document.addEventListener('alpine:init', () => {
    Alpine.data('logindata', () => ({
        username : '',
        passname : '',
        users: [
            {
                username: "admin",
                password: "admin",
                role: "admin",
                email: "admin@admin.com"
            },
            {
                username: "user",
                password: "user",
                role: "site_user",
                email: "user@user.com"
            }
        ],
        Login() {

            let isAdmin = this.users.find(u => u.username === this.username && u.password === this.passname);
            if (isAdmin) {
                console.log("Welcome admin, Authentication complete");
            } else {
                console.log("Incorrect username or password.");
            }
        }
    }));
});