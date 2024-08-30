import React, {Ref, useMemo, useRef} from "react";

export default function SheetMusicPage({}) {
    const canvas_ref: Ref<HTMLCanvasElement> = useRef(null);




    return (<canvas ref={canvas_ref}/>)
}