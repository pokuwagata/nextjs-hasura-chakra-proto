import { modelSchema, GetResponseSchema } from "type";
import z from "zod";
import { Todo } from ".prisma/client";
import { number } from "zod";

const schemaForType = <T>() => <S extends z.ZodType<T, any, any>>(arg: S) => {
  return arg;
};

const TodoSchema = schemaForType<Todo>()(
  z.object({
    id: z.number(),
    content: z.string(),
    status: z.enum(["TODO", "PROGRESS", "DONE"]),
    createdAt: z.date(),
  })
);

const TodoSchemaParser = TodoSchema.transform((model) => {
  return { ...model, createdAt: new Date(model.createdAt) };
});

const GetTodoResponseSchema = TodoSchema.extend({
  createdAt: z.string(),
});
