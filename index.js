let width = 0;
let height = 0;

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;

  console.log({ width, height });

  const x = Math.floor(width / 40);
  console.log(x);
  const y = Math.floor(height / 40);

  let tiles = Array.from({ length: y }, (_, i) => i);

  tiles.forEach((tile) => {
    Array.from({ length: x }, (_, i) => i);
  });
});
