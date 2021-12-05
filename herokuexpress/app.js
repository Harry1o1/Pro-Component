const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const connectDb = require('./db/connect');
const DB = process.env.DATABASE;
const UserSchema = require('./models/user');
const router = require('./routes/crud');
app.use(express.json());
app.use('/', router);




// Graphql ///////////////////////////////////////////////////////////////////////////
let { graphqlHTTP } = require('express-graphql');
let { buildSchema } = require('graphql');
// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
// Graphql ///////////////////////////////////////////////////////////////////////////







//Middleware ///////////////////////////////////////////////////////////////////////////
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*')

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }

    next();
})
const middleware = (req, res, next) => {
    console.log('middleware');
    next();
};
//Middleware ///////////////////////////////////////////////////////////////////////////





//Routes  ///////////////////////////////////////////////////////////////////////////
app.get('/about', middleware, (req, res) => {
    res.send('Hello from about');
    console.log('Hello from about');

});

let Thapa = 'Thapa';

app.get('/contact', middleware, (req, res) => {
    res.cookie('jwtoken', Thapa)
    res.send('Hello from contact');
    console.log('Hello from contact');

});

app.get('/register', async (req, res) => {
    const user = await UserSchema.find({});
    console.log(user);
    try {
        res.status(200).json({ user });
    } catch (e) {
        console.log(e);
        res.send('error')
    }
});

app.get('/login', (req, res) => {
    res.status(200).send('Hello from login');
});
app.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await UserSchema.find({});
        // All data filled
        if (!email || !password) {
            res.status(404).send('Plz fill all data')
        }
        else {
            // Already had an account
            const userLogin = await UserSchema.findOne({ email: email });
            const userpassword = await UserSchema.findOne({ password: password });
            if (!userLogin) {
                console.log("This email is not registered");
                res.status(400).send('This email is not registered');
            }
            else if(!userpassword){
                console.log("Password");
                res.status(400).send('Password');
            }
            else {
                // Some days later
                // const isMatch = await bcrypt.compare(password, userLogin.password);
                // if (!isMatch) {
                // }
                // else {
                    const token = await userLogin.generateAuthToken();
                    console.log(userLogin);
                    console.log('You logged in');
                    res.status(200).send('You logged in');
                // }
            }
        }
    } catch (e) {
        console.log(e);
        res.status(400).send('Error');
    };
});
//Routes  ///////////////////////////////////////////////////////////////////////////







const start = async () => {
    try {
        await connectDb(DB);
        app.listen(port, (req, res) => {
            console.log('server is running at http://localhost:5000/graphql');
        })
    } catch (error) {
        console.log(error);
    }
}

start();