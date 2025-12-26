import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

interface Pengalaman {
    id: number;
    name: string;
    role: string;
    photo: string;
}

interface PageProps {
    pengalaman: Pengalaman;
}

interface FormData {
    name: string;
    role: string;
    photo: File | null;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Pengalaman",
        href: "/pengalamen",
    },
    {
        title: "Edit Pengalaman",
        href: "#",
    },
];

export default function Edit() {
    const { pengalaman } = usePage<PageProps>().props;
    const [formData, setFormData] = useState<FormData>({
        name: pengalaman.name || "",
        role: pengalaman.role || "",
        photo: null,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [processing, setProcessing] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const dataToSend = new FormData();
        dataToSend.append("name", formData.name);
        dataToSend.append("role", formData.role);
        if (formData.photo) {
            dataToSend.append("photo", formData.photo);
        }
        dataToSend.append("_method", "PUT");

        setProcessing(true);
        router.post(`/pengalamen/${pengalaman.id}`, dataToSend, {
            forceFormData: true,
            onError: (errs) => {
                setErrors(errs);
                setProcessing(false);
            },
            onSuccess: () => {
                setProcessing(false);
            }
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            // Allow larger files (e.g., up to 10MB = 10 * 1024 * 1024 bytes)
            const maxSize = 10 * 1024 * 1024; // 10MB in bytes
            if (file.size > maxSize) {
                alert(`File size exceeds 10MB. Please choose a smaller file. Current size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
                return;
            }

            setFormData({ ...formData, photo: file });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Pengalaman" />
            <div className="w-8/12 p-4 mx-auto">
                <form onSubmit={handleSubmit}>
                    {errors && Object.keys(errors).length > 0 && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertDescription>
                                <ul className="list-disc pl-5">
                                    {Object.entries(errors).map(([key, value]) => (
                                        <li key={key}>{value}</li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}

                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <Input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="role" className="block mb-2">Role</label>
                        <Input
                            type="text"
                            id="role"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photo" className="block mb-2">Photo</label>
                        <Input
                            type="file"
                            id="photo"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                        {pengalaman.photo && (
                            <div className="mt-2">
                                <p>Current Photo:</p>
                                <img
                                    src={`/storage/${pengalaman.photo}`}
                                    alt={pengalaman.name}
                                    className="w-32 h-32 object-cover rounded mt-1" // Changed from w-16 h-16 to w-32 h-32
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>Update</Button>
                        <Button type="button" variant="secondary" onClick={() => window.history.back()}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
