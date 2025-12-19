import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Image } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    slug: string;
    tech_stack: string;
    tech_stack_array: string[];
    thumbnail: string;
    thumbnail_url: string;
    short_description: string;
    github_url: string | null;
    demo_url: string | null;
}

interface PageProps {
    projects: Project[];
    flash?: {
        success?: string;
        error?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
];

export default function Index() {
    const { projects, flash } = usePage<PageProps>().props;
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        setDeletingId(id);

        router.delete(`/projects/${id}`, {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />

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
                <h1 className="text-xl font-semibold">Projects</h1>
                <Button asChild>
                    <Link href="/projects/create">Add Project</Link>
                </Button>
            </div>

            <div className="m-4 overflow-x-auto">
                <Table>
                    <TableCaption>A list of your project records.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Thumbnail</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Tech Stack</TableHead>
                            <TableHead>Short Description</TableHead>
                            <TableHead>Github URL</TableHead>
                            <TableHead>Demo URL</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects && projects.length > 0 ? (
                            projects.map((project) => (
                                <TableRow key={project.id}>
                                    <TableCell className="font-medium">{project.id}</TableCell>
                                    <TableCell>
                                        <div className="w-16 h-16">
                                            {project.thumbnail_url ? (
                                                <img
                                                    src={project.thumbnail_url}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover rounded"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.onerror = null; // avoids infinite loop if placeholder also fails
                                                        target.src = '/placeholder-image.jpg';
                                                    }}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded">
                                                    <Image className="w-6 h-6 text-gray-500" />
                                                </div>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>{project.title}</TableCell>
                                    <TableCell>
                                        {project.tech_stack_array && project.tech_stack_array.length > 0 ? (
                                            <div className="flex flex-wrap gap-1">
                                                {project.tech_stack_array.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 text-xs bg-gray-100 rounded"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            '-'
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {project.short_description?.substring(0, 50)}
                                        {project.short_description && project.short_description.length > 50 ? '...' : ''}
                                    </TableCell>
                                    <TableCell>
                                        {project.github_url ? (
                                            <a
                                                href={project.github_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                GitHub
                                            </a>
                                        ) : (
                                            '-'
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {project.demo_url ? (
                                            <a
                                                href={project.demo_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Live Demo
                                            </a>
                                        ) : (
                                            '-'
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={`/projects/${project.id}/edit`}>Edit</Link>
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(project.id)}
                                                disabled={deletingId === project.id}
                                            >
                                                {deletingId === project.id ? 'Deleting...' : 'Delete'}
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={8} className="text-center">
                                    No project records found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
