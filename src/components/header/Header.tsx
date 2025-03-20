import ToggleThemeMode from "@/components/ToggleThemeMode";

export default function Header() {
    return (
        <div className={'fixed top-0 z-20 w-full flex items-center h-16  shadow-sm bg-white dark:bg-gray-950 inset-shadow-gray-950 transition-colors duration-300'}>
            <div className={'flex items-center justify-between w-[98%] mx-auto md:w-[93%] lg:[w-90%] xl:w-[85%]'}>
                <div className={'px-4 py-2 border-b-4 border-r-4 border-b-green-800 border-r-green-500'}>
                    <strong>Dev.Tariq</strong>
                </div>
                <ToggleThemeMode/>
            </div>
        </div>
    )
}