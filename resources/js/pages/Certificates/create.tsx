import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';

interface CertificateFormData {
    title: string;
    issuer: string;
    year: string;
    credential_url: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Certificate',
        href: '/certificates',
    },
    {
        title: 'Create Certificate',
        href: '#',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm<CertificateFormData>({
        title: '',
        issuer: '',
        year: new Date().getFullYear().toString(),
        credential_url: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/certificates');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Certificate" />
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
                        <label htmlFor="issuer" className="block mb-2">Issuer</label>
                        <Input
                            type="text"
                            id="issuer"
                            value={data.issuer}
                            onChange={(e) => setData('issuer', e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="year" className="block mb-2">Year</label>
                            <Input
                                type="number"
                                id="year"
                                min={1900}
                                max={new Date().getFullYear() + 10}
                                value={data.year}
                                onChange={(e) => setData('year', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="credential_url" className="block mb-2">Credential URL</label>
                            <Input
                                type="url"
                                id="credential_url"
                                value={data.credential_url}
                                onChange={(e) => setData('credential_url', e.target.value)}
                                placeholder="https://example.com/credential"
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