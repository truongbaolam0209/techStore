const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require('moment');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minglength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: []
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')) {
        console.log('password changed')
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function (cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secret')
    var oneHour = moment().add(1, 'hour').valueOf();

    user.tokenExp = oneHour;
    user.token = token;
    user.save(function (err, user) {
        if (err) return cb(err)
        cb(null, user);
    })
}

userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    jwt.verify(token, 'secret', function (err, decode) {
        user.findOne({ "_id": decode, "token": token }, function (err, user) {
            if (err) return cb(err);
            cb(null, user);
        })
    })
}

const User = mongoose.model('User', userSchema);

module.exports = { User }






// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     email: { type: String, required: true, unique: true, trim: true, minlength: 3 },
//     password: { type: String, required: true, trim: true, minlength: 6 },
//     role: { type: String, enum: ['user', 'admin'], required: true }
    // todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }]
// }, { timestamps: true });

// userSchema.pre('save', function (next) {
//     if (!this.isModified('password')) return next();
//     bcrypt.hash(this.password, 10, (err, passwordHash) => {
//         if (err) return next(err);
//         this.password = passwordHash;
//         next();
//     });
// });

// UserSchema.methods.comparePassword = function (password, cb) {
//     bcrypt.compare(password, this.password, (err, isMatch) => {
//         if (err) return cb(err);
//         else {
//             if (!isMatch) return cb(null, isMatch);
//             return cb(null, this);
//         }
//     });
// };

// const User = mongoose.model('User', userSchema);

// module.exports = User;