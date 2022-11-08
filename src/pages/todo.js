import Head from 'next/head';
import { prisma } from '@/lib/prisma';

export const getServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=59');

  const todos = await prisma.todo.findMany({ take: 50 });
  return { props: { todos } };
};

const addItem = async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  const value = Object.fromEntries(data.entries());

  await fetch('/api/todos', { method: 'POST', body: JSON.stringify(value) });
};

const Todo = ({ todos }) => {
  return (
    <>
      <Head>
        <title>Dhemeira | Todo</title>
        <meta name="description" content="Todo list" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <div className="flex flex-col justify-center m-10">
        <h1 className="text-3xl font-bold">Todo</h1>

        <form className="flex items-end gap-4 flex-wrap" onSubmit={addItem}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Add new todo</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="name"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="temppass"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full max-w-xs">
            Add
          </button>
        </form>

        <div className="h-4"></div>

        <div className="flex flex-row flex-wrap gap-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center px-10 py-5 rounded-xl w-96 bg-neutral text-neutral-content shadow-xl">
              <h2 className="flex">{todo.name}</h2>
              <div className="badge badge-secondary badge-outline">{todo.id}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
