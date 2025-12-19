import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';

interface ProjectFormData {
    title: string;
    tech_stack: string;
    thumbnail: File | null;
    short_description: string;
    github_url: string;
    demo_url: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
    {
        title: 'Create Project',
        href: '#',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        title: '',
        tech_stack: '',
        thumbnail: null,
        short_description: '',
        github_url: '',
        demo_url: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create FormData to handle file upload
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('tech_stack', data.tech_stack);
        if (data.thumbnail) {
            formData.append('thumbnail', data.thumbnail);
        }
        formData.append('short_description', data.short_description);
        formData.append('github_url', data.github_url || '');
        formData.append('demo_url', data.demo_url || '');

        post('/projects', {
            data: formData,
            forceFormData: true,
            onError: () => {
                // Errors are handled by the backend validation
            }
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('thumbnail', e.target.files[0]);
            clearErrors('thumbnail'); // Clear error when user selects file
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Project" />
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
                        <label htmlFor="title" className="block mb-2">Title</label>
                        <Input
                            type="text"
                            id="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="tech_stack" className="block mb-2">Tech Stack (comma separated)</label>
                        <Input
                            type="text"
                            id="tech_stack"
                            value={data.tech_stack}
                            onChange={(e) => setData('tech_stack', e.target.value)}
                            placeholder="e.g., React, Laravel, MySQL"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="thumbnail" className="block mb-2">Thumbnail</label>
                        <Input
                            type="file"
                            id="thumbnail"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                        {data.thumbnail && (
                            <div className="mt-2 text-sm text-gray-600">
                                Selected file: {data.thumbnail.name}
                            </div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="short_description" className="block mb-2">Short Description</label>
                        <Textarea
                            id="short_description"
                            value={data.short_description}
                            onChange={(e) => setData('short_description', e.target.value)}
                            rows={4}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="github_url" className="block mb-2">GitHub URL</label>
                            <Input
                                type="url"
                                id="github_url"
                                value={data.github_url}
                                onChange={(e) => setData('github_url', e.target.value)}
                                placeholder="https://github.com/username/repo"
                            />
                        </div>
                        <div>
                            <label htmlFor="demo_url" className="block mb-2">Demo URL</label>
                            <Input
                                type="url"
                                id="demo_url"
                                value={data.demo_url}
                                onChange={(e) => setData('demo_url', e.target.value)}
                                placeholder="https://example.com/demo"
                            />
                        </div>
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