







function Login() {
  return (
    <>
        <h1 class="text-center">Please log in</h1>
        <form class="form-control" action="" method="get" accept-charset="utf-8">
            <input class="form-control" type="text" name="username" id="username" value="" placeholder='Enter your Username'/>
            <input class="form-control" type="text" name="password" id="password" value="" placeholder='Enter your password '/>
            <input type="submit"/>
        </form>
    </>
  );
}




export default Login;

