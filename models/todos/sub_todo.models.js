import mongoose from 'mongoose';

const subTodoschema = new mongoose.schema(
  {
    content: {
      type: string,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const subTodo = mongoose.model('SubTodo', subTodoschema);
