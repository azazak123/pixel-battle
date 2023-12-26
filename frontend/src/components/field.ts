import {
  ChangePixelColorDocument,
  CreatePixelDocument,
  GetPixelsDocument,
  Pixel_Battle_Pixel,
} from "../generated/graphql";
import { graphqlClient } from "../graphql/graphqlClient";

type Self = {
  readonly width: number;
  readonly height: number;
  readonly element: HTMLButtonElement;
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly colorPicker: HTMLInputElement;
  readonly scale: number;
  readonly pixels: Omit<Pixel_Battle_Pixel, "__typename">[];
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
    pixels: [],
  };

  await ctxInit(self);
  listenersInit(self);

  return self;
}

async function setPixel(
  { canvas, ctx, colorPicker, scale, pixels }: Self,
  event: MouseEvent
) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.round((event.clientX - rect.left) / scale);
  const y = Math.round((event.clientY - rect.top) / scale);

  const color = btoa(
    colorPicker.value
      .match(/\w{2}/g)!
      .map((a) => String.fromCharCode(parseInt(a, 16)))
      .join("")
  );

  const index = pixels.findIndex((pixel) => pixel.x == x && pixel.y == y);
  const isExist = index !== -1;

  if (isExist) {
    const data = (
      await graphqlClient
        .mutation(ChangePixelColorDocument, { x, y, color })
        .toPromise()
    ).data;

    if (data === undefined)
      throw new Error("Pixel color have not been changed");

    pixels[index] = data.change_pixel_color?.value!;
  } else {
    const data = (
      await graphqlClient
        .mutation(CreatePixelDocument, { x, y, color })
        .toPromise()
    ).data;

    if (data === undefined)
      throw new Error("Pixel color have not been created");

    pixels.push(data.create_pixel?.value!);
  }

  ctx.fillStyle = colorPicker.value;
  ctx.fillRect(x, y, 1, 1);
}

async function ctxInit({ width, height, ctx, scale, pixels }: Self) {
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

  pixels.concat(result.pixel_battle_pixel);
}

function listenersInit(self: Self) {
  self.canvas.addEventListener("click", async (e) => await setPixel(self, e));
}
