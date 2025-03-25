import { RefObject, useEffect } from "react";
import { useRafState } from "react-use";

export interface State {
  docX: number;
  docY: number;
  posX: number;
  posY: number;
  elX: number;
  elY: number;
  elH: number;
  elW: number;
}

const useMouse = (ref: RefObject<Element | null>): State => {
  if (process.env.NODE_ENV === "development") {
    if (typeof ref !== "object" || typeof ref.current === "undefined") {
      console.error("useMouse expects a single ref argument.");
    }
  }

  const [state, setState] = useRafState<State>({
    docX: 0,
    docY: 0,
    posX: 0,
    posY: 0,
    elX: 0,
    elY: 0,
    elH: 0,
    elW: 0,
  });

  useEffect(() => {
    const moveHandler = (event: MouseEvent) => {
      if (ref && ref.current) {
        const {
          left,
          top,
          width: elW,
          height: elH,
        } = ref.current.getBoundingClientRect();
        const posX = left + window.scrollX;
        const posY = top + window.scrollY;
        const elX = event.pageX - posX;
        const elY = event.pageY - posY;

        setState({
          docX: event.pageX,
          docY: event.pageY,
          posX,
          posY,
          elX,
          elY,
          elH,
          elW,
        });
      }
    };

    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("touchmove", moveHandler as any);

    return () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("touchmove", moveHandler as any);
    };
  }, [ref]);

  return state;
};

export default useMouse;
