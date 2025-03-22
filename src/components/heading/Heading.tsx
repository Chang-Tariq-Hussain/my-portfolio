

export default function Heading({text}: {text: string}) {
    return (
        <h2 className={'text-3xl py-4 mb-8 text-center border-b border-b-gray-300 relative'}>
            <span className={'absolute bottom-0 left-1/2 -translate-x-1/2 w-64 text-center mx-auto h-1 bg-gradient-to-r from-green-500 via-green-600 to-green-700'}></span>
            {text}
        </h2>
    )
}