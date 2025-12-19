import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Image } from 'lucide-react';

interface Testimonial {
    id: number;
    message: string;
    name: string;
    position: string | null;
    avatar: string;
    avatar_url: string;
}

interface PageProps {
    testimonials: Testimonial[];
    flash?: {
        success?: string;
        error?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Testimonials',
        href: '/testimonials',
    },
];

export default function Index() {
    const { testimonials, flash } = usePage<PageProps>().props;
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        if (!confirm('Are you sure you want to delete this testimonial?')) return;

        setDeletingId(id);

        router.delete(`/testimonials/${id}`, {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Testimonials" />

            {/* Flash Messages */}
            {flash?.success && (
                <div className="m-4">
                    <Alert>
                        <AlertDescription>{flash.success}</AlertDescription>
                    </Alert>
                </div>
            )}

            {flash?.error && (
                <div className="m-4">
                    <Alert variant="destructive">
                        <AlertDescription>{flash.error}</AlertDescription>
                    </Alert>
                </div>
            )}

            <div className="m-4 flex items-center justify-between">
                <h1 className="text-xl font-semibold">Testimonials</h1>
                <Button asChild>
                    <Link href="/testimonials/create">Add Testimonial</Link>
                </Button>
            </div>

            <div className="m-4 overflow-x-auto">
                <Table>
                    <TableCaption>A list of your testimonial records.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Avatar</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {testimonials && testimonials.length > 0 ? (
                            testimonials.map((testimonial) => (
                                <TableRow key={testimonial.id}>
                                    <TableCell className="font-medium">{testimonial.id}</TableCell>
                                    <TableCell>
                                        <div className="w-12 h-12">
                                            {testimonial.avatar_url ? (
                                                <img
                                                    src={testimonial.avatar_url}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover rounded-full"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.onerror = null; // avoids infinite loop if placeholder also fails
                                                        target.src = '/default-avatar.png';
                                                    }}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
                                                    <Image className="w-6 h-6 text-gray-500" />
                                                </div>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>{testimonial.name}</TableCell>
                                    <TableCell>{testimonial.position || '-'}</TableCell>
                                    <TableCell>
                                        {testimonial.message?.substring(0, 50)}
                                        {testimonial.message && testimonial.message.length > 50 ? '...' : ''}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={`/testimonials/${testimonial.id}/edit`}>Edit</Link>
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(testimonial.id)}
                                                disabled={deletingId === testimonial.id}
                                            >
                                                {deletingId === testimonial.id ? 'Deleting...' : 'Delete'}
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center">
                                    No testimonial records found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
