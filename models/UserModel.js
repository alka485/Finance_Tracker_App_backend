const {Schema, model} = require('mongoose');

const userSchema = new Schema (
    {
        email: {
            type: String,
            reruired:true,
            unique: true,
        },
        password: {
            type: String,
            required: true,

        },
    },    
        {
            toJSON: {
                getters: true,
            },
            id: false,
        }    
);

const User = model('user', userSchema);