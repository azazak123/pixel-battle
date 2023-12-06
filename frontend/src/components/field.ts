import { GetPixelsDocument } from "../generated/graphql";
import { graphqlClient } from "../graphql/graphqlClient";

type Self = {
  readonly width: number;
  readonly height: number;
  readonly element: HTMLButtonElement;
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly colorPicker: HTMLInputElement;
  readonly scale: number;
};

export async function create(
  element: HTMLButtonElement,
  width: number,
  height: number,
  scale: number = 1
): Promise<Self> {
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

  await ctxInit(self);
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

async function ctxInit({ width, height, ctx, scale }: Self) {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, width, height);

  ctx.scale(scale, scale);

  const result = (await graphqlClient.query(GetPixelsDocument, {}).toPromise())
    .data;

  if (result == undefined) throw new Error("Pixels have not been loaded");

  for (const pixel of result.pixel_battle_pixel) {
    const color = "#" + pixel.color.slice(2);

    ctx.fillStyle = color;
    ctx.fillRect(pixel.x, pixel.y, 1, 1);
  }
}

function listenersInit(self: Self) {
  self.canvas.addEventListener("click", (e) => setPixel(self, e));
}
