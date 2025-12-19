import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface Skill {
    id: number;
    name: string;
    percentage: number;
    icon: string | null;
    icon_url: string | null;
}

interface PageProps {
    skills: Skill[];
    flash?: {
        success?: string;
        error?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Skills',
        href: '/skills',
    },
];

export default function Index() {
    const { skills, flash } = usePage<PageProps>().props;
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        if (!confirm('Are you sure you want to delete this skill record?')) return;

        setDeletingId(id);

        router.delete(`/skills/${id}`, {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Skills" />

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
                <h1 className="text-xl font-semibold">Skills</h1>
                <Button asChild>
                    <Link href="/skills/create">Add Skill</Link>
                </Button>
            </div>

            <div className="m-4 overflow-x-auto">
                <Table>
                    <TableCaption>A list of your skills.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Percentage</TableHead>
                            <TableHead>Icon</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {skills && skills.length > 0 ? (
                            skills.map((skill) => (
                                <TableRow key={skill.id}>
                                    <TableCell className="font-medium">{skill.id}</TableCell>
                                    <TableCell>{skill.name}</TableCell>
                                    <TableCell>{skill.percentage}%</TableCell>
                                    <TableCell>
                                        {skill.icon_url ? (
                                            <img
                                                src={skill.icon_url}
                                                alt={skill.name}
                                                className="w-6 h-6"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.onerror = null; // avoids infinite loop if placeholder also fails
                                                    target.src = '/default-icon.png'; // fallback
                                                }}
                                            />
                                        ) : (
                                            <span className="text-gray-400">No icon</span>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={`/skills/${skill.id}/edit`}>Edit</Link>
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(skill.id)}
                                                disabled={deletingId === skill.id}
                                            >
                                                {deletingId === skill.id ? 'Deleting...' : 'Delete'}
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center">
                                    No skill records found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}