import videoGato from "../assets/vid/snail car daily.mp4"

export function SingingCat() 
{
    return (
        <video 
            src={videoGato} 
            controls 
            autoPlay={false} 
            loop={false} 
            muted={false} 
        />
    );
}