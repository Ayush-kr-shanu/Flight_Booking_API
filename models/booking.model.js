const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema=mongoose.Schema({
    user : { type: Schema.Types.ObjectId, ref: 'user' },
	 flight : { type: Schema.Types.ObjectId, ref: 'flight' }
})

const BookingModel=mongoose.model("booking", bookingSchema)

module.exports={
    BookingModel
}