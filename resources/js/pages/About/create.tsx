import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create About',
        href: '/about/create',
    },
];

export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create About" />
            <div className='w-8/12 p-4'>
                <form>
                    <div>
                        <label htmlFor="About name">Name</label>
                        <input type="text" placeholder='Bio' />
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
