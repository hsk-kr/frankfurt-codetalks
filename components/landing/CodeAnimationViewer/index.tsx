import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

export type Language = "python" | "javascript" | "c" | "go" | "java";

interface CodeAnimationViewerProps {
  code: string;
  language: Language;
  onFinish?: VoidFunction;
}

const CodeAnimationViewer = ({
  code,
  language,
  onFinish,
}: CodeAnimationViewerProps) => {
  const [cursor, setCursor] = useState(-1);

  useLayoutEffect(() => {
    let tmId: NodeJS.Timeout | undefined = undefined;
    let _cursor = 0;
    setCursor(-1);

    const type = () => {
      tmId = setTimeout(() => {
        while (_cursor < code.length) {
          _cursor++;

          // when it's done
          if (code.length === _cursor) {
            tmId = undefined;
            onFinish?.();
            return;
          }

          // skip space and enter
          if (code[_cursor] === " " || code[_cursor] === " \n") continue;

          setCursor(_cursor);
          break;
        }

        // repeat
        type();
      }, Math.floor(Math.random() * 200));
    };

    type();

    return () => tmId && clearTimeout(tmId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, language, onFinish]);

  return (
    <SyntaxHighlighter
      customStyle={{ height: "100%", borderRadius: 8 }}
      language={language}
      style={vs2015}
    >
      {code.substring(0, cursor + 1)}
    </SyntaxHighlighter>
  );
};

export default CodeAnimationViewer;
