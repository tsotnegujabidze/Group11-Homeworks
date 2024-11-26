const Register = () => {

    let n = 0;

    const alert = () => {
        alert("You have clicked the button" + toString(n) + "times!")
        n += 1
    }

    return (
        <form>
            <h1>Register</h1>
            <input type="email" placeholder="Please Enter Gmail" />
            <input type="password" placeholder="Please Enter Password" />
            <button onClick={alert} type="submit">Submit</button>
        </form>
    )
}

export default Register;