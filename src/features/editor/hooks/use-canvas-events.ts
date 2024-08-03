import { fabric } from "fabric";
import { useEffect } from "react";

interface UseCanvasEventsProps {
  canvas: fabric.Canvas | null;
  setSelectedObjects: (objects: fabric.Object[]) => void;
}

export const useCanvasEvents = ({
  canvas,
  setSelectedObjects,
}: UseCanvasEventsProps) => {
  useEffect(() => {
    if (canvas) {
      canvas.on("selection:created", (e) => {
        console.log("selection:created", e);
        setSelectedObjects(e.selected || []);
      });
      canvas.on("selection:updated", (e) => {
        console.log("selection:updated", e);
        setSelectedObjects(e.selected || []);
      });
      canvas.on("selection:cleared", () => {
        console.log("selection:cleared");
        setSelectedObjects([]);
      });
    }

    return () => {
      if (canvas) {
        canvas.off("selection:created");
        canvas.off("selection:updated");
        canvas.off("selection:cleared");
      }
    };
  }, [
    canvas,
    setSelectedObjects, // No need for this, this is from setState
  ]);
};
