export const passwordRules = [
        {
            label: "At least one lowercase letter (a–z)",
            test: (pw) => /[a-z]/.test(pw),
        },
        {
            label: "At least one uppercase letter (A–Z)",
            test: (pw) => /[A-Z]/.test(pw),
        },
        {
            label: "At least one digit (0–9)",
            test: (pw) => /[0-9]/.test(pw),
        },
        {
            label: "No spaces allowed",
            test: (pw) => !/\s/.test(pw),
        },
        {
            label: "Only a-z, A-Z, 0-9 and @#$%^&*! allowed",
            test: (pw) => /^[a-zA-Z0-9@#$%^&*!]*$/.test(pw),
        },
        {
            label: "Minimum 8 characters",
            test: (pw) => pw.length >= 8,
        },
    ];

export function validatePassword(password){
    return /^[a-zA-Z0-9@#$%^&*!]*$/.test(password) && password.length>=8;
}
