import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type QuilEditorState = {
  label: string;
  value: any;
  onChange: any;
  className?: any;
};

export default function QuilEditor({
  label,
  value,
  onChange,
  className = "sm:col-span-2",
}: QuilEditorState) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  return (
    <div className={className}>
      <label
        htmlFor="content"
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        // formats={formats}
      />
    </div>
  );
}