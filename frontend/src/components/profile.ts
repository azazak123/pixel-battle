import * as login from "./login";
import * as register from "./register";

type Self = {
  readonly element: HTMLElement;
  readonly form: HTMLFormElement;
  readonly btn: HTMLButtonElement;
  status: Status;
};

enum Status {
  Login,
  Registration,
  Profile,
}

export function create(element: HTMLButtonElement): Self {
  element.innerHTML = `
    <form></form>
    <button type="button"></button>
  `;

  const form = element.querySelector<HTMLFormElement>("form")!;
  const btn = element.querySelector<HTMLButtonElement>("button")!;

  const self = {
    status: Status.Login,
    form,
    element,
    btn,
  };

  listenersInit(self);
  changeStatus(self, Status.Login);

  return self;
}

function listenersInit(self: Self) {
  self.btn.addEventListener("click", () =>
    self.status == Status.Login
      ? changeStatus(self, Status.Registration)
      : changeStatus(self, Status.Profile)
  );
}

function changeStatus(self: Self, status: Status) {
  self.status = status;
  formInit(self);
  if (status == Status.Login) self.btn.innerText = "Registration";
  else if (status == Status.Registration) self.btn.innerText = "Login";
  else self.btn.hidden = true;
}

function formInit(self: Self) {
  if (self.status == Status.Profile)
    self.form.innerHTML = `<h2>Welcome to Pixel Battle!</h2>`;
  else if (self.status == Status.Login)
    login.create(self.form, (_loginData) => {
      changeStatus(self, Status.Profile);
    });
  else {
    register.create(self.form, (_registerData) => {
      changeStatus(self, Status.Login);
    });
  }
}
