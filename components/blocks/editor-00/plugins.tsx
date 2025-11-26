import { useState } from "react"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"

import { ContentEditable } from "@/components/editor/editor-ui/content-editable"
import { FontSizeToolbarPlugin } from "@/registry/new-york-v4/editor/plugins/toolbar/font-size-toolbar-plugin"
import { ToolbarPlugin } from "@/registry/new-york-v4/editor/plugins/toolbar/toolbar-plugin"
import { editorTheme } from "@/registry/new-york-v4/editor/themes/editor-theme"
import { TooltipProvider } from "@/components/ui/tooltip"

export function Plugins() {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <div className="relative">
      {/* toolbar plugins */}
      <ToolbarPlugin>
        {({ blockType }) => (
          <div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
            <FontSizeToolbarPlugin />
          </div>
        )}
      </ToolbarPlugin>
      <div className="relative">
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable placeholder={"Start typing ..."}
                className="ContentEditable__root relative block h-72 min-h-72 min-h-full overflow-auto px-8 py-4 focus:outline-none w-[700px]"
                />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        {/* editor plugins */}
      </div>
      {/* actions plugins */}
    </div>
  )
}
