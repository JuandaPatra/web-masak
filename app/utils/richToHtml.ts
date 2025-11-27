// ---------------- Lexical Types ---------------- //
export interface LexicalTextNode {
  type: "text";
  text: string;
  format?: number; // 1 = Bold
  style?: string;
  textStyle?: string;
}

export interface LexicalElementNode {
  type: "paragraph" | "heading" | "root";
  tag?: string; // for heading
  children?: LexicalNode[];
  style?: string;
  textStyle?: string;
}

export type LexicalNode = LexicalTextNode | LexicalElementNode;

// ---------------- Helper Functions --------------- //
export function escapeHtml(str: string = ""): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderTextNode(node: LexicalTextNode): string {
  let text = escapeHtml(node.text);

  const format = node.format ?? 0;

  // Bold
  if (format & 1) {
    text = `<strong>${text}</strong>`;
  }

  // Italic
  if (format & 2) {
    text = `<em>${text}</em>`;
  }

  // Underline
  if (format & 4) {
    text = `<u>${text}</u>`;
  }

  return text;
}


function nodeToHtml(node: LexicalNode | undefined): string {
  if (!node) return "";

  // TEXT NODE
  if (node.type === "text") {
    return renderTextNode(node);
  }

  // ELEMENT NODE
  const childrenHtml = (node.children || [])
    .map((child) => nodeToHtml(child))
    .join("");

  const style = node.textStyle || node.style
    ? ` style="${node.textStyle || node.style}"`
    : "";

  switch (node.type) {
    case "paragraph":
      return `<p${style}>${childrenHtml}</p>`;

    case "heading": {
      const Tag = node.tag || "h2";
      return `<${Tag}${style}>${childrenHtml}</${Tag}>`;
    }

    case "root":
      return childrenHtml;

    default:
      return childrenHtml;
  }
}

// ---------------- Main Export ---------------- //
export function lexicalToHtml(doc: LexicalNode): string {
  return nodeToHtml(doc);
}
