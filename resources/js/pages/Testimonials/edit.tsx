import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';

interface Testimonial {
    id: number;
    message: string;
    name: string;
    position: string | null;
    avatar: string;
    avatar_url: string;
}

interface Props {
    testimonial: Testimonial;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Testimonials',
        href: '/testimonials',
    },
    {
        title: 'Edit Testimonial',
        href: '#',
    },
];

export default function Edit({ testimonial }: Props) {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        message: testimonial.message || '',
        name: testimonial.name || '',
        position: testimonial.position || '',
        avatar: null as File | null, // Don't pre-populate with existing file
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create FormData to handle file upload
        const formData = new FormData();
        formData.append('message', data.message);
        formData.append('name', data.name);
        formData.append('position', data.position);
        if (data.avatar) {
            formData.append('avatar', data.avatar);
        }
        formData.append('_method', 'PATCH'); // Laravel convention for PUT/PATCH via form

        post(`/testimonials/${testimonial.id}`, {
            data: formData,
            forceFormData: true,
            onError: () => {
                // Errors are handled by the backend validation
            }
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('avatar', e.target.files[0]);
            clearErrors('avatar'); // Clear error when user selects file
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Testimonial - ${testimonial.id}`} />
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
                        <label htmlFor="position" className="block mb-2">Position</label>
                        <Input
                            type="text"
                            id="position"
                            value={data.position}
                            onChange={(e) => setData('position', e.target.value)}
                            placeholder="e.g., Project Manager, CEO, etc."
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2">Message</label>
                        <Textarea
                            id="message"
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            rows={5}
                            placeholder="Enter the testimonial message..."
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="avatar" className="block mb-2">Avatar</label>
                        <Input
                            type="file"
                            id="avatar"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                        {data.avatar ? (
                            <div className="mt-2 text-sm text-gray-600">
                                Selected file: {data.avatar.name}
                            </div>
                        ) : (
                            <div className="mt-2">
                                <p className="text-sm text-gray-600">Current avatar:</p>
                                <img 
                                    src={testimonial.avatar_url} 
                                    alt={testimonial.name} 
                                    className="mt-1 w-16 h-16 object-cover rounded-full border"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null; // avoids infinite loop if placeholder also fails
                                        target.src = '/default-avatar.png';
                                    }}
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