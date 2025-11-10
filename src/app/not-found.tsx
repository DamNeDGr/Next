import Image from "next/image";

function NotFound() {
    return (
        <div
            className="h-[100dvh] flex items-center justify-center w-full"
        >
            <div
                className="m-auto flex flex-col items-center justify-center gap-10"
            >
                <Image
                    src="/image/notfound.png" alt={'Not found'} width={200} height={200} />
                <h1
                    className="font-bold text-xl text-center"
                >Тут нету ниче!<br/> иди отсюда собака</h1>
            </div>
        </div>
    );
}

export default NotFound;