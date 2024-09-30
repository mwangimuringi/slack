import Quill from "quill";

import "quill/dist/quill.snow.css";
import { useRef } from "react";

const Editor = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const quill = new Quill(containerRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "video"],
          ["clean"],
        ],
      },
    });

    return () => {
      quill.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col border border-slate-200  rounded-md overflow-hidden focus-within:border-slate-300 focus-within:shadow-sm transition bg-white">
        <div
          ref={containerRef}
          className="flex flex-col flex-1 overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Editor;
