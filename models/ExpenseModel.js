const {Schema, model} = require ('mongoose');

const expenseSchema = new Schema(
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
            default: Date.now,
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
const Expense = model('expense', expenseSchema);

module.exports = Expense;