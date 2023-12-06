import { CreateUserDocument, CreateUserMutation } from "../generated/graphql";
import { graphqlClient } from "../graphql/graphqlClient";

type Self<T> = {
  readonly email: HTMLInputElement;
  readonly password: HTMLInputElement;
  readonly username: HTMLInputElement;
  readonly btn: HTMLButtonElement;
  readonly element: HTMLElement;
  readonly onRegister: (arg: CreateUserMutation) => T;
};

export function create<T>(
  element: HTMLElement,
  onRegister: (arg: CreateUserMutation) => T
): Self<T> {
  element.innerHTML = `
    <label>Username:</label>
    <input type="text"></input>
    <label>Email:</label>
    <input type="email"></input>
    <label>Password:</label>
    <input type="password"></input>
    <button type="button">Register</button>
  `;

  const email = element.querySelector<HTMLInputElement>('input[type="email"]')!;
  const password = element.querySelector<HTMLInputElement>(
    'input[type="password"]'
  )!;
  const username =
    element.querySelector<HTMLInputElement>('input[type="text"]')!;
  const btn = element.querySelector<HTMLButtonElement>("button")!;

  const self = {
    email,
    password,
    btn,
    element,
    onRegister,
    username,
  };

  listenersInit(self);

  return self;
}

async function register<T>({ email, password, onRegister, username }: Self<T>) {
  const data = (
    await graphqlClient
      .mutation(CreateUserDocument, {
        email: email.value,
        password: password.value,
        username: username.value,
      })
      .toPromise()
  ).data;

  if (data == undefined) throw new Error("Registration has not succeeded");

  onRegister(data);
}

function listenersInit<T>(self: Self<T>) {
  self.btn.addEventListener("click", async () => await register(self));
}
