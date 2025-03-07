const userMain = require( "../models/user" )
const bcrypt = require( "bcryptjs" );
const jwt = require( "jsonwebtoken" );


const signup = async ( req, res ) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Validate request data
        if ( !firstName || !lastName || !email || !password ) {
            return res.status( 400 ).json( { error: "All fields are required" } );
        }
        //check if user exists
        let user = await userMain.findOne( { email } );
        if ( user ) return res.status( 400 ).json( { msg: "User already exists" } );
        //hash password before saving
        const salt = await bcrypt.genSalt( 10 );
        const hashedPassword = await bcrypt.hash( password, salt );
        //create a new user
        user = new userMain( { firstName, lastName, email, password: hashedPassword } );

        await user.save();

        res.status(201).json( { msg: "User registered successfully" } );
    } catch ( err ) {
        console.error("signup error:", err);
        
        res.status( 500 ).json( { error: err.message } );
    }
};

const login = async ( req, res ) => {
    try {
        
        const { email, password } = req.body;
        //find user by email

        const user = await userMain.findOne( { email } );

        if ( !user ) return res.status( 400 ).json( { error: "User not found" } );
        //compare passwords
        const isMatch = await bcrypt.compare( password, user.password );
        if ( !isMatch ) return res.status( 400 ).json( { error: "Invalid credentials" } );
        //generate JWT token
        const token = jwt.sign( { id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" } );

        res.json( { token, user: { firstName: user.firstName, lastName: user.lastName, email: user.email, profilePicture: user.profilePicture } } );
    } catch ( err ) {
        console.error( "Login Error:", error );
        res.status( 500 ).json( { error: "Internal Server Error" } );
    }
};

module.exports = { signup, login };