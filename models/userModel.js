const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String, default: null },
  isVerified: { type: Boolean, default: false },
  isProfileCompleted: { type: Boolean, default: false },
  type: { type: String, required: true },
  data: { type: mongoose.Schema.Types.Mixed, required: false },
  profileImage: { type: String, required:false, unique: false},
  createdCouponsId:{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Coupon',
    default: []
  },
  availedCouponsId:{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Coupon',
    default: []
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
