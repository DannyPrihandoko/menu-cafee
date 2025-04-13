import { FindAllMenuResponse } from '@/types/menu';
import { Head } from '@inertiajs/react';

export default function Welcome({ menus }: { menus: FindAllMenuResponse }) {
    return (
        <main className="mx-auto max-w-4xl overflow-hidden sm:my-5 sm:rounded-xl">
            <Head title="Daftar Menu" />

            {menus.data.map((menu) => (
                <img key={menu.id} src={`/storage/${menu.imageUrl}`} alt={menu.name} className="w-full" />
            ))}
            {/* <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head> */}
        </main>
    );
}
