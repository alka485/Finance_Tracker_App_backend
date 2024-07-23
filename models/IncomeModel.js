const {Schema, model} = require ('mongoose');

const incomeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim:true,
            maxlength: 50,
        },
        amount: {
            type: Number,
            required: true,
            maxlength: 20,
            trim: true,
        },
        type: {
            type: String,
            default:"expense",
        },
        date: {
            type: Date,
            required: true,
            trim:true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required:true,
            maxlength:100,
            trim:true
        },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
        //timestamps:true
      }
);

const Income = model ('income', incomeSchema)

module.exports = Income;