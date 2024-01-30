import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
    return json({
        artists: ["Pink Floyd", "David Gilmour"],
        albums: [
            {
                title: "Animals",
                artist: "Pink Floyd",
                art: "animals.jpg"
            },
            {
                title: "Wish You Were Here",
                artist: "Pink Floyd",
                art: "wywh.jpg"
            },
            {
                title: "The Final Cut",
                artist: "Pink Floyd",
                art: "tfc.jpg"
            },
            {
                title: "Rattle That Lock",
                artist: "David Gilmour",
                art: "rtl.jpg"
            },
            {
                title: "On An Island",
                artist: "David Gilmour",
                art: "oai.jpg"
            }
        ]
    });
}