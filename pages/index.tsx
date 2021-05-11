import Head from "next/head";
import React, { useState } from "react";
import { sdk } from "../lib/graphql-client";
import { ClientError } from "graphql-request";
import useSWR, { mutate } from "swr";
import { GetTodoQuery, Todo } from "type/generated/graphql";
import dayjs from "dayjs";
import { TodoForm, TodoFormData } from "components/Navi/TodoForm/TodoForm";

type TodoAppProps = { todos: GetTodoQuery };

export default function TodoApp(props: TodoAppProps) {
  const { data, error: swrError } = useSWR("todo", () => sdk.getTodo(), {
    initialData: props.todos,
    revalidateOnFocus: false,
  });

  if (!data) return <p>not found</p>;

  const [error, setError] = useState("")

  const { todo: todos } = data;

  const handleOnClickAdd = async (data: TodoFormData) => {
    await sdk
      .addTodo({
        object: {
          text: data.text,
          status: "TODO",
        },
      })
      .then(() => {
        mutate("todo");
      })
      .catch((error: ClientError) => console.error(error));
  };

  const handleOnClickDone = async (id: Todo["id"]) => {
    await sdk
      .updateTodo({
        id: id,
        _set: { status: "DONE" },
      })
      .then(() => {
        mutate("todo");
      })
      .catch((error: ClientError) => console.error(error));
  };

  const handleOnClickDelete = async (id: Todo["id"]) => {
    await sdk
      .deleteTodo({
        id: id,
      })
      .then(() => {
        mutate("todo");
      })
      .catch((error: ClientError) => console.error(error));
  };

  return (
    <div>
      <Head>
        <title>TODO App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: "50%", margin: "10px auto" }}>
        <h1>TODO List</h1>
        {swrError ? (
          <p>{swrError}</p>
        ) : (
          <>
            <TodoForm {...{ handleOnClickAdd }} />
            <h2>TODO</h2>
            <ul>
              {todos
                .filter((todo) => todo.status !== "DONE")
                .map((todo) => (
                  <li key={todo.id}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ flex: "1 0 auto" }}>{todo.text}</p>
                      <time style={{ marginRight: "1rem" }}>
                        {dayjs(todo.updatedAt).format("YYYY-MM-DD HH:mm")}
                      </time>
                      <button onClick={() => handleOnClickDone(todo.id)}>
                        完了
                      </button>
                      <button onClick={() => handleOnClickDelete(todo.id)}>
                        削除
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
            <h2>DONE</h2>
            <ul>
              {todos
                .filter((todo) => todo.status === "DONE")
                .map((todo) => (
                  <li key={todo.id}>
                    <div>
                      {todo.text}
                      <button onClick={() => handleOnClickDelete(todo.id)}>
                        削除
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return await sdk
    .getTodo()
    .then((data) => {
      return {
        props: {
          todos: JSON.parse(JSON.stringify(data)),
        },
      };
    })
    .catch((error: ClientError) => {
      return {
        props: {
          error: error.response,
        },
      };
    });
}
