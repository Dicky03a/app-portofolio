import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Skils',
        href: '/skils',
    },
];

export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="skils" />
            <div className="m-4">
                <Link href="()">
                    <Button>Add Skils</Button>
                </Link>
            </div>
        </AppLayout>
    );
}
