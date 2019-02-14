import SmoothScrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

class DisableScrollPlugin extends ScrollbarPlugin {
  static pluginName = "disableScrollByDirection";

  static defaultOptions = {
    direction: {
      x: false,
      y: false,
    },
  };

  transformDelta(delta) {
    if (this.options.direction.y) {
      delta["y"] = 0;
    }

    if (this.options.direction.x) {
      delta["x"] = 0;
    }

    return { ...delta };
  }
}

SmoothScrollbar.use(DisableScrollPlugin);
