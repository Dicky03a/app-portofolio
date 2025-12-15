import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage, router } from '@inertiajs/react';
import { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface About {
    id: number;
    bio: string;
    projects_built: number;
    years_coding: number;
    learner_mindset: string;
    created_at: string;
    updated_at: string;
}

interface PageProps {
    abouts: About[];
    flash?: {
        success?: string;
        error?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: '/about',
    },
];

export default function Index() {
    const { abouts, flash } = usePage().props as PageProps;


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About" />

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

            <div className="m-4 overflow-x-auto">
                <Table>
                    <TableCaption>A list of your about records.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Bio</TableHead>
                            <TableHead>Projects Built</TableHead>
                            <TableHead>Years Coding</TableHead>
                            <TableHead>Learner Mindset</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {abouts && abouts.length > 0 ? (
                            abouts.map((about) => (
                                <TableRow key={about.id}>
                                    <TableCell className="font-medium">{about.id}</TableCell>
                                    <TableCell>{about.bio.substring(0, 50)}{about.bio.length > 50 ? '...' : ''}</TableCell>
                                    <TableCell>{about.projects_built}</TableCell>
                                    <TableCell>{about.years_coding}</TableCell>
                                    <TableCell>{about.learner_mindset}</TableCell>
                                    <TableCell>{new Date(about.created_at).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={`/about/${about.id}/edit`}>Edit</Link>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center">
                                    No about records found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
