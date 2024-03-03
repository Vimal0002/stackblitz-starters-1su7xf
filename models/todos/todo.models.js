import mongoose from 'mongoose';

const todoschema = new mongoose.schema(
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
    subTodos: [
      {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoschema);
