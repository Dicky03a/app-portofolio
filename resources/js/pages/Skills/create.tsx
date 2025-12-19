import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SkillFormData {
    name: string;
    percentage: number;
    icon: File | null;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Skills',
        href: '/skills',
    },
    {
        title: 'Create Skill',
        href: '#',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors, clearErrors } = useForm<SkillFormData>({
        name: '',
        percentage: 0,
        icon: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create FormData to handle file upload
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('percentage', data.percentage.toString());
        if (data.icon) {
            formData.append('icon', data.icon);
        }

        post('/skills', {
            data: formData,
            forceFormData: true,
            onError: () => {
                // Errors are handled by the backend validation
            }
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Skill" />
            <div className='w-8/12 p-4 mx-auto'>
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
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="percentage" className="block mb-2">Percentage</label>
                        <Input
                            type="number"
                            id="percentage"
                            min={0}
                            max={100}
                            value={data.percentage}
                            onChange={(e) => setData('percentage', parseInt(e.target.value) || 0)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="icon" className="block mb-2">Icon (optional)</label>
                        <Input
                            type="file"
                            id="icon"
                            accept="image/*"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setData('icon', e.target.files[0]);
                                    clearErrors('icon'); // Clear error when user selects file
                                } else {
                                    setData('icon', null);
                                }
                            }}
                        />
                        {data.icon && (
                            <div className="mt-2 text-sm text-gray-600">
                                Selected file: {data.icon.name}
                            </div>
                        )}
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