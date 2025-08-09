import React, { useEffect, useRef } from "react";

const Modal = ({ title = "Terms & Conditions", onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const prevFocus = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // focus the modal for screen readers
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      // restore focus
      prevFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      role="presentation"
      onMouseDown={onClose} // click outside closes
    >
      <div
        className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg max-w-3xl w-full mx-4 p-6 shadow-lg overflow-auto max-h-[85vh]"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(e) => e.stopPropagation()} // prevent outer click
        ref={dialogRef}
        tabIndex={-1}
      >
        <div className="flex justify-between items-start gap-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            aria-label="Close Terms"
            className="text-lg font-bold text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="mt-4 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
