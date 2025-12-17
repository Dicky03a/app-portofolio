import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface Education {
    id: number;
    jurusan: string;
    institusi: string;
    deskripsi?: string | null;
    start_year: number;
    end_year?: number | null;
}

interface PageProps {
    educations: Education[];
    flash?: {
        success?: string;
        error?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Education',
        href: '/education',
    },
];

export default function Index() {
    const { educations, flash } = usePage().props as PageProps;
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        if (!confirm('Are you sure you want to delete this education record?')) return;

        setDeletingId(id);

        router.delete(`/education/${id}`, {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Education" />

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
                <h1 className="text-xl font-semibold">Education</h1>
                <Button asChild>
                    <Link href="/education/create">Add Education</Link>
                </Button>
            </div>

            <div className="m-4 overflow-x-auto">
                <Table>
                    <TableCaption>A list of your education records.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Jurusan</TableHead>
                            <TableHead>Institusi</TableHead>
                            <TableHead>Deskripsi</TableHead>
                            <TableHead>Tahun</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {educations && educations.length > 0 ? (
                            educations.map((edu) => (
                                <TableRow key={edu.id}>
                                    <TableCell className="font-medium">{edu.id}</TableCell>
                                    <TableCell>{edu.jurusan}</TableCell>
                                    <TableCell>{edu.institusi}</TableCell>
                                    <TableCell>
                                        {edu.deskripsi?.substring(0, 50)}
                                        {edu.deskripsi && edu.deskripsi.length > 50 ? '...' : ''}
                                    </TableCell>
                                    <TableCell>
                                        {edu.start_year} – {edu.end_year ?? 'Present'}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={`/education/${edu.id}/edit`}>Edit</Link>
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(edu.id)}
                                                disabled={deletingId === edu.id}
                                            >
                                                {deletingId === edu.id ? 'Deleting...' : 'Delete'}
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center">
                                    No education records found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
