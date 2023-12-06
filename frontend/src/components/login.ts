import { LoginDocument, LoginMutation } from "../generated/graphql";
import { graphqlClient } from "../graphql/graphqlClient";

type Self<T> = {
  readonly email: HTMLInputElement;
  readonly password: HTMLInputElement;
  readonly btn: HTMLButtonElement;
  readonly element: HTMLElement;
  readonly onLogin: (arg: LoginMutation) => T;
};

export function create<T>(
  element: HTMLElement,
  onLogin: (arg: LoginMutation) => T
): Self<T> {
  element.innerHTML = `
    <label>Email:</label>
    <input type="email"></input>
    <label>Password:</label>
    <input type="password"></input>
    <button type="button">Login</button>
  `;

  const email = element.querySelector<HTMLInputElement>('input[type="email"]')!;
  const password = element.querySelector<HTMLInputElement>(
    'input[type="password"]'
  )!;
  const btn = element.querySelector<HTMLButtonElement>("button")!;

  const self = {
    email,
    password,
    btn,
    element,
    onLogin,
  };

  listenersInit(self);

  return self;
}

async function login<T>({ email, password, onLogin }: Self<T>) {
  const data = (
    await graphqlClient
      .mutation(LoginDocument, {
        email: email.value,
        password: password.value,
      })
      .toPromise()
  ).data;

  if (data == undefined) throw new Error("Login has not succeeded");

  onLogin(data);
}

function listenersInit<T>(self: Self<T>) {
  self.btn.addEventListener("click", async () => await login(self));
}
