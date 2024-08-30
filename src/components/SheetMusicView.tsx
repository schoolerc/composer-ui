import {useEffect, useRef} from "react";

export default function SheetMusicView() {
    // @ts-ignore
    const song = {
        name: "Test UI Song",
        time_signature: {
            lower: 4,
            upper: 4,
        },
        tracks: [
            {
                segments: [
                    {
                        measures: [[
                            {}
                        ]]
                    }
                ]
            }
        ]
    }

    const canvas_ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        console.trace("Drawing to canvas");
        const context = canvas_ref.current?.getContext("2d");
        if (context) {
            context.font = '50px noto'
            context.fillStyle = '#000000';
            // TODO: Figure out how to get staffs to flow smoothly
            const text = '\u{1d11b}';
            const staffSize = context.measureText(text);
            console.log(JSON.stringify(staffSize));
            const fraction = 0; // TODO: write math to get fractional component of width for smushing staffs together.
            for (let i = 0; i < 5; i++) {
                context.fillText(text, i * (staffSize.actualBoundingBoxRight - Math.abs(staffSize.actualBoundingBoxLeft)), 100);
            }
            // Filling literal text works. Why won't iterating? - y position is baseline not top edge
            // context.fillText('\u{1d120}\u{1d11b}\u{1d160}\u{1d160}', 0, 100);
            // context.fillText('\u{1d11b}', 0, 100);
        }
    })


    return (<div className="bg-gray-200 xs:w-full xs:h-full md:max-w-screen-md ">
        <canvas ref={canvas_ref} id="sheet_music_canvas" className="w-fill h-fill"/>
    </div>);
}