type Self = {
  readonly width: number;
  readonly height: number;
  readonly element: HTMLButtonElement;
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly colorPicker: HTMLInputElement;
  readonly scale: number;
};

export function create(
  element: HTMLButtonElement,
  width: number,
  height: number,
  scale: number = 1
): Self {
  element.innerHTML = `
    <canvas width=${width} height=${height}></canvas>
    <input type="color"></input>
  `;

  const canvas = element.querySelector<HTMLCanvasElement>("canvas")!;
  const colorPicker = element.querySelector<HTMLInputElement>(
    'input[type="color"]'
  )!;

  const ctx = canvas.getContext("2d")!;

  const self = {
    width,
    height,
    element,
    canvas,
    ctx,
    colorPicker,
    scale,
  };

  ctxInit(self);
  listenersInit(self);

  return self;
}

function setPixel(
  { canvas, ctx, colorPicker, scale }: Self,
  event: MouseEvent
) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.round((event.clientX - rect.left) / scale);
  const y = Math.round((event.clientY - rect.top) / scale);

  ctx.fillStyle = colorPicker.value;

  ctx.fillRect(x, y, 1, 1);
}

function ctxInit({ width, height, ctx, scale }: Self) {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, width, height);

  ctx.scale(scale, scale);
}

function listenersInit(self: Self) {
  self.canvas.addEventListener("click", (e) => setPixel(self, e));
}
