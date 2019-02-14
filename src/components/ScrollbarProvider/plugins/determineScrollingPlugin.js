import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

class DetermineScrollingEvent extends ScrollbarPlugin {
  static pluginName = "determineScrollingEvent";

  static defaultOptions = {
    callback: null,
  };

  onRender(remainMomentum) {
    if (remainMomentum.x === 0 && remainMomentum.y === 0) {
      if (this.options.callback) {
        this.options.callback(false);
      }
    } else {
      if (this.options.callback) {
        this.options.callback(true);
      }
    }
  }
}

Scrollbar.use(DetermineScrollingEvent);
