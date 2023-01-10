

type Props = {
    image: string,
    title:string
}
export function Item({ image, title }: Props) {
    
    return (
        <div className="flex flex-col w-full h-[260px] items-center">
            <img
                className="h-[calc(100%-20px)] w-[250px] md:w-[auto]"
                src={image}
                alt={title} />
            <span
                className="text-[18px]"
            >{title}</span>
        </div>
    )
}