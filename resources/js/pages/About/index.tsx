import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: '/about',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About" />
            <div className="m-4">
                <Button asChild>
                    <Link href="/about/create">Add About</Link>
                </Button>
            </div>
        </AppLayout>
    );
}
