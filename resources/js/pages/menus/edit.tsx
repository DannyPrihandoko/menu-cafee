import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { FindMenuResponse } from '@/types/menu';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Buat Menu',
        href: '/menus/create',
    },
];

type MenuForm = {
    name: string;
    image: File | null;
    _method: string;
};

export default function Edit({ menu }: { menu: FindMenuResponse }) {
    const { data, setData, processing, errors, post } = useForm<Required<MenuForm>>({
        name: menu.data.name,
        image: null,
        _method: 'PATCH',
    });

    console.log('data', data);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('menus.update', [menu.data]));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Buat Menu" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Heading title="Buat Menu" />

                <form onSubmit={submit} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Judul</Label>
                        <Input
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Judul Menu"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="name">Gambar</Label>
                        <Input id="name" className="mt-1 block w-full" type="file" onChange={(e) => setData('image', e.target.files![0])} />

                        <InputError className="mt-2" message={errors.image} />
                    </div>
                    <img src={`/storage/${menu.data.imageUrl}`} alt="" className="max-h-56" />

                    <Button disabled={processing}>Simpan</Button>
                </form>
            </div>
        </AppLayout>
    );
}
