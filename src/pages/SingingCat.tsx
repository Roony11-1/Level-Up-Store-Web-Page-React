import videoGato from "../assets/vid/snail car daily.mp4"

export function SingingCat() 
{
    return (
        <video 
            src={videoGato} 
            autoPlay={true} 
            loop={true} 
            muted={false} 
        />
    );
}