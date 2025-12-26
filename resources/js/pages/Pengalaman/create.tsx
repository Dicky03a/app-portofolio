import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

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
        title: "Create Pengalaman",
        href: "#",
    },
];

export default function Create() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        role: "",
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

        setProcessing(true);
        router.post("/pengalamen", dataToSend, {
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
            setFormData({ ...formData, photo: e.target.files[0] });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Pengalaman" />
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
                    </div>

                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>Create</Button>
                        <Button type="button" variant="secondary" onClick={() => window.history.back()}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
