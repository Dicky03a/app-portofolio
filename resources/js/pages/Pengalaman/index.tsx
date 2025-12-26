import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

interface Pengalaman {
    id: number;
    name: string;
    role: string;
    photo: string;
}

interface PageProps {
    pengalamen: Pengalaman[];
    flash?: {
        success?: string;
        error?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Pengalaman",
        href: "/pengalamen",
    },
];

export default function Index() {
    const { pengalamen, flash } = usePage<PageProps>().props;
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        if (!confirm("Are you sure you want to delete this pengalaman record?")) return;

        setDeletingId(id);

        router.delete(`/pengalamen/${id}`, {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pengalaman" />

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
                <h1 className="text-xl font-semibold">Pengalaman</h1>
                <Button asChild>
                    <Link href="/pengalamen/create">Add Pengalaman</Link>
                </Button>
            </div>

            <div className="m-4 overflow-x-auto">
                <Table>
                    <TableCaption>A list of your pengalaman records.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Photo</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pengalamen && pengalamen.length > 0 ? (
                            pengalamen.map((pengalaman) => (
                                <TableRow key={pengalaman.id}>
                                    <TableCell className="font-medium">{pengalaman.id}</TableCell>
                                    <TableCell>{pengalaman.name}</TableCell>
                                    <TableCell>{pengalaman.role}</TableCell>
                                    <TableCell>
                                        {pengalaman.photo ? (
                                            <img src={`/storage/${pengalaman.photo}`} alt={pengalaman.name} className="w-10 h-10 object-cover rounded" />
                                        ) : (
                                            <span className="text-gray-400">No photo</span>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={`/pengalamen/${pengalaman.id}/edit`}>Edit</Link>
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(pengalaman.id)}
                                                disabled={deletingId === pengalaman.id}
                                            >
                                                {deletingId === pengalaman.id ? "Deleting..." : "Delete"}
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center">
                                    No pengalaman records found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
