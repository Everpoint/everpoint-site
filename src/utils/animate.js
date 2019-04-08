export function animate({ duration = 144, timing, draw }) {
  const self = this;
  const start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timing(timeFraction);
    draw(progress, self);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

export function ease(t) {
  return t * t;
}