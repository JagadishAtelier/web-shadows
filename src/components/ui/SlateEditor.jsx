"use client";
import React, { useMemo, useState, useEffect } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

export default function SlateEditor({ value, onChange }) {
  const editor = useMemo(() => withReact(createEditor()), []);

  // Always ensure initialValue is a valid Slate structure
  const initialValue = useMemo(() => {
    if (!value) return [{ type: "paragraph", children: [{ text: "" }] }];
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
      return [{ type: "paragraph", children: [{ text: parsed || "" }] }];
    } catch {
      return [{ type: "paragraph", children: [{ text: value || "" }] }];
    }
  }, [value]);

  const [currentValue, setCurrentValue] = useState(initialValue);

  // Keep state in sync if parent value changes
  useEffect(() => {
    setCurrentValue(initialValue);
  }, [initialValue]);

  const handleChange = (newValue) => {
    setCurrentValue(newValue);
    if (onChange) {
      try {
        onChange(JSON.stringify(newValue));
      } catch {
        onChange(newValue);
      }
    }
  };

  return (
    <Slate editor={editor} value={currentValue} onChange={handleChange}>
      <Editable
        placeholder="Enter text..."
        style={{
          minHeight: "40px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
    </Slate>
  );
}
