import { useForm } from "react-hook-form";

export type TodoFormData = { text: string };
type TodoFormProps = { handleOnClickAdd: (data: TodoFormData) => void };

export function TodoForm({ handleOnClickAdd }: TodoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormData>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (Object.keys(errors).length > 0) return;
        handleOnClickAdd(data);
      })}
    >
      <p style={{ color: "red" }}>{errors.text && errors.text.message}</p>
      <input
        type="text"
        max={20}
        {...register("text", {
          required: "タスクを入力してください",
          maxLength: { value: 20, message: "20文字以内で入力してください" },
        })}
      />
      <button>Add</button>
    </form>
  );
}
