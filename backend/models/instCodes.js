import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const InstSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true
    },
  },
);

const Inst = mongoose.model('Inst', InstSchema);

export default Inst;