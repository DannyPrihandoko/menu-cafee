import Heading from '@/components/heading';
import When from '@/components/shared/when';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { useWatch } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { FindAllMenuResponse, Menu } from '@/types/menu';
import { animations } from '@formkit/drag-and-drop';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, GripVertical, Trash } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Menus',
        href: '/dashboard/menus',
    },
];

export default function Index({ menus }: { menus: FindAllMenuResponse }) {
    const [isReordering, setIsReordering] = useState(false);
    const [reorderedMenus, setReorderedMenus] = useState<Menu[]>(menus.data);

    const [parent, menuList, setValues] = useDragAndDrop<HTMLUListElement, Menu>(menus.data, {
        dragHandle: '.drag-handle',
        plugins: [animations()],
        onSort: (data) => {
            setReorderedMenus(data.values as Menu[]);
        },
    });

    useWatch([menus.data], () => {
        setValues(menus.data);
    });

    const reorderingMenus = () => {
        router.put(route('menus.reorder', { menus: reorderedMenus.map((menu) => menu.id) }));
        setIsReordering(false);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Daftar Menu" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex justify-between">
                    <Heading title="Daftar Menu" />

                    <div className="flex gap-2">
                        <When
                            condition={isReordering}
                            fallback={
                                <Button variant="outline" onClick={() => setIsReordering(true)} disabled={menus.data.length < 2}>
                                    Edit Posisi
                                </Button>
                            }
                        >
                            <Button onClick={reorderingMenus}>Simpan Perubahan</Button>
                        </When>

                        <When condition={!isReordering}>
                            <Link className={buttonVariants({ variant: 'default' })} href="/dashboard/menus/create">
                                Buat Baru
                            </Link>
                        </When>
                    </div>
                </div>

                <ul ref={parent} className="grid gap-3">
                    {menuList.map((menu) => (
                        <MenuItem key={menu.id} isReordering={isReordering} menu={menu} />
                    ))}
                </ul>
            </div>
        </AppLayout>
    );
}

function MenuItem({ menu, isReordering }: { menu: Menu; isReordering: boolean }) {
    const deleteMenu = () => {
        router.delete(route('menus.destroy', [menu.id]));
    };

    return (
        <Card>
            <CardContent className="flex items-center gap-2.5">
                {isReordering && (
                    <span className={cn('drag-handle', 'cursor-grab', buttonVariants({ variant: 'secondary' }))}>
                        <GripVertical />
                    </span>
                )}

                <When condition={!isReordering}>
                    <div className="flex size-8 items-center justify-center rounded-full border p-3">{menu.position}</div>
                </When>

                <h3 className="text-xl font-bold">{menu.name}</h3>

                <div className="ml-auto flex gap-1">
                    <Link href={`/dashboard/menus/${menu.id}/edit`} className={buttonVariants({ variant: 'ghost', size: 'icon' })}>
                        <Edit />
                    </Link>

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                                <Trash />
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="max-w-md rounded-xl">
                            <AlertDialogHeader>
                                <AlertDialogTitle>Hapus Menu</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Tindakan ini tidak dapat dibatalkan. Ini akan menghapus data secara permanen.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Batal</AlertDialogCancel>
                                <AlertDialogAction onClick={deleteMenu}>Ya, Hapus</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </CardContent>
        </Card>
    );
}
