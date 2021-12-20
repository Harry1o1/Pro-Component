







function Login() {
  return (
    <>
        <h1 className="text-center">Please log in</h1>
        <form className="form-control" action="" method="get" accept-charset="utf-8">
            <input className="form-control" type="text" name="username" id="username" value="" placeholder='Enter your Username'/>
            <input className="form-control" type="text" name="password" id="password" value="" placeholder='Enter your password '/>
            <input type="submit"/>
        </form>
    </>
  );
}




export default Login;

